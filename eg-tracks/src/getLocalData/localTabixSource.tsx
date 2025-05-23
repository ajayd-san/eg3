import _ from "lodash";
import { TabixIndexedFile } from "@gmod/tabix";
import { BlobFile } from "generic-filehandle";

import { ensureMaxListLength } from "../models/util";
// import ChromosomeInterval from "../../model/interval/ChromosomeInterval";

/**
 * A DataSource that gets BedRecords from remote bed files.  Designed to run in webworker context.  Only indexed bed
 * files supported.
 *
 * @author Daofeng Li based on Silas's version
 */
class LocalTabixSource {
  trackModel: any;
  blob: any;
  indexBlob?: any;
  dataLimit: number;
  tabix: TabixIndexedFile;
  /**
   * Prepares to fetch data from a bed file located at the input url.  Assumes the index is located at the same url,
   * plus a file extension of ".tbi".  This method will request and store the tabix index from this url immediately.
   *
   * @param {string} url - the url of the bed-like file to fetch.
   */

  constructor(trackModel, dataLimit = 100000) {
    if (trackModel.files[0].name.length > trackModel.files[1].name.length) {
      this.blob = trackModel.files[1];
      this.indexBlob = trackModel.files[0];
    } else {
      this.blob = trackModel.files[0];
      this.indexBlob = trackModel.files[1];
    }

    this.dataLimit = dataLimit;
    this.tabix = new TabixIndexedFile({
      filehandle: new BlobFile(this.blob),
      tbiFilehandle: new BlobFile(this.indexBlob),
    });
  }

  /**
   * Gets data for a list of chromosome intervals.
   *
   * @param {ChromosomeInterval[]} loci - locations for which to fetch data
   * @return {Promise<BedRecord[]>} Promise for the data
   */
  getData = async (loci, options) => {
    // let promises = loci.map(this.getDataForLocus);
    try {
      const promises = loci.map((locus) => {
        // graph container uses this source directly w/o initial track, so options is null
        let chrom =
          options && options.ensemblStyle
            ? locus.chr.replace("chr", "")
            : locus.chr;
        if (chrom === "M") {
          chrom = "MT";
        }
        return this.getDataForLocus(chrom, locus.start, locus.end);
      });

      const dataForEachLocus = await Promise.all(promises);
      if (options && options.ensemblStyle) {
        loci.forEach((locus, index) => {
          dataForEachLocus[index].forEach((f) => (f.chr = locus.chr));
        });
      }

      return _.flatten(dataForEachLocus);
    } catch (error) {
      return {
        error: true,
        message: `Failed to fetch data: ${error.message}`,
      };
    }
  };

  /**
   * Gets data for a single chromosome interval.
   *
   * @param {string} chr - genome coordinates
   * @param {number} start - genome coordinates
   * @param {stnumberring} end - genome coordinates
   * @return {Promise<BedRecord[]>} Promise for the data
   */
  getDataForLocus = async (chr, start, end) => {
    // const { chr, start, end } = locus;
    const rawlines: Array<any> = [];
    await this.tabix.getLines(chr, start, end, (line) => rawlines.push(line));
    let lines;
    if (rawlines.length > this.dataLimit) {
      lines = ensureMaxListLength(rawlines, this.dataLimit);
    } else {
      lines = rawlines;
    }
    return lines.map(this._parseLine);
  };

  /**
   * @param {string} line - raw string the bed-like file
   */
  _parseLine = (line) => {
    const columns = line.split("\t");
    if (columns.length < 3) {
      return;
    }
    let feature = {
      chr: columns[0],
      start: Number.parseInt(columns[1], 10),
      end: Number.parseInt(columns[2], 10),
      n: columns.length, // number of columns in initial data row
    };
    for (let i = 3; i < columns.length; i++) {
      // Copy the rest of the columns to the feature
      feature[i] = columns[i];
    }
    return feature;
  };
}

export default LocalTabixSource;

import _ from "lodash";
import { ScaleChoices } from "../../../models/ScaleChoices";
import TrackModel from "../../../models/TrackModel";

import { NumericalAggregator } from "./commonComponents/numerical/NumericalAggregator";
import OpenInterval from "../../../models/OpenInterval";
export const numericalTracks = { bigwig: "", bedgraph: "", vcf: "", methylc: "" }
export const numericalTracksGroup = { bigwig: "", bedgraph: "" }
export class GroupedTrackManager {
  /**
   * @returns list of groups found in the track list, their data, and their original indicies
   */
  public aggregator: NumericalAggregator;
  constructor() {
    this.aggregator = new NumericalAggregator();
  }

  getGroupScale(
    tracks: TrackModel[],
    trackData: any,
    width: number,
    viewWindow: OpenInterval,
    dataIdx: number,
    trackFetchedDataCache: any
  ): { [groupId: number]: { scale: TrackModel; min: {}; max: {} } } {
    // console.log(tracks);
    if (trackData) {
      const grouping = {}; // key: group id, value: {scale: 'auto'/'fixed', min: {trackid: xx,,,}, max: {trackid: xx,,,,}}
      for (let i = 0; i < tracks.length; i++) {
        // if (tracks[i].options.hasOwnProperty("group") && tracks[i].options.group) { // check up already done at trackContainer
        // console.log(tracks[i]);
        if (!(tracks[i].type in numericalTracksGroup)) {
          continue;
        }
        if (tracks[i].options.group) {
          const g = tracks[i].options.group;
          const tid = tracks[i].id;
          if (tracks[i].options.yScale === ScaleChoices.FIXED) {
            grouping[g] = {
              scale: ScaleChoices.FIXED,
              min: { [tid]: tracks[i].options.yMin },
              max: { [tid]: tracks[i].options.yMax },
            };
            break;
          }
          if (trackData[tid]) {
            const data = trackData[tid].data;
            // console.log(data);

            const xvalues = this.aggregator.xToValueMaker(
              data,
              trackData[tid].visRegion,
              width,
              tracks[i].options
            );

            trackFetchedDataCache.current[tid][dataIdx]["xvalues"] = xvalues;
            const max =
              xvalues[0] && xvalues[0].length
                ? _.max(xvalues[0].slice(viewWindow.start, viewWindow.end))
                : 1;
            const min =
              xvalues[1] && xvalues[1].length
                ? _.min(xvalues[1].slice(viewWindow.start, viewWindow.end))
                : 0;

            if (!grouping.hasOwnProperty(g)) {
              grouping[g] = {
                scale: ScaleChoices.AUTO,
                min: { [tid]: min },
                max: { [tid]: max },
              };
            } else {
              grouping[g].min[tid] = min;
              grouping[g].max[tid] = max;
            }
          }
        } else {
          const tid = tracks[i].id;
          if (trackData[tid]) {
            const data = trackData[tid].data;
            const xvalues = this.aggregator.xToValueMaker(
              data,
              trackData[tid].visRegion,
              width,
              {
                ...tracks[i].options,
                aggregateMethod: tracks[i].type === "vcf" ? "COUNT" : "MEAN",
              }
            );

            trackFetchedDataCache.current[tid][dataIdx]["xvalues"] = xvalues;
          }
        }
        // }
      }
      // console.log(grouping);
      return _.isEmpty(grouping) ? {} : grouping;
    }
    return {};
  }

  getGroupScaleWithXvalues(
    tracks: TrackModel[],
    trackData: any,
    viewWindow: OpenInterval
  ): { [groupId: number]: { scale: TrackModel; min: {}; max: {} } } {
    // console.log(tracks);
    if (trackData) {
      const grouping = {}; // key: group id, value: {scale: 'auto'/'fixed', min: {trackid: xx,,,}, max: {trackid: xx,,,,}}
      for (let i = 0; i < tracks.length; i++) {
        // if (tracks[i].options.hasOwnProperty("group") && tracks[i].options.group) { // check up already done at trackContainer
        // console.log(tracks[i]);
        if (!(tracks[i].type in numericalTracksGroup) || !tracks[i].options.group) {
          continue;
        }
        const g = tracks[i].options.group;
        const tid = tracks[i].id;
        if (tracks[i].options.yScale === ScaleChoices.FIXED) {
          grouping[g] = {
            scale: ScaleChoices.FIXED,
            min: { [tid]: tracks[i].options.yMin },
            max: { [tid]: tracks[i].options.yMax },
          };
          break;
        }
        if (trackData[tid]) {
          const xvalues = trackData[tid];
          // console.log(data);
          const max =
            xvalues[0] && xvalues[0].length
              ? _.max(xvalues[0].slice(viewWindow.start, viewWindow.end))
              : 1;
          const min =
            xvalues[1] && xvalues[1].length
              ? _.min(xvalues[1].slice(viewWindow.start, viewWindow.end))
              : 0;

          if (!grouping.hasOwnProperty(g)) {
            grouping[g] = {
              scale: ScaleChoices.AUTO,
              min: { [tid]: min },
              max: { [tid]: max },
            };
          } else {
            grouping[g].min[tid] = min;
            grouping[g].max[tid] = max;
          }
        }
        // }
      }
      // console.log(grouping);
      return _.isEmpty(grouping) ? {} : grouping;
    }
    return {};
  }
}

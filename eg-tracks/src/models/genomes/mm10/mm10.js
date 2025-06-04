import Chromosome from "../../Chromosome";
import Genome from "../../Genome";
import TrackModel from "../../TrackModel";
import cytobands from "./cytoBand.json";
import annotationTracks from "./annotationTracks.json";

const genome = new Genome("mm10", [
  new Chromosome("chr1", 195471971),
  new Chromosome("chr2", 182113224),
  new Chromosome("chr3", 160039680),
  new Chromosome("chr4", 156508116),
  new Chromosome("chr5", 151834684),
  new Chromosome("chr6", 149736546),
  new Chromosome("chr7", 145441459),
  new Chromosome("chr8", 129401213),
  new Chromosome("chr9", 124595110),
  new Chromosome("chr10", 130694993),
  new Chromosome("chr11", 122082543),
  new Chromosome("chr12", 120129022),
  new Chromosome("chr13", 120421639),
  new Chromosome("chr14", 124902244),
  new Chromosome("chr15", 104043685),
  new Chromosome("chr16", 98207768),
  new Chromosome("chr17", 94987271),
  new Chromosome("chr18", 90702639),
  new Chromosome("chr19", 61431566),
  new Chromosome("chrX", 171031299),
  new Chromosome("chrY", 91744698),
  new Chromosome("chrM", 16299),
]);

const navContext = genome.makeNavContext();
// jaspar chr6:52160767-52161357
// text track bed chr1:731189-812737
// text track longrange chr6:521000000-53000000
// dbedgraph : "chr6:52424900-52425400"

const defaultRegion = navContext.parse("chr6:52149465-52164219");
const defaultTracks = [
  new TrackModel({
    type: "ruler",
    name: "Ruler",
  }),
  new TrackModel({
    type: "geneAnnotation",
    name: "refGene",
    genome: "mm10",
  }),
  new TrackModel({
    type: "geneAnnotation",
    name: "gencodeCompVM25",
    genome: "mm10",
  }),
  new TrackModel({
    type: "repeatmasker",
    name: "RepeatMasker",
    url: "https://vizhub.wustl.edu/public/mm10/rmsk16.bb",
  }),
  // new TrackModel({
  //   name: "JASPAR Transcription Factors 2022",
  //   type: "jaspar",
  //   url: "https://hgdownload.soe.ucsc.edu/gbdb/mm10/jaspar/JASPAR2022.bb",
  // }),
  // new TrackModel({
  //   type: "dbedgraph",
  //   url: "https://wangftp.wustl.edu/~dli/test/a.dbg.gz",
  //   options: {
  //     dynamicLabels: [
  //       "stage1",
  //       "stage2",
  //       "stage3",
  //       "stage4",
  //       "stage5",
  //       "stage6",
  //       "stage7",
  //       "stage8",
  //       "stage9",
  //       "stage10",
  //     ],
  //     dynamicColors: ["red", "blue", "#00FF00", 0x000000],
  //     useDynamicColors: true,
  //   },
  //   showOnHubLoad: true,
  // }),
  // new TrackModel({
  //     type: "longrange",
  //     name: "ES-E14 ChIA-PET",
  //     url: "https://egg.wustl.edu/d/mm9/GSE28247_st3c.gz",
  // }),
  // new TrackModel({
  //     type: "biginteract",
  //     name: "test bigInteract",
  //     url: "https://epgg-test.wustl.edu/dli/long-range-test/interactExample3.inter.bb",
  // }),
  // new TrackModel({
  //   type: "repeatmasker",
  //   name: "RepeatMasker",
  //   url: "https://vizhub.wustl.edu/public/mm10/rmsk16.bb",
  // }),
  // new TrackModel({
  //     type: 'cool',
  //     name: 'Cool Track',
  //     url: 'CQMd6V_cRw6iCI_-Unl3PQ'
  // }),
  // new TrackModel({
  //     "type": "dynamicbed",
  //     "name": "dynamic bed",
  //     "showOnHubLoad": true,
  //     "tracks": [
  //     {
  //         "type": "bed",
  //         "url": "https://vizhub.wustl.edu/public/misc/dynamicTrack/bed/peak1.bed.gz",
  //         "name": "peak1"
  //     },
  //     {
  //         "type": "bed",
  //         "url": "https://vizhub.wustl.edu/public/misc/dynamicTrack/bed/peak2.bed.gz",
  //         "name": "peak2"
  //     }
  //     ]
  // })
];

const publicHubData = {
  "4D Nucleome Network":
    "The 4D Nucleome Network aims to understand the principles underlying nuclear " +
    "organization in space and time, the role nuclear organization plays in gene expression and cellular function, " +
    "and how changes in nuclear organization affect normal development as well as various diseases.  The program is " +
    "developing novel tools to explore the dynamic nuclear architecture and its role in gene expression programs, " +
    "models to examine the relationship between nuclear organization and function, and reference maps of nuclear" +
    "architecture in a variety of cells and tissues as a community resource.",
  "Encyclopedia of DNA Elements (ENCODE)":
    "The Encyclopedia of DNA Elements (ENCODE) Consortium is an " +
    "international collaboration of research groups funded by the National Human Genome Research Institute " +
    "(NHGRI). The goal of ENCODE is to build a comprehensive parts list of functional elements in the human " +
    "genome, including elements that act at the protein and RNA levels, and regulatory elements that control " +
    "cells and circumstances in which a gene is active.",
  "Toxicant Exposures and Responses by Genomic and Epigenomic Regulators of Transcription (TaRGET)":
    "The TaRGET(Toxicant Exposures and Responses by Genomic and Epigenomic Regulators of Transcription) program is a research consortium funded by the National Institute of Environmental Health Sciences (NIEHS). The goal of the collaboration is to address the role of environmental exposures in disease pathogenesis as a function of epigenome perturbation, including understanding the environmental control of epigenetic mechanisms and assessing the utility of surrogate tissue analysis in mouse models of disease-relevant environmental exposures.",
  "3D structures": "3D stucure data collection",
  "Image collection":
    "Image data from the Image Data Resource (IDR) or 4DN. Images are mapped to genomic coordinates with annotation gene id or symbol.",
};

const publicHubList = [
];

const MM10 = {
  genome: genome,
  navContext: navContext,
  cytobands: cytobands,
  defaultRegion: defaultRegion,
  defaultTracks: defaultTracks,
  twoBitURL: "https://vizhub.wustl.edu/public/mm10/mm10.2bit",
  publicHubData,
  publicHubList,
  annotationTracks,
};

export default MM10;

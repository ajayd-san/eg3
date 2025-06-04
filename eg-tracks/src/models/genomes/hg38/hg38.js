import Chromosome from "../../Chromosome";
import Genome from "../../Genome";
import TrackModel from "../../TrackModel";
import cytobands from "./cytoBand.json";
import annotationTracks from "./annotationTracks.json";

const genome = new Genome("hg38", [
  new Chromosome("chr1", 248956422),
  new Chromosome("chr2", 242193529),
  new Chromosome("chr3", 198295559),
  new Chromosome("chr4", 190214555),
  new Chromosome("chr5", 181538259),
  new Chromosome("chr6", 170805979),
  new Chromosome("chr7", 159345973),
  new Chromosome("chr8", 145138636),
  new Chromosome("chr9", 138394717),
  new Chromosome("chr10", 133797422),
  new Chromosome("chr11", 135086622),
  new Chromosome("chr12", 133275309),
  new Chromosome("chr13", 114364328),
  new Chromosome("chr14", 107043718),
  new Chromosome("chr15", 101991189),
  new Chromosome("chr16", 90338345),
  new Chromosome("chr17", 83257441),
  new Chromosome("chr18", 80373285),
  new Chromosome("chr19", 58617616),
  new Chromosome("chr20", 64444167),
  new Chromosome("chr21", 46709983),
  new Chromosome("chr22", 50818468),
  new Chromosome("chrM", 16569),
  new Chromosome("chrX", 156040895),
  new Chromosome("chrY", 57227415),
]);
//   //chr7:27053397-27373765
//   // chr7:10000-20000
//   //testing finemode  27213325-27213837, 27195171-27202238
//   //chr7:157159564-158159564

//chr7:26805572-26825594
// biginteract chr3:63836292-64336395
// https://vizhub.wustl.edu/public/g3d/hg19/GSM3271347_gm12878_01.g3d
// chr7:74083652-74084068 dynseq cromorsome
// broken area chr7:27212313-27212454
// long range chr7:23208969-31218193
// for renmora
// for omer4dn chr5:114534673-136928518
const navContext = genome.makeNavContext();
const defaultRegion = navContext.parse("chr7:27053397-27373765");

const defaultTracks = [
  new TrackModel({
    type: "ruler",
    name: "Ruler",
  }),
  //Normal Nav and ExpandedLoci: when nonprimaryGenome, has SVG AND CANVAS______________________
  // new TrackModel({
  //   type: "hi",
  //   url: "",
  //   name: "NOTSUPPORTEDTRACEXAMPLE",
  // }),

  // new TrackModel({
  //   type: "refbed",
  //   name: "mm10 gencode basic",
  //   url: "https://vizhub.wustl.edu/public/tmp/gencodeM18_load_basic_Gene.bed.gz",
  //   options: {
  //     categoryColors: {
  //       coding: "rgb(101,1,168)",
  //       nonCoding: "rgb(1,193,75)",
  //       pseudo: "rgb(230,0,172)",
  //       problem: "rgb(224,2,2)",
  //       other: "rgb(128,128,128)",
  //     },
  //   },
  // }),

  new TrackModel({
    type: "geneAnnotation",
    name: "refGene",
    genome: "hg38",
  }),
  new TrackModel({
    type: "geneAnnotation",
    name: "gencodeV47",
    genome: "hg38",
  }),
  // new TrackModel({
  //   type: "vcf",
  //   name: "testVcf",
  //   genome: "hg38",
  //   url: "https://wangftp.wustl.edu/~jmacias/SMaHT_HapMap_Truth_Set/SMaHT_MCGB_Graph_VCFs/9188e8.vcf.gz",
  // }),
  //   new TrackModel({
  //     type: "geneAnnotation",
  //     name: "gencodeV39",
  //     genome: "hg38",
  //   }),
  // new TrackModel({
  //   type: "bigbed",
  //   name: "test bigbed",
  //   url: "https://vizhub.wustl.edu/hubSample/hg19/bigBed1",
  // }),

  //   new TrackModel({
  //     type: "g3d",
  //     url: "https://vizhub.wustl.edu/public/g3d/hg19/GSM3271347_gm12878_01.g3d",
  //     name: "example 3d track",
  //     showOnHubLoad: true,
  //   }),
  //   new TrackModel({
  //     type: "g3d",
  //     url: "https://vizhub.wustl.edu/public/g3d/hg19/GSM3271347_gm12878_01.g3d",
  //     name: "example 3d track",
  //     showOnHubLoad: true,
  //   }),
  //   new TrackModel({
  //     type: "g3d",
  //     url: "https://vizhub.wustl.edu/public/g3d/hg19/GSM3271347_gm12878_01.g3d",
  //     name: "example 3d track",
  //     showOnHubLoad: true,
  //   }),

  // new TrackModel({
  //   type: "snp",
  //   name: "snp",
  //   genome: "hg38",
  // }),
  new TrackModel({
    type: "geneAnnotation",
    name: "MANE_select_1.4",
    label: "MANE selection v1.4",
    genome: "hg38",
  }),
  new TrackModel({
    type: "repeatmasker",
    name: "RepeatMasker",
    url: "https://vizhub.wustl.edu/public/hg38/rmsk16.bb",
  }),
  // new TrackModel({
  //   type: "bigwig",
  //   name: "example bigwig",
  //   url: "",
  //   options: {
  //     color: "blue",
  //   },
  // }),
  // new TrackModel({
  //   type: "bigwig",
  //   name: "example bigwig",
  //   url: "https://vizhub.wustl.edu/hubSample/hg19/GSM429321.bigWig",
  //   options: {
  //     color: "blue",
  //   },
  // }),

  // new TrackModel({
  //   type: "bigwig",
  //   name: "example bigwig",
  //   url: "https://vizhub.wustl.edu/public/tmp/TW551_20-5-bonemarrow_MRE.CpG.bigWig",
  //   options: {
  //     color: "blue",
  //   },
  // }),
  // new TrackModel({
  //   type: "bigwig",
  //   name: "example bigwig",
  //   url: "https://vizhub.wustl.edu/public/tmp/TW463_20-5-bonemarrow_MeDIP.bigWig",
  //   options: {
  //     color: "blue",
  //   },
  // }),

  // new TrackModel({
  //   type: "bed",
  //   name: "mm10 bed",
  //   url: "https://epgg-test.wustl.edu/d/mm10/mm10_cpgIslands.bed.gz",
  // }),
  // new TrackModel({
  //   type: "modbed",
  //   name: "examplemod",
  //   url: "https://vizhub.wustl.edu/public/hg38/modbed/HG00621.remora.modbed.gz",
  // }),

  // new TrackModel({
  //   type: "matplot",
  //   name: "matplot wrap",
  //   tracks: [
  //     {
  //       type: "bigwig",
  //       url: "https://vizhub.wustl.edu/public/tmp/TW463_20-5-bonemarrow_MeDIP.bigWig",
  //       name: "MeDIP",
  //       options: {
  //         color: "red",
  //         backgroundColor: "#FFE7AB",
  //       },
  //       metadata: {
  //         sample: "bone",
  //         assay: "MeDIP",
  //       },
  //     },
  //     {
  //       type: "bigwig",
  //       url: "https://vizhub.wustl.edu/public/tmp/TW551_20-5-bonemarrow_MRE.CpG.bigWig",
  //       name: "MRE",
  //       options: {
  //         color: "blue",
  //         backgroundColor: "#C0E3CC",
  //       },
  //       metadata: {
  //         sample: "bone",
  //         assay: "MRE",
  //       },
  //     },
  //   ],
  // }),

  // new TrackModel({
  //   type: "dynseq",
  //   name: "example dynseq",
  //   url: "https://target.wustl.edu/dli/tmp/deeplift.example.bw",
  //   options: {
  //     color: "blue",
  //     height: 100,
  //   },
  // }),
  // new TrackModel({
  //   type: "methylc",
  //   name: "H1",
  //   url: "https://vizhub.wustl.edu/public/hg19/methylc2/h1.liftedtohg19.gz",
  //   options: {
  //     label: "Methylation",
  //     colorsForContext: {
  //       CG: { color: "#648bd8", background: "#d9d9d9" },
  //       CHG: { color: "#ff944d", background: "#ffe0cc" },
  //       CHH: { color: "#ff00ff", background: "#ffe5ff" },
  //     },
  //     depthColor: "#01E9FE",
  //   },
  // }),
  // new TrackModel({
  //   type: "methylc",
  //   name: "H1",
  //   url: "https://vizhub.wustl.edu/public/hg19/methylc2/h1.liftedtohg19.gz",
  //   options: {
  //     label: "Methylation",
  //     colorsForContext: {
  //       CG: { color: "#648bd8", background: "#d9d9d9" },
  //       CHG: { color: "#ff944d", background: "#ffe0cc" },
  //       CHH: { color: "#ff00ff", background: "#ffe5ff" },
  //     },
  //     depthColor: "#01E9FE",
  //   },
  // }),

  // new TrackModel({
  //   name: "vertebratephastCons46way",
  //   label: "Vertebrate PhastCons 46-way",
  //   filetype: "bedgraph",
  //   url: "https://egg.wustl.edu/d/hg19/vertebratephastCons46way.gz",
  //   height: 50,
  //   options: { color: "#006385" },
  // }),
  // new TrackModel({
  //   type: "boxplot",
  //   name: "example boxplot",
  //   url: "https://vizhub.wustl.edu/public/tmp/TW463_20-5-bonemarrow_MeDIP.bigWig",
  // }),

  // new TrackModel({
  //   type: "biginteract",
  //   name: "test bigInteract",
  //   url: "https://epgg-test.wustl.edu/dli/long-range-test/interactExample3.inter.bb",
  // }),
  // new TrackModel({
  //   name: "dynamic hic",
  //   type: "dynamichic",
  //   options: {
  //     dynamicColors: ["red", "blue"],
  //     useDynamicColors: true,
  //   },
  //   tracks: [
  //     {
  //       type: "hic",
  //       url: "https://epgg-test.wustl.edu/dli/long-range-test/test.hic",
  //     },
  //     {
  //       name: "olfactory receptor cell in situ Hi-C [4DNFIXKC48TK]",
  //       type: "hic",
  //       url: "https://epgg-test.wustl.edu/dli/long-range-test/test.hic",
  //     },
  //   ],
  //   showOnHubLoad: true,
  // }),

  // new TrackModel({
  //   type: "dynamicbed",
  //   name: "dynamic bed",
  //   showOnHubLoad: true,
  //   tracks: [
  //     {
  //       type: "bed",
  //       url: "https://vizhub.wustl.edu/public/misc/dynamicTrack/bed/peak1.bed.gz",
  //       name: "peak1",
  //     },
  //     {
  //       type: "bed",
  //       url: "https://vizhub.wustl.edu/public/misc/dynamicTrack/bed/peak2.bed.gz",
  //       name: "peak2",
  //     },
  //   ],
  // }),
  // new TrackModel({
  //   type: "dynamic",
  //   name: "dynamic plot example",
  //   showOnHubLoad: true,
  //   tracks: [
  //     {
  //       type: "bigwig",
  //       url: "https://vizhub.wustl.edu/public/misc/dynamicTrack/markers/ENCFF051LQD_H3K4me1.bigWig",
  //       name: "CH12 H3K4me1",
  //     },
  //     {
  //       type: "bigwig",
  //       url: "https://vizhub.wustl.edu/public/misc/dynamicTrack/markers/ENCFF096TSJ_H3K27ac.bigWig",
  //       name: "CH12 H3K27ac",
  //     },
  //     {
  //       type: "bigwig",
  //       url: "https://vizhub.wustl.edu/public/misc/dynamicTrack/markers/ENCFF011TAF_H3K4me3.bigWig",
  //       name: "CH12 H3K4me3",
  //     },
  //     {
  //       type: "bigwig",
  //       url: "https://vizhub.wustl.edu/public/misc/dynamicTrack/markers/ENCFF700XWH_H3K36me3.bigWig",
  //       name: "CH12 H3K36me3",
  //     },
  //   ],
  // }),

  // new TrackModel({
  //   type: "hic",
  //   name: "test hic",
  //   url: "https://epgg-test.wustl.edu/dli/long-range-test/test.hic",
  //   // "options": {
  //   //     "displayMode": "arc"
  //   // }
  //   // metadata: { genome: "mm10" },
  // }),
  // new TrackModel({

  //   type: "geneAnnotation",
  //   name: "refGene",
  //   genome: "mm10",
  //   metadata: { genome: "mm10" },
  // }),
  // new TrackModel({
  //   type: "geneAnnotation",
  //   name: "refGene",
  //   genome: "hg38",
  //   metadata: { genome: "mm10" },
  // }),
  // new TrackModel({
  //   type: "geneAnnotation",
  //   name: "gencodeV39",
  //   genome: "hg38",
  // }),

  // new TrackModel({
  //   name: "hg38tomm10",
  //   label: "Query mouse mm10 to hg38 blastz",
  //   type: "genomealign",
  //   querygenome: "mm10",
  //   filetype: "genomealign",
  //   url: "https://vizhub.wustl.edu/public/hg38/weaver/hg38_mm10_axt.gz",
  // }),
  // new TrackModel({
  //   name: "hg38topantro5",
  //   label: "query Chimpanzee panTro5 to hg38 blastz",
  //   querygenome: "panTro5",
  //   filetype: "genomealign",
  //   url: "https://vizhub.wustl.edu/public/hg38/weaver/hg38_panTro5_axt.gz",
  //   details: {
  //     source: "UCSC Genome Browser",
  //     "download url":
  //       "https://hgdownload.soe.ucsc.edu/goldenPath/hg38/vsPanTro5/",
  //   },
  // }),

  // new TrackModel({
  //   name: "hg38tomm10",
  //   label: "Query mouse mm10 to hg38 blastz",
  //   type: "genomealign",
  //   querygenome: "mm10",
  //   filetype: "genomealign",
  //   url: "",
  // }),
  // new TrackModel({
  //   type: "categorical",
  //   name: "ChromHMM",
  //   url: "https://egg.wustl.edu/d/hg19/E017_15_coreMarks_dense.gz",
  //   options: {
  //     category: {
  //       1: { name: "Active TSS", color: "#ff0000" },
  //       2: { name: "Flanking Active TSS", color: "#ff4500" },
  //       3: { name: "Transcr at gene 5' and 3'", color: "#32cd32" },
  //       4: { name: "Strong transcription", color: "#008000" },
  //       5: { name: "Weak transcription", color: "#006400" },
  //       6: { name: "Genic enhancers", color: "#c2e105" },
  //       7: { name: "Enhancers", color: "#ffff00" },
  //       8: { name: "ZNF genes & repeats", color: "#66cdaa" },
  //       9: { name: "Heterochromatin", color: "#8a91d0" },
  //       10: { name: "Bivalent/Poised TSS", color: "#cd5c5c" },
  //       11: { name: "Flanking Bivalent TSS/Enh", color: "#e9967a" },
  //       12: { name: "Bivalent Enhancer", color: "#bdb76b" },
  //       13: { name: "Repressed PolyComb", color: "#808080" },
  //       14: { name: "Weak Repressed PolyComb", color: "#c0c0c0" },
  //       15: { name: "Quiescent/Low", color: "#ffffff" },
  //     },
  //   },
  // }),

  // new TrackModel({
  //   name: "dynamic long",
  //   type: "dynamiclongrange",
  //   options: {
  //     dynamicColors: ["red", "blue"],
  //     useDynamicColors: true,
  //   },
  //   tracks: [
  //     {
  //       type: "longrange",
  //       url: "https://egg.wustl.edu/d/mm9/GSE28247_st3c.gz",
  //     },
  //     {
  //       name: "olfactory receptor cell in situ Hi-C [4DNFIXKC48TK]",
  //       type: "longrange",
  //       url: "https://egg.wustl.edu/d/mm9/GSE28247_st3c.gz",
  //     },
  //   ],
  //   showOnHubLoad: true,
  // }),
  // new TrackModel({
  //   type: "longrange",
  //   name: "ES-E14 ChIA-PET",
  //   url: "https://egg.wustl.edu/d/mm9/GSE28247_st3c.gz",
  // }),
  // new TrackModel({
  //   type: "biginteract",
  //   name: "test bigInteract",
  //   url: "https://epgg-test.wustl.edu/dli/long-range-test/interactExample3.inter.bb",
  // }),
];
// const defaultTracks = [
//   new TrackModel({
//     type: "ruler",
//     name: "Ruler",
//   }),
//   new TrackModel({
//     type: "geneAnnotation",
//     name: "refGene",
//     genome: "hg38",
//   }),
//   new TrackModel({
//     type: "geneAnnotation",
//     name: "gencodeV39",
//     genome: "hg38",
//   }),
//   new TrackModel({
//     type: "geneAnnotation",
//     name: "MANE_select_1.0",
//     label: "MANE selection v1.0",
//     genome: "hg38",
//   }),
//   new TrackModel({
//     type: "repeatmasker",
//     name: "RepeatMasker",
//     url: "https://vizhub.wustl.edu/public/hg38/rmsk16.bb",
//   }),
// ];

//TODO: what is this for? 
const publicHubData = {
  "4D Nucleome Network":
    "The 4D Nucleome Network aims to understand the principles underlying nuclear organization " +
    "in space and time, the role nuclear organization plays in gene expression and cellular function, and how changes " +
    "in nuclear organization affect normal development as well as various diseases. The program is developing novel " +
    "tools to explore the dynamic nuclear architecture and its role in gene expression programs, " +
    "models to examine the relationship between nuclear organization and function, " +
    "and reference maps of nuclear architecture in a variety of cells and tissues as a community resource.",
  "Encyclopedia of DNA Elements (ENCODE)":
    "The Encyclopedia of DNA Elements (ENCODE) Consortium is an " +
    "international collaboration of research groups funded by the National Human Genome Research Institute " +
    "(NHGRI). The goal of ENCODE is to build a comprehensive parts list of functional elements in the human " +
    "genome, including elements that act at the protein and RNA levels, and regulatory elements that control " +
    "cells and circumstances in which a gene is active.",
  "SARS-CoV-2 Host Transcriptional Responses (Blanco-Melo, et al. 2020) Database":
    "A database consisting of host (human) transcriptional changes resulting from SARS-CoV-2 and other respiratory infections in in vitro, ex vivo, and in vivo systems.",
  "Reference human epigenomes from Roadmap Epigenomics Consortium":
    "The NIH Roadmap Epigenomics Mapping Consortium was launched with the goal of producing a public resource of human epigenomic data to catalyze basic biology and disease-oriented research. The Consortium leverages experimental pipelines built around next-generation sequencing technologies to map DNA methylation, histone modifications, chromatin accessibility and small RNA transcripts in stem cells and primary ex vivo tissues selected to represent the normal counterparts of tissues and organ systems frequently involved in human disease (quoted from Roadmap website).",
  "Image collection":
    "Image data from the Image Data Resource (IDR) or 4DN. Images are mapped to genomic coordinates with annotation gene id or symbol.",
  "Human Pangenome Reference Consortium (HPRC)":
    "The Human Pangenome Reference Consortium (HPRC) is a project funded by the National Human Genome Research Institute to sequence and assemble genomes from individuals from diverse populations in order to better represent genomic landscape of diverse human populations.",
};

const publicHubList = [
  {
    collection: "local testing public hub",
    name: "abc",
    numTracks: 1,
    oldHubFormat: false,
    url: "http://localhost/hub.json",
    description:
      "modbed format methylation track on PacBio and ONT platforms, for 6 sample sources.",
  },
];

const HG38 = {
  genome: genome,
  navContext: navContext,
  cytobands: cytobands,
  defaultRegion: defaultRegion,
  defaultTracks: defaultTracks,
  twoBitURL: "https://vizhub.wustl.edu/public/hg38/hg38.2bit",
  publicHubData,
  publicHubList,
  annotationTracks,
};

export default HG38;

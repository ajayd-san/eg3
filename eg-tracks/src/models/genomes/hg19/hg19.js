import Chromosome from "../../Chromosome";
import Genome from "../../Genome";
import TrackModel from "../../TrackModel";
import cytobands from "./cytoBand.json";
import annotationTracks from "./annotationTracks.json";

const genome = new Genome("hg19", [
    new Chromosome("chr1", 249250621),
    new Chromosome("chr2", 243199373),
    new Chromosome("chr3", 198022430),
    new Chromosome("chr4", 191154276),
    new Chromosome("chr5", 180915260),
    new Chromosome("chr6", 171115067),
    new Chromosome("chr7", 159138663),
    new Chromosome("chr8", 146364022),
    new Chromosome("chr9", 141213431),
    new Chromosome("chr10", 135534747),
    new Chromosome("chr11", 135006516),
    new Chromosome("chr12", 133851895),
    new Chromosome("chr13", 115169878),
    new Chromosome("chr14", 107349540),
    new Chromosome("chr15", 102531392),
    new Chromosome("chr16", 90354753),
    new Chromosome("chr17", 81195210),
    new Chromosome("chr18", 78077248),
    new Chromosome("chr19", 59128983),
    new Chromosome("chr20", 63025520),
    new Chromosome("chr21", 48129895),
    new Chromosome("chr22", 51304566),
    new Chromosome("chrX", 155270560),
    new Chromosome("chrY", 59373566),
    new Chromosome("chrM", 16571),
]);

const navContext = genome.makeNavContext();
const defaultRegion = navContext.parse("chr7:27053397-27373765");
const defaultTracks = [
    new TrackModel({
        type: "ruler",
        name: "Ruler",
    }),
    // new TrackModel({
    //     type: "bigwig",
    //     name: "test bigwig",
    //     url: "https://vizhub.wustl.edu/hubSample/hg19/GSM429321.bigWig",
    // }),
    new TrackModel({
        type: "geneAnnotation",
        name: "refGene",
        genome: "hg19",
        options: {
            maxRows: 10,
        },
    }),
    new TrackModel({
        type: "geneAnnotation",
        name: "gencodeV47",
        genome: "hg19",
        options: {
            maxRows: 10,
        },
    }),
    new TrackModel({
        type: "bigwig",
        name: "TESt",
        genome: "hg19",
        url: "https://vizhub.wustl.edu/public/tmp/TW463_20-5-bonemarrow_MeDIP.bigWig"
    }),
    new TrackModel({
        type: "repeatmasker",
        name: "RepeatMasker",
        url: "https://vizhub.wustl.edu/public/hg19/rmsk16.bb",
    }),
    // new TrackModel({
    //     type: "bam",
    //     name: "Test bam",
    //     url: "https://wangftp.wustl.edu/~dli/test/a.bam"
    // }),
    // new TrackModel({
    //     type: 'bigbed',
    //     name: 'test bigbed',
    //     url: 'https://vizhub.wustl.edu/hubSample/hg19/bigBed1'
    // }),
    // new TrackModel({
    //     type: "methylc",
    //     name: "Methylation",
    //     url: "https://vizhub.wustl.edu/public/hg19/methylc2/h1.liftedtohg19.gz"
    // }),
    // new TrackModel({
    //     type: "categorical",
    //     name: "ChromHMM",
    //     url: "https://egg.wustl.edu/d/hg19/E017_15_coreMarks_dense.gz",
    //     options: {
    //         category: {
    //             "1": {name: "Active TSS", color: "#ff0000"},
    //             "2": {name: "Flanking Active TSS", color: "#ff4500"},
    //             "3": {name: "Transcr at gene 5' and 3'", color: "#32cd32"},
    //             "4": {name: "Strong transcription", color: "#008000"},
    //             "5": {name: "Weak transcription", color: "#006400"},
    //             "6": {name: "Genic enhancers", color: "#c2e105"},
    //             "7": {name: "Enhancers", color: "#ffff00"},
    //             "8": {name: "ZNF genes & repeats", color: "#66cdaa"},
    //             "9": {name: "Heterochromatin", color: "#8    a91d0"},
    //             "10": {name: "Bivalent/Poised TSS", color: "#cd5c5c"},
    //             "11": {name: "Flanking Bivalent TSS/Enh", color: "#e9967a"},
    //             "12": {name: "Bivalent Enhancer", color: "#bdb76b"},
    //             "13": {name: "Repressed PolyComb", color: "#808080"},
    //             "14": {name: "Weak Repressed PolyComb", color: "#c0c0c0"},
    //             "15": {name: "Quiescent/Low", color: "#ffffff"}
    //           }
    //     }
    // }),
    // new TrackModel({
    //     type: "hic",
    //     name: "test hic",
    //     url: "https://epgg-test.wustl.edu/dli/long-range-test/test.hic",
    //     options: {
    //         displayMode: 'arc'
    //     }
    // }),
    // new TrackModel({
    //     name: 'hg19 to mm10 alignment',
    //     type: "genomealign",
    //     metadata: {
    //         genome: 'mm10'
    //     }
    // }),
    // new TrackModel({
    //     type: 'geneAnnotation',
    //     name: 'refGene',
    //     genome: 'mm10',
    //     options: {
    //         maxRows: 10
    //     },
    //     metadata: {
    //         genome: 'mm10'
    //     }
    // }),
    // new TrackModel({
    //     name: 'mm10 bigwig',
    //     type: "bigwig",
    //     url: "https://epgg-test.wustl.edu/d/mm10/ENCFF577HVF.bigWig",
    //     metadata: {
    //         genome: 'mm10'
    //     }
    // }),
    // new TrackModel({
    //     type: "ruler",
    //     name: "mm10 Ruler",
    //     metadata: {
    //         genome: 'mm10'
    //     }
    // }),
    // new TrackModel({
    //     type: "bed",
    //     name: "mm10 bed",
    //     url: "https://wangftp.wustl.edu/~rsears/Stuart_Little/ATAC_080818/Bruce4_sub120_extendedto120_DownSample.bed.gz",
    //     metadata: {
    //         genome: "mm10"
    //     }
    // })
];

const publicHubData = {
    "Encyclopedia of DNA Elements (ENCODE)":
        "The Encyclopedia of DNA Elements (ENCODE) Consortium is an " +
        "international collaboration of research groups funded by the National Human Genome Research Institute " +
        "(NHGRI). The goal of ENCODE is to build a comprehensive parts list of functional elements in the human " +
        "genome, including elements that act at the protein and RNA levels, and regulatory elements that control " +
        "cells and circumstances in which a gene is active.",
    "Reference human epigenomes from Roadmap Epigenomics Consortium":
        "The NIH Roadmap Epigenomics Mapping Consortium was launched with the goal of producing a public resource of human epigenomic data to catalyze basic biology and disease-oriented research. The Consortium leverages experimental pipelines built around next-generation sequencing technologies to map DNA methylation, histone modifications, chromatin accessibility and small RNA transcripts in stem cells and primary ex vivo tissues selected to represent the normal counterparts of tissues and organ systems frequently involved in human disease (quoted from Roadmap website).",
    "3D structures":
        "3D stucure data collected from: Tan L, Xing D, Chang CH, Li H et al. Three-dimensional genome structures of single diploid human cells. Science 2018 Aug 31;361(6405):924-928. The 3dg data were used and converted to g3d format using g3dtools.",
    "Image collection":
        "Image data from the Image Data Resource (IDR) or 4DN. Images are mapped to genomic coordinates with annotation gene id or symbol.",
};

const publicHubList = [
];

const HG19 = {
    genome,
    navContext,
    cytobands,
    defaultRegion,
    defaultTracks,
    publicHubList,
    publicHubData,
    annotationTracks,
    twoBitURL: "https://vizhub.wustl.edu/public/hg19/hg19.2bit",
};

export default HG19;

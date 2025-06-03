export interface Genome {
    name: string,
    logoUrl: string,
    croppedUrl?: string,
    versions: string[]
}

export const GENOME_LIST: Genome[] = [
    {
        "name": "Human",
        "logoUrl": "default/human.png",
        "croppedUrl": "cropped/human.jpeg",
        "versions": ["hg38", "hg19", "t2t-chm13-v2.0", "t2t-chm13-v1.1"]
    },
    {
        "name": "Mouse",
        "logoUrl": "default/mouse.png",
        "croppedUrl": "cropped/mouse.jpeg",
        "versions": ["mm39", "mm10", "mm9"]
    },
]

export const versionToLogoUrl: Record<string, { logoUrl: string, croppedUrl: string | undefined }> = {};


for (const genome of GENOME_LIST) {
    for (const version of genome.versions) {
        versionToLogoUrl[version] = { logoUrl: genome.logoUrl, croppedUrl: genome.croppedUrl };
    }
}

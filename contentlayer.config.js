import { defineDocumentType, makeSource } from 'contentlayer/source-files';

export const Draft = defineDocumentType(() => ({
  name: 'Draft',
  filePathPattern: `drafts/*.mdx`,
  contentType: 'mdx',
  fields: {
    dbname: {
      type: 'string',
    },
    albumtitle: {
      type: 'string',
    },
    albumartist: {
      type: 'string',
    },
    albumImageUrl: {
      type: 'string',
    },
    guest: {
      type: 'string',
    },
    episodeUrl: {
      type: 'string',
    },
    url: {
      type: 'string',
    },
    sadhanaslug: {
      type: 'string',
    },
    title: {
      type: 'string',
    },
    music: {
      type: 'string',
    },
    teacher: {
      type: 'string',
    },
    teacherInstagram: {
      type: 'string',
    },
    yogatype: {
      type: 'string',
    },
    date: {
      type: 'string',
    },
    index: {
      type: 'number',
    },
    loomRecording: {
      type: 'string',
    },
    building: {
      type: 'string',
    },
    sessionDuration: {
      type: 'number',
    },
    writtenAt: {
      type: 'date',
    },
  },
}));

export const KishanPage = defineDocumentType(() => ({
  name: 'KishanPage',
  filePathPattern: `kishan/*.mdx`,
  contentType: 'mdx',
  fields: {
    dbname: {
      type: 'string',
    },
  },
}));

export const CuratoryPage = defineDocumentType(() => ({
  name: 'CuratoryPage',
  filePathPattern: `curatory/*.mdx`,
  contentType: 'mdx',
  fields: {
    dbname: {
      type: 'string',
    },
  },
}));

export const YogaPage = defineDocumentType(() => ({
  name: 'YogaPage',
  filePathPattern: `yoga/*.mdx`,
  contentType: 'mdx',
  fields: {
    dbname: {
      type: 'string',
    },
  },
}));

export const ProgrammingPage = defineDocumentType(() => ({
  name: 'ProgrammingPage',
  filePathPattern: `programming/*.mdx`,
  contentType: 'mdx',
  fields: {
    dbname: {
      type: 'string',
    },
  },
}));

export const EducationPage = defineDocumentType(() => ({
  name: 'EducationPage',
  filePathPattern: `education/*.mdx`,
  contentType: 'mdx',
  fields: {
    dbname: {
      type: 'string',
    },
  },
}));

export const PodcastPage = defineDocumentType(() => ({
  name: 'PodcastPage',
  filePathPattern: `podcast/*.mdx`,
  contentType: 'mdx',
  fields: {
    dbname: {
      type: 'string',
    },
  },
}));

export const SadhanaPage = defineDocumentType(() => ({
  name: 'SadhanaPage',
  filePathPattern: `sadhana/*.mdx`,
  contentType: 'mdx',
  fields: {
    dbname: {
      type: 'string',
    },
  },
}));

export const XilemaPage = defineDocumentType(() => ({
  name: 'XilemaPage',
  filePathPattern: `xilema/*.mdx`,
  contentType: 'mdx',
  fields: {
    dbname: {
      type: 'string',
    },
  },
}));

export const PoetryPage = defineDocumentType(() => ({
  name: 'PoetryPage',
  filePathPattern: `poetry/*.mdx`,
  contentType: 'mdx',
  fields: {
    dbname: {
      type: 'string',
    },
  },
}));

export default makeSource({
  contentDirPath: 'data',
  documentTypes: [
    KishanPage,
    CuratoryPage,
    YogaPage,
    ProgrammingPage,
    EducationPage,
    PodcastPage,
    SadhanaPage,
    XilemaPage,
    PoetryPage,
    Draft,
  ],
});

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

export const ThoughtsPage = defineDocumentType(() => ({
  name: 'ThoughtsPage',
  filePathPattern: `thoughts/*.mdx`,
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

export const ProgrammingProjects = defineDocumentType(() => ({
  name: 'ProgrammingProjects',
  filePathPattern: `programming/projects/*.mdx`,
  contentType: 'mdx',
  fields: {
    name: {
      type: 'string',
    },
    productionurl: {
      type: 'string',
    },
    description: {
      type: 'string',
    },
    videourl: {
      type: 'string',
    },
    slug: {
      type: 'string',
    },
    githubrepo: {
      type: 'string',
    },
  },
}));

export const EducationPage = defineDocumentType(() => ({
  name: 'EducationPage',
  filePathPattern: `education/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
    },
    university: {
      type: 'string',
    },
    slug: {
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

export const PodcastEpisode = defineDocumentType(() => ({
  name: 'PodcastEpisode',
  filePathPattern: `podcast/episodes/*.mdx`,
  contentType: 'mdx',
  fields: {
    index: {
      type: 'number',
    },
    guest: {
      type: 'string',
    },
    guestname: {
      type: 'string',
    },
    album: {
      type: 'string',
    },
    author: {
      type: 'string',
    },
    albumImageUrl: {
      type: 'string',
    },
    year: {
      type: 'number',
    },
    date: {
      type: 'string',
    },
    videourl: {
      type: 'string',
    },
    duration: {
      type: 'string',
    },
    spotifyLink: {
      type: 'string',
    },
    slug: {
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

export const Season1 = defineDocumentType(() => ({
  name: 'Season1',
  filePathPattern: `sadhanas/programming-logs/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
    },
    date: {
      type: 'string',
    },
    index: {
      type: 'number',
    },
    description: {
      type: 'string',
    },
    loomRecording: {
      type: 'string',
    },
    music: {
      type: 'string',
    },
    building: {
      type: 'string',
    },
    sessionDuration: {
      type: 'string',
    },
  },
}));

export const XilemaPage = defineDocumentType(() => ({
  name: 'XilemaPage',
  filePathPattern: `xilema/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
    },
    category: {
      type: 'string',
    },
    slug: {
      type: 'string',
    },
    imageUrl: {
      type: 'string',
    },
  },
}));

export const Poem = defineDocumentType(() => ({
  name: 'Poem',
  filePathPattern: `poetry/*.mdx`,
  contentType: 'mdx',
  fields: {
    albumtitle: {
      type: 'string',
    },
    index: {
      type: 'number',
    },
    albumartist: {
      type: 'string',
    },
    albumyear: {
      type: 'string',
    },
    slug: {
      type: 'string',
    },
    albumImageUrl: {
      type: 'string',
    },
    title: {
      type: 'string',
    },
  },
}));

export default makeSource({
  contentDirPath: 'data',
  documentTypes: [
    KishanPage,
    ThoughtsPage,
    YogaPage,
    ProgrammingPage,
    ProgrammingProjects,
    EducationPage,
    PodcastPage,
    PodcastEpisode,
    SadhanaPage,
    XilemaPage,
    Poem,
    Draft,
    Season1,
  ],
});

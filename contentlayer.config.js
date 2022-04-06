import { defineDocumentType, makeSource } from 'contentlayer/source-files';

export const EssayLog = defineDocumentType(() => ({
  name: 'EssayLog',
  filePathPattern: `essays/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
    },
    date: {
      type: 'string',
    },
    tags: {
      type: 'string',
    },
    estimatedReadingTime: {
      type: 'number',
    },
    slug: {
      type: 'string',
    },
  },
}));

export const BlogPost = defineDocumentType(() => ({
  name: 'BlogPost',
  filePathPattern: `blog/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
    },
    description: {
      type: 'string',
    },

    estimatedReadingTime: {
      type: 'number',
    },
    slug: {
      type: 'string',
    },
    author: {
      type: 'string',
    },
  },
}));

export const ProgrammingLog = defineDocumentType(() => ({
  name: 'ProgrammingLog',
  filePathPattern: `programming-logs/**/*.mdx`,
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
  computedFields: {
    url: {
      type: 'string',
      resolve: programmingLog =>
        `/programming/programming-logs/${programmingLog.date}`,
    },
  },
}));

export const SadhanaLog = defineDocumentType(() => ({
  name: 'SadhanaLog',
  filePathPattern: `sadhanas/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    id: {
      type: 'string',
    },
    sadhana: {
      type: 'string',
    },
    sadhanaslug: {
      type: 'string',
    },
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
  // computedFields: {
  //   url: {
  //     type: 'string',
  //     resolve: sadhanaEntry =>
  //       `/sadhanas/programming-logs/${programmingLog.date}`,
  //   },
  // },
}));

export const PodcastEpisode = defineDocumentType(() => ({
  name: 'PodcastEpisode',
  filePathPattern: `podcast/*.mdx`,
  contentType: 'mdx',
  fields: {
    index: {
      type: 'number',
    },
    date: {
      type: 'string',
    },
    albumtitle: {
      type: 'string',
    },
    albumartist: {
      type: 'string',
    },
    albumyear: {
      type: 'number',
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
  },
}));

export const YogaLog = defineDocumentType(() => ({
  name: 'YogaLog',
  filePathPattern: `yoga/*.mdx`,
  contentType: 'mdx',
  fields: {
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
      required: true,
    },
    loomRecording: {
      type: 'string',
      required: true,
    },
    sessionDuration: {
      type: 'string',
      required: false,
    },
    description: {
      type: 'string',
    },
  },
}));

export const EducationLog = defineDocumentType(() => ({
  name: 'EducationLog',
  filePathPattern: `education/*.mdx`,
  contentType: 'mdx',
  fields: {
    name: {
      type: 'string',
    },
    website: {
      type: 'string',
    },
    provider: {
      type: 'string',
    },
    dateFrom: {
      type: 'string',
    },
    dateTo: {
      type: 'string',
    },

    extraInfo: {
      type: 'string',
    },
    image: {
      type: 'string',
    },
    tags: {
      type: 'string',
    },
    id: {
      type: 'string',
    },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: educationLog => `/${educationLog._raw.flattenedPath}`,
    },
  },
}));

export default makeSource({
  contentDirPath: 'thoughts',
  documentTypes: [
    ProgrammingLog,
    YogaLog,
    EducationLog,
    EssayLog,
    BlogPost,
    SadhanaLog,
    PodcastEpisode,
  ],
});

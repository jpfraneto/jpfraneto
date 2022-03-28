import { defineDocumentType, makeSource } from 'contentlayer/source-files';

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

export const YogaLog = defineDocumentType(() => ({
  name: 'YogaLog',
  filePathPattern: `yoga/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
    },
    kriya: {
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
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: yogaLog => `/${yogaLog._raw.flattenedPath}`,
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
  documentTypes: [ProgrammingLog, YogaLog, EducationLog],
});

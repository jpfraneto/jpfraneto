import { defineDocumentType, makeSource } from 'contentlayer/source-files';

export const ProgrammingLog = defineDocumentType(() => ({
  name: 'ProgrammingLog',
  filePathPattern: `programming-logs/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    date: {
      type: 'string',
      required: true,
    },
    index: {
      type: 'number',
      required: true,
    },
    description: {
      type: 'string',
      required: true,
    },
    loomRecording: {
      type: 'string',
      required: true,
    },
    music: {
      type: 'string',
      required: false,
    },
    building: {
      type: 'string',
      required: false,
    },
    sessionDuration: {
      type: 'string',
      required: false,
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
  filePathPattern: `yoga-logs/*.mdx`,
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
      required: true,
    },
    index: {
      type: 'number',
      required: true,
    },
    description: {
      type: 'string',
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
      resolve: yogaLog => `/yoga/${yogaLog._raw.flattenedPath}`,
    },
  },
}));

export default makeSource({
  contentDirPath: 'data',
  documentTypes: [ProgrammingLog, YogaLog],
});

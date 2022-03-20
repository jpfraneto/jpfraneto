import { defineDocumentType, makeSource } from 'contentlayer/source-files';

export const ProgrammingLog = defineDocumentType(() => ({
  name: 'ProgrammingLog',
  filePathPattern: `**/*.mdx`,
  fields: {
    title: {
      type: 'string',
      description: 'The title of the programming log',
      required: true,
    },
    date: {
      type: 'string',
      description: 'The date of the post',
      required: true,
    },
    index: {
      type: 'number',
      description: 'The index of the post',
      required: true,
    },
    description: {
      type: 'string',
      description: 'The description of the post',
      required: true,
    },
    loomRecording: {
      type: 'string',
      description: 'The recording of the session',
      required: true,
    },
    music: {
      type: 'string',
      description: 'The music that was played in the session',
      required: false,
    },
    building: {
      type: 'string',
      description: 'The project that is being built in this session',
      required: false,
    },
    duration: {
      type: 'string',
      description: 'The duration of the session',
      required: false,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: programmingLog =>
        `/programming-logs/${programmingLog._raw.flattenedPath}`,
    },
  },
}));

export default makeSource({
  contentDirPath: 'data/programming-logs',
  documentTypes: [ProgrammingLog],
});

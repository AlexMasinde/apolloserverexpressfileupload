const imageUploader = require("../imageUploader");

module.exports = {
  Mutations: {
    uploadFile: async (_, { file }) => {
      const { createReadStream, filename, mimetype, encoding } = await file;
      const stream = createReadStream();
      const uri = await imageUploader.upload(stream, { filename, mimetype });
      return {
        filename,
        mimetype,
        encoding,
        uri,
      };
    },
  },
};

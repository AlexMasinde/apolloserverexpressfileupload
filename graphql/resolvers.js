const imageUploader = require("../imageUploader");

module.exports = {
  Mutations: {
    uploadFile: async (_, { files }) => {
      const promises = files.map(async (file) => {
        const { createReadStream, filename, mimetype, encoding } = await file;
        const stream = createReadStream();
        const uri = await imageUploader.upload(stream, { filename, mimetype });
        return {
          filename,
          mimetype,
          encoding,
          uri,
        };
      });
      const result = await Promise.all(promises);
      console.log(result);
      return result;
    },
  },
};

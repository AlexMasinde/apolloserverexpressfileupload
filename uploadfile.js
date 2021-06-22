const { v4: uuid } = require("uuid");
const { extname } = require("path");
const s3 = require("./s3");

const uploadFileFunction = async (file) => {
  const { filename, mimetype, encoding, createReadStream } = await file;

  console.log(file);

  const { Location } = await s3
    .upload({
      Body: createReadStream(),
      Key: `${uuid()}${extname(filename)}`,
      Bucket: process.env.AWS_S3_BUCKET,
      ContentType: mimetype,
    })
    .promise();

  return {
    filename,
    mimetype,
    encoding,
    uri: Location,
  };
};

module.exports = uploadFileFunction;

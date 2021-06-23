const crypto = require("crypto");
const { extname } = require("path");

class S3Upload {
  constructor(s3, basekey) {
    (this.s3 = s3), (this.basekey = basekey);
  }

  static generateFileName(filename) {
    const fileExtension = extname(filename);
    const fileUniqueId = "1234512";
    return `${fileUniqueId}${fileExtension}`;
  }

  async upload(stream, { filename, mimetype }) {
    const key = S3Upload.generateFileName(filename);

    const { Location } = await this.s3
      .upload({
        Body: stream,
        Bucket: process.env.AWS_S3_BUCKET,
        Key: `${this.basekey}/${key}`,
        ContentType: mimetype,
      })
      .promise();

    return Location;
  }
}

module.exports = S3Upload;

const s3 = require("./awsconfig/s3");
const S3Upload = require("./lib/s3Uploader");

const basekey = "profilepictures";

const imageUploader = new S3Upload(s3, basekey);

module.exports = imageUploader;

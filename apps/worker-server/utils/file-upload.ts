import { S3Client } from "@aws-sdk/client-s3";
import { PutObjectCommand } from "@aws-sdk/client-s3";

const accessKeyId = process.env.AWS_ACCESS_KEY_ID!;
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY!;
const region = process.env.AWS_S3_REGION;
const Bucket = process.env.AWS_S3_BUCKET;

export const s3 = new S3Client({
  region: region,
  credentials: {
    accessKeyId,
    secretAccessKey,
  },
});

export default async function uploadFile(file: any): Promise<string | null> {
  try {
    const key = `${file.originalname}`;

    const command = new PutObjectCommand({
      Bucket: Bucket,
      Key: key,
      Body: file.buffer,
      ContentType: file.mimetype,
    });

    const data = await s3.send(command);
    console.log(data);
    return `https://${Bucket}.s3.${region}.amazonaws.com/${key}`;
  } catch (error) {
    console.error("UPLOAD FAILED:", error);
    return null;
  }
}

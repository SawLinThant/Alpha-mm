import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const DO_BUCKET = process.env.REACT_APP_AWS_BUCKET_NAME;
const DO_REGION = process.env.REACT_APP_DIGITALOCEAN_REGION;

const sanitizeFileName = (fileName) => {
  return fileName.replace(/[^a-z0-9.]/gi, "_").toLowerCase();
};

const s3Client = new S3Client({
  endpoint: "https://sgp1.digitaloceanspaces.com", 
  region: DO_REGION, // 
  credentials: {
      accessKeyId: process.env.REACT_APP_DIGITALOCEAN_ACCESS_KEY_ID,
      secretAccessKey: process.env.REACT_APP_DIGITALOCEAN_SECRET_ACCESS_KEY
  }
});

export const uploadToDigitalOcean = async (images) => {
  const uploadPromises = images.map(async (image) => {
    const sanitizedImage = sanitizeFileName(image.name);

    const params = {
      Bucket: DO_BUCKET, 
      Key: `bonchon-erp/alpha-website/${sanitizedImage}`, 
      Body: image,
      ContentType: image.type,
      ACL: 'public-read', // Ensure public-read is set
    };

    try {
      const command = new PutObjectCommand(params);
      const url = await getSignedUrl(s3Client, command, { expiresIn: 3600 });
      
      const response = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': image.type,
          'x-amz-acl': 'public-read', // Ensure ACL is set in headers too
        },
        body: image,
      });

      if (response.ok) {
        console.log(`${sanitizedImage} uploaded successfully to DigitalOcean Spaces`);
      } else {
        console.error(`Failed to upload ${sanitizedImage}: ${response.statusText}`);
      }
    } catch (err) {
      console.error(`Failed to upload ${sanitizedImage}:`, err);
    }
  });

  return Promise.all(uploadPromises);
};
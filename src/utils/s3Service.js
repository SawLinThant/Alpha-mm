import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const DO_BUCKET = "axra";
const DO_REGION = "us-east-1";

const sanitizeFileName = (fileName) => {
  return fileName.replace(/[^a-z0-9.]/gi, "_").toLowerCase();
};

const s3Client = new S3Client({
  endpoint: "https://sgp1.digitaloceanspaces.com", 
  region: DO_REGION, // 
  credentials: {
      accessKeyId: "6ZF5GJGTLMZZZNAST3UG",
      secretAccessKey: "QYf7TF39wapUFAds/hRwL5gWQHuedvLyaowECtLEDoE"
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
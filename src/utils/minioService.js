import * as Minio from "minio";
import { Buffer } from "buffer";
import { v4 as uuidv4 } from "uuid";
const minioClient = new Minio.Client({
  endPoint: "203.175.11.82",
  port: 9000, // Typically 9000
  useSSL: false, // Set to true if you want to use HTTPS
  accessKey: "Shu1zEiPQCr6k0rVsy4N",
  secretKey: "g2BbEEgJ42SEarKr5JrvjyY0MDPnZ0p9yXQ27qVh",
});

export const uploadFile = async (file) => {
  try {
    if (!file) {
      throw new Error("No file provided");
    }

    const buffer = await readFileAsBuffer(file);
    const readableStream = Buffer.from(buffer);
    const bucketName = "eventku"; // Replace with your bucket name
    const objectName = `temp/coverImage/${uuidv4()}-${file.name}`; // Use the original file name as the object name
    await minioClient.putObject(
      bucketName,
      objectName,
      readableStream,
      buffer.length
    );
    console.info(
      `File ${objectName} uploaded successfully to bucket ${bucketName}`
    );
    return `http://nawaytes.cloud:9000/eventku/${objectName}`;
  } catch (error) {
    console.error("Error uploading file:", error);
  }
};

export function readFileAsBuffer(file) {
  return new Promise((resolve, reject) => {
    if (!file) {
      reject(new Error("No file provided"));
      return;
    }

    const reader = new FileReader();

    reader.onload = function (e) {
      const buffer = e.target.result; // The file content as a buffer
      resolve(buffer);
    };

    reader.onerror = function (e) {
      reject(new Error("Error reading the file"));
    };

    reader.readAsArrayBuffer(file); // Read the file as an ArrayBuffer
  });
}

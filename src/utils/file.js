export async function getFileSizeFromSrc(src) {
  try {
    const response = await fetch(src);
    const contentLength = response.headers.get('content-length');
    console.log("🚀 ~ getFileSizeFromSrc ~ contentLength:", contentLength)
    if (contentLength) {
      // contentLength is in bytes
      return formatBytes(parseInt(contentLength, 10));
    } else {
      return 'Unknown';
    }
  } catch (error) {
    console.error('Error fetching file size:', error);
    return 'Unknown';
  }
}

function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

export function getFileNameFromSrc(src) {
  // Example src: "/path/to/file.pdf"
  let fileName = src.split('/').pop(); // Extracts "file.pdf"
  // Remove extension
  fileName = fileName.replace(/\.[^/.]+$/, '');
  return fileName;
}
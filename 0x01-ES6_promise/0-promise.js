export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    const success = true;

    setTimeout(() => {
      if (success) {
        resolve('API response received successfully');
      } else {
        reject(new Error('Failed to receive API response'));
      }
    }, 1000);
  });
}

export default function getResponseFromAPI(succes) {
  return new Promise((resolve, reject) => {
    if (succes) {
      resolve('Promise is resolved');
    } else {
      reject(new Error('Promise is rejected'));
    }
  });
}

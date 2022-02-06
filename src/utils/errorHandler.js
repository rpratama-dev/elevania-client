export default function errorHandler(error) {
  console.log('error', error.response);
  if (error.response) {
    const data = error.response.data;
    if (data) return data.message;
  }
  if (error.message) return error.message;
}

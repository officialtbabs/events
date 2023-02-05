export const imageUploadService = async (fileInput: any) => {

    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTc0MzIsImNvcnBvcmF0ZV9pZCI6bnVsbCwiZm5hbWUiOiJKb2huIiwibG5hbWUiOiJEb2UiLCJlbWFpbCI6ImpvaG5kb2VAZXhhbXBsZS5jb20iLCJwaG9uZSI6IjA4MTIzNDU5OTk5IiwicGFzc3dvcmQiOiIkMmEkMTAkM2FNVHNlSGtIa2JFaG1RWlFjaE5adTUzSjI2aVRlNHE2WktWN1oyOW5taU5zTlJnNXouYUMiLCJhY3RpdmUiOiIxIiwiYXZhdGFyIjpudWxsLCJjb2RlIjoiYWZlMmYyZjAtYTNjZS0xMWVkLTkwNGItZGJiZGE4OGYxMjM5LTE3NDMyIiwiY3JlYXRlZF9hdCI6IjIwMjMtMDItMDNUMTQ6MjY6MDMuMDAwWiIsInVwZGF0ZWRfYXQiOiIyMDIzLTAyLTAzVDE0OjI2OjAzLjAwMFoiLCJnZW5kZXIiOiJtYWxlIiwiZG9iIjoiMjAyMy0wMi0wMyAwMDowMDowMC4wMDAiLCJjYXJfb3duZXIiOiIwIiwibmZjX2lkIjpudWxsLCJzdGFmZl9pZCI6bnVsbCwiY2xpZW50X2lkIjpudWxsLCJsb2NhdGlvbiI6bnVsbCwidmVyaWZpZWRfYXQiOm51bGwsImNpdHlfaWQiOm51bGwsImxvZ2luX3JlbW90ZV9hZGRyZXNzIjpudWxsLCJsb2dpbl9kYXRlX3RpbWUiOm51bGwsImxvZ2luX2lzX3N1Y2Nlc3NmdWwiOm51bGwsImJsb2NrZWRfcmVhc29uIjpudWxsLCJpc19ibG9ja2VkIjowLCJibG9ja2VkX2F0IjpudWxsLCJzaWduX3VwX3NvdXJjZSI6IndlYiIsImNvdW50cnlfY29kZSI6Ik5HIiwicGhvbmVfdmVyaWZpZWRfYXQiOm51bGwsImRlbGV0ZWRfYXQiOm51bGwsImRlbGV0ZV9yZWFzb24iOm51bGwsImlzX2VtYWlsX25vdGlmaWNhdGlvbl9lbmFibGVkIjoxLCJ1c2VyVHlwZSI6bnVsbCwiaWF0IjoxNjc1NDM0NDM1LCJleHAiOjE3MDY5NzA0MzV9.eBqduXXjF8T91jCY9l85gTVy-iiV-3cWrhxDtBu_gug");
    myHeaders.append("Content-Type", "application/json");
    console.log(fileInput)
    const formdata = new FormData();
    formdata.append("image", fileInput.files[0], "file");

    const requestOptions: RequestInit = {
    method: 'POST',
    headers: myHeaders,
    body: formdata,
    redirect: "error"
    };

    try {
        const res = await fetch("https://api.test.shuttlers.africa/v1/services/image", requestOptions);
        const result = await res.json();
        return result;
    }
    catch (error) {
        console.log(error)
    }
}
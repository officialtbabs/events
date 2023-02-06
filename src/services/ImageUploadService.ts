export const imageUploadService = async (fileInput: any) => {
  const formdata = new FormData();
  formdata.append("file", fileInput.files[0], fileInput.files[0].name);
  formdata.append("upload_preset", "banner");
  formdata.append("public_id", fileInput.files[0].name);

  const requestOptions: RequestInit = {
    method: "POST",
    body: formdata,
    redirect: "error",
  };

  try {
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dl7jxi8kk/image/upload",
      requestOptions
    );
    const result = await res.json();
    return result.secure_url;
  } catch (error) {
    console.error("error", error);
  }
};

import axios from "axios";

export const uploadVideo = async (file) => {
  const formData = new FormData();
  formData.append("file", file);

  try {
    const res = await axios.post("/predict", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Accept: "application/json",
      },
    });
    return res.data;
  } catch (err) {
    console.error("An error occurred while uploading the video.", err);
    throw new Error("An error occurred while uploading the video.");
  }
};

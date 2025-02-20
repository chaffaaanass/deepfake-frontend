"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import axios from "axios";

export default function PredictUpload() {
  const [file, setFile] = useState<File | null>(null);
  const [response, setResponse] = useState<{
    pred_label: string;
    confidence: number;
  } | null>(null);
  const [error, setError] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    } else {
      setFile(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!file) {
      setError("Please upload a video file.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    formData.forEach((value, key) => {
      console.log(`${key}: ${value}`);
    });

    try {
      const res = await axios.post("/predict", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Accept: "application/json",
        },
      });
      setResponse(res.data);
      console.log("response : ", res.data);
      setError("");
    } catch (err) {
      setError("An error occurred while uploading the video.");
      console.error(err);
    }
  };

  return (
    <section>
      <div className="text flex justify-center p-8 text-[60px]">
        Facial Deepfake Detection
      </div>
      <div className="grid justify-center">
        <h1 className="flex justify-center">Upload Video for Prediction</h1>
        <p className="max-w-2xl mx-auto mb-4">
          Facial deepfake detection is an essential task in combating digital
          misinformation, fraud, and identity manipulation. Our AI-powered
          system detects four types of deepfakes: Deepfake, Face2Face, FaceSwap,
          and Neural Textures. By analyzing video frames, we extract facial
          features at different compression levels and leverage Gaussian
          Processes (GPs) for classification. This approach enhances uncertainty
          estimation, reduces prediction errors, and ensures high accuracy. Our
          model performs competitively across datasets and excels in detecting
          deepfakes even with limited training data.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="flex justify-between">
            <input type="file" accept="video/*" onChange={handleFileChange} />

            <Button variant="secondary" type="submit">
              Upload
            </Button>
          </div>
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {response && (
          <div className="predection">
            <h2>Prediction Result</h2>
            <p>Label: {response.pred_label}</p>
            <p>Confidence: {(response.confidence * 100).toFixed(2)}%</p>
          </div>
        )}
      </div>
    </section>
  );
}

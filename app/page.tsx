"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <section className="flex flex-col items-center space-y-6 p-8 text-center">
      <div className="text text-[60px]">Facial Deepfake Detection</div>
      <p className="max-w-xl">
Facial deepfake detection is an essential task in combating digital misinformation, fraud, and identity manipulation. Our AI-powered system detects four types of deepfakes: Deepfake, Face2Face, FaceSwap, and Neural Textures. By analyzing video frames, we extract facial features at different compression levels and leverage Gaussian Processes (GPs) for classification. This approach enhances uncertainty estimation, reduces prediction errors, and ensures high accuracy. Our model performs competitively across datasets and excels in detecting deepfakes even with limited training data.      </p>
      <Button variant="secondary" onClick={() => router.push("/predict/upload")}> 
        Go to Prediction
      </Button>
    </section>
  );
}

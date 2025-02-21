"use client";
import Header from "@/components/ui/header";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Image from "next/image";
import mesoGP from "@/app/images/meso-gp.png";
import pre from "@/app/images/preprocessing.png";
import class1 from "@/app/images/classification1.png";
import class2 from "@/app/images/classification2.png";
import algo from "@/app/images/algorithm.png";
import dataset from "@/app/images/dataset-info.png";
import classcross from "@/app/images/class-cross.png";
import resultsdata from "@/app/images/results-data.png";
import GenConViT from "@/app/images/GenConViT.png";
import GenTab1 from "@/app/images/GenConViT-tab1.png";
import GenTab2 from "@/app/images/GenConViT-tab2.png";
import GenExp1 from "@/app/images/Gen-Exp1.png";
import GenExp2 from "@/app/images/Gen-Exp2.png";

export default function Home() {
  const router = useRouter();
  return (
    <section className="home flex flex-col items-center text-center">
      <Header />
      <div className="text text-[80px]">Facial Deepfake Detection</div>
      <p className="parag max-w-xl">
        Facial deepfake detection is an essential task in combating digital
        misinformation, fraud, and identity manipulation. Our AI-powered system
        detects four types of deepfakes: Deepfake, Face2Face, FaceSwap, and
        Neural Textures. By analyzing video frames, we extract facial features
        at different compression levels and leverage Gaussian Processes (GPs)
        for classification. This approach enhances uncertainty estimation,
        reduces prediction errors, and ensures high accuracy. Our model performs
        competitively across datasets and excels in detecting deepfakes even
        with limited training data.{" "}
      </p>
      <Button
        variant="secondary"
        onClick={() => router.push("/predict/upload")}
      >
        Go to Prediction
      </Button>
      <div id="architecture" className="text text-[60px]">
        Architecture
      </div>
      <div className="architecture-gp">
        <h2>Gaussian Processes</h2>
        <p>
          Gaussian Processes (GPs) are a non-parametric, probabilistic machine
          learning framework used for regression, classification, and
          uncertainty modeling. Instead of assuming a fixed function form, GPs
          define a distribution over possible functions that fit the data,
          enabling flexible modeling of complex patterns while providing
          confidence intervals for predictions.
        </p>
      </div>
      <div className="proposed-method">
        <div className="meso-gp">
          <Image src={mesoGP} alt="Meso-GP Model" className="mx-auto my-4" />
          <div className="container">
            <p>
              The figure illustrates the workflow of the Meso-GP method, a
              specialized framework for detecting manipulated facial content
              (deepfakes). The pipeline is structured into sequential stages,
              each critical for ensuring accurate identification of synthetic
              media.
            </p>
          </div>
        </div>

        <div className="face-extraction">
          <h2>Face Extraction</h2>
          <div className="content">
            <p>
              <strong>Purpose:</strong> Isolate facial regions from input
              images/videos to focus computational resources on relevant areas.
            </p>
            <ul>
              <li>
                Uses detection algorithms (e.g., Haar cascades, MTCNN, or deep
                learning-based detectors) to locate and crop faces.
              </li>
              <li>
                Ensures irrelevant background noise is excluded, improving
                downstream analysis.
              </li>
            </ul>
          </div>
        </div>
        <div className="preprocessing">
          <Image src={pre} alt="Meso-GP Model" width="750" height="700" />
          <div className="container">
            <h2>Preprocessing</h2>
            <div className="content">
              <p>
                <strong>Purpose:</strong> Refine input quality to enhance
                feature extraction accuracy.
              </p>
              <ul>
                <li>
                  <strong>Lighting normalization:</strong> Adjusts uneven
                  illumination to standardize facial appearance.
                </li>
                <li>
                  <strong>Noise reduction:</strong> Removes artifacts (e.g.,
                  compression blur, pixelation).
                </li>
                <li>
                  <strong>Detail enhancement:</strong> Sharpens edges or
                  textures to highlight subtle inconsistencies.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="backbone">
          <h2>Backbone Architecture</h2>
          <div className="content">
            <p>
              <strong>Role:</strong> Core neural network (e.g., CNN, ResNet, or
              custom architecture) optimized for deepfake detection.
            </p>
            <ul>
              <li>
                Processes preprocessed faces to capture micro-level
                inconsistencies (e.g., unnatural eye blinking, asymmetric
                lighting).
              </li>
              <li>
                Designed to focus on mesoscopic features (mid-level patterns)
                critical for distinguishing real vs. synthetic content.
              </li>
            </ul>
          </div>
        </div>
        <div className="feature-backbone">
          <h2>Feature Extraction</h2>
          <div className="content">
            <p>
              <strong>Output:</strong> Generates a 1024-dimensional feature
              vector encoding discriminative patterns.
            </p>
            <ul>
              <li>
                The backbone extracts spatial and temporal features (e.g.,
                texture irregularities, unnatural facial movements).
              </li>
              <li>
                High-dimensional vectors encapsulate subtle differences between
                authentic and manipulated content.
              </li>
            </ul>
          </div>
        </div>
        <div className="classification">
          <div className="classfis">
            <Image src={class1} alt="Meso-GP Model" className="class1" />
            <Image
              src={class2}
              alt="Meso-GP Model"
              width={773}
              className="class2"
            />
          </div>
          <div className="container">
            <h2>Classifier</h2>
            <div className="content">
              <p>
                <strong>Role:</strong> Analyzes features to predict
                authenticity.
              </p>
              <ul>
                <li>
                  Trained on labeled datasets (real vs. deepfake) to recognize
                  patterns linked to synthetic manipulation.
                </li>
                <li>
                  Employs algorithms like SVM, Random Forests, or neural
                  networks to output a confidence score (e.g., 0.95 = real, 0.05
                  = fake).
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="experiments">
          <div className="classfis">
            <Image src={algo} alt="Meso-GP Model" className="class1" />
            <Image src={dataset} alt="Meso-GP Model" className="class2" />
          </div>
          <div className="container">
            <h2>Experiments</h2>
            <div className="content">
              <p>
                <strong>Objective:</strong> Assess the performance of Meso-GP
                through rigorous testing and comparative evaluation.
              </p>
              <ul>
                <li>
                  Uses the <strong>FaceForensics++ dataset</strong>, containing{" "}
                  <strong>5000 videos</strong> (1000 real and 4000 fake).
                </li>
                <li>
                  Compares Meso-GP to six baseline models including{" "}
                  <strong>Inception-V3, Xception, and Meso-4</strong>.
                </li>
                <li>
                  Evaluates classification accuracy across different deepfake
                  categories.
                </li>
                <li>
                  Assesses generalization performance using{" "}
                  <strong>cross-dataset evaluation</strong>.
                </li>
                <li>
                  Analyzes the impact of <strong>training dataset size</strong>{" "}
                  on model performance.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="baseline-methods">
          <h2>Baseline Methods</h2>
          <div className="content">
            <p>
              <strong>Purpose:</strong> Compare the performance of the proposed
              Meso-GP method against established deepfake detection models.
            </p>
            <ul>
              <li>
                <strong>Inception-V3:</strong> A CNN architecture using transfer
                learning with pre-trained ImageNet weights for image
                classification tasks.
              </li>
              <li>
                <strong>Xception:</strong> A CNN architecture employing
                depthwise separable convolutions, also using transfer learning
                with ImageNet pre-trained weights.
              </li>
              <li>
                <strong>Meso-4:</strong> A deepfake detection model that uses a
                custom CNN (MesoNet) focused on mesoscopic properties.
              </li>
              <li>
                <strong>Meso-NaiveBayes:</strong> Uses the MesoNet feature
                extraction backbone to obtain 1024 features, then applies a
                Naive Bayes classifier.
              </li>
              <li>
                <strong>Meso-LogisticRegression:</strong> Uses the MesoNet
                feature extraction backbone with Logistic Regression for binary
                classification.
              </li>
              <li>
                <strong>Meso-SVM:</strong> Uses the MesoNet feature extraction
                backbone with a Support Vector Machine classifier.
              </li>
            </ul>
          </div>
        </div>
        <div className="classification-accuracy">
          <h2>Classification Accuracy</h2>
          <div className="content">
            <p>
              <strong>Purpose:</strong> Evaluate the detection performance
              across different deepfake categories.
            </p>
            <ul>
              <li>
                Binary classification experiments were conducted for each
                deepfake type: Deepfake, Face2Face, FaceSwap, and Neural
                Textures.
              </li>
              <li>
                Example: In the Faceswap experiment, training with Faceswap and
                real faces using the Xception model resulted in an accuracy of
                79.35%.
              </li>
              <li>
                <strong>Meso-4</strong> outperformed in expression modification
                deepfakes (Face2Face: 85.35% and FaceSwap: 77.08%), while{" "}
                <strong>Meso-GP</strong> excelled in identity modification
                deepfakes (Deepfake: 82.50% and Neural Textures: 82.60%).
              </li>
            </ul>
          </div>
        </div>
        <div className="cross-dataset-evaluation">
          <Image src={classcross} alt="Meso-GP Model" />
          <div className="container">
            <h2>Cross-Dataset Evaluation</h2>
            <div className="content">
              <p>
                <strong>Purpose:</strong> Assess the generalizability of the
                models across different datasets.
              </p>
              <ul>
                <li>
                  Trains the best-performing models (Meso-4 and Meso-GP) on one
                  dataset and tests them on another.
                </li>
                <li>
                  Example: Meso-GP trained on Faceswap and real data achieved
                  57% accuracy when tested on Face2Face and real data.
                </li>
                <li>
                  Overall, both models showed no significant difference in
                  generalization performance.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="training-dataset-sizes">
          <Image src={resultsdata} alt="Meso-GP Model" />
          <div className="container">
            <h2>Performance on Various Training Dataset Sizes</h2>
            <div className="content">
              <p>
                <strong>Purpose:</strong> Analyze the impact of different
                training dataset sizes on model performance.
              </p>
              <ul>
                <li>
                  Experiments were performed using different values of N (N = 1,
                  3, and 5), corresponding to training sets of 1.3k, 4k, and
                  6.6k images respectively.
                </li>
                <li>
                  The binary classification experiment was repeated for each
                  dataset size.
                </li>
                <li>
                  Meso-GP significantly outperformed Meso-4 on smaller training
                  datasets, while both performed competitively on larger sets.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div id="GenConViT" className="architecture-gp">
          <h2>Generative Convolutional Vision Transformer</h2>
          <p>
            The Generative Convolutional Vision Transformer (GenConViT) is an
            advanced deepfake detection model that leverages convolutional and
            transformer-based architectures. It extracts visual artifacts and
            latent feature representations from manipulated videos for robust
            detection. <br />
            The GenConViT framework consists of video preprocessing, generative
            modeling, feature extraction, and classification. The model
            integrates ConvNeXt and Swin Transformer architectures to enhance
            detection performance.
          </p>
        </div>
        <div className="video-preprocessing">
          <h2>Video Preprocessing </h2>
          <div className="content">
            <p>
              <b>Purpose:</b> Standardize and clean video data to improve the
              accuracy of feature extraction.
            </p>
            <ul>
              <li>
                <b>Face Detection & Cropping:</b> Extracts and isolates facial
                regions using OpenCV, BlazeFace, and other deep learning-based
                face recognition algorithms.
              </li>
              <li>
                <b>Resizing:</b> Standardizes face images to 224×224 RGB format
                for uniformity.
              </li>
              <li>
                <b>Normalization:</b> Adjusts color and brightness levels to
                mitigate variations in lighting conditions.
              </li>
              <li>
                <b>Noise Reduction:</b> Removes compression artifacts,
                pixelation, and blur to improve feature clarity.
              </li>
              <li>
                <b>Frame Selection:</b> Extracts a fixed number of
                representative frames (e.g., 30 per video) to balance
                computational efficiency and detection accuracy.
              </li>
            </ul>
          </div>
        </div>
        <div className="autoencoder">
          <div className="classfis">
            <Image src={GenConViT} alt="Meso-GP Model" className="class1" />
            <Image src={GenTab1} alt="Meso-GP Model" className="class2" />
            <Image src={GenTab2} alt="Meso-GP Model" className="class3" />
          </div>
          <div className="container">
            <h2>Autoencoder and Variational Autoencoder</h2>
            <p>
              <b>Role: </b> Captures both explicit and latent deepfake patterns
              by learning intrinsic representations of facial structures.
            </p>
            <ul>
              <li>
                <b>Autoencoder (AE):</b> Learns to reconstruct an input image
                from its lower-dimensional representation, emphasizing key
                structural features.
              </li>
              <li>
                <b>Variational Autoencoder (VAE):</b> Models probabilistic
                distributions of real and fake faces, capturing variations
                beyond surface-level inconsistencies.
              </li>
              <li>
                <b>Feature Encoding:</b> AE and VAE generate latent space
                embeddings that highlight subtle manipulations often invisible
                to the human eye.
              </li>
            </ul>
          </div>
        </div>
        <div className="swim">
          <h2>ConvNeXt-Swin Hybrid Model</h2>
          <div className="content">
            <p>
              <b>Purpose:</b> Extracts fine-grained, hierarchical, and
              contextual spatial features for deepfake detection.
            </p>
            <ul>
              <li>
                <b>ConvNeXt Backbone:</b> Captures low-level spatial patterns
                such as texture inconsistencies and edge distortions in
                manipulated faces.
              </li>
              <li>
                <b>Swin Transformer:</b> Uses self-attention mechanisms with{" "}
                <b>shifted windows</b> to identify global inconsistencies across
                frames.
              </li>
              <li>
                <b>Hybrid Embedding Module:</b> Merges ConvNeXt-extracted CNN
                features with Swin Transformer’s hierarchical embeddings for a
                richer representation.
              </li>
              <li>
                <b>Classification Layer:</b> Uses fully connected layers and
                softmax activation to produce a final real/fake prediction.
              </li>
            </ul>
          </div>
        </div>
        <div className="datasets">
          <h2>Datasets</h2>
          <div className="content">
            <p>
              The GenConViT model is trained and validated on industry-standard
              deepfake datasets:
            </p>
            <ul>
              <li>
                <b>DFDC (DeepFake Detection Challenge):</b> The largest dataset
                with <b>100,000+ manipulated and real videos</b>.
              </li>
              <li>
                <b>FaceForensics++:</b> A dataset with{" "}
                <b>1,000 original YouTube videos</b> and their corresponding
                deepfake versions.
              </li>
              <li>
                <b>DeepfakeTIMIT:</b> Focused on{" "}
                <b>audio-visual manipulations</b>, ideal for cross-modal
                detection experiments.
              </li>
              <li>
                <b>Celeb-DF (v2):</b> High-resolution deepfake dataset providing
                a more challenging benchmark.
              </li>
              <li>
                <b>TrustedMedia (TM):</b> A dataset incorporating{" "}
                <b>multiple deepfake manipulation methods</b>, ensuring
                robustness in detection.
              </li>
            </ul>
          </div>
        </div>
        <div className="gen-experiments">
          <div className="classfis">
            <Image src={GenExp1} alt="Meso-GP Model" className="class1" />
            <Image src={GenExp2} alt="Meso-GP Model" className="class2" />
          </div>
          <div className="container">
          <h2>Experiments & Performance</h2>
          <p>
            The model’s accuracy was evaluated using multiple datasets and
            performance metrics.
          </p>
          <ul>
            <li>
              <b>Classification Accuracy:</b>
              <ul>
                <li>
                  DFDC: <b>98.5%</b>, FF++: <b>97%</b>, Celeb-DF (v2):{" "}
                  <b>90.94%</b>.
                </li>
              </ul>
            </li>
            <li>
              <b>AUC Scores:</b> Measures the model’s ability to discriminate
              between real and fake samples.
              <ul>
                <li>
                  DFDC: <b>99.9%</b>, FF++: <b>99.6%</b>, Celeb-DF (v2):{" "}
                  <b>98.1%</b>.
                </li>
              </ul>
            </li>
            <li>
              <b>Baseline Comparison:</b> GenConViT outperforms models like{" "}
              <b>EfficientNet, CViT, and STDT</b> in accuracy and robustness.
            </li>
            <li>
              <b>Generalization Performance:</b> Maintains high accuracy across{" "}
              <b>multiple datasets</b>, reducing dataset bias in deepfake
              detection.
            </li>
          </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

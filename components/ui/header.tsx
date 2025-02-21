import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  const smoothScroll = (targetId: string) => {
    const target = document.getElementById(targetId);
    if (target) {
      window.scrollTo({
        top: target.offsetTop,

        behavior: "smooth",
      });
    }
  };
  return (
    <nav className="header">
      <a href="#" onClick={() => router.push("/")}>
        Facial Deepfake Detection
      </a>
      <div className="h-content">
        <a href="#" onClick={() => router.push("/")}>
          Home
        </a>
        <a href="#" onClick={() => router.push("/predict/upload")}>
          Predict
        </a>
        <a href="#" onClick={() => smoothScroll("architecture")}>
          GPs
        </a>
        <a href="#" onClick={() => smoothScroll("GenConViT")}>
          GenConViT
        </a>
      </div>
    </nav>
  );
}

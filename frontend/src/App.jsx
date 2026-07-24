import { useState } from "react";
import axios from "axios";
import QRCodeGenerator from "qrcode";
import Navbar from "./components/Navbar";
import UrlForm from "./components/UrlForm";
import ShortUrlCard from "./components/ShortUrlCard";
const API_BASE_URL = import.meta.env.VITE_BACKEND_URL;

function App() {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [copied, setCopied] = useState(false);
  const [qrImage, setQrImage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleShorten = async () => {
    if (!url || loading) return;
    setLoading(true);

    try {
      const res = await axios.post(`${API_BASE_URL}/shorten`, {
        originalUrl: url,
      });
      console.log(res.data);
      const newShortUrl = res.data?.shortUrl;

      if (!newShortUrl) {
        alert("Short URL not received");
        return;
      }

      setShortUrl(newShortUrl);
      setCopied(false);

      const qr = await QRCodeGenerator.toDataURL(newShortUrl);
      setQrImage(qr);
    } catch (error) {
      console.log(error);
      alert(error.response?.data?.error || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(shortUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-slate-100">
      <Navbar />

      <div className="max-w-7xl mx-auto py-1">
        <div className="w-full bg-white rounded-2xl shadow-xl p-8">
          <h1 className="text-3xl font-bold mb-2 text-center">SnapLink</h1>
          <UrlForm url={url} setUrl={setUrl} handleShorten={handleShorten} loading={loading} />

          {shortUrl && <ShortUrlCard shortUrl={shortUrl} handleCopy={handleCopy} copied={copied} qrImage={qrImage} />}
        </div>

      </div>
    </div>
  );
}

export default App;
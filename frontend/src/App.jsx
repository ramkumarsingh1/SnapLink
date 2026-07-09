import { useState } from "react";
import axios from "axios";
import QRCodeSVG from "react-qr-code";
import QRCodeGenerator from "qrcode";
import Navbar from "./components/Navbar";

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

      <div className="max-w-5xl mx-auto py-1">
        <div className="w-full bg-white rounded-2xl shadow-xl p-8">
          <h1 className="text-3xl font-bold mb-2 text-center">SnapLink</h1>
          <div className="mt-6 flex flex-col gap-4">
            <input
              type="text"
              className="input input-success w-full"
              placeholder="Enter long URL"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
            <button
              onClick={handleShorten}
              className="btn btn-primary w-full sm:w-auto"
              disabled={loading}
            >
              Shorten
            </button>
          </div>
          {shortUrl && (
            <div className="flex flex-col items-center max-w-5xl w-full">
              <p className="font-medium mb-1 mt-1">Your short link:</p>
              <a
                className="link link-primary break-all"
                target="_blank"
                rel="noopener noreferrer"
                href={shortUrl}
              >
                {shortUrl}
              </a>
              <button
                onClick={handleCopy}
                className={`btn mt-2 w-full ${copied ? "btn-success" : "btn-secondary"
                  }`}
              >
                {copied ? "Copied!" : "Copy"}
              </button>

              <div className="bg-white p-2 rounded-lg shadow mt-4">
                <p className="mb-1 text-center font-semibold text-gray-800">
                  Scan QR Code:
                </p>
                {qrImage && (
                  <img
                    src={qrImage}
                    alt="QR Code"
                    className="mx-auto"
                  />
                )}
              </div>
              {qrImage && (
                <a
                  className="btn btn-accent mt-3 w-full"
                  download="qr-code.png"
                  href={qrImage}
                >
                  Download QR Code
                </a>
              )}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

export default App;
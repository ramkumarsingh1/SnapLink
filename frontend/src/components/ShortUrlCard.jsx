import React from 'react'
import Button from './Button'
export default function ShortUrlCard({ shortUrl, handleCopy, copied, qrImage }) {
    console.log("print");
    return (
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
            <Button onClick={handleCopy}
                className={`btn mt-2 w-full ${copied ? "btn-success" : "btn-secondary"}`}
                children={copied ? "Copied!" : "Copy"}
            />
            
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
    )
}

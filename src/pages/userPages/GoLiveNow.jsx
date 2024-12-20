import React, { useState, useRef, useEffect } from "react";
import { FaVideo } from "react-icons/fa";

const GoLiveNow = () => {
  const [isLive, setIsLive] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    let mediaStream = null;

    if (isLive) {
      // Start the camera when going live
      navigator.mediaDevices
        .getUserMedia({ video: true, audio: true })
        .then((stream) => {
          mediaStream = stream;
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
          }
        })
        .catch((error) => {
          console.error("Error accessing media devices:", error);
        });
    }

    return () => {
      // Cleanup: Stop the stream when live ends
      if (mediaStream) {
        mediaStream.getTracks().forEach((track) => track.stop());
      }
    };
  }, [isLive]);

  const startLiveStream = () => {
    setIsLive(true);
  };

  const stopLiveStream = () => {
    setIsLive(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Video Display */}
      {isLive && (
        <div className="mb-4 relative">
          <video
            ref={videoRef}
            autoPlay
            playsInline
            muted
            className="w-full max-w-lg rounded-lg border border-gray-300"
          ></video>
          {/* Blinking LIVE Indicator */}
          <div className="absolute top-2 left-2 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse">
            LIVE
          </div>
        </div>
      )}

      {/* Buttons */}
      {!isLive ? (
        <button
          onClick={startLiveStream}
          className="flex items-center bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600 transition duration-200"
        >
          <FaVideo className="mr-2" />
          Go Live Now
        </button>
      ) : (
        <button
          onClick={stopLiveStream}
          className="flex items-center bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-200"
        >
          <FaVideo className="mr-2" />
          End Live
        </button>
      )}
    </div>
  );
};

export default GoLiveNow;

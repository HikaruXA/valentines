import React, { useState } from "react";
import { Heart, PartyPopper } from "lucide-react";

const Hero = () => {
  const [accepted, setAccepted] = useState(false);
  const [noClickCount, setNoClickCount] = useState(0);

  const funnyStatements = [
    "I think you've pressed the wrong button.",
    "Oops! Did your finger slip?",
    "Are you sure? Really sure?",
    "Try again, but this time aim for 'Yes'!",
    "Hmm... that button seems broken. Click 'Yes' instead!",
    "Nope, not this one. The other button!",
    "You're breaking my heart! Click 'Yes'!",
    "I think your mouse is confused. Try 'Yes'!",
    "Wrong choice, but I believe in second chances!",
    "You're just testing me, right? Click 'Yes'!",
  ];

  const handleNoClick = () => {
    setNoClickCount((prev) => prev + 1);
  };

  const handleYesClick = () => {
    setAccepted(true);
  };

  const showNoButton = noClickCount < funnyStatements.length;

  return (
    <div className="flex items-center justify-center h-screen bg-pink-100 relative overflow-hidden p-4">
      {accepted && (
        <>
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${3 + Math.random() * 2}s`,
                }}
              >
                <Heart
                  className="text-pink-500"
                  size={24}
                  fill="currentColor"
                />
              </div>
            ))}
          </div>

          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10">
            <div className="flex justify-center">
              <img
                src="/images/peach-goma-peach-and-goma.gif"
                alt="Peach and Goma"
                className="mx-auto"
              />
            </div>
            <h2 className="text-4xl font-bold text-pink-600 mb-2">Yay!</h2>
            <p className="text-xl text-pink-500">
              You've made me the happiest person!
            </p>
          </div>
        </>
      )}

      <div
        className={`bg-white p-6 rounded-2xl shadow-xl text-center transition-opacity duration-300 ${
          accepted ? "opacity-0" : "opacity-100"
        }`}
      >
        <img
          src="/images/mochi-blue-roses.gif"
          alt="Peach and Goma"
          className="mx-auto"
        />
        <h1 className="text-3xl font-bold text-pink-600 whitespace-nowrap mb-4">
          Will you be my Valentine?
        </h1>
        <div className="flex gap-4 items-center justify-center">
          <button
            className="bg-pink-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-pink-600 transition"
            onClick={handleYesClick}
          >
            Yes
          </button>
          {showNoButton && (
            <button
              className="bg-gray-300 text-gray-700 px-6 py-2 rounded-lg shadow-md hover:bg-gray-400 transition"
              onClick={handleNoClick}
            >
              No
            </button>
          )}
        </div>
        {noClickCount > 0 && noClickCount <= funnyStatements.length && (
          <p className="text-sm text-gray-500 mt-4">
            {funnyStatements[noClickCount - 1]}
          </p>
        )}
      </div>

      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(100vh);
            opacity: 1;
          }
          100% {
            transform: translateY(-100px);
            opacity: 0;
          }
        }
        .animate-float {
          animation: float linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Hero;

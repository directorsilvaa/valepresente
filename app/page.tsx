"use client";

import { useEffect, useState, useRef } from "react";
import { Heart, Gift, PlayCircle, Sparkles, Volume2 } from "lucide-react";
import Image from "next/image";

const messages = [
  "Para uma amiga muito especial...",
  "Que está prestes a dar um passo tão importante...",
  "Que a felicidade do seu casamento...",
  "Seja tão grande quanto o carinho que sentimos por você...",
  "Este é um pequeno presente...",
  "Para ajudar a realizar seus sonhos...",
  "Com todo nosso amor e carinho...",
  "Porque você merece todo o carinho do mundo...",
  "E nós queremos fazer parte desse momento...",
  "Com muito amor...",
  "E muita alegria...",
  "Preparamos algo especial...",
];

const contributors = [
  "jessica", "Vanessa", "Natália", "Rosângela", "Rosanaide", "Icara",
  "Maria", "Recia", "Eliane", "Gilda", "Guto", "Elenice", "Suilan",
  "José", "Janusa", "Mirlane", "Camille"
];

export default function Home() {
  const [started, setStarted] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showContributors, setShowContributors] = useState(false);
  const [showFinalPix, setShowFinalPix] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [musicStarted, setMusicStarted] = useState(false);
  const [showVolumeCheck, setShowVolumeCheck] = useState(false);
  const [showFinale, setShowFinale] = useState(false);

  useEffect(() => {
    if (!started) return;
    
    if (currentSlide < messages.length) {
      const timer = setTimeout(() => {
        setCurrentSlide(prev => prev + 1);
      }, 5000);
      return () => clearTimeout(timer);
    } else if (!showFinalPix) {
      setShowFinalPix(true);
    } else if (!showContributors) {
      const timer = setTimeout(() => {
        setShowContributors(true);
      }, 5000);
      return () => clearTimeout(timer);
    } else if (!showFinale) {
      const timer = setTimeout(() => {
        setShowFinale(true);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [currentSlide, started, showFinalPix, showContributors, showFinale]);

  const handleStart = () => {
    setShowVolumeCheck(true);
    setMusicStarted(true);
  };

  const handleVolumeConfirm = () => {
    setShowVolumeCheck(false);
    setStarted(true);
  };

  return (
    <>
      {/* Music player that stays mounted throughout the experience */}
      {musicStarted && (
        <iframe
          className="hidden"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Xq_07hEF2AQ?autoplay=1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )}

      {/* Fireworks video that plays at the end */}
      {showFinale && (
        <iframe
          className="hidden"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/NDgUUvFHLNw?autoplay=1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )}

      <main className="min-h-screen bg-gradient-to-br from-pink-200 via-rose-100 to-purple-200 flex items-center justify-center p-4 sm:p-6">
        {showVolumeCheck ? (
          <div className="bg-white/90 backdrop-blur-sm p-6 sm:p-8 rounded-3xl shadow-2xl text-center w-full max-w-md mx-4">
            <Volume2 className="w-12 h-12 sm:w-16 sm:h-16 text-pink-500 mx-auto mb-4 sm:mb-6 animate-pulse" />
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">
              Aumentar o Volume
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
              Por favor, aumente o volume para uma melhor experiência! 🎵
            </p>
            <button
              onClick={handleVolumeConfirm}
              className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 text-sm sm:text-base w-full sm:w-auto"
            >
              Continuar
            </button>
          </div>
        ) : !started ? (
          <div className="relative text-center space-y-6 sm:space-y-8 w-full max-w-md mx-4">
            {/* Decorative elements */}
            <div className="absolute -top-12 sm:-top-16 left-0 text-pink-300 animate-bounce delay-100">
              <Sparkles className="w-6 h-6 sm:w-8 sm:h-8" />
            </div>
            <div className="absolute -top-6 sm:-top-8 right-12 text-pink-400 animate-bounce delay-300">
              <Sparkles className="w-4 h-4 sm:w-6 sm:h-6" />
            </div>
            <div className="absolute top-0 right-0 text-pink-300 animate-bounce delay-500">
              <Sparkles className="w-6 h-6 sm:w-8 sm:h-8" />
            </div>
            
            {/* Main content */}
            <div className="bg-white/90 backdrop-blur-sm p-6 sm:p-8 rounded-3xl shadow-2xl transform transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)]">
              <div className="relative mb-6 sm:mb-8">
                <div className="absolute inset-0 bg-gradient-to-b from-pink-100/50 to-transparent rounded-full blur-2xl"></div>
                <Gift className="w-16 h-16 sm:w-24 sm:h-24 text-pink-500 mx-auto relative animate-bounce" />
              </div>
              
              <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
                Surpresa Especial
              </h1>
              
              <button
                onClick={handleStart}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="group relative w-full bg-gradient-to-r from-pink-500 to-rose-500 p-px rounded-2xl transition-all duration-300"
              >
                <div className="relative bg-white rounded-[calc(1rem-1px)] p-3 sm:p-4 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-pink-50 group-hover:to-rose-50">
                  <div className="flex items-center justify-center gap-2 sm:gap-3">
                    <PlayCircle className={`w-6 h-6 sm:w-8 sm:h-8 transition-all duration-300 ${isHovered ? 'text-pink-500 scale-110' : 'text-pink-400'}`} />
                    <span className={`text-lg sm:text-xl font-semibold transition-all duration-300 ${isHovered ? 'text-pink-600' : 'text-pink-500'}`}>
                      Iniciar
                    </span>
                  </div>
                </div>
              </button>
            </div>
          </div>
        ) : (
          <div className="w-full max-w-2xl mx-4">
            {!showFinalPix && !showContributors && !showFinale ? (
              <div className="text-center space-y-4 sm:space-y-6">
                {currentSlide === 3 && (
                  <div className="relative w-32 h-32 sm:w-48 sm:h-48 mx-auto rounded-full overflow-hidden shadow-xl ring-4 ring-white/50 animate-fade-in mb-4 sm:mb-6">
                    <Image
                      src="/casal.png"
                      alt="Casal"
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="bg-white/90 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-xl">
                  <div className="mb-3 sm:mb-4 flex justify-center gap-2">
                    <Heart className="text-pink-500 w-6 h-6 sm:w-8 sm:h-8 animate-pulse" />
                  </div>
                  <p className="text-xl sm:text-3xl font-semibold text-gray-800 animate-fade-in leading-relaxed">
                    {messages[currentSlide]}
                  </p>
                </div>
              </div>
            ) : showFinalPix && !showContributors && !showFinale ? (
              <div className="text-center space-y-4 sm:space-y-6">
                <div className="bg-white/90 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-xl">
                  <div className="mb-3 sm:mb-4 flex justify-center gap-2">
                    <Gift className="text-pink-500 w-10 h-10 sm:w-12 sm:h-12 animate-bounce" />
                  </div>
                  <p className="text-2xl sm:text-4xl font-bold text-gray-800 animate-fade-in leading-relaxed bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
                    🎁 Parabéns! Você ganhou um vale presente Pix! 🎁
                  </p>
                </div>
              </div>
            ) : showContributors && !showFinale ? (
              <div className="bg-white/90 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-xl text-center">
                <div className="relative w-24 h-24 sm:w-32 sm:h-32 mx-auto rounded-full overflow-hidden shadow-xl ring-4 ring-pink-200 mb-6 sm:mb-8">
                  <Image
                    src="/casal.png"
                    alt="Casal"
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">
                  Com carinho de:
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                  {contributors.map((name, index) => (
                    <div
                      key={name}
                      className="p-2 sm:p-3 bg-gradient-to-br from-pink-50 to-rose-50 rounded-lg shadow-sm animate-fade-in hover:scale-105 transition-transform duration-300"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <p className="text-base sm:text-lg text-gray-700">{name} ✨</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 sm:mt-8 flex justify-center">
                  <Heart className="text-pink-500 w-10 h-10 sm:w-12 sm:h-12 animate-bounce" />
                </div>
              </div>
            ) : (
              <div className="bg-white/90 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-xl text-center animate-fade-in">
                <div className="relative w-32 h-32 sm:w-48 sm:h-48 mx-auto rounded-full overflow-hidden shadow-xl ring-4 ring-pink-200 mb-6 sm:mb-8">
                  <Image
                    src="/casal.png"
                    alt="Casal"
                    fill
                    className="object-cover"
                  />
                </div>
                <h1 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
                  Fim! 🎉
                </h1>
                <p className="text-xl sm:text-2xl text-gray-800 mb-6 sm:mb-8">
                  Que seu casamento seja repleto de amor, alegria e muitas felicidades! 💝
                </p>
                <div className="grid grid-cols-3 gap-3 sm:gap-4">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="animate-bounce"
                      style={{ animationDelay: `${i * 200}ms` }}
                    >
                      <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-pink-500" />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </main>
    </>
  );
}

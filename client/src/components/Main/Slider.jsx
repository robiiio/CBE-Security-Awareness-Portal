import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import SliderMain from "./SliderMain";

const slides = ["images7.jpg", "images6.jpg", "images4.jpg", "images5.jpg"];

function Slider() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToSlide = (slideIndex) => {
    setCurrentImageIndex(slideIndex);
  };
  const nextSlider = () => {
    const isLastSlide = currentImageIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentImageIndex + 1;
    setCurrentImageIndex(newIndex);
  };
  const prevSlider = () => {
    const isFirstSlide = currentImageIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(newIndex);
  };

  return (
    <>
      <section id="home">
        <div className=" h-[680px] w-full m-auto relative group">
          {slides.map((slides, index) => (
            <>
              <div
                key={index}
                className={`absolute w-full h-full bg-center  duration-500  ${
                  index === currentImageIndex ? "opacity-100" : "opacity-0"
                } transition-opacity duration-1000`}
                style={{
                  backgroundImage: `url(${slides})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <SliderMain />
            </>
          ))}

          {/* left arrow */}
          <div className="hidden my-[300px]  group-hover:block absolute top=[50%] -translate-x-0 translate-y-[-0%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactLeft size={30} onClick={prevSlider} className="" />
          </div>
          {/* right arrow */}
          <div className="hidden my-[300px]  group-hover:block absolute top=[50%] -translate-x-0 translate-y-[-0%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactRight size={30} onClick={nextSlider} />
          </div>

          {/* <button
        onClick={nextImage}
        className="absolute bottom-4 right-4 bg-blue-500 
        text-white px-4 py-2 rounded shadow hover:bg-blue-600"
      >
        Next Image
      </button> */}
        </div>

        <div className="flex top-4 justify-center py-2 ">
          {slides.map((slide, slideIndex) => (
            <div
              onClick={() => goToSlide(slideIndex)}
              key={slideIndex}
              className="text-2xl cursor-pointer"
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Slider;

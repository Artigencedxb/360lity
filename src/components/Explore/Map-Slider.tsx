"use client";
import React from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import { LeftArrow, RightArrow, UaeMap } from "@/assets";

const MapSlider = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [loaded, setLoaded] = React.useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });
  return (
    <>
      <div ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide flex items-center justify-center py-8">
          <Image src={UaeMap} alt="Uae Map" />
        </div>
        <div className="keen-slider__slide">2</div>
        <div className="keen-slider__slide">3</div>
      </div>
      <div className="flex items-center justify-center gap-4">
        <button
          onClick={(e: any) =>
            e.stopPropagation() || instanceRef.current?.prev()
          }
          disabled={currentSlide === 0}
        >
          <Image src={LeftArrow} alt="Left Arrow" />
        </button>
        <div className="font-semibold text-lg">United Arab Emirates</div>
        <button
          onClick={(e: any) =>
            e.stopPropagation() || instanceRef.current?.next()
          }
          disabled={
            currentSlide ===
            instanceRef.current?.track.details.slides.length! - 1
          }
        >
          <Image src={RightArrow} alt="Right Arrow" />
        </button>
      </div>
    </>
  );
};

export default MapSlider;

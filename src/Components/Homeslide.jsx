import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import Banner1 from '../assets/banner-1.png';
import Banner4 from '../assets/banner-4.png';
import Banner7 from '../assets/banner-7.png';

export default function Slider() {
    return (
        <div className="relative">
            <Swiper
                spaceBetween={10}
                navigation={{
                    nextEl: ".custom-next",
                    prevEl: ".custom-prev",
                }}
                autoplay={{
                    delay: 3000, // 3 seconds per slide
                    disableOnInteraction: false, // keep autoplay running after user clicks
                }}
                loop={true} // continuous loop
                modules={[Navigation, Autoplay]}
                className="sliderHome"
            >
                <SwiperSlide>
                    <img
                        src={Banner1}
                        alt="slider banner"
                        className="rounded-[20px] w-full"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src={Banner4}
                        alt="slider banner"
                        className="rounded-[20px] w-full"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src={Banner7}
                        alt="slider banner"
                        className="rounded-[20px] w-full"
                    />
                </SwiperSlide>
            </Swiper>

            {/* Custom Buttons */}
            <button className="custom-prev absolute top-1/2 left-3 z-10 -translate-y-1/2 bg-white text-black shadow-md w-10 h-10 flex items-center justify-center rounded-full hover:bg-red-500 hover:text-white transition">
                <IoChevronBack size={22} />
            </button>
            <button className="custom-next absolute top-1/2 right-3 z-10 -translate-y-1/2 bg-white text-black shadow-md w-10 h-10 flex items-center justify-center rounded-full hover:bg-red-500 hover:text-white transition">
                <IoChevronForward size={22} />
            </button>
        </div>
    );
}

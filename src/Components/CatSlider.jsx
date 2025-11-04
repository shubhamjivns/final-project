import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css/navigation";
import './Swiper.css';

const products = [
    { name: "Smart LED Bulb", img: "/images/bulb.jpg", price: "₹499" },
    { name: "LED Tube Light", img: "/images/tube.jpg", price: "₹899" },
    { name: "Decorative Lamp", img: "/images/lamp2.jpg", price: "₹1299" },
    { name: "Ceiling Panel Light", img: "/images/panel.jpg", price: "₹1599" },
];

const ProductSlider = () => {
    return (
        <section className="bg-white py-12">
            <h2 className="text-center text-3xl font-bold mb-6 text-gray-800">
                Featured Products
            </h2>
            <div className="max-w-6xl mx-auto">
                <Swiper
                    spaceBetween={20}
                    slidesPerView={4}
                    navigation
                    autoplay={{ delay: 3000 }}
                    modules={[Navigation, Autoplay]}
                    breakpoints={{
                        320: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 4 },
                    }}
                >
                    {products.map((p, i) => (
                        <SwiperSlide key={i}>
                            <div className="p-4 shadow-md rounded-2xl hover:shadow-xl transition-all duration-300">
                                <img
                                    src={p.img}
                                    alt={p.name}
                                    className="w-full h-48 object-cover rounded-xl"
                                />
                                <h3 className="mt-3 text-lg font-semibold">{p.name}</h3>
                                <p className="text-indigo-600 font-bold">{p.price}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default ProductSlider;

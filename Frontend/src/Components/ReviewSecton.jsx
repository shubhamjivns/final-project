import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const testimonials = [
    { name: "Amit Sharma", text: "Best lighting store! My home looks amazing now." },
    { name: "Neha Verma", text: "Top-quality products with fast delivery." },
    { name: "Ravi Kumar", text: "Smart lights are awesome and easy to use." },
];

const Testimonials = () => {
    return (
        <section className="py-16 bg-indigo-50">
            <h2 className="text-center text-3xl font-bold text-gray-800 mb-8">
                What Our Customers Say
            </h2>
            <Swiper autoplay={{ delay: 3000 }} modules={[Autoplay]} slidesPerView={1}>
                {testimonials.map((t, i) => (
                    <SwiperSlide key={i}>
                        <div className="max-w-3xl mx-auto bg-white shadow-md p-8 rounded-2xl text-center">
                            <p className="text-gray-700 italic mb-4">"{t.text}"</p>
                            <h4 className="font-semibold text-indigo-700">{t.name}</h4>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Testimonials;

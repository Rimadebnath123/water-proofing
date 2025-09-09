import React from "react";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";

// Testimonial Data
const testimonials = [
    {
        id: 1,
        name: "Sarah Johnson",
        role: "Homeowner",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        rating: 5,
        review:
            "Eastern Waterproofing transformed our problematic bathroom completely. No more leaks or moisture issues. Their team was professional and the results exceeded our expectations.",
    },
    {
        id: 2,
        name: "Michael Smith",
        role: "Villa Owner",
        image: "https://randomuser.me/api/portraits/men/46.jpg",
        rating: 4,
        review:
            "Very good service. They fixed the seepage issues in my bathroom with precision. I'm impressed with their professionalism.",
    },
    {
        id: 3,
        name: "Carry Brown",
        role: "Apartment Owner",
        image: "https://randomuser.me/api/portraits/women/47.jpg",
        rating: 5,
        review:
            "Amazing experience! My bathroom looks brand new after their waterproofing service. Highly recommended.",
    },
];

export default function CustomerSuccessStories() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 400,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: true,
    };

    return (
        <section className="py-16 px-6 max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Customer Success Stories</h2>

            <Slider {...settings}>
                {testimonials.map((t) => (
                    <div key={t.id}>
                        <div className="bg-white shadow-md rounded-xl p-6 flex flex-col md:flex-row items-center text-left">
                            {/* Customer Image */}
                            <img
                                src={t.image}
                                alt={t.name}
                                className="w-16 h-16 md:w-20 md:h-20 rounded-full border-4 border-blue-500 md:mr-6 mb-4 md:mb-0"
                            />

                            {/* Right Side: Name, Role, Stars, Review */}
                            <div className="flex-1">
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                                    <div>
                                        <h4 className="font-semibold text-lg">{t.name}</h4>
                                        <p className="text-sm text-gray-500">{t.role}</p>
                                    </div>

                                    {/* Rating */}
                                    <div className="flex mt-2 md:mt-0">
                                        {Array.from({ length: t.rating }).map((_, i) => (
                                            <FaStar key={i} className="text-yellow-500" />
                                        ))}
                                    </div>
                                </div>

                                {/* Review */}
                                <p className="text-gray-700 italic mt-3">“{t.review}”</p>
                            </div>
                        </div>
                    </div>

                ))}
            </Slider>
        </section>
    );
}

import React from "react";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";

// ✅ Reusable Slider Component
const TestimonialSlider = ({ title, testimonials }) => {
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
            <h2 className="text-3xl font-bold mb-8">{title}</h2>

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

                            {/* Right Side */}
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
};

// ✅ Testimonial Data
// ✅ Testimonial Data
const testimonialsData = {
    bathroom: {
        title: "Bathroom Waterproofing Success Stories",
        items: [
            {
                id: 1,
                name: "Sarah Johnson",
                role: "Homeowner",
                image: "https://randomuser.me/api/portraits/women/44.jpg",
                rating: 5,
                review: "Eastern Waterproofing transformed our bathroom. No more leaks or moisture issues!",
            },
            {
                id: 2,
                name: "Michael Smith",
                role: "Villa Owner",
                image: "https://randomuser.me/api/portraits/men/46.jpg",
                rating: 4,
                review: "They fixed the seepage in my bathroom perfectly. Great job!",
            },
            {
                id: 3,
                name: "Carry Brown",
                role: "Apartment Owner",
                image: "https://randomuser.me/api/portraits/women/47.jpg",
                rating: 5,
                review: "Amazing experience! My bathroom looks brand new after their service.",
            },
            {
                id: 4,
                name: "Rohit Sharma",
                role: "Flat Owner",
                image: "https://randomuser.me/api/portraits/men/48.jpg",
                rating: 5,
                review: "Professional work. My bathroom is now completely waterproof and looks great.",
            },
        ],
    },
    terrace: {
        title: "Terrace Waterproofing Success Stories",
        items: [
            {
                id: 1,
                name: "Arjun Mehta",
                role: "Apartment Owner",
                image: "https://randomuser.me/api/portraits/men/22.jpg",
                rating: 5,
                review: "After their terrace waterproofing, heavy rains are no longer a problem!",
            },
            {
                id: 2,
                name: "Priya Sharma",
                role: "Homeowner",
                image: "https://randomuser.me/api/portraits/women/23.jpg",
                rating: 5,
                review: "They sealed every corner of our terrace. No more water seepage at all!",
            },
            {
                id: 3,
                name: "Karan Singh",
                role: "Villa Owner",
                image: "https://randomuser.me/api/portraits/men/24.jpg",
                rating: 4,
                review: "Good service and quick work. Our terrace feels much stronger now.",
            },
            {
                id: 4,
                name: "Neha Gupta",
                role: "Flat Owner",
                image: "https://randomuser.me/api/portraits/women/25.jpg",
                rating: 5,
                review: "Excellent finishing! The terrace is completely waterproof.",
            },
        ],
    },
    wall: {
        title: "Wall Waterproofing Success Stories",
        items: [
            {
                id: 1,
                name: "Ravi Patel",
                role: "Flat Owner",
                image: "https://randomuser.me/api/portraits/men/52.jpg",
                rating: 4,
                review: "Our walls used to have damp patches, now they look fresh and dry.",
            },
            {
                id: 2,
                name: "Anita Desai",
                role: "Homeowner",
                image: "https://randomuser.me/api/portraits/women/53.jpg",
                rating: 5,
                review: "Professional and reliable wall waterproofing service.",
            },
            {
                id: 3,
                name: "Manish Kumar",
                role: "Tenant",
                image: "https://randomuser.me/api/portraits/men/54.jpg",
                rating: 5,
                review: "No more paint damage or mold. Really happy with the service.",
            },
            {
                id: 4,
                name: "Sneha Reddy",
                role: "Homeowner",
                image: "https://randomuser.me/api/portraits/women/55.jpg",
                rating: 5,
                review: "My walls are dry and fresh, the dampness is completely gone!",
            },
        ],
    },
    foundation: {
        title: "Foundation Waterproofing Success Stories",
        items: [
            {
                id: 1,
                name: "Vikram Rao",
                role: "Builder",
                image: "https://randomuser.me/api/portraits/men/72.jpg",
                rating: 5,
                review: "Foundation waterproofing was done with care. Strong and leak-proof base now.",
            },
            {
                id: 2,
                name: "Neha Verma",
                role: "Engineer",
                image: "https://randomuser.me/api/portraits/women/73.jpg",
                rating: 5,
                review: "The team ensured our foundation is safe from water damage. Impressive work!",
            },
            {
                id: 3,
                name: "John Carter",
                role: "Contractor",
                image: "https://randomuser.me/api/portraits/men/74.jpg",
                rating: 4,
                review: "Reliable work, my project foundation is completely secured now.",
            },
            {
                id: 4,
                name: "Pooja Nair",
                role: "Architect",
                image: "https://randomuser.me/api/portraits/women/75.jpg",
                rating: 5,
                review: "They provided a strong foundation waterproofing solution. Excellent service!",
            },
        ],
    },
    swimmingpool: {
        title: "Swimming Pool Waterproofing Success Stories",
        items: [
            {
                id: 1,
                name: "Rahul Khanna",
                role: "Resort Owner",
                image: "https://randomuser.me/api/portraits/men/82.jpg",
                rating: 5,
                review: "The waterproofing was excellent, our pool is leak-free and looks stunning!",
            },
            {
                id: 2,
                name: "Sonia Agarwal",
                role: "Villa Owner",
                image: "https://randomuser.me/api/portraits/women/83.jpg",
                rating: 5,
                review: "Professional service! My pool area is completely sealed and safe.",
            },
            {
                id: 3,
                name: "David Fernandes",
                role: "Hotel Manager",
                image: "https://randomuser.me/api/portraits/men/84.jpg",
                rating: 4,
                review: "They handled our hotel pool waterproofing really well. Highly recommended.",
            },
            {
                id: 4,
                name: "Meera Joshi",
                role: "Homeowner",
                image: "https://randomuser.me/api/portraits/women/85.jpg",
                rating: 5,
                review: "No more leakage or dampness near the pool. Excellent finishing!",
            },
        ],
    },
};


// ✅ Main Component
export default function CustomerSuccessStories({ type }) {
    const data = testimonialsData[type];
    if (!data) return null;

    return <TestimonialSlider title={data.title} testimonials={data.items} />;
}

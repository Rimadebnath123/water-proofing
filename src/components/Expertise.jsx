import React from 'react';
import { CheckCircle } from 'lucide-react';
import { FaSearch, FaMicrophone, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";


function Expertise() {
    return (
        <div className="min-h-screen mt-10 ">
            {/* Header */}
            <header className="bg-white shadow-sm relative">
                <section
                    className="group relative bg-cover bg-center min-h-[460px] flex items-end overflow-hidden"
                    style={{
                        backgroundImage:
                            "url('https://sika.scene7.com/is/image/sika/th-Basement-Waterproofing-SikaProof-612:16-9?wid=1920&hei=1080&fit=crop%2C1')",
                    }}
                >
                    {/* Hover Zoom Effect */}
                    <div
                        className="absolute inset-0 transition-transform duration-500 ease-in-out scale-100 group-hover:scale-105 z-0"
                        style={{
                            backgroundImage:
                                "url('https://sika.scene7.com/is/image/sika/th-Basement-Waterproofing-SikaProof-612:16-9?wid=1920&hei=1080&fit=crop%2C1')",
                            backgroundSize: 'cover',
                            backgroundPosition: 'center top', // crop from bottom
                        }}
                    ></div>
                </section>

                {/* Overlay box */}
                <div className="absolute bottom-[-4rem] left-1/2 transform -translate-x-1/2 z-10 w-[70vw] bg-white text-white rounded-3xl border-2 border-gray-200 shadow-2xl px-6 py-5 md:px-12 md:py-8 text-center">
                    <h1 className="text-3xl text-black md:text-4xl font-bold">
                        Eastern Waterproofing Services
                    </h1>
                    <p className="mt-4 text-black text-base md:text-lg">
                        Your Trusted Waterproofing Expert Since 2010
                    </p>
                </div>
            </header>

            {/* Section 1: Swimming Pool Waterproofing - Image Right */}
            <section className="mt-4 py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Swimming Pool Waterproofing</h2>
                                <p className="text-gray-700 text-lg leading-relaxed">
                                    Comprehensive pool protection using high-performance membranes and chemical-resistant coatings to prevent leakage, withstand water pressure, and maintain long-term structural integrity.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Benefits:</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                                        <span className="text-gray-700">Chlorine-resistant and leak-proof</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                                        <span className="text-gray-700">Ensures structural durability under constant water pressure</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                                        <span className="text-gray-700">Reduces maintenance and long-term repair costs</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-blue-50 border-l-4 border-blue-600 p-6">
                                <h4 className="font-semibold text-gray-900 mb-2">Our Expertise:</h4>
                                <p className="text-gray-700 italic">
                                    Over 100+ successful swimming pool waterproofing projects completed with zero callbacks—using proprietary sealing systems and advanced coating technologies for flawless, long-lasting results
                                </p>
                            </div>

                            <button className="bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-900 transition-colors">
                                <Link to="/SwimmingpoolWaterproofing">Learn More</Link>
                            </button>
                        </div>

                        <div className="lg:order-last">
                            <img
                                src="https://everdrytoledo.com/wp-content/uploads/2025/04/20250409-EverDry-Shoot-Job-Site_8-scaled.webp"
                                alt="Basement waterproofing"
                                className="w-full h-96 object-cover rounded-lg shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2: Terrace Waterproofing - Image Left */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="lg:order-first">
                            <img
                                src="https://static.wixstatic.com/media/ba2cd3_a1f25891b95f4b79884283b8f280d8e2~mv2.jpg"
                                alt="Roof waterproofing"
                                className="w-full h-96 object-cover rounded-lg shadow-lg"
                            />
                        </div>

                        <div className="space-y-8">
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Terrace Waterproofing</h2>
                                <p className="text-gray-700 text-lg leading-relaxed">
                                    Advanced roofing solutions with multi-layer protection systems, ensuring complete water
                                    resistance and thermal regulation for all types of roof structures.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Benefits:</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                                        <span className="text-gray-700">Weather-resistant coating</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                                        <span className="text-gray-700">Energy-efficient solution</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                                        <span className="text-gray-700">5-year warranty</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-blue-50 border-l-4 border-blue-600 p-6">
                                <h4 className="font-semibold text-gray-900 mb-2">Our Expertise:</h4>
                                <p className="text-gray-700 italic">
                                    Certified team specializing in innovative roof coating technologies with experience in
                                    handling diverse architectural designs and weather conditions.
                                </p>
                            </div>

                            <button className="bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-900 transition-colors">
                                <Link to="/TerraceWaterproofing">Learn More</Link>
                            </button>
                            
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3: Wall Waterproofing - Image Right */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Wall Waterproofing</h2>
                                <p className="text-gray-700 text-lg leading-relaxed">
                                    State-of-the-art wall protection services using penetrative sealants and protective coatings
                                    to prevent water seepage and maintain structural integrity.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Benefits:</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                                        <span className="text-gray-700">Prevents paint damage</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                                        <span className="text-gray-700">Reduces humidity</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                                        <span className="text-gray-700">Enhanced wall life</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-blue-50 border-l-4 border-blue-600 p-6">
                                <h4 className="font-semibold text-gray-900 mb-2">Our Expertise:</h4>
                                <p className="text-gray-700 italic">
                                    Industry leaders in wall protection with patented application methods and 99.9%
                                    success rate in moisture control and structural preservation.
                                </p>
                            </div>

                            <button className="bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-900 transition-colors">
                                <Link to="/WallWaterproofing">Learn More</Link>
                            </button>
                        </div>

                        <div className="lg:order-last">
                            <img
                                src="https://londondamptreatments.co.uk/app/uploads/2021/11/brick-stone-slate-332437458-img5.jpg"
                                alt="Wall waterproofing"
                                className="w-full h-96 object-cover rounded-lg shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 4: Bathroom Waterproofing - Image Left */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="lg:order-first">
                            <img
                                src="src/assets/bathroom-interior.jpg"
                                alt="Bathroom waterproofing"
                                className="w-full h-96 object-cover rounded-lg shadow-lg"
                            />
                        </div>

                        <div className="space-y-8">
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Bathroom Waterproofing</h2>
                                <p className="text-gray-700 text-lg leading-relaxed">
                                    Complete bathroom waterproofing solutions including floor, walls, and joints using
                                    premium-grade materials and advanced sealing techniques for lasting protection.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Benefits:</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                                        <span className="text-gray-700">Zero leakage guarantee</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                                        <span className="text-gray-700">Anti-fungal protection</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                                        <span className="text-gray-700">Long-term durability</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-blue-50 border-l-4 border-blue-600 p-6">
                                <h4 className="font-semibold text-gray-900 mb-2">Our Expertise:</h4>
                                <p className="text-gray-700 italic">
                                    Specialized in modern bathroom waterproofing with certified professionals
                                    and 5+ years of exclusive bathroom protection experience and expertise.
                                </p>
                            </div>

                            <button className="bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-900 transition-colors">
                                <Link to="/bathroomWaterproofing">Learn More</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 5: Foundation Waterproofing - Image Right */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Foundation Waterproofing</h2>
                                <p className="text-gray-700 text-lg leading-relaxed">
                                    Comprehensive foundation protection services using cutting-edge materials and
                                    techniques to ensure structural stability and prevent water damage effectively.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Benefits:</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                                        <span className="text-gray-700">Structural reinforcement</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                                        <span className="text-gray-700">Crack prevention</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                                        <span className="text-gray-700">Drainage optimization</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-blue-50 border-l-4 border-blue-600 p-6">
                                <h4 className="font-semibold text-gray-900 mb-2">Our Expertise:</h4>
                                <p className="text-gray-700 italic">
                                    Leading foundation waterproofing experts with deep understanding of soil dynamics
                                    and structural engineering principles for maximum foundation protection.
                                </p>
                            </div>

                            <button className="bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-900 transition-colors">
                                <Link to="/FoundationWaterproofing">Learn More</Link>
                            </button>
                        </div>

                        <div className="lg:order-last">
                            <img
                                src="https://plus.unsplash.com/premium_photo-1682724602925-f0264b85953f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YnVpbGRpbmclMjBjb25zdHJ1Y3Rpb258ZW58MHx8MHx8fDA%3D"
                                alt="Foundation waterproofing"
                                className="w-full h-96 object-cover rounded-lg shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            {/* <footer className="bg-gray-800 text-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-gray-300">© 2024 Waterproofing Services. Professional protection solutions.</p>
                </div>
            </footer> */}

            {/* Footer */}
            <footer className="bg-black text-white py-8 px-4 border-t border-gray-700">
                <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-8">
                    <div>
                        <h4 className="font-bold mb-2">Eastern Waterproofing</h4>
                        <p className="text-sm text-gray-400">Your trusted partner since 2010.</p>
                    </div>
                    <div>
                        <h4 className="font-bold mb-2">Services</h4>
                        <ul className="text-sm space-y-1 text-gray-400">
                            <li>Swimming Pool Waterproofing</li>
                            <li>Foundation Sealing</li>
                            <li>Leak Repair</li>
                            <li>Drainage Systems</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-2">Company</h4>
                        <ul className="text-sm space-y-1 text-gray-400">
                            <li>About Us</li>
                            <li>Our Team</li>
                            <li>Careers</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-2">Resources</h4>
                        <ul className="text-sm space-y-1 text-gray-400">
                            <li>Blog</li>
                            <li>Case Studies</li>
                            <li>Warranty</li>
                            <li>FAQ</li>
                        </ul>
                    </div>
                </div>
                <div className="text-center text-xs text-gray-500 mt-8">
                    © 2025 Eastern Waterproofing. All rights reserved. | Privacy Policy | Terms of Service
                </div>
            </footer>
        </div>
    );
}

export default Expertise;
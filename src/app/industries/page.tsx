'use client';
import Header from '@/components/Header';

const industries = [
    { 
        title: "Automotive", 
        description: "Optimize production and supply chain management with real-time insights.", 
        image: "/images/automotive.jpeg" 
    },
    { 
        title: "Pharmaceuticals", 
        description: "Enhance quality control and traceability to ensure compliance.", 
        image: "/images/pharmaceuticals.png" 
    },
    { 
        title: "Electronics", 
        description: "Streamline production with automation and smart manufacturing solutions.", 
        image: "/images/electronics.jpg" 
    },
];

export default function Industries() {
    return (
        <>
            <Header
                title="Industries We Serve"
                subtitle="From automotive to pharmaceuticals, our technology enhances efficiency across a range of industries."
                backgroundVideo='/videos/industries_bg_video.mp4'
            />
            <section id="industries" className="py-16">
                <h2 className="text-3xl font-bold text-center mb-10">Key Industries</h2>
                <div className="flex flex-wrap gap-6 justify-center relative z-10">
                    {industries.map((industry, index) => (
                        <div key={index} className="relative group w-80 h-60 p-6 border rounded-lg shadow-lg transition-transform transform hover:scale-105 bg-theme_dark_gray">
                            <div 
                                className="absolute inset-0 rounded-lg" 
                                style={{ backgroundImage: `url(${industry.image})`, backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.3 }} 
                            ></div>
                            <div className="relative z-10"> {/* This div ensures text is above the background */}
                                <h3 className="text-2xl font-semibold mb-8 text-center">{industry.title}</h3>
                                <p className="text-center">{industry.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}

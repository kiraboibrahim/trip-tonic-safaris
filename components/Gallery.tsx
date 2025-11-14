import Image from "next/image";
import { useState } from "react";

interface GalleryImage {
    src: string;
    title?: string;
    location?: string;
}

export default function Gallery() {
    const images: GalleryImage[] = [
        { src: "/img/bridge-crossing.jpeg", title: "Lake Bunyonyi", location: "Kabale" },
        { src: "/img/tourist-swimming.jpeg", title: "Sipi Falls", location: "Kapchorwa" },
        { src: "/img/tourist-with-gorilla.jpeg", title: "Game Drive", location: "Murchison Falls NP" },
        { src: "/img/tourists-under-waterfall.jpeg", title: "Gorilla Trekking", location: "Bwindi" },
        { src: "/img/tourist-trek.jpeg", title: "Rwenzori Hike", location: "Kasese" },
        { src: "/img/tourists-behind-waterfall.jpeg", title: "Kazinga Channel", location: "Queen Elizabeth NP" },
    ];

    const [selected, setSelected] = useState<GalleryImage | null>(null);

    return (
        <div id="gallery">
            {/* Page Header */}
            <div className="container mx-auto px-4 py-10">
                <h1 className="text-4xl font-bold text-center mb-8">
                    Travel Moments Gallery
                </h1>

                {/* Masonry Gallery */}
                <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
                    {images.map((img, i) => (
                        <div
                            key={i}
                            className="relative overflow-hidden rounded-xl break-inside-avoid cursor-pointer group shadow-lg"
                            onClick={() => setSelected(img)}
                        >
                            <Image
                                src={img.src}
                                alt={img.title || ""}
                                width={600}
                                height={400}
                                className="w-full h-auto transition-transform duration-500 group-hover:scale-105 rounded-xl"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center rounded-xl">
                                <div className="text-center px-4">
                                    <h3 className="text-white text-lg font-semibold">{img.title}</h3>
                                    {img.location && (
                                        <p className="text-gray-200 text-sm">{img.location}</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            {selected && (
                <div
                    className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[9999] flex items-center justify-center cursor-zoom-out"
                    onClick={() => setSelected(null)}
                >
                    <div
                        className="cursor-default max-w-4xl mx-auto px-4"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            src={selected.src}
                            alt={selected.title || ""}
                            width={1200}
                            height={800}
                            className="rounded-xl w-full h-auto"
                        />

                        <div className="text-center mt-4">
                            <h3 className="text-white text-2xl font-semibold">{selected.title}</h3>
                            {selected.location && (
                                <p className="text-gray-300 text-lg">{selected.location}</p>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

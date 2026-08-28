'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { useState } from 'react';

interface TestimonialsProps {
    data: any[];
}

export const Testimonials = ({ data }: TestimonialsProps) => {
    const [isHovered, setIsHovered] = useState(false);

    if (!data || data.length === 0) {
        return (
            <div className="w-full py-12 text-center">
                <h2 className="text-3xl font-bold text-white mb-4">
                    What Our Clients Say
                </h2>
                <p className="text-white/60">No reviews yet. Be the first to share your experience!</p>
            </div>
        );
    }

    // Duplicate testimonials for infinite scroll effect
    const duplicated = [...data, ...data];

    return (
        <div className="w-full py-12">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-white mb-8 text-center">
                    What Our Clients Say
                </h2>

                <div className="relative rounded-[10px] overflow-hidden">
                    <div
                        className="flex gap-6 rounded-[10px] overflow-hidden"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <div
                            className={`flex gap-6 animate-scroll ${isHovered ? 'pause-animation' : ''}`}
                        >
                            {duplicated.map((testimonial: any, index: number) => (
                                <motion.div
                                    key={`${testimonial.reviewId}-${index}`}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: (index % data.length) * 0.1 }}
                                    className="w-[300px] flex-shrink-0 rounded-xl bg-white/10 p-6 border border-white/10 hover:border-white/30 transition-all duration-300"
                                >
                                    <div className="flex items-start gap-4">
                                        <img
                                            src={"/images/dp.jpg"}
                                            alt={testimonial.review?.serviceRequest?.firstName || "User"}
                                            loading="lazy"
                                            className="w-12 h-12 rounded-full object-cover ring-2 ring-white/20"
                                        />
                                        <div>
                                            <h3 className="text-white font-medium">
                                                {(testimonial.review?.serviceRequest?.firstName || "").charAt(0).toUpperCase() +
                                                    (testimonial.review?.serviceRequest?.firstName || "").slice(1).toLowerCase()}{" "}
                                                {(testimonial.review?.serviceRequest?.lastName || "").charAt(0).toUpperCase() +
                                                    (testimonial.review?.serviceRequest?.lastName || "").slice(1).toLowerCase()}
                                            </h3>
                                            <p className="text-white/60 text-sm">
                                                {testimonial.review?.serviceRequest?.service?.name || "Service"}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-1 mt-3">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className={`w-4 h-4 ${
                                                    i < (testimonial.review?.rating || 0)
                                                        ? 'text-yellow-400 fill-yellow-400'
                                                        : 'text-gray-600'
                                                }`}
                                            />
                                        ))}
                                    </div>
                                    <p className="mt-4 text-white/80 text-sm line-clamp-3">
                                        &quot;{testimonial.review?.review || ""}&quot;
                                    </p>
                                    <div className="mt-4 flex items-center justify-between">
                                        <span className="text-white/40 text-xs">{testimonial.date}</span>
                                        <span className="text-xs text-emerald-400/80">Verified Customer</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Gradient Overlays */}
                    <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-[rgb(6,8,20)] to-transparent pointer-events-none"></div>
                    <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-[rgb(6,8,20)] to-transparent pointer-events-none"></div>
                </div>
            </div>

            <style jsx global>{`
                @keyframes scroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }

                .animate-scroll {
                    animation: scroll 30s linear infinite;
                    will-change: transform;
                }

                .pause-animation {
                    animation-play-state: paused;
                }
            `}</style>
        </div>
    );
};
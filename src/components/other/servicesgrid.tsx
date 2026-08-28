import React from "react";
import ServiceCard from "@/src/components/other/servicecard";

interface Service {
    id: string;
    name: string;
    description?: string;
    category: string;
    basePrice: number;
    estimatedTime?: string;
    rating: number;
    includes?: string;
    imageUrl?: string;
    averageRating: number;
    totalOrders: number;
    completedOrders: number;
    approvedReviews: any[];
}

interface ServicesGridProps {
    services: Service[];
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({ services }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-6">
            {services.map((service) => (
                <ServiceCard
                    key={service.id}
                    service={service}
                />
            ))}
        </div>
    );
};

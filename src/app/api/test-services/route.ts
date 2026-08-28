import { NextResponse } from "next/server";
import { db } from "@/src/lib/db";

export async function GET() {
    const start = performance.now();

    try {
        const services = await db.service.findMany({
            select: {
                id: true,
                name: true,
                description: true,
                category: true,
                basePrice: true,
                estimatedTime: true,
                includes: true,
                imageUrl: true,

                requests: {
                    select: {
                        id: true,
                        status: true,

                        Review: {
                            where: {
                                status: "true",
                            },
                            select: {
                                id: true,
                                rating: true,
                            },
                        },
                    },
                },
            },
        });

        const queryDurationMs = performance.now() - start;

        return NextResponse.json({
            success: true,
            count: services.length,
            queryTimeMs: Number(queryDurationMs.toFixed(2)),
        });
    } catch (error) {
        console.error("Error fetching services:", error);

        return NextResponse.json(
            {
                success: false,
                error: "Failed to fetch services",
            },
            { status: 500 }
        );
    }
}
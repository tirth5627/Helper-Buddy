import { NextResponse } from "next/server";
import { db } from "@/src/lib/db";

export async function GET() {
    const start = performance.now();

    try {
        const services = await db.service.findMany({
            include: {
                requests: {
                    select: {
                        id: true,
                        status: true,
                        Review: {
                            where: {
                                status: "true",
                            },
                            select: {
                                rating: true,
                            },
                        },
                    },
                },
            },
        });

        const duration = performance.now() - start;

        return NextResponse.json({
            success: true,
            count: services.length,
            queryTimeMs: Number(duration.toFixed(2)),
        });
    } catch (error) {
        console.error(error);

        return NextResponse.json(
            { success: false },
            { status: 500 }
        );
    }
}
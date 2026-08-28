"use client";

import { motion } from "framer-motion";

export function MotionWrapper({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-full">
            {children}
        </div>
    );
}

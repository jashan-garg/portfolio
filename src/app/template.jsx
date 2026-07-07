'use client';

import { motion } from 'framer-motion';
import PixelSnow from '../components/PixelSnow.jsx';

export default function Template({ children }) {
    return (
        <motion.div
            className="relative"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{
                duration: 0.4,
                ease: 'easeOut',
            }}
        >
            {/* Background effect */}
            <div className="fixed inset-0 -z-10 -top-400">
                <PixelSnow
                    color="#D9A6A6"
                    flakeSize={0.022}
                    minFlakeSize={1.25}
                    pixelResolution={500}
                    speed={0.6}
                    density={0.9}
                    direction={0}
                    brightness={2.6}
                    depthFade={4}
                    farPlane={8}
                    gamma={0.4545}
                    variant="snowflake"
                />
            </div>

            {/* Foreground content */}
            <div className="relative z-10">{children}</div>
        </motion.div>
    );
}

'use client';

import { motion } from 'framer-motion';
import Particles from '../components/Particles.jsx';

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
            <div className="absolute inset-0 -z-10 -top-30">
                <Particles
                    particleCount={800}
                    particleSpread={8}
                    speed={0.35}
                    particleColors={['#ff4d2d', '#ff7f50', '#ffa07a']}
                    moveParticlesOnHover={false}
                    particleHoverFactor={1}
                    alphaParticles={false}
                    particleBaseSize={200}
                    sizeRandomness={1}
                    cameraDistance={20}
                    disableRotation={true}
                />
            </div>

            {/* Foreground content */}
            <div className="relative z-10">{children}</div>
        </motion.div>
    );
}

"use client"
import React, { useEffect, useRef, useState } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion';


interface RevealProps {
    children: React.ReactNode;
    width?: "fit-content" | "100%";
}

export default function Reveal({ children, width = 'fit-content' }: RevealProps) {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true });
    const controls = useAnimation();
    const sildeControle = useAnimation();

    useEffect(() => {
        if (inView) {
            controls.start('visible');
            sildeControle.start('visible');
        }
    }, [inView]);
    return (
        <div ref={ref} style={{ position: 'relative', width}}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 }
                }}
                initial='hidden'
                animate={controls}
                transition={{ duration: 0.5, delay: 0.3 }}
            >
                {children}
            </motion.div>
            <motion.div
            variants={{
                hidden: {left:0},
                visible: {left: '100%'}
            }}
            initial='hidden'
            animate={sildeControle}
            transition={{duration: 0.5 , ease:'easeIn'}}
            style={{
                position: 'absolute',
                top: 4,
                bottom: 4,
                left: 0,
                right: 0,
                zIndex: 20,
                background: '#FF5D7D'
            }}
            />

        </div>
    )
}

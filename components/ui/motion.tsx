"use client";

import { motion, MotionProps } from "framer-motion";
import * as React from "react";

// Motion variants with reduced-motion support
export const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

// Wrapper components that respect prefers-reduced-motion
interface MotionDivProps extends MotionProps {
  children: React.ReactNode;
  className?: string;
}

export const FadeInUpDiv = React.forwardRef<HTMLDivElement, MotionDivProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className={className}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);
FadeInUpDiv.displayName = "FadeInUpDiv";

export const FadeInDiv = React.forwardRef<HTMLDivElement, MotionDivProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className={className}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);
FadeInDiv.displayName = "FadeInDiv";

export const StaggerContainer = React.forwardRef<HTMLDivElement, MotionDivProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
        className={className}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);
StaggerContainer.displayName = "StaggerContainer";

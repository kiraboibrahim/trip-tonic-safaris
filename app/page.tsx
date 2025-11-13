"use client";

import Head from "next/head";
import { motion, Variants } from "framer-motion";

import Topbar from "@/components/Topbar";
import Navbar from "@/components/Navbar";
import Carousel from "@/components/Carousel";
import BookingForm from "@/components/BookingForm";
import AboutSection from "@/components/AboutSection";
import FeatureSection from "@/components/FeatureSection";
import DestinationSection from "@/components/DestinationSection";
import ServicesSection from "@/components/ServicesSection";
import PackagesSection from "@/components/PackagesSection";
import RegistrationSection from "@/components/RegistrationSection";
import TeamSection from "@/components/TeamSection";
import TestimonialSection from "@/components/TestimonialSection";
import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.05,
            duration: 0.3,
            ease: [0.4, 0, 0.2, 1]
        },
    }),
};

export default function Home() {
    const sections = [
        <Carousel key="carousel" />,
        <BookingForm key="booking" />,
        <AboutSection key="about" />,
        <FeatureSection key="feature" />,
        <DestinationSection key="destination" />,
        <ServicesSection key="services" />,
        <PackagesSection key="packages" />,
        <RegistrationSection key="registration" />,
        <TeamSection key="team" />,
        <TestimonialSection key="testimonial" />,
        <BlogSection key="blog" />,
        <Footer key="footer" />,
    ];

    return (
        <>
            <Head>
                <title>Traveler | Explore the World</title>
            </Head>

            <Topbar />
            <Navbar />

            {sections.map((Section, i) => (
                <motion.div
                    key={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    custom={i}
                    variants={fadeUp}
                >
                    {Section}
                </motion.div>
            ))}
        </>
    );
}
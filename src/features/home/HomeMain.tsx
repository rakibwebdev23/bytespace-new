"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Banner from "./components/Banner";
import ByteSpaceCourses from "./components/ByteSpaceCourses";
import CompanyLogo from "./components/CompanyLogo";
import LearningPaths from "./components/LearningPaths";
import ProfessionalGrowth from "./components/ProfessionalGrowth";
import UnlockPotential from "./components/UnlockPotential";
import Testmonial from "./components/Testmonial";

export default function HomeMain() {
  const homeRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.registerPlugin(ScrollTrigger);

    const context = gsap.context(() => {
      const staggerGroups = gsap.utils.toArray<HTMLElement>(
        "[data-scroll-stagger]",
        homeRef.current ?? undefined,
      );

      staggerGroups.forEach((group) => {
        const cards = Array.from(group.children).filter(
          (child): child is HTMLElement =>
            child instanceof HTMLElement && child.hasAttribute("data-scroll-item"),
        );
        const staggerDelay = Number(group.dataset.scrollStagger) || 0.14;
        const duration = Number(group.dataset.scrollDuration) || 0.8;

        if (cards.length === 0) return;

        gsap.fromTo(
          cards,
          { autoAlpha: 0, y: 36 },
          {
            autoAlpha: 1,
            y: 0,
            duration,
            stagger: staggerDelay,
            ease: "power3.out",
            scrollTrigger: {
              trigger: group,
              start: "top 88%",
              toggleActions: "play none none reverse",
            },
          },
        );
      });

      const bannerCards = gsap.utils.toArray<HTMLElement>(
        "[data-banner-card]",
        homeRef.current ?? undefined,
      );

      bannerCards.forEach((card, index) => {
        gsap.fromTo(
          card,
          {
            autoAlpha: 0,
            y: 52,
            scale: 0.94,
            rotate: index === 1 ? 3 : -3,
          },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            rotate: 0,
            duration: 0.9,
            delay: index * 0.12,
            ease: "back.out(1.4)",
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          },
        );
      });

      const items = gsap.utils.toArray<HTMLElement>(
        "[data-scroll-item]",
        homeRef.current ?? undefined,
      );

      items.forEach((item) => {
        if (item.closest("[data-scroll-stagger]")) return;

        const isCourseCard = item.hasAttribute("data-course-card-reveal");

        gsap.fromTo(
          item,
          isCourseCard
            ? { autoAlpha: 0, y: 40, scale: 0.97 }
            : { autoAlpha: 0, y: 36 },
          {
            autoAlpha: 1,
            y: 0,
            ...(isCourseCard ? { scale: 1 } : {}),
            duration: 0.8,
            delay: Number(item.dataset.scrollDelay ?? 0),
            ease: isCourseCard ? "power2.out" : "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 88%",
              toggleActions: "play none none reverse",
            },
          },
        );
      });
    }, homeRef);

    return () => context.revert();
  }, []);

  return (
    <div ref={homeRef}>
      <Banner />
      <CompanyLogo />
      <ByteSpaceCourses />
      <LearningPaths />
      <ProfessionalGrowth />
      <UnlockPotential />
      <Testmonial />
    </div>
  );
}

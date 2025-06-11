
import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa6";

import { Spotlight } from "@/components/ui/spotlight";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { MagicButton } from "@/components/ui/magic-button";

export const Hero = () => {
  return (
    // <div className="pb-20 pt-6 md:pt-10 px-4 md:px-0 relative overflow-hidden">
      <div className="pb-20 pt-6 md:pt-6 px-4 md:px-0 relative overflow-hidden">

      <div>
        {/* Background Spotlights */}
        <Spotlight
          className="hidden md:block -left-10 -top-40 h-screen md:-left-32 md:-top-20"
          fill="white"
        />
        <Spotlight
          className="hidden md:block left-full top-10 h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight
          className="hidden md:block left-80 top-28 h-[80vh] w-[50vw]"
          fill="blue"
        />
      </div>

      {/* Overlay */}
      <div className="absolute left-0 top-0 flex h-screen w-full items-center justify-center bg-white bg-grid-black/[0.2] dark:bg-black-100 dark:bg-grid-white/[0.03] pointer-events-none">
        <div className="absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black-100" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[60vh] md:min-h-screen max-w-[90vw] md:max-w-2xl lg:max-w-[60vw] mx-auto mb-10">
        <h2 className="max-w-xs md:max-w-none text-center text-xs uppercase tracking-widest text-blue-100">
          Dynamic Web Magic with Next.js
        </h2>

        <TextGenerateEffect
          className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mt-2"
          words="Transforming Concepts into Seamless User Experiences"
        />

        <p className="mt-2 mb-6 text-center text-sm sm:text-base md:text-lg lg:text-xl md:tracking-wider">
          Hi, I&apos;m Tajamul Hassan, a Full Stack Web Developer based in Srinagar, Jammu & Kashmir.
        </p>

        {/* Buttons Section */}
        <div className="flex flex-col gap-4 sm:flex-row sm:gap-6 w-full sm:w-auto justify-center">
          <Link href="#about" className="w-full sm:w-auto">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
              asChild
            />
          </Link>

          <a
            href="/TajamulHassanResumeFull.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <MagicButton
              title="View Resume"
              icon={<FaLocationArrow />}
              position="right"
              asChild
            />
          </a>

          <a href="/TajamulHassanResumeFull.pdf" download className="w-full sm:w-auto">
            <MagicButton
              title="Download Resume"
              icon={<FaLocationArrow />}
              position="right"
              asChild
            />
          </a>
        </div>
      </div>
    </div>
  );
};

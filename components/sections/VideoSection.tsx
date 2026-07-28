"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";

const videos = [
  { src: "/videos/hero.mp4", title: "Hero Animation", colSpan: "md:col-span-2" },
  { src: "/videos/smallHero.mp4", title: "Small Hero Animation", colSpan: "md:col-span-1" },
  { src: "/videos/explore.mp4", title: "Explore Feature", colSpan: "md:col-span-1" },
  { src: "/videos/frame.mp4", title: "Frame Preview", colSpan: "md:col-span-1" },
  { src: "/videos/highlight-first.mp4", title: "Highlight 1", colSpan: "md:col-span-1" },
  { src: "/videos/hightlight-sec.mp4", title: "Highlight 2", colSpan: "md:col-span-1" },
  { src: "/videos/hightlight-third.mp4", title: "Highlight 3", colSpan: "md:col-span-1" },
  { src: "/videos/hightlight-fourth.mp4", title: "Highlight 4", colSpan: "md:col-span-1" },
];

export default function VideoSection() {
  return (
    <section id="videos" className="section-py relative bg-base border-t border-line">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Media"
          title="Video Gallery"
          description="A collection of dynamic video sequences and animations."
        />

        <div className="mt-14 grid gap-4 grid-cols-1 md:grid-cols-3">
          {videos.map((video, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`relative overflow-hidden rounded-2xl bg-surface border border-line ${video.colSpan || ""}`}
            >
              <div className="aspect-video w-full bg-ink-primary/5">
                <video
                  src={video.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="h-full w-full object-cover"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

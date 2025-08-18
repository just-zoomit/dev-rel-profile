// src/lib/codelabs.ts

export interface Codelab {
  title: string;
  description: string;
  duration: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  technologies: string[];
  url: string;
}

export const codelabs: Codelab[] = [
  {
    title: "Building a Task Manager for the Zoom Workplace Platform - Codelab Series",
    description: "11-part series on building a Task Manager Zoom Workplace app.",
    duration: "15 min",
    difficulty: "Advanced",
    technologies: ["Zoom Marketplace", "Node.js", "Postman"],
    url: "https://just-zoomit.github.io/multi-feature-zoom-manifest-file/#0",
  },
  {
    title: "Embed the Zoom meeting and webinar experience: Web Meeting SDK",
    description: "Create a video conferencing application using Zoom Meeting SDK and Next.js.",
    duration: "10 min",
    difficulty: "Beginner",
    technologies: ["Typescript", "Node.js", "React"],
    url: "https://just-zoomit.github.io/zoom-app-embed-web-msdk/#0",
  },
  {
    title: "Enable Zoom App Real Time Media Streams: Media-accessing apps",
    description: "Create a media-accessing Zoom Marketplace app.",
    duration: "30 min",
    difficulty: "Intermediate",
    technologies: ["Express", "MongoDB", "Node.js"],
    url: "https://just-zoomit.github.io/enable-rtms-zoomapp-sdk/#0",
  },
  {
    title: "Get started with Zoom Contact Center apps SDK",
    description: "Create a Zoom Contact Center app.",
    duration: "30 min",
    difficulty: "Intermediate",
    technologies: [ "Next.JS", "TailwindCSS","ShadCN",],
    url: "https://just-zoomit.github.io/zcc-get-started-codelab/#0",
  },
  {
    title: "Getting started with Zoom Apps SDK codelab",
    description: "Create a Zoom app.",
    duration: "30 min",
    difficulty: "Intermediate",
    technologies: [ "Next.JS", "TailwindCSS","ShadCN",],
    url: "https://just-zoomit.github.io/get-started-with-zoomapps-sdk/#0",
  },
  // …add more here
];

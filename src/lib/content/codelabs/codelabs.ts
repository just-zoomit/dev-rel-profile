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
    difficulty: "Intermediate",
    technologies: ["Zoom Marketplace", "Node.js", "Postman"],
    url: "https://just-zoomit.github.io/multi-feature-zoom-manifest-file/#0",
  },
  {
    title: "Embed the Zoom meeting and webinar experience: Web Meeting SDK",
    description: "Create a chat application using Zoom WebSockets, Node.js, and React.",
    duration: "10 min",
    difficulty: "Beginner",
    technologies: ["Typescript", "Node.js", "React"],
    url: "https://just-zoomit.github.io/zoom-app-embed-web-msdk/#0",
  },
  {
    title: "Enable Zoom App Real Time Media Streams: Media-accessing apps",
    description: "Build a Zoom app with Supabase authentication, Zoom Team Chat, and Zoom Team Chat Chatbot.",
    duration: "30 min",
    difficulty: "Beginner",
    technologies: ["Express", "MongoDB", "Node.js"],
    url: "https://just-zoomit.github.io/enable-rtms-zoomapp-sdk/#0",
  },
  // …add more here
];

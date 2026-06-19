export interface RoastApp {
  slug: string;
  title: string;
  description: string;
  videoId: string;
  repo: string;
  liveUrl?: string;
  tech: string[];
  difficulty?: "Beginner" | "Intermediate" | "Advanced";
}

export const roastApps: RoastApp[] = [
  {
    slug: "sample-zoom-meeting-app",
    title: "Sample Zoom Meeting Embed",
    description:
      "A minimal Next.js app embedding the Zoom Meeting SDK. Roast the auth flow, error handling, naming, and component structure.",
    videoId: "",
    repo: "just-zoomit/sample-zoom-meeting-app",
    liveUrl: "",
    tech: ["Next.js", "TypeScript", "Zoom Meeting SDK"],
    difficulty: "Beginner",
  },
];

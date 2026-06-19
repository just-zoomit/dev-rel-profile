export type VideoProvider = "youtube" | "loom";

export interface RoastVideo {
  provider: VideoProvider;
  id: string;
}

export interface RoastApp {
  slug: string;
  title: string;
  description: string;
  video?: RoastVideo;
  repo: string;
  liveUrl?: string;
  tech: string[];
  difficulty?: "Beginner" | "Intermediate" | "Advanced";
}

export const videoEmbedUrl = (v: RoastVideo): string => {
  switch (v.provider) {
    case "youtube":
      return `https://www.youtube.com/embed/${v.id}`;
    case "loom":
      return `https://www.loom.com/embed/${v.id}`;
  }
};

export const roastApps: RoastApp[] = [
  {
    slug: "human-in-the-loop-workplace-agent-sample",
    title: "Human-in-the-Loop Workplace Agent",
    description:
      "A human-in-the-loop AI agent sample for Zoom Workplace. Roast the agent loop design, approval/escalation flow, prompt handling, error states, and Zoom integration patterns.",
    video: { provider: "loom", id: "ab064e9f74d84050aee47c9188991fe7" },
    repo: "zoom/human-in-the-loop-workplace-agent-sample",
    tech: ["TypeScript", "AI Agents", "Zoom Workplace"],
    difficulty: "Advanced",
  },
];

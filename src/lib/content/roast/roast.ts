export type VideoProvider = "youtube" | "loom";

export interface RoastVideo {
  provider: VideoProvider;
  id: string;
}

export interface WorkflowStep {
  title: string;
  description: string;
}

export type Difficulty = "Beginner" | "Intermediate" | "Advanced";

export interface RoastApp {
  slug: string;
  title: string;
  summary: string;
  whyBuilt?: string;
  problem?: string;
  workflow?: WorkflowStep[];
  video?: RoastVideo;
  repo: string;
  liveUrl?: string;
  tech: string[];
  zoomProducts?: string[];
  difficulty?: Difficulty;
  feedbackPrompts?: string[];
}

export const videoEmbedUrl = (v: RoastVideo): string => {
  switch (v.provider) {
    case "youtube":
      return `https://www.youtube.com/embed/${v.id}`;
    case "loom":
      return `https://www.loom.com/embed/${v.id}`;
  }
};

export const difficultyColor = (difficulty?: Difficulty): string => {
  switch (difficulty) {
    case "Beginner":
      return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
    case "Intermediate":
      return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300";
    case "Advanced":
      return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300";
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
  }
};

export const roastApps: RoastApp[] = [
  {
    slug: "human-in-the-loop-workplace-agent",
    title: "Human-in-the-Loop Workplace Agent",
    summary:
      "A Zoom Workplace sample app that turns meeting context into suggested follow-up actions, while keeping a human in control before anything gets executed.",
    whyBuilt:
      "AI agents are only useful when they have the right context and the right guardrails. This sample explores how Zoom meeting, chat, and workflow context can help developers build agentic experiences that observe what happened, recommend next steps, ask for approval, and then take action.",
    workflow: [
      {
        title: "Observe",
        description: "Observe meeting and chat context.",
      },
      {
        title: "Recommend",
        description: "Recommend tasks, docs, or follow-ups.",
      },
      {
        title: "Approve",
        description: "Let a human approve or decline.",
      },
      {
        title: "Execute",
        description: "Execute the approved action back into the flow of work.",
      },
    ],
    video: { provider: "loom", id: "ab064e9f74d84050aee47c9188991fe7" },
    repo: "zoom/human-in-the-loop-workplace-agent-sample",
    tech: ["TypeScript", "AI Agents", "Node.js"],
    zoomProducts: ["Zoom Workplace", "Team Chat", "Meeting SDK"],
    difficulty: "Advanced",
    feedbackPrompts: [
      "Does the approve/decline flow feel safe enough for production use?",
      "Where would you draw the line between 'recommend' and 'execute'?",
      "How clear is the agent loop code — anything you'd refactor?",
      "What's missing from the docs or setup steps?",
      "Would you trust this in your own Zoom Workplace environment?",
    ],
  },
];

export const getRoastAppBySlug = (slug: string | undefined): RoastApp | undefined =>
  roastApps.find((app) => app.slug === slug);

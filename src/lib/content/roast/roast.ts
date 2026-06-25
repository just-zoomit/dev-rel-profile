import aiPoweredWorkplaceDiagram from "@/assets/AIpowered-workplace.png";

export type VideoProvider = "youtube" | "loom" | "zoomClips";

export interface RoastVideo {
  provider: VideoProvider;
  id: string;
}

export interface WorkflowStep {
  title: string;
  description: string;
}

export type Difficulty = "Beginner" | "Intermediate" | "Advanced";

export interface RoastDiagram {
  src: string;
  alt: string;
}

export interface RoastApp {
  slug: string;
  title: string;
  summary: string;
  whyBuilt?: string;
  problem?: string;
  workflow?: WorkflowStep[];
  diagram?: RoastDiagram;
  video?: RoastVideo;
  youtubeUrl?: string;
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
    case "zoomClips":
      return `https://success.zoom.us/clips/embed/${v.id}`;
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
    diagram: {
      src: aiPoweredWorkplaceDiagram,
      alt: "Architecture diagram for the AI Powered Meeting Follow-Up Agent for Zoom Workplace: Observe, Recommend, Approve, Execute pipeline with Zoom Workplace sources, AI agent workflow, human review, and execution layer.",
    },
    video: { provider: "loom", id: "ab064e9f74d84050aee47c9188991fe7" },
    youtubeUrl: "https://youtu.be/HF1bQyDS60A",
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
  {
    slug: "zoom-team-chat-ai-agent-python",
    title: "Zoom Team Chat AI Agent (Python)",
    summary:
      "A Zoom Team Chat bot that uses LangChain and OpenAI to answer questions about your company through a RAG (Retrieval-Augmented Generation) pipeline — ask in chat, get grounded answers pulled from your own docs.",
    whyBuilt:
      "RAG is the most practical pattern teams reach for when they want LLM answers grounded in private knowledge. This sample wires the pieces together — embedding, retrieval, prompt augmentation, and generation — behind a familiar Team Chat surface, so developers can see exactly where Zoom fits in a real AI workflow.",
    workflow: [
      {
        title: "Index",
        description: "Embed your company docs into a vector store.",
      },
      {
        title: "Ask",
        description: "A teammate asks a question in Team Chat.",
      },
      {
        title: "Retrieve",
        description: "Pull the most relevant chunks from the vector store.",
      },
      {
        title: "Answer",
        description:
          "LangChain + OpenAI generate a grounded reply, posted back in chat.",
      },
    ],
    video: { provider: "zoomClips", id: "2SmODzkZTRSl7H9fq9wDyA" },
    repo: "zoom/chatbot-python-sample",
    tech: ["Python", "LangChain", "OpenAI", "RAG"],
    zoomProducts: ["Team Chat", "Marketplace Bot"],
    difficulty: "Intermediate",
    feedbackPrompts: [
      "How would you handle prompt injection from chat input?",
      "Is the chunking / retrieval strategy a sensible default?",
      "Where would you add eval or guardrails before this hits production?",
      "What's missing from the setup docs for someone bringing their own corpus?",
    ],
  },
  {
    slug: "zoom-team-chat-service-bot-nodejs",
    title: "Zoom Chat Service Bot (Node.js)",
    summary:
      "A Node.js sample that brings Zoom's Communicate → Observe → Take Action loop to life: a Team Chat bot that listens to chat activity, observes app events, and lets users surface the Zoom app dashboard to take action in the flow of work.",
    whyBuilt:
      "Zoom's platform follows a simple pattern. People communicate through Team Chat, meetings, and apps. Developers observe that activity through APIs, RTMS, and events. And they take action through tasks, docs, workflows, and integrations. This sample is the smallest end-to-end demo of that loop.",
    workflow: [
      {
        title: "Communicate",
        description: "People work through Team Chat, meetings, and apps.",
      },
      {
        title: "Observe",
        description:
          "Developers see that activity via APIs, RTMS, and events.",
      },
      {
        title: "Take Action",
        description:
          "Trigger tasks, docs, workflows, and integrations from the bot.",
      },
    ],
    video: { provider: "zoomClips", id: "S643Phm2So2aJ-4cRj5Lvw" },
    youtubeUrl: "https://youtu.be/HF1bQyDS60A",
    repo: "zoom/chatbot-services-nodejs-sample",
    tech: ["Node.js", "Express", "HTML"],
    zoomProducts: ["Team Chat", "Marketplace Bot", "RTMS"],
    difficulty: "Beginner",
    feedbackPrompts: [
      "Is the event handling code obvious enough for a developer new to Zoom bots?",
      "Where would you add retry or error recovery for the action step?",
      "What docs would have unblocked you fastest?",
      "Does the bot registration flow feel approachable?",
    ],
  },
];

export const getRoastAppBySlug = (slug: string | undefined): RoastApp | undefined =>
  roastApps.find((app) => app.slug === slug);

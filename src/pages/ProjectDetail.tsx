import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  ArrowLeft,
  CheckCircle2,
  ExternalLink,
  Eye,
  Flame,
  Github,
  Lightbulb,
  Zap,
} from "lucide-react";

import {
  difficultyColor,
  getRoastAppBySlug,
  videoEmbedUrl,
  WorkflowStep,
} from "@/lib/content/roast/roast";
import RoastFeedbackForm from "@/components/RoastFeedbackForm";

const workflowIcons = [Eye, Lightbulb, CheckCircle2, Zap];

const WorkflowStepCard = ({
  step,
  index,
}: {
  step: WorkflowStep;
  index: number;
}) => {
  const Icon = workflowIcons[index % workflowIcons.length];
  return (
    <Card className="shadow-card border-none h-full">
      <CardContent className="p-6 flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <div className="bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center">
            <Icon className="h-5 w-5 text-primary" />
          </div>
          <span className="text-sm font-medium text-muted-foreground">
            Step {index + 1}
          </span>
        </div>
        <h3 className="text-xl font-semibold">{step.title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {step.description}
        </p>
      </CardContent>
    </Card>
  );
};

const SectionHeading = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-2xl md:text-3xl font-semibold mb-4">{children}</h2>
);

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const app = getRoastAppBySlug(slug);
  const [roastOpen, setRoastOpen] = useState(false);

  if (!app) {
    return (
      <div className="min-h-screen bg-background">
        <div className="max-w-3xl mx-auto px-6 py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">Project not found</h1>
          <p className="text-muted-foreground mb-8">
            Couldn't find a project with the slug "{slug}".
          </p>
          <Button asChild>
            <Link to="/roast">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Roast My App
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Link
          to="/roast"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="mr-1 h-4 w-4" />
          Back to Roast My App
        </Link>

        <header className="mb-12">
          {app.difficulty && (
            <div className="mb-4">
              <Badge className={difficultyColor(app.difficulty)}>
                {app.difficulty}
              </Badge>
            </div>
          )}
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{app.title}</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            {app.summary}
          </p>

          <div className="flex flex-wrap gap-3 mt-8">
            <Button asChild>
              <a
                href={`https://github.com/${app.repo}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-4 w-4" />
                View on GitHub
              </a>
            </Button>
            {app.liveUrl && (
              <Button variant="outline" asChild>
                <a href={app.liveUrl} target="_blank" rel="noopener noreferrer">
                  Try the live demo
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            )}
            <Button variant="accent" onClick={() => setRoastOpen(true)}>
              <Flame className="mr-2 h-4 w-4" />
              Roast this app
            </Button>
          </div>
        </header>

        {app.whyBuilt && (
          <section className="mb-12">
            <SectionHeading>Why I built it</SectionHeading>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {app.whyBuilt}
            </p>
          </section>
        )}

        {app.problem && (
          <section className="mb-12">
            <SectionHeading>The problem it solves</SectionHeading>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {app.problem}
            </p>
          </section>
        )}

        {app.workflow && app.workflow.length > 0 && (
          <section className="mb-12">
            <SectionHeading>How it works</SectionHeading>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {app.workflow.map((step, i) => (
                <WorkflowStepCard key={step.title} step={step} index={i} />
              ))}
            </div>
          </section>
        )}

        {app.video && (
          <section className="mb-12">
            <SectionHeading>Walkthrough</SectionHeading>
            <AspectRatio ratio={16 / 9} className="rounded-lg overflow-hidden shadow-card">
              <iframe
                className="w-full h-full"
                src={videoEmbedUrl(app.video)}
                title={`${app.title} walkthrough`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </AspectRatio>
          </section>
        )}

        <section className="mb-12 grid md:grid-cols-2 gap-8">
          <div>
            <SectionHeading>Tech stack</SectionHeading>
            <div className="flex flex-wrap gap-2">
              {app.tech.map((t) => (
                <Badge key={t} variant="outline">
                  {t}
                </Badge>
              ))}
            </div>
          </div>
          {app.zoomProducts && app.zoomProducts.length > 0 && (
            <div>
              <SectionHeading>Zoom products &amp; APIs</SectionHeading>
              <div className="flex flex-wrap gap-2">
                {app.zoomProducts.map((p) => (
                  <Badge key={p} variant="secondary">
                    {p}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </section>

        <section className="mb-12 bg-gradient-card p-8 rounded-2xl">
          <div className="flex items-center gap-3 mb-4">
            <Flame className="h-8 w-8 text-accent" />
            <h2 className="text-2xl md:text-3xl font-semibold">Roast this app</h2>
          </div>
          <p className="text-muted-foreground mb-6">
            Honest, structured feedback only. Your submission opens as a pre-filled
            GitHub issue on the repo — review it before sending.
          </p>

          {app.feedbackPrompts && app.feedbackPrompts.length > 0 && (
            <div className="mb-6">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-3">
                Things to focus on
              </h3>
              <ul className="space-y-2">
                {app.feedbackPrompts.map((prompt) => (
                  <li
                    key={prompt}
                    className="flex items-start gap-2 text-muted-foreground"
                  >
                    <span className="text-accent mt-1">•</span>
                    <span>{prompt}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <Button variant="accent" size="lg" onClick={() => setRoastOpen(true)}>
            <Flame className="mr-2 h-4 w-4" />
            Open the roast form
          </Button>
        </section>
      </div>

      <Dialog open={roastOpen} onOpenChange={setRoastOpen}>
        <DialogContent className="max-w-xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Roast: {app.title}</DialogTitle>
            <DialogDescription>
              Your feedback opens as a pre-filled GitHub issue on the app's repo.
            </DialogDescription>
          </DialogHeader>
          <RoastFeedbackForm
            appTitle={app.title}
            repo={app.repo}
            onSubmitted={() => setRoastOpen(false)}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProjectDetail;

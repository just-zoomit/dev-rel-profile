import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ArrowRight, ExternalLink, Flame, Github, Play, Youtube } from "lucide-react";

import {
  difficultyColor,
  roastApps,
  RoastApp,
  videoEmbedUrl,
} from "@/lib/content/roast/roast";
import RoastFeedbackForm from "@/components/RoastFeedbackForm";

const RoastMyApp = () => {
  const [videoApp, setVideoApp] = useState<RoastApp | null>(null);
  const [roastApp, setRoastApp] = useState<RoastApp | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 flex items-center justify-center gap-3">
            <Flame className="h-10 w-10 text-accent" />
            Roast My App
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Pick a sample app, watch the walkthrough, dig into the code, then leave
            structured feedback. Honest critique only — I want the rough edges, not
            the highlights.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {roastApps.map((app) => {
            const projectPath = `/projects/${app.slug}`;
            return (
              <Card
                key={app.slug}
                className="h-full shadow-card border-none hover:shadow-lg transition-shadow flex flex-col"
              >
                <CardHeader>
                  {app.difficulty && (
                    <div className="mb-2">
                      <Badge className={difficultyColor(app.difficulty)}>
                        {app.difficulty}
                      </Badge>
                    </div>
                  )}
                  <CardTitle className="text-2xl leading-tight">
                    <Link
                      to={projectPath}
                      className="hover:text-primary transition-colors"
                    >
                      {app.title}
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col flex-1 min-h-0 gap-4">
                  <p className="text-muted-foreground flex-grow">{app.summary}</p>

                  <div className="flex flex-wrap gap-2">
                    {app.tech.map((t) => (
                      <Badge key={t} variant="outline" className="text-xs">
                        {t}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 pt-2">
                    {app.video && (
                      <Button
                        variant="outline"
                        size="icon"
                        aria-label="Watch walkthrough"
                        title="Watch walkthrough"
                        onClick={() => setVideoApp(app)}
                      >
                        <Play className="h-4 w-4" />
                      </Button>
                    )}
                    {app.youtubeUrl && (
                      <Button
                        variant="outline"
                        size="icon"
                        aria-label="Watch the talk on YouTube"
                        title="Watch the talk on YouTube"
                        asChild
                      >
                        <a
                          href={app.youtubeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Youtube className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                    <Button
                      variant="outline"
                      size="icon"
                      aria-label="View GitHub repo"
                      title="View GitHub repo"
                      asChild
                    >
                      <a
                        href={`https://github.com/${app.repo}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                    {app.liveUrl && (
                      <Button
                        variant="outline"
                        size="icon"
                        aria-label="Open live demo"
                        title="Open live demo"
                        asChild
                      >
                        <a
                          href={app.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button
                      variant="outline"
                      className="flex-1"
                      onClick={() => setRoastApp(app)}
                    >
                      <Flame className="mr-2 h-4 w-4" />
                      Roast it
                    </Button>
                    <Button variant="accent" className="flex-1" asChild>
                      <Link to={projectPath}>
                        View project
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      <Dialog
        open={!!videoApp}
        onOpenChange={(open) => !open && setVideoApp(null)}
      >
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>{videoApp?.title}</DialogTitle>
            <DialogDescription>Walkthrough video</DialogDescription>
          </DialogHeader>
          {videoApp?.video && (
            <AspectRatio ratio={16 / 9}>
              <iframe
                className="w-full h-full rounded-md"
                src={videoEmbedUrl(videoApp.video)}
                title={`${videoApp.title} walkthrough`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </AspectRatio>
          )}
        </DialogContent>
      </Dialog>

      <Dialog
        open={!!roastApp}
        onOpenChange={(open) => !open && setRoastApp(null)}
      >
        <DialogContent className="max-w-xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Roast: {roastApp?.title}</DialogTitle>
            <DialogDescription>
              Your feedback opens as a pre-filled GitHub issue on the app's repo.
            </DialogDescription>
          </DialogHeader>
          {roastApp && (
            <RoastFeedbackForm
              appTitle={roastApp.title}
              repo={roastApp.repo}
              onSubmitted={() => setRoastApp(null)}
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default RoastMyApp;

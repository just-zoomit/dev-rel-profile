import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
import { ExternalLink, Flame, Github, Play } from "lucide-react";

import { roastApps, RoastApp, videoEmbedUrl } from "@/lib/content/roast/roast";
import RoastFeedbackForm from "@/components/RoastFeedbackForm";

const difficultyColor = (difficulty?: string) => {
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
          {roastApps.map((app) => (
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
                <CardTitle className="text-2xl leading-tight">{app.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col flex-1 min-h-0 gap-4">
                <p className="text-muted-foreground flex-grow">{app.description}</p>

                <div className="flex flex-wrap gap-2">
                  {app.tech.map((t) => (
                    <Badge key={t} variant="outline" className="text-xs">
                      {t}
                    </Badge>
                  ))}
                </div>

                {app.video && (
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => setVideoApp(app)}
                  >
                    <Play className="mr-2 h-4 w-4" />
                    Watch walkthrough
                  </Button>
                )}

                <div className="grid grid-cols-2 gap-2">
                  <Button variant="secondary" asChild>
                    <a
                      href={`https://github.com/${app.repo}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </a>
                  </Button>
                  {app.liveUrl && (
                    <Button variant="secondary" asChild>
                      <a
                        href={app.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Try it
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  )}
                </div>

                <Button
                  variant="accent"
                  size="lg"
                  className="w-full"
                  onClick={() => setRoastApp(app)}
                >
                  <Flame className="mr-2 h-4 w-4" />
                  Roast this app
                </Button>
              </CardContent>
            </Card>
          ))}
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

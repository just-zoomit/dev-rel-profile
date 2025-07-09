import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Calendar, Clock } from "lucide-react";

const WorkShowcase = () => {
  const blogPosts = [
    {
      title: "How to create a user and assign scheduling privilege programmatically",
      excerpt: "A comprehensive guide to create a user and assign scheduling privilege programmatically.",
      date: "2024-01-15",
      readTime: "8 min read",
      tags: ["Postman", "JavaScript", "Best Practices"],
      url: "https://developers.zoom.us/blog/create-a-user-assign-scheduling-privilege/"

    },
    {
      title: "How to create a sample JWT for the Meeting SDKs",
      excerpt: "A guide to create a sample JWT for the Meeting SDK.",
      date: "2024-01-08",
      readTime: "6 min read",
      tags: ["JWT", "JavaScript", "Best Practices"],
      url: "https://developers.zoom.us/blog/create-sample-jwt-meeting-sdk/"
    },
    {
      title: "Preparing your Meeting SDK app for review",
      excerpt: "A guide to create a sample JWT for the Meeting SDK.",
      date: "2023-12-20",
      readTime: "4 min read",
      tags: ["JWT", "JavaScript", "Best Practices"],
      url: "https://developers.zoom.us/blog/prepare-meeting-sdk-app-for-review/"
    }
  ];

  const codelabs = [
    {
      title: "Create a multi-feature Zoom app with a manifest file",
      description: "Step-by-step tutorial to create a multi-feature Zoom app with a manifest file.",
      duration: "15 min",
      difficulty: "Intermediate",
      technologies: ["Zoom Marketplace", "Node.js", "Postman"],
      url: "https://just-zoomit.github.io/multi-feature-zoom-manifest-file/#0"
    },
    {
      title: "How to setup Zoom, Ngrok, and Supabase developer accounts and environments",
      description: "Step-by-step tutorial to setup Zoom, Ngrok, and Supabase developer accounts and environments.",
      duration: "45 min",
      difficulty: "Intermediate",
      technologies: ["WebSockets", "Node.js", "React"],
      url: "https://just-zoomit.github.io/zoomapp-taskmanager-codelab/#0"
    },
    {
      title: "Build a Real-time Chat App with WebSockets",
      description: "Step-by-step tutorial to create a fully functional chat application using WebSockets, Node.js, and React.",
      duration: "45 min",
      difficulty: "Intermediate",
      technologies: ["WebSockets", "Node.js", "React"],
      url: "#"
    },
    {
      title: "Deploy ML Models with Docker & Kubernetes",
      description: "Learn to containerize and deploy machine learning models in a scalable Kubernetes cluster.",
      duration: "60 min",
      difficulty: "Advanced",
      technologies: ["Docker", "Kubernetes", "Python", "ML"],
      url: "#"
    },
    {
      title: "Create a REST API with Express & MongoDB",
      description: "Build a complete RESTful API with authentication, data validation, and database integration.",
      duration: "30 min",
      difficulty: "Beginner",
      technologies: ["Express", "MongoDB", "Node.js"],
      url: "#"
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner": return "bg-green-100 text-green-800";
      case "Intermediate": return "bg-yellow-100 text-yellow-800";
      case "Advanced": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <section id="work" className="py-20 bg-tech-light/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Featured Work</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore my latest blog posts and interactive codelabs designed to help developers
            learn new technologies and improve their skills.
          </p>
        </div>

        {/* Blog Posts */}
        <div className="mb-20">
          <h3 className="text-3xl font-semibold mb-8 text-center">Latest Blog Posts</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.title} className="h-full shadow-card border-none hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Calendar className="h-4 w-4" />
                    {new Date(post.date).toLocaleDateString()}
                    <Clock className="h-4 w-4 ml-2" />
                    {post.readTime}
                  </div>
                  <CardTitle className="text-xl leading-tight">{post.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col h-full">
                  <p className="text-muted-foreground mb-4 flex-grow">
                    {post.excerpt}
                  </p>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button asChild variant="outline" className="w-full">
                      <a
                        href={post.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center"
                      >
                        Read More
                        <ExternalLink className="ml-2 h-5 w-5" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
            <br />
          </div>
        </div>

        {/* Codelabs */}
        <div>
          <h3 className="text-3xl font-semibold mb-8 text-center">Interactive Codelabs</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {codelabs.map((codelab) => (
              <Card key={codelab.title} className="h-full shadow-card border-none hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className={getDifficultyColor(codelab.difficulty)}>
                      {codelab.difficulty}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{codelab.duration}</span>
                  </div>
                  <CardTitle className="text-xl leading-tight">{codelab.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col h-full">
                  <p className="text-muted-foreground mb-4 flex-grow">
                    {codelab.description}
                  </p>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {codelab.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <Button asChild variant="outline" className="w-full">
                      <a
                        href={codelab.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center"
                      >
                        Start Codelab
                        <ExternalLink className="ml-2 h-5 w-5" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
            <br />
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-3xl font-semibold mb-8 text-center"> Want to see more of my work?</h3>

          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="default" size="lg">
              View All Blog Posts
              <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="accent" size="lg">
              Browse All Codelabs
              <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkShowcase;
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Users, BookOpen, Presentation } from "lucide-react";

const About = () => {
  const skills = [
    "JavaScript", "TypeScript", "React", "Node.js", "Python", "Go",
    "Docker", "AWS", "GCP", "Technical Writing", "Public Speaking"
  ];

  const expertise = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Building scalable applications with modern technologies and best practices."
    },
    {
      icon: BookOpen,
      title: "Technical Writing", 
      description: "Creating comprehensive guides, tutorials, and documentation that developers love."
    },
    {
      icon: Presentation,
      title: "Developer Education",
      description: "Designing interactive codelabs and workshops for hands-on learning experiences."
    },
    {
      icon: Users,
      title: "Community Building",
      description: "Fostering developer communities and connecting tech enthusiasts worldwide."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm passionate about making complex technologies accessible to developers worldwide. 
            Through blogs, codelabs, and community engagement, I help bridge the gap between 
            cutting-edge tech and practical implementation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
            <p className="text-muted-foreground leading-relaxed">
              With over 5 years of experience in developer advocacy, I've had the privilege 
              of working with amazing teams and contributing to open-source projects that 
              impact millions of developers.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My mission is simple: empower developers with knowledge, tools, and resources 
              they need to build incredible things. Whether it's through detailed blog posts, 
              interactive codelabs, or speaking at conferences, I'm here to help you level up.
            </p>
            
            {/* Skills */}
            <div className="pt-4">
              <h4 className="text-lg font-medium mb-3">Technologies & Skills</h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Expertise Cards */}
          <div className="grid gap-6">
            {expertise.map((item) => (
              <Card key={item.title} className="shadow-card border-none">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">{item.title}</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
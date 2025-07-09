import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, Mail, MessageSquare, Calendar, TvMinimalPlay, Youtube } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      description: "For collaboration opportunities and general inquiries",
      action: "donte.zoomie@gmail.com",
      href: "mailto:donte.zoomie@gmail.com"
    },
    {
      icon: MessageSquare,
      title: "LinkedIn",
      description: "Connect with me for professional networking",
      action: "Connect on LinkedIn",
      href: "https://www.linkedin.com/in/donte-small/"
    },
    {
      icon: Calendar,
      title: "Schedule a Call",
      description: "Book a time to discuss your project or questions",
      action: "Book a Meeting",
      href: "https://scheduler.zoom.us/donte-small/meet-with-zoom-developer-advocate-donte"
    }
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/just-zoomit", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/donte-small/", label: "LinkedIn" },
    { icon: Twitter, href: "https://x.com/zoomit_advocate", label: "Twitter" },
    { icon: Youtube, href: "https://www.youtube.com/@donte-ai/playlists", label: "ZoomClips" },
    { icon: TvMinimalPlay, href: "https://success.zoom.us/clips/share/play-list/60d74e5aa7b4432588161bef13c896be", label: "ZoomClips" }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Let's Connect</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            I'm always excited to connect with fellow developers, discuss new technologies,
            or collaborate on interesting projects. Feel free to reach out!
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method) => (
            <Card key={method.title} className="text-center shadow-card border-none hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <method.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{method.title}</h3>
                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                  {method.description}
                </p>
                <Button variant="outline" className="w-full" asChild>
                  <a href={method.href}>
                    {method.action}
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Social Links */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-6">Follow My Journey</h3>
          <div className="flex justify-center gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="bg-primary/10 hover:bg-primary/20 p-4 rounded-full transition-colors group"
                aria-label={social.label}
              >
                <social.icon className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
              </a>
            ))}
          </div>
          <p className="text-muted-foreground mt-6">
            Stay updated with my latest content and tech insights
          </p>
        </div>

        {/* Newsletter CTA */}
        <div className="mt-16 text-center bg-gradient-card p-8 rounded-2xl">
          <h3 className="text-2xl font-semibold mb-4">Stay in the Loop</h3>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Get notified when I publish new blog posts, codelabs, and developer resources.
          </p>
          <Button variant="hero" size="lg" asChild>
            <a href="https://donte.hashnode.dev/newsletter" target="_blank" rel="noopener noreferrer">
              Subscribe to Newsletter
            </a>
          </Button>
        </div>

      </div>
    </section>
  );
};

export default Contact;
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, Mail, ExternalLink, Youtube, Users } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Developer workspace"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-tech-dark/90 via-tech-dark/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Developer
                <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Advocate
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-white/90 leading-relaxed">
                Empowering developers through education, creating engaging content,
                and building bridges between technology and community.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button asChild variant="hero" size="lg">
                <a
                  href="https://success.zoom.us/clips/share/play-list/60d74e5aa7b4432588161bef13c896be"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  View My Work
                  <ExternalLink className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="lg" className="border-white/20 text-black hover:bg-white/10">
              <a
                  href="https://devforum.zoom.us/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                    > 
                
                Join the Community
                <Users className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 pt-4">
              <a href="https://github.com/just-zoomit" target="_blank" className="text-white/70 hover:text-white transition-colors">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/in/donte-small/" target="_blank" className="text-white/70 hover:text-white transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="https://x.com/zoomit_advocate"  className="text-white/70 hover:text-white transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="https://www.youtube.com/@donte-ai/playlists"  className="text-white/70 hover:text-white transition-colors">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>


          {/* Stats or highlights */}
          <div className="grid grid-cols-2 gap-6 lg:gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
              <div className="text-3xl font-bold text-accent">30+</div>
              <div className="text-white/80">Blog Posts</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
              <div className="text-3xl font-bold text-primary">25+</div>
              <div className="text-white/80">Codelabs</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
              <div className="text-3xl font-bold text-accent">10k+</div>
              <div className="text-white/80">Developers Reached</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
              <div className="text-3xl font-bold text-primary">5+</div>
              <div className="text-white/80">Years Experience</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
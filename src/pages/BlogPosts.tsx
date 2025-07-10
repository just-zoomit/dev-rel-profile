import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from "@/components/ui/pagination";
import { ExternalLink, Calendar, Clock } from "lucide-react";

const BlogPosts = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  // Extended blog posts data for demonstration
  
  const allBlogPosts = [
    {
      title: "Programmatically create a user and assign scheduling privilege",
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
    },
     {
      title: "How to build AI powered applications with Zoom Meeting SDKs",
      excerpt: "A guide to build AI powered applications with Zoom Meeting SDKs.",
      date: "2024-01-15",
      readTime: "4 min read",
      tags: ["React", "JavaScript", "Best Practices"],
      url: "https://developers.zoom.us/blog/prepare-meeting-sdk-app-for-review/"
    },
    {
      title: "Marketplace bot app submission guide",
      excerpt: "A guide to understanding Zoom's bot policies and app review process.",
      date: "2024-01-15",
      readTime: "4 min read",
      tags: ["Web", "JavaScript", "Best Practices"],
      url: "https://developers.zoom.us/blog/marketplace-bot-app-submission-guide/"
    },
    {
      title: "Zoom OAuth 2.0 Proof Key for Code Exchange (PKCE) Flow",
      excerpt: "A guide to understanding Zoom's OAuth 2.0 Proof Key for Code Exchange (PKCE) Flow.",
      date: "2024-01-15",
      readTime: "4 min read",
      tags: ["Web", "JavaScript", "Best Practices"],
      url: "https://developers.zoom.us/blog/pcke-oauth-with-postman-rest-api/"
    },
    {
      title: "How to troubleshooting Meeting SDK signature validation",
      excerpt: "A guide to understanding Zoom's OAuth 2.0 Proof Key for Code Exchange (PKCE) Flow.",
      date: "2024-01-15",
      readTime: "4 min read",
      tags: ["Web", "JavaScript", "Best Practices"],
      url: "https://developers.zoom.us/blog/troubleshooting-meeting-sdk-signature-validation/"
    }
  ];

  const totalPages = Math.ceil(allBlogPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = allBlogPosts.slice(startIndex, startIndex + postsPerPage);

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">All Blog Posts</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore all my technical articles covering modern development practices, 
            cloud technologies, and software engineering insights.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {currentPosts.map((post) => (
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
                  <Button variant="outline" className="w-full">
                    Read More
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
          <br/>
        </div>
       
        <div>

        {totalPages > 1 && (
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious 
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    if (currentPage > 1) setCurrentPage(currentPage - 1);
                  }}
                />
              </PaginationItem>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <PaginationItem key={page}>
                  <PaginationLink
                    href="#"
                    isActive={page === currentPage}
                    onClick={(e) => {
                      e.preventDefault();
                      setCurrentPage(page);
                    }}
                  >
                    {page}
                  </PaginationLink>
                </PaginationItem>
              ))}
              
              <PaginationItem>
                <PaginationNext 
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
                  }}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        )}
        </div>

      </div>
    </div>
  );
};

export default BlogPosts;
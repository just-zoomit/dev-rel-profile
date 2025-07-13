// src/lib/codelabs.ts

export interface Blogs {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  url: string;
}

export const blogs: Blogs[] = [
    {
      title: "Programmatically create a user and assign scheduling privilege",
      excerpt: "Step-by-step guide to create a user and assign scheduling privilege programmatically.",
      date: "2024-01-15",
      readTime: "8 min read",
      tags: ["Postman", "JavaScript", "Best Practices"],
      url: "https://developers.zoom.us/blog/create-a-user-assign-scheduling-privilege/"

    },
    {
      title: "How to create a sample JWT for the Meeting SDKs",
      excerpt: "A guide to manually create a JWT token for the Meeting SDK.",
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

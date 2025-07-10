// pages/blog/page/[page].tsx
import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import BlogPosts from "@/components/BlogPosts"; // your UI

const POSTS_PER_PAGE = 6;
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
    }
  ];

export const getStaticPaths: GetStaticPaths = async () => {
  const totalPages = Math.ceil(allPosts.length / POSTS_PER_PAGE);
  const paths = Array.from({ length: totalPages }, (_, i) => ({
    params: { page: String(i + 1) }
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const page = parseInt(params!.page as string, 10);
  const start = (page - 1) * POSTS_PER_PAGE;
  const propsPosts = allPosts.slice(start, start + POSTS_PER_PAGE);
  return {
    props: {
      posts: propsPosts,
      currentPage: page,
      totalPages: Math.ceil(allPosts.length / POSTS_PER_PAGE),
    }
  };
};

export default function BlogPage({
  posts,
  currentPage,
  totalPages
}: {
  posts: typeof allPosts;
  currentPage: number;
  totalPages: number;
}) {
  const router = useRouter();
  return (
    <>
      <BlogPosts
        posts={posts}
        currentPage={currentPage}
        totalPages={totalPages}
      />
      <Pagination>
        <PaginationContent>
          <PaginationPrevious
            asChild
            disabled={currentPage === 1}
          >
            <Link href={`/blog/page/${currentPage - 1}`}>Prev</Link>
          </PaginationPrevious>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <PaginationItem key={page}>
              <PaginationLink isActive={page === currentPage} asChild>
                <Link href={`/blog/page/${page}`}>{page}</Link>
              </PaginationLink>
            </PaginationItem>
          ))}

          <PaginationNext
            asChild
            disabled={currentPage === totalPages}
          >
            <Link href={`/blog/page/${currentPage + 1}`}>Next</Link>
          </PaginationNext>
        </PaginationContent>
      </Pagination>
    </>
  );
}

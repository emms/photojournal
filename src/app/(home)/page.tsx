import Image from "next/image";
import { fetchContent } from "@/utils/contentful";

const homeQuery = `
    query HomeQuery {
      blogPostCollection {
        items {
          title
          slug
          coverImage {
            url(transform: {
              width: 1920,
              height: 1080,
              resizeStrategy: FILL,
              format: JPG_PROGRESSIVE
            })
            width
            height
          }
        }
      }
    }
  `;

export default async function Home() {
  const response = await fetchContent(homeQuery);
  const latestBlogPost = response.blogPostCollection?.items?.[0];

  return (
    <main>
      <h1>Photojournal</h1>
      <Image
        src={latestBlogPost?.coverImage?.url}
        alt="Picture of the author"
        width={latestBlogPost?.coverImage?.width}
        height={latestBlogPost?.coverImage?.height}
        priority
      />
    </main>
  );
}

import { fetchContent } from "@/utils/contentful";
import CoverImage from "./components/CoverImage";

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
    <>
      <h1>Photojournal</h1>
      {latestBlogPost?.coverImage && (
        <CoverImage coverImage={latestBlogPost.coverImage} />
      )}
    </>
  );
}

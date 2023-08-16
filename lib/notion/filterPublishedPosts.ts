import dayjs from "dayjs";
import { Post } from "../../types/posts";

export default function filterPublishedPosts({ posts, includePages }) {
  if (!posts || !posts.length) return [];
  return posts
    .filter((post: Post) =>
      includePages
        ? post?.type?.[0] === "Post" || post?.type?.[0] === "Page"
        : post?.type?.[0] === "Post"
    )
    .filter((post: Post) => {
      return (
        post.title &&
        post.slug &&
        post?.status?.[0] === "Published" &&
        dayjs(post.date).isBefore(dayjs())
      );
    });
}

import { clientConfig } from "@/lib/server/config";
import { useRouter } from "next/router";
import cn from "classnames";
import { getAllPosts, getPostBlocks } from "@/lib/notion";
import { useLocale } from "@/lib/locale";
import { useConfig } from "@/lib/config";
import { createHash } from "crypto";
import Container from "@/components/Container";
import Post from "@/components/Post";
import Comments from "@/components/Comments";
import { useCallback } from "react";

export default function BlogPost({ post, blockMap, emailHash, relevantReads }) {
  const router = useRouter();
  const BLOG = useConfig();
  const locale = useLocale();
  const getShowBgDeco = useCallback(() => {
    switch (post?.slug) {
      case "about":
        return true;
    }

    return false;
  }, [post]);

  // TODO: It would be better to render something
  if (router.isFallback) return null;

  const fullWidth = post.fullWidth ?? false;

  return (
    <Container
      layout="blog"
      title={post.title}
      description={post.summary}
      slug={post.slug}
      // date={new Date(post.publishedAt).toISOString()}
      type="article"
      fullWidth={fullWidth}
      showBgDeco={getShowBgDeco()}
    >
      <Post
        post={post}
        blockMap={blockMap}
        emailHash={emailHash}
        relevantReads={relevantReads}
        fullWidth={fullWidth}
      />
      {/* Back and Top */}
      <div
        className={cn(
          "px-4 flex justify-between font-medium text-gray-500 dark:text-gray-400 my-5",
          fullWidth ? "md:px-24" : "mx-auto max-w-2xl"
        )}
      >
        <a>
          <button
            onClick={() => router.push(BLOG.path || "/")}
            className="mt-2 cursor-pointer hover:text-black dark:hover:text-gray-100"
          >
            ← {locale.POST.BACK}
          </button>
        </a>
        <a>
          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="mt-2 cursor-pointer hover:text-black dark:hover:text-gray-100"
          >
            ↑ {locale.POST.TOP}
          </button>
        </a>
      </div>

      <Comments frontMatter={post} />
    </Container>
  );
}

export async function getStaticPaths() {
  const posts = await getAllPosts({ includePages: true });
  return {
    paths: posts.map((row) => `${clientConfig.path}/${row.slug}`),
    fallback: true,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const posts = await getAllPosts({ includePages: true });

  const post = posts.find((t) => t.slug === slug);

  if (!post) return { notFound: true };

  const blockMap = await getPostBlocks(post.id);
  const emailHash = createHash("md5")
    .update(clientConfig.email)
    .digest("hex")
    .trim()
    .toLowerCase();

  // 找到有当前帖子的第一个标签的其他帖子作为推荐
  const relevantReads = findRelevantPosts(post, posts);

  return {
    props: { post, blockMap, emailHash, relevantReads },
    revalidate: 1,
  };
}

const findRelevantPosts = (curr, posts) => {
  const { tags, slug } = curr;
  const firstTag = tags?.[0];

  return posts
    .filter((p) => {
      const hasTag = p?.tags?.[0] === firstTag;
      return hasTag && p?.slug !== slug;
    })
    .slice(0, 5);
};

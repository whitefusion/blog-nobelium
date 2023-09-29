import PropTypes from "prop-types";
import Link from "next/link";
import Image from "next/image";
import cn from "classnames";
import { useConfig } from "@/lib/config";
import useTheme from "@/lib/theme";
import FormattedDate from "@/components/FormattedDate";
import TagItem from "@/components/TagItem";
import NotionRenderer from "@/components/NotionRenderer";
import TableOfContents from "@/components/TableOfContents";

/**
 * A post renderer
 *
 * @param {PostProps} props
 *
 * @typedef {object} PostProps
 * @prop {object}   post       - Post metadata
 * @prop {object}   blockMap   - Post block data
 * @prop {string}   emailHash  - Author email hash (for Gravatar)
 * @prop {boolean} [fullWidth] - Whether in full-width mode
 */
export default function Post(props) {
  const BLOG = useConfig();
  const { post, blockMap, emailHash, fullWidth = false, relevantReads } = props;
  const { dark } = useTheme();
  console.log("post: ", post);
  return (
    <article
      className={cn("flex flex-col", fullWidth ? "md:px-24" : "items-center")}
    >
      <h1
        className={cn("w-full font-bold text-3xl text-black dark:text-white", {
          "max-w-2xl px-4": !fullWidth,
        })}
      >
        {post.title}
      </h1>
      {post.type[0] !== "Page" && (
        <nav
          className={cn(
            "w-full flex mt-7 items-start text-gray-500 dark:text-gray-400",
            { "max-w-2xl px-4": !fullWidth }
          )}
        >
          <div className="flex mb-4">
            <a href={BLOG.socialLink || "#"} className="flex">
              <Image
                alt={BLOG.author}
                width={24}
                height={24}
                src={`https://gravatar.com/avatar/${emailHash}`}
                className="rounded-full"
              />
              <p className="ml-2 md:block">{BLOG.author}</p>
            </a>
            <span className="block">&nbsp;/&nbsp;</span>
          </div>
          <div className="mr-2 mb-4 md:ml-0">
            <FormattedDate date={post.date} />
          </div>
          {post.tags && (
            <div className="flex flex-nowrap max-w-full overflow-x-auto article-tags">
              {post.tags.map((tag) => (
                <TagItem key={tag} tag={tag} />
              ))}
            </div>
          )}
        </nav>
      )}
      <div className="self-stretch -mt-4 flex flex-col items-center lg:flex-row lg:items-stretch">
        {!fullWidth && <div className="flex-1 hidden lg:block" />}
        <div
          className={
            fullWidth ? "flex-1 pr-4" : "flex-none w-full max-w-2xl px-4"
          }
        >
          <NotionRenderer
            recordMap={blockMap}
            fullPage={false}
            darkMode={dark}
          />
          {relevantReads?.length ? (
            <div>
              <p className="text-xl flex flex-row">
                <svg
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="1494"
                  width="28"
                  height="28"
                >
                  <path
                    d="M810.656 384L864 266.656l117.344-53.344L864 159.968l-53.344-117.344-53.344 117.344-117.344 53.344 117.344 53.344L810.656 384z m-320 21.344L384 170.688l-106.656 234.656L42.688 512l234.656 106.656L384 853.312l106.656-234.656L725.312 512l-234.656-106.656z m320 234.656l-53.344 117.344-117.344 53.344 117.344 53.344 53.344 117.344L864 864.032l117.344-53.344L864 757.344 810.656 640z"
                    p-id="1495"
                  ></path>
                </svg>
                <span>相关阅读</span>
              </p>
              <ul role="list" className="list-disc ms-8 mt-4">
                {(relevantReads || []).map((read) => (
                  <li key={read.slug} className="hover:underline leading-loose">
                    <Link href={`${BLOG.path}/${read.slug}`}>{read.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
        <div
          className={cn(
            "order-first lg:order-[unset] w-full lg:w-auto max-w-2xl lg:max-w-[unset] lg:min-w-[160px]",
            fullWidth ? "flex-none" : "flex-1"
          )}
        >
          {/* `65px` is the height of expanded nav */}
          {/* TODO: Remove the magic number */}
          <TableOfContents
            blockMap={blockMap}
            className="pt-3 sticky"
            style={{ top: "65px" }}
          />
        </div>
      </div>
    </article>
  );
}

Post.propTypes = {
  post: PropTypes.object.isRequired,
  blockMap: PropTypes.object.isRequired,
  emailHash: PropTypes.string.isRequired,
  relevantReads: PropTypes.array,
  fullWidth: PropTypes.bool,
};

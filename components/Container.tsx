import { useCallback, useMemo } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BgDeco from "./BgDeco";
import { useConfig } from "@/lib/config";
import Head from "next/head";
import PropTypes from "prop-types";
import cn from "classnames";

interface ContainerProps {
  [x: string]: any;
  layout?: string;
  fullWidth?: string;
  showBgDeco?: boolean;
}

const Container = ({
  children,
  layout,
  fullWidth,
  showBgDeco = true,
  ...customMeta
}: ContainerProps | null) => {
  const BLOG = useConfig();

  const url = BLOG.path.length ? `${BLOG.link}/${BLOG.path}` : BLOG.link;
  const meta: { title: any; type: string; [x: string]: string } = useMemo(
    () => ({
      title: BLOG.title,
      type: "website",
      ...customMeta,
    }),
    [BLOG.title, customMeta]
  );

  const getShowBgType = useCallback(() => {
    switch (meta?.slug) {
      case "about":
        return "pallas";
    }

    return "default";
  }, [meta]);

  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        {/* <meta content={BLOG.darkBackground} name="theme-color" /> */}
        <meta name="robots" content="follow, index" />
        <meta charSet="UTF-8" />
        {BLOG.seo.googleSiteVerification && (
          <meta
            name="google-site-verification"
            content={BLOG.seo.googleSiteVerification}
          />
        )}
        {BLOG.seo.keywords && (
          <meta name="keywords" content={BLOG.seo.keywords.join(", ")} />
        )}
        <meta name="description" content={meta.description} />
        <meta property="og:locale" content={BLOG.lang} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta
          property="og:url"
          content={meta.slug ? `${url}/${meta.slug}` : url}
        />
        <meta
          property="og:image"
          content={`${BLOG.ogImageGenerateURL}/${encodeURIComponent(
            meta.title
          )}.png?theme=dark&md=1&fontSize=125px&images=https%3A%2F%2Fnobelium.vercel.app%2Flogo-for-dark-bg.svg`}
        />
        <meta property="og:type" content={meta.type} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:title" content={meta.title} />
        <meta
          name="twitter:image"
          content={`${BLOG.ogImageGenerateURL}/${encodeURIComponent(
            meta.title
          )}.png?theme=dark&md=1&fontSize=125px&images=https%3A%2F%2Fnobelium.vercel.app%2Flogo-for-dark-bg.svg`}
        />
        {meta.type === "article" && (
          <>
            <meta property="article:published_time" content={meta.date} />
            <meta property="article:author" content={BLOG.author} />
          </>
        )}
      </Head>
      <div
        className={`wrapper ${
          BLOG.font === "serif" ? "font-serif" : "font-sans"
        } relative`}
      >
        <Header
          navBarTitle={layout === "blog" ? meta.title : null}
          fullWidth={fullWidth}
        />
        <main
          className={cn(
            "flex-grow transition-all",
            layout !== "blog" && [
              "self-center px-4",
              fullWidth ? "md:px-24" : "w-full max-w-2xl",
            ]
          )}
        >
          {children}
        </main>
        <Footer fullWidth={fullWidth} />
        {showBgDeco ? <BgDeco decoType={getShowBgType()} /> : null}
      </div>
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;

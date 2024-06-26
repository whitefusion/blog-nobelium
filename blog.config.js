const BLOG = {
  title: "长卷三两行",
  author: "bai xin",
  email: "xinbai1992@163.com",
  link: "https://hundredstar.cc/",
  description:
    "个人博客网站。会发布前端_web3_区块链_算法等计算机技术知识，也会有菜谱_旅游见闻_爱好等生活知识，还会有个人成长的心路历程以及职业发展的文章",
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES']
  timezone: "Asia/Shanghai", // Your Notion posts' date will be interpreted as this timezone. See https://en.wikipedia.org/wiki/List_of_tz_database_time_zones for all options.
  appearance: "auto", // ['light', 'dark', 'auto'],
  font: "sans-serif", // ['sans-serif', 'serif']
  lightBackground: "#ffffff", // use hex value, don't forget '#' e.g #fffefc
  darkBackground: "#18181B", // use hex value, don't forget '#'
  path: "", // leave this empty unless you want to deploy Nobelium in a folder
  since: 2021, // If leave this empty, current year will be used.
  postsPerPage: 9,
  sortByDate: true,
  showAbout: true,
  showArchive: true,
  autoCollapsedNavBar: false, // The automatically collapsed navigation bar
  ogImageGenerateURL: "https://og-image-craigary.vercel.app", // The link to generate OG image, don't end with a slash
  socialLink: "",
  seo: {
    keywords: [
      "Blog",
      "Website",
      "web3",
      "frontend",
      "前端",
      "nextjs",
      "interview",
      "blockchain",
      "algorithm",
      "算法",
      "区块链",
      "面试",
    ],
    googleSiteVerification: "k2yc0E3wv0ZsdLWS-wB23rc96KO6rmCUwPTLylTBINs", // Remove the value or replace it with your own google site verification code
  },
  notionPageId: process.env.NOTION_PAGE_ID, // DO NOT CHANGE THIS！！！
  notionAccessToken: process.env.NOTION_ACCESS_TOKEN, // Useful if you prefer not to make your database public
  analytics: {
    provider: "ga", // Currently we support Google Analytics and Ackee, please fill with 'ga' or 'ackee', leave it empty to disable it.
    ackeeConfig: {
      tracker: "", // e.g 'https://ackee.craigary.net/tracker.js'
      dataAckeeServer: "", // e.g https://ackee.craigary.net , don't end with a slash
      domainId: "", // e.g '0e2257a8-54d4-4847-91a1-0311ea48cc7b'
    },
    gaConfig: {
      measurementId: "", // e.g: G-XXXXXXXXXX
    },
  },
  comment: {
    // support provider: gitalk, utterances, cusdis
    provider: "cusdis", // leave it empty if you don't need any comment plugin
    gitalkConfig: {
      repo: "", // The repository of store comments
      owner: "",
      admin: [],
      clientID: "",
      clientSecret: "",
      distractionFreeMode: false,
    },
    utterancesConfig: {
      repo: "",
    },
    cusdisConfig: {
      appId: "d651b181-d09d-4be3-857a-34e1d6754da0", // data-app-id
      host: "https://cusdis.com", // data-host, change this if you're using self-hosted version
      scriptSrc: "https://cusdis.com/js/cusdis.es.js", // change this if you're using self-hosted version
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
};
// export default BLOG
module.exports = BLOG;

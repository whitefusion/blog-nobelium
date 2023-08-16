<img src="https://cdn.statically.io/gh/craigary/nobelium/main/Nobelium-Logo.svg" width="50" height="50">

# Nobelium

A static blog build on top of Notion and Nextjs, deployed on [Vercel](https://vercel.com?utm_source=Craigary&utm_campaign=oss).

Demo: [https://nobelium.vercel.app/](https://nobelium.vercel.app/)

<details><summary>Screenshot</summary>
<img src="https://github.com/craigary/nobelium/blob/main/desktop.png?raw=true">
</details>

## Highlights ✨

**🚀 &nbsp;Fast and responsive**

- Fast page render and responsive design
- Fast static generation with efficient compiler

**🤖 &nbsp;Deploy instantly**

- Deploy on Vercel in minutes
- Incremental regeneration and no need to redeploy after update the content in notion

**🚙 &nbsp;Fully functional**

- Comments, full width page, quick search and tag filter
- RSS, analytics, web vital... and much more

**🎨 &nbsp;Easy for customization**

- Rich config options, support English & Chinese interface
- Built with Tailwind CSS, easy for customization

**🕸 &nbsp;Pretty URLs and SEO friendly**

## Quick Start

- Star this repo 😉
- Duplicate [this Notion template](https://craigary.notion.site/866916e3b939468b9b6f1d47dce99f9c), and share it to the public
- [Fork](https://github.com/craigary/nobelium/fork) this project
- Customize `blog.config.js`
- _(Optional)_ Replace `favicon.svg`, and `favicon.ico` in `/public` folder with your own
- Deploy on [Vercel](https://vercel.com), set following environment variables：
  - `NOTION_PAGE_ID` (Required): The ID of the Notion page you previously shared to the web, usually has 32 digits after your workspace address
  - `NOTION_ACCESS_TOKEN` (Optional, not recommended): If you decide not to share your database, you can use token to let Nobelium grab data from Notion database. You can find it in your browser cookies called `token_v2`
    - Keep in mind Notion token is only valid for 180 days, make sure to update manually in vercel dashboard, we probably switch to Official API to resolve this issue in the future. Also, images in Notion database will not properly rendered
- **That's it!** Easy-peasy?

<details><summary>Wait for a sec, what is Page ID？</summary>
  <img src="https://github.com/craigary/nobelium/blob/main/pageid.png?raw=true">
</details>

## License

The MIT License.

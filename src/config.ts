import type { SocialObjects } from "./types";

export const SITE = {
  website: "https://www.ejreilly.dev",
  author: "EJ Reilly",
  desc: "Coding, music, video games and other rants.",
  title: "Code Comments",
  ogImage: "default-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 3,
};

export const LOGO_IMAGE = {
  enable: false,
  svg: false,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/Mawdac",
    linkTitle: ` ${SITE.author} on Github`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/ej-reilly/",
    linkTitle: `${SITE.author} on LinkedIn`,
    active: true,
  },
  {
    name: "Steam",
    href: "https://steamcommunity.com/id/maddawik/",
    linkTitle: `${SITE.author} on Steam`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:edwardreillycomputers@gmail.com",
    linkTitle: `Send an email to ${SITE.author}`,
    active: true,
  },
];

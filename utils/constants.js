import BlogComponent from "@/components/TabItem/BlogComponent";
import PraticesComponent from "@/components/TabItem/PraticesComponent";
import ProjectComponent from "@/components/TabItem/ProjectComponent";
import { Github, Linkedin, Mail } from "lucide-react";
import { nanoid } from "nanoid"

export const DataNavMenus = [
    {
        id: nanoid(),
        href: "/",
        name: "Home"
    },
    {
        id: nanoid(),
        href: "/",
        name: "Projects"
    },
    {
        id: nanoid(),
        href: "/",
        name: "Practices"
    },
    {
        id: nanoid(),
        href: "/",
        name: "Blogs"
    },
    {
        id: nanoid(),
        href: "/",
        name: "Contact"
    },
];

export const DataSocialLink = [
    {
        id: nanoid(),
        icon: <Github className='socialLinkItemSize' />,
        name: "Github",
        href: "https://github.com/ndemir9"
    },
    {
        id: nanoid(),
        icon: <Linkedin className='socialLinkItemSize' />,
        name: "Linkledin",
        href: "https://www.linkedin.com/in/ndemir9/"
    },
    {
        id: nanoid(),
        icon: <Mail className='socialLinkItemSize' />,
        name: "Email",
        href: "mailto:ndemir9@hotmail.com"
    }
];

export const DataMyTitle = "Hi, my name is Nuri Demir. I'm <i>Front-end Developer</i>.";

export const DataMyDesc = "Lorem ipsum dolor sit amet consectetur adipisicing elit. <a href='#'>Nemo nam</a>, nostrum nesciunt eveniet rem laboriosam unde fugit quos impedit perferendis aliquam illo qui in illum. Harum laboriosam vitae ducimus aspernatur.";

export const DataMyMail = "ndemir9@hotmail.com";

export const tabsData = [
    {
        id: nanoid(),
        name: "Blogs",
        component: <BlogComponent />
    },
    {
        id: nanoid(),
        name: "Projects",
        component: <ProjectComponent />
    },
    {
        id: nanoid(),
        name: "Pratices",
        component: <PraticesComponent />
    }
]

export const DataCurrentTabId = "Blogs"
import { Menu } from "@/types/menu";
import { resume } from "@/data/resume";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    newTab: false,
    path: "/",
  },
  {
    id: 2,
    title: "About",
    newTab: false,
    path: "/about",
  },
  {
    id: 3,
    title: "Projects",
    newTab: false,
    path: "/projects",
  },
  {
    id: 4,
    title: "Resume",
    newTab: true,
    path: encodeURI(resume.fileUrl),
  },
];
export default menuData;

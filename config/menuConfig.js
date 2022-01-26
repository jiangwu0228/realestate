import { FcHome, FcAbout } from "react-icons/fc";
import { BsSearch } from "react-icons/bs";
import { FiKey } from "react-icons/fi";

export const menuItems = [
  {
    label: "Home",
    path: "/",
    icon: <FcHome />,
  },
  {
    label: "Search",
    path: "/search",
    icon: <BsSearch />,
  },
  {
    label: "Buy Property",
    path: "/search?purpose=for-sale",
    icon: <FcAbout />,
  },
  {
    label: "Rent Property",
    path: "/search?purpose=for-rent",
    icon: <FiKey />,
  },
];

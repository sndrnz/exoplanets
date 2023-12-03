export type NavigationItem = {
  name: string;
  path: string;
  placement: "center" | "left" | "right";
};

const navigationItems: NavigationItem[] = [
  // {
  //   name: "Home",
  //   path: "/",
  //   placement: "center",
  // },
  {
    name: "Planets",
    path: "/planets",
    placement: "center",
  },
  {
    name: "Types",
    path: "/types",
    placement: "center",
  },
  {
    name: "Methods",
    path: "/methods",
    placement: "center",
  },
  {
    name: "Dictionary",
    path: "/dictionary",
    placement: "center",
  },
  {
    name: "About",
    path: "/about",
    placement: "right",
  },
];

export default navigationItems;

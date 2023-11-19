export type NavigationItem = {
  name: string;
  path: string;
};

const navigationItems: NavigationItem[] = [
  // {
  //   name: "Home",
  //   path: "/",
  // },
  {
    name: "Planets",
    path: "/planets",
  },
  {
    name: "About",
    path: "/about",
  },
];

export default navigationItems;

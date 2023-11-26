export type NavigationItem = {
  name: string;
  path: string;
};

export const headerItems: NavigationItem[] = [
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

export const footerItems: NavigationItem[] = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Planets",
    path: "/planets",
  },
  {
    name: "About",
    path: "/about",
  },
];

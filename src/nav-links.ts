import { DLCIds } from "@/parser/main";

export interface NavItem {
  name: string;
  path: string;
  requireDLC?: string;
  i18nKey: string;
  saveRequired?: boolean;
}

const NavItems: NavItem[] = [
  {
    name: "Home",
    path: "/",
    i18nKey: "home-page.title",
  },
  {
    name: "Overview",
    path: "/overview",
    i18nKey: "overview-page.title",
    saveRequired: true,
  },
  {
    name: "Duplicants",
    path: "/duplicants",
    i18nKey: "duplicant.noun_titlecase_plural",
    saveRequired: true,
  },
  {
    name: "Geysers",
    path: "/geysers",
    i18nKey: "geyser.noun_titlecase_plural",
    saveRequired: true,
  },
  {
    name: "Planets",
    path: "/planets",
    requireDLC: DLCIds.None,
    i18nKey: "planet.noun_titlecase_plural",
    saveRequired: true,
  },
  {
    name: "Materials",
    path: "/materials",
    i18nKey: "material.noun_titlecase_plural",
    saveRequired: true,
  },
  {
    name: "Raw Editor",
    path: "/raw",
    i18nKey: "raw-editor-page.title",
    saveRequired: true,
  },
  {
    name: "Changelog",
    path: "/changelog",
    i18nKey: "changelog.title",
  },
];

export default NavItems;

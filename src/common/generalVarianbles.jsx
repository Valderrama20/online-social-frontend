import axios from "axios";
import {
  HomeIcon,
  ExploreIcon,
  NotificationsIcon,
  MessagesIcon,
  ListsIcon,
  ProfileIcon,
  MoreIcon,
  img,
} from "../asset/icons";
import { user } from "./globalState";

export const links = [
  {
    id: "homeIcon",
    icon: HomeIcon,
    label: "Home",
    ruta: "/home",
  },
  {
    id: "exploreIcon",
    icon: ExploreIcon,
    label: "Explore",
    style: "cursor-no-drop",
  },
  {
    id: "notificationsIcon",
    icon: NotificationsIcon,
    label: "Notifications",
    style: "cursor-no-drop",
  },
  {
    id: "messagesIcon",
    icon: MessagesIcon,
    label: "Messages",
    style: "cursor-no-drop",
  },
  {
    id: "listsIcon",
    icon: ListsIcon,
    label: "Lists",
    style: "cursor-no-drop",
  },
  {
    id: "profileIcon",
    icon: ProfileIcon,
    label: "Profile",
    ruta: () => {
      let { data } = user();
      return `/profile/${data.user.username}/${data.user._id}`;
    },
  },
  {
    id: "moreIcon",
    icon: MoreIcon,
    label: "More",
    style: "cursor-no-drop",
  },
];

export const trendingTopics = [
  {
    id: 1,
    name: "Araujo",
    posts: "276K",
    category: ["UEFA Champions League", "Trending"],
  },
  {
    id: 2,
    name: "Madrid",
    posts: "637K",
    category: ["UEFA Champions League", "Trending"],
  },
  {
    id: 3,
    name: "Lunin",
    posts: "15.1K",
    category: ["UEFA Champions League", "Trending"],
  },
  {
    id: 4,
    name: "Grealish",
    posts: "17.5K",
    category: ["Trending"],
  },
  {
    id: 5,
    name: "Xavi",
    posts: "192K",
    category: ["Sports", "Trending"],
  },
  {
    id: 6,
    name: "Barça",
    posts: "466K",
    category: ["UEFA Champions League", "Trending"],
  },
  {
    id: 7,
    name: "#TierraDeNadie6",
    posts: "33.9K",
    category: ["Trending"],
  },
  {
    id: 8,
    name: "El City",
    posts: "73.4K",
    category: ["UEFA Champions League", "Trending"],
  },
  {
    id: 9,
    name: "Nacho",
    posts: "38.7K",
    category: ["UEFA Champions League", "Trending"],
  },
  {
    id: 10,
    name: "Bildu",
    posts: "49.8K",
    category: ["Politics", "Trending"],
  },
];

export let methods = {
  get: "get",
  post: "post",
  put: "put",
  delete: "delete",
};

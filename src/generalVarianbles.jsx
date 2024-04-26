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
} from "./asset/icons";

export const links = [
  {
    id: "homeIcon",
    icon: HomeIcon,
    label: "Home",
  },
  {
    id: "exploreIcon",
    icon: ExploreIcon,
    label: "Explore",
  },
  {
    id: "notificationsIcon",
    icon: NotificationsIcon,
    label: "Notifications",
  },
  {
    id: "messagesIcon",
    icon: MessagesIcon,
    label: "Messages",
  },
  {
    id: "listsIcon",
    icon: ListsIcon,
    label: "Lists",
  },
  {
    id: "profileIcon",
    icon: ProfileIcon,
    label: "Profile",
  },
  {
    id: "moreIcon",
    icon: MoreIcon,
    label: "More",
  },
];

export let user = {
  name: "Jose Garcia",
  user: "Valderrama20",
};

export let publicationInfo = {
  user: user,
  text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut id vero ut. Debitis praesentium dolore rem eos! Perspiciatis cumque ullam ea explicabo adipisci ad voluptatum dolores aliquid, a, repudiandae magni.",
  img: "https://www.qindel.com/wp-content/uploads/2022/05/beneficios-react-qindel.jpg",
  messages: 20,
  reposts: 10,
  fevorites: 25,
  views: 1346,
};

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

// eliminar luego se solucinar lo de

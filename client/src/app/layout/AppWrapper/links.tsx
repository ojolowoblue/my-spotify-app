import { ReactComponent as Home } from "app/assets/icons/Home.svg";
import { ReactComponent as Music } from "app/assets/icons/Music.svg";
import { ReactComponent as Recently } from "app/assets/icons/Recently.svg";
import { ReactComponent as Playlist } from "app/assets/icons/Recently.svg";

type Link = {
  href: string;
  name: string;
  icon: React.ReactNode;
};

const links: Link[] = [
  {
    href: "/",
    name: "Home",
    icon: <Home />,
  },
  {
    href: "/",
    name: "Top Tracks",
    icon: <Music />,
  },
  {
    href: "/",
    name: "Recently Played",
    icon: <Recently />,
  },
  {
    href: "/",
    name: "Playlists",
    icon: <Playlist />,
  },
];

export default links;

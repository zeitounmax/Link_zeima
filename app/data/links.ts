export interface Link {
  name: string;
  url: string;
  icon: string;
  color: string;
}

export const links: Link[] = [
  {
    name: "GitHub",
    url: "https://github.com/zeitounmax",
    icon: "🐙",
    color: "hover:bg-gray-900 hover:text-white",
  },
  {
    name: "Mastodon",
    url: "https://piaille.fr/deck/@thirymaximilien",
    icon: "🐘",
    color: "hover:bg-purple-500 hover:text-white",
  },
  {
    name: "ZeitounCode",
    url: "https://zeitouncode.fr",
    icon: "💻",
    color: "hover:bg-purple-600 hover:text-white",
  },
  {
    name: "KamiZenma",
    url: "https://Kami-zenma.com",
    icon: "🍃",
    color: "hover:bg-green-600 hover:text-white",
  },
  {
    name: "Signal",
    url: "https://signal.me/#eu/B6XdYkkKvI684eXz6QWOrsMOlcF2VwzQDKw2QBxF-kWD_ryNiKhCho0sC5_JIpJh",
    icon: "📱",
    color: "hover:bg-indigo-600 hover:text-white",
  },
  {
    name: "Email ",
    url: "mailto:maximilien.thiry@protonmail.com",
    icon: "📧",
    color: "hover:bg-orange-500 hover:text-white",
  },
];

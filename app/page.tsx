import Image from "next/image";
import { links } from "./data/links";
import LinkCard from "./components/LinkCard";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-4xl mx-auto">
        <div className="text-center mb-6 sm:mb-8">
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-3 sm:mb-4">
            <Image
              src="/me_remix.png"
              alt="Zeima"
              fill
              className="rounded-full object-cover border-4 border-[var(--border)] shadow-lg"
              priority
            />
          </div>
          <h1 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2 text-[var(--primary)]">
            Zeima
          </h1>
          <p className="opacity-80 text-xs sm:text-sm">
            Développeur Web & Bloggeur
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {links.map((link, index) => (
            <LinkCard key={index} link={link} />
          ))}
        </div>

        <div className="text-center mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-[var(--border)]">
          <p className="text-xs opacity-60">
            © {new Date().getFullYear()} Zeima. Fait avec ❤️ et Next.js
          </p>
        </div>
      </div>
    </div>
  );
}

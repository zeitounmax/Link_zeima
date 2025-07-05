import Image from "next/image";
import { links } from "./data/links";
import LinkCard from "./components/LinkCard";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg mx-auto">
        <div className="text-center mb-6 sm:mb-8">
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-3 sm:mb-4">
            <Image
              src="/me_remix.png"
              alt="Zeima"
              fill
              className="rounded-full object-cover border-4 border-white dark:border-slate-700 shadow-lg"
              priority
            />
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-slate-100 mb-1 sm:mb-2">
            Zeima
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm">
            Développeur Web & Bloggeur
          </p>
        </div>

       
        <div className="space-y-2 sm:space-y-3">
          {links.map((link, index) => (
            <LinkCard key={index} link={link} />
          ))}
        </div>

        
        <div className="text-center mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-slate-200 dark:border-slate-700">
          <p className="text-xs text-slate-500 dark:text-slate-400">
            © {new Date().getFullYear()} Zeima. Fait avec ❤️ et Next.js
          </p>
        </div>
      </div>
    </div>
  );
}

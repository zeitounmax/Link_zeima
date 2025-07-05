import { Link } from "../data/links";

interface LinkCardProps {
  link: Link;
}

export default function LinkCard({ link }: LinkCardProps) {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`block w-full p-3 sm:p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${link.color}`}
    >
      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2 sm:space-x-3">
                  <span className="text-lg sm:text-xl">{link.icon}</span>
                  <span className="font-medium text-slate-700 dark:text-slate-300 text-sm sm:text-base">
                    {link.name}
                  </span>
                </div>
                        <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 dark:text-slate-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          />
        </svg>
      </div>
    </a>
  );
} 
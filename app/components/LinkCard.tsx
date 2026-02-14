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
      className="block w-full h-full p-2 sm:p-2.5 rounded-md bg-[var(--card)] border border-[var(--border)] shadow-sm hover:border-[var(--primary)] transition-colors duration-200 group relative overflow-hidden"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2 sm:space-x-3">
          <span className="text-lg sm:text-xl group-hover:scale-110 transition-transform duration-200">{link.icon}</span>
          <span className="font-medium text-[var(--card-foreground)] text-sm sm:text-base group-hover:text-[var(--primary)] transition-colors">
            {link.name}
          </span>
        </div>
        <svg
          className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--border)] group-hover:text-[var(--primary)] transition-colors"
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
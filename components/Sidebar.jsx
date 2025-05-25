"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function OnThisPage() {
  const [headings, setHeadings] = useState([]);
  const pathname = usePathname();

  useEffect(() => {
    const collectHeadings = () => {
      const els = Array.from(document.querySelectorAll("h2, h3"));
      const parsed = els.map((el) => {
        const id = el.id || el.textContent.toLowerCase().replace(/\s+/g, "-");
        el.id = id;
        return {
          id,
          text: el.textContent,
          level: parseInt(el.tagName.replace("H", ""), 10),
        };
      });
      setHeadings(parsed);
    };

    setTimeout(collectHeadings, 100);
  }, [pathname]);

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="hidden lg:flex fixed left-0 top-16 z-30 h-[calc(100vh-4rem)]">
      <div className="group flex flex-col bg-background border-r border-muted shadow-md transition-all relative">
        {/* Hamburger Icon */}
        <div className="px-4 py-2 cursor-pointer">
          <svg
            className="w-6 h-6 text-foreground"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>

        {/* Slide-in panel on hover */}
        <div className="absolute left-full top-0 w-64 p-4 space-y-2 bg-background border-l border-muted shadow-md opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-300">
          <h2 className="text-sm font-semibold text-foreground mb-2">
            On This Page
          </h2>
          <nav className="space-y-1">
            {headings.map((h) => (
              <button
                key={h.id}
                onClick={() => handleScroll(h.id)}
                className={`block text-left text-sm w-full text-muted-foreground hover:text-primary ${
                  h.level === 3 ? "ml-4" : ""
                }`}
              >
                {h.text}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}

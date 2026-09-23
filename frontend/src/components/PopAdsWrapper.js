"use client";

import { usePathname } from "next/navigation";

export default function PopAdsWrapper() {
  const pathname = usePathname();

  if (pathname === "/aads") {
    return null;
  }

  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `(function(s){s.dataset.zone='11865842',s.src='https://al5sm.com/tag.min.js'})([document.documentElement, document.body].filter(Boolean).pop().appendChild(document.createElement('script')))`
      }}
    />
  );
}

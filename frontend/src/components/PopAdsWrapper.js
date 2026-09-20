"use client";

import { usePathname } from "next/navigation";

export default function PopAdsWrapper() {
  const pathname = usePathname();

  if (pathname === "/aads") {
    return null;
  }

  return (
    <script
      type="text/javascript"
      data-cfasync="false"
      dangerouslySetInnerHTML={{
        __html: `
/*<![CDATA[/* */
(function(){var j=window,u="f80ae73ce1da56229e8abb10a7133550",c=[["siteId",373*362-441+5186054],["minBid",0],["popundersPerIP","0"],["delayBetween",0],["default",false],["defaultPerDay",0],["topmostLayer","auto"]],h=["d3d3LnByZW1pdW12ZXJ0aXNpbmcuY29tL2xpL0kveWdtYWlsLm1pbi5qcw==","ZDJqMDQyY2oxNDIxd2kuY2xvdWRmcm9udC5uZXQvc2luZGV4Lm1pbi5qcw=="],l=-1,t,p,o=function(){clearTimeout(p);l++;if(h[l]&&!(1815825597000<(new Date).getTime()&&1<l)){t=j.document.createElement("script");t.type="text/javascript";t.async=!0;var r=j.document.getElementsByTagName("script")[0];t.src="https://"+atob(h[l]);t.crossOrigin="anonymous";t.onerror=o;t.onload=function(){clearTimeout(p);j[u.slice(0,16)+u.slice(0,16)]||o()};p=setTimeout(o,5E3);r.parentNode.insertBefore(t,r)}};if(!j[u]){try{Object.freeze(j[u]=c)}catch(e){}o()}})();
/*]]>/* */
        `
      }}
    />
  );
}

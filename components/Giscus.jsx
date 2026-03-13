import { useEffect, useRef } from "react";

export default function Giscus({ term }) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    // 기존 스크립트/iframe 제거 후 재생성
    ref.current.innerHTML = "";

    const script = document.createElement("script");
    script.src = "https://giscus.app/client.js";
    script.async = true;
    script.crossOrigin = "anonymous";

    script.setAttribute("data-repo", "KimHanWhee/KimHanWhee.github.io");
    script.setAttribute("data-repo-id", "R_kgDORCSvGA");
    script.setAttribute("data-category", "General");
    script.setAttribute("data-category-id", "DIC_kwDORCSvGM4C3O7R");
    script.setAttribute("data-mapping", "specific");
    script.setAttribute("data-term", term);
    script.setAttribute("data-strict", "0");
    script.setAttribute("data-reactions-enabled", "1");
    script.setAttribute("data-emit-metadata", "0");
    script.setAttribute("data-input-position", "bottom");
    script.setAttribute("data-theme", "preferred_color_scheme");
    script.setAttribute("data-lang", "ko");

    ref.current.appendChild(script);
  }, [term]);

  return <section ref={ref} />;
}

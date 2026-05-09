import { useEffect } from "react";

/**
 * Rola pro topo da página quando o componente monta.
 * Workaround pro bug do TanStack Router scrollRestoration.
 */
export function useScrollToTop() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
}
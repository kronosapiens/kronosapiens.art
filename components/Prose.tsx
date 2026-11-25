import { toJsxRuntime } from "hast-util-to-jsx-runtime";
import type { RootContent } from "mdast";
import { toHast } from "mdast-util-to-hast";
import Link from "next/link";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";

/** Renders markdown nodes from materials/, with site links as Next links. */
export function Prose({ nodes }: { nodes: RootContent[] }) {
  return toJsxRuntime(toHast({ type: "root", children: nodes }), {
    Fragment,
    jsx,
    jsxs,
    components: {
      a: ({ href = "", children }) =>
        href.startsWith("/") ? (
          <Link href={href}>{children}</Link>
        ) : (
          <a href={href}>{children}</a>
        ),
    },
  });
}

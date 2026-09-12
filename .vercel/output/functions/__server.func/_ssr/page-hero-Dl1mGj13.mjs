import { l as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { u as ChevronRight } from "../_libs/lucide-react.mjs";
import { t as DirectAnswer } from "./direct-answer-BeferYFf.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/page-hero-Dl1mGj13.js
var import_jsx_runtime = require_jsx_runtime();
function Breadcrumbs({ items }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
		"aria-label": "Breadcrumb",
		className: "mb-8 text-xs uppercase tracking-[0.16em] text-faint",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "flex flex-wrap items-center gap-2",
			children: items.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "flex items-center gap-2",
				children: [i > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-3" }) : null, item.to ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: item.to,
					className: "hover:text-gold",
					children: item.name
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-muted",
					children: item.name
				})]
			}, item.name))
		})
	});
}
function PageHero({ kicker, title, answer, crumbs }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "page-hero border-b border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Breadcrumbs, { items: crumbs }),
				kicker ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-3 text-xs uppercase tracking-[0.22em] text-gold",
					children: kicker
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "max-w-4xl text-4xl text-foreground sm:text-6xl",
					children: title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "gold-rule mt-8 max-w-xs" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DirectAnswer, {
					className: "mt-8",
					children: answer
				})
			]
		})
	});
}
//#endregion
export { PageHero as t };

import { l as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { d as graph, r as breadcrumbSchema, t as JsonLd } from "./schema-N9Odpobz.mjs";
import { n as guides } from "./guides-_VMjKNsJ.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as PageHero } from "./page-hero-Dl1mGj13.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/guides-DzXpqVwz.js
var import_jsx_runtime = require_jsx_runtime();
var answer = "Pure Golden publishes practical demolition guides for Dubai owners and consultants: how demolition permits work (DM, DDA, Trakhees, DEWA), what villa demolition costs in 2026, and the step-by-step villa process. These pages are written as direct answers so they can be cited by search and AI engines.";
function GuidesIndex() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "pb-24 md:pb-0",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(JsonLd, { data: graph([breadcrumbSchema([{
				name: "Home",
				path: "/"
			}, {
				name: "Guides",
				path: "/guides"
			}])]) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
				kicker: "Guides",
				title: "Demolition guides for Dubai owners",
				answer,
				crumbs: [{
					name: "Home",
					to: "/"
				}, { name: "Guides" }]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mx-auto max-w-6xl px-4 py-14 sm:px-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-5 md:grid-cols-3",
					children: guides.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/guides/$slug",
						params: { slug: g.slug },
						className: "border border-border bg-card p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs uppercase tracking-[0.16em] text-faint",
								children: [
									g.readMins,
									" min read · ",
									g.updated
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-3 font-sans text-xl font-medium leading-snug",
								children: g.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm text-muted",
								children: g.answer
							})
						]
					}, g.slug))
				})
			})
		]
	});
}
//#endregion
export { GuidesIndex as component };

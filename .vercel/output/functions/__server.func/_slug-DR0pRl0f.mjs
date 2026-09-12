import { l as require_jsx_runtime } from "./_libs/@radix-ui/react-accordion+[...].mjs";
import { d as graph, n as articleSchema, r as breadcrumbSchema, t as JsonLd } from "./_ssr/schema-N9Odpobz.mjs";
import { n as guides, t as getGuide } from "./_ssr/guides-_VMjKNsJ.mjs";
import { R as notFound, v as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { i as Button, r as Route$2 } from "./_ssr/router-DKiJfZcN.mjs";
import { t as PageHero } from "./_ssr/page-hero-Dl1mGj13.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-DR0pRl0f.js
var import_jsx_runtime = require_jsx_runtime();
function GuidePage() {
	const { slug } = Route$2.useParams();
	const guide = getGuide(slug);
	if (!guide) throw notFound();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "pb-24 md:pb-0",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(JsonLd, { data: graph([breadcrumbSchema([
				{
					name: "Home",
					path: "/"
				},
				{
					name: "Guides",
					path: "/guides"
				},
				{
					name: guide.title,
					path: `/guides/${guide.slug}`
				}
			]), articleSchema(guide)]) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
				kicker: `${guide.readMins} min · Updated ${guide.updated}`,
				title: guide.h1,
				answer: guide.answer,
				crumbs: [
					{
						name: "Home",
						to: "/"
					},
					{
						name: "Guides",
						to: "/guides"
					},
					{ name: guide.title }
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "mx-auto max-w-3xl px-4 py-14 sm:px-6",
				children: [
					guide.sections.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "mb-12",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-3xl",
								children: s.h2
							}),
							s.paragraphs.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-sm leading-relaxed text-muted",
								children: p
							}, p.slice(0, 32))),
							s.list ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-4 space-y-2 text-sm text-muted",
								children: s.list.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
									className: "border-l-2 border-gold pl-3",
									children: item
								}, item))
							}) : null
						]
					}, s.h2)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs text-faint",
						children: [
							"This guide is general information for Dubai plots as of ",
							guide.updated,
							". Confirm fees and document lists on the live DM, DDA, Trakhees, and DEWA portals before you file."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 flex flex-col gap-3 sm:flex-row",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contact",
								children: "Get a demolition quote"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "outline",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/faq",
								children: "Read the FAQ"
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-16 text-2xl",
						children: "Other guides"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 space-y-2 text-sm",
						children: guides.filter((g) => g.slug !== guide.slug).map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							className: "text-gold hover:text-gold-bright",
							to: "/guides/$slug",
							params: { slug: g.slug },
							children: g.title
						}) }, g.slug))
					})
				]
			})
		]
	});
}
//#endregion
export { GuidePage as component };

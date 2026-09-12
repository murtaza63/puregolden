import { l as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { d as graph, g as services, r as breadcrumbSchema, t as JsonLd } from "./schema-N9Odpobz.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as PageHero } from "./page-hero-Dl1mGj13.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services-bS7LgJ_R.js
var import_jsx_runtime = require_jsx_runtime();
var answer = "Pure Golden provides licensed demolition services in Dubai including villa demolition, building demolition, industrial demolition, partial and interior demolition, excavation and earthwork, concrete cutting and breaking, and site clearance with debris removal. Each job is quoted after inspection and planned around the permit authority on the plot.";
function ServicesIndex() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "pb-24 md:pb-0",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(JsonLd, { data: graph([breadcrumbSchema([{
				name: "Home",
				path: "/"
			}, {
				name: "Services",
				path: "/services"
			}])]) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
				kicker: "Services",
				title: "Demolition services in Dubai",
				answer,
				crumbs: [{
					name: "Home",
					to: "/"
				}, { name: "Services" }]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mx-auto max-w-6xl px-4 py-14 sm:px-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-6 md:grid-cols-2",
					children: services.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/services/$slug",
						params: { slug: s.slug },
						className: "group grid overflow-hidden border border-border sm:grid-cols-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "sm:col-span-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: s.image,
								alt: s.imageAlt,
								width: 600,
								height: 400,
								loading: "lazy",
								className: "h-48 w-full object-cover sm:h-full"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "sm:col-span-3 p-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-sans text-xl font-medium",
								children: s.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted",
								children: s.answer
							})]
						})]
					}, s.slug))
				})
			})
		]
	});
}
//#endregion
export { ServicesIndex as component };

import { l as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { c as faqs, d as graph, o as faqSchema, r as breadcrumbSchema, s as faqTopics, t as JsonLd } from "./schema-N9Odpobz.mjs";
import { t as PageHero } from "./page-hero-Dl1mGj13.mjs";
import { t as FaqList } from "./faq-list-mmau8CRu.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/faq-bxdDOTB5.js
var import_jsx_runtime = require_jsx_runtime();
var answer = "This FAQ answers how demolition works in Dubai: typical villa cost ranges, which authority issues the permit, DEWA disconnection, on-site duration, neighbour protection, asbestos, and how to request a Pure Golden quotation. Short answers first — that is the format answer engines extract.";
function FaqPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "pb-24 md:pb-0",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(JsonLd, { data: graph([breadcrumbSchema([{
				name: "Home",
				path: "/"
			}, {
				name: "FAQ",
				path: "/faq"
			}]), faqSchema(faqs)]) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
				kicker: "FAQ",
				title: "Demolition in Dubai: questions and direct answers",
				answer,
				crumbs: [{
					name: "Home",
					to: "/"
				}, { name: "FAQ" }]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mx-auto max-w-3xl px-4 py-14 sm:px-6",
				children: faqTopics.map((topic) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl",
						children: topic
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaqList, { items: faqs.filter((f) => f.topic === topic) })]
				}, topic))
			})
		]
	});
}
//#endregion
export { FaqPage as component };

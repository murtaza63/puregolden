import { l as require_jsx_runtime } from "./_libs/@radix-ui/react-accordion+[...].mjs";
import { d as graph, g as services, h as serviceSchema, o as faqSchema, r as breadcrumbSchema, t as JsonLd, u as getService } from "./_ssr/schema-N9Odpobz.mjs";
import { R as notFound, v as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { i as Button, n as Route } from "./_ssr/router-DKiJfZcN.mjs";
import { t as PageHero } from "./_ssr/page-hero-Dl1mGj13.mjs";
import { t as FaqList } from "./_ssr/faq-list-mmau8CRu.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-BfqEO8W3.js
var import_jsx_runtime = require_jsx_runtime();
function ServicePage() {
	const { slug } = Route.useParams();
	const service = getService(slug);
	if (!service) throw notFound();
	const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "pb-24 md:pb-0",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(JsonLd, { data: graph([
				breadcrumbSchema([
					{
						name: "Home",
						path: "/"
					},
					{
						name: "Services",
						path: "/services"
					},
					{
						name: service.name,
						path: `/services/${service.slug}`
					}
				]),
				serviceSchema(service),
				faqSchema(service.faqs)
			]) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
				kicker: "Service",
				title: service.h1,
				answer: service.answer,
				crumbs: [
					{
						name: "Home",
						to: "/"
					},
					{
						name: "Services",
						to: "/services"
					},
					{ name: service.name }
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: service.image,
						alt: service.imageAlt,
						width: 1200,
						height: 800,
						className: "w-full object-cover"
					}), service.body.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-sm leading-relaxed text-muted",
						children: p
					}, p.slice(0, 24)))]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
					className: "lg:col-span-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border border-border bg-card p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-sans text-lg font-medium",
								children: "Scope typically includes"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-4 space-y-2 text-sm text-muted",
								children: service.bullets.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
									className: "border-l-2 border-gold pl-3",
									children: b
								}, b))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								className: "mt-6 w-full",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/contact",
									children: "Quote this service"
								})
							})
						]
					})
				})]
			}),
			service.faqs.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto max-w-3xl px-4 pb-16 sm:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "text-3xl",
					children: ["Questions about ", service.name.toLowerCase()]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaqList, { items: service.faqs })
				})]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-t border-border bg-card py-14",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl px-4 sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl",
						children: "Related services"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 grid gap-4 md:grid-cols-3",
						children: others.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/services/$slug",
							params: { slug: s.slug },
							className: "border border-border bg-background p-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-sans text-base font-medium",
								children: s.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted",
								children: s.short
							})]
						}, s.slug))
					})]
				})
			})
		]
	});
}
//#endregion
export { ServicePage as component };

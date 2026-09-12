import { l as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { d as graph, r as breadcrumbSchema, t as JsonLd } from "./schema-N9Odpobz.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as Button } from "./router-DKiJfZcN.mjs";
import { t as PageHero } from "./page-hero-Dl1mGj13.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/projects-ca4y0p_W.js
var import_jsx_runtime = require_jsx_runtime();
var projectTypes = [
	{
		slug: "residential",
		title: "Residential villa takedowns",
		image: "/images/villa.jpg",
		imageAlt: "Villa demolition in a Dubai community",
		summary: "Complete and selective demolition of G+1 and G+2 villas in established Dubai communities, including permit support, neighbour protection, and plot levelling for rebuilds.",
		points: [
			"Community-access plant selection",
			"Pool and basement break-out when specified",
			"Boundary walls retained or removed as quoted"
		]
	},
	{
		slug: "commercial",
		title: "Commercial building demolition",
		image: "/images/excavator.jpg",
		imageAlt: "Excavator on a commercial demolition site",
		summary: "Low-rise commercial and mixed-use structures: sequenced structural demolition, public protection, and haulage planned around street constraints.",
		points: [
			"Method statements for occupied neighbours",
			"Staged strip-out then structure",
			"Coordination with project consultants"
		]
	},
	{
		slug: "industrial",
		title: "Industrial and warehouse clearance",
		image: "/images/industrial.jpg",
		imageAlt: "Warehouse demolition in Dubai industrial area",
		summary: "Warehouses, workshops, and yards in Al Quoz, DIP, and Jebel Ali — steel frames, heavy slabs, and site clearance for the next facility.",
		points: [
			"Steel and RCC takedown",
			"Yard and slab removal",
			"Shutdown-aware programmes"
		]
	},
	{
		slug: "earthwork",
		title: "Foundation removal and earthwork",
		image: "/images/cleared.jpg",
		imageAlt: "Cleared plot after foundation removal",
		summary: "Old footings, pits, and slabs taken out after demolition so the civil package does not start on buried surprises.",
		points: [
			"Footings and ground beams",
			"Grading to requested level",
			"Single mobilisation with demolition"
		]
	}
];
var answer = "Pure Golden handles four demolition project types in Dubai: residential villa takedowns, low-rise commercial buildings, industrial warehouses and yards, and foundation removal with earthwork. Each job is planned around access, adjoining property, and the permit authority. We describe work types here rather than inventing named client case studies.";
function Projects() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "pb-24 md:pb-0",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(JsonLd, { data: graph([breadcrumbSchema([{
				name: "Home",
				path: "/"
			}, {
				name: "Projects",
				path: "/projects"
			}])]) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
				kicker: "Work types",
				title: "Demolition projects we take on in Dubai",
				answer,
				crumbs: [{
					name: "Home",
					to: "/"
				}, { name: "Projects" }]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mx-auto max-w-6xl space-y-10 px-4 py-14 sm:px-6",
				children: projectTypes.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "grid overflow-hidden border border-border lg:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: p.image,
						alt: p.imageAlt,
						width: 1200,
						height: 800,
						loading: "lazy",
						className: `h-64 w-full object-cover lg:h-full ${i % 2 ? "lg:order-2" : ""}`
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-6 sm:p-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-3xl",
								children: p.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-sm leading-relaxed text-muted",
								children: p.summary
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-5 space-y-2 text-sm text-muted",
								children: p.points.map((pt) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
									className: "border-l-2 border-gold pl-3",
									children: pt
								}, pt))
							})
						]
					})]
				}, p.slug))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mx-auto max-w-6xl px-4 pb-16 sm:px-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contact",
						children: "Discuss a plot"
					})
				})
			})
		]
	});
}
//#endregion
export { Projects as component };

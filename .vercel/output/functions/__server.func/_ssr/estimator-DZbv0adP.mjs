import { i as __toESM } from "../_runtime.mjs";
import { c as require_react, l as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { i as cn, l as formatAed } from "./schema-N9Odpobz.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as Button } from "./router-DKiJfZcN.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/estimator-DZbv0adP.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Label({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		className: cn("text-xs font-medium uppercase tracking-[0.14em] text-muted", className),
		...props
	});
}
var TYPES = [
	{
		id: "villa",
		label: "Villa",
		per: 48
	},
	{
		id: "building",
		label: "Building",
		per: 58
	},
	{
		id: "industrial",
		label: "Warehouse / industrial",
		per: 42
	},
	{
		id: "interior",
		label: "Interior soft strip",
		per: 28
	}
];
var ACCESS = [
	{
		id: "open",
		label: "Open plot / easy plant access",
		m: .92
	},
	{
		id: "normal",
		label: "Normal community street",
		m: 1
	},
	{
		id: "tight",
		label: "Tight access / narrow road",
		m: 1.28
	}
];
function Estimator() {
	const [type, setType] = (0, import_react.useState)("villa");
	const [area, setArea] = (0, import_react.useState)(420);
	const [storeys, setStoreys] = (0, import_react.useState)(2);
	const [access, setAccess] = (0, import_react.useState)("normal");
	const [extras, setExtras] = (0, import_react.useState)({
		pool: false,
		basement: false,
		foundations: true
	});
	const result = (0, import_react.useMemo)(() => {
		const t = TYPES.find((x) => x.id === type);
		const a = ACCESS.find((x) => x.id === access);
		const storeyM = 1 + Math.max(0, storeys - 1) * .1;
		let mid = area * t.per * storeyM * a.m;
		if (extras.pool) mid += 8500;
		if (extras.basement) mid += 14e3;
		if (!extras.foundations) mid *= .88;
		const low = Math.round(mid * .78);
		const high = Math.round(mid * 1.32);
		const daysLow = Math.max(5, Math.round(area / 90));
		return {
			low,
			high,
			daysLow,
			daysHigh: Math.max(daysLow + 4, Math.round(area / 45))
		};
	}, [
		type,
		area,
		storeys,
		access,
		extras
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "estimator",
		className: "scroll-mt-24 border border-border bg-card p-5 sm:p-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs uppercase tracking-[0.2em] text-gold",
				children: "Planning range"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-2 text-3xl text-foreground sm:text-4xl",
				children: "Demolition cost estimator"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-2xl text-sm text-muted",
				children: "Indicative 2026 Dubai range for superstructure demolition and debris. Not a contract. Permits, DEWA fees, asbestos, and night work are excluded. A site visit produces the real number."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 grid gap-8 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "space-y-5",
					onSubmit: (e) => e.preventDefault(),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "type",
							children: "Property type"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
							id: "type",
							className: "mt-2 flex h-11 w-full rounded-sm border border-border bg-background px-3 text-sm",
							value: type,
							onChange: (e) => setType(e.target.value),
							children: TYPES.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: t.id,
								children: t.label
							}, t.id))
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
							htmlFor: "area",
							children: ["Built-up area (m²) — ", area]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: "area",
							type: "range",
							min: 80,
							max: 2e3,
							step: 10,
							value: area,
							onChange: (e) => setArea(Number(e.target.value)),
							className: "mt-3 w-full accent-gold"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "storeys",
							children: "Storeys including ground"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
							id: "storeys",
							className: "mt-2 flex h-11 w-full rounded-sm border border-border bg-background px-3 text-sm",
							value: storeys,
							onChange: (e) => setStoreys(Number(e.target.value)),
							children: [
								1,
								2,
								3,
								4
							].map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: n,
								children: n
							}, n))
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "access",
							children: "Access"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
							id: "access",
							className: "mt-2 flex h-11 w-full rounded-sm border border-border bg-background px-3 text-sm",
							value: access,
							onChange: (e) => setAccess(e.target.value),
							children: ACCESS.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: t.id,
								children: t.label
							}, t.id))
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
								className: "text-xs font-medium uppercase tracking-[0.14em] text-muted",
								children: "Scope"
							}), [
								["foundations", "Include foundation / slab removal"],
								["pool", "Swimming pool break-out"],
								["basement", "Basement break-out"]
							].map(([key, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "flex min-h-11 items-center gap-3 text-sm text-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "checkbox",
									className: "size-4 accent-gold",
									checked: extras[key],
									onChange: (e) => setExtras((s) => ({
										...s,
										[key]: e.target.checked
									}))
								}), label]
							}, key))]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col justify-between border border-gold/30 bg-background p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-[0.18em] text-muted",
							children: "Indicative range"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "display mt-3 text-4xl tabular-nums text-gold sm:text-5xl",
							children: [
								formatAed(result.low),
								" – ",
								formatAed(result.high)
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-4 text-sm text-muted",
							children: [
								"On-site programme after permit: about ",
								result.daysLow,
								"–",
								result.daysHigh,
								" working days. Permit and DEWA NOC time is usually 2–5 weeks before that."
							]
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-col gap-3 sm:flex-row",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contact",
								children: "Request a site quote"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "outline",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/guides/$slug",
								params: { slug: "demolition-cost-dubai" },
								children: "Read the cost guide"
							})
						})]
					})]
				})]
			})
		]
	});
}
//#endregion
export { Label as n, Estimator as t };

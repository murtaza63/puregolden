import { i as __toESM } from "../_runtime.mjs";
import { c as require_react, l as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { a as company, d as graph, g as services, i as cn, r as breadcrumbSchema, t as JsonLd } from "./schema-N9Odpobz.mjs";
import { a as Phone, f as Check, o as MessageCircle } from "../_libs/lucide-react.mjs";
import { i as Button } from "./router-DKiJfZcN.mjs";
import { t as PageHero } from "./page-hero-Dl1mGj13.mjs";
import { n as Label, t as Estimator } from "./estimator-DZbv0adP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-NM631EVY.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Input = import_react.forwardRef(({ className, type, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
	type,
	className: cn("flex h-11 w-full rounded-sm border border-border bg-card px-3 text-sm text-foreground placeholder:text-faint", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold", className),
	ref,
	...props
}));
Input.displayName = "Input";
var Textarea = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
	className: cn("flex min-h-28 w-full rounded-sm border border-border bg-card px-3 py-2 text-sm text-foreground placeholder:text-faint", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold", className),
	ref,
	...props
}));
Textarea.displayName = "Textarea";
var answer = "Contact Pure Golden Wrecking & Demolition Works LLC at Office M-02, Al Mateen, Dubai, UAE. Call +971 50 748 5948, email info@puregoldendemolition.com, or send the form with plot location and structure type. Hours are Monday–Saturday 08:00–18:00. Emergency demolition: +971 50 594 7422, 24/7.";
function Contact() {
	const [sent, setSent] = (0, import_react.useState)(false);
	const [name, setName] = (0, import_react.useState)("");
	function onSubmit(e) {
		e.preventDefault();
		const data = new FormData(e.currentTarget);
		const payload = Object.fromEntries(data.entries());
		try {
			const prev = JSON.parse(localStorage.getItem("pg-enquiries") || "[]");
			localStorage.setItem("pg-enquiries", JSON.stringify([...prev, {
				...payload,
				at: Date.now()
			}]));
		} catch {}
		setName(String(payload.name || ""));
		setSent(true);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "pb-24 md:pb-0",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(JsonLd, { data: graph([breadcrumbSchema([{
				name: "Home",
				path: "/"
			}, {
				name: "Contact",
				path: "/contact"
			}])]) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
				kicker: "Contact",
				title: "Request a demolition quotation in Dubai",
				answer,
				crumbs: [{
					name: "Home",
					to: "/"
				}, { name: "Contact" }]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "lg:col-span-3",
					children: sent ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border border-gold/40 bg-card p-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-8 text-gold" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "mt-4 text-3xl",
								children: ["We have the enquiry", name ? `, ${name}` : ""]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm text-muted",
								children: "This preview stores the message on this device. For a live quote, call or WhatsApp the numbers on this page — that is how Dubai jobs actually get booked."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 flex flex-col gap-3 sm:flex-row",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: `tel:${company.phones[0].e164}`,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4" }), company.phones[0].display]
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									variant: "outline",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: `https://wa.me/${company.whatsapp}`,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "size-4" }), "WhatsApp"]
									})
								})]
							})
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit,
						className: "space-y-4 border border-border bg-card p-6 sm:p-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-4 sm:grid-cols-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "name",
									children: "Name"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "name",
									name: "name",
									required: true,
									className: "mt-2",
									autoComplete: "name"
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "phone",
									children: "Phone"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "phone",
									name: "phone",
									required: true,
									className: "mt-2",
									autoComplete: "tel"
								})] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "email",
								children: "Email"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "email",
								name: "email",
								type: "email",
								className: "mt-2",
								autoComplete: "email"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-4 sm:grid-cols-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "area",
									children: "Plot area / community"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "area",
									name: "area",
									className: "mt-2",
									placeholder: "e.g. Jumeirah 3"
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "service",
									children: "Service"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
									id: "service",
									name: "service",
									className: "mt-2 flex h-11 w-full rounded-sm border border-border bg-background px-3 text-sm",
									defaultValue: "villa-demolition",
									children: services.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: s.slug,
										children: s.name
									}, s.slug))
								})] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "message",
								children: "Plot notes"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
								id: "message",
								name: "message",
								className: "mt-2",
								placeholder: "G+1 villa, approx. 420 m², pool yes/no, access notes"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "submit",
								className: "w-full sm:w-auto",
								children: "Send enquiry"
							})
						]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "space-y-6 lg:col-span-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border border-border bg-card p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-sans text-lg font-medium",
								children: "Office"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("address", {
								className: "mt-3 space-y-2 text-sm not-italic text-muted",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: company.legalName }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: company.address.display }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: company.hours })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "mt-4 space-y-2 text-sm",
								children: [company.phones.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									className: "text-gold hover:text-gold-bright",
									href: `tel:${p.e164}`,
									children: [
										p.label,
										": ",
										p.display
									]
								}) }, p.display)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									className: "text-gold hover:text-gold-bright",
									href: `mailto:${company.email}`,
									children: company.email
								}) })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-4 text-sm text-muted",
								children: [
									"Emergency 24/7:",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										className: "text-gold",
										href: `tel:${company.emergency.e164}`,
										children: company.emergency.display
									})
								]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
						title: "Office M-02 Al Mateen Dubai map",
						className: "h-56 w-full border border-border",
						loading: "lazy",
						referrerPolicy: "no-referrer-when-downgrade",
						src: "https://maps.google.com/maps?q=Al%20Mateen%20Dubai&t=&z=13&ie=UTF8&iwloc=&output=embed"
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-card py-14",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-6xl px-4 sm:px-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Estimator, {})
				})
			})
		]
	});
}
//#endregion
export { Contact as component };

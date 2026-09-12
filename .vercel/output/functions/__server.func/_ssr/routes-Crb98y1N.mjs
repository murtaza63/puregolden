import { l as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { _ as whyUs, a as company, c as faqs, d as graph, f as howToSchema, g as services, m as processSteps, o as faqSchema, r as breadcrumbSchema, t as JsonLd } from "./schema-N9Odpobz.mjs";
import { n as guides } from "./guides-_VMjKNsJ.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as MapPin, i as Shield, l as Clock, p as ArrowRight, r as Siren } from "../_libs/lucide-react.mjs";
import { i as Button } from "./router-DKiJfZcN.mjs";
import { t as DirectAnswer } from "./direct-answer-BeferYFf.mjs";
import { t as FaqList } from "./faq-list-mmau8CRu.mjs";
import { t as areas } from "./areas-Bd5AIrpc.mjs";
import { t as Estimator } from "./estimator-DZbv0adP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Crb98y1N.js
var import_jsx_runtime = require_jsx_runtime();
function Home() {
	const homeFaqs = faqs.filter((f) => [
		"Cost",
		"Permits",
		"Process",
		"Company"
	].includes(f.topic)).slice(0, 8);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "pb-24 md:pb-0",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(JsonLd, { data: graph([
				breadcrumbSchema([{
					name: "Home",
					path: "/"
				}]),
				howToSchema(),
				faqSchema(homeFaqs)
			]) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative isolate min-h-[88vh] overflow-hidden grain",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/images/hero.jpg",
						alt: "Licensed villa demolition in progress in a Dubai community at golden hour",
						width: 1600,
						height: 900,
						fetchPriority: "high",
						className: "absolute inset-0 size-full object-cover"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-background/55 to-background/25" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-end px-4 pb-28 pt-28 sm:px-6 sm:pb-20",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs uppercase tracking-[0.28em] text-gold",
								children: company.legalName
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mt-4 max-w-4xl text-5xl text-foreground sm:text-7xl lg:text-[5.5rem]",
								children: "Licensed demolition company in Dubai"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 max-w-xl text-base text-foreground/85 sm:text-lg",
								children: "Villa, building, and industrial demolition — permits, controlled takedown, debris gone, plot handed over ready for the next foundation."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 flex flex-col gap-3 sm:flex-row",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									size: "lg",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/contact",
										children: ["Request a site quote", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									size: "lg",
									variant: "outline",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "#estimator",
										children: "Estimate a range"
									})
								})]
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-y border-border bg-card",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto grid max-w-6xl gap-6 px-4 py-6 sm:grid-cols-2 sm:px-6 lg:grid-cols-4",
					children: [
						{
							icon: Shield,
							t: "Licensed in Dubai",
							d: "DM / DDA / Trakhees plots"
						},
						{
							icon: Clock,
							t: "Mon–Sat 08:00–18:00",
							d: "Site hours by permit"
						},
						{
							icon: Siren,
							t: "24/7 emergency",
							d: company.emergency.display
						},
						{
							icon: MapPin,
							t: "Al Mateen, Dubai",
							d: "Work across the emirate"
						}
					].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, { className: "mt-0.5 size-4 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-medium text-foreground",
							children: item.t
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted",
							children: item.d
						})] })]
					}, item.t))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-[0.2em] text-gold",
						children: "Direct answer"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 max-w-3xl text-3xl sm:text-5xl",
						children: "Who is Pure Golden Demolition?"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DirectAnswer, {
						className: "mt-8",
						children: company.description
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 grid gap-8 md:grid-cols-2",
						children: whyUs.map((w) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "border-t border-border pt-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-sans text-lg font-medium text-foreground",
								children: w.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-muted",
								children: w.body
							})]
						}, w.title))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-card py-16 sm:py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl px-4 sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col justify-between gap-4 sm:flex-row sm:items-end",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-[0.2em] text-gold",
							children: "Services"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 text-3xl sm:text-5xl",
							children: "What we demolish"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "outline",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/services",
								children: ["All services ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
							})
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
						children: services.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/services/$slug",
							params: { slug: s.slug },
							className: "group card-hover overflow-hidden border border-border bg-background",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "aspect-[3/2] overflow-hidden",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: s.image,
									alt: s.imageAlt,
									width: 600,
									height: 400,
									loading: "lazy",
									className: "size-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-sans text-base font-medium text-foreground",
									children: s.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-muted",
									children: s.short
								})]
							})]
						}, s.slug))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-[0.2em] text-gold",
						children: "Method"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 max-w-3xl text-3xl sm:text-5xl",
						children: "How demolition works in Dubai"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-2xl text-sm text-muted",
						children: "The excavator is step four. Permits, isolation, and a written method come first — that is how adjoining villas stay standing and how the next building permit stays possible."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3",
						children: processSteps.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "border border-border bg-card p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "display text-3xl text-gold",
									children: s.n
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-3 font-sans text-lg font-medium",
									children: s.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm leading-relaxed text-muted",
									children: s.text
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-xs uppercase tracking-[0.14em] text-faint",
									children: s.duration
								})
							]
						}, s.n))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-card py-16 sm:py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-6xl px-4 sm:px-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Estimator, {})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-3xl sm:text-5xl",
						children: "Areas we cover in Dubai"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-2xl text-sm text-muted",
						children: "Demolition crews work across the emirate. Jurisdiction still depends on the affection plan — JVC is not always DM, and a master-development villa is not always DDA."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-8 flex flex-wrap gap-2",
						children: areas.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "border border-border px-3 py-1.5 text-sm text-muted",
							children: a
						}, a))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-y border-border bg-card py-16 sm:py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl px-4 sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-end justify-between gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-3xl sm:text-5xl",
							children: "Guides for owners"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/guides",
							className: "hidden text-sm text-gold hover:text-gold-bright sm:inline",
							children: "All guides"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 grid gap-4 md:grid-cols-3",
						children: guides.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/guides/$slug",
							params: { slug: g.slug },
							className: "card-hover border border-border bg-background p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs uppercase tracking-[0.16em] text-faint",
									children: [
										g.readMins,
										" min · ",
										g.updated
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-3 font-sans text-lg font-medium leading-snug",
									children: g.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-3 text-sm text-muted",
									children: [g.answer.slice(0, 140), "…"]
								})
							]
						}, g.slug))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-3xl sm:text-5xl",
						children: "Questions owners ask first"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaqList, { items: homeFaqs })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "outline",
						className: "mt-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/faq",
							children: "Full FAQ"
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative isolate overflow-hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/images/crew.jpg",
						alt: "Demolition crew and excavator on a Dubai site",
						width: 1400,
						height: 787,
						loading: "lazy",
						className: "absolute inset-0 size-full object-cover"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-background/80" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mx-auto max-w-6xl px-4 py-20 sm:px-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "max-w-2xl text-4xl sm:text-6xl",
								children: "Ready to take the structure down?"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 max-w-xl text-muted",
								children: "Send the plot location and structure type. We inspect, quote, and tell you which authority must issue the permit before a machine starts."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 flex flex-col gap-3 sm:flex-row",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									size: "lg",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/contact",
										children: "Contact Pure Golden"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									size: "lg",
									variant: "outline",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: `tel:${company.phones[0].e164}`,
										children: company.phones[0].display
									})
								})]
							})
						]
					})
				]
			})
		]
	});
}
//#endregion
export { Home as component };

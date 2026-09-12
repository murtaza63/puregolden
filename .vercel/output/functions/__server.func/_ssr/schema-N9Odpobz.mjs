import { l as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as clsx } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/schema-N9Odpobz.js
var import_jsx_runtime = require_jsx_runtime();
var SITE_URL = "https://puregoldendemolition.com";
var company = {
	legalName: "Pure Golden Wrecking & Demolition Works LLC",
	brand: "Pure Golden Demolition",
	short: "Pure Golden",
	tagline: "Licensed demolition. Controlled takedown. Clean handover.",
	description: "Pure Golden Wrecking & Demolition Works LLC is a licensed demolition contractor in Dubai providing villa demolition, building demolition, industrial demolition, partial and interior demolition, excavation, concrete cutting and breaking, site clearance, and debris removal across Dubai and the UAE.",
	email: "info@puregoldendemolition.com",
	phones: [
		{
			label: "Mobile",
			e164: "+971507485948",
			display: "+971 50 748 5948"
		},
		{
			label: "Mobile",
			e164: "+971505947422",
			display: "+971 50 594 7422"
		},
		{
			label: "Mobile",
			e164: "+971508622954",
			display: "+971 50 862 2954"
		},
		{
			label: "Office",
			e164: "+97145859574",
			display: "+971 4 585 9574"
		}
	],
	emergency: {
		e164: "+971505947422",
		display: "+971 50 594 7422"
	},
	whatsapp: "971507485948",
	address: {
		street: "Office M-02, Al Mateen",
		locality: "Dubai",
		region: "Dubai",
		country: "AE",
		countryName: "United Arab Emirates",
		display: "Office M-02, Al Mateen, Dubai, UAE"
	},
	hours: "Monday–Saturday 08:00–18:00",
	hoursSchema: ["Mo-Sa 08:00-18:00"],
	geo: {
		lat: 25.2048,
		lng: 55.2708
	},
	priceRange: "$$",
	sameAs: [SITE_URL]
};
var nav = [
	{
		to: "/",
		label: "Home"
	},
	{
		to: "/about",
		label: "About"
	},
	{
		to: "/services",
		label: "Services"
	},
	{
		to: "/projects",
		label: "Projects"
	},
	{
		to: "/guides",
		label: "Guides"
	},
	{
		to: "/faq",
		label: "FAQ"
	},
	{
		to: "/contact",
		label: "Contact"
	}
];
var whyUs = [
	{
		title: "Licensed contractor in Dubai",
		body: "Work is planned to Dubai Municipality, DDA, and Trakhees requirements so the permit file, method statement, and site controls match the authority that actually governs your plot."
	},
	{
		title: "Permit and NOC support",
		body: "We help assemble the demolition permit pack: affection plan, DEWA disconnection, telecom NOC, method statement, risk assessment, HSE plan, and neighbour-impact notes."
	},
	{
		title: "Controlled methods",
		body: "Mechanical demolition, selective interior strip-out, concrete cutting, and sequenced takedown — chosen for structure type, access, and adjoining property risk, not a one-size wrecking approach."
	},
	{
		title: "Clean site handover",
		body: "Debris is sorted, hauled, and the plot is levelled so the next contractor can start earthwork or construction without inheriting a dump."
	}
];
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function formatAed(n) {
	return new Intl.NumberFormat("en-AE", {
		style: "currency",
		currency: "AED",
		maximumFractionDigits: 0
	}).format(n);
}
var services = [
	{
		slug: "villa-demolition",
		name: "Villa Demolition",
		short: "Complete or selective villa takedown with permit support and clean plot handover.",
		h1: "Villa Demolition in Dubai",
		title: "Villa Demolition in Dubai | Licensed Contractor | Pure Golden",
		description: "Licensed villa demolition in Dubai: G+1 and G+2 homes, permit and DEWA NOC support, controlled mechanical takedown, debris removal, and a levelled plot ready for rebuild.",
		answer: "Villa demolition in Dubai is the licensed, permitted takedown of a residential villa — usually G+1 or G+2 — including soft strip, structural demolition, debris haulage, and plot levelling. Pure Golden handles the site inspection, quotation, Dubai Municipality or DDA permit file, DEWA disconnection, and controlled demolition through to handover.",
		image: "/images/villa.jpg",
		imageAlt: "Controlled villa demolition in a Dubai residential community",
		bullets: [
			"Full villa demolition and selective strip-out",
			"DM, DDA, or Trakhees permit coordination",
			"Neighbour protection, dust and vibration control",
			"Debris removal and plot levelling"
		],
		body: [
			"Most villa demolition in Dubai is driven by a rebuild: an older G+1 on a valuable plot is taken down so a larger home can be built to current Dubai Building Code. The work is not a weekend wrecking job. It is a permitted construction activity with utility isolation, a method statement, and a duty to adjoining villas that often sit a few metres away.",
			"A typical villa scope starts with a measured survey of built-up area, structure type (blockwork, reinforced concrete, mixed), basement or swimming pool, boundary walls, and access from the community road. Tight streets in Jumeirah, Al Barsha, or older Deira plots change plant selection. Wide plots in Arabian Ranches or Dubai Hills allow larger excavators and a faster programme.",
			"Before any structural work, electricity and water are disconnected by DEWA and an NOC is issued. Telecom services are cleared. The demolition permit is then issued by the authority named on the affection plan. We do not start breaking structure until those documents are in place.",
			"On site, interior fixtures, joinery, and non-structural partitions come out first. Then the roof and upper floor are taken in sequence, followed by ground-floor slabs, foundations as specified, and remaining hardstanding. Pools and septic tanks are broken out or filled as the client’s next consultant requires. The plot is left graded, not as a debris field."
		],
		faqs: [{
			q: "How long does villa demolition take in Dubai?",
			a: "A standard G+1 villa of 350–500 m² typically takes 7–18 working days on site after permits, depending on access, basements, and pools. Permit and NOC lead time is usually longer than the demolition itself — often 10–25 working days."
		}, {
			q: "Do I need a demolition permit to knock down a villa in Dubai?",
			a: "Yes. Villa demolition in Dubai requires a demolition permit from Dubai Municipality, DDA, or Trakhees, plus DEWA disconnection and telecom NOCs. Starting without a permit risks stop-work orders and fines."
		}]
	},
	{
		slug: "building-demolition",
		name: "Building Demolition",
		short: "Structural demolition of commercial and residential buildings with sequenced methods.",
		h1: "Building Demolition in Dubai",
		title: "Building Demolition Contractor in Dubai | Pure Golden Demolition",
		description: "Building demolition in Dubai for low-rise commercial and residential structures: method statements, staged takedown, public protection, and debris management.",
		answer: "Building demolition in Dubai is the licensed structural takedown of commercial or residential buildings using a sequenced method statement, public protection, and approved waste routes. Pure Golden plans access, adjoining-structure risk, and plant so the building comes down in a controlled order rather than an uncontrolled collapse.",
		image: "/images/excavator.jpg",
		imageAlt: "Heavy excavator prepared for building demolition in Dubai",
		bullets: [
			"Low-rise commercial and residential buildings",
			"Staged structural demolition",
			"Public and neighbour protection",
			"Coordination with the project consultant"
		],
		body: [
			"Building demolition is a different risk profile from a standalone villa. Occupied neighbours, street frontage, podium slabs, and mixed-use ground floors all change the sequence. The method statement has to show how floors come down, where arisings are stockpiled, and how the public is separated from the work.",
			"We demolish warehouses converted to commercial use, older walk-up buildings, and low-rise office or retail structures where mechanical demolition is appropriate. High-rise implosion is not our offering; if a project needs specialist high-rise engineered demolition we will say so plainly rather than oversell.",
			"A building job usually includes a pre-demolition survey for services, a check for hazardous materials, temporary works where slabs or party elements must stay, and a haulage plan that does not choke a Business Bay or Deira street at peak hours."
		],
		faqs: [{
			q: "Can you demolish a commercial building in Dubai?",
			a: "Yes. Pure Golden carries out licensed building demolition in Dubai for low-rise commercial and residential structures, including method statements, public protection, and debris removal. Scope is confirmed after a site inspection."
		}]
	},
	{
		slug: "industrial-demolition",
		name: "Industrial Demolition",
		short: "Warehouses, workshops, and industrial facilities in DIP, Al Quoz, and Jebel Ali.",
		h1: "Industrial Demolition in Dubai",
		title: "Industrial Demolition Dubai | Warehouses & Facilities | Pure Golden",
		description: "Industrial demolition in Dubai for warehouses, workshops, and facilities in Al Quoz, DIP, and Jebel Ali — steel, concrete, and plant removal with site clearance.",
		answer: "Industrial demolition in Dubai is the takedown of warehouses, workshops, factories, and yards — typically steel portal frames, precast, or heavy RCC — including plant isolation, slab breaking, and yard clearance. Pure Golden works in industrial districts such as Al Quoz, Dubai Investment Park, and Jebel Ali.",
		image: "/images/industrial.jpg",
		imageAlt: "Industrial warehouse demolition in a Dubai industrial district",
		bullets: [
			"Warehouses and steel-frame sheds",
			"Workshops and light industrial units",
			"Yard, slab, and hardstanding removal",
			"Coordination with facility shutdowns"
		],
		body: ["Industrial plots often look simple from the road and turn out not to be: mezzanines, pit slabs, buried services, leftover chemicals, and tenants still occupying a neighbouring bay. The first job is isolation — power, water, compressed air, and any process lines — then a soft strip of racking, offices, and non-structural fit-out.", "Steel frames come down in planned lifts. Concrete slabs and ground beams are broken and loaded. If the next use is a new warehouse, we can leave specified pavement or reduce to formation as the civil engineer directs."],
		faqs: [{
			q: "Do you demolish warehouses in Al Quoz and DIP?",
			a: "Yes. Industrial demolition of warehouses and workshops in Al Quoz, Dubai Investment Park, Jebel Ali, and similar districts is a core Pure Golden service, including steel frames, slabs, and yard clearance."
		}]
	},
	{
		slug: "partial-demolition",
		name: "Partial & Selective Demolition",
		short: "Remove only what the renovation needs — walls, slabs, and extensions kept precise.",
		h1: "Partial and Selective Demolition in Dubai",
		title: "Partial & Selective Demolition Dubai | Pure Golden",
		description: "Selective demolition in Dubai for renovations: remove specified walls, slabs, and extensions while protecting the structure that stays.",
		answer: "Partial demolition in Dubai is the controlled removal of specified parts of a building — an extension, a floor slab, load-bearing walls identified by the engineer — while the rest of the structure remains in service. Pure Golden uses saw-cutting, breakers, and hand demolition so the retained structure is not damaged.",
		image: "/images/interior.jpg",
		imageAlt: "Selective interior demolition inside a Dubai villa",
		bullets: [
			"Engineer-specified structural openings",
			"Extension and annex removal",
			"Floor and roof slab cut-outs",
			"Protection of retained finishes"
		],
		body: ["Selective work is slower and more skilled than a full takedown. The consultant’s drawings, not a site guess, define what comes out. We mark, isolate, and often diamond-cut before breaking so vibration does not migrate into a villa that the family still occupies next door — or into a retail unit that must trade tomorrow.", "This is the right method for villa additions being replaced, hotel or office floor plates being opened, and mixed projects where only a wing is coming down."],
		faqs: [{
			q: "Is partial demolition cheaper than full demolition?",
			a: "Not always. Partial demolition needs more protection, slower cutting, and more labour per cubic metre. It is chosen to save a structure you want to keep, not because it is automatically cheaper than a full villa takedown."
		}]
	},
	{
		slug: "interior-demolition",
		name: "Interior Demolition",
		short: "Soft strip of interiors for fit-out: partitions, finishes, MEP, and fixtures.",
		h1: "Interior Demolition and Soft Strip in Dubai",
		title: "Interior Demolition Dubai | Soft Strip & Fit-Out Prep | Pure Golden",
		description: "Interior demolition in Dubai: soft strip of partitions, finishes, ceilings, and fixtures while protecting the building shell for the next fit-out.",
		answer: "Interior demolition — also called soft strip — removes non-structural interiors so a new fit-out can start. Pure Golden strips partitions, ceilings, flooring, joinery, and redundant MEP in villas, offices, and retail units across Dubai, bagging waste and protecting the shell.",
		image: "/images/interior.jpg",
		imageAlt: "Interior soft-strip demolition with exposed concrete and empty window frames",
		bullets: [
			"Office and retail strip-out",
			"Villa interior gutting for renovation",
			"MEP removal and making-good of penetrations",
			"Occupied-building working methods"
		],
		body: ["Interior demolition is often done in buildings that stay live: a floor of an office tower, a shop in a mall, a villa wing. Dust, noise hours, hoist bookings, and fire-compartment integrity matter as much as the skip.", "We isolate services with the building operator, protect floors and lifts, and remove waste on an agreed route. Structural members are not cut unless the engineer has specified it — that work moves into partial demolition."],
		faqs: [{
			q: "What is included in a soft strip?",
			a: "A typical Dubai soft strip includes partitions, ceilings, floor finishes, joinery, sanitaryware, and redundant small-power and lighting. Structural concrete, cores, and landlord services stay unless the scope says otherwise."
		}]
	},
	{
		slug: "excavation-earthwork",
		name: "Excavation & Earthwork",
		short: "Excavation, grading, backfill, and foundation levelling after demolition.",
		h1: "Excavation and Earthwork Services in Dubai",
		title: "Excavation & Earthwork Dubai | Foundation Levelling | Pure Golden",
		description: "Excavation, grading, backfilling, and foundation levelling in Dubai, coordinated with demolition so the plot is ready for the next foundation.",
		answer: "Excavation and earthwork in Dubai prepares a demolished plot for new foundations: breaking out old footings, excavating to formation, grading, and backfilling. Pure Golden coordinates this with demolition so you do not hire two contractors to move the same ground twice.",
		image: "/images/cleared.jpg",
		imageAlt: "Levelled plot in Dubai after demolition, ready for new construction",
		bullets: [
			"Foundation and footing removal",
			"Bulk excavation to formation",
			"Grading and backfilling",
			"Pool, tank, and pit break-out"
		],
		body: ["After a villa or warehouse comes down, old footings, pile caps, and buried tanks are often still in the ground. Leaving them for the next earthworks contractor creates delay and claims. We can remove specified foundations and leave the site at the level the structural engineer has asked for.", "Sandy Dubai ground, high water table in some coastal plots, and shoring around neighbours all change the method. We do not guess a formation level — we work to the drawings."],
		faqs: [{
			q: "Can demolition and excavation be one contract?",
			a: "Yes. Combining demolition, foundation removal, and site grading in one Pure Golden contract usually saves programme time and avoids two sets of mobilisation on the same Dubai plot."
		}]
	},
	{
		slug: "concrete-cutting",
		name: "Concrete Cutting & Breaking",
		short: "Precision cutting, drilling, and breaking of reinforced concrete.",
		h1: "Concrete Cutting and Breaking in Dubai",
		title: "Concrete Cutting & Breaking Dubai | Pure Golden Demolition",
		description: "Concrete cutting, drilling, and hydraulic breaking in Dubai for demolition, openings, and controlled removal of reinforced slabs and walls.",
		answer: "Concrete cutting and breaking in Dubai is the precision removal of reinforced concrete using wall saws, floor saws, core drills, and hydraulic breakers. Pure Golden uses it for openings, slab removal, and demolition where vibration on adjoining structure must stay low.",
		image: "/images/concrete.jpg",
		imageAlt: "Hydraulic breaker removing reinforced concrete on a demolition site",
		bullets: [
			"Wall and floor sawing",
			"Core drilling",
			"Hydraulic breaking of RCC",
			"Low-vibration methods next to occupied buildings"
		],
		body: ["Not every concrete element should be smashed. A sawn opening in a slab, a doorway through a shear wall (with engineer approval), or a staircase removal is a cutting job. Breaking is used where the element is coming out entirely and vibration is acceptable.", "We match the tool to the reinforcement and to the neighbour. A breaker that is fine in an empty industrial yard is the wrong choice against a party wall in Jumeirah."],
		faqs: [{
			q: "Do you cut concrete without demolishing the whole building?",
			a: "Yes. Concrete cutting and core drilling are used for openings, stair removals, and selective demolition where only specified reinforced concrete is coming out."
		}]
	},
	{
		slug: "site-clearance",
		name: "Site Clearance & Debris Removal",
		short: "Haulage, recycling, and a plot left ready for the next contractor.",
		h1: "Site Clearance and Debris Removal in Dubai",
		title: "Site Clearance & Debris Removal Dubai | Pure Golden",
		description: "Site clearance and debris removal in Dubai after demolition: sorting, haulage to approved facilities, and a clean, levelled plot.",
		answer: "Site clearance in Dubai is the removal of demolition debris, remaining structures, vegetation, and obstacles so a plot can be redeveloped. Pure Golden loads, hauls, and disposes of arisings through approved routes and leaves the site graded.",
		image: "/images/cleared.jpg",
		imageAlt: "Cleared and levelled demolition plot in Dubai",
		bullets: [
			"Demolition debris haulage",
			"Sorting of concrete, steel, and mixed waste",
			"Vegetation and obstacle removal",
			"Handover-ready levelling"
		],
		body: ["Debris is where demolition projects quietly fail: skips overflow, illegal dumping creates liability, and the next contractor refuses to start. We treat haulage as part of the demolition method, not an afterthought.", "Concrete can often be crushed or sent for recycling. Steel is segregated. Mixed waste goes to approved facilities. Clients who need waste documentation for consultant or authority files should ask at quotation stage so it is built into the job."],
		faqs: [{
			q: "Do you recycle demolition waste in Dubai?",
			a: "Where practical, concrete and steel are separated from mixed waste and sent through approved recycling or recovery routes. The exact split depends on the structure and the receiving facilities available for that job."
		}]
	}
];
function getService(slug) {
	return services.find((s) => s.slug === slug);
}
function JsonLd({ data }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", {
		type: "application/ld+json",
		dangerouslySetInnerHTML: { __html: JSON.stringify(data) }
	});
}
var faqs = [
	{
		topic: "Cost",
		q: "How much does villa demolition cost in Dubai?",
		a: "Indicative 2026 market ranges for standard villa demolition in Dubai are often about AED 25–80 per square metre of built-up area, or roughly AED 20,000–90,000 for a typical G+1, before abnormal items. Access, basements, swimming pools, asbestos, haulage distance, and night-work restrictions move the number. Pure Golden quotes after a site inspection — not from photos alone."
	},
	{
		topic: "Cost",
		q: "What is included in a demolition quotation?",
		a: "A complete quotation should state: structure to be demolished, whether foundations and boundary walls are included, debris disposal, permit support, programme, working hours, exclusions (asbestos, DEWA fees, consultant fees), and validity. If a quote only says “demolition” with one lump sum and no exclusions, assume extras will appear."
	},
	{
		topic: "Permits",
		q: "Do I need a demolition permit in Dubai?",
		a: "Yes. Demolition of a villa, building, or industrial structure in Dubai requires a permit from the authority on the affection plan — usually Dubai Municipality, Dubai Development Authority, or Trakhees — plus DEWA disconnection and telecom NOCs. Work without a permit can be stopped and fined."
	},
	{
		topic: "Permits",
		q: "How long does a demolition permit take in Dubai?",
		a: "Once the file is complete, DDA demolition permits are commonly targeted around 5 working days. Dubai Municipality timelines vary with completeness and plot type. The longer path is usually NOCs: DEWA disconnection for a villa is often 10–18 working days, longer for multi-meter commercial sites. Budget 2–5 weeks for permits and NOCs together."
	},
	{
		topic: "Permits",
		q: "Who issues the demolition permit — DM or DDA?",
		a: "The affection plan of the plot names the authority. Most established villa communities fall under Dubai Municipality. Selected master developments fall under Dubai Development Authority. Some freehold zones use Trakhees. Filing with the wrong portal wastes weeks. Pure Golden checks jurisdiction before we prepare the file."
	},
	{
		topic: "Permits",
		q: "What documents are needed for a Dubai demolition permit?",
		a: "Typical requirements include the application, title deed, owner ID, affection plan, site photographs, method statement, risk assessment, HSE plan, neighbour-impact note, hoarding layout, and NOCs from DEWA and the telecom provider. Controlled blasting — which we do not use for villas — would add Civil Defence, Police, and RTA NOCs."
	},
	{
		topic: "Permits",
		q: "What is a DEWA disconnection NOC and why does demolition need it?",
		a: "DEWA must disconnect electricity and water and issue a No Objection Certificate before the demolition permit is released. The NOC confirms meters are removed and services are capped so the building is safe to take down. Applying without a recent bill, title deed, and contractor licence delays the site visit."
	},
	{
		topic: "Process",
		q: "How long does demolition take after the permit is issued?",
		a: "On-site villa demolition is often 7–18 working days. A small warehouse may be similar; a larger building or a tight-access plot takes longer. Permit time is usually the critical path, not the excavator."
	},
	{
		topic: "Process",
		q: "What are the steps of villa demolition in Dubai?",
		a: "The sequence is: site inspection and quote, permit and NOC file, DEWA and telecom disconnection, hoarding and isolation, interior soft strip, sequenced structural demolition, debris removal, then levelling and handover. Skipping isolation or permits is how projects get shut down."
	},
	{
		topic: "Safety",
		q: "Will demolition damage my neighbour’s villa?",
		a: "Adjoining villas in Dubai often sit close. Risk is managed with a method statement, sequenced takedown, vibration-aware plant, protection to shared walls and boundary conditions, and dust control. A pre-start photo record of neighbouring elevations is good practice. There is no zero-risk demolition next to an occupied home — there is a controlled one."
	},
	{
		topic: "Safety",
		q: "Do you handle asbestos in Dubai demolition?",
		a: "Older villas and industrial buildings can contain asbestos in roof sheets, insulation, tiles, or cement products. If suspected, it must be identified and removed by competent, licensed handling — not mixed into general debris. Tell us at inspection if the building is pre-2000s or if you already have a survey."
	},
	{
		topic: "Safety",
		q: "What working hours apply to demolition in Dubai communities?",
		a: "Community and authority controls often restrict noisy work, especially near occupied villas. Night work is not automatic. We plan programmes around the rules that apply to that plot rather than assuming 24-hour breaking."
	},
	{
		topic: "Company",
		q: "Who is the best demolition company in Dubai for a villa rebuild?",
		a: "The right contractor is licensed, will attend site before quoting, will name the permit authority, will state what happens to foundations and debris, and will give a method — not only a price. Pure Golden Wrecking & Demolition Works LLC is a licensed demolition contractor in Dubai focused on villa, building, industrial, and selective demolition with permit support."
	},
	{
		topic: "Company",
		q: "Is Pure Golden a licensed demolition contractor in Dubai?",
		a: "Yes. Pure Golden Wrecking & Demolition Works LLC is a licensed demolition contractor based at Office M-02, Al Mateen, Dubai, UAE, providing demolition and earthwork services across Dubai."
	},
	{
		topic: "Company",
		q: "Which areas of Dubai do you cover?",
		a: "We work across Dubai, including Jumeirah, Umm Suqeim, Al Barsha, Al Quoz, Dubai Marina, Palm Jumeirah, Downtown, Business Bay, Dubai Hills, Arabian Ranches, JVC, Mirdif, DIP, Jebel Ali, Deira, and Dubai South. Projects elsewhere in the UAE are reviewed case by case."
	},
	{
		topic: "Practical",
		q: "Do I need to empty the villa before demolition?",
		a: "Yes. Furniture, appliances, and personal contents should be removed before we start. Anything left is treated as debris. Utility accounts should be prepared for DEWA disconnection so the NOC is not delayed by unpaid bills."
	},
	{
		topic: "Practical",
		q: "Are boundary walls demolished with the villa?",
		a: "Only if the quotation says so. Many clients keep boundary walls for site security and neighbour relations. Confirm walls, gates, and shared fences in writing; they are a common source of variation."
	},
	{
		topic: "Practical",
		q: "Can you demolish a villa with a swimming pool or basement?",
		a: "Yes. Pools, tanks, and basements add break-out, dewatering, and backfill. They must be on the quotation. A pool left in the ground is not a demolished plot."
	},
	{
		topic: "Practical",
		q: "Do you work 24/7 for emergency demolition?",
		a: "Emergency call-out is available 24/7 on +971 50 594 7422 for unsafe structures and urgent cases. Routine villa demolition still follows permit and community hour rules. Emergency does not skip isolation of live services."
	},
	{
		topic: "Practical",
		q: "How do I get a demolition quote in Dubai?",
		a: "Call +971 50 748 5948, WhatsApp the same number, email info@puregoldendemolition.com, or use the quote form. Send the plot location, structure type, approximate built-up area, and whether foundations and walls are included. We confirm on a site visit."
	}
];
var faqTopics = [...new Set(faqs.map((f) => f.topic))];
var processSteps = [
	{
		n: "01",
		name: "Site inspection and quotation",
		text: "An engineer or senior supervisor visits the plot, records structure type, built-up area, access, neighbouring setbacks, utilities, and demolition method. You receive a written quotation with scope, exclusions, and an indicative programme.",
		duration: "1–3 working days"
	},
	{
		n: "02",
		name: "Permit file and NOCs",
		text: "We prepare the method statement, risk assessment, HSE plan, and photographs, then coordinate DEWA disconnection, telecom NOC, and the demolition permit with Dubai Municipality, DDA, or Trakhees — whichever authority is shown on the affection plan.",
		duration: "typically 10–25 working days"
	},
	{
		n: "03",
		name: "Site establishment",
		text: "Hoarding, pedestrian protection, utility isolation confirmation, plant mobilisation, and a pre-start briefing. No structural work begins until the permit is in hand and services are confirmed dead.",
		duration: "1–2 days"
	},
	{
		n: "04",
		name: "Controlled demolition",
		text: "Soft strip first, then sequenced structural takedown using excavators, breakers, and concrete cutting as required. Dust, vibration, and working hours are managed to protect adjoining property and comply with local controls.",
		duration: "3–20 days depending on size"
	},
	{
		n: "05",
		name: "Debris removal and recycling",
		text: "Concrete, steel, timber, and mixed waste are separated where practical, hauled to approved facilities, and the plot is cleared of demolition arisings.",
		duration: "overlaps with takedown"
	},
	{
		n: "06",
		name: "Levelling and handover",
		text: "The site is graded, remaining pits made safe, and a clean plot is handed over for earthwork or new construction. You receive completion photos and waste documentation on request.",
		duration: "1–3 days"
	}
];
var orgId = `${SITE_URL}/#organization`;
var siteId = `${SITE_URL}/#website`;
function organizationSchema() {
	return {
		"@type": [
			"Organization",
			"LocalBusiness",
			"HomeAndConstructionBusiness"
		],
		"@id": orgId,
		name: company.legalName,
		alternateName: [company.brand, company.short],
		url: SITE_URL,
		email: company.email,
		telephone: company.phones[0].e164,
		image: `${SITE_URL}/images/hero.jpg`,
		logo: `${SITE_URL}/favicon.svg`,
		priceRange: company.priceRange,
		address: {
			"@type": "PostalAddress",
			streetAddress: company.address.street,
			addressLocality: company.address.locality,
			addressRegion: company.address.region,
			addressCountry: company.address.country
		},
		geo: {
			"@type": "GeoCoordinates",
			latitude: company.geo.lat,
			longitude: company.geo.lng
		},
		openingHoursSpecification: {
			"@type": "OpeningHoursSpecification",
			dayOfWeek: [
				"Monday",
				"Tuesday",
				"Wednesday",
				"Thursday",
				"Friday",
				"Saturday"
			],
			opens: "08:00",
			closes: "18:00"
		},
		contactPoint: [{
			"@type": "ContactPoint",
			telephone: company.phones[0].e164,
			contactType: "sales",
			areaServed: "AE",
			availableLanguage: ["English", "Arabic"]
		}, {
			"@type": "ContactPoint",
			telephone: company.emergency.e164,
			contactType: "emergency",
			hoursAvailable: {
				"@type": "OpeningHoursSpecification",
				dayOfWeek: [
					"Monday",
					"Tuesday",
					"Wednesday",
					"Thursday",
					"Friday",
					"Saturday",
					"Sunday"
				],
				opens: "00:00",
				closes: "23:59"
			}
		}],
		areaServed: {
			"@type": "City",
			name: "Dubai",
			containedInPlace: {
				"@type": "Country",
				name: "United Arab Emirates"
			}
		},
		knowsAbout: services.map((s) => s.name),
		hasOfferCatalog: {
			"@type": "OfferCatalog",
			name: "Demolition services in Dubai",
			itemListElement: services.map((s) => ({
				"@type": "Offer",
				itemOffered: {
					"@type": "Service",
					name: s.name,
					url: `${SITE_URL}/services/${s.slug}`
				}
			}))
		}
	};
}
function websiteSchema() {
	return {
		"@type": "WebSite",
		"@id": siteId,
		url: SITE_URL,
		name: company.brand,
		publisher: { "@id": orgId },
		inLanguage: "en-AE",
		potentialAction: {
			"@type": "SearchAction",
			target: `${SITE_URL}/faq?q={search_term_string}`,
			"query-input": "required name=search_term_string"
		}
	};
}
function faqSchema(items = faqs) {
	return {
		"@type": "FAQPage",
		mainEntity: items.map((item) => ({
			"@type": "Question",
			name: item.q,
			acceptedAnswer: {
				"@type": "Answer",
				text: item.a
			}
		}))
	};
}
function howToSchema() {
	return {
		"@type": "HowTo",
		name: "How villa demolition works in Dubai",
		description: "The six-step process Pure Golden uses for licensed villa and building demolition in Dubai, from inspection to clean handover.",
		totalTime: "P35D",
		step: processSteps.map((s, i) => ({
			"@type": "HowToStep",
			position: i + 1,
			name: s.name,
			text: s.text
		}))
	};
}
function breadcrumbSchema(items) {
	return {
		"@type": "BreadcrumbList",
		itemListElement: items.map((item, i) => ({
			"@type": "ListItem",
			position: i + 1,
			name: item.name,
			item: `${SITE_URL}${item.path}`
		}))
	};
}
function serviceSchema(service) {
	return {
		"@type": "Service",
		name: service.name,
		serviceType: service.name,
		description: service.answer,
		url: `${SITE_URL}/services/${service.slug}`,
		provider: { "@id": orgId },
		areaServed: {
			"@type": "City",
			name: "Dubai"
		},
		image: `${SITE_URL}${service.image}`
	};
}
function articleSchema(guide) {
	return {
		"@type": "Article",
		headline: guide.h1,
		description: guide.description,
		dateModified: "2026-09-01",
		author: { "@id": orgId },
		publisher: { "@id": orgId },
		mainEntityOfPage: `${SITE_URL}/guides/${guide.slug}`,
		speakable: {
			"@type": "SpeakableSpecification",
			cssSelector: [
				".direct-answer",
				"h1",
				"h2"
			]
		}
	};
}
function graph(nodes) {
	return {
		"@context": "https://schema.org",
		"@graph": [
			organizationSchema(),
			websiteSchema(),
			...nodes
		]
	};
}
//#endregion
export { whyUs as _, company as a, faqs as c, graph as d, howToSchema as f, services as g, serviceSchema as h, cn as i, formatAed as l, processSteps as m, articleSchema as n, faqSchema as o, nav as p, breadcrumbSchema as r, faqTopics as s, JsonLd as t, getService as u };

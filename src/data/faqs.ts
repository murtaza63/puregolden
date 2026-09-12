export type Faq = { q: string; a: string; topic: string };

export const faqs: Faq[] = [
  {
    topic: "Cost",
    q: "How much does villa demolition cost in Dubai?",
    a: "Indicative 2026 market ranges for standard villa demolition in Dubai are often about AED 25–80 per square metre of built-up area, or roughly AED 20,000–90,000 for a typical G+1, before abnormal items. Access, basements, swimming pools, asbestos, haulage distance, and night-work restrictions move the number. Pure Golden quotes after a site inspection — not from photos alone.",
  },
  {
    topic: "Cost",
    q: "What is included in a demolition quotation?",
    a: "A complete quotation should state: structure to be demolished, whether foundations and boundary walls are included, debris disposal, permit support, programme, working hours, exclusions (asbestos, DEWA fees, consultant fees), and validity. If a quote only says “demolition” with one lump sum and no exclusions, assume extras will appear.",
  },
  {
    topic: "Permits",
    q: "Do I need a demolition permit in Dubai?",
    a: "Yes. Demolition of a villa, building, or industrial structure in Dubai requires a permit from the authority on the affection plan — usually Dubai Municipality, Dubai Development Authority, or Trakhees — plus DEWA disconnection and telecom NOCs. Work without a permit can be stopped and fined.",
  },
  {
    topic: "Permits",
    q: "How long does a demolition permit take in Dubai?",
    a: "Once the file is complete, DDA demolition permits are commonly targeted around 5 working days. Dubai Municipality timelines vary with completeness and plot type. The longer path is usually NOCs: DEWA disconnection for a villa is often 10–18 working days, longer for multi-meter commercial sites. Budget 2–5 weeks for permits and NOCs together.",
  },
  {
    topic: "Permits",
    q: "Who issues the demolition permit — DM or DDA?",
    a: "The affection plan of the plot names the authority. Most established villa communities fall under Dubai Municipality. Selected master developments fall under Dubai Development Authority. Some freehold zones use Trakhees. Filing with the wrong portal wastes weeks. Pure Golden checks jurisdiction before we prepare the file.",
  },
  {
    topic: "Permits",
    q: "What documents are needed for a Dubai demolition permit?",
    a: "Typical requirements include the application, title deed, owner ID, affection plan, site photographs, method statement, risk assessment, HSE plan, neighbour-impact note, hoarding layout, and NOCs from DEWA and the telecom provider. Controlled blasting — which we do not use for villas — would add Civil Defence, Police, and RTA NOCs.",
  },
  {
    topic: "Permits",
    q: "What is a DEWA disconnection NOC and why does demolition need it?",
    a: "DEWA must disconnect electricity and water and issue a No Objection Certificate before the demolition permit is released. The NOC confirms meters are removed and services are capped so the building is safe to take down. Applying without a recent bill, title deed, and contractor licence delays the site visit.",
  },
  {
    topic: "Process",
    q: "How long does demolition take after the permit is issued?",
    a: "On-site villa demolition is often 7–18 working days. A small warehouse may be similar; a larger building or a tight-access plot takes longer. Permit time is usually the critical path, not the excavator.",
  },
  {
    topic: "Process",
    q: "What are the steps of villa demolition in Dubai?",
    a: "The sequence is: site inspection and quote, permit and NOC file, DEWA and telecom disconnection, hoarding and isolation, interior soft strip, sequenced structural demolition, debris removal, then levelling and handover. Skipping isolation or permits is how projects get shut down.",
  },
  {
    topic: "Safety",
    q: "Will demolition damage my neighbour’s villa?",
    a: "Adjoining villas in Dubai often sit close. Risk is managed with a method statement, sequenced takedown, vibration-aware plant, protection to shared walls and boundary conditions, and dust control. A pre-start photo record of neighbouring elevations is good practice. There is no zero-risk demolition next to an occupied home — there is a controlled one.",
  },
  {
    topic: "Safety",
    q: "Do you handle asbestos in Dubai demolition?",
    a: "Older villas and industrial buildings can contain asbestos in roof sheets, insulation, tiles, or cement products. If suspected, it must be identified and removed by competent, licensed handling — not mixed into general debris. Tell us at inspection if the building is pre-2000s or if you already have a survey.",
  },
  {
    topic: "Safety",
    q: "What working hours apply to demolition in Dubai communities?",
    a: "Community and authority controls often restrict noisy work, especially near occupied villas. Night work is not automatic. We plan programmes around the rules that apply to that plot rather than assuming 24-hour breaking.",
  },
  {
    topic: "Company",
    q: "Who is the best demolition company in Dubai for a villa rebuild?",
    a: "The right contractor is licensed, will attend site before quoting, will name the permit authority, will state what happens to foundations and debris, and will give a method — not only a price. Pure Golden Wrecking & Demolition Works LLC is a licensed demolition contractor in Dubai focused on villa, building, industrial, and selective demolition with permit support.",
  },
  {
    topic: "Company",
    q: "Is Pure Golden a licensed demolition contractor in Dubai?",
    a: "Yes. Pure Golden Wrecking & Demolition Works LLC is a licensed demolition contractor based at Office M-02, Al Mateen, Dubai, UAE, providing demolition and earthwork services across Dubai.",
  },
  {
    topic: "Company",
    q: "Which areas of Dubai do you cover?",
    a: "We work across Dubai, including Jumeirah, Umm Suqeim, Al Barsha, Al Quoz, Dubai Marina, Palm Jumeirah, Downtown, Business Bay, Dubai Hills, Arabian Ranches, JVC, Mirdif, DIP, Jebel Ali, Deira, and Dubai South. Projects elsewhere in the UAE are reviewed case by case.",
  },
  {
    topic: "Practical",
    q: "Do I need to empty the villa before demolition?",
    a: "Yes. Furniture, appliances, and personal contents should be removed before we start. Anything left is treated as debris. Utility accounts should be prepared for DEWA disconnection so the NOC is not delayed by unpaid bills.",
  },
  {
    topic: "Practical",
    q: "Are boundary walls demolished with the villa?",
    a: "Only if the quotation says so. Many clients keep boundary walls for site security and neighbour relations. Confirm walls, gates, and shared fences in writing; they are a common source of variation.",
  },
  {
    topic: "Practical",
    q: "Can you demolish a villa with a swimming pool or basement?",
    a: "Yes. Pools, tanks, and basements add break-out, dewatering, and backfill. They must be on the quotation. A pool left in the ground is not a demolished plot.",
  },
  {
    topic: "Practical",
    q: "Do you work 24/7 for emergency demolition?",
    a: "Emergency call-out is available 24/7 on +971 50 594 7422 for unsafe structures and urgent cases. Routine villa demolition still follows permit and community hour rules. Emergency does not skip isolation of live services.",
  },
  {
    topic: "Practical",
    q: "How do I get a demolition quote in Dubai?",
    a: "Call +971 50 748 5948, WhatsApp the same number, email info@puregoldendemolition.com, or use the quote form. Send the plot location, structure type, approximate built-up area, and whether foundations and walls are included. We confirm on a site visit.",
  },
];

export const faqTopics = [...new Set(faqs.map((f) => f.topic))];

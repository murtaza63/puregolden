export type Service = {
  slug: string;
  name: string;
  short: string;
  h1: string;
  title: string;
  description: string;
  answer: string;
  image: string;
  imageAlt: string;
  bullets: string[];
  body: string[];
  faqs: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "villa-demolition",
    name: "Villa Demolition",
    short: "Complete or selective villa takedown with permit support and clean plot handover.",
    h1: "Villa Demolition in Dubai",
    title: "Villa Demolition in Dubai | Licensed Contractor | Pure Golden",
    description:
      "Licensed villa demolition in Dubai: G+1 and G+2 homes, permit and DEWA NOC support, controlled mechanical takedown, debris removal, and a levelled plot ready for rebuild.",
    answer:
      "Villa demolition in Dubai is the licensed, permitted takedown of a residential villa — usually G+1 or G+2 — including soft strip, structural demolition, debris haulage, and plot levelling. Pure Golden handles the site inspection, quotation, Dubai Municipality or DDA permit file, DEWA disconnection, and controlled demolition through to handover.",
    image: "/images/villa.jpg",
    imageAlt: "Controlled villa demolition in a Dubai residential community",
    bullets: [
      "Full villa demolition and selective strip-out",
      "DM, DDA, or Trakhees permit coordination",
      "Neighbour protection, dust and vibration control",
      "Debris removal and plot levelling",
    ],
    body: [
      "Most villa demolition in Dubai is driven by a rebuild: an older G+1 on a valuable plot is taken down so a larger home can be built to current Dubai Building Code. The work is not a weekend wrecking job. It is a permitted construction activity with utility isolation, a method statement, and a duty to adjoining villas that often sit a few metres away.",
      "A typical villa scope starts with a measured survey of built-up area, structure type (blockwork, reinforced concrete, mixed), basement or swimming pool, boundary walls, and access from the community road. Tight streets in Jumeirah, Al Barsha, or older Deira plots change plant selection. Wide plots in Arabian Ranches or Dubai Hills allow larger excavators and a faster programme.",
      "Before any structural work, electricity and water are disconnected by DEWA and an NOC is issued. Telecom services are cleared. The demolition permit is then issued by the authority named on the affection plan. We do not start breaking structure until those documents are in place.",
      "On site, interior fixtures, joinery, and non-structural partitions come out first. Then the roof and upper floor are taken in sequence, followed by ground-floor slabs, foundations as specified, and remaining hardstanding. Pools and septic tanks are broken out or filled as the client’s next consultant requires. The plot is left graded, not as a debris field.",
    ],
    faqs: [
      {
        q: "How long does villa demolition take in Dubai?",
        a: "A standard G+1 villa of 350–500 m² typically takes 7–18 working days on site after permits, depending on access, basements, and pools. Permit and NOC lead time is usually longer than the demolition itself — often 10–25 working days.",
      },
      {
        q: "Do I need a demolition permit to knock down a villa in Dubai?",
        a: "Yes. Villa demolition in Dubai requires a demolition permit from Dubai Municipality, DDA, or Trakhees, plus DEWA disconnection and telecom NOCs. Starting without a permit risks stop-work orders and fines.",
      },
    ],
  },
  {
    slug: "building-demolition",
    name: "Building Demolition",
    short: "Structural demolition of commercial and residential buildings with sequenced methods.",
    h1: "Building Demolition in Dubai",
    title: "Building Demolition Contractor in Dubai | Pure Golden Demolition",
    description:
      "Building demolition in Dubai for low-rise commercial and residential structures: method statements, staged takedown, public protection, and debris management.",
    answer:
      "Building demolition in Dubai is the licensed structural takedown of commercial or residential buildings using a sequenced method statement, public protection, and approved waste routes. Pure Golden plans access, adjoining-structure risk, and plant so the building comes down in a controlled order rather than an uncontrolled collapse.",
    image: "/images/excavator.jpg",
    imageAlt: "Heavy excavator prepared for building demolition in Dubai",
    bullets: [
      "Low-rise commercial and residential buildings",
      "Staged structural demolition",
      "Public and neighbour protection",
      "Coordination with the project consultant",
    ],
    body: [
      "Building demolition is a different risk profile from a standalone villa. Occupied neighbours, street frontage, podium slabs, and mixed-use ground floors all change the sequence. The method statement has to show how floors come down, where arisings are stockpiled, and how the public is separated from the work.",
      "We demolish warehouses converted to commercial use, older walk-up buildings, and low-rise office or retail structures where mechanical demolition is appropriate. High-rise implosion is not our offering; if a project needs specialist high-rise engineered demolition we will say so plainly rather than oversell.",
      "A building job usually includes a pre-demolition survey for services, a check for hazardous materials, temporary works where slabs or party elements must stay, and a haulage plan that does not choke a Business Bay or Deira street at peak hours.",
    ],
    faqs: [
      {
        q: "Can you demolish a commercial building in Dubai?",
        a: "Yes. Pure Golden carries out licensed building demolition in Dubai for low-rise commercial and residential structures, including method statements, public protection, and debris removal. Scope is confirmed after a site inspection.",
      },
    ],
  },
  {
    slug: "industrial-demolition",
    name: "Industrial Demolition",
    short: "Warehouses, workshops, and industrial facilities in DIP, Al Quoz, and Jebel Ali.",
    h1: "Industrial Demolition in Dubai",
    title: "Industrial Demolition Dubai | Warehouses & Facilities | Pure Golden",
    description:
      "Industrial demolition in Dubai for warehouses, workshops, and facilities in Al Quoz, DIP, and Jebel Ali — steel, concrete, and plant removal with site clearance.",
    answer:
      "Industrial demolition in Dubai is the takedown of warehouses, workshops, factories, and yards — typically steel portal frames, precast, or heavy RCC — including plant isolation, slab breaking, and yard clearance. Pure Golden works in industrial districts such as Al Quoz, Dubai Investment Park, and Jebel Ali.",
    image: "/images/industrial.jpg",
    imageAlt: "Industrial warehouse demolition in a Dubai industrial district",
    bullets: [
      "Warehouses and steel-frame sheds",
      "Workshops and light industrial units",
      "Yard, slab, and hardstanding removal",
      "Coordination with facility shutdowns",
    ],
    body: [
      "Industrial plots often look simple from the road and turn out not to be: mezzanines, pit slabs, buried services, leftover chemicals, and tenants still occupying a neighbouring bay. The first job is isolation — power, water, compressed air, and any process lines — then a soft strip of racking, offices, and non-structural fit-out.",
      "Steel frames come down in planned lifts. Concrete slabs and ground beams are broken and loaded. If the next use is a new warehouse, we can leave specified pavement or reduce to formation as the civil engineer directs.",
    ],
    faqs: [
      {
        q: "Do you demolish warehouses in Al Quoz and DIP?",
        a: "Yes. Industrial demolition of warehouses and workshops in Al Quoz, Dubai Investment Park, Jebel Ali, and similar districts is a core Pure Golden service, including steel frames, slabs, and yard clearance.",
      },
    ],
  },
  {
    slug: "partial-demolition",
    name: "Partial & Selective Demolition",
    short: "Remove only what the renovation needs — walls, slabs, and extensions kept precise.",
    h1: "Partial and Selective Demolition in Dubai",
    title: "Partial & Selective Demolition Dubai | Pure Golden",
    description:
      "Selective demolition in Dubai for renovations: remove specified walls, slabs, and extensions while protecting the structure that stays.",
    answer:
      "Partial demolition in Dubai is the controlled removal of specified parts of a building — an extension, a floor slab, load-bearing walls identified by the engineer — while the rest of the structure remains in service. Pure Golden uses saw-cutting, breakers, and hand demolition so the retained structure is not damaged.",
    image: "/images/interior.jpg",
    imageAlt: "Selective interior demolition inside a Dubai villa",
    bullets: [
      "Engineer-specified structural openings",
      "Extension and annex removal",
      "Floor and roof slab cut-outs",
      "Protection of retained finishes",
    ],
    body: [
      "Selective work is slower and more skilled than a full takedown. The consultant’s drawings, not a site guess, define what comes out. We mark, isolate, and often diamond-cut before breaking so vibration does not migrate into a villa that the family still occupies next door — or into a retail unit that must trade tomorrow.",
      "This is the right method for villa additions being replaced, hotel or office floor plates being opened, and mixed projects where only a wing is coming down.",
    ],
    faqs: [
      {
        q: "Is partial demolition cheaper than full demolition?",
        a: "Not always. Partial demolition needs more protection, slower cutting, and more labour per cubic metre. It is chosen to save a structure you want to keep, not because it is automatically cheaper than a full villa takedown.",
      },
    ],
  },
  {
    slug: "interior-demolition",
    name: "Interior Demolition",
    short: "Soft strip of interiors for fit-out: partitions, finishes, MEP, and fixtures.",
    h1: "Interior Demolition and Soft Strip in Dubai",
    title: "Interior Demolition Dubai | Soft Strip & Fit-Out Prep | Pure Golden",
    description:
      "Interior demolition in Dubai: soft strip of partitions, finishes, ceilings, and fixtures while protecting the building shell for the next fit-out.",
    answer:
      "Interior demolition — also called soft strip — removes non-structural interiors so a new fit-out can start. Pure Golden strips partitions, ceilings, flooring, joinery, and redundant MEP in villas, offices, and retail units across Dubai, bagging waste and protecting the shell.",
    image: "/images/interior.jpg",
    imageAlt: "Interior soft-strip demolition with exposed concrete and empty window frames",
    bullets: [
      "Office and retail strip-out",
      "Villa interior gutting for renovation",
      "MEP removal and making-good of penetrations",
      "Occupied-building working methods",
    ],
    body: [
      "Interior demolition is often done in buildings that stay live: a floor of an office tower, a shop in a mall, a villa wing. Dust, noise hours, hoist bookings, and fire-compartment integrity matter as much as the skip.",
      "We isolate services with the building operator, protect floors and lifts, and remove waste on an agreed route. Structural members are not cut unless the engineer has specified it — that work moves into partial demolition.",
    ],
    faqs: [
      {
        q: "What is included in a soft strip?",
        a: "A typical Dubai soft strip includes partitions, ceilings, floor finishes, joinery, sanitaryware, and redundant small-power and lighting. Structural concrete, cores, and landlord services stay unless the scope says otherwise.",
      },
    ],
  },
  {
    slug: "excavation-earthwork",
    name: "Excavation & Earthwork",
    short: "Excavation, grading, backfill, and foundation levelling after demolition.",
    h1: "Excavation and Earthwork Services in Dubai",
    title: "Excavation & Earthwork Dubai | Foundation Levelling | Pure Golden",
    description:
      "Excavation, grading, backfilling, and foundation levelling in Dubai, coordinated with demolition so the plot is ready for the next foundation.",
    answer:
      "Excavation and earthwork in Dubai prepares a demolished plot for new foundations: breaking out old footings, excavating to formation, grading, and backfilling. Pure Golden coordinates this with demolition so you do not hire two contractors to move the same ground twice.",
    image: "/images/cleared.jpg",
    imageAlt: "Levelled plot in Dubai after demolition, ready for new construction",
    bullets: [
      "Foundation and footing removal",
      "Bulk excavation to formation",
      "Grading and backfilling",
      "Pool, tank, and pit break-out",
    ],
    body: [
      "After a villa or warehouse comes down, old footings, pile caps, and buried tanks are often still in the ground. Leaving them for the next earthworks contractor creates delay and claims. We can remove specified foundations and leave the site at the level the structural engineer has asked for.",
      "Sandy Dubai ground, high water table in some coastal plots, and shoring around neighbours all change the method. We do not guess a formation level — we work to the drawings.",
    ],
    faqs: [
      {
        q: "Can demolition and excavation be one contract?",
        a: "Yes. Combining demolition, foundation removal, and site grading in one Pure Golden contract usually saves programme time and avoids two sets of mobilisation on the same Dubai plot.",
      },
    ],
  },
  {
    slug: "concrete-cutting",
    name: "Concrete Cutting & Breaking",
    short: "Precision cutting, drilling, and breaking of reinforced concrete.",
    h1: "Concrete Cutting and Breaking in Dubai",
    title: "Concrete Cutting & Breaking Dubai | Pure Golden Demolition",
    description:
      "Concrete cutting, drilling, and hydraulic breaking in Dubai for demolition, openings, and controlled removal of reinforced slabs and walls.",
    answer:
      "Concrete cutting and breaking in Dubai is the precision removal of reinforced concrete using wall saws, floor saws, core drills, and hydraulic breakers. Pure Golden uses it for openings, slab removal, and demolition where vibration on adjoining structure must stay low.",
    image: "/images/concrete.jpg",
    imageAlt: "Hydraulic breaker removing reinforced concrete on a demolition site",
    bullets: [
      "Wall and floor sawing",
      "Core drilling",
      "Hydraulic breaking of RCC",
      "Low-vibration methods next to occupied buildings",
    ],
    body: [
      "Not every concrete element should be smashed. A sawn opening in a slab, a doorway through a shear wall (with engineer approval), or a staircase removal is a cutting job. Breaking is used where the element is coming out entirely and vibration is acceptable.",
      "We match the tool to the reinforcement and to the neighbour. A breaker that is fine in an empty industrial yard is the wrong choice against a party wall in Jumeirah.",
    ],
    faqs: [
      {
        q: "Do you cut concrete without demolishing the whole building?",
        a: "Yes. Concrete cutting and core drilling are used for openings, stair removals, and selective demolition where only specified reinforced concrete is coming out.",
      },
    ],
  },
  {
    slug: "site-clearance",
    name: "Site Clearance & Debris Removal",
    short: "Haulage, recycling, and a plot left ready for the next contractor.",
    h1: "Site Clearance and Debris Removal in Dubai",
    title: "Site Clearance & Debris Removal Dubai | Pure Golden",
    description:
      "Site clearance and debris removal in Dubai after demolition: sorting, haulage to approved facilities, and a clean, levelled plot.",
    answer:
      "Site clearance in Dubai is the removal of demolition debris, remaining structures, vegetation, and obstacles so a plot can be redeveloped. Pure Golden loads, hauls, and disposes of arisings through approved routes and leaves the site graded.",
    image: "/images/cleared.jpg",
    imageAlt: "Cleared and levelled demolition plot in Dubai",
    bullets: [
      "Demolition debris haulage",
      "Sorting of concrete, steel, and mixed waste",
      "Vegetation and obstacle removal",
      "Handover-ready levelling",
    ],
    body: [
      "Debris is where demolition projects quietly fail: skips overflow, illegal dumping creates liability, and the next contractor refuses to start. We treat haulage as part of the demolition method, not an afterthought.",
      "Concrete can often be crushed or sent for recycling. Steel is segregated. Mixed waste goes to approved facilities. Clients who need waste documentation for consultant or authority files should ask at quotation stage so it is built into the job.",
    ],
    faqs: [
      {
        q: "Do you recycle demolition waste in Dubai?",
        a: "Where practical, concrete and steel are separated from mixed waste and sent through approved recycling or recovery routes. The exact split depends on the structure and the receiving facilities available for that job.",
      },
    ],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

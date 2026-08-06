import type {
  Project,
  Service,
  SkillItem,
  TimelineEntry,
  Certificate,
  Testimonial,
} from "@/types";

export const siteConfig = {
  name: "Alex Rivera",
  role: "Drafting Technology Student & Freelance CAD Designer",
  tagline:
    "I create professional architectural drawings, technical documentation, and 3D visualizations that transform ideas into accurate construction-ready plans.",
  email: "hello@alexrivera.design",
  location: "Cebu City, Philippines",
  social: {
    facebook: "https://facebook.com/",
    linkedin: "https://linkedin.com/in/",
    github: "https://github.com/",
  },
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Services", href: "/services" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/contact" },
];

export const stats = [
  { label: "Projects Completed", value: 42, suffix: "+" },
  { label: "Client Satisfaction", value: 98, suffix: "%" },
  { label: "Drawings Delivered", value: 260, suffix: "+" },
  { label: "Software Mastered", value: 6, suffix: "" },
];

export const softwareSkills: SkillItem[] = [
  { name: "AutoCAD", level: 95 },
  { name: "SketchUp", level: 90 },
  { name: "Revit", level: 78 },
  { name: "Autodesk Suite", level: 82 },
  { name: "Lumion", level: 75 },
  { name: "Photoshop", level: 70 },
];

export const technicalSkills: string[] = [
  "Floor Plans",
  "Elevations",
  "Sections",
  "Site Plans",
  "Construction Details",
  "Blueprint Reading",
  "Rendering",
  "3D Modeling",
  "CAD Drafting",
];

export const softSkills: string[] = [
  "Communication",
  "Time Management",
  "Attention to Detail",
  "Client Collaboration",
  "Teamwork",
  "Problem Solving",
];

export const services: Service[] = [
  {
    id: "2d-drafting",
    title: "2D Architectural Drafting",
    description:
      "Precise, code-aware 2D drawings translated from sketches, references, or as-built surveys into clean CAD documentation.",
    icon: "Ruler",
    deliverables: ["Vector DWG/DXF files", "Print-ready PDF sets", "Layer-organized files"],
  },
  {
    id: "floor-plans",
    title: "Residential Floor Plans",
    description:
      "Fully dimensioned floor plans for homes and small residential developments, built for clarity and buildability.",
    icon: "Home",
    deliverables: ["Dimensioned plans", "Furniture layout option", "Multiple revisions"],
  },
  {
    id: "cad-redrawing",
    title: "CAD Redrawing",
    description:
      "Converting hand-drawn, scanned, or outdated drawings into accurate, editable CAD files.",
    icon: "PenTool",
    deliverables: ["Editable CAD source", "Scale-accurate geometry", "Cleaned linework"],
  },
  {
    id: "pdf-to-autocad",
    title: "PDF to AutoCAD",
    description:
      "Fast, accurate conversion of static PDF plans into fully editable AutoCAD drawings.",
    icon: "FileInput",
    deliverables: ["DWG conversion", "Correct scaling", "Organized layers & blocks"],
  },
  {
    id: "sketchup-3d",
    title: "3D SketchUp Modeling",
    description:
      "Detailed 3D models for design development, client presentations, and visualization studies.",
    icon: "Box",
    deliverables: ["SketchUp source file", "Textured model", "Export-ready views"],
  },
  {
    id: "construction-docs",
    title: "Construction Documentation",
    description:
      "Complete drawing sets that communicate design intent clearly to contractors and consultants.",
    icon: "FileStack",
    deliverables: ["Full drawing set", "Schedules & notes", "Coordinated sheets"],
  },
  {
    id: "working-drawings",
    title: "Working Drawings",
    description:
      "Detailed working drawings bridging design concepts and on-site construction execution.",
    icon: "Layers",
    deliverables: ["Detail callouts", "Material notes", "Dimension strings"],
  },
  {
    id: "technical-drawings",
    title: "Technical Drawings",
    description:
      "Accurate technical and engineering-style drawings for documentation and reference purposes.",
    icon: "Compass",
    deliverables: ["Orthographic views", "Annotated details", "Consistent standards"],
  },
];

export const projects: Project[] = [
  {
    id: "coastal-residence",
    title: "Coastal Residence",
    category: "Residential",
    cover:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=1600&auto=format&fit=crop",
    ],
    software: ["AutoCAD", "SketchUp", "Lumion"],
    tags: ["Floor Plan", "Elevation", "3D Render"],
    description:
      "A two-storey coastal residence drafted from client sketches into a full CAD set, including floor plans, elevations, and a rendered 3D exterior study for presentation.",
    year: "2025",
    role: "Freelance CAD Drafter",
  },
  {
    id: "urban-cafe-fitout",
    title: "Urban Café Fit-Out",
    category: "Commercial",
    cover:
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1600&auto=format&fit=crop",
    ],
    software: ["AutoCAD", "Revit"],
    tags: ["Interior Layout", "RCP", "Construction Detail"],
    description:
      "Interior fit-out drawings for a small café space, covering layout planning, reflected ceiling plan, and joinery construction details.",
    year: "2024",
    role: "Freelance CAD Drafter",
  },
  {
    id: "hillside-cabin-thesis",
    title: "Hillside Cabin — Thesis Study",
    category: "School Projects",
    cover:
      "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=1600&auto=format&fit=crop",
    ],
    software: ["SketchUp", "AutoCAD", "Photoshop"],
    tags: ["Site Plan", "Section", "Massing Study"],
    description:
      "An academic design study exploring a small hillside cabin, including site analysis, sectional studies, and massing exploration for a Drafting Technology coursework module.",
    year: "2024",
    role: "Student Project",
  },
  {
    id: "structural-detail-set",
    title: "Structural Detail Set",
    category: "Technical Drawings",
    cover:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1600&auto=format&fit=crop",
    ],
    software: ["AutoCAD"],
    tags: ["Detail Drawing", "Annotation", "Schedule"],
    description:
      "A set of technical structural details produced for a construction documentation exercise, focused on clarity of annotation and dimensioning standards.",
    year: "2023",
    role: "Student Project",
  },
  {
    id: "modern-duplex-render",
    title: "Modern Duplex Visualization",
    category: "3D Models",
    cover:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1600&auto=format&fit=crop",
    ],
    software: ["SketchUp", "Lumion"],
    tags: ["3D Model", "Rendering", "Client Presentation"],
    description:
      "Full exterior and interior 3D modeling of a modern duplex unit, delivered as high-resolution renders for client presentation and marketing use.",
    year: "2025",
    role: "Freelance 3D Modeler",
  },
  {
    id: "office-reno-plans",
    title: "Office Renovation Plans",
    category: "Commercial",
    cover:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?q=80&w=1600&auto=format&fit=crop",
    ],
    software: ["AutoCAD", "Revit"],
    tags: ["As-Built", "Floor Plan", "Demolition Plan"],
    description:
      "As-built survey redrawn into CAD, followed by demolition and proposed layout plans for a mid-size office renovation.",
    year: "2024",
    role: "Freelance CAD Drafter",
  },
];

export const projectCategories: Array<Project["category"] | "All"> = [
  "All",
  "Residential",
  "Commercial",
  "School Projects",
  "Technical Drawings",
  "3D Models",
];

export const timeline: TimelineEntry[] = [
  {
    id: "t1",
    type: "Freelance",
    title: "Freelance CAD Designer",
    organization: "Self-Employed",
    period: "2024 — Present",
    description:
      "Providing 2D drafting, redrawing, and 3D modeling services for residential and small commercial clients.",
  },
  {
    id: "t2",
    type: "OJT",
    title: "Drafting Intern",
    organization: "Placeholder Architecture Studio",
    period: "Summer 2024",
    description:
      "On-the-job training producing construction documentation and assisting with site plan revisions under senior drafters.",
  },
  {
    id: "t3",
    type: "Workshop",
    title: "BIM & Revit Fundamentals Workshop",
    organization: "Placeholder Technical Institute",
    period: "2024",
    description:
      "Hands-on workshop covering Building Information Modeling fundamentals and Revit documentation workflows.",
  },
  {
    id: "t4",
    type: "Academic",
    title: "Drafting Technology Coursework",
    organization: "Placeholder Polytechnic College",
    period: "2022 — Present",
    description:
      "Coursework covering architectural drafting, construction documentation, and design visualization fundamentals.",
  },
  {
    id: "t5",
    type: "Seminar",
    title: "Sustainable Construction Detailing Seminar",
    organization: "Placeholder Builders Association",
    period: "2023",
    description:
      "Seminar on sustainable material detailing and its application in residential construction drawings.",
  },
];

export const certificates: Certificate[] = [
  {
    id: "c1",
    title: "AutoCAD Certified User",
    issuer: "Autodesk",
    date: "2024",
    image:
      "https://images.unsplash.com/photo-1568992687947-868a62a9f521?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "c2",
    title: "SketchUp for Design Fundamentals",
    issuer: "Placeholder Design Academy",
    date: "2024",
    image:
      "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "c3",
    title: "BIM & Revit Fundamentals",
    issuer: "Placeholder Technical Institute",
    date: "2024",
    image:
      "https://images.unsplash.com/photo-1503387837-b154d5074bd2?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "c4",
    title: "Construction Documentation Workshop",
    issuer: "Placeholder Builders Association",
    date: "2023",
    image:
      "https://images.unsplash.com/photo-1581091012184-7c8a75f2c5ee?q=80&w=1200&auto=format&fit=crop",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "r1",
    name: "Maria Santos",
    role: "Homeowner, Coastal Residence Project",
    quote:
      "Working with Alex was seamless. Our sketches turned into a precise, professional CAD set faster than we expected, and every revision request was handled without friction.",
    avatar: "https://i.pravatar.cc/150?img=47",
    rating: 5,
  },
  {
    id: "r2",
    name: "James Cordero",
    role: "Owner, Urban Café Fit-Out",
    quote:
      "Extremely detail-oriented. The construction drawings were clean, well-annotated, and made it easy for our contractor to execute the fit-out without back-and-forth.",
    avatar: "https://i.pravatar.cc/150?img=12",
    rating: 5,
  },
  {
    id: "r3",
    name: "Prof. Liza Fernandez",
    role: "Academic Supervisor",
    quote:
      "Consistently one of the most meticulous drafters in the cohort. Strong command of standards, layer discipline, and dimensioning accuracy.",
    avatar: "https://i.pravatar.cc/150?img=32",
    rating: 5,
  },
  {
    id: "r4",
    name: "Daniel Reyes",
    role: "Client, Office Renovation",
    quote:
      "The as-built drawings were spot on, and the proposed layout options helped us make a decision quickly. Great communication throughout.",
    avatar: "https://i.pravatar.cc/150?img=68",
    rating: 4,
  },
];

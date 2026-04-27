export interface ProductFeature {
  title: string;
  description: string;
}

export interface ProductStep {
  step: string;
  title: string;
  description: string;
}

export interface Product {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  badge: string;
  heroImage: string;
  features: ProductFeature[];
  steps: ProductStep[];
  industries: string[];
  relatedSlugs: string[];
}

export const products: Product[] = [
  {
    slug: "erp-crm",
    name: "Growth ERP & CRM",
    tagline: "One platform to run your entire business",
    badge: "Core Product",
    description:
      "R-Core Growth ERP & CRM is a comprehensive enterprise resource planning platform built for businesses that want to unify their sales, finance, procurement, HR, and operations under one intelligent system — without the enterprise price tag.",
    heroImage: "/images/products/realestate.png",
    features: [
      {
        title: "Sales & Revenue Management",
        description:
          "Manage your entire sales pipeline — from lead to invoice. Track deals, automate follow-ups, and generate real-time revenue reports.",
      },
      {
        title: "Financial Control & Accounting",
        description:
          "Handle accounting, budgeting, tax, and financial reporting. Get a complete picture of your business finances at any time.",
      },
      {
        title: "Procurement & Vendor Management",
        description:
          "Streamline purchasing, vendor onboarding, and expense tracking. Automate purchase orders and approvals in one place.",
      },
      {
        title: "Human Resources Management",
        description:
          "Manage employee records, attendance, payroll, and training from a single HR dashboard built for growing teams.",
      },
      {
        title: "Inventory & Supply Chain",
        description:
          "Track stock levels, manage warehouses, and control logistics in real time across multiple locations.",
      },
      {
        title: "CRM & Customer Management",
        description:
          "Build and manage customer relationships with a fully integrated CRM — contacts, communications, deals, and support in one view.",
      },
    ],
    steps: [
      {
        step: "01",
        title: "Book a Free Demo",
        description:
          "Schedule a personalised walkthrough of the ERP & CRM platform tailored to your industry and business size.",
      },
      {
        step: "02",
        title: "Custom Setup & Migration",
        description:
          "Our team configures the platform to your workflows and migrates your existing data securely — no disruption to operations.",
      },
      {
        step: "03",
        title: "Go Live & Scale",
        description:
          "Your team goes live with full training and dedicated support. Add modules as your business grows.",
      },
    ],
    industries: [
      "Retail & Trading",
      "Manufacturing",
      "Hospitality",
      "Logistics",
      "Import & Export",
      "Services",
    ],
    relatedSlugs: ["rems", "pos", "portal"],
  },
  {
    slug: "rems",
    name: "R-Core Data Suite (REMS)",
    tagline: "Complete real estate management — one platform",
    badge: "Real Estate",
    description:
      "R-Core REMS is a purpose-built platform for real estate developers, brokers, and property managers. From property listings and client pipelines to lease tracking and financial reporting — everything your real estate business needs in one system.",
    heroImage: "/images/products/rems-launch.webp",
    features: [
      {
        title: "Property Management",
        description:
          "Manage your entire property portfolio — units, floors, buildings, and projects — with full inventory tracking and availability status.",
      },
      {
        title: "Sales Pipeline & CRM",
        description:
          "Track leads, manage client interactions, and close deals faster with a real estate-specific CRM built into the platform.",
      },
      {
        title: "Lease & Tenancy Management",
        description:
          "Automate lease agreements, renewals, rent collection, and tenant communications from a single dashboard.",
      },
      {
        title: "Financial Reporting",
        description:
          "Generate detailed financial reports — revenue, expenses, commissions, and investor returns — with one click.",
      },
      {
        title: "Construction Tracking",
        description:
          "Monitor project timelines, budgets, contractor payments, and construction milestones across all active developments.",
      },
      {
        title: "Client Portal",
        description:
          "Give buyers and tenants a branded self-service portal to track payments, view documents, and raise requests.",
      },
    ],
    steps: [
      {
        step: "01",
        title: "Map Your Portfolio",
        description:
          "We onboard your property data — projects, units, clients, and financial records — into the platform.",
      },
      {
        step: "02",
        title: "Configure Workflows",
        description:
          "Set up your sales process, approval workflows, lease templates, and commission structures.",
      },
      {
        step: "03",
        title: "Launch & Manage",
        description:
          "Your team starts managing properties, clients, and finances from one unified platform with full support.",
      },
    ],
    industries: [
      "Property Development",
      "Real Estate Brokerage",
      "Property Management",
      "Construction",
      "Investment & Rental",
    ],
    relatedSlugs: ["erp-crm", "portal", "sms"],
  },
  {
    slug: "pos",
    name: "Point of Sale (POS)",
    tagline: "Fast, reliable POS built for modern retail",
    badge: "Retail",
    description:
      "R-Core POS is a powerful, easy-to-use point of sale system designed for retail, hospitality, and service businesses. Process transactions, manage inventory, and access real-time sales data — all from one connected platform.",
    heroImage: "/images/products/retaill.png",
    features: [
      {
        title: "Fast Transaction Processing",
        description:
          "Process sales, returns, and exchanges in seconds. Support for cash, card, and digital payment methods.",
      },
      {
        title: "Real-Time Inventory Sync",
        description:
          "Every sale automatically updates your inventory across all branches — no manual reconciliation needed.",
      },
      {
        title: "Multi-Branch Support",
        description:
          "Manage multiple store locations from one dashboard. Compare performance, transfer stock, and centralise reporting.",
      },
      {
        title: "Customer Loyalty",
        description:
          "Build customer profiles, track purchase history, and run loyalty programs directly from the POS.",
      },
      {
        title: "Sales Analytics",
        description:
          "Access daily, weekly, and monthly sales reports. Identify top products, peak hours, and staff performance.",
      },
      {
        title: "ERP Integration",
        description:
          "Fully integrated with R-Core ERP — sales data flows directly into finance, inventory, and CRM automatically.",
      },
    ],
    steps: [
      {
        step: "01",
        title: "Setup & Configuration",
        description:
          "We configure your products, pricing, tax rules, and payment methods across all your locations.",
      },
      {
        step: "02",
        title: "Staff Training",
        description:
          "Your team gets hands-on training — the POS is intuitive and most staff are confident within hours.",
      },
      {
        step: "03",
        title: "Go Live",
        description:
          "Start processing transactions immediately with full support from our team on standby.",
      },
    ],
    industries: [
      "Retail",
      "Hospitality",
      "Food & Beverage",
      "Fashion",
      "Electronics",
      "Pharmacy",
    ],
    relatedSlugs: ["erp-crm", "sms", "portal"],
  },
  {
    slug: "portal",
    name: "Customer Portal",
    tagline: "Self-service that your clients will love",
    badge: "Self-Service",
    description:
      "R-Core Customer Portal gives your clients a branded, secure self-service experience. From raising support tickets to tracking orders and accessing documents — your customers get the information they need without calling your team.",
    heroImage: "/images/products/POS.png",
    features: [
      {
        title: "Account Management",
        description:
          "Clients can view and update their account details, contracts, and payment history at any time.",
      },
      {
        title: "Ticket & Support System",
        description:
          "Customers raise support requests directly in the portal — your team receives and responds without email chains.",
      },
      {
        title: "Document Centre",
        description:
          "Share invoices, contracts, reports, and statements securely — clients download what they need on demand.",
      },
      {
        title: "Order & Project Tracking",
        description:
          "Give clients real-time visibility into their orders, project milestones, and delivery status.",
      },
      {
        title: "Branded Experience",
        description:
          "Fully white-labelled with your logo, colors, and domain — your clients see your brand, not ours.",
      },
      {
        title: "Role-Based Access",
        description:
          "Control exactly what each client user can see and do — by company, department, or individual.",
      },
    ],
    steps: [
      {
        step: "01",
        title: "Brand & Configure",
        description:
          "We set up your branded portal with your logo, colors, and domain in days — not weeks.",
      },
      {
        step: "02",
        title: "Invite Your Clients",
        description:
          "Clients receive a secure invitation to create their account and access their personalised dashboard.",
      },
      {
        step: "03",
        title: "Reduce Support Load",
        description:
          "Watch your inbound support calls drop as clients find answers and documents themselves.",
      },
    ],
    industries: [
      "ERP & Software Clients",
      "Real Estate",
      "Professional Services",
      "Logistics",
      "Finance",
    ],
    relatedSlugs: ["erp-crm", "rems", "sms"],
  },
  {
    slug: "sms",
    name: "SMS & WhatsApp Solutions",
    tagline: "Reach your customers where they actually are",
    badge: "Communications",
    description:
      "R-Core Communications gives businesses a unified messaging platform — bulk SMS, OTP, A2P messaging, and WhatsApp Business API — all connected directly to your ERP, CRM, and customer workflows.",
    heroImage: "/images/products/sms.png",
    features: [
      {
        title: "Bulk SMS Campaigns",
        description:
          "Send thousands of SMS messages in seconds — for promotions, alerts, reminders, and announcements.",
      },
      {
        title: "OTP & Transactional SMS",
        description:
          "Reliable OTP delivery for authentication and transactional notifications with 99.9% delivery rates.",
      },
      {
        title: "WhatsApp Business API",
        description:
          "Send automated messages, broadcast campaigns, and handle customer conversations via WhatsApp Business.",
      },
      {
        title: "Two-Way Messaging",
        description:
          "Enable two-way conversations with customers via SMS and WhatsApp — all managed from one inbox.",
      },
      {
        title: "Automated Workflows",
        description:
          "Trigger messages based on ERP events — order confirmations, payment reminders, delivery alerts.",
      },
      {
        title: "Delivery Analytics",
        description:
          "Track delivery rates, open rates, and response rates for every campaign with detailed reporting.",
      },
    ],
    steps: [
      {
        step: "01",
        title: "Connect Your Account",
        description:
          "We set up your SMS sender ID and WhatsApp Business account — fully compliant and approved.",
      },
      {
        step: "02",
        title: "Integrate with ERP",
        description:
          "Connect messaging to your existing workflows — orders, invoices, support tickets trigger messages automatically.",
      },
      {
        step: "03",
        title: "Start Communicating",
        description:
          "Send your first campaign or automated message within hours of going live.",
      },
    ],
    industries: [
      "Retail",
      "Real Estate",
      "Banking & Finance",
      "Healthcare",
      "Logistics",
      "Education",
    ],
    relatedSlugs: ["erp-crm", "portal", "email"],
  },
  {
    slug: "email",
    name: "Email Solutions Suite",
    tagline: "Professional email infrastructure for growing businesses",
    badge: "Communications",
    description:
      "R-Core Email Solutions provides businesses with reliable transactional email, marketing campaigns, and email management tools — with API access, SMTP integration, and a full suite of delivery and analytics features.",
    heroImage: "/images/products/email.webp",
    features: [
      {
        title: "Transactional Email",
        description:
          "Send order confirmations, invoices, password resets, and system notifications reliably at scale.",
      },
      {
        title: "Email Marketing Campaigns",
        description:
          "Design and send targeted email campaigns with drag-and-drop templates and audience segmentation.",
      },
      {
        title: "SMTP Integration",
        description:
          "Integrate with your existing applications via SMTP — reliable delivery with full bounce and complaint handling.",
      },
      {
        title: "API Access",
        description:
          "Use our REST API to trigger emails from any system — ERP, CRM, e-commerce, or custom applications.",
      },
      {
        title: "Delivery Analytics",
        description:
          "Track open rates, click rates, bounces, and unsubscribes — with actionable insights to improve performance.",
      },
      {
        title: "Email Management",
        description:
          "Manage company email accounts, shared inboxes, and team communications from one centralised platform.",
      },
    ],
    steps: [
      {
        step: "01",
        title: "Domain Setup & Verification",
        description:
          "We configure your sending domain with SPF, DKIM, and DMARC — for maximum deliverability.",
      },
      {
        step: "02",
        title: "API or SMTP Integration",
        description:
          "Connect your applications in minutes using our API or SMTP credentials with full documentation.",
      },
      {
        step: "03",
        title: "Send with Confidence",
        description:
          "Your emails reach inboxes reliably — with real-time monitoring and support if anything goes wrong.",
      },
    ],
    industries: [
      "E-Commerce",
      "SaaS & Technology",
      "Finance",
      "Education",
      "Healthcare",
      "Retail",
    ],
    relatedSlugs: ["sms", "erp-crm", "portal"],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getRelatedProducts(slugs: string[]): Product[] {
  return products.filter((p) => slugs.includes(p.slug));
}

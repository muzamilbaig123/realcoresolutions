export interface MenuItem {
  id: string;
  title: string;
  description: string;
  href: string;
}

export interface MenuColumn {
  heading: string;
  items: MenuItem[];
}

export interface NavMenu {
  trigger: string;
  columns: MenuColumn[];
}

export const navMenus: NavMenu[] = [
  {
    trigger: "Products",
    columns: [
      {
        heading: "Real Estate Applications",
        items: [
          {
            id: "rems",
            title: "R-Core Data Suite (REMS)",
            description:
              "A comprehensive solution for developers and builders covering property management, construction, sales, and client relationships.",
            href: "#",
          },
          {
            id: "real-estate-brokerage-agency-suite",
            title: "R-Core Real Estate Brokerage & Agency Suite",
            description:
              "Comprehensive tools for managing property listings, client interactions, and sales processes for real estate brokers and agents.",
            href: "#",
          },
          {
            id: "real-estate-brokerage-suite",
            title: "R-Core Real Estate Brokerage Suite",
            description:
              "A complete solution for property management, lease administration, maintenance tracking, and financial reporting.",
            href: "#",
          },
        ],
      },
      {
        heading: "Business Applications",
        items: [
          {
            id: "growth-erp-crm",
            title: "Growth ERP & CRM",
            description:
              "Comprehensive ERP & CRM solutions with modules across industries and industry-specific configurations to tailor the software to your needs.",
            href: "#",
          },
          {
            id: "industry-specific-modules",
            title: "Industry-Specific Modules",
            description:
              "ERP and CRM systems for retail, trading, hospitality, logistics, services, manufacturing, and import/export businesses.",
            href: "#",
          },
          {
            id: "common-modules",
            title: "Common Modules",
            description:
              "Accounting, Sales and Order Management, Inventory and Supply Chain, Customer Relationship Management, and Project Management.",
            href: "#",
          },
          {
            id: "ems",
            title: "Educational Management System (EMS)",
            description:
              "A comprehensive platform to streamline student data, course offerings, academic records, and institutional operations.",
            href: "#",
          },
          {
            id: "pos",
            title: "R-Core Point of Sale (POS)",
            description:
              "A powerful and easy-to-use POS system that streamlines sales, inventory management, and customer transactions for businesses of all sizes.",
            href: "#",
          },
        ],
      },
      {
        heading: "Communications",
        items: [
          {
            id: "sms-solutions",
            title: "SMS Solutions",
            description:
              "A reliable and scalable SMS solution for sending bulk messages. SMS API, A2P, Bulk SMS, Transactional SMS, OTP, Alerts.",
            href: "#",
          },
          {
            id: "whatsapp-solutions",
            title: "WhatsApp Solutions",
            description:
              "Integrated WhatsApp solutions for real-time communication, automated responses, broadcasts, and CRM integration.",
            href: "#",
          },
          {
            id: "email-solutions-suite",
            title: "Email Solutions Suite",
            description:
              "Comprehensive tools for email integration, marketing, and management, including API access, campaign tools, and reliable SMTP services.",
            href: "#",
          },
        ],
      },
    ],
  },
  {
    trigger: "Modules",
    columns: [
      {
        heading: "Enterprise Management",
        items: [
          {
            id: "sales-revenue-management",
            title: "Sales & Revenue Management",
            description:
              "Manage sales, invoicing, subscriptions, and POS in one platform.",
            href: "#",
          },
          {
            id: "procurement-vendor-management",
            title: "Procurement & Vendor Management",
            description:
              "Simplify purchasing, vendor tracking, and expense control.",
            href: "#",
          },
          {
            id: "financial-control-accounting",
            title: "Financial Control & Accounting",
            description:
              "Handle accounting, tax, budgeting, and financial reporting.",
            href: "#",
          },
        ],
      },
      {
        heading: "Integrated Operations Management",
        items: [
          {
            id: "inventory-supply-chain",
            title: "Inventory & Supply Chain",
            description:
              "Track inventory, logistics, asset movement, and warehouse operations.",
            href: "#",
          },
          {
            id: "project-service-delivery",
            title: "Project & Service Delivery",
            description:
              "Plan, deliver, and support projects and service contracts.",
            href: "#",
          },
          {
            id: "human-resources-management",
            title: "Human Resources Management",
            description: "Manage employee data, attendance, pay, and training.",
            href: "#",
          },
          {
            id: "digital-commerce-solutions",
            title: "Digital Commerce Solutions",
            description:
              "B2B/B2C E-Commerce Platform, Corporate Website Builder, Omnichannel Payment Processing.",
            href: "#",
          },
        ],
      },
      {
        heading: "Business Support Solutions",
        items: [
          {
            id: "marketing-customer-engagement",
            title: "Marketing & Customer Engagement",
            description:
              "Automate marketing campaigns, collect feedback, and enhance engagement.",
            href: "#",
          },
          {
            id: "balloting-module",
            title: "Balloting Module",
            description: "Run secure, automated, and fair selection processes.",
            href: "#",
          },
          {
            id: "building-maintenance-billing-module",
            title: "Building Maintenance & Billing Module",
            description:
              "Track maintenance tasks and automate related billing.",
            href: "#",
          },
          {
            id: "bill-of-quantity-boq",
            title: "Bill of Quantity (BOQ)",
            description:
              "Create, manage, and track detailed cost estimates and quantities for projects.",
            href: "#",
          },
        ],
      },
      {
        heading: "Integrated Resource Management",
        items: [
          {
            id: "contractors-management",
            title: "Contractors Management",
            description:
              "Manage contractor profiles, contracts, payments, and performance.",
            href: "#",
          },
          {
            id: "production",
            title: "Production",
            description:
              "Schedule, track, and optimize production processes and quality.",
            href: "#",
          },
          {
            id: "property-investment-rent-management",
            title: "Property Investment & Rent Management",
            description:
              "Manage rental properties, tenant details, lease agreements, and investment returns.",
            href: "#",
          },
          {
            id: "document-archiving",
            title: "Document Archiving",
            description:
              "Securely store, search, and manage digital documents with version control.",
            href: "#",
          },
        ],
      },
    ],
  },
  {
    trigger: "Services",
    columns: [
      {
        heading: "Implementation",
        items: [
          {
            id: "erp-implementation",
            title: "ERP Implementation",
            description:
              "End-to-end ERP setup and configuration tailored for your business workflows.",
            href: "#",
          },
          {
            id: "custom-development",
            title: "Custom Development",
            description:
              "Tailored solutions built specifically for your unique operational requirements.",
            href: "#",
          },
          {
            id: "data-migration",
            title: "Data Migration",
            description:
              "Seamless and secure migration of your existing data to R-Core systems.",
            href: "#",
          },
        ],
      },
      {
        heading: "Support & Training",
        items: [
          {
            id: "technical-support",
            title: "Technical Support",
            description:
              "Dedicated support team available to resolve your technical needs promptly.",
            href: "#",
          },
          {
            id: "training-onboarding",
            title: "Training & Onboarding",
            description:
              "Comprehensive training programs to get your team up and running quickly.",
            href: "#",
          },
          {
            id: "managed-services",
            title: "Managed Services",
            description:
              "Let us manage and continuously optimize your ERP environment.",
            href: "#",
          },
        ],
      },
    ],
  },
  {
    trigger: "Solutions",
    columns: [
      {
        heading: "By Industry",
        items: [
          {
            id: "real-estate-solution",
            title: "Real Estate",
            description:
              "End-to-end solutions for developers, brokers, and property managers.",
            href: "#",
          },
          {
            id: "retail-trading-solution",
            title: "Retail & Trading",
            description:
              "POS, inventory, and CRM solutions for retail businesses of all sizes.",
            href: "#",
          },
          {
            id: "manufacturing-solution",
            title: "Manufacturing",
            description:
              "Production planning, quality control, and supply chain management.",
            href: "#",
          },
          {
            id: "hospitality-solution",
            title: "Hospitality",
            description:
              "Hotel management, booking, and guest experience solutions.",
            href: "#",
          },
        ],
      },
      {
        heading: "By Function",
        items: [
          {
            id: "finance-accounting",
            title: "Finance & Accounting",
            description:
              "Comprehensive financial management and reporting tools.",
            href: "#",
          },
          {
            id: "hr-payroll",
            title: "HR & Payroll",
            description: "Employee lifecycle management from hire to retire.",
            href: "#",
          },
          {
            id: "sales-marketing",
            title: "Sales & Marketing",
            description:
              "CRM and marketing automation for growth-focused teams.",
            href: "#",
          },
          {
            id: "customer-portal",
            title: "Customer Portal",
            description:
              "Self-service portals for your customers to manage their accounts.",
            href: "#",
          },
        ],
      },
    ],
  },
  {
    trigger: "Industries",
    columns: [
      {
        heading: "Sectors We Serve",
        items: [
          {
            id: "real-estate-construction",
            title: "Real Estate & Construction",
            description:
              "Property development, sales, and management solutions.",
            href: "#",
          },
          {
            id: "hospitality-tourism",
            title: "Hospitality & Tourism",
            description:
              "Hotel management, booking, and guest experience tools.",
            href: "#",
          },
          {
            id: "education",
            title: "Education",
            description:
              "Student information systems and institutional management platforms.",
            href: "#",
          },
          {
            id: "healthcare",
            title: "Healthcare",
            description:
              "Patient management and healthcare operations platforms.",
            href: "#",
          },
        ],
      },
      {
        heading: "More Industries",
        items: [
          {
            id: "logistics-distribution",
            title: "Logistics & Distribution",
            description:
              "Fleet management, shipment tracking, and warehouse operations.",
            href: "#",
          },
          {
            id: "retail-ecommerce",
            title: "Retail & E-Commerce",
            description:
              "Omnichannel retail solutions with integrated payment processing.",
            href: "#",
          },
          {
            id: "import-export",
            title: "Import & Export",
            description:
              "Trade documentation, compliance, and logistics management.",
            href: "#",
          },
          {
            id: "manufacturing-industries",
            title: "Manufacturing",
            description:
              "Production scheduling, quality control, and inventory management.",
            href: "#",
          },
        ],
      },
    ],
  },
  {
    trigger: "Resources",
    columns: [
      {
        heading: "Insights & Stories",
        items: [
          {
            id: "blog",
            title: "Blog",
            description:
              "Stay up-to-date with the latest industry trends, news, and expert insights to enhance your knowledge.",
            href: "#",
          },
          {
            id: "case-studies",
            title: "Case Studies",
            description:
              "Discover real-world case studies showcasing how our solutions drive success across various industries.",
            href: "#",
          },
          {
            id: "customer-testimonials-reviews",
            title: "Customer Testimonials & Reviews",
            description:
              "Hear from our satisfied clients about their experiences with R-Core solutions.",
            href: "#",
          },
        ],
      },
      {
        heading: "Support & Information",
        items: [
          {
            id: "faqs",
            title: "FAQs",
            description:
              "Warehouse Management System, Asset Tracking & Barcoding, Inventory Valuation & Reporting.",
            href: "#",
          },
          {
            id: "product-demo",
            title: "Product Demo",
            description:
              "Project Portfolio Management, Professional Services Automation, Helpdesk & Ticket Management.",
            href: "#",
          },
        ],
      },
      {
        heading: "Partner & Affiliate",
        items: [
          {
            id: "technology-partnerships",
            title: "Technology Partnerships",
            description:
              "Partner with us to integrate and promote our solutions with your technology stack.",
            href: "#",
          },
          {
            id: "sales-partnerships",
            title: "Sales Partnerships",
            description:
              "Become a reseller or distributor and earn commissions by selling our products.",
            href: "#",
          },
          {
            id: "affiliate-program",
            title: "Affiliate Program",
            description:
              "Refer customers to our products and earn commissions for each successful referral.",
            href: "#",
          },
        ],
      },
      {
        heading: "Engagement & Community",
        items: [
          {
            id: "careers",
            title: "Careers",
            description:
              "Explore career opportunities at Realcore Solutions and shape the future of ERP and CRM.",
            href: "#",
          },
          {
            id: "membership-program",
            title: "Membership Program",
            description:
              "Join our Membership Program to earn by offering ERP training, setup, and expert advice.",
            href: "#",
          },
          {
            id: "training-certification-programs",
            title: "Training & Certification Programs",
            description:
              "Gain expert training and certification in ERP and CRM solutions to boost your career.",
            href: "#",
          },
        ],
      },
    ],
  },
];

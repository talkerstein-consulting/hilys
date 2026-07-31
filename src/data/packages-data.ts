export interface PackagePricing {
  label: string;
  price: string;
}

export interface PackageSection {
  title: string;
  items: string[];
}

export interface PackageData {
  slug: string;
  title: string;
  tagline: string;
  duration: string;
  pricing: PackagePricing[];
  deposit?: string;
  includes?: string;
  addons?: string[];
  sections: PackageSection[];
  image: string;
}

export const birthdayPackages: PackageData[] = [
  {
    slug: "little-sparkly-princess",
    title: "Little Sparkly Princess",
    tagline:
      "Designed for our amazing younger guests who would enjoy taking part in a glamorous royal ball combined with a spa treatment fit for real princesses.",
    duration: "2 hours",
    pricing: [
      { label: "8-10 children", price: "$525+HST" },
      { label: "6-7 children", price: "$475+HST" },
      { label: "11-16 children (each)", price: "$45" },
    ],
    deposit: "$100 Booking Deposit",
    includes:
      "Digital invitation, tablecloths, paper plates, cups, napkins & cutlery, refillable water and juice box, food & cake time (order by parents).",
    addons: [
      "Themed loot bag — $11 per guest",
      "Face painting — $200",
      "Hair styling — $95",
    ],
    sections: [
      {
        title: "Spa Treatments",
        items: [
          "Mini mani & mini pedi on natural nails with bubbly soaking",
          "Lip glitter & gentle eyeliner application",
          "Hypoallergenic face & hair glitter",
          "Peel-on glitter tattoos",
        ],
      },
      {
        title: "Princess Costume Party",
        items: [
          "Dress-up gowns, tiaras & wands",
          "Guided costume changes and photo-ready set-up",
        ],
      },
    ],
    image: "/img/spa/bday-service.webp",
  },
  {
    slug: "tie-dye-birthday-party",
    title: "Tie-Dye Birthday Bash",
    tagline:
      "Perfect for ages 6–13, our 2½-hour Tie-Dye Birthday Bash combines spa pampering with a hands-on tie-dye T-shirt station. Kids leave with polished nails, sparkly fun and a wearable art keepsake.",
    duration: "2 hours",
    pricing: [
      { label: "8-10 children", price: "$585+HST" },
      { label: "6-7 children", price: "$535+HST" },
      { label: "11-24 children (each)", price: "$45" },
    ],
    deposit: "$100 Booking Deposit",
    includes:
      "Digital invitation, tablecloths, paper plates, cups, napkins & cutlery, refillable water and juice box, food & cake time (order by parents).",
    addons: [
      "Themed loot bag — $11 per guest",
      "Face painting — $200",
      "Hair styling — $95",
    ],
    sections: [
      {
        title: "Spa Treatments",
        items: [
          "Mini mani & mini pedi on natural nails with bubbly soaking",
          "Lip glitter & gentle eyeliner application",
          "Hypoallergenic face & hair glitter",
          "Peel-on glitter tattoos",
        ],
      },
      {
        title: "Creative Workshop",
        items: [
          "DIY tie-dye T-shirt: pre-washed 100% cotton tee, eco-friendly dyes & rubber bands",
          "Instructor-led swirl, spiral or bullseye techniques",
          "Each child takes home their custom T-shirt",
        ],
      },
    ],
    image: "/img/spa/step1.jpg",
  },
  {
    slug: "your-sparkly-slime-birthday",
    title: "Sparkly Slime Birthday",
    tagline:
      "Perfect for ages 5–13, our 2-hour Sparkly Slime Birthday combines spa pampering with a hands-on DIY sparkly-slime station. Kids create their own colorful slime keepsake while you relax.",
    duration: "2 hours",
    pricing: [
      { label: "8-10 children", price: "$595+HST" },
      { label: "6-7 children", price: "$545+HST" },
      { label: "11-24 children (each)", price: "$45" },
    ],
    deposit: "$100 Booking Deposit",
    includes:
      "Digital invitation, tablecloths, paper plates, cups, napkins & cutlery, refillable water and juice box, food & cake time (order by parents).",
    addons: [
      "Themed loot bag — $11 per guest",
      "Face painting — $200",
      "Hair styling — $95",
    ],
    sections: [
      {
        title: "Spa Treatments",
        items: [
          "Mini mani & mini pedi on natural nails with bubbly soaking",
          "Lip glitter & gentle eyeliner application",
          "Hypoallergenic face & hair glitter",
          "Peel-on glitter tattoos",
        ],
      },
      {
        title: "DIY Sparkly-Slime Station",
        items: [
          "Non-toxic slime base, eco-glitter & mix-ins",
          "Airtight jars for take-home slime keepsakes",
          "Instructor-led slime-making guidance",
        ],
      },
    ],
    image: "/img/spa/step2.jpg",
  },
  {
    slug: "super-model-birthday",
    title: "Super Model Birthday",
    tagline:
      "Let your child shine at Hily's Sparkly Spa. This package includes spa pampering culminating in a costume dress-up and mini runway walk, for ages 5–12.",
    duration: "2 hours",
    pricing: [
      { label: "8-10 children", price: "$595+HST" },
      { label: "6-7 children", price: "$545+HST" },
      { label: "11-16 children (each)", price: "$45" },
    ],
    deposit: "$100 Booking Deposit",
    includes:
      "Digital invitation, tablecloths, paper plates, cups, napkins & cutlery, refillable water and juice box, food & cake time (order by parents).",
    addons: ["Themed loot bag — $11 per guest", "Face painting — $200"],
    sections: [
      {
        title: "Spa Treatments",
        items: [
          "Mini mani & mini pedi on natural nails with bubbly soaking",
          "Fresh-cucumber facial mask treatment",
          "Lip glitter & gentle eyeliner application",
        ],
      },
      {
        title: "Glam Extras",
        items: [
          "Hypoallergenic face & hair glitter",
          "Peel-on glitter tattoos",
          "Costume dress-up & mini runway walk",
        ],
      },
    ],
    image: "/img/spa/mini-duo-package.webp",
  },
  {
    slug: "canvas-birthday-party",
    title: "Canvas Birthday Party",
    tagline:
      "Perfect for ages 6–13, our 2-hour Canvas Birthday Party blends spa pampering with a step-by-step colorful canvas painting workshop. Kids leave pampered and proudly carrying home their own masterpiece.",
    duration: "2 hours",
    pricing: [
      { label: "8-10 children", price: "$595+HST" },
      { label: "6-7 children", price: "$545+HST" },
      { label: "11-24 children (each)", price: "$45" },
    ],
    deposit: "$100 Booking Deposit",
    includes:
      "Digital invitation, tablecloths, paper plates, cups, napkins & cutlery, refillable water and juice box, food & cake time (order by parents).",
    addons: [
      "Themed loot bag — $11 per guest",
      "Face painting — $200",
      "Hair styling — $95",
    ],
    sections: [
      {
        title: "Spa Treatments",
        items: [
          "Mini mani & mini pedi on natural nails with bubbly soaking",
          "Lip glitter & gentle eyeliner application",
          "Hypoallergenic face & hair glitter",
          "Peel-on glitter tattoos",
        ],
      },
      {
        title: "Art Workstation",
        items: [
          "8×10\" canvas per child, acrylic paints & brushes",
          "Instructor-led steps to create a vibrant painting",
          "Take-home your colorful canvas",
        ],
      },
    ],
    image: "/img/spa/gallary-5.jpg.jpg",
  },
];

export const daySpaPackages: PackageData[] = [
  {
    slug: "twinkly-day",
    title: "Twinkly Day",
    tagline:
      "Twinkly Day is our 45-60-minute mini spa for children ages 3–12. Each guest enjoys a gourmet cupcake & soft drink alongside a mini mani-pedi with hand-cream massage.",
    duration: "45-60 minutes",
    pricing: [
      { label: "1 child", price: "$55+HST" },
      { label: "2 children", price: "$95+HST" },
    ],
    sections: [
      {
        title: "Spa Treatments",
        items: [
          "Mini mani & mini pedi on natural nails with bubbly soaking",
          "Hand-cream massage for soft, hydrated hands",
          "Pick your nail polish for hands and feet",
        ],
      },
      {
        title: "Snacks & Drinks",
        items: [
          "One gourmet cupcake per child",
          "Choice of soft drink or fruit-infused water",
        ],
      },
    ],
    image: "/img/spa/day-spa-service.webp",
  },
  {
    slug: "sparkly-day",
    title: "Sparkly Day",
    tagline:
      "Sparkly Day is our 45-60 minute day spa for children ages 5–13, with mani-pedis, a fresh-cucumber facial mask, glitter makeup, and a peel-on glitter tattoo.",
    duration: "45-60 Minutes",
    pricing: [
      { label: "1 child", price: "$75+HST" },
      { label: "2 children", price: "$135+HST" },
    ],
    sections: [
      {
        title: "Spa Treatments",
        items: [
          "Mini mani & mini pedi on natural nails with bubbly soaking",
          "Hand-cream massage for soft, hydrated hands",
          "Fresh-cucumber facial mask",
          "Glitter makeup application",
        ],
      },
      {
        title: "Glitter Fun",
        items: ["Face glitter, hair glitter, glitter tattoo & makeup"],
      },
      {
        title: "Snacks & Drinks",
        items: [
          "One gourmet cupcake per child",
          "Choice of soft drink or fruit-infused water",
        ],
      },
    ],
    image: "/img/spa/gallary-3.jpg.jpg",
  },
  {
    slug: "super-shiny-day",
    title: "Super Shiny Day",
    tagline:
      "Super Shiny Day is our 45-60 minute day spa with sprinkle-infused mani-pedis, hand-cream massages, plus a gourmet cupcake and soft drink.",
    duration: "45-60 Minutes",
    pricing: [
      { label: "1 child", price: "$70+HST" },
      { label: "2 children", price: "$125+HST" },
    ],
    sections: [
      {
        title: "Spa Treatments",
        items: [
          "Mini mani & mini pedi on natural nails with bubbly soaking",
          "Hand-cream massage for soft, hydrated hands",
          "Sprinkle-infused polish accents",
        ],
      },
      {
        title: "Glitter Fun",
        items: [
          "Makeup",
          "Peel-on glitter tattoos",
          "Hypoallergenic face glitter & hair glitter accents",
        ],
      },
      {
        title: "Snacks & Drinks",
        items: [
          "One gourmet cupcake per child",
          "Choice of soft drink or fruit-infused water",
        ],
      },
    ],
    image: "/img/spa/gallary-4.jpg.jpg",
  },
  {
    slug: "hilys-sparkly-day",
    title: "Hily's Sparkly Day",
    tagline:
      "Hily's Sparkly Day is our 45-60 minute premium spa package for children ages 3-12 — fully supervised, with a take-home Sparkly loot bag.",
    duration: "45-60 minutes",
    pricing: [
      { label: "1 child", price: "$95+HST" },
      { label: "2 children", price: "$175+HST" },
    ],
    sections: [
      {
        title: "Spa Treatments",
        items: [
          "Mini mani & mini pedi on natural nails with bubbly soaking",
          "Hand-cream massage for soft, hydrated hands",
          "Face mask with cucumber",
          "Hypoallergenic face & hair glitter",
          "Peel-on glitter tattoos",
          "Hair styling",
        ],
      },
      {
        title: "Snacks & Keepsakes",
        items: [
          "Gourmet cupcake & soft drink per guest",
          "Take-home loot bag with sparkle surprises",
        ],
      },
    ],
    image: "/img/spa/gallary-6.jpg.jpg",
  },
  {
    slug: "special-one-me",
    title: "Special One & Me",
    tagline:
      "A great opportunity to spend quality time with someone special to you (mom, aunt, sister, grandmother) in our unique spa.",
    duration: "45-60 Minutes",
    pricing: [{ label: "Per parent–child duo", price: "$139+HST" }],
    sections: [
      {
        title: "What's Included",
        items: [
          "Mini mani & mini pedi on natural nails with bubbly soaking (natural nails only, no shellac)",
          "Hand-cream massage for soft, hydrated hands",
        ],
      },
      {
        title: "Glitter Glam",
        items: [
          "Hypoallergenic face glitter application",
          "Hair glitter accents",
          "Peel-on glitter tattoos",
        ],
      },
      {
        title: "Sweet Treats & Keepsakes",
        items: ["One gourmet cupcake & soft drink per person", "Take-home loot bag with sparkle"],
      },
    ],
    image: "/img/spa/mini-duo-package.webp",
  },
];

export function findPackage(
  packages: PackageData[],
  slug: string
): PackageData | undefined {
  return packages.find((pkg) => pkg.slug === slug);
}

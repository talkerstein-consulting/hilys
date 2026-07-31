export interface ArticleSection {
  heading: string;
  body: string;
}

export interface ArticleContent {
  slug: string;
  title: string;
  intro: string;
  teaser: string;
  sections: ArticleSection[];
}

export const articles: ArticleContent[] = [
  {
    slug: "the-top-5-birthday-trends-of-2026-and-which-one-fits-your-kids-vibe",
    title: "The Top 5 Birthday Trends of 2026 (And Which One Fits Your Kid's Vibe)",
    intro:
      "Party themes come and go, but a few clear favorites have emerged this year. Here's what Vaughan families are booking most, and how to match one to your child's personality.",
    teaser:
      "A quick roundup of the birthday themes families are booking most this year — and how to pick the one that matches your child's personality.",
    sections: [
      {
        heading: "1. Hands-On Craft Stations",
        body: "Tie-dye, slime, and canvas painting have become go-to activities because they double as entertainment and take-home keepsakes. If your child loves getting a little messy and showing off something they made, a craft-based party is the easiest crowd-pleaser.",
      },
      {
        heading: "2. Glam & Runway Themes",
        body: "For kids who love getting dressed up, a spa-and-makeover party that ends in a costume reveal or mini runway walk is a natural fit. It gives everyone a moment in the spotlight without needing a big stage production.",
      },
      {
        heading: "3. Classic Costume Celebrations",
        body: "Princess and dress-up themes remain a steady favorite for younger guests, especially when paired with simple pampering like a mini mani-pedi. It's low-key enough for a wide age range while still feeling special.",
      },
      {
        heading: "4. Smaller, Midweek Gatherings",
        body: "Not every celebration needs a big guest list. More families are opting for smaller midweek get-togethers that keep costs down while still feeling like an event, especially for kids who prefer a tighter friend group.",
      },
      {
        heading: "5. Shared Parent-Child Experiences",
        body: "Duo spa packages built for a parent and child to enjoy together are on the rise — less about the guest count and more about carving out dedicated one-on-one time.",
      },
    ],
  },
  {
    slug: "indoor-party-ideas-2026-why-bubble-topia-grwm-spas-rule",
    title: "Indoor Party Ideas 2026: Why Bubble-Topia & GRWM Spas Rule",
    intro:
      "Weather doesn't have to dictate the fun. Here's why indoor, weather-proof party formats are winning over Vaughan parents this year.",
    teaser:
      "Weather-proof party ideas that keep kids entertained indoors, from bubble-filled play to get-ready-with-me spa setups.",
    sections: [
      {
        heading: "No More Weather Gambles",
        body: "Outdoor parties depend on cooperative weather, which is a lot to ask in a Canadian spring or winter. Booking an indoor venue removes that variable entirely — no backup plan needed if it rains, snows, or gets too cold.",
      },
      {
        heading: 'The Rise of "Get Ready With Me" Spas',
        body: "GRWM-style spa parties — where kids get pampered together before a themed reveal — have become popular because they mirror a format kids already enjoy watching online, but turn it into a real, hands-on group activity.",
      },
      {
        heading: "Built-In Entertainment, Zero Setup Stress",
        body: "An indoor spa or activity-based party comes with the entertainment already built in: stations, staff, and supplies are ready to go, so parents aren't scrambling to organize games or rent equipment.",
      },
      {
        heading: "Consistent Experience Every Time",
        body: "Because everything happens in a controlled indoor space, the experience is consistent regardless of the season — which makes it easier to plan far in advance without worrying about last-minute changes.",
      },
    ],
  },
  {
    slug: "magical-kids-nail-art-at-hilys-sparkly-spa-vaughans-best-mani-pedi-packages",
    title: "Magical Kids Nail Art at Hily's Sparkly Spa: Vaughan's Best Mani-Pedi Packages",
    intro:
      "A closer look at our natural-nail mani-pedi treatments and why they're the most requested add-on across every package.",
    teaser:
      "A look at our natural-nail mani-pedi options and what makes them a favorite add-on for birthday parties and day spa visits alike.",
    sections: [
      {
        heading: "Natural Nails, Always",
        body: "Every mani-pedi at Hily's Sparkly Spa uses natural nail polish only — no shellac or gel — so little hands stay healthy while still getting a fun pop of color.",
      },
      {
        heading: "A Gentle, Relaxing Ritual",
        body: "Each treatment starts with a bubbly soak and a hand-cream massage before polish goes on, turning a simple manicure into a calming mini-spa moment kids look forward to.",
      },
      {
        heading: "Color Choices Kids Love",
        body: "Guests get to pick their own polish shade for both hands and feet, which is often the highlight — picking their color is half the fun before the pampering even starts.",
      },
      {
        heading: "Works With Any Package",
        body: "Whether it's a quick Twinkly Day visit or a full Birthday Party Blowout, the mani-pedi is a constant — the one treatment every guest experiences no matter which package you choose.",
      },
    ],
  },
  {
    slug: "kids-birthday-party-ideas-toronto",
    title: "Kids Birthday Party Ideas Toronto",
    intro:
      "Planning a party in the greater Toronto area? Here's what to think through before you book a venue, theme, or date.",
    teaser:
      "Planning a party in the Toronto area? Here's what to consider when choosing a venue, theme, and timing for your child's celebration.",
    sections: [
      {
        heading: "Start With Guest Count",
        body: "Before picking a theme, nail down roughly how many kids you're inviting. Guest count affects venue size, pricing tiers, and how hands-on any activity station can realistically be.",
      },
      {
        heading: "Pick a Theme Your Child Actually Wants",
        body: "It's tempting to plan the party you would have loved as a kid, but the best parties reflect what your child is into right now — whether that's a specific craft, a dress-up moment, or just time with friends.",
      },
      {
        heading: "Book Early for Weekend Slots",
        body: "Weekend party slots fill up fastest, especially around spring and early summer birthdays. If your date is flexible, a midweek slot often opens up more availability and can come with lower per-guest pricing.",
      },
      {
        heading: "Ask What's Actually Included",
        body: "Not all party packages include the same things. Before booking anywhere in the GTA, confirm what's covered — tableware, food service, loot bags, and cleanup — so there are no surprises on the day.",
      },
    ],
  },
  {
    slug: "sparkle-shine-your-ultimate-guide-to-girls-birthday-spa-parties",
    title: "Sparkle & Shine: Your Ultimate Guide to Girls' Birthday Spa Parties",
    intro:
      "Everything to consider before booking a spa-themed birthday, from picking the right package size to timing the day.",
    teaser:
      "Everything to know before booking a spa-themed birthday — from what's included to how to pick the right package size.",
    sections: [
      {
        heading: "Match the Package to the Age Group",
        body: "Younger guests tend to enjoy simpler pampering and costume play, while older kids often prefer a workshop element like tie-dye or slime-making layered on top of the spa treatments. Picking a package suited to the average age in the group keeps everyone engaged.",
      },
      {
        heading: "Plan Around a 2-Hour Window",
        body: "Most spa birthday packages run about two hours — enough time for treatments, an activity, and food and cake, without dragging on so long that younger guests lose steam.",
      },
      {
        heading: "Decide on Add-Ons Early",
        body: "Extras like face painting, hair styling, or themed loot bags are easy to bolt on, but deciding on them ahead of time (rather than day-of) makes for smoother planning and pricing.",
      },
      {
        heading: "Let the Venue Handle Cleanup",
        body: "One of the biggest perks of a spa party over a DIY at-home celebration is that decor, supervision, and cleanup are handled for you — leaving you free to actually enjoy watching your child celebrate.",
      },
    ],
  },
  {
    slug: "in-my-era-ultimate-swiftie-party-guide",
    title: "In My Era: Ultimate Swiftie Party Guide",
    intro:
      "Fan-inspired birthday parties are having a moment. Here's how to build one around friendship bracelets, glitter, and costume changes.",
    teaser:
      "A fan-inspired party guide built around friendship bracelets, glitter, and costume changes for the ultimate Swiftie celebration.",
    sections: [
      {
        heading: "Friendship Bracelets as a Party Favor",
        body: "Handmade friendship bracelets have become a party staple — easy for kids to assemble at a craft table and a natural fit as a take-home keepsake.",
      },
      {
        heading: "Sparkle and Sequins Set the Mood",
        body: "Glitter makeup, sequins, and shimmer accessories are an easy way to bring a glam, celebratory feel to any themed party without needing an elaborate setup.",
      },
      {
        heading: '"Era" Costume Changes',
        body: "Letting guests switch outfits or accessories partway through — think a dress-up moment paired with a mini runway walk — gives the party a sense of occasion and a great photo opportunity.",
      },
      {
        heading: "Pair It With a Pampering Package",
        body: "A glam-themed party pairs naturally with our Super Model Birthday package, combining mani-pedis, glitter, and a costume reveal into one celebration.",
      },
    ],
  },
];

export function findArticle(slug: string): ArticleContent | undefined {
  return articles.find((article) => article.slug === slug);
}

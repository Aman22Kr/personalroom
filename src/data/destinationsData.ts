export interface Destination {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  travelTimeFromMumbai: string;
  travelTimeFromPune: string;
  bestSeason: string;
  heroImage: string;
  villaCount: number;
  highlights: string[];
}

export const DESTINATIONS_DATA: Destination[] = [
  {
    slug: 'lonavala',
    name: 'Lonavala',
    tagline: 'Sahyadri mist, waterfalls, and cliffside infinity pools',
    description: 'The crowning jewel of weekend getaways between Mumbai and Pune. Lonavala is celebrated for its fog-kissed peaks, lush monsoon waterfalls, viewpoints, and secluded luxury villas tucked within private hills.',
    travelTimeFromMumbai: '1.8 Hours (84 km via Mumbai-Pune Expressway)',
    travelTimeFromPune: '1.2 Hours (65 km via Expressway)',
    bestSeason: 'June to February (Spectacular Monsoons & Pleasant Winters)',
    heroImage: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80',
    villaCount: 18,
    highlights: ['Tiger’s Leap & Bhushi Dam', 'Private Heated & Infinity Pools', 'Tiger Point Sunset Chikki Stalls']
  },
  {
    slug: 'alibaug',
    name: 'Alibaug',
    tagline: 'Sun-drenched coastal coconut groves & beachfront estates',
    description: 'Just a 45-minute luxury Ro-Ro ferry crossing from South Mumbai, Alibaug is India’s Hamptons. Featuring pristine beaches like Awas, Kihim, and Mandwa, coastal Konkani seafood, and Balinese-style private pool bungalows.',
    travelTimeFromMumbai: '45 Mins (Ro-Ro Ferry Mandwa) / 2.5 Hours drive',
    travelTimeFromPune: '3.2 Hours (140 km)',
    bestSeason: 'October to May (Sunny beach weather & gentle sea breezes)',
    heroImage: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=80',
    villaCount: 14,
    highlights: ['Awas & Kihim Beaches', 'Fresh Surmai & Prawn Thalis', 'Water Sports at Mandwa']
  },
  {
    slug: 'karjat',
    name: 'Karjat',
    tagline: 'Riverside timber chalets and scenic Sahyadri valleys',
    description: 'Surrounded by the Ulhas River and dramatic mountain valleys, Karjat provides tranquil seclusion. Perfect for trekking enthusiasts, farmstay lovers, and A-frame architecture aficionados.',
    travelTimeFromMumbai: '1.5 Hours (72 km)',
    travelTimeFromPune: '2.0 Hours (98 km)',
    bestSeason: 'Year-round, especially mesmerizing in Monsoons (July-Oct)',
    heroImage: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200&q=80',
    villaCount: 12,
    highlights: ['Bhivpuri & Kondana Waterfalls', 'River-edge bonfires', 'Farm-to-table organic dining']
  },
  {
    slug: 'goa',
    name: 'Goa',
    tagline: 'Heritage Indo-Portuguese mansions, private pools, and tropical susegad',
    description: 'From the hip cafe scenes of Assagao and Siolim to quiet southern beaches, our private Goa villas blend old-world Portuguese grandeur with modern private pool luxury.',
    travelTimeFromMumbai: '1 Hour Flight / Overnight luxury sleeper',
    travelTimeFromPune: '1 Hour Flight / 8 Hours scenic drive',
    bestSeason: 'October to April (Vibrant nightlife, sunny beaches & music festivals)',
    heroImage: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
    villaCount: 22,
    highlights: ['Assagao & Anjuna culinary scene', 'Private 40-foot swimming pools', 'In-house cocktail concierge']
  },
  {
    slug: 'mahabaleshwar',
    name: 'Mahabaleshwar & Panchgani',
    tagline: 'Crisp pine air, strawberry farms, and colonial stone manors',
    description: 'High in the Western Ghats at 1,350 meters altitude, Mahabaleshwar and Panchgani boast perennial cool breezes, strawberry picking gardens, and vintage British-era colonial stone bungalows.',
    travelTimeFromMumbai: '4.5 Hours (250 km)',
    travelTimeFromPune: '2.5 Hours (115 km)',
    bestSeason: 'October to June (Strawberry harvest & refreshing mountain climate)',
    heroImage: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
    villaCount: 10,
    highlights: ['Venna Lake Boating', 'Fresh Strawberry & Cream', 'Mapro Garden & Table Land']
  },
  {
    slug: 'igatpuri',
    name: 'Igatpuri',
    tagline: 'Dense Sahyadri fogs, cliffside views, and spiritual tranquility',
    description: 'Famous for the global Vipassana Academy, Bhavali Dam, and highest peaks like Kalsubai, Igatpuri offers pure mountain tranquility only two hours from Mumbai along the Nashik corridor.',
    travelTimeFromMumbai: '2.2 Hours (120 km via Samruddhi / Nashik Highway)',
    travelTimeFromPune: '4.0 Hours (210 km)',
    bestSeason: 'July to March (Lush green landscapes & cold winters)',
    heroImage: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80',
    villaCount: 8,
    highlights: ['Bhavali Dam Lake', 'Kalsubai Peak Trekking', 'Vipassana Meditation Grounds']
  },
  {
    slug: 'khandala',
    name: 'Khandala',
    tagline: 'Dramatic ravines, Duke’s Nose, and luxury hill estates',
    description: 'Lying right at the crest of the Bhor Ghat, Khandala is known for deep valleys, cool mountain air, and high-capacity private luxury estates built for celebration and group reunions.',
    travelTimeFromMumbai: '1.5 Hours (78 km)',
    travelTimeFromPune: '1.2 Hours (68 km)',
    bestSeason: 'June to February',
    heroImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
    villaCount: 9,
    highlights: ['Duke’s Nose Cliff', 'Amrutanjan Point', 'Heated private pools']
  },
  {
    slug: 'udaipur',
    name: 'Udaipur',
    tagline: 'Lakeside palaces, royal jharokhas, and timeless Mewari hospitality',
    description: 'The Venice of the East. Experience living like royalty in heritage lakefront bungalows overlooking Lake Pichola, Fatehsagar, and the majestic Aravalli hills.',
    travelTimeFromMumbai: '1.1 Hours Flight (Direct)',
    travelTimeFromPune: '1.2 Hours Flight',
    bestSeason: 'September to March (Pleasant royal winter festivities)',
    heroImage: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
    villaCount: 6,
    highlights: ['Lake Pichola private boat tours', 'City Palace & Jagmandir', 'Rajasthani Royal Dining']
  }
];

export interface GuestReview {
  id: string;
  author: string;
  city: string;
  date: string;
  rating: number;
  comment: string;
}

export interface Villa {
  id: string;
  title: string;
  slug: string;
  destination: string;
  destinationSlug: string;
  bhk: number;
  bathrooms: number;
  maxGuests: number;
  pricePerNight: number;
  originalPrice: number;
  rating: number;
  reviewCount: number;
  images: string[];
  tagline: string;
  description: string;
  amenities: string[];
  highlights: string[];
  locationDetails: {
    address: string;
    distanceFromMumbai: string;
    distanceFromPune: string;
    nearestLandmark: string;
  };
  featured: boolean;
  collection: 'pool-villas' | 'weekend-getaways' | 'pet-friendly' | 'luxury-estates';
  hasPrivatePool: boolean;
  isPetFriendly: boolean;
  hasCaretaker: boolean;
  hasChefAvailable: boolean;
  reviews: GuestReview[];
  rules: string[];
}

export const VILLAS_DATA: Villa[] = [
  {
    id: 'hillcrest-villa-lonavala',
    title: 'Hillcrest Villa & Infinity Pool',
    slug: 'hillcrest-villa-lonavala',
    destination: 'Lonavala',
    destinationSlug: 'lonavala',
    bhk: 4,
    bathrooms: 5,
    maxGuests: 16,
    pricePerNight: 24500,
    originalPrice: 28500,
    rating: 4.94,
    reviewCount: 64,
    images: [
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80'
    ],
    tagline: 'Panoramic Sahyadri views with a private temperature-regulated infinity pool',
    description: 'Perched atop the secluded green hills of Tungarli in Lonavala, Hillcrest Villa is an architectural masterpiece designed for peaceful relaxation. Boasting 4 expansive ensuite bedrooms, floor-to-ceiling glass windows framing misty Sahyadri valleys, and a sprawling infinity pool, this villa offers the ultimate luxury retreat for families and groups.',
    amenities: [
      'Private Swimming Pool',
      'Lush Lawn / Garden',
      'Dedicated Caretaker',
      'Chef on Demand / Meals Available',
      'Air Conditioning',
      'High-Speed Wi-Fi',
      'Power Backup / Generator',
      'Mountain View',
      'Barbeque Setup',
      'Indoor Board Games',
      'Smart TV & Sound System'
    ],
    highlights: [
      'Private temperature-maintained infinity pool overlooking fog-kissed valleys',
      'Full-time live-in butler and cook skilled in authentic Maharashtrian dishes',
      'Sprawling manicured lawn ideal for stargazing and evening high tea',
      '100% private gated compound with high security'
    ],
    locationDetails: {
      address: 'Tungarli Ridge, Off Old Mumbai-Pune Highway, Lonavala, Maharashtra 410401',
      distanceFromMumbai: '84 km (Approx. 1.8 hrs via Expressway)',
      distanceFromPune: '65 km (Approx. 1.2 hrs via Expressway)',
      nearestLandmark: 'Near Tungarli Lake Dam & Wax Museum'
    },
    featured: true,
    collection: 'pool-villas',
    hasPrivatePool: true,
    isPetFriendly: true,
    hasCaretaker: true,
    hasChefAvailable: true,
    reviews: [
      {
        id: 'rev-1',
        author: 'Rohan Mehta',
        city: 'Mumbai',
        date: 'October 2026',
        rating: 5,
        comment: 'Outstanding stay! The caretaker Dattatray and his wife made incredible home-cooked chicken sukka and bhakri. The pool was crystal clear and the sunrise view from the master deck is truly detoxifying.'
      },
      {
        id: 'rev-2',
        author: 'Ananya Deshmukh',
        city: 'Pune',
        date: 'September 2026',
        rating: 5,
        comment: 'We celebrated our parents 30th anniversary here with 14 family members. Ample space, spotless bathrooms, and pure peace away from city traffic.'
      }
    ],
    rules: [
      'Check-in: 2:00 PM | Check-out: 11:00 AM',
      'No loud outdoor music after 10:00 PM in accordance with local regulations',
      'Refundable security deposit of ₹5,000 required at check-in',
      'Pets welcome in garden and living areas with prior notice'
    ]
  },
  {
    id: 'coral-reef-villa-alibaug',
    title: 'Coral Reef Beach Villa',
    slug: 'coral-reef-villa-alibaug',
    destination: 'Alibaug',
    destinationSlug: 'alibaug',
    bhk: 3,
    bathrooms: 4,
    maxGuests: 12,
    pricePerNight: 21000,
    originalPrice: 25000,
    rating: 4.91,
    reviewCount: 52,
    images: [
      'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80'
    ],
    tagline: 'Coconut grove coastal villa with private lap pool just 5 minutes from Awas Beach',
    description: 'Embrace coastal serenity at Coral Reef Villa in Alibaug. Surrounded by swaying betel nut and coconut trees, this Balinese-inspired bungalow features an open-concept living pavilion, turquoise lap pool, and breezy outdoor dining verandas. Reachable via a 45-minute scenic Ro-Ro ferry from Mumbai.',
    amenities: [
      'Private Swimming Pool',
      'Lush Lawn / Garden',
      'Beachfront / Close to Beach',
      'Dedicated Caretaker',
      'Chef on Demand / Meals Available',
      'Air Conditioning',
      'High-Speed Wi-Fi',
      'Power Backup / Generator',
      'Pet Friendly',
      'Barbeque Setup'
    ],
    highlights: [
      'Only 5 minutes stroll to quiet Awas Beach',
      'Fresh catch coastal Konkani seafood cooked fresh on request',
      'Sun loungers by the open-air pool surrounded by tropical palm gardens',
      'Quick and easy transit from Mandwa Jetty (12 mins drive)'
    ],
    locationDetails: {
      address: 'Awas Road, Near Mandwa Jetty, Alibaug, Maharashtra 402201',
      distanceFromMumbai: '45 mins via Ro-Ro Ferry (Bhaucha Dhakka to Mandwa) + 12 mins drive',
      distanceFromPune: '140 km (Approx. 3.2 hrs via Pen / Khopoli)',
      nearestLandmark: 'Awas Beach Entrance'
    },
    featured: true,
    collection: 'weekend-getaways',
    hasPrivatePool: true,
    isPetFriendly: true,
    hasCaretaker: true,
    hasChefAvailable: true,
    reviews: [
      {
        id: 'rev-3',
        author: 'Siddharth Roy',
        city: 'Mumbai',
        date: 'October 2026',
        rating: 5,
        comment: 'The Ro-Ro ferry made bringing our car and golden retriever effortless. The caretaker served the freshest Surmai fry and solkadhi!'
      }
    ],
    rules: [
      'Check-in: 2:00 PM | Check-out: 11:00 AM',
      'Smoking prohibited inside bedrooms; permitted in open lawn and balcony',
      'Pool closes for filtration at 11:00 PM'
    ]
  },
  {
    id: 'triangle-villa-karjat',
    title: 'Triangle A-Frame Forest Villa',
    slug: 'triangle-villa-karjat',
    destination: 'Karjat',
    destinationSlug: 'karjat',
    bhk: 3,
    bathrooms: 3,
    maxGuests: 10,
    pricePerNight: 18500,
    originalPrice: 22000,
    rating: 4.88,
    reviewCount: 39,
    images: [
      'https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80'
    ],
    tagline: 'Iconic triangular glass architecture tucked within Karjat valley greenery',
    description: 'Escape into nature at the iconic Triangle Villa in Karjat. Featuring striking Nordic A-frame timber architecture with double-height glass gables, a private sunken plunge pool, and a private stream flowing alongside the rear garden during monsoons, this bungalow provides a one-of-a-kind getaway.',
    amenities: [
      'Private Swimming Pool',
      'Lush Lawn / Garden',
      'Mountain View',
      'Dedicated Caretaker',
      'Chef on Demand / Meals Available',
      'Air Conditioning',
      'High-Speed Wi-Fi',
      'Power Backup / Generator',
      'Bonfire Setup',
      'Pet Friendly'
    ],
    highlights: [
      'Distinctive A-frame architectural design featured in top lifestyle magazines',
      'Natural stream bank in the backyard during lush monsoon and winter seasons',
      'Evening campfire and barbecue under starlit skies',
      'Fully equipped kitchen with warm live-in housekeeping'
    ],
    locationDetails: {
      address: 'Kashele-Khandas Road, Karjat, Maharashtra 410201',
      distanceFromMumbai: '72 km (Approx. 1.5 hrs)',
      distanceFromPune: '98 km (Approx. 2 hrs)',
      nearestLandmark: 'Near Bhivpuri Waterfalls'
    },
    featured: true,
    collection: 'weekend-getaways',
    hasPrivatePool: true,
    isPetFriendly: true,
    hasCaretaker: true,
    hasChefAvailable: true,
    reviews: [
      {
        id: 'rev-4',
        author: 'Pooja Kulkarni',
        city: 'Thane',
        date: 'September 2026',
        rating: 5,
        comment: 'Pure peace. The A-frame glass wall overlooking the morning mist is straight out of a Swiss chalet dream.'
      }
    ],
    rules: [
      'Check-in: 2:00 PM | Check-out: 11:00 AM',
      'No diving in plunge pool',
      'Music within ambient limits after 10:00 PM'
    ]
  },
  {
    id: 'zen-villa-goa',
    title: 'Zen Estate & Heritage Pool Bungalow',
    slug: 'zen-villa-goa',
    destination: 'Goa',
    destinationSlug: 'goa',
    bhk: 5,
    bathrooms: 6,
    maxGuests: 18,
    pricePerNight: 38000,
    originalPrice: 45000,
    rating: 4.97,
    reviewCount: 78,
    images: [
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200&q=80'
    ],
    tagline: 'Restored Portuguese luxury estate with Olympic-size private pool in Assagao',
    description: 'Nestled in Goa’s most coveted neighborhood of Assagao, Zen Estate is a lovingly restored 150-year-old Indo-Portuguese mansion. High vaulted wooden ceilings, antique brass chandeliers, modern en-suite bathrooms, a private 40-foot pool, and lush mango orchards create an unforgettable holiday for large families and milestone celebrations.',
    amenities: [
      'Private Swimming Pool',
      'Lush Lawn / Garden',
      'Jacuzzi',
      'Dedicated Caretaker',
      'Chef on Demand / Meals Available',
      'Air Conditioning',
      'High-Speed Wi-Fi',
      'Power Backup / Generator',
      'Barbeque Setup',
      'Pet Friendly',
      'Smart TV & Sound System'
    ],
    highlights: [
      'Expansive 40-foot private pool with submerged sun loungers and jacuzzi jets',
      'Walking distance to top Assagao cafes and fine dining establishments',
      'Dedicated estate manager, housekeepers, and gourmet breakfast included',
      '5 large royal suites with handcrafted four-poster beds'
    ],
    locationDetails: {
      address: 'Badem Road, Assagao, North Goa, Goa 403507',
      distanceFromMumbai: 'MOPA Airport: 28 km (35 mins) | Dabolim: 42 km (55 mins)',
      distanceFromPune: 'Direct highway or flight connection',
      nearestLandmark: 'Close to Gunpowder Restaurant & St. Michael Church'
    },
    featured: true,
    collection: 'luxury-estates',
    hasPrivatePool: true,
    isPetFriendly: true,
    hasCaretaker: true,
    hasChefAvailable: true,
    reviews: [
      {
        id: 'rev-5',
        author: 'Vikramaditya Singhania',
        city: 'Delhi',
        date: 'October 2026',
        rating: 5,
        comment: 'Easily the top luxury villa in North Goa. The restoration preserves the Portuguese soul while offering five-star amenities.'
      }
    ],
    rules: [
      'Check-in: 3:00 PM | Check-out: 11:00 AM',
      'Gourmet breakfast prepared fresh every morning between 8:30 AM to 11:00 AM',
      'Government ID mandatory for all staying guests'
    ]
  },
  {
    id: 'strawberry-hill-villa-mahabaleshwar',
    title: 'Strawberry Hill Country Manor',
    slug: 'strawberry-hill-villa-mahabaleshwar',
    destination: 'Mahabaleshwar',
    destinationSlug: 'mahabaleshwar',
    bhk: 4,
    bathrooms: 4,
    maxGuests: 14,
    pricePerNight: 22500,
    originalPrice: 26000,
    rating: 4.89,
    reviewCount: 45,
    images: [
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80'
    ],
    tagline: 'Colonial stone bungalow overlooking private strawberry gardens in Panchgani-Mahabaleshwar',
    description: 'Wake up to the scent of fresh pine and blooming strawberry farms. Strawberry Hill Manor is an authentic stone-crafted retreat in Mahabaleshwar. Features a warm indoor fireplace, wide colonial verandah for evening tea, sprawling lawns, and panoramic views of the Venna lake valley.',
    amenities: [
      'Lush Lawn / Garden',
      'Mountain View',
      'Indoor Fireplace',
      'Dedicated Caretaker',
      'Chef on Demand / Meals Available',
      'Air Conditioning & Heating',
      'High-Speed Wi-Fi',
      'Power Backup / Generator',
      'Pet Friendly',
      'Indoor Board Games'
    ],
    highlights: [
      'Private strawberry picking tour in the villa grounds during season',
      'Authentic stone fireplace in the living room for chilly hill station evenings',
      'Breathtaking sunrise viewpoint directly accessible from the back lawn',
      'Warm local caretaker known for serving hot Pithla Bhakri and strawberry cream'
    ],
    locationDetails: {
      address: 'Panchgani-Mahabaleshwar Road, Near Lingmala Falls, Mahabaleshwar, Maharashtra 412806',
      distanceFromMumbai: '250 km (Approx. 4.5 hrs)',
      distanceFromPune: '115 km (Approx. 2.5 hrs)',
      nearestLandmark: 'Lingmala Waterfall Gate'
    },
    featured: false,
    collection: 'weekend-getaways',
    hasPrivatePool: false,
    isPetFriendly: true,
    hasCaretaker: true,
    hasChefAvailable: true,
    reviews: [
      {
        id: 'rev-6',
        author: 'Natasha Verma',
        city: 'Mumbai',
        date: 'October 2026',
        rating: 5,
        comment: 'The crisp hill air and cozy fireplace made our family trip magical. The strawberry farm right in front was a huge hit with the kids.'
      }
    ],
    rules: [
      'Check-in: 2:00 PM | Check-out: 11:00 AM',
      'Fireplace wood provided for 1 complimentary evening session',
      'Quiet hours from 10:30 PM'
    ]
  },
  {
    id: 'mist-haven-villa-igatpuri',
    title: 'Mist Haven Glass Villa',
    slug: 'mist-haven-villa-igatpuri',
    destination: 'Igatpuri',
    destinationSlug: 'igatpuri',
    bhk: 3,
    bathrooms: 3,
    maxGuests: 10,
    pricePerNight: 16500,
    originalPrice: 19500,
    rating: 4.86,
    reviewCount: 31,
    images: [
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?auto=format&fit=crop&w=1200&q=80'
    ],
    tagline: 'Modern cliffside bungalow overlooking fog-covered Kalsubai peaks and Bhavali Dam',
    description: 'Igatpuri’s premier fog retreat. Mist Haven Glass Villa features cantilevered balconies hanging over the emerald Sahyadri hills, an intimate plunge pool, and lush manicured lawns that receive rolling clouds even in afternoon hours. Ideal for meditation, writing retreats, and peaceful gatherings.',
    amenities: [
      'Private Swimming Pool',
      'Lush Lawn / Garden',
      'Mountain View',
      'Dedicated Caretaker',
      'Chef on Demand / Meals Available',
      'Air Conditioning',
      'High-Speed Wi-Fi',
      'Power Backup / Generator',
      'Bonfire Setup'
    ],
    highlights: [
      'Direct unobstructed view of cloud formations drifting over the mountains',
      'Private plunge pool built right onto the scenic wooden deck',
      'Close to Vipassana International Academy and Camel Valley',
      'Homely satvik and North Indian meal menus crafted fresh'
    ],
    locationDetails: {
      address: 'Bhavali Dam Road, Near Manas Resort, Igatpuri, Maharashtra 422403',
      distanceFromMumbai: '120 km (Approx. 2.2 hrs via Nashik Expressway)',
      distanceFromPune: '210 km (Approx. 4 hrs)',
      nearestLandmark: 'Bhavali Dam Water Body'
    },
    featured: false,
    collection: 'pool-villas',
    hasPrivatePool: true,
    isPetFriendly: false,
    hasCaretaker: true,
    hasChefAvailable: true,
    reviews: [
      {
        id: 'rev-7',
        author: 'Sameer Joshi',
        city: 'Nashik',
        date: 'September 2026',
        rating: 5,
        comment: 'Peaceful beyond words. Waking up to clouds floating straight into the balcony was unforgettable.'
      }
    ],
    rules: [
      'Check-in: 2:00 PM | Check-out: 11:00 AM',
      'Vegetarian and non-vegetarian food allowed; cook can prepare local meals'
    ]
  },
  {
    id: 'sea-breeze-villa-alibaug',
    title: 'Sea Breeze Coastal Haven',
    slug: 'sea-breeze-villa-alibaug',
    destination: 'Alibaug',
    destinationSlug: 'alibaug',
    bhk: 4,
    bathrooms: 5,
    maxGuests: 15,
    pricePerNight: 27500,
    originalPrice: 32000,
    rating: 4.95,
    reviewCount: 42,
    images: [
      'https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80'
    ],
    tagline: 'Modern Mediterranean style luxury villa with private pool near Kihim Beach',
    description: 'Designed in pristine whitewashed Mediterranean architecture, Sea Breeze Villa is a sanctuary for discerning holidaymakers. Complete with a private azure pool, lush bougainvillea trellises, shaded poolside cabanas, and custom coastal culinary service.',
    amenities: [
      'Private Swimming Pool',
      'Lush Lawn / Garden',
      'Beachfront / Close to Beach',
      'Dedicated Caretaker',
      'Chef on Demand / Meals Available',
      'Air Conditioning',
      'High-Speed Wi-Fi',
      'Power Backup / Generator',
      'Barbeque Setup',
      'Pet Friendly'
    ],
    highlights: [
      'Private poolside cabana with Moroccan lanterns and outdoor sound system',
      'Only 8 minutes from clean Kihim Beach',
      'Complimentary evening tea and coastal snacks'
    ],
    locationDetails: {
      address: 'Kihim Beach Road, Chondi, Alibaug, Maharashtra 402201',
      distanceFromMumbai: '15 mins from Mandwa Jetty',
      distanceFromPune: '135 km',
      nearestLandmark: 'Chondi Naka'
    },
    featured: true,
    collection: 'pool-villas',
    hasPrivatePool: true,
    isPetFriendly: true,
    hasCaretaker: true,
    hasChefAvailable: true,
    reviews: [
      {
        id: 'rev-8',
        author: 'Kavita Nair',
        city: 'Mumbai',
        date: 'October 2026',
        rating: 5,
        comment: 'The villa exceeded every expectation. Spotless linen, huge pool, and delicious breakfast.'
      }
    ],
    rules: [
      'Check-in: 2:00 PM | Check-out: 11:00 AM',
      'Pets allowed with prior registration'
    ]
  },
  {
    id: 'cloud9-estate-khandala',
    title: 'Cloud 9 Valley View Estate',
    slug: 'cloud9-estate-khandala',
    destination: 'Khandala',
    destinationSlug: 'khandala',
    bhk: 5,
    bathrooms: 6,
    maxGuests: 20,
    pricePerNight: 34000,
    originalPrice: 40000,
    rating: 4.96,
    reviewCount: 56,
    images: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80'
    ],
    tagline: 'Expansive private hill estate with heated swimming pool and amphitheater lawn',
    description: 'An elite private compound overlooking Duke’s Nose and the Khandala Ghats. Cloud 9 Estate features 5 cavernous master suites, private heated swimming pool, indoor billiards and table tennis lounge, and an amphitheater lawn designed for corporate retreats and family reunions.',
    amenities: [
      'Private Swimming Pool',
      'Lush Lawn / Garden',
      'Mountain View',
      'Dedicated Caretaker',
      'Chef on Demand / Meals Available',
      'Air Conditioning',
      'High-Speed Wi-Fi',
      'Power Backup / Generator',
      'Indoor Board Games',
      'Barbeque Setup'
    ],
    highlights: [
      'Heated private swimming pool usable in all seasons',
      'Private games room with 8-ball billiards and table tennis',
      'Caretaker team of 3 offering round-the-clock tea and concierge service',
      'Accommodates up to 20 guests comfortably'
    ],
    locationDetails: {
      address: 'Kune Village, Near Dukes Nose Viewpoint, Khandala, Maharashtra 410301',
      distanceFromMumbai: '78 km (1.5 hrs)',
      distanceFromPune: '68 km (1.2 hrs)',
      nearestLandmark: 'Khandala Railway Station & Dukes Retreat'
    },
    featured: true,
    collection: 'luxury-estates',
    hasPrivatePool: true,
    isPetFriendly: false,
    hasCaretaker: true,
    hasChefAvailable: true,
    reviews: [
      {
        id: 'rev-9',
        author: 'Arunav Singhal',
        city: 'Mumbai',
        date: 'October 2026',
        rating: 5,
        comment: 'We hosted our company leadership retreat here. Perfect WiFi, great food, and plenty of space for discussions.'
      }
    ],
    rules: [
      'Check-in: 2:00 PM | Check-out: 11:00 AM',
      'Security deposit ₹10,000 for large groups'
    ]
  },
  {
    id: 'royal-mewar-udaipur',
    title: 'Royal Mewar Lakefront Bungalow',
    slug: 'royal-mewar-udaipur',
    destination: 'Udaipur',
    destinationSlug: 'udaipur',
    bhk: 4,
    bathrooms: 4,
    maxGuests: 12,
    pricePerNight: 29000,
    originalPrice: 35000,
    rating: 4.93,
    reviewCount: 38,
    images: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80'
    ],
    tagline: 'Regal Rajasthani jharokhas, courtyards, and rooftop pool overlooking Lake Pichola',
    description: 'Immerse yourself in royal heritage at personalroom’s Royal Mewar Bungalow in Udaipur. Hand-carved sandstone jharokhas, a central cooling courtyard with water fountain, and a rooftop plunge pool gazing directly across the sparkling waters of Lake Pichola.',
    amenities: [
      'Private Swimming Pool',
      'Lake View',
      'Dedicated Caretaker',
      'Chef on Demand / Meals Available',
      'Air Conditioning & Heating',
      'High-Speed Wi-Fi',
      'Power Backup / Generator'
    ],
    highlights: [
      'Rooftop sunset terrace with private plunge pool overlooking City Palace & Lake',
      'Authentic Mewari royal thali prepared by private resident chef',
      'Private boat ride pickup can be arranged from nearby jetty'
    ],
    locationDetails: {
      address: 'Rani Road, Fateh Sagar Lake Perimeter, Udaipur, Rajasthan 313001',
      distanceFromMumbai: '1 hour flight to Maharana Pratap Airport (UDR)',
      distanceFromPune: 'Direct flights / train connectivity',
      nearestLandmark: 'Fateh Sagar Paal'
    },
    featured: false,
    collection: 'luxury-estates',
    hasPrivatePool: true,
    isPetFriendly: false,
    hasCaretaker: true,
    hasChefAvailable: true,
    reviews: [
      {
        id: 'rev-10',
        author: 'Manish Bhatia',
        city: 'Ahmedabad',
        date: 'September 2026',
        rating: 5,
        comment: 'A true royal experience. Having evening tea on the rooftop watching the palace light up was magical.'
      }
    ],
    rules: [
      'Check-in: 2:00 PM | Check-out: 11:00 AM'
    ]
  }
];

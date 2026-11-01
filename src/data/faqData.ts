export interface FAQItem {
  id: string;
  category: 'booking' | 'stay' | 'food' | 'policies';
  question: string;
  answer: string;
}

export const FAQS_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'booking',
    question: 'How do I book a villa with personalroom?',
    answer: 'Select your preferred destination, check-in and check-out dates, and guest count. Browse our verified luxury villas, review the transparent pricing breakdown, and click "Reserve / Inquire". Your reservation will be registered immediately with a unique booking confirmation reference code, and our dedicated concierge manager will connect via phone or WhatsApp to finalize your personalized itinerary.'
  },
  {
    id: 'faq-2',
    category: 'stay',
    question: 'Are the swimming pools completely private?',
    answer: 'Yes! All villas listed with a swimming pool under personalroom offer 100% exclusive, private access for your group only. There are no shared pool facilities. Pools are chemically tested, filtered, and sanitized prior to every single check-in.'
  },
  {
    id: 'faq-3',
    category: 'food',
    question: 'What are the food and dining arrangements?',
    answer: 'Most personalroom properties come with a dedicated full-time caretaker and cook skilled in regional home-cooked specialties (e.g., Maharashtrian Pithla Bhakri, fresh Alibaug Surmai seafood, Goan curry, or North Indian Mughlai). You can opt for an all-inclusive meal package (Breakfast, Lunch, Evening Tea/Snacks, and Dinner) or request groceries on actual cost plus a modest cooking charge.'
  },
  {
    id: 'faq-4',
    category: 'policies',
    question: 'What are the standard check-in and check-out timings?',
    answer: 'Standard check-in time is 2:00 PM and check-out is 11:00 AM. Early check-in or late check-out can be requested in advance and is subject to villa availability and scheduled deep-cleaning protocols.'
  },
  {
    id: 'faq-5',
    category: 'policies',
    question: 'Are personalroom villas pet-friendly?',
    answer: 'Many of our bungalows feature expansive private lawns and welcome furry family members. Filter villas by "Pet Friendly" on our Explore page to see all properties where pets are wholeheartedly welcomed.'
  },
  {
    id: 'faq-6',
    category: 'booking',
    question: 'What is the cancellation policy?',
    answer: 'Cancellations requested 14 days or more before check-in receive a 100% full refund or credit voucher valid for 12 months. Cancellations between 7 to 13 days receive a 50% refund. Cancellations within 7 days of arrival are non-refundable due to blocked property dates.'
  },
  {
    id: 'faq-7',
    category: 'stay',
    question: 'Is power backup available during unexpected outages?',
    answer: 'Yes. 100% of our villas feature automated silent generator sets or heavy-duty inverter backups that keep essential lights, fans, Wi-Fi, and refrigerators running continuously during mountain rainstorms or grid fluctuations.'
  }
];

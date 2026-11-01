import React, { createContext, useContext, useState, useEffect } from 'react';

export interface BookingRecord {
  id: string;
  villaId: string;
  villaTitle: string;
  destination: string;
  villaImage: string;
  checkIn: string;
  checkOut: string;
  nights: number;
  guests: number;
  primaryGuestName: string;
  guestEmail: string;
  guestPhone: string;
  specialRequests?: string;
  totalAmount: number;
  status: 'Confirmed' | 'Pending Concierge Call';
  createdAt: string;
}

export interface OwnerInquiry {
  id: string;
  ownerName: string;
  email: string;
  phone: string;
  city: string;
  propertyTitle: string;
  destination: string;
  bhk: number;
  bathrooms: number;
  hasPool: boolean;
  notes?: string;
  submittedAt: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  submittedAt: string;
}

export interface ToastMessage {
  id: string;
  type: 'success' | 'info' | 'error';
  text: string;
}

interface AppContextType {
  wishlist: string[];
  toggleWishlist: (villaId: string) => void;
  isInWishlist: (villaId: string) => boolean;
  
  bookings: BookingRecord[];
  addBooking: (booking: Omit<BookingRecord, 'id' | 'createdAt' | 'status'>) => string;
  cancelBooking: (bookingId: string) => void;
  
  ownerInquiries: OwnerInquiry[];
  addOwnerInquiry: (inquiry: Omit<OwnerInquiry, 'id' | 'submittedAt'>) => string;
  
  contactMessages: ContactMessage[];
  addContactMessage: (msg: Omit<ContactMessage, 'id' | 'submittedAt'>) => void;
  
  toasts: ToastMessage[];
  showToast: (text: string, type?: 'success' | 'info' | 'error') => void;
  removeToast: (id: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const STORAGE_KEYS = {
  WISHLIST: 'personalroom_wishlist_v1',
  BOOKINGS: 'personalroom_bookings_v1',
  OWNER_INQUIRIES: 'personalroom_owner_inquiries_v1',
  CONTACT_MSGS: 'personalroom_contact_msgs_v1',
};

// Safe local storage retrieval helper
function getInitialStorage<T>(key: string, defaultValue: T): T {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return defaultValue;
    return JSON.parse(raw) as T;
  } catch (err) {
    console.warn(`Error reading localStorage for key ${key}`, err);
    return defaultValue;
  }
}

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [wishlist, setWishlist] = useState<string[]>(() =>
    getInitialStorage<string[]>(STORAGE_KEYS.WISHLIST, ['hillcrest-villa-lonavala', 'coral-reef-villa-alibaug'])
  );

  const [bookings, setBookings] = useState<BookingRecord[]>(() =>
    getInitialStorage<BookingRecord[]>(STORAGE_KEYS.BOOKINGS, [
      {
        id: 'PR-78214',
        villaId: 'hillcrest-villa-lonavala',
        villaTitle: 'Hillcrest Villa & Infinity Pool',
        destination: 'Lonavala',
        villaImage: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80',
        checkIn: '2026-11-14',
        checkOut: '2026-11-16',
        nights: 2,
        guests: 8,
        primaryGuestName: 'Aman Kumar',
        guestEmail: 'aman@example.com',
        guestPhone: '+91 98200 12345',
        totalAmount: 59370,
        status: 'Confirmed',
        createdAt: '2026-10-28T14:30:00Z',
      }
    ])
  );

  const [ownerInquiries, setOwnerInquiries] = useState<OwnerInquiry[]>(() =>
    getInitialStorage<OwnerInquiry[]>(STORAGE_KEYS.OWNER_INQUIRIES, [])
  );

  const [contactMessages, setContactMessages] = useState<ContactMessage[]>(() =>
    getInitialStorage<ContactMessage[]>(STORAGE_KEYS.CONTACT_MSGS, [])
  );

  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.WISHLIST, JSON.stringify(wishlist));
    } catch (e) {
      console.warn('Failed to save wishlist to localStorage', e);
    }
  }, [wishlist]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.BOOKINGS, JSON.stringify(bookings));
    } catch (e) {
      console.warn('Failed to save bookings to localStorage', e);
    }
  }, [bookings]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.OWNER_INQUIRIES, JSON.stringify(ownerInquiries));
    } catch (e) {
      console.warn('Failed to save owner inquiries to localStorage', e);
    }
  }, [ownerInquiries]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.CONTACT_MSGS, JSON.stringify(contactMessages));
    } catch (e) {
      console.warn('Failed to save contact messages to localStorage', e);
    }
  }, [contactMessages]);

  const showToast = (text: string, type: 'success' | 'info' | 'error' = 'success') => {
    const id = 'toast-' + Date.now() + '-' + Math.random().toString(36).substring(2, 6);
    setToasts((prev) => [...prev, { id, text, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const toggleWishlist = (villaId: string) => {
    setWishlist((prev) => {
      if (prev.includes(villaId)) {
        showToast('Removed villa from your saved collection', 'info');
        return prev.filter((id) => id !== villaId);
      } else {
        showToast('Added villa to your saved collection', 'success');
        return [...prev, villaId];
      }
    });
  };

  const isInWishlist = (villaId: string) => wishlist.includes(villaId);

  const addBooking = (bookingData: Omit<BookingRecord, 'id' | 'createdAt' | 'status'>) => {
    const newId = 'PR-' + Math.floor(10000 + Math.random() * 90000);
    const newBooking: BookingRecord = {
      ...bookingData,
      id: newId,
      status: 'Confirmed',
      createdAt: new Date().toISOString(),
    };
    setBookings((prev) => [newBooking, ...prev]);
    showToast(`Reservation ${newId} confirmed! Check your bookings page.`, 'success');
    return newId;
  };

  const cancelBooking = (bookingId: string) => {
    setBookings((prev) => prev.filter((b) => b.id !== bookingId));
    showToast(`Booking ${bookingId} has been cancelled.`, 'info');
  };

  const addOwnerInquiry = (inquiryData: Omit<OwnerInquiry, 'id' | 'submittedAt'>) => {
    const id = 'OWN-' + Math.floor(10000 + Math.random() * 90000);
    const record: OwnerInquiry = {
      ...inquiryData,
      id,
      submittedAt: new Date().toISOString(),
    };
    setOwnerInquiries((prev) => [record, ...prev]);
    showToast(`Property onboarding application ${id} received! Our partner team will reach out within 24 hours.`, 'success');
    return id;
  };

  const addContactMessage = (msgData: Omit<ContactMessage, 'id' | 'submittedAt'>) => {
    const id = 'MSG-' + Math.floor(10000 + Math.random() * 90000);
    const msg: ContactMessage = {
      ...msgData,
      id,
      submittedAt: new Date().toISOString(),
    };
    setContactMessages((prev) => [msg, ...prev]);
    showToast('Your message has been sent to our concierge desk!', 'success');
  };

  return (
    <AppContext.Provider
      value={{
        wishlist,
        toggleWishlist,
        isInWishlist,
        bookings,
        addBooking,
        cancelBooking,
        ownerInquiries,
        addOwnerInquiry,
        contactMessages,
        addContactMessage,
        toasts,
        showToast,
        removeToast,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

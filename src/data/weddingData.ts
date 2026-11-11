/**
 * Centralized Wedding Configuration Data
 * Authentic Traditional Indian Wedding Details for Priyanka Deshpande & Prasad Chopade
 * Venue: Kuber Lawns, Nashik
 */

export interface WeddingEvent {
  id: string;
  name: string;
  subtitle: string;
  date: string;
  time: string;
  venue: string;
  description: string;
  calendarStartDate?: string;
  calendarEndDate?: string;
  visualTheme: 'puja' | 'haldi' | 'sangeet' | 'vivah' | 'varmala';
}

export interface WeddingData {
  couple: {
    groom: {
      firstName: string;
      surname: string;
      fullName: string;
      fatherName: string;
      motherName: string;
      parentsText: string;
    };
    bride: {
      firstName: string;
      surname: string;
      fullName: string;
      fatherName: string;
      motherName: string;
      parentsText: string;
    };
    hashtag: string;
    couplePhoto: string;
    ganeshaImage: string;
  };
  invitation: {
    ganeshaMantra: {
      sanskrit: string;
      translation: string;
    };
    auspiciousBlessing: string;
    formalMessage: string;
    familyRequest: string;
  };
  countdown: {
    targetIsoWithTimezone: string; // 2026-11-26T12:14:00+05:30
    eventTargetName: string;
    targetDisplayTime: string;
    weddingDayMessage: string;
  };
  events: WeddingEvent[];
  venue: {
    name: string;
    tagline: string;
    address: string;
    city: string;
    state: string;
    pincode: string;
    fullAddress: string;
    googleMapsEmbedUrl: string;
    googleMapsDirectionsUrl: string;
  };
  footer: {
    thankYouMessage: string;
    blessingsText: string;
  };
}

export const weddingData: WeddingData = {
  couple: {
    groom: {
      firstName: "Prasad",
      surname: "Chopade",
      fullName: "Prasad Chopade",
      fatherName: "Gajanan Chopade",
      motherName: "Sadhana Chopade",
      parentsText: "Son of Smt. Sadhana Chopade & Shri Gajanan Chopade"
    },
    bride: {
      firstName: "Priyanka",
      surname: "Deshpande",
      fullName: "Priyanka Deshpande",
      fatherName: "Parag Deshpande",
      motherName: "Shilpa Deshpande",
      parentsText: "Daughter of Smt. Shilpa Deshpande & Shri Parag Deshpande"
    },
    hashtag: "#PriyankaWedsPrasad",
    couplePhoto: "/assets/aistudio/WhatsApp_Image_2026-11-07_at_11.14.22_PM_1dd3b1c3.jpeg",
    ganeshaImage: "/assets/aistudio/image_686676ec.png"
  },
  invitation: {
    ganeshaMantra: {
      sanskrit: "॥ वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ । निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा ॥",
      translation: ""
    },
    auspiciousBlessing: "",
    formalMessage: "With the divine blessings of Lord Ganesha, our kuldevatas, and our revered elders, we cordially invite you and your family to grace the auspicious wedding celebrations of our children.",
    familyRequest: "Deshpande & Chopade Families seek your gracious presence, blessings, and love as Priyanka and Prasad embark on the sacred journey of Grihastha Ashram."
  },
  countdown: {
    // Exactly 26 November 2026 at 12:14 PM IST (UTC+05:30)
    targetIsoWithTimezone: "2026-11-26T12:14:00+05:30",
    eventTargetName: "Auspicious Varmala Ceremony",
    targetDisplayTime: "26 November 2026 at 12:14 PM (IST)",
    weddingDayMessage: "The Moment Has Arrived! ❤️"
  },
  events: [
    {
      id: "dev-brahman-puja",
      name: "DEV BRAHMAN PUJA & LUNCH",
      subtitle: "Auspicious Kuldevata Pujan & Traditional Feast",
      date: "22 November 2026",
      time: "11:30 AM onwards",
      venue: "Our Home",
      description: "With the blessings of the Almighty, we warmly invite you to join us for the sacred Dev Brahman Puja followed by lunch.",
      visualTheme: "puja"
    },
    {
      id: "varmala",
      name: "VARMALA",
      subtitle: "The Divine Garland Exchange at the Auspicious Muhurat",
      date: "26 November 2026",
      time: "12:14 PM",
      venue: "Kuber Lawns, Gayatri Nagar, Near Govind Nagar, Old CIDCO, Nashik – 422009",
      description: "The crowning auspicious muhurat at 12:14 PM sharp where Priyanka and Prasad exchange fragrant rose and mogra Varmalas, showered with rose petals and eternal blessings.",
      calendarStartDate: "20261126T121400",
      calendarEndDate: "20261126T131400",
      visualTheme: "varmala"
    }
  ],
  venue: {
    name: "Kuber Lawns",
    tagline: "Auspicious Celebration Venue in Nashik",
    address: "Gayatri Nagar, near Govind Nagar, Old CIDCO",
    city: "Nashik",
    state: "Maharashtra",
    pincode: "422009",
    fullAddress: "Kuber Lawns, Gayatri Nagar, near Govind Nagar, Old CIDCO, Nashik - 422009",
    // Embed map pointing to Kuber Lawns / Govind Nagar, Nashik
    googleMapsEmbedUrl: "https://maps.google.com/maps?q=Kuber+Lawns+Nashik+Maharashtra&t=&z=15&ie=UTF8&iwloc=&output=embed",
    googleMapsDirectionsUrl: "https://maps.app.goo.gl/B6hcQJBZAe2FwezW8"
  },
  footer: {
    thankYouMessage: "Your gracious presence and heartfelt blessings are the greatest gifts as Priyanka and Prasad begin this sacred lifetime together.",
    blessingsText: "॥ सदा सर्वदा प्रीतिः विवर्धताम् ॥ May eternal love and auspicious joy flourish always."
  }
};

import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'te';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.services': 'Services',
    'nav.branches': 'Branches',
    'nav.stories': 'Patient Stories',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'Excellence in Dentistry with Optimum Care',
    'hero.subtitle': 'Ethos Dental – Where Precision Meets Compassion',
    'hero.cta1': 'Book Free Consultation',
    'hero.cta2': 'Explore Branches',
    
    // Quick Access
    'quick.appointment': 'Book Appointment',
    'quick.branch': 'Find a Branch',
    'quick.treatments': 'View Treatments',
    'quick.emergency': 'Emergency Care',
    
    // About
    'about.title': 'About Ethos Dental',
    'about.subtitle': 'Rooted in Telugu Heritage, Committed to Excellence',
    'about.tagline': 'A change in your teeth can change your life',
    'about.description': 'Founded in the heart of Andhra Pradesh and Telangana, Ethos Dental brings world-class dental care with the warmth of Telugu hospitality. Our phobia-free approach ensures every patient feels at home.',
    
    // Services
    'services.title': 'Our Dental Services',
    'services.subtitle': 'Comprehensive Care for Every Smile',
    'service.implants': 'Dental Implants',
    'service.maxillofacial': 'Maxillofacial Surgery',
    'service.oral': 'Oral Surgery',
    'service.laser': 'Laser Dentistry',
    'service.prosthodontics': 'Prosthodontics',
    'service.endodontics': 'Endodontics',
    'service.cosmetic': 'Cosmetic Dentistry',
    'service.orthodontics': 'Orthodontics',
    'service.pedodontics': 'Pedodontics',
    'service.periodontics': 'Periodontics',
    'service.whitening': 'Teeth Whitening',
    'service.knowmore': 'Know More',
    
    // Branches
    'branches.title': 'Our Branches',
    'branches.subtitle': 'Serving Communities Across Telugu States',
    'branch.bhimavaram': 'Bhimavaram',
    'branch.guntur': 'Guntur', 
    'branch.vizag': 'Vizag (Akkayyapalem)',
    'branch.kukatpally': 'Hyderabad - Kukatpally',
    'branch.narsingi': 'Hyderabad - Narsingi',
    'branch.mancherial': 'Mancherial',
    'branch.directions': 'Get Directions',
    'branch.contact': 'Contact Branch',
    
    // Contact
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Reach Out for Expert Dental Care',
    'contact.expert': 'Talk to Our Expert',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.address': 'Address',
    
    // Footer
    'footer.tagline': 'We\'re here for your smile',
    'footer.copyright': '© 2024 Ethos Dental. All rights reserved.',
    'footer.quicklinks': 'Quick Links',
    
    // Stories
    'stories.title': 'Patient Stories',
    'stories.subtitle': 'Real Transformations, Real Smiles',
    
    // Blog
    'blog.title': 'Dental Health Blog',
    'blog.subtitle': 'Expert Tips and Insights',
    'blog.readmore': 'Read More',
  },
  te: {
    // Navigation
    'nav.home': 'హోమ్',
    'nav.about': 'మా గురించి',
    'nav.services': 'సేవలు',
    'nav.branches': 'శాఖలు',
    'nav.stories': 'రోగుల అనుభవాలు',
    'nav.blog': 'బ్లాగ్',
    'nav.contact': 'సంప్రదించండి',
    
    // Hero Section
    'hero.title': 'అత్యుత్తమ దంత చికిత్స మరియు సంరక్షణ',
    'hero.subtitle': 'ఎథోస్ డెంటల్ – ఖచ్చితత్వం మరియు కరుణ కలిసిన చోటు',
    'hero.cta1': 'ఉచిత సంప్రదింపు బుక్ చేసుకోండి',
    'hero.cta2': 'శాఖలను అన్వేషించండి',
    
    // Quick Access
    'quick.appointment': 'అపాయింట్మెంట్ బుక్ చేసుకోండి',
    'quick.branch': 'శాఖను కనుగొనండి',
    'quick.treatments': 'చికిత్సలను చూడండి',
    'quick.emergency': 'అత్యవసర సేవ',
    
    // About
    'about.title': 'ఎథోస్ డెంటల్ గురించి',
    'about.subtitle': 'తెలుగు వారసత్వంలో నిక్షిప్తం, అత్యుత్తమతకు అంకితం',
    'about.tagline': 'మీ దంతాలలో మార్పు మీ జీవితాన్ని మార్చగలదు',
    'about.description': 'ఆంధ్రప్రదేశ్ మరియు తెలంగాణ హృదయంలో స్థాపించబడిన ఎథోస్ డెంటల్, తెలుగు ఆతిథ్యం యొక్క వెచ్చదనంతో ప్రపంచ-స్థాయి దంత సంరక్షణను అందిస్తుంది.',
    
    // Services
    'services.title': 'మా దంత సేవలు',
    'services.subtitle': 'ప్రతి చిరునవ్వుకు సమగ్ర సంరక్షణ',
    'service.implants': 'దంతాలు నిలిపే చికిత్స',
    'service.maxillofacial': 'దవడ శస్త్రచికిత్స',
    'service.oral': 'నోటి శస్త్రచికిత్స',
    'service.laser': 'లేజర్ దంత చికిత్స',
    'service.prosthodontics': 'కృత్రిమ దంత చికిత్స',
    'service.endodontics': 'రూట్ కెనాల్ చికిత్స',
    'service.cosmetic': 'సౌందర్య దంత చికిత్స',
    'service.orthodontics': 'దంతాల సరిచేయుట',
    'service.pedodontics': 'పిల్లల దంత చికిత్స',
    'service.periodontics': 'చిగుళ్ల చికిత్స',
    'service.whitening': 'దంతాల తెల్లబడిన చికిత్స',
    'service.knowmore': 'మరింత తెలుసుకోండి',
    
    // Branches
    'branches.title': 'మా శాఖలు',
    'branches.subtitle': 'తెలుగు రాష్ట్రాలలో సమాజాలకు సేవలందిస్తున్నాం',
    'branch.bhimavaram': 'భీమవరం',
    'branch.guntur': 'గుంటూరు',
    'branch.vizag': 'విజాగ్ (అక్కయ్యపాలెం)',
    'branch.kukatpally': 'హైదరాబాద్ - కుకట్పల్లి',
    'branch.narsingi': 'హైదరాబాద్ - నార్సింగి',
    'branch.mancherial': 'మంచేర్యాల్',
    'branch.directions': 'దిశలు పొందండి',
    'branch.contact': 'శాఖను సంప్రదించండి',
    
    // Contact
    'contact.title': 'మమ్మల్ని సంప్రదించండి',
    'contact.subtitle': 'నిపుణ దంత సంరక్షణ కోసం సంప్రదించండి',
    'contact.expert': 'మా నిపుణుడితో మాట్లాడండి',
    'contact.phone': 'ఫోన్',
    'contact.email': 'ఇమెయిల్',
    'contact.address': 'చిరునామా',
    
    // Footer
    'footer.tagline': 'మీ చిరునవ్వు కోసం మేమున్నాం',
    'footer.copyright': '© 2024 ఎథోస్ డెంటల్. అన్ని హక్కులు రక్షించబడ్డాయి.',
    'footer.quicklinks': 'త్వరిత లింకులు',
    
    // Stories
    'stories.title': 'రోగుల అనుభవాలు',
    'stories.subtitle': 'నిజమైన మార్పులు, నిజమైన చిరునవ్వులు',
    
    // Blog
    'blog.title': 'దంత ఆరోగ్య బ్లాగ్',
    'blog.subtitle': 'నిపుణుల చిట్కాలు మరియు అంతర్దృష్టులు',
    'blog.readmore': 'మరింత చదవండి',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
export interface Service {
  id: string;
  title: string;
  description: string;
  spiritualDescription: string;
  sanskritName: string;
  icon: string;
  spiritualIcon: string;
  detailContent: {
    overview: string;
    spiritualOverview: string;
    benefits: string[];
    spiritualBenefits: string[];
    process: string[];
    spiritualProcess: string[];
    cost?: string;
    duration?: string;
    ayurvedicPrinciples?: string[];
    chakraAlignment?: string;
    pranaConnection?: string;
  };
}

export const services: Service[] = [
  {
    id: 'dental-implants',
    title: 'Dental Implants',
    description: 'Advanced tooth replacement solutions that look and feel like natural teeth.',
    spiritualDescription: 'Restoring your divine smile like sculpting sacred temple idols with precision and devotion.',
    sanskritName: 'दन्त प्रत्यारोपण',
    icon: '🦷',
    spiritualIcon: '🏛️',
    detailContent: {
      overview: 'Dental implants are designed to protect facial bone and provide healthy teeth. They don\'t need grinding down adjacent teeth to anchor bridges or attach partial dentures.',
      spiritualOverview: 'Like the sacred foundation stones of ancient temples, dental implants provide eternal support for your divine smile. Each implant is placed with the precision of a master sculptor creating sacred idols, ensuring harmony between your oral chakras and overall well-being.',
      benefits: [
        'Improved oral health',
        'Natural appearance and feel',
        'Durability and longevity',
        'Enhanced chewing and speech',
        'Preserves facial structure',
        'No need to alter adjacent teeth'
      ],
      spiritualBenefits: [
        'Restores the flow of prana through proper breathing',
        'Aligns the Vishuddha (throat) chakra for clear communication',
        'Enhances confidence and inner radiance',
        'Maintains facial harmony according to Ayurvedic principles',
        'Supports proper digestion through mindful chewing',
        'Preserves the sacred geometry of your smile'
      ],
      process: [
        'Initial consultation and examination',
        'Treatment planning with 3D imaging',
        'Implant placement surgery',
        'Healing and osseointegration period',
        'Crown or prosthetic attachment',
        'Follow-up care and maintenance'
      ],
      spiritualProcess: [
        'Sacred consultation with meditation and intention setting',
        'Divine planning using cosmic geometry and 3D visualization',
        'Ceremonial implant placement with healing mantras',
        'Sacred healing period with Ayurvedic support',
        'Crown blessing and attachment ceremony',
        'Ongoing spiritual and physical maintenance'
      ],
      cost: 'Rs 35,000 - 45,000 per implant',
      duration: '3-6 months total treatment time',
      ayurvedicPrinciples: [
        'Balances Vata dosha for proper bone integration',
        'Supports Kapha dosha for tissue healing',
        'Maintains Pitta dosha for metabolic processes'
      ],
      chakraAlignment: 'Primarily aligns the Vishuddha (Throat) Chakra, enhancing communication and self-expression',
      pranaConnection: 'Restores proper breathing patterns and prana flow through the oral cavity, supporting overall vitality and life force energy.'
    }
  },
  {
    id: 'cosmetic-dentistry',
    title: 'Cosmetic Dentistry',
    description: 'Enhance your smile with our aesthetic dental treatments.',
    spiritualDescription: 'Unveiling your inner radiance through divine smile transformation, like polishing precious gems.',
    sanskritName: 'सौन्दर्य दन्त चिकित्सा',
    icon: '✨',
    spiritualIcon: '💎',
    detailContent: {
      overview: 'Cosmetic dentistry emphasizes enhancing the appearance and aesthetics of your smile through various modern techniques.',
      spiritualOverview: 'Like the ancient art of gem cutting that reveals the inner brilliance of precious stones, cosmetic dentistry unveils your soul\'s radiance through your smile. Each treatment is a sacred ritual of transformation, aligning your outer beauty with your inner divine light.',
      benefits: [
        'Enhanced smile aesthetics',
        'Improved self-confidence',
        'Corrected dental imperfections',
        'Long-lasting results',
        'Minimal invasive procedures'
      ],
      spiritualBenefits: [
        'Awakens inner confidence and self-love',
        'Radiates positive energy through your smile',
        'Harmonizes facial chakras for balanced beauty',
        'Reflects your soul\'s luminosity outwardly',
        'Enhances aura and spiritual presence'
      ],
      process: [
        'Smile analysis and consultation',
        'Treatment planning and design',
        'Preparation and impression taking',
        'Custom restoration fabrication',
        'Final placement and adjustments'
      ],
      spiritualProcess: [
        'Sacred smile meditation and energy reading',
        'Divine design planning with cosmic proportions',
        'Blessed preparation with healing intentions',
        'Artisanal creation with spiritual infusion',
        'Ceremonial placement with gratitude rituals'
      ],
      ayurvedicPrinciples: [
        'Enhances Ojas (vital essence) through beautiful expression',
        'Balances Tejas (inner fire) for confident radiance',
        'Supports Prana (life force) through joyful smiling'
      ],
      chakraAlignment: 'Activates the Anahata (Heart) Chakra for self-love and the Vishuddha (Throat) Chakra for authentic expression',
      pranaConnection: 'Enhances the flow of positive prana through facial expressions, supporting emotional well-being and spiritual joy.'
    }
  },
  {
    id: 'periodontics',
    title: 'Periodontics',
    description: 'Specialized treatment for gum disease and supporting structures.',
    spiritualDescription: 'Healing the sacred foundation of your teeth like tending to the roots of the cosmic tree.',
    sanskritName: 'मसूड़ा चिकित्सा',
    icon: '🔬',
    spiritualIcon: '🌳',
    detailContent: {
      overview: 'Periodontics deals with the supporting structures around the teeth, specializing in treating periodontal disease.',
      spiritualOverview: 'Like the sacred gardener who tends to the roots of the cosmic tree, periodontal care nurtures the foundation of your oral health. The gums are the sacred soil from which your teeth draw their strength, requiring gentle care and spiritual attention.',
      benefits: [
        'Prevents tooth loss',
        'Eliminates gum infection',
        'Restores healthy gums',
        'Improves overall oral health',
        'Reduces risk of systemic diseases'
      ],
      spiritualBenefits: [
        'Purifies the oral environment like sacred temple grounds',
        'Restores the natural pink glow of healthy gums',
        'Eliminates negative energy trapped in infected tissues',
        'Strengthens the foundation for lifelong oral wellness',
        'Connects oral health to overall spiritual vitality'
      ],
      process: [
        'Comprehensive periodontal examination',
        'Deep cleaning (scaling and root planing)',
        'Surgical intervention if needed',
        'Maintenance therapy',
        'Regular monitoring'
      ],
      spiritualProcess: [
        'Sacred examination with energy assessment',
        'Purification ritual through deep cleansing',
        'Healing ceremony with surgical intervention',
        'Ongoing spiritual maintenance practices',
        'Regular energy monitoring and balance'
      ],
      ayurvedicPrinciples: [
        'Reduces Pitta inflammation in gum tissues',
        'Balances Kapha for healthy tissue structure',
        'Supports Vata for proper circulation'
      ],
      chakraAlignment: 'Strengthens the Muladhara (Root) Chakra for foundational stability and security',
      pranaConnection: 'Clears blocked prana in the oral cavity, allowing for better energy circulation and overall vitality.'
    }
  },
  {
    id: 'endodontics',
    title: 'Endodontics & Conservative Dentistry',
    description: 'Root canal therapy and tooth preservation treatments.',
    spiritualDescription: 'Preserving the sacred essence within each tooth, like protecting the divine flame in temple sanctums.',
    sanskritName: 'मूल नलिका चिकित्सा',
    icon: '🌿',
    spiritualIcon: '🕯️',
    detailContent: {
      overview: 'Endodontics deals with the diagnosis and treatment of diseases related to dental pulp, primarily root canal treatment.',
      spiritualOverview: 'Like the sacred keeper of temple flames who protects the divine light within, endodontic treatment preserves the vital essence of each tooth. The root canal is the sacred chamber where the tooth\'s life force resides, requiring gentle healing and spiritual protection.',
      benefits: [
        'Saves natural teeth',
        'Eliminates pain and infection',
        'Prevents spread of infection',
        'Cost-effective tooth preservation',
        'Maintains proper chewing function'
      ],
      spiritualBenefits: [
        'Preserves the natural energy of original teeth',
        'Eliminates pain that blocks spiritual focus',
        'Maintains the sacred geometry of your dental arch',
        'Honors the body\'s natural healing wisdom',
        'Supports mindful eating and digestion'
      ],
      process: [
        'Diagnosis with X-rays',
        'Local anesthesia administration',
        'Pulp removal and cleaning',
        'Root canal shaping and disinfection',
        'Filling and sealing',
        'Crown placement if needed'
      ],
      spiritualProcess: [
        'Sacred diagnosis with energy scanning',
        'Gentle numbing with healing intentions',
        'Purification of the tooth\'s inner chamber',
        'Sacred shaping with divine precision',
        'Blessed sealing with protective energy',
        'Crown blessing ceremony if required'
      ],
      ayurvedicPrinciples: [
        'Eliminates Ama (toxins) from tooth chambers',
        'Balances Pitta to reduce inflammation',
        'Supports Ojas preservation in natural teeth'
      ],
      chakraAlignment: 'Cleanses and protects the Vishuddha (Throat) Chakra, ensuring clear energy flow',
      pranaConnection: 'Removes blocked energy from infected tooth chambers, restoring natural prana flow through the oral cavity.'
    }
  },
  {
    id: 'orthodontics',
    title: 'Orthodontics',
    description: 'Straighten teeth and correct bite issues with modern orthodontic solutions.',
    spiritualDescription: 'Aligning your teeth in divine harmony, like arranging sacred geometry in temple architecture.',
    sanskritName: 'दन्त संरेखण',
    icon: '🦷',
    spiritualIcon: '🔯',
    detailContent: {
      overview: 'Orthodontics uses different treatments to straighten misaligned teeth and correct bite issues.',
      spiritualOverview: 'Like the master architect who aligns sacred geometry in temple construction, orthodontic treatment brings divine harmony to your smile. Each tooth finds its perfect position in the cosmic dance of your dental arch, creating balance and beauty.',
      benefits: [
        'Improved dental alignment',
        'Better oral hygiene',
        'Enhanced facial aesthetics',
        'Improved chewing function',
        'Increased self-confidence'
      ],
      spiritualBenefits: [
        'Creates sacred geometric harmony in your smile',
        'Aligns teeth with cosmic proportions',
        'Enhances energy flow through proper alignment',
        'Reflects inner order and spiritual discipline',
        'Radiates confidence and divine beauty'
      ],
      process: [
        'Initial consultation and records',
        'Treatment planning',
        'Appliance placement',
        'Regular adjustments',
        'Retention phase'
      ],
      spiritualProcess: [
        'Sacred consultation with energy mapping',
        'Divine planning with cosmic alignment',
        'Ceremonial appliance blessing',
        'Regular energy adjustments',
        'Retention with gratitude practices'
      ],
      ayurvedicPrinciples: [
        'Gradually balances Vata for gentle movement',
        'Supports Kapha for stable tissue adaptation',
        'Maintains Pitta for healthy tissue response'
      ],
      chakraAlignment: 'Harmonizes multiple chakras through improved facial symmetry and confident expression',
      pranaConnection: 'Optimizes breathing patterns and prana flow through proper dental alignment and jaw positioning.'
    }
  },
  {
    id: 'pedodontics',
    title: 'Pedodontics',
    description: 'Specialized dental care for children and adolescents.',
    spiritualDescription: 'Nurturing young souls\' smiles with the tenderness of divine mother\'s care.',
    sanskritName: 'बाल दन्त चिकित्सा',
    icon: '👶',
    spiritualIcon: '🌸',
    detailContent: {
      overview: 'Pedodontics focuses on children\'s dental health, including prevention and proper oral hygiene habits.',
      spiritualOverview: 'Like the divine mother who nurtures each child with infinite love and patience, pediatric dental care protects the innocent smiles of young souls. Each treatment is a blessing, ensuring that children grow with healthy teeth and joyful spirits.',
      benefits: [
        'Early detection of problems',
        'Prevention of dental issues',
        'Child-friendly environment',
        'Proper oral hygiene education',
        'Reduced dental anxiety'
      ],
      spiritualBenefits: [
        'Protects the purity of children\'s smiles',
        'Creates positive energy around dental care',
        'Builds foundation for lifelong oral wellness',
        'Nurtures confidence in young spirits',
        'Establishes sacred self-care rituals'
      ],
      process: [
        'Child-friendly consultation',
        'Preventive treatments',
        'Educational sessions',
        'Regular monitoring',
        'Parent guidance'
      ],
      spiritualProcess: [
        'Gentle introduction with playful energy',
        'Protective treatments with loving care',
        'Fun learning with spiritual stories',
        'Regular check-ins with celebration',
        'Family guidance with wisdom sharing'
      ],
      ayurvedicPrinciples: [
        'Supports natural growth with Kapha balance',
        'Maintains Pitta for healthy development',
        'Nurtures Ojas for strong immunity'
      ],
      chakraAlignment: 'Protects and nurtures all chakras during crucial developmental years',
      pranaConnection: 'Ensures healthy prana flow for optimal growth and development of oral structures.'
    }
  },
  {
    id: 'oral-maxillofacial-surgery',
    title: 'Oral & Maxillofacial Surgery',
    description: 'Surgical treatments for complex oral and facial conditions.',
    spiritualDescription: 'Sacred surgical artistry to restore facial harmony and divine proportions.',
    sanskritName: 'मुख शल्य चिकित्सा',
    icon: '⚕️',
    spiritualIcon: '🎭',
    detailContent: {
      overview: 'Maxillofacial Surgery focuses on reconstructive surgery of the face, oral cavity, and jaw structures.',
      spiritualOverview: 'Like the divine sculptor who restores sacred statues to their original glory, oral and maxillofacial surgery brings harmony back to facial structures. Each procedure is performed with the precision of ancient artisans and the compassion of healing sages.',
      benefits: [
        'Improved jaw function',
        'Pain relief',
        'Facial structure restoration',
        'Treatment of oral diseases',
        'Enhanced quality of life'
      ],
      spiritualBenefits: [
        'Restores divine facial proportions',
        'Eliminates suffering and brings peace',
        'Harmonizes facial energy centers',
        'Heals both physical and emotional trauma',
        'Enhances life force and vitality'
      ],
      process: [
        'Comprehensive evaluation',
        'Pre-surgical planning',
        'Surgical procedure',
        'Post-operative care',
        'Follow-up monitoring'
      ],
      spiritualProcess: [
        'Sacred assessment with energy reading',
        'Divine planning with cosmic guidance',
        'Ceremonial surgery with healing prayers',
        'Blessed recovery with spiritual support',
        'Ongoing monitoring with gratitude'
      ],
      ayurvedicPrinciples: [
        'Balances all three doshas for optimal healing',
        'Supports Ojas for tissue regeneration',
        'Maintains Tejas for proper recovery'
      ],
      chakraAlignment: 'Restores balance to facial chakras and overall energy system',
      pranaConnection: 'Corrects structural issues that may impede prana flow, enhancing overall vitality and well-being.'
    }
  },
  {
    id: 'prosthodontics',
    title: 'Prosthodontics',
    description: 'Restoration and replacement of damaged or missing teeth.',
    spiritualDescription: 'Crafting divine prosthetics like creating sacred ornaments for temple deities.',
    sanskritName: 'कृत्रिम दन्त चिकित्सा',
    icon: '🔧',
    spiritualIcon: '👑',
    detailContent: {
      overview: 'Prosthodontics involves the design, manufacture, and fitting of artificial replacements for teeth.',
      spiritualOverview: 'Like the master craftsman who creates sacred ornaments for temple deities, prosthodontic artistry restores the crown of your smile. Each prosthetic is blessed with intention and crafted with the precision of ancient goldsmiths.',
      benefits: [
        'Restored chewing function',
        'Improved speech',
        'Enhanced aesthetics',
        'Maintained facial support',
        'Increased confidence'
      ],
      spiritualBenefits: [
        'Restores the sacred function of nourishment',
        'Enables clear expression of divine truth',
        'Reflects inner beauty outwardly',
        'Maintains facial harmony and balance',
        'Radiates confidence and spiritual presence'
      ],
      process: [
        'Comprehensive examination',
        'Treatment planning',
        'Impressions and measurements',
        'Prosthetic fabrication',
        'Fitting and adjustments'
      ],
      spiritualProcess: [
        'Sacred examination with energy assessment',
        'Divine planning with cosmic measurements',
        'Blessed impression taking',
        'Artisanal creation with spiritual infusion',
        'Ceremonial fitting with gratitude'
      ],
      ayurvedicPrinciples: [
        'Restores proper digestion through Agni enhancement',
        'Balances Vata for comfortable function',
        'Supports Kapha for tissue adaptation'
      ],
      chakraAlignment: 'Restores balance to the Vishuddha (Throat) Chakra and supports overall energy flow',
      pranaConnection: 'Enables proper breathing and prana circulation through restored oral function and structure.'
    }
  },
  {
    id: 'laser-dentistry',
    title: 'Laser Dentistry',
    description: 'Advanced laser technology for precise and comfortable treatments.',
    spiritualDescription: 'Healing with divine light energy, channeling cosmic rays for gentle restoration.',
    sanskritName: 'प्रकाश किरण चिकित्सा',
    icon: '🔴',
    spiritualIcon: '☀️',
    detailContent: {
      overview: 'Laser Dentistry uses light energy to perform various dental treatments with precision and comfort.',
      spiritualOverview: 'Like the ancient sages who channeled cosmic light for healing, laser dentistry harnesses divine photon energy for gentle restoration. Each beam of light carries healing intention and cosmic wisdom, working in harmony with your body\'s natural healing abilities.',
      benefits: [
        'Minimally invasive procedures',
        'Reduced pain and discomfort',
        'Faster healing time',
        'Less bleeding and swelling',
        'High precision treatment'
      ],
      spiritualBenefits: [
        'Channels divine light for healing',
        'Minimizes trauma to sacred tissues',
        'Accelerates natural healing processes',
        'Reduces suffering and promotes peace',
        'Works with cosmic precision and intention'
      ],
      process: [
        'Treatment area preparation',
        'Laser calibration',
        'Precise laser application',
        'Immediate healing assessment',
        'Post-treatment care'
      ],
      spiritualProcess: [
        'Sacred space preparation with intention',
        'Divine light calibration with cosmic alignment',
        'Blessed laser application with healing mantras',
        'Immediate energy assessment',
        'Ongoing spiritual and physical care'
      ],
      ayurvedicPrinciples: [
        'Uses Tejas (light energy) for healing',
        'Balances Pitta through controlled heat',
        'Supports Ojas preservation during treatment'
      ],
      chakraAlignment: 'Works with light energy to balance and harmonize all chakras',
      pranaConnection: 'Uses light as a carrier of prana, enhancing the body\'s natural healing energy and vitality.'
    }
  }
];
export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  comment: string;
  treatment: string;
  doctor?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Babji Nimmala Rao',
    location: 'Visakhapatnam',
    rating: 5,
    comment: 'Best dental clinic in akkayyapalem. Went for teeth replacement, Dr Naresh Kumar suggested for implants, firstly thought it is very costly, ethos dental clinic rates are very reasonable and affordable.',
    treatment: 'Dental Implants',
    doctor: 'Dr. Naresh Kumar'
  },
  {
    id: '2',
    name: 'Boni Sirisha',
    location: 'Visakhapatnam',
    rating: 5,
    comment: 'Best dental clinic in akkayyapalem area, clinic is so hygienic, painless single sitting root canal treatment was done, very satisfied with the treatment by Dr. Shravanthi garu.',
    treatment: 'Root Canal',
    doctor: 'Dr. Shravanthi'
  },
  {
    id: '3',
    name: 'Rama Yadav',
    location: 'Guntur',
    rating: 5,
    comment: 'Pediatric dentist Dr. Mahesh Chinta is incredible, very knowledgeable, sensitive and informative! He has taken great care of my son\'s teeth. Would HIGHLY recommend to anyone!',
    treatment: 'Pediatric Dentistry',
    doctor: 'Dr. Mahesh Chinta'
  },
  {
    id: '4',
    name: 'Raj Sundar',
    location: 'Guntur',
    rating: 5,
    comment: 'My mother is 78 years old. The way Dr Mahesh and Dr Charishma treated her is marvelous. She underwent 4 tooth removal, 8 root canals and 12 capping procedure without complaining pain.',
    treatment: 'Full Mouth Rehabilitation',
    doctor: 'Dr. Mahesh & Dr. Charishma'
  },
  {
    id: '5',
    name: 'Leena Roselyn',
    location: 'Guntur',
    rating: 5,
    comment: 'This is my first time dental experience, with wonderful doctors. Very Good root canal treatment and cement to my front tooth which was broken. Thank you Dr Charishma!',
    treatment: 'Root Canal & Crown',
    doctor: 'Dr. Charishma'
  },
  {
    id: '6',
    name: 'Ajay Mallampati',
    location: 'Guntur',
    rating: 5,
    comment: 'I came to ethos dental with broken teeth. The way Dr Charishma treated my broken teeth was impeccable. None of my friends spotted the difference with adjacent natural teeth.',
    treatment: 'Cosmetic Dentistry',
    doctor: 'Dr. Charishma'
  }
];
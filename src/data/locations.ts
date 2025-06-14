export interface Location {
  id: string;
  name: string;
  city: string;
  address: string;
  phone: string[];
  email: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
  services: string[];
  doctors: string[];
  timings: {
    weekdays: string;
    weekends: string;
  };
}

export const locations: Location[] = [
  {
    id: 'hyderabad-kukatpally',
    name: 'Hyderabad - Kukatpally',
    city: 'Hyderabad',
    address: 'Plot No.944, Opp. Vasireddy Swagruha Foods, Vivekananda Nagar, Kukatpally, Hyderabad, Telangana-500072',
    phone: ['+91-7207096632', '+91-7337410147'],
    email: 'ethosdental.kphyd@gmail.com',
    services: ['Dental Implants', 'Cosmetic Dentistry', 'Orthodontics', 'Periodontics', 'Endodontics'],
    doctors: ['Dr. Mahesh Chinta', 'Dr. Charishma'],
    timings: {
      weekdays: '9:00 AM - 8:00 PM',
      weekends: '9:00 AM - 6:00 PM'
    }
  },
  {
    id: 'hyderabad-narsingi',
    name: 'Hyderabad - Narsingi',
    city: 'Hyderabad',
    address: 'Shop No.3, 1st Floor, Above Karachi Bakery, opposite Accurate Wind Chimes, Narsingi, Telangana - 500075',
    phone: ['+91-9010348888'],
    email: 'ethosdental.nshyd@gmail.com',
    services: ['Dental Implants', 'Root Canal', 'Cosmetic Dentistry', 'Oral Surgery'],
    doctors: ['Dr. Naresh Kumar', 'Dr. Shravanthi'],
    timings: {
      weekdays: '9:00 AM - 8:00 PM',
      weekends: '9:00 AM - 6:00 PM'
    }
  },
  {
    id: 'visakhapatnam',
    name: 'Visakhapatnam',
    city: 'Visakhapatnam',
    address: 'Akkayyapalem Main Rd, above Apollo pharmacy, near to Siva Rama Reddy sweets, Srinivas Nagar, Akkayyapalem, Visakhapatnam, Andhra Pradesh - 530016',
    phone: ['+91-7676202727'],
    email: 'ethosdentalvizag@gmail.com',
    services: ['Dental Implants', 'Root Canal', 'Teeth Whitening', 'Periodontics'],
    doctors: ['Dr. Naresh Kumar', 'Dr. Shravanthi'],
    timings: {
      weekdays: '9:00 AM - 8:00 PM',
      weekends: '9:00 AM - 6:00 PM'
    }
  },
  {
    id: 'guntur',
    name: 'Guntur',
    city: 'Guntur',
    address: 'Kannavarithota, 4th Lane, Opp. Nandana Hospital, Guntur, Andhra Pradesh - 522004',
    phone: ['+91-9705859606', '+91-8632323203'],
    email: 'ethosdental.gntr@gmail.com',
    services: ['Dental Implants', 'Cosmetic Dentistry', 'Pedodontics', 'Orthodontics'],
    doctors: ['Dr. Mahesh Chinta', 'Dr. Charishma'],
    timings: {
      weekdays: '9:00 AM - 8:00 PM',
      weekends: '9:00 AM - 6:00 PM'
    }
  },
  {
    id: 'mancherial',
    name: 'Mancherial',
    city: 'Mancherial',
    address: 'Opposite SBI Main branch, Beneath Kids Mall Store, Opp. Pepe Jeans Store, Main road, Mancherial town, Mancherial(dst), Telangana - 504209',
    phone: ['+91-8179598863'],
    email: 'ethosdental.mncl@gmail.com',
    services: ['Dental Implants', 'Root Canal', 'Teeth Extraction', 'Dental Surgery'],
    doctors: ['Dr. Mahesh Chinta'],
    timings: {
      weekdays: '9:00 AM - 8:00 PM',
      weekends: '9:00 AM - 6:00 PM'
    }
  },
  {
    id: 'bhimavaram',
    name: 'Bhimavaram',
    city: 'Bhimavaram',
    address: 'Behind Coffee Day Café, Pattabhi Complex, Juvvalapalem Road, Bhimavaram, West Godavari district, Andhra Pradesh - 534201',
    phone: ['+91-9640936666', '+91-9848063449', '+91-9640996409'],
    email: 'ethosdental.bvrm@gmail.com',
    services: ['Dental Implants', 'Cosmetic Dentistry', 'Orthodontics', 'Periodontics'],
    doctors: ['Dr. Mahesh Chinta', 'Dr. Charishma'],
    timings: {
      weekdays: '9:00 AM - 8:00 PM',
      weekends: '9:00 AM - 6:00 PM'
    }
  }
];
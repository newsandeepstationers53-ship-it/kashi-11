export interface ServiceItem {
  id: string;
  category: 'mobile' | 'laptop' | 'desktop' | 'software' | 'peripherals';
  title: string;
  titleHi: string;
  description: string;
  descriptionHi: string;
  typicalTime: string;
  typicalTimeHi: string;
  startingPrice: number;
  features: string[];
  featuresHi: string[];
}

export interface ReviewItem {
  id: string;
  name: string;
  location: string;
  rating: number;
  date: string;
  comment: string;
  deviceRepaired: string;
}

export interface RepairJobTicket {
  ticketId: string;
  customerName: string;
  phone: string;
  device: string;
  issue: string;
  status: 'received' | 'diagnosing' | 'parts_ready' | 'repairing' | 'tested' | 'ready';
  statusLabel: string;
  statusLabelHi: string;
  dateReceived: string;
  estimatedDelivery: string;
  estimatedCost: number;
  notes: string;
}

export const SHOP_INFO = {
  name: 'Kashi Computer and Mobile Repairing',
  nameHi: 'काशी कंप्यूटर एवं मोबाइल रिपेयरिंग',
  tagline: 'Trusted Computer, Laptop & Smartphone Chip-Level Repair Lab in Raebareli',
  taglineHi: 'रायबरेली में कंप्यूटर, लैपटॉप एवं मोबाइल रिपेयरिंग की सबसे भरोसेमंद दुकान',
  phone: '7398396002',
  phoneFormatted: '+91 7398396002',
  phoneTel: 'tel:7398396002',
  address: 'Shukla Complex, Rajghat, Raebareli, Uttar Pradesh - 229001',
  addressHi: 'शुक्ला कॉम्प्लेक्स, राजघाट, रायबरेली, उत्तर प्रदेश - 229001',
  landmark: 'Near Rajghat, Shukla Complex, Central Raebareli',
  landmarkHi: 'राजघाट के पास, शुक्ला कॉम्प्लेक्स, मुख्य रायबरेली',
  openingHours: 'Mon - Sat: 9:30 AM – 8:30 PM | Sun: 10:00 AM – 5:00 PM',
  openingHoursHi: 'सोमवार - शनिवार: सुबह 9:30 से रात 8:30 | रविवार: सुबह 10:00 से शाम 5:00',
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Shukla+Complex+Rajghat+Raebareli',
  email: 'newsandeepstationers53@gmail.com',
  whatsappUrl: (msg?: string) => {
    const text = msg || 'Hello Kashi Computer, I need help with repairing my device. Please give me details.';
    return `https://wa.me/917398396002?text=${encodeURIComponent(text)}`;
  }
};

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'mobile-screen',
    category: 'mobile',
    title: 'Smartphone Screen & Folder Replacement',
    titleHi: 'स्मार्टफोन स्क्रीन एवं फोल्डर रिप्लेसमेंट',
    description: 'Quick 45-minute original OLED/AMOLED and In-Cell display replacement with touch calibration and tempered glass.',
    descriptionHi: 'ओरिजिनल OLED/AMOLED एवं टच डिस्प्ले 45 मिनट में बदलें, साथ में वारंटी और टेम्पर्ड ग्लास।',
    typicalTime: '45 - 60 Mins',
    typicalTimeHi: '45 - 60 मिनट',
    startingPrice: 899,
    features: ['Original & Premium High-Quality Folders', 'Touch sensitivity test passed', 'Free cleaning & frame alignment', 'Up to 90 Days warranty'],
    featuresHi: ['ओरिजिनल एवं प्रीमियम डिस्प्ले', 'टच सेंसिटिविटी टेस्टेड', 'फ्री फ्रेम एलाइनमेंट एवं क्लीनिंग', '90 दिनों तक की वारंटी']
  },
  {
    id: 'laptop-motherboard',
    category: 'laptop',
    title: 'Laptop Chip-Level Motherboard Repair',
    titleHi: 'लैपटॉप मदरबोर्ड चिप-लेवल रिपेयर',
    description: 'Advanced microscope diagnosis, dead laptop revival, short circuit removal, power IC, and graphics chip soldering.',
    descriptionHi: 'माइक्रोस्कोप डायग्नोसिस, डेड लैपटॉप चालू करना, शार्ट सर्किट एवं पावर IC बदलना।',
    typicalTime: '2 - 4 Hours',
    typicalTimeHi: '2 - 4 घंटे',
    startingPrice: 650,
    features: ['BGA chip-level soldering station', 'Dead motherboard revival', 'Power section / charging IC fix', 'Thermal repasting included'],
    featuresHi: ['BGA चिप सोल्डरिंग स्टेशन', 'डेड लैपटॉप रिपेयरिंग', 'चार्जिंग IC एवं पावर सर्किट फिक्स', 'थर्मल पेस्टिंग सर्विस']
  },
  {
    id: 'battery-replacement',
    category: 'mobile',
    title: 'Mobile & Laptop Battery Replacement',
    titleHi: 'मोबाइल व लैपटॉप बैटरी रिप्लेसमेंट',
    description: 'Solve fast battery draining, random shutdowns, and swollen batteries with 100% capacity grade-A cells.',
    descriptionHi: 'बैटरी बैकअप की समस्या, जल्दी डाउन होना और फूली हुई बैटरी तुरंत बदलें 100% बैकअप के साथ।',
    typicalTime: '30 Mins',
    typicalTimeHi: '30 मिनट',
    startingPrice: 450,
    features: ['Original capacity lithium-ion & polymer cells', 'Backup guarantee', 'No phone heating issues', 'Warranty certificate'],
    featuresHi: ['ओरिजिनल कैपेसिटी लिथियम सेल्स', 'लंबा बैकअप गारंटी', 'ओवरहीटिंग से सुरक्षा', 'वारंटी गारंटी']
  },
  {
    id: 'ssd-ram-upgrade',
    category: 'laptop',
    title: 'High-Speed SSD & RAM Boost Upgrade',
    titleHi: 'सुपर-फास्ट SSD एवं RAM अपग्रेड',
    description: 'Make old slow laptops 10x faster! NVMe M.2 & SATA SSD installation with seamless OS cloning and zero data loss.',
    descriptionHi: 'पुराने धीमे कंप्यूटर और लैपटॉप को 10 गुना तेज बनाएं। NVMe SSD और RAM अपग्रेड करें।',
    typicalTime: '60 Mins',
    typicalTimeHi: '60 मिनट',
    startingPrice: 1200,
    features: ['10x speed boost guaranteed', 'Kingston, Crucial, WD branded SSDs', 'Full data and software migration', '3-5 Years manufacturer SSD warranty'],
    featuresHi: ['10x स्पीड की गारंटी', 'ब्रांडेड NVMe/SATA SSDs', 'पूरा डेटा सुरक्षित ट्रांसफर', '3-5 साल की वारंटी']
  },
  {
    id: 'software-flashing',
    category: 'software',
    title: 'Software Flashing, FRP & Windows Installation',
    titleHi: 'सॉफ्टवेयर फ्लैशिंग, FRP व विंडोज इंस्टॉलेशन',
    description: 'Fix phone bootloops, stuck on logo, pattern locks, Google FRP bypass, clean Windows 11/10 install with genuine drivers.',
    descriptionHi: 'हैंग होना, लोगो पर अटकना, पैटर्न लॉक, FRP अनलॉक और नया विंडोज 11/10 इंस्टॉलेशन।',
    typicalTime: '45 Mins',
    typicalTimeHi: '45 मिनट',
    startingPrice: 300,
    features: ['Official firmware flashing', 'Driver installation & antivirus', 'Data recovery assistance', 'Lifetime activation guidance'],
    featuresHi: ['ऑफिशियल फर्मवेयर फ्लैशिंग', 'सभी ड्राइवर्स व एंटीवायरस', 'डेटा रिकवरी सहायता', 'बेहतर परफॉरमेंस']
  },
  {
    id: 'water-damage',
    category: 'mobile',
    title: 'Water Damage & Ultrasonic Cleaning',
    titleHi: 'पानी में गिरा फोन व लिक्विड डैमेज ट्रीटमेंट',
    description: 'Ultrasonic chemical bath treatment for phones and laptops dropped in water. Saves crucial data and motherboard circuits.',
    descriptionHi: 'पानी या चाय में गिरे फोन और लैपटॉप की अल्ट्रासोनिक क्लीनिंग और सर्किट रिपेयर।',
    typicalTime: '2 - 3 Hours',
    typicalTimeHi: '2 - 3 घंटे',
    startingPrice: 500,
    features: ['Ultrasonic deep cleaning', 'Moisture and corrosion removal', 'Power rail testing', 'Maximum success recovery rate'],
    featuresHi: ['अल्ट्रासोनिक डीप क्लीनिंग', 'जंग व नमी की सफाई', 'सर्किट सेफ्टी टेस्टिंग', 'उच्चतम रिकवरी रेट']
  },
  {
    id: 'hinge-body-repair',
    category: 'laptop',
    title: 'Laptop Broken Hinge & Body Fabrication',
    titleHi: 'लैपटॉप टूटा हिंज व बॉडी फैब्रिकेशन',
    description: 'Broken laptop screen corners, cracked hinges, separated panels restored strongly without expensive body replacement.',
    descriptionHi: 'टूटा हुआ हिंज, स्क्रीन का कोना या केसिंग बिना पूरी बॉडी बदले मजबूत बनाएं।',
    typicalTime: '2 Hours',
    typicalTimeHi: '2 घंटे',
    startingPrice: 400,
    features: ['Heavy-duty steel binding', 'Smooth opening & closing tension', 'No display panel stress', 'Same-day repair'],
    featuresHi: ['मजबूत स्टील बाइंडिंग', 'मुलायम ओपनिंग-क्लोजिंग', 'स्क्रीन सुरक्षित', 'उसी दिन डिलीवरी']
  },
  {
    id: 'cctv-printer',
    category: 'peripherals',
    title: 'Printer Repair & CCTV Camera Setup',
    titleHi: 'प्रिंटर रिपेयर, कार्ट्रिज रिफिल व CCTV सेटअप',
    description: 'LaserJet cartridge refilling, paper jam fixes, head cleaning, Wi-Fi router setup, and CCTV security installations in Raebareli.',
    descriptionHi: 'लेज़रजेट टोनर रिफिल, पेपर जैम ठीक करना, प्रिंटर हेड सफाई और CCTV कैमरा इंस्टॉलेशन।',
    typicalTime: '1 - 2 Hours',
    typicalTimeHi: '1 - 2 घंटे',
    startingPrice: 250,
    features: ['High-density dark ink refill', 'Canon & HP certified servicing', 'Wi-Fi camera mobile viewing setup', 'On-site service in Raebareli'],
    featuresHi: ['गहरा डार्क प्रिंट रिफिल', 'एचपी व कैनन प्रिंटर सर्विस', 'मोबाइल पर लाइव CCTV देखना', 'रायबरेली में ऑन-साइट सहायता']
  }
];

export const ESTIMATOR_DEVICES = [
  { id: 'smartphone', name: 'Smartphone / Mobile Phone', nameHi: 'स्मार्टफोन / मोबाइल' },
  { id: 'laptop', name: 'Laptop', nameHi: 'लैपटॉप' },
  { id: 'desktop', name: 'Desktop PC / Computer', nameHi: 'डेस्कटॉप कंप्यूटर' },
  { id: 'printer', name: 'Printer / Peripherals', nameHi: 'प्रिंटर व अन्य' }
];

export const ESTIMATOR_BRANDS: Record<string, string[]> = {
  smartphone: ['Samsung', 'Apple iPhone', 'Xiaomi / Redmi / Poco', 'Vivo', 'Oppo', 'Realme', 'OnePlus', 'Motorola', 'Infinix / Tecno', 'Nothing Phone', 'Other'],
  laptop: ['HP', 'Dell', 'Lenovo', 'Asus', 'Acer', 'Apple MacBook', 'MSI', 'Toshiba / Sony', 'Other'],
  desktop: ['Custom Gaming / Assembled PC', 'HP Commercial', 'Dell OptiPlex', 'Lenovo ThinkCentre', 'Zebronics / Frontech', 'Other'],
  printer: ['HP LaserJet / Ink Tank', 'Canon Pixma / ImageClass', 'Epson EcoTank', 'Brother', 'Other']
};

export const ESTIMATOR_ISSUES: Record<string, { id: string; label: string; labelHi: string; minPrice: number; maxPrice: number; estTime: string; warranty: string }[]> = {
  smartphone: [
    { id: 'broken_screen', label: 'Broken Screen / Touch Not Working', labelHi: 'स्क्रीन टूट गई / टच काम नहीं कर रहा', minPrice: 899, maxPrice: 3200, estTime: '45 Mins', warranty: '60 - 90 Days' },
    { id: 'battery_drain', label: 'Battery Draining Fast / Swollen Battery', labelHi: 'बैटरी जल्दी खत्म हो रही / फूल गई है', minPrice: 450, maxPrice: 1200, estTime: '30 Mins', warranty: '90 Days' },
    { id: 'charging_port', label: 'Charging Jack Loose / Not Charging', labelHi: 'चार्जिंग पिन खराब / चार्ज नहीं हो रहा', minPrice: 250, maxPrice: 650, estTime: '30 Mins', warranty: '30 Days' },
    { id: 'water_damage', label: 'Fell in Water / Won\'t Turn On', labelHi: 'पानी में गिर गया / चालू नहीं हो रहा', minPrice: 499, maxPrice: 1500, estTime: '2 - 3 Hours', warranty: 'Service Warranty' },
    { id: 'software_frp', label: 'Pattern Lock / FRP Lock / Stuck on Logo', labelHi: 'पैटर्न लॉक / लोगो पर अटकना / सॉफ्टवेयर', minPrice: 300, maxPrice: 700, estTime: '45 Mins', warranty: '100% Solution' },
    { id: 'speaker_mic', label: 'Speaker / Mic / Camera Not Working', labelHi: 'माइक / स्पीकर / कैमरा आवाज नहीं आ रही', minPrice: 250, maxPrice: 750, estTime: '45 Mins', warranty: '30 Days' }
  ],
  laptop: [
    { id: 'slow_laptop', label: 'Very Slow Boot / Need Fast SSD & RAM', labelHi: 'लैपटॉप बहुत धीमा / SSD व RAM अपग्रेड', minPrice: 1250, maxPrice: 3400, estTime: '60 Mins', warranty: '3 Years SSD Warranty' },
    { id: 'dead_laptop', label: 'Laptop Won\'t Power On (Dead / Motherboard)', labelHi: 'लैपटॉप ऑन नहीं हो रहा / डेड मदरबोर्ड', minPrice: 650, maxPrice: 2400, estTime: '2 - 4 Hours', warranty: '60 Days' },
    { id: 'screen_broken', label: 'Flickering or Broken Laptop Screen Display', labelHi: 'लैपटॉप डिस्प्ले खराब / लाइनें आ रही', minPrice: 2200, maxPrice: 4500, estTime: '1 - 2 Hours', warranty: '90 Days' },
    { id: 'hinge_broken', label: 'Broken Hinge / Loose Body Case Opening', labelHi: 'टूटा हिंज / ढक्कन खोलने में परेशानी', minPrice: 400, maxPrice: 950, estTime: '2 Hours', warranty: 'Lifetime Joint Fit' },
    { id: 'laptop_battery', label: 'Laptop Battery Backup 0% / Plugged In Only', labelHi: 'लैपटॉप बैटरी खराब / प्लग हटाते ही बंद', minPrice: 1100, maxPrice: 2400, estTime: '30 Mins', warranty: '6 - 12 Months' },
    { id: 'heating_fan', label: 'Overheating / Fan Noise / Shutting Down', labelHi: 'लैपटॉप गरम होना / फैन की आवाज व बंद होना', minPrice: 350, maxPrice: 600, estTime: '45 Mins', warranty: 'Clean Guarantee' }
  ],
  desktop: [
    { id: 'pc_no_display', label: 'CPU Turns On But No Display On Monitor', labelHi: 'CPU चालू है पर मॉनिटर पर नो सिग्नल', minPrice: 300, maxPrice: 850, estTime: '45 Mins', warranty: '30 Days' },
    { id: 'pc_smps', label: 'No Power / Burnt SMPS Power Supply', labelHi: 'पावर नहीं आ रही / SMPS पावर सप्लाई खराब', minPrice: 550, maxPrice: 1400, estTime: '30 Mins', warranty: '1 Year SMPS' },
    { id: 'pc_windows', label: 'Windows Crash / Blue Screen / Virus Clean', labelHi: 'विंडोज क्रैश / वायरस / नया सॉफ्टवेयर', minPrice: 300, maxPrice: 600, estTime: '60 Mins', warranty: 'Service Guarantee' },
    { id: 'pc_ssd', label: 'Add SSD For Fast Speed', labelHi: 'तेज स्पीड के लिए नई SSD लगाना', minPrice: 1100, maxPrice: 2800, estTime: '45 Mins', warranty: '3 Years Warranty' }
  ],
  printer: [
    { id: 'toner_refill', label: 'Laser Toner Cartridge Refill (Dark Print)', labelHi: 'लेज़र कार्ट्रिज रिफिल (गहरा प्रिंट)', minPrice: 250, maxPrice: 450, estTime: '20 Mins', warranty: 'High Yield Pages' },
    { id: 'paper_jam', label: 'Paper Jam / Roller Not Picking Paper', labelHi: 'कागज फंसना / रोलर पेपर नहीं ले रहा', minPrice: 350, maxPrice: 750, estTime: '60 Mins', warranty: '30 Days' },
    { id: 'blank_pages', label: 'Faint Print / Blank Pages / Head Clean', labelHi: 'हल्का प्रिंट / खाली पेज निकलना', minPrice: 300, maxPrice: 800, estTime: '60 Mins', warranty: 'Service Guarantee' }
  ]
};

export const INITIAL_TICKETS: RepairJobTicket[] = [
  {
    ticketId: 'KC-8921',
    customerName: 'Amit Verma',
    phone: '9838XXXX12',
    device: 'HP Pavilion 15 (Laptop)',
    issue: 'SSD 512GB Upgrade + Overheating Fan Servicing',
    status: 'ready',
    statusLabel: 'Ready for Pickup',
    statusLabelHi: 'पिकअप के लिए तैयार',
    dateReceived: '2026-10-30',
    estimatedDelivery: '2026-10-31',
    estimatedCost: 2200,
    notes: 'NVMe SSD installed, Windows 11 loaded with genuine drivers. Arctic thermal paste applied.'
  },
  {
    ticketId: 'KC-8922',
    customerName: 'Pooja Tiwari',
    phone: '7905XXXX88',
    device: 'Redmi Note 12 Pro (Mobile)',
    issue: 'Original AMOLED Display Replacement',
    status: 'repairing',
    statusLabel: 'Repair in Progress',
    statusLabelHi: 'रिपेयर का काम प्रगति पर है',
    dateReceived: '2026-10-31',
    estimatedDelivery: '2026-10-31 (Evening)',
    estimatedCost: 1850,
    notes: 'Display arrived from inventory. Screen bonding and UV curing in progress.'
  },
  {
    ticketId: 'KC-8923',
    customerName: 'Rajesh Mishra',
    phone: '9450XXXX45',
    device: 'Dell Vostro 3500 (Laptop)',
    issue: 'Water Spilled on Keyboard & Dead Power Rail',
    status: 'diagnosing',
    statusLabel: 'Diagnosis in Progress',
    statusLabelHi: 'जांच जारी है',
    dateReceived: '2026-10-31',
    estimatedDelivery: '2026-11-01',
    estimatedCost: 1200,
    notes: 'Motherboard undergoing ultrasonic wash to remove liquid carbonization.'
  }
];

export const REVIEWS_LIST: ReviewItem[] = [
  {
    id: 'rev-1',
    name: 'Suresh Chandra Sharma',
    location: 'Rajghat, Raebareli',
    rating: 5,
    date: '3 days ago',
    comment: 'My HP laptop was taking 5 minutes to start. Kashi Computer installed an SSD and serviced the fan in just 1 hour. Now it boots in 8 seconds! Extremely honest rates and polite behavior.',
    deviceRepaired: 'HP Laptop SSD Upgrade'
  },
  {
    id: 'rev-2',
    name: 'Mohit Sahu',
    location: 'Civil Lines, Raebareli',
    rating: 5,
    date: '1 week ago',
    comment: 'Replaced broken display for my OnePlus phone at Shukla complex shop. Quality is identical to original, touch is smooth, and they even put a free tempered glass. Highly recommended!',
    deviceRepaired: 'OnePlus Display Replacement'
  },
  {
    id: 'rev-3',
    name: 'Dr. Vivek Pandey',
    location: 'Degree College Road, Raebareli',
    rating: 5,
    date: '2 weeks ago',
    comment: 'My Dell laptop motherboard had short-circuited due to voltage fluctuation. Authorized center asked for 14,000 for full board replacement. Kashi Computer repaired the exact chip for just 1,400. Saved my money and clinic data.',
    deviceRepaired: 'Dell Motherboard Chip Repair'
  },
  {
    id: 'rev-4',
    name: 'Anjali Srivastava',
    location: 'Super Market, Raebareli',
    rating: 5,
    date: 'Last month',
    comment: 'Phone fell into bucket of water. Brought it immediately to Kashi Computer. They dried it professionally with machine and saved all my baby pictures and contacts. Best shop in Raebareli.',
    deviceRepaired: 'Samsung Water Damage Treatment'
  }
];

export const DIAGNOSTIC_STEPS = [
  {
    id: 'q1',
    question: 'What type of device needs inspection?',
    questionHi: 'आप किस उपकरण की जांच कराना चाहते हैं?',
    options: [
      { id: 'mobile', label: 'Smartphone / Mobile', labelHi: 'स्मार्टफोन / मोबाइल', next: 'q_mobile' },
      { id: 'laptop', label: 'Laptop', labelHi: 'लैपटॉप', next: 'q_laptop' },
      { id: 'pc', label: 'Desktop Computer', labelHi: 'डेस्कटॉप कंप्यूटर', next: 'q_pc' }
    ]
  },
  {
    id: 'q_mobile',
    question: 'What is the primary symptom on your phone?',
    questionHi: 'मोबाइल में मुख्य समस्या क्या आ रही है?',
    options: [
      { id: 'm_black_vib', label: 'Screen is black, but phone vibrates or rings', labelHi: 'स्क्रीन काली है, लेकिन फोन बजता या वाइब्रेट करता है', result: 'display_fault' },
      { id: 'm_charge_dead', label: 'Phone is completely dead & won\'t charge', labelHi: 'फोन बिल्कुल ऑन नहीं हो रहा और चार्ज भी नहीं ले रहा', result: 'charging_dead' },
      { id: 'm_water', label: 'Dropped in water / liquid spillage', labelHi: 'पानी में गिर गया था', result: 'water_treatment' },
      { id: 'm_hang_logo', label: 'Stuck on manufacturer logo / restarting continuously', labelHi: 'कंपनी के लोगो पर अटका हुआ है या बार-बार रीस्टार्ट हो रहा', result: 'software_bootloop' }
    ]
  },
  {
    id: 'q_laptop',
    question: 'What is happening with your laptop?',
    questionHi: 'लैपटॉप में क्या परेशानी हो रही है?',
    options: [
      { id: 'l_heat_shut', label: 'Loud fan noise, gets hot, shuts off after 15-30 mins', labelHi: 'फैन बहुत तेज चलता है, गरम होकर 15-20 मिनट में बंद हो जाता है', result: 'thermal_service' },
      { id: 'l_no_power', label: 'Pressing power button does nothing (no lights)', labelHi: 'पावर बटन दबाने पर कोई लाइट नहीं जलती (डेड)', result: 'laptop_dead_motherboard' },
      { id: 'l_cracked_hinge', label: 'Screen hinge is cracked or plastic body opening up', labelHi: 'स्क्रीन का हिंज टूटा है या बॉडी का ढक्कन उखड़ रहा है', result: 'hinge_fabrication' },
      { id: 'l_sluggish', label: 'Takes 5+ minutes to start and programs freeze', labelHi: 'शुरू होने में 5 मिनट लगते हैं और सॉफ्टवेयर अटकते हैं', result: 'ssd_speed_boost' }
    ]
  },
  {
    id: 'q_pc',
    question: 'What is the desktop computer issue?',
    questionHi: 'डेस्कटॉप कंप्यूटर में क्या दिक्कत है?',
    options: [
      { id: 'p_lights_no_disp', label: 'CPU fans spin but monitor says "No Signal"', labelHi: 'CPU चालू हो जाता है लेकिन स्क्रीन पर नो सिग्नल आता है', result: 'ram_display_ic' },
      { id: 'p_total_dead', label: 'No response when power switch is clicked', labelHi: 'पावर बटन दबाने पर बिल्कुल भी बिजली नहीं आती', result: 'smps_power_fail' }
    ]
  }
];

export const DIAGNOSTIC_RESULTS: Record<string, {
  title: string;
  titleHi: string;
  diagnosis: string;
  diagnosisHi: string;
  estimatedFixTime: string;
  priceRange: string;
  urgency: 'high' | 'medium' | 'normal';
  safetyTip: string;
  safetyTipHi: string;
}> = {
  display_fault: {
    title: 'Display Panel / Flex Cable Fault',
    titleHi: 'डिस्प्ले पैनल या केबल की खराबी',
    diagnosis: 'Your phone motherboard and vibration motor are alive! The internal OLED/LCD panel or display flex cable is disconnected or fractured.',
    diagnosisHi: 'आपके फोन का मदरबोर्ड बिल्कुल सही काम कर रहा है। केवल स्क्रीन का अंदरूनी डिस्प्ले या केबल खराब है जिसे नया लगाया जा सकता है।',
    estimatedFixTime: '45 Minutes',
    priceRange: '₹899 - ₹2,500',
    urgency: 'medium',
    safetyTip: 'Do not press hard on the glass, as broken glass can pierce the internal battery.',
    safetyTipHi: 'स्क्रीन पर जोर से दबाव न दें, टूटे कांच से अंदरूनी बैटरी को नुकसान पहुंच सकता है।'
  },
  charging_dead: {
    title: 'Deep Discharged Battery / Charging IC Fault',
    titleHi: 'चार्जिंग पोर्ट पिन या पावर IC की समस्या',
    diagnosis: 'The charging port pins might be bent/corroded, or the charging controller IC has stopped passing 5V current to the battery.',
    diagnosisHi: 'चार्जिंग जैक में कार्बन आ गया है या पावर आईसी 5 वोल्ट करंट बैटरी तक नहीं पहुंचा पा रही है।',
    estimatedFixTime: '30 - 60 Minutes',
    priceRange: '₹250 - ₹650',
    urgency: 'medium',
    safetyTip: 'Do not try cleaning with metal safety pins or needles, as it can spark the positive terminal.',
    safetyTipHi: 'धातु की सुई या सेफ्टी पिन से चार्जिंग सॉकेट न कुरेदें, इससे शॉर्ट सर्किट हो सकता है।'
  },
  water_treatment: {
    title: 'URGENT: Liquid Ingress & Motherboard Corrosion',
    titleHi: 'अति आवश्यक: पानी से मदरबोर्ड में नमी एवं जंग',
    diagnosis: 'Liquid is currently corroding micro-soldering connections. Needs immediate ultrasonic disassembly and chemical dehydrating.',
    diagnosisHi: 'फोन के मदरबोर्ड में पानी जा चुका है। इसे तुरंत खोलकर अल्ट्रासोनिक मशीन में केमिकल ड्रायिंग की जरूरत है।',
    estimatedFixTime: '2 - 3 Hours',
    priceRange: '₹499 - ₹1,200',
    urgency: 'high',
    safetyTip: 'DO NOT connect the phone to the charger or put it in rice! Bring it to Shukla Complex immediately for best survival rate.',
    safetyTipHi: 'फोन को चार्जर में बिल्कुल न लगाएं और चावल में न रखें! तुरंत शुक्ला कॉम्प्लेक्स, राजघाट पर लाएं।'
  },
  software_bootloop: {
    title: 'Corrupted OS Firmware / Flash Memory Issue',
    titleHi: 'सॉफ्टवेयर बूटलूप या करप्ट फर्मवेयर',
    diagnosis: 'System OS files have crashed or storage partition has bad blocks. Official manufacturer firmware re-flashing will resolve this.',
    diagnosisHi: 'ऑपरेटिंग सिस्टम की फाइलें क्रैश हो गई हैं। ऑफिशियल कंपनी सॉफ्टवेयर दोबारा फ्लैश करने से फोन सही हो जाएगा।',
    estimatedFixTime: '45 Minutes',
    priceRange: '₹300 - ₹500',
    urgency: 'normal',
    safetyTip: 'Avoid continuous restart loops as it drains the battery to negative polarity.',
    safetyTipHi: 'बार-बार ऑन-ऑफ न होने दें, बैटरी पूरी तरह डिस्चार्ज होने से बचाएं।'
  },
  thermal_service: {
    title: 'Dried Thermal Paste & Clogged Heat Sink',
    titleHi: 'सूखा हुआ थर्मल पेस्ट व चोक कूलिंग फैन',
    diagnosis: 'The factory cooling paste on the CPU/GPU has turned rock dry and lint has clogged the copper radiator fins.',
    diagnosisHi: 'प्रोसेसर का थर्मल पेस्ट सूख चुका है और पंखे में धूल जम गई है, जिसके कारण ओवरहीट प्रोटेक्शन से लैपटॉप बंद हो रहा है।',
    estimatedFixTime: '45 - 60 Minutes',
    priceRange: '₹350 - ₹550',
    urgency: 'medium',
    safetyTip: 'Continuous running while hot can permanently desolder the CPU chip.',
    safetyTipHi: 'गरम होने पर जबरन इस्तेमाल न करें, इससे प्रोसेसर को नुकसान हो सकता है।'
  },
  laptop_dead_motherboard: {
    title: 'Power Section Short Circuit / 19V Rail Issue',
    titleHi: 'मदरबोर्ड पावर सेक्शन में शॉर्ट सर्किट (19V लाइन)',
    diagnosis: 'A microscopic ceramic capacitor or power MOSFET on the 19V primary line has shorted to ground.',
    diagnosisHi: '19V मेन पावर लाइन का कोई कैपेसिटर या MOSFET शॉर्ट हो गया है। चिप लेवल रिपेयरिंग द्वारा इसे ठीक किया जा सकता है।',
    estimatedFixTime: '2 - 4 Hours',
    priceRange: '₹650 - ₹1,800',
    urgency: 'high',
    safetyTip: 'Do not repeatedly connect high-amp universal chargers.',
    safetyTipHi: 'बार-बार दूसरा चार्जर लगाकर टेस्ट न करें।'
  },
  hinge_fabrication: {
    title: 'Broken Brass Thread Inserts & Hinge Seizure',
    titleHi: 'टूटा हुआ ब्रास थ्रेड व टाइट लैपटॉप हिंज',
    diagnosis: 'The brass nut inserts melted inside the plastic casing have snapped due to overtight hinge tension.',
    diagnosisHi: 'हिंज के टाइट होने की वजह से प्लास्टिक बॉडी के अंदर के नट टूट गए हैं। इसे मेटल री-फैब्रिकेशन से दोबारा मजबूत बनाया जाएगा।',
    estimatedFixTime: '2 Hours',
    priceRange: '₹400 - ₹800',
    urgency: 'medium',
    safetyTip: 'Do not forcefully press the lid down or the display panel will crack in half.',
    safetyTipHi: 'स्क्रीन को जबरदस्ती दबाकर बंद न करें, वरना स्क्रीन बीच से टूट सकती है।'
  },
  ssd_speed_boost: {
    title: 'Mechanical Hard Drive Bottleneck (100% Disk Usage)',
    titleHi: 'धीमी हार्ड डिस्क समस्या (100% डिस्क यूसेज)',
    diagnosis: 'Older mechanical spinning HDDs read at 60MB/s, causing modern Windows 10/11 to freeze. An NVMe or SATA SSD reads at 550MB/s - 3500MB/s!',
    diagnosisHi: 'पुरानी हार्ड डिस्क बहुत धीमी होती है। एक नई SSD लगाने से आपका वही लैपटॉप 10 गुना तेज हो जाएगा।',
    estimatedFixTime: '60 Minutes',
    priceRange: '₹1,250 - ₹2,800',
    urgency: 'normal',
    safetyTip: 'All your existing documents, photos, and files can be safely cloned to the new SSD.',
    safetyTipHi: 'आपका सारा डेटा और फाइल्स बिना डिलीट हुए नई SSD में सुरक्षित ट्रांसफर कर दी जाएंगी।'
  },
  ram_display_ic: {
    title: 'RAM Oxidation / Display Signal Bus Stuck',
    titleHi: 'रैम पर कार्बन या डिस्प्ले सिग्नल लाइन फॉल्ट',
    diagnosis: 'Moisture in Raebareli climate causes oxidation on gold RAM contacts or BIOS chip glitch.',
    diagnosisHi: 'रैम की पिनों पर कार्बन आने या बायोस (BIOS) चिप रुकने के कारण डिस्प्ले नहीं आ रहा है।',
    estimatedFixTime: '30 Minutes',
    priceRange: '₹250 - ₹450',
    urgency: 'normal',
    safetyTip: 'Turn off the main AC power switch before touching internal CPU cables.',
    safetyTipHi: 'कैबिनेट को छूने से पहले मुख्य बिजली का प्लग निकाल दें।'
  },
  smps_power_fail: {
    title: 'SMPS Power Supply Failure',
    titleHi: 'कंप्यूटर SMPS पावर सप्लाई खराब',
    diagnosis: 'The internal 450W desktop power supply unit has blown its fuse or capacitor due to electricity surges.',
    diagnosisHi: 'बिजली के उतार-चढ़ाव से कंप्यूटर की SMPS सप्लाई खराब हो गई है, इसे तुरंत बदला जा सकता है।',
    estimatedFixTime: '20 Minutes',
    priceRange: '₹550 - ₹1,200',
    urgency: 'medium',
    safetyTip: 'Never open the metallic SMPS box directly due to high voltage charge.',
    safetyTipHi: 'SMPS बॉक्स को खुद कभी न खोलें, इसमें हाई वोल्टेज कैपेसिटर होते हैं।'
  }
};

export const FAQS = [
  {
    q: 'How much time does mobile screen replacement take?',
    qHi: 'मोबाइल की स्क्रीन बदलने में कितना समय लगता है?',
    a: 'Most smartphone screen and display replacements are completed in 45 to 60 minutes in front of you at our Shukla Complex shop in Rajghat. We use precision heating separators and UV curing.',
    aHi: 'हमारे शुक्ला कॉम्प्लेक्स, राजघाट स्थित दुकान पर अधिकतर स्मार्टफोन की स्क्रीन 45 से 60 मिनट में आपके सामने बदल दी जाती है।'
  },
  {
    q: 'Do I get a warranty on replaced parts and repairs?',
    qHi: 'क्या बदले गए पार्ट्स पर वारंटी मिलती है?',
    a: 'Yes! We provide 30 to 90 days service and replacement warranty on screens, batteries, and chip-level repairs. SSDs come with 3 to 5 years brand manufacturer warranty.',
    aHi: 'हाँ! स्क्रीन, बैटरी और चिप-लेवल रिपेयर पर 30 से 90 दिनों की वारंटी दी जाती है। नई SSD पर 3 से 5 वर्ष की कंपनी वारंटी मिलती है।'
  },
  {
    q: 'Will my phone or computer data be lost during repair?',
    qHi: 'क्या रिपेयरिंग के दौरान मेरा डेटा सुरक्षित रहेगा?',
    a: 'For hardware repairs (screen, battery, charging port, keyboard, hinge, fan), your photos, contacts, and WhatsApp chats remain 100% untouched. For OS installs or SSD upgrades, we perform complete safe backup before proceeding.',
    aHi: 'हार्डवेयर रिपेयर (स्क्रीन, बैटरी, चार्जिंग जैक, कीबोर्ड) में आपका डेटा 100% सुरक्षित रहता है। विंडोज या सॉफ्टवेयर के काम में हम पहले आपका बैकअप ले लेते हैं।'
  },
  {
    q: 'Can you repair water-damaged dead phones or laptops?',
    qHi: 'क्या पानी में गिरा हुआ फोन या डेड लैपटॉप ठीक हो सकता है?',
    a: 'Yes, we specialize in chip-level microscopic soldering and ultrasonic chemical cleaning. If you bring the water-damaged device immediately without charging, our revival rate is over 92%.',
    aHi: 'जी हाँ, हमारे पास आधुनिक माइक्रोस्कोप और अल्ट्रासोनिक क्लीनिंग मशीन है। अगर फोन तुरंत लाया जाए तो 92% से अधिक मामलों में वह पूरी तरह चालू हो जाता है।'
  },
  {
    q: 'Where is Kashi Computer located in Raebareli?',
    qHi: 'काशी कंप्यूटर की दुकान रायबरेली में कहाँ स्थित है?',
    a: 'We are located at Shukla Complex, Rajghat, Raebareli (UP - 229001). We are easily reachable from Rajghat bridge and main market. You can call us anytime at 7398396002 for live directions.',
    aHi: 'हमारी दुकान शुक्ला कॉम्प्लेक्स, राजघाट, रायबरेली में है। आप 7398396002 पर कॉल करके तुरंत सही रास्ता पूछ सकते हैं।'
  }
];

import { Product } from '@/types/product';

export const products: Product[] = [
  {
    id: '12',
    name: 'Magic Silicone Cleaning Gloves',
    description: 'Premium food-grade, BPA-free silicone gloves with built-in soft scrubber bristles. Heat-resistant up to 230°C (446°F), antibacterial, and waterproof. Perfect for dishwashing, pet grooming, car washing, fruit & vegetable cleaning, and bathroom surfaces. Reusable, dishwasher-safe, and eco-friendly alternative to traditional sponges. Combines comfort, safety, and efficiency in one innovative design.',
    category: 'gloves',
    subcategory: 'domestic',
    image: '/products/cleaning-gloves-blue.png',
    colors: [
      { name: 'Blue', hex: '#22D3EE', image: '/products/cleaning-gloves-blue.png' },
      { name: 'Grey', hex: '#9CA3AF', image: '/products/cleaning-gloves-grey.png' },
      { name: 'Purple', hex: '#A855F7', image: '/products/cleaning-gloves-purple.png' },
      { name: 'Green', hex: '#86EFAC', image: '/products/cleaning-gloves-green.png' },
      { name: 'Pink', hex: '#F472B6', image: '/products/cleaning-gloves-pink.png' },
    ],
    links: {
      flipkart: 'https://www.flipkart.com/tick-mark-reusable-silicone-dishwashing-gloves-kitchen-bathroom-household-use-wet-dry-glove/p/itm89cba3c198cdb?pid=CLGHBYHHT5ENPFPY&lid=LSTCLGHBYHHT5ENPFPYDTSSSW&marketplace=FLIPKART&q=tickmark+polygloves&store=search.flipkart.com&srno=s_1_6&otracker=search&otracker1=search&fm=organic&iid=en_bFLmb4VwKskyis9ZINtY_4CnHcMi4-AjIQ1PLsJ3Tj9JUpidOQpLExXSwiE4v5XwMBOtsenyxiSkMHG1reSCyA%3D%3D&ppt=pp&ppn=pp&ssid=s0mtxd754g0000001768116898207&qH=4203fd872050fe5f',
    },
  },
  {
    id: '15',
    name: 'Cotton Hand Gloves',
    description: 'Made from 100% soft, breathable cotton for all-day comfort. This 10-pair pack is perfect for industrial, household, and general use. Reusable and washable gloves providing excellent grip, sweat absorption, and durability. Ideal for workers, gardeners, and daily cleaning use. Stay safe and comfortable with Tick Mark!',
    category: 'gloves',
    subcategory: 'domestic',
    image: '/products/cotton-gloves-blue.png',
    colors: [
      { name: 'Blue', hex: '#3B82F6', image: '/products/cotton-gloves-blue.png' },
      { name: 'White', hex: '#FFFFFF', image: '/products/cotton-gloves-white.png' },
    ],
    links: {
      flipkart: 'https://www.flipkart.com/tick-mark-5pairs-high-quality-cotton-washable-reusable-gloves-grading-plumber-nylon-polyester-safety/p/itm27e05a674eccf?pid=SYGHA6A289QQ6TU8&lid=LSTSYGHA6A289QQ6TU8C1GPIR&marketplace=FLIPKART&q=tickmark+cotton+gloves&store=search.flipkart.com&srno=s_1_2&otracker=search&otracker1=search&fm=Search&iid=6b5760d5-80eb-4658-95be-b71333263ed1.SYGHA6A289QQ6TU8.SEARCH&ppt=sp&ppn=sp&ssid=rnr16h6xe80000001768117220928&qH=3c0dcbafe95c35af',
    },
  },
  {
    id: '14',
    name: '11kVA Electric Safety Gloves',
    description: 'High-voltage insulated rubber gloves specially designed for electricians, industrial workers, and high-voltage technicians. Provides powerful protection against electric shocks during wiring, testing, repair, and maintenance work. Made from high-quality rubber with excellent grip, durability, and comfort for long working hours. Ideal for electrical panels, transformers, and power line handling. A must-have safety accessory for professionals working with live electrical equipment.',
    category: 'gloves',
    subcategory: 'industrial',
    image: '/products/electric-gloves-beige.png',
    colors: [
      { name: 'Beige', hex: '#D4A574', image: '/products/electric-gloves-beige.png' },
    ],
    links: {
      flipkart: 'https://www.flipkart.com/tick-mark-1pair-11kva-electric-hand-safety-gloves-high-voltage-shockproof-rubber-latex/p/itm3c730b1e74ff9?pid=SYGHHZ4YEVZKZB8D&lid=LSTSYGHHZ4YEVZKZB8DVUCCW1&marketplace=FLIPKART&q=tickmark+electric+gloves&store=gsx%2Fbfk%2F9fn&srno=s_1_12&otracker=search&otracker1=search&fm=Search&iid=3a6ee6b0-bdcf-43a5-83c0-f0c099bc8a6f.SYGHHZ4YEVZKZB8D.SEARCH&ppt=sp&ppn=sp&ssid=7mlfi6idhc0000001768117256044&qH=6d5d74ea22053f75',
    },
  },
  {
    id: '16',
    name: 'Chemical Acid Resistant Gloves',
    description: 'High-performance chemical and acid resistant nitrile gloves with long sleeves and soft cotton lining inside. Waterproof and reusable, perfect for bathroom cleaning, kitchen dishwashing, gardening, laboratory use, and handling garbage. Durable against oil, bleach, and acid. Ideal for commercial and industrial use including chemistry labs, pet handling, hair coloring, mechanic work, resin art, cement and construction. Heavy-duty protection for farming and agriculture.',
    category: 'gloves',
    subcategory: 'industrial',
    image: '/products/acid-gloves-yellow.png',
    colors: [
      { name: 'Yellow', hex: '#FACC15', image: '/products/acid-gloves-yellow.png' },
    ],
    links: {
      flipkart: 'https://www.flipkart.com/tick-mark-yellow-1pair-rubber-hand-safety-gloves-chemical-industrial-multipurpose-use/p/itmd28450a5f9c25?pid=SYGH95MVMX2ZF95V&lid=LSTSYGH95MVMX2ZF95VBFABMP&marketplace=FLIPKART&q=tickmark+electric+gloves&store=gsx%2Fbfk%2F9fn&srno=s_1_3&otracker=search&otracker1=search&fm=Search&iid=3a6ee6b0-bdcf-43a5-83c0-f0c099bc8a6f.SYGH95MVMX2ZF95V.SEARCH&ppt=sp&ppn=sp&ssid=7mlfi6idhc0000001768117256044&qH=6d5d74ea22053f75',
    },
  },
  {
    id: '17',
    name: 'Heavy Duty Welding Gloves',
    description: 'Heat resistant welding gloves designed for professional welders and industrial workers. Made with durable split leather providing high-temperature protection, spark resistance, and extended arm coverage for maximum safety. Features soft inner lining for comfort and long cuff design protecting hands, fingers, and forearms during welding, grinding, cutting, and metalwork. Ideal for industrial use, workshops, fabrication units, and heavy-duty tasks.',
    category: 'gloves',
    subcategory: 'industrial',
    image: '/products/welding-gloves-yellow.png',
    colors: [
      { name: 'Yellow', hex: '#EAB308', image: '/products/welding-gloves-yellow.png' },
    ],
    links: {
      flipkart: 'https://www.flipkart.com/tick-mark-heavy-duty-welding-grinding-gloves-heat-resistant-leather-industrial-hand-gloves-safety/p/itmef361bf95fc58?pid=SYGHHZ4YDYPM8JG5&lid=LSTSYGHHZ4YDYPM8JG5FJKI9E&marketplace=FLIPKART&q=tick+mark+welding+gloves&store=gsx%2Fbfk%2F9fn&srno=s_1_14&otracker=search&otracker1=search&fm=Search&iid=c0543cd3-ff9d-4523-8085-b631c916b431.SYGHHZ4YDYPM8JG5.SEARCH&ppt=pp&ppn=pp&ssid=8z550nec280000001768117313185&qH=6499b4791c6c31d1',
    },
  },
  {
    id: '13',
    name: 'Cotton Safety Gloves with Nitrile Coating',
    description: 'Ultra durable nitrile coated safety gloves designed for industrial, construction, warehouse, and mechanical work. Features superior anti-slip grip, oil resistance, and durability with breathable fabric for all-day comfort. Ideal for loading, repair, gardening, and general maintenance. Provides excellent hand protection against cuts, dirt, and abrasions. Reusable and long-lasting, perfect for both men and women.',
    category: 'gloves',
    subcategory: 'industrial',
    isTopProduct: true,
    image: '/products/safety-gloves-grey.png',
    colors: [
      { name: 'Grey', hex: '#6B7280', image: '/products/safety-gloves-grey.png' },
      { name: 'White', hex: '#FFFFFF', image: '/products/safety-gloves-white.png' },
      { name: 'Grey Green', hex: '#4ADE80', image: '/products/safety-gloves-grey-green.png' },
      { name: 'Blue Grey', hex: '#64748B', image: '/products/safety-gloves-blue-grey.png' },
      { name: 'Yellow Orange', hex: '#FB923C', image: '/products/safety-gloves-yellow-orange.png' },
      { name: 'Brown Black', hex: '#78350F', image: '/products/safety-gloves-brown-black.png' },
      { name: 'Red Black', hex: '#DC2626', image: '/products/safety-gloves-red-black.png' },
      { name: 'White Orange', hex: '#FDBA74', image: '/products/safety-gloves-white-orange.png' },
      { name: 'White Blue', hex: '#93C5FD', image: '/products/safety-gloves-white-blue.png' },
      { name: 'Black', hex: '#1F2937', image: '/products/safety-gloves-black.png' },
      { name: 'Orange Black', hex: '#EA580C', image: '/products/safety-gloves-orange-black.png' },
      { name: 'Blue Black', hex: '#1E40AF', image: '/products/safety-gloves-blue-black.png' },
      { name: 'Grey White', hex: '#D1D5DB', image: '/products/safety-gloves-grey-white.png' },
    ],
    links: {
      flipkart: 'https://www.flipkart.com/tick-mark-5pair-red-black-heat-rsistance-nylon-hand-safety-gloves-gardening-industry/p/itm5a966a15bc514?pid=SYGHHZ83WKBC89ZN&lid=LSTSYGHHZ83WKBC89ZNHA1CY9&marketplace=FLIPKART&q=tick+mark+welding+gloves&store=gsx%2Fbfk%2F9fn&srno=s_1_5&otracker=search&otracker1=search&fm=Search&iid=c0543cd3-ff9d-4523-8085-b631c916b431.SYGHHZ83WKBC89ZN.SEARCH&ppt=pp&ppn=pp&ssid=8z550nec280000001768117313185&qH=6499b4791c6c31d1',
    },
  },
  {
    id: '2',
    name: 'N95 Safety Masks',
    description: 'Protective N95 masks for respiratory safety. Certified and comfortable.',
    category: 'masks',
    image: '/products/n95.png',
    colors: [
      { name: 'White', hex: '#FFFFFF' },
    ],
    links: {
      flipkart: 'https://www.flipkart.com/tick-mark-black-n95-medical-mask-reusable-breathable-anti-dust-pollutionprotectivefacemask-kn-95-medical-mask-1-reusable-washable-water-resistant-surgical-melt-blown-fabric-layer/p/itm6026cd4faeb2d?pid=MRPH9QRYZE7BXDPC&lid=LSTMRPH9QRYZE7BXDPCE72JB3&marketplace=FLIPKART&q=n95+safety+masks+tickmark&store=hlc%2F20m%2Fled%2Fdew&srno=s_1_6&otracker=search&otracker1=search&fm=Search&iid=en_mb-7bR166kNyJyfrUIt-Gk21Br-eJ6kujoZiDYzH3UACy2FAh0v4e8fOf4-FQjJ-r5IDC-vuhFr9Ww266rsFww%3D%3D&ppt=sp&ppn=sp&ssid=5cchlqf9y25qyv401766316161608&qH=666c33dc2d4651f8',
    },
  },
  {
    id: '3',
    name: 'Adjustable Walking Stick',
    description: 'Ergonomic walking stick with adjustable height. Lightweight and sturdy.',
    category: 'walking-sticks',
    image: '/products/walkingstick.png',
    colors: [
      { name: 'Black', hex: '#1F2937' },
    ],
    links: {
      flipkart: 'https://flipkart.com/product/example',
    },
  },
  {
    id: '18',
    name: 'Premium Nitrile Examination Gloves',
    description: 'High-quality disposable nitrile gloves designed for medical, clinical, cleaning, food handling, and safety use. Powder-free for comfort and reduced skin irritation, suitable for sensitive skin. Strong yet flexible design providing excellent hand protection during examination, surgical assistance, or daily tasks requiring hygiene and safety. Each box contains 100 single-use disposable gloves, ideal for hospitals, clinics, laboratories, salons, and home use. Trusted for quality, durability, and comfort.',
    category: 'gloves',
    subcategory: 'examination',
    isTopProduct: true,
    image: '/products/latex-gloves-blue.png',
    colors: [
      { name: 'Blue', hex: '#3B82F6', image: '/products/latex-gloves-blue.png' },
      { name: 'Black', hex: '#1F2937', image: '/products/latex-gloves-black.png' },
    ],
    links: {
      flipkart: 'https://www.flipkart.com/tick-mark-black-nitrile-gloves-powder-free-medical-grade-disposable-hand-examination/p/itm18318c6d5edf7?pid=MGVH6KAG7MCGP4EW&lid=LSTMGVH6KAG7MCGP4EWNLS51R&marketplace=FLIPKART&q=nitrile+gloves+tickmrk&store=hlc%2Fmly%2Fqbi%2F8ca&srno=s_1_1&otracker=search&otracker1=search&fm=Search&iid=en_Yzzkac2OZFPCMnP0dGGn_6qU8K-sOvfOwp6Nygg32aPrI1JIMo3UqIStpxJd6vu8TxYKNYdb_FgAAIz0cZsEmw%3D%3D&ppt=pp&ppn=pp&ssid=2ufksym62o0000001768121962817&qH=d754edaba314fd81',
    },
  },
  {
    id: '21',
    name: 'Premium Latex Examination Gloves',
    description: 'High-quality disposable latex gloves designed for medical, clinical, cleaning, food handling, and safety use. Powder-free for comfort and reduced skin irritation, suitable for sensitive skin. Strong yet flexible design providing excellent hand protection during examination, surgical assistance, or daily tasks requiring hygiene and safety. Multi-purpose use for clinic, salon, and examination. Trusted for quality, durability, and comfort.',
    category: 'gloves',
    subcategory: 'examination',
    image: '/products/latex-gloves-blue.png',
    colors: [
      { name: 'Blue', hex: '#3B82F6', image: '/products/latex-gloves-blue.png' },
      { name: 'Black', hex: '#1F2937', image: '/products/latex-gloves-black.png' },
      { name: 'White', hex: '#FFFFFF', image: '/products/latex-gloves-white.png' },
    ],
    links: {
      flipkart: 'https://www.flipkart.com/tick-mark-glove-care-latex-surgical-gloves-multi-purpose-use-clinic-salon-examination/p/itmb0bcc34353982?pid=MGVH6J7FCZVQCXRN&lid=LSTMGVH6J7FCZVQCXRNXS0ATH&marketplace=FLIPKART&q=latex%5C+gloves+tickmrk&store=hlc%2Fmly%2Fqbi%2F8ca&srno=s_1_3&otracker=search&otracker1=search&fm=Search&iid=283c7641-6a46-4e13-bd7f-8066e3009a15.MGVH6J7FCZVQCXRN.SEARCH&ppt=sp&ppn=sp&ssid=5npiv5qcog0000001768122004557&qH=1876420f4a8a71a7',
    },
  },
  {
    id: '19',
    name: 'Disposable Polyethylene Gloves',
    description: 'High-quality disposable plastic gloves made of durable polyethylene material. 100% latex and powder-free, non-sterile, non-toxic, and hygienic with no rubber odor. Perfect for cooking, kitchen cleaning, food preparation, serving meals, and crafts. Strong and comfortable, keeps hands dry and protected. Each box contains 200 gloves suitable for adults, can be used by both men and women on either hand. Environmental PE material for safe food handling.',
    category: 'gloves',
    subcategory: 'examination',
    image: '/products/polythene-gloves-transparent.png',
    colors: [
      { name: 'Transparent', hex: '#E5E7EB', image: '/products/polythene-gloves-transparent.png' },
    ],
    links: {
      flipkart: 'https://www.flipkart.com/tick-mark-disposable-plastic-hand-gloves-kitchen-food-salon-cleaning-use-polyisoprene-examination/p/itm0467bf7abb2aa?pid=MGVHHQCHKXCMQYS5&lid=LSTMGVHHQCHKXCMQYS5M7TZUG&marketplace=FLIPKART&q=tickmark+poly+gloves&store=hlc%2Fmly%2Fqbi%2F8ca&srno=s_1_3&otracker=search&otracker1=search&fm=Search&iid=7c780cc7-5f42-41ed-8460-5fb30594e540.MGVHHQCHKXCMQYS5.SEARCH&ppt=pp&ppn=pp&ssid=jaj52o2xm80000001768117396574&qH=eac4009f6134a380',
    },
  },
  {
    id: '5',
    name: 'Surgical Masks',
    description: '3-ply surgical masks with high filtration efficiency.',
    category: 'masks',
    image: '/products/surgicalmasks.png',
    colors: [
      { name: 'Blue', hex: '#60A5FA' },
      { name: 'Black', hex: '#1F2937' },
    ],
    links: {
      flipkart: 'https://www.flipkart.com/tick-mark-100pc-black-surgical-disposable-medical-mask-hospital-pollution-3-ply-non-woven-fabric-face-ear-loop-non-washable-water-resistant/p/itm9ce95073ca6e2?pid=MRPHHYRNFCWNC6PU&lid=LSTMRPHHYRNFCWNC6PUQATB4N&marketplace=FLIPKART&q=surgical+masks+tickmark&store=hlc%2Fmly%2Fqbi%2Fmdt&srno=s_1_4&otracker=search&otracker1=search&fm=Search&iid=4f92abb0-2942-46d1-aa0c-d313a77a2be5.MRPHHYRNFCWNC6PU.SEARCH&ppt=sp&ppn=sp&ssid=a156ks0wm5rjteyo1766316251476&qH=7fe33a793c8343cd',
    },
  },
  {
    id: '7',
    name: 'Bouffant Cap',
    description: 'High-quality disposable head covering designed to maintain hygiene and cleanliness in professional settings. Made from lightweight, non-woven fabric providing full coverage for hair, reducing contamination risk in sterile environments like hospitals, labs, and food processing areas. Package contains 60 black and 60 white caps (120 total). Soft and comfortable for extended wear in medical, clinic, spa, salon, and surgical settings.',
    category: 'protective-wear',
    isTopProduct: true,
    image: '/products/bouffant-cap-white.png',
    colors: [
      { name: 'White', hex: '#FFFFFF', image: '/products/bouffant-cap-white.png' },
      { name: 'Blue', hex: '#3B82F6', image: '/products/bouffant-cap-blue.png' },
      { name: 'Black', hex: '#1F2937', image: '/products/bouffant-cap-black.png' },
      { name: 'Green', hex: '#22C55E', image: '/products/bouffant-cap-green.png' },
    ],
    links: {
      flipkart: 'https://www.flipkart.com/tick-mark-black-white120-pc-breathable-non-woven-bouffant-cap-medical-clinic-spa-salon-surgical-head/p/itm86298ce7cd24a?pid=SAAH5THZXAGE4JGF&lid=LSTSAAH5THZXAGE4JGFYZVTGN&marketplace=FLIPKART&q=bouffant+cap&store=hlc%2Fmly%2Fqbi%2Fu82&srno=s_1_5&otracker=search&otracker1=search&fm=Search&iid=f336b20d-9082-44ac-bf0d-97931a312e5f.SAAH5THZXAGE4JGF.SEARCH&ppt=sp&ppn=sp&ssid=abih67o70w0000001768118973419&qH=a70d70dfa08c98fa',
    },
  },
  {
    id: '8',
    name: 'Alcohol Swabs',
    description: '100-piece alcohol swabs individually wrapped and pre-moistened with 70% isopropyl alcohol for quick and effective skin cleansing and surface disinfection. Soft, non-woven pad gentle on skin, ideal for preparing skin before injections, blood draws, or minor medical procedures. Perfect for medical, first-aid, or personal use - cleaning wounds, sanitizing hands, or disinfecting surfaces like medical equipment or phone screens. Tear-open foil packaging provides easy access. Single-use design ensures hygiene and convenience. Suitable for healthcare professionals and home use, reliable choice for maintaining cleanliness and preventing infections.',
    category: 'medical-supplies',
    image: '/products/alcohol-swabs.png',
    links: {
      flipkart: 'https://flipkart.com/product/example',
    },
  },
  {
    id: '9',
    name: 'Rapid Test Kits',
    description: 'Fast and accurate rapid test kits for various health screenings. Easy to use and reliable.',
    category: 'medical-supplies',
    image: '/products/rapid-test-kits.png',
    colors: [
      { name: 'White', hex: '#FFFFFF' },
    ],
    links: {
      flipkart: 'https://flipkart.com/product/example',
    },
  },
  {
    id: '20',
    name: 'Electrical Heating Pad',
    description: 'Innovative electrical heating pad for pain relief and targeted warmth to soothe aches and discomfort. Perfect for managing pain in the back, neck, shoulders, abdomen, and other body areas. Features customizable heat settings to suit your needs and delivers consistent warmth to promote relaxation and recovery. Designed for convenience and comfort. Available in multiple colors and designs.',
    category: 'medical-supplies',
    isTopProduct: true,
    image: '/products/heating-pad.png',
    links: {
      flipkart: 'https://www.flipkart.com/tick-mark-electrical-heating-pad-pain-relief-period-hot-bag-filled-gel-1-lmulticolor/p/itma0afe834f30ca?pid=HPDH7ZBF5HFU9EKN&lid=LSTHPDH7ZBF5HFU9EKNLTYNJP&marketplace=FLIPKART&q=heating+pad&store=search.flipkart.com&srno=s_1_6&otracker=search&otracker1=search&fm=Search&iid=en_hwlNZYHQtgtMVa9AXFS6GPd9HC4TutoBJvIFhzYvvHhi8mpqkCJDfFghOI82EqrR9MIbJq6xr2aUK3fUqWmw5Q%3D%3D&ppt=sp&ppn=sp&ssid=7dwuelzyi80000001768120160411&qH=5d719df52432d798',
    },
  },
  {
    id: '10',
    name: 'Foot Covers',
    description: 'Disposable foot covers for hygiene and protection. Perfect for medical, food service, and cleanroom environments.',
    category: 'protective-wear',
    image: '/products/foot-covers.png',
    colors: [
      { name: 'Blue', hex: '#3B82F6' },
      { name: 'White', hex: '#FFFFFF' },
    ],
    links: {
      flipkart: 'https://flipkart.com/product/example',
    },
  },
  {
    id: '11',
    name: 'Protective Aprons',
    description: 'Disposable protective aprons for medical, food service, and industrial use. Water-resistant and durable.',
    category: 'protective-wear',
    image: '/products/aprons.png',
    colors: [
      { name: 'White', hex: '#FFFFFF' },
      { name: 'Blue', hex: '#3B82F6' },
      { name: 'Green', hex: '#22C55E' },
    ],
    links: {
      flipkart: 'https://flipkart.com/product/example',
    },
  },
];

export function setUpSEO() {
  if (typeof window === 'undefined') return;

  const keywords = [
    'Natiapara Air Travels',
    'Air Ticket Bangladesh',
    'International Air Ticket',
    'Domestic Air Ticket',
    'Helicopter Booking Bangladesh',
    'Helicopter Rental Bangladesh',
    'Overseas Manpower Bangladesh',
    'Manpower Agency Bangladesh',
    'Visa Processing Bangladesh',
    'Travel Agency Tangail',
    'Travel Agency Bangladesh',
    'Work Visa Service',
    'Saudi Visa Processing',
    'UAE Work Permit',
    'Overseas Employment',
    'Travel Consultancy Bangladesh',
  ].join(', ');

  const titleText = 'Natiapara Air Travels | Your Trusted Travel & Overseas Employment Partner';
  const descText =
    'Professional air ticketing, helicopter reservation, visa support and overseas manpower services from Bangladesh to the world. Government Registered Reg. No.: 0016596. Contact us for quick bookings.';

  // Update Main Document Title
  document.title = titleText;

  // Setup standard Metatags
  updateMeta('description', descText);
  updateMeta('keywords', keywords);

  // Setup Open Graph metatags
  updateMeta('og:title', titleText, 'property');
  updateMeta('og:description', descText, 'property');
  updateMeta('og:type', 'website', 'property');
  updateMeta('og:image', '/src/assets/images/aviation_hero_bg_1780953603171.png', 'property');

  // Setup Twitter metatags
  updateMeta('twitter:card', 'summary_large_image');
  updateMeta('twitter:title', titleText);
  updateMeta('twitter:description', descText);

  // Setup Structured JSON-LD Scheme
  const schemaId = 'natiapara-structured-schema';
  let schemaScript = document.getElementById(schemaId) as HTMLScriptElement;
  if (!schemaScript) {
    schemaScript = document.createElement('script');
    schemaScript.id = schemaId;
    schemaScript.type = 'application/ld+json';
    document.head.appendChild(schemaScript);
  }

  const structuredSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    'name': 'Natiapara Air Travels',
    'alternateName': 'নাটিয়াপাড়া এয়ার ট্রাভেলস',
    'image': '/src/assets/images/aviation_hero_bg_1780953603171.png',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Natiapara Bazar, M A Plaza, Poraikhali Road, Delduar',
      'addressLocality': 'Tangail',
      'addressCountry': 'BD',
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': '24.1624641',
      'longitude': '89.9654162',
    },
    'url': window.location.href,
    'telephone': ['+8801739284204', '+8801305040763'],
    'email': 'natiaparatravels@gmail.com',
    'knowsAbout': [
      'International Air Ticket Booking',
      'Domestic Flight Tickets',
      'Helicopter charters reservation',
      'Visa Processing consultations',
      'Government Overseas Manpower employment',
    ],
    'hasCredential': {
      '@type': 'EducationalOccupationalCredential',
      'credentialCategory': 'Government Manpower License & Registry',
      'name': 'Government Registered Agent Reg. No.: 0016596',
    },
  };

  schemaScript.textContent = JSON.stringify(structuredSchema, null, 2);
}

function updateMeta(name: string, content: string, type: 'name' | 'property' = 'name') {
  let element = document.querySelector(`meta[${type}="${name}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(type, name);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

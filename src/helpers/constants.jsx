import PlaceIcon from '@mui/icons-material/Place';
import StarsIcon from '@mui/icons-material/Stars';
import SpeakerNotesIcon from '@mui/icons-material/SpeakerNotes';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';

const services = [
    {
      text: 'Test Preparing & Coaching',
      icon: <ContactPhoneIcon sx={{ color: '#fcaf4d' }} />,
    },
    {
      text: 'Course, Country & University Selection',
      icon: <PlaceIcon sx={{ color: '#ff7361' }} />,
    },
    {
      text: 'Application Assistance',
      icon: <SpeakerNotesIcon sx={{ color: '#3f7ef6' }} />,
    },
    {
      text: 'Scholarships',
      icon: <StarsIcon sx={{ color: '#6c48f0' }} />,
    },
];

const serviceDetails = [
  {
    text: 'Virtual & In Person Coaching and Counselling',
    icon: <StarsIcon style={{ color: 'fcaf4d' }} />
  },
  {
    text: 'Comprehensive Assistance for Applications, Admissions & Visas',
    icon: <StarsIcon style={{ color: 'fcaf4d' }} />
  },
  {
    text: 'High Value Scholarships and Study Loans',
    icon: <StarsIcon style={{ color: 'fcaf4d' }} />
  }
];

const testimonies = [
  {
      id: 1,
      quote: 'Thank you, KC, for all the support you have provided right from shortlisting the university to the visa interview preparations. I really admire the attention and support of the KC Counsellors.',
      authorName: 'Mandar Suryawanshi',
      authorDesc: 'Northeastern University, USA'
  },
  {
      id: 2,
      quote: 'The team made the entire process very easy. Everyone is very helpful and cooperative throughout. I am thankful to KC Sadar Team for making my dream come true.',
      authorName: 'Aarohi Sighel',
      authorDesc: 'University of South Australia, Australia'
  },
  {
      id: 3,
      quote: 'Helped with counseling and making the right decision...great staff..would definitely recommend it to anyone planning to go abroad for studies..',
      authorName: 'Susan Mendonca',
      authorDesc: 'Conestoga College, Canada'
  },
  {
      id: 4,
      quote: 'Thank you, KC, for all the support you have provided right from shortlisting the university to the visa interview preparations. I really admire the attention and support of the KC Counsellors.',
      authorName: 'Lorem Ipsum',
      authorDesc: 'Birmingham University, UK'
  },
  {
      id: 5,
      quote: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      authorName: 'Mandar Suryawanshi',
      authorDesc: 'Waterloo University, Canada'
  },
]

const breakpoints = {
  desktop: {
      breakpoint: {
      max: 3000,
      min: 1024
      },
      items: 3,
      partialVisibilityGutter: 40
  },
  mobile: {
      breakpoint: {
      max: 464,
      min: 0
      },
      items: 1,
      partialVisibilityGutter: 30
  },
  tablet: {
      breakpoint: {
      max: 1024,
      min: 464
      },
      items: 1,
      partialVisibilityGutter: 30
  }
};

const navItems = ['Study Destinations', 'Services', 'Company', 'Upcoming Events', 'Course Finder'];

const servicesHeading='Realize your global ambitions with us';
const servicesText='With a keen ear for your choices and preferences, our counselling experience is so seamless that you will land in your dream university even before you do!';
const heroText='We value your career aspirations, which is why we map your preferences with the best that our global universities have to offer. Thousands of our students are pursuing their programs and aspirations in eminent universities globally and we welcome you to pursue yours!';

export { services, serviceDetails, servicesHeading, servicesText, heroText, testimonies, breakpoints, navItems };

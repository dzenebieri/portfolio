import {
  web,
  mobile,
  backend,
  creator,
  javascript,
  typescript,
  git,
  css,
  html,
  figma,
  redux,
  docker,
  nodejs,
  reactjs,
  threejs,
  mongodb,
  tailwind,
  meta,
  tesla,
  shopify,
  starbucks,
  itjob,
  carrent,
  tripguide,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'React Native Developer',
    icon: mobile,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Content Creator',
    icon: creator,
  },
];

const experiences = [
  {
    title: 'React JS Developer',
    company_name: 'Starbucks',
    icon: starbucks,
    iconBg: '#383E56',
    date: 'Sep 2020 - Sep 2021',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'React Native Developer',
    company_name: 'Tesla',
    icon: tesla,
    iconBg: '#E6DEDD',
    date: 'Sep 2021 - Sep 2022',
    points: [
      'Developed and integrated key features into the Tesla mobile app using Xcode.',
      "Implemented custom modules to seamlessly connect the app with Tesla's vehicle control and monitoring systems.",
      'Drove performance optimization initiatives to boost app responsiveness, ensuring a fluid user experience across iOS and Android devices.',
      'Maintained a high level of test coverage to catch and resolve potential issues proactively.',
    ],
  },
  {
    title: 'Web Developer',
    company_name: 'Shopify',
    icon: shopify,
    iconBg: '#383E56',
    date: 'Sep 2022 - Feb 2023',
    points: [
      'Developed a fully functional e-commerce website using React and Shopify API.',
      'Boosted website traffic by 20% in 6 months through keyword research and SEO optimization.',
      'Developed custom plugins using React and leveraged the Shopify App SDK to integrate with the existing infrastructure.',
      'Proactively resolved, issues through independent troubleshooting and collaborative debugging with fellow developers.',
    ],
  },
  {
    title: 'Full Stack Developer',
    company_name: 'Meta',
    icon: meta,
    iconBg: '#E6DEDD',
    date: 'Feb 2023 - Present',
    points: [
      'Spearheaded the end-to-end development of a dynamic social media platform using Next.js',
      'Contributed significantly to the enhancement of educational websites, implementing new features and improving user experience.',
      'Crafted a real-time chat feature for improved user communication.',
      'Established robust user authentication and authorization systems, fortifying the security of social media and educational platforms.',
    ],
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const projects = [
  {
    name: 'Trip Guide',
    description:
      "Craft your dream trip in minutes! Our personalized itinerary builder helps you to make your dream true, guided by traveler tips. Let's unlock your next chapter!",
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: tripguide,
    source_code_link: 'https://github.com/dzenebieri',
  },
  {
    name: 'Car Rent',
    description:
      'We provided millions of customers with the best possible guaranteed price for their Car Rental. We welcome you to become our next satisfied customer.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: carrent,
    source_code_link: 'https://github.com/dzenebieri',
  },
  {
    name: 'IT Job',
    description:
      'Discover our hottest vacancies and start your dream IT career! We value and welcome driven professionals in different fields - from software engineers to data scientists.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: itjob,
    source_code_link: 'https://github.com/dzenebieri',
  },
];

const testimonials = [
  {
    testimonial:
      'Our new website is a game-changer. Thank you for bringing our vision to life!',
    name: 'Eva Mendes',
    designation: 'CFO',
    company: 'NVIDIA',
    image: 'https://randomuser.me/api/portraits/women/88.jpg',
  },
  {
    testimonial:
      'I think there is no feedback needed. What you have done is just unbelievable.',
    name: 'Jim Carrey',
    designation: 'CEO',
    company: 'X',
    image: 'https://randomuser.me/api/portraits/men/51.jpg',
  },
  {
    testimonial:
      'It was unexpected for us if someone could do it better than we had imagined.',
    name: 'Lindsay Lohan',
    designation: 'COO',
    company: 'Microsoft Co',
    image: 'https://randomuser.me/api/portraits/women/28.jpg',
  },
];

export { services, technologies, experiences, testimonials, projects };

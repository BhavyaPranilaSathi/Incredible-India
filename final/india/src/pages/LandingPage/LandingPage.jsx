import React from "react";

import "./LandingPage.css";
import Hero from "./Hero"
import Panel from "./Panel";

import historyImage from "/images/history.jpg";
import factsImage from "/images/fact.jpg";
import quizImage from "/images/quiz.jpg";

const panels = [
  {
    title: 'Legacy of the Subcontinent "Bharat"',
    description: `Indian history is a tapestry woven with threads of resilience, diversity, and cultural richness, spanning over five millennia. From the ancient civilizations of the Indus Valley and the Vedic period to the grandeur of the Maurya and Gupta empires, India's history is marked by remarkable achievements in various fields such as science, mathematics, literature, and philosophy.

    One of the most enduring legacies of Indian history is its contributions to spirituality and philosophy. The teachings of ancient sages like Gautama Buddha and Mahavira laid the foundation for profound philosophical doctrines that continue to influence millions worldwide. The concept of ahimsa (non-violence), karma, and dharma emerged from these ancient philosophies, shaping not only Indian society but also leaving a significant imprint on global thought.
    
    Moreover, India's history is replete with architectural marvels that stand as testaments to the ingenuity and craftsmanship of its artisans. From the majestic temples of Khajuraho and Konark to the awe-inspiring forts and palaces of Rajasthan, Indian architecture reflects the cultural and artistic splendor of bygone eras. The Taj Mahal, a UNESCO World Heritage Site and an epitome of love, remains an iconic symbol of India's architectural prowess.
    
    Furthermore, Indian history is characterized by its resilience in the face of adversity. Despite numerous invasions and colonial rule, India has preserved its cultural identity and traditions, blending them with influences from various civilizations to create a vibrant tapestry of cultures. The struggle for independence led by visionary leaders like Mahatma Gandhi exemplifies the indomitable spirit of the Indian people, inspiring movements for freedom and justice worldwide.`,
    image: historyImage,
    imageDescription:
      "Group of Books on Library Shelf",
    linkUri: "#/history",
    linkText:
      "Explore more about the Timeless Charms of Bharat: Unraveling the Rich Tapestry of India's History",
  },
  {
    title: "India: An Ensemble of Heritage, Diversity, and Innovation",
    description: `India, often referred to as the land of diversity, is a country that captivates with its rich tapestry of cultures, languages, and traditions. With a history dating back over 75,000 years, India is one of the world's oldest civilizations, boasting a heritage that spans millennia. From the ancient cities of the Indus Valley Civilization to the majestic temples of Khajuraho and the intricate carvings of Ellora, India's architectural and archaeological wonders offer a glimpse into its glorious past.

    The country's cultural mosaic is equally fascinating, with over 2,000 distinct ethnic groups and more than 1,600 languages spoken across its vast expanse. This diversity is reflected in India's cuisine, which is renowned for its bold flavors, aromatic spices, and regional specialties. From the fiery curries of the south to the sumptuous kebabs of the north, Indian food is a culinary adventure that tantalizes the taste buds.
    
    India's spiritual heritage is another defining aspect of its identity. As the birthplace of major religions such as Hinduism, Buddhism, Jainism, and Sikhism, the country is dotted with sacred sites and pilgrimage destinations that attract millions of devotees from around the world. Whether it's the holy city of Varanasi on the banks of the Ganges or the serene landscapes of Bodh Gaya where the Buddha attained enlightenment, India's spiritual landmarks inspire awe and reverence.
    
    In addition to its cultural and spiritual richness, India is also a land of innovation and progress. With a booming economy driven by sectors such as information technology, manufacturing, and agriculture, the country is poised to become a global powerhouse in the 21st century. From launching successful space missions to nurturing a vibrant startup ecosystem, India is harnessing the talents and aspirations of its people to create a brighter future for generations to come.`,
    image: factsImage,
    imageDescription:
      "Kondapalli toy wth woman on bull cart",
    linkUri: "#/facts",
    linkText:
      "Uncover the wonders of India's past, present, and future – a journey of diversity, spirituality, and progress.",
  },
  {
    title: "Discovering India: Quiz Edition",
    description: `Welcome to the India Quiz, 

    India is a land of unparalleled diversity, where myriad cultures, languages, and traditions coexist harmoniously. Its vibrant tapestry of life is woven with a kaleidoscope of colors, flavors, and experiences. From the snow-capped peaks of the Himalayas to the sun-kissed shores of its peninsular coastline, India's geography is as diverse as its people. At the heart of India's cultural mosaic lies its rich heritage, manifested in age-old traditions, colorful festivals, and exquisite art forms. Yet, amidst this diversity, there is a strong thread of unity that binds the people of India together, exemplified through shared festivals like Diwali. Join us as we explore the essence of India—an experience that celebrates life's myriad colors and contrasts, blending ancient traditions with modern aspirations.

    India's geography is diverse, bordered by the mighty Himalayas in the north and surrounded by the Indian Ocean in the south. With lush rainforests, arid deserts, and fertile plains, it offers a myriad of landscapes to explore. Iconic landmarks like the Taj Mahal and the Ganges River add to its allure, making it a paradise for adventurers.

    India's history is rich, with influences from ancient civilizations to the Mughal Empire and British colonial rule. Its cultural heritage is equally vibrant, reflected in festivals, dances, music, and art forms. 

    In the 21st century, India has become a global powerhouse with a booming economy and dynamic cultural scene. Despite challenges like poverty and environmental issues, its spirit of resilience shines through. Join us as we unravel the wonders of modern India—a land of innovation, tradition, and boundless potential.`,
    image: quizImage,
    imageDescription: "A person with mask performing Indian dance.",
    linkUri: "#/quiz",
    linkText: "Ready to explore India's history, geography, and more? Take our interactive quiz now!",
  },
];

function LandingPage({ setPage }) {
  return (
    <div className="landing-page">
      <Hero />
      {panels.map((panel) => {
        return (
          <Panel
            key={panel.title}
            title={panel.title}
            description={panel.description}
            image={panel.image}
            imageDescription={panel.imageDescription}
            linkUri={panel.linkUri}
            linkText={panel.linkText}
            setPage={setPage}
          />
        );
      })}
    </div>
  );
}

export default LandingPage;

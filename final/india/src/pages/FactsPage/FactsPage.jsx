import React from "react";
import FactCard from "./FactCard";

import "./FactsPage.css";

import fact1Image from "/images/fact1.jpg";
import fact2Image from "/images/fact2.jpg";
import fact3Image from "/images/fact3.jpg";
import fact4Image from "/images/fact4.jpg";
import fact5Image from "/images/fact5.jpg";
import fact6Image from "/images/fact6.jpg";
import fact7Image from "/images/fact7.jpg";
import fact8Image from "/images/fact8.jpg";
import fact9Image from "/images/fact9.jpg";
import fact10Image from "/images/fact10.jpg";
import fact11Image from "/images/fact11.jpg";
import fact12Image from "/images/fact12.jpg";

const factList = [
  {
    image: fact1Image,
    imageDescription: "A variety of indian foods on green banana leaf.",
    fact: "India leads globally in vegetarianism, with 38% of its population abstaining from meat. Influenced by cultural and religious traditions, this dietary choice is widespread. Consequently, India offers a plethora of vegetarian dining options, making it a top destination for vegetarians worldwide.",
  },
  {
    image: fact2Image,
    imageDescription: "An image of TajMahal.",
    fact: "The Taj Mahal, often mistaken for a palace, is actually a mausoleum commissioned by Mughal Emperor Shah Jahan in memory of his wife. Built between 1632 and 1653, this architectural masterpiece is renowned for its symmetrical beauty and UNESCO World Heritage status since 1983.",
  },
  {
    image: fact3Image,
    imageDescription: "A wild Indian tiger in forest.",
    fact: "India, the world's tiger capital, hosts 75% of the global tiger population. These magnificent animals inhabit diverse landscapes, from forests to grasslands. Facing a decline in the 1970s, conservation efforts including reserves, anti-poaching measures, and awareness campaigns have led to a 6% annual growth in the tiger population.",
  },
  {
    image: fact4Image,
    imageDescription: "A painting of lord Ram and mata Sita on their wedding.",
    fact: "India's predominant religion, embraced by nearly 80% of the population, is widely regarded as the oldest religious tradition globally, with roots and customs dating back over 4,000 years. Hinduism, an expansive umbrella term, encompasses diverse beliefs, practices, and philosophies, sparking debate among scholars about its portrayal.",
  },
  {
    image: fact5Image,
    imageDescription: "An Indian cow facing towards camera.",
    fact: 'Cows hold sacred status in India due to their significance in major religions like Hinduism, Jainism, and Buddhism. Referred to as "Kamdhenu" in ancient Hindu texts, cows are revered as earthly embodiments of the divine Mother Goddess symbolizing fertility and abundance.',
  },
  {
    image: fact6Image,
    imageDescription: "Couple of men performing harathi ritual.",
    fact: "Varanasi, India's spiritual capital, stands as its oldest continuously inhabited city, tracing back over 3000 years to at least 1200 BCE along the sacred Ganges River. Renowned as the cultural hub of India, Varanasi charms visitors with its ancient temples, bustling markets, and winding streets, offering an unforgettable experience for travelers seeking spiritual exploration.",
  },
  {
    image: fact7Image,
    imageDescription: "A snake and ladders game board with diece on it.",
    fact: "Originating from India in the 2nd century BC, the widely-loved game, often overlooked in its Indian roots, dates possibly even earlier to the 13th century BC. It features ladders symbolizing virtues and snakes representing vices.",
  },
  {
    image: fact8Image,
    imageDescription: "A white diamond bracelet.",
    fact: "India was the primary origin of diamonds worldwide for approximately 1000 years, starting from the 4th century BC. These pristine diamonds were discovered in the Krishna River Delta, situated in Andhra Pradesh.",
  },
  {
    image: fact9Image,
    imageDescription: "An Indian model in red gagra dress walking.",
    fact: "India holds the title of the world's largest film producer and hosts the second-oldest film industry. Indian cinema, particularly Bollywood in Mumbai, wields significant influence both domestically and internationally, with a massive following. ",
  },
  {
    image: fact10Image,
    imageDescription: "A view of hills on side of Indus river.",
    fact: "The Magnetic Hill in Ladakh, India, is a fascinating natural wonder defying gravity. Situated on the Leh-Kargil-Baltic National Highway, it gives the illusion of vehicles moving uphill while they're actually going downhill. Despite this, tourists worldwide visit to witness this captivating phenomenon. ",
  },
  {
    image: fact11Image,
    imageDescription: "A group of chess pieces on chess board.",
    fact: "India, among the world's oldest civilizations, has contributed numerous significant inventions and discoveries. Chess, for instance, originated when King Balhait commissioned an Indian Brahmin to design a game to enhance people's intelligence. Another noteworthy invention is wireless communication pioneered by Sir Jagadish Chandra Bose, revolutionizing global communication by enabling rapid data transmission over long distances without electrical wires or cables.",
  },
  {
    image: fact12Image,
    imageDescription: "An old book with black letters.",
    fact: "India is the world's second-largest English-speaking country, with English being the main language spoken alongside over 400 other languages and dialects.",
  },
];

function FactsPage() {
  return (
    <div className="facts-page">
      <h1 className="facts-page_title">INDIA Facts</h1>
      <div className="facts-page_container">
        {factList.map((f) => {
          return (
            <FactCard
              key={f.fact}
              image={f.image}
              imageDescription={f.imageDescription}
              fact={f.fact}
            />
          );
        })}
      </div>
    </div>
  );
}

export default FactsPage;

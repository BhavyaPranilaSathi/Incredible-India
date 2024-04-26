import React from "react";

import HistoryPageHero from "./HistoryPageHero";
import Accordion from "./Accordion";

import imageIndiaMap from "/images/history2.png";
import imageMohenjodaro from "/images/history3.jpg";
import imageHarappa from "/images/history4.jpg";
import imageCarvings from "/images/history5.jpg";
import imagePainting from "/images/history6.png";
import imageFort from "/images/history7.jpg";

const accordions = [
  {
    title: "Prehistory of India",
    description1:
    "The vast expanse encompassing present-day India, Pakistan, and Nepal serves as a haven for archaeologists and scholars seeking to unravel the mysteries of antiquity. Homo heidelbergensis, a precursor to modern humans, inhabited these lands centuries before migrations into Europe unfolded. Despite this rich historical backdrop, archaeological endeavors in the region didn't gain momentum until the 1920s, lagging behind the earlier pursuits in Mesopotamia and Egypt. This delayed interest perhaps stemmed from a focus on identifying sites mentioned in Indian epics like the Mahabharata and Ramayana, overshadowing the possibility of a much deeper antiquity for the region.",
    description2:
      "One such remarkable discovery is the village of Balathal in Rajasthan, its origins dating back to 4000 BCE, showcasing the enduring presence of human habitation. Similarly, Mehrgarh, a Neolithic site traced to around 7000 BCE, provides tantalizing evidence of even earlier human settlements. These findings, unearthed in recent decades, have revolutionized our understanding of India's past, challenging previously held assumptions derived from studies in Egypt and Mesopotamia.",
    description3: `The ongoing quest for knowledge through archaeological endeavors sheds light on the complex interplay of cultures and civilizations in ancient India. Recent discoveries, such as the 2009 unearthing of a 4000-year-old skeleton at Balathal, reshape our understanding of historical phenomena like the spread of diseases. Furthermore, these excavations highlight the pivotal role that India played in the development of human civilization, prompting a reassessment of broader historical narratives and fostering a deeper appreciation for the interconnectedness of societies across epochs.`,
    image: imageIndiaMap,
    imageDescription: "An old India Map seeing through magnifying glass.",
  },
  {
    title: "Mohenjo-daro & Harappan Civilization",
    description1:
      "The Indus Valley Civilization, emerging around 7000 BCE, flourished in the lower Gangetic Valley, spreading both southwards and northwards into regions like Malwa. Notably, its cities were remarkably advanced for their time, surpassing contemporary settlements in other parts of the world. Constructed primarily with kiln-fired mud bricks, these cities boasted larger structures situated in accordance with cardinal points. The architecture of this period featured houses with spacious courtyards, kitchen/workrooms, and smaller bedrooms, suggesting a focus on family activities in the front of the house, akin to civilizations like Rome, Egypt, Greece, and Mesopotamia.",
    description2:
      "One of the distinguishing features of the Indus Valley Civilization was its technological advancement, evident in the presence of flush toilets and 'wind catchers' for air conditioning on rooftops, possibly influenced by ancient Persian innovations. Remarkably, the sewer and drainage systems of these cities surpassed those of Rome at its zenith. The most renowned sites of this civilization include Mohenjo-Daro and Harappa, situated in present-day Pakistan. Harappa, lending its name to the entire civilization, dates back to the Middle period, while Mohenjo-Daro was built during the Mature period. Despite the significant historical importance of Harappa, its structures suffered damage over time due to various factors, making it challenging to ascertain its full significance. Conversely, Mohenjo-Daro remained relatively well-preserved until its discovery in 1922.",
    description3: `Mohenjo-Daro, meaning "mound of the dead" in Sindhi, was meticulously planned with streets laid out at right angles and boasted a sophisticated drainage system. The Great Bath, a central structure, was heated and served as a focal point for communal activities. The inhabitants demonstrated proficiency in metallurgy, evidenced by artifacts like the bronze Dancing Girl statue, and cultivated various crops. Trade played a crucial role in the economy, with artifacts from the Indus Valley region found in Mesopotamia, hinting at extensive commercial networks. Despite this, pinpointing the exact origins of these artifacts within India remains challenging.`,
    image: imageMohenjodaro,
    imageDescription: "caves from Mohen-jodaro civilization.",
  },
  {
    title: "Decline of Harappan Civilization",
    description1: `The religious practices of the Harappan Civilization reveal a pantheon of deities, with particular emphasis on ritual worship and reverence for various gods. Among these, terracotta artifacts depicting the Shakti, symbolizing the Mother Goddess, indicate a widespread veneration of feminine principles. Around 2000 - 1500 BCE, the arrival of the Aryans, a migratory group, introduced Sanskrit and their own gods into the region. The impact of this assimilation on indigenous beliefs remains debated, but coincides with the decline of the Harappan culture, marking a significant transitional period in the region's history.`,
    description2: `Scholars propose climate change as a contributing factor to the decline of the Harappan Civilization, citing evidence of environmental challenges such as droughts and floods. Increased flooding of the Indus River, evidenced by sediment layers up to 30 feet at Mohenjo-Daro, led to crop destruction and famine, possibly prompting migration to more hospitable regions. Disruption of trade relations with Mesopotamia and Egypt, due to conflicts in those regions, may have further exacerbated economic pressures on the Harappan society, contributing to its decline.`,
    description3: `Early 20th-century theories, influenced by racialist ideologies, suggested an invasion by light-skinned Aryans as the cause of the Harappan Civilization's downfall, a notion now discredited. Similarly, speculative theories about extraterrestrial intervention or ancient atomic blasts lack credibility. The mysterious vitrification observed in parts of Mohenjo-Daro, akin to similar phenomena in sites like Traprain Law in Scotland, has been attributed to potential warfare rather than otherworldly causes, highlighting the complexity of interpreting ancient civilizations' demise.`,
    image: imageHarappa,
    imageDescription: "An image from harappa civilization.",
  },
  {
    title: "The Vedic Period",
    description1: `The decline of the Indus Valley Civilization marked the beginning of the Vedic Period, characterized by significant societal changes and the emergence of structured religious beliefs. During this time, the caste system, known as Varnas, became prevalent, dividing society into four classes: Brahmana, Kshatriya, Vaishya, and Shudra, with Dalits occupying the lowest rung. Initially, the caste system was linked to one's occupation, but over time, it became rigidly hereditary, reflecting the belief in an eternal order governed by a supreme deity.`,
    description2: `Within the Vedic Period, the religious landscape underwent transformation, leading to the development of Hinduism, known as Sanatan Dharma or the Eternal Order. This belief system posits that the universe operates according to a predetermined order, and adhering to this order ensures a fulfilling life. Despite its portrayal as polytheistic, Hinduism is fundamentally monotheistic, recognizing Brahman as the ultimate reality manifested through various deities.`,
    description3: `In the 6th century BCE, religious reformers such as Vardhamana Mahavira and Siddhartha Gautama challenged orthodox Hinduism, founding Jainism and Buddhism, respectively. These movements signified a broader cultural and philosophical shift, challenging traditional religious norms and emphasizing individual enlightenment. Additionally, the Persian invasion of northern India in 530 BCE under Cyrus II introduced further cultural influences, potentially leading to syncretism between Persian and Indian beliefs. This period of religious and cultural upheaval laid the groundwork for the proliferation of philosophical schools and the rise of powerful kingdoms, shaping the religious and cultural landscape of ancient India.`,
    image: imageCarvings,
    imageDescription: "Ancient Indian carvings on hills.",
  },
  {
    title: "The Great Empires of Ancient India",
    description1: `Persia's dominance in northern India persisted until the conquest of Alexander the Great in 330 BCE, ushering in a period of foreign influence that gave rise to the Greco-Buddhist culture. This cultural amalgamation significantly impacted various aspects of northern Indian society, from art to religion to dress. Notably, statues and reliefs from this period depict Buddha and other figures in a distinctly Hellenic style, known as the Gandhara School of Art. Following Alexander's departure, the Mauryan Empire emerged under Chandragupta Maurya's reign, extending its dominion over almost all of northern India by the end of the third century BCE. `,
    description2: `Under the rule of Ashoka the Great, the Mauryan Empire reached its zenith. However, Ashoka's transformation came after the brutal conquest of Kalinga, where over 100,000 perished. Deeply affected by the carnage, Ashoka embraced Buddhism and embarked on a mission to spread its teachings. He erected numerous stupas, established monasteries, and promulgated Buddhist principles through his famous Edicts. Ashoka's efforts transformed Buddhism from a minor sect into a major religion, shaping its future trajectory significantly.`,
    description3: `Following Ashoka's reign, the Mauryan Empire declined, leading to the fragmentation of India into various small kingdoms and empires during the Middle Period. This era witnessed increased trade with Rome, contributing to cultural and individual development across different regions. The culmination of this period was marked by the Gupta Empire, characterized by unprecedented cultural flourishing. Under Gupta rule, India experienced advancements in philosophy, literature, science, mathematics, architecture, and art, with notable figures like Kalidasa and Aryabhatta making significant contributions. Despite the Gupta rulers' advocacy for Buddhism, diverse religious and cultural expressions flourished during this golden age, exemplified by the remarkable artworks found in sites like Ajanta and Ellora.`,
    image: imagePainting,
    imageDescription: "An ancient Indian painting with a princess holding parrot.",
  },
  {
    title: "The Decline of Empire & the Coming of Islam",
    description1: `Following the decline of the Gupta Empire around 550 CE, the region saw a shift in leadership with Harshavardhan assuming power. A patron of the arts and a devout Buddhist, Harsha ruled for 42 years, during which the north of India experienced a period of prosperity. However, his kingdom collapsed following his death, leading to fragmentation and vulnerability to invading forces. Despite his military prowess and efforts to repel invasions, including those of the Huns, Harshavardhan couldn't prevent the disintegration of his realm, plunging India into chaos.`,
    description2: `In 712 CE, the Muslim general Muhammed bin Qasim conquered northern India, marking the end of indigenous empires in the region. Subsequently, the governance structure shifted towards independent city-states or communities under the control of individual cities. The rise of Islamic Sultanates in modern-day Pakistan further altered the political landscape, ushering in a period of religious and linguistic diversity that complicated efforts to replicate the unity and cultural advancements of earlier eras, such as those seen during the Gupta period.`,
    description3: `The invasion of foreign powers and the diverse worldviews of contending religions hindered the region's ability to achieve cultural cohesion and advancement. This vulnerability paved the way for the conquests of the Islamic Mughal Empire, marking a significant chapter in India's history of foreign domination. Subsequently, India remained subject to various foreign influences and powers, including the Portuguese, French, and British, until achieving independence in 1947 after a prolonged struggle.`,
    image: imageFort,
    imageDescription: "An ancient fort in red color.",
  },
];

function HistoryPage() {
  return (
    <div className="history-page">
      <HistoryPageHero />
      <div className="history-page__content">
        {accordions.map((accordion) => {
          return (
            <Accordion
              key={accordion.title}
              title={accordion.title}
              description1={accordion.description1}
              description2={accordion.description2}
              description3={accordion.description3}
              image={accordion.image}
              imagDescription={accordion.imageDescription}
            />
          );
        })}
      </div>
    </div>
  );
}

export default HistoryPage;

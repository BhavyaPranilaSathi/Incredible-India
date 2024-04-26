import React from "react";

import "./HistoryPage.css";
import imageHero from "/images/history1.png";

function HistoryPageHero({ title }) {
  return (
    <section className="history-page__hero">
      <img
        src={imageHero}
        alt="Ancient wall art with group of people."
        className="history-page__image"
      />
      <div className="history-page__text">
        <h1 className="history-page__title">
        Ancient India!!!
        </h1>
        <p className="history-page__description">
        India, located in South Asia, derives its name from the Indus River. The country is also referred to as Bharat, inspired by the legendary emperor Bharata from the ancient epic Mahabharata. 
        According to Puranic texts, Bharata is said to have united the Indian subcontinent under his rule, leading to its designation as Bharatavarsha, signifying "the subcontinent of Bharata."
        </p>
        <p className="history-page__description">
        The Indian subcontinent boasts a rich history of human habitation spanning over 250,000 years, making it one of the oldest inhabited regions globally. Archaeological excavations reveal evidence of early human activity, including sophisticated stone tools, indicating advanced technological capabilities dating back millennia. 
        Despite its profound historical significance, India's contributions to civilization have often been overshadowed in Western narratives, particularly when compared to the ancient civilizations of Mesopotamia and Egypt.
        </p>
        <p className="history-page__description">
        The Indus Valley Civilization, flourishing from approximately 7000 to 600 BCE, rivaled its contemporaries in Egypt and Mesopotamia in terms of territorial extent and cultural achievements. 
        India stands as the birthplace of four major world religions—Hinduism, Jainism, Buddhism, and Sikhism—along with the philosophical tradition of Charvaka, which significantly influenced scientific inquiry.
        </p>
        <p className="history-page__description">
        The legacy of ancient India extends far beyond religion and philosophy, encompassing numerous inventions and innovations that continue to impact modern life. 
        From advancements in sanitation with the flush toilet and drainage systems to pioneering contributions in mathematics, veterinary science, plastic surgery, board games, yoga, and meditation, the ingenuity of ancient Indians has left an indelible mark on human civilization.
        </p>
        
      </div>
    </section>
  );
}

export default HistoryPageHero;

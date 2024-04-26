import React from "react";

import "./LandingPage.css";
/*import heroImage from "images/landing1.jpg";*/
import videoSource from "/images/India.mp4";

function Hero() {
  return (
    <section className="hero">
      <div className="hero__video-container">
        <h1 className="hero__text">INCREDIBLE INDIA!!!!</h1>

        <video autoPlay muted loop className="hero__video">
          <source src={videoSource} type="video/mp4" />
          alt="Bunch of Indian Wonders"
        </video>
        
      </div>
      <div className="hero__description-container">

        <h2 className="hero__title">
        Journey Through India's Magnificence
        </h2>
        <p className="hero__description">
        Mark Twain said: India is, the cradle of the human race, the birthplace of human speech, the mother of history, the grandmother of legend, and the great grand mother of tradition. 
        Our most valuable and most instructive materials in the history of man are treasured up in India only.
        </p>
        <p className="hero__description">
        India, with a history spanning over 10,000 years, is the world's oldest civilization and has never initiated aggression against any other nation. 
        It stands as the globe's largest democracy and Varanasi, dating back to 500 B.C.E, is one of the oldest continuously inhabited cities.
        </p>
        <p className="hero__description">
        India's contributions to mathematics, science, and technology are profound, from inventing zero and the number system to establishing the first university in 700BC. 
        Sanskrit, its ancient language, birthed numerous European languages and proved suitable for computer software.
        </p>
        <p className="hero__description">
        Across various fields, India's legacy endures, from Ayurveda to advancements in navigation, algebra, and calculus. 
        Its rich cultural tapestry has given birth to influential religions followed by a quarter of the world's population.
        </p>
        <p className="hero__description">
        India's journey towards independence was marked by nonviolent resistance, distinguishing it as one of the few nations to achieve freedom without resorting to widespread violence. 
        Today, India stands as a powerhouse of innovation and the world's largest English-speaking nation outside of the United States and Japan.
        </p>
        
      </div>
    </section>

  );
}

export default Hero;

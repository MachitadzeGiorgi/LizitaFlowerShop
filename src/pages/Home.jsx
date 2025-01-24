import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";
import Section1Flower from "../assets/Section1Flower.png";
import RoseImage from "../assets/RoseImage.png";
import SunflowerImage from "../assets/Sunflower.png";
import OrchideaImage from "../assets/Orchidea.png";
import MixedFlowers from "../assets/BunchOfFlowers.png";
function Home() {
  return (
    <div className="home-container">
      <header className="home-header">
        <div className="logo">
          <img id="FlowerLogo" src={Logo} alt="Flower Shop Logo" />
        </div>
        <nav className="nav-links">
          <ul>
            <li>
              <Link to="/კატალოგი">კატალოგი</Link>
            </li>
            <li>
              <Link to="/კალათა">კალათა</Link>
            </li>
            <li>
              <Link to="/ჩვენს-შესახებ">ჩვენს შესახებ</Link>
            </li>
            <li>
              <Link to="/საკონტაქტო">კონტაქტი</Link>
            </li>
          </ul>
        </nav>
      </header>

      <section className="intro-section">
        <div className="text-content">
          <h1>გახადე მომენტები დაუვიწყარი</h1>
          <p>
            ლიზიტა არის სივრცე სადაც სილამაზე, სითბო და ემოციები ერთმანეთს
            ერწყმის. ჩვენ გთავაზობთ ყველაზე დახვეწილ და გამორჩეულ თაიგულებს,
            რომლებიც თქვენი საყვარელი ადამიანების მომენტს განსაკუთრებულს გახდის.
          </p>
        </div>
        <div className="image-container">
          <img
            src={Section1Flower}
            alt="Beautiful Flower"
            className="flower-image"
          />
        </div>
      </section>

      <section className="most-sold-flowers">
        <h2>ყველაზე მოთხოვნადი ყვავილები</h2>
        <div className="flower-cards">
          <div className="flower-card">
            <img src={SunflowerImage} alt="Sunflower" /> <h3>მზესუმზირა</h3>
            <p>"Brighten your day with a sunflower!"</p>
          </div>
          <div className="flower-card">
            <img src={RoseImage} alt="Rose" />
            <h3>ვარდი</h3>
            <p>"Love blooms with roses."</p>
          </div>
          <div className="flower-card">
            <img src={OrchideaImage} alt="Orchidea" /> <h3>ორქიდეა</h3>
            <p>"Grace and beauty in every orchidea."</p>
          </div>
        </div>
      </section>
      <section className="create-own-bunch">
        <div className="text-content">
          <h1>შეიქმენი შენი საკუთარი თაიგული</h1>
          <p>
            ჩვენს მაღაზიაში თქვენ შეგიძლიათ შექმნათ თქვენი საკუთარი თაიგული და
            აირჩიოთ ყვავილები, რომლებიც ყველაზე მეტად მოგწონთ. შექმენით
            უნიკალური კომპოზიცია და გახადეთ თქვენი საყვარელი ადამიანის დღე
            განსაკუთრებული!
          </p>
          <button>აირჩიე შენი ყვავილები</button>
        </div>
        <div className="image-container">
          <img
            src={MixedFlowers}
            alt="Bunch of Mixed Flowers"
            className="bunch-of-flowers-image"
          />
        </div>
      </section>
      <footer className="footer">
        <p>ყველა სიახლისთვის, გთხოვთ, დატოვოთ თქვენი ელფოსტის მისამართი:</p>
        <form className="email-form">
          <input
            type="email"
            placeholder="შეიყვანეთ თქვენი ელფოსტი"
            required
            className="email-input"
          />
          <button type="submit" className="submit-button">
            გამოწერა
          </button>
        </form>
      </footer>
    </div>
  );
}

export default Home;

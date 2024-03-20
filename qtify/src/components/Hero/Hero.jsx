import styles from "./hero.module.css";
import heroImage from "../../assets/hero.svg";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <h1>100 Thousand Songs, ad-free Over thousands podcast episodes</h1>
      <img src={heroImage} alt="Hero_Image" />
    </div>
  );
};

export default Hero;

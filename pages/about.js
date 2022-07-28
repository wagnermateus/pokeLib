import Image from "next/image";
import styles from "../styles/About.module.css";
export default function About() {
  return (
    <div className={styles.about}>
      <h1>Sobre o Projecto</h1>
      <p>
        Lorem10Ea anim irure dolore sint.Sit ad esse aliquip sint non id ea ea
        sunt nisi elit laborum sit.
      </p>
      <Image
        src="/images/charizard.png"
        width="300"
        height="300"
        alt="charizard"
      />
    </div>
  );
}

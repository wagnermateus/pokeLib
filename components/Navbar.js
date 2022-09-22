import Link from "next/link";

import Image from "next/image";

import styles from "../styles/Navbar.module.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import HambugerMenu from "./HamburgerMenu";

export default function Navbar() {

  return (
    <nav>
    
        <div className={styles.navbar}>
          <div>
            <div className={styles.logo}>
              <Image
                src="/images/pokeball.png"
                width="30"
                height="30"
                alt="PokemonLib"
              />
              <h1>PokeLib</h1>
            </div>
          </div>

          <ul className={styles.link_items}>
            <li>
              <Link href={"/"}>
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href={"/about"}>
                <a>Sobre</a>
              </Link>
            </li>
          </ul>
        </div>
    
        <div className={styles.mobileMenu}>
          <HambugerMenu />
        </div>
   
    </nav>
  );
}

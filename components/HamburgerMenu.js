import Link from "next/link";

import Image from "next/image";

import "bootstrap-icons/font/bootstrap-icons.css";
import styles from "../styles/HamburgerMenu.module.css";
import { useEffect, useState } from "react";

export default function HamburgerMenu() {
  const [menuHamburgerBtnIsOpen, setMenuHamburgerBtnIsOpen] = useState(false);

  function showHamburgerMenuBtn() {
    setMenuHamburgerBtnIsOpen(!menuHamburgerBtnIsOpen);
  }

  return (
    <div className={styles.navbar}>
      <div className={styles.hamburgerNavbar}>
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
        <div>
          {menuHamburgerBtnIsOpen === true ? (
            <i
              id="menuHamburgerBtn"
              className={styles.icon + " " + "bi bi-x"}
              onClick={showHamburgerMenuBtn}
            />
          ) : (
            <i
              id="menuHamburgerBtn"
              className={styles.icon + " " + "bi bi-list"}
              onClick={showHamburgerMenuBtn}
            />
          )}
        </div>
      </div>

      {menuHamburgerBtnIsOpen && (
        <div className={styles.hamburgerNavbarWithLinks}>
          <ul className={styles.link_items}>
            <li onClick={showHamburgerMenuBtn}>
              <Link href={"/"}>
                <a>Home</a>
              </Link>
            </li>
            <li onClick={showHamburgerMenuBtn}>
              <Link href={"/about"}>
                <a>Sobre</a>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

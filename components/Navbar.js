import Link from "next/link";

import Image from "next/image";

import styles from "../styles/Navbar.module.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import { useState } from "react";
export default function Navbar() {
  const [menuHamburgerBtnIsOpen, setMenuHamburgerBtnIsOpen] = useState(false);

  function showHamburgerMenuBtn() {
    setMenuHamburgerBtnIsOpen(!menuHamburgerBtnIsOpen);
  }
  return (
    <nav
      className={
        !menuHamburgerBtnIsOpen
          ? styles.navbar
          : styles.navbar + " " + styles.hamburgerNavbar
      }
    >
      <div className={styles.navbarWithHamburgerMenu}>
        <div className={styles.logo}>
          <Image
            src="/images/pokeball.png"
            width="30"
            height="30"
            alt="PokemonLib"
          />
          <h1>PokeLib</h1>
        </div>

        {menuHamburgerBtnIsOpen ? (
          <i
            id="menuHamburgerBtn"
            className="bi bi-x-lg"
            onClick={showHamburgerMenuBtn}
          />
        ) : (
          <i
            id="menuHamburgerBtn"
            className="bi bi-list"
            onClick={showHamburgerMenuBtn}
          />
        )}
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

      {menuHamburgerBtnIsOpen && (
        <div>
          <ul className={styles.menuHamburger}>
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
    </nav>
  );
}

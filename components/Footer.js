import styles from "../styles/Footer.module.css";
export default function Footer(){
    return(
        <footer className={styles.footer}>
            <p>
                <span>PokeLib </span> &copy;2022 
                
            </p>
           <p>Devloped by <span><i>@WagnerMateus</i></span> </p> 
        </footer>
    );
}
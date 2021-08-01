import { Link } from '@material-ui/core';
import styles from '@styles/Footer.module.css';

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            Copyright &nbsp;
            <Link href="https://github.com/cretudorin/minipress">
                <span className={styles.brand}>MiniPress</span>
            </Link>
            &nbsp; {new Date().getFullYear()}
        </footer>
    );
};
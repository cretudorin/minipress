import styles from '../styles/Footer.module.css';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      Copyright <span className={styles.brand}>MiniPress</span>{' '}
      {new Date().getFullYear()}
    </footer>
  );
};
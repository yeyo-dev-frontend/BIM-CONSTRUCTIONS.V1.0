import styles from './Footer.module.css';
import { FooterTopBar } from './parts/FooterTopBar';
import { FooterMiddle } from './parts/FooterMiddle';
import { FooterBottom } from './parts/FooterBottom';

export function Footer({ dict, lang = 'es' }) {
  if (!dict) return null;

  return (
    <footer className={styles.footer}>
      <FooterTopBar dict={dict} />
      <FooterMiddle dict={dict} lang={lang} />
      <FooterBottom dict={dict} />
    </footer>
  );
}

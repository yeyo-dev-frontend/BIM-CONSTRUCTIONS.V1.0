import styles from './FooterMiddle.module.css';
import { FooterCompanyCol } from './FooterCompanyCol';
import { FooterServicesCol } from './FooterServicesCol';
import { FooterContactCol } from './FooterContactCol';

export function FooterMiddle({ dict, lang }) {
  return (
    <div className={styles.middleArea}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <FooterCompanyCol dict={dict} lang={lang} />
          <FooterServicesCol dict={dict} lang={lang} />
          <FooterContactCol dict={dict} />
        </div>
      </div>
    </div>
  );
}

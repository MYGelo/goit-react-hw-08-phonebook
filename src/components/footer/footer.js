import css from './footer.module.css';
import { GoMarkGithub } from 'react-icons/go';

// GoMarkGithub
export const Footer = () => {
  return (
    <div className={css.footer}>
      <a className={css.link} href="https://github.com/MYGelo">
        <span>
          <GoMarkGithub /> <span className={css.text}> Developed by </span>
          MYGelo
        </span>
      </a>
    </div>
  );
};

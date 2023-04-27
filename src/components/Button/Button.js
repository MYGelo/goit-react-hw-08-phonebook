import css from './Button.module.css';

export const Button = ({
  selected = false,
  type = 'button',
  children,
  ...otherProps
}) => {
  return (
    <button className={css.btn} type={type} {...otherProps}>
      {children}
    </button>
  );
};

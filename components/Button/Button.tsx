import { FunctionComponent, ReactNode, HTMLAttributes } from 'react';

interface IButtonProps {
  type?: 'primary' | 'secondary';
  className?: HTMLAttributes<HTMLButtonElement>;
}

const Button: FunctionComponent<IButtonProps> = props => {
  return (
    <>
      <button className={props.type + ' ' + props.className}>
        {props.children}
      </button>

      <style jsx>{`
        button {
          position: relative;
          font-family: 'Roboto';
          padding: 0.6rem 1rem;

          border-style: hidden;
          border-radius: 8px;
          cursor: pointer;
          top: 0;
          transition: 200ms;
        }
        button:hover {
          transition-duration: 200ms;
          top: -0.2rem;
          box-shadow: 0 0.4rem 0.5rem rgba(0, 0, 0, 0.15);
        }
        .primary {
          background-color: #4834d4;
          color: white;
        }
        .primary:hover {
          background-color: #322491;
        }
        .secondary {
          background-color: #f2f2f2;
          color: #4834d4;
        }
        .secondary:hover {
          background-color: #e6e6e6;
        }
      `}</style>
    </>
  );
};

Button.defaultProps = {
  type: 'primary',
};

export default Button;

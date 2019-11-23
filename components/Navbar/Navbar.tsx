import { FunctionComponent } from 'react';
import Button from '../Button/Button';
import theme from '../../styles/theme';

const Navbar: FunctionComponent = () => {
  return (
    <div className='container'>
      <div className='title' onClick={() => (window.location.href = '/')}>
        <img src='/avatar.png' alt='My avatar' /> MaximeMD
      </div>
      <div className='menu-items' />
      <div className='contact'>
        <Button
          type='primary'
          onClick={() =>
            window.open('https://www.linkedin.com/in/maxmd/', '_blank')
          }>
          Contact
        </Button>
      </div>
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: auto minmax(128px, 720px) auto;
          padding: 1rem 2rem;
          align-items: center;
        }
        .title {
          font-family: 'Roboto';
          font-weight: bold;
          color: ${theme.colors.primary};
          justify-self: end;
          display: flex;
          align-items: center;
          cursor: pointer;
        }
        .title img {
          height: 2rem;
          width: 2rem;
          margin-right: 0.5rem;
        }
        .contact {
          justify-self: start;
        }
      `}</style>
    </div>
  );
};

export default Navbar;

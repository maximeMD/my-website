import { FunctionComponent } from 'react';
import Button from '../Button/Button';
import theme from '../../styles/theme';

const Navbar: FunctionComponent = () => {
  return (
    <div className='container'>
      <div className='title'>MaximeMD</div>
      <div className='menu-items' />
      <div className='contact'>
        <Button type='primary'>Contact</Button>
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
        }
        .contact {
          justify-self: start;
        }
      `}</style>
    </div>
  );
};

export default Navbar;

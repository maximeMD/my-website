import { FunctionComponent } from 'react';
import theme from '../../styles/theme';

interface IHighlightItemProps {
  title: string;
  icon: JSX.Element;
}

const HighlightItem: FunctionComponent<IHighlightItemProps> = props => {
  return (
    <>
      <div className='container'>
        <div className='icon'>{props.icon}</div>
        <h3 className='title'>{props.title}</h3>
        <div className='content'>{props.children}</div>
      </div>
      <style jsx>{`
        .container {
          font-family: 'Roboto';
          margin: 1rem 1rem;
          max-width: 280px;
          display: grid;
          grid-template-areas: 'icon title' 'content content';
          grid-template-columns: auto 1fr;
          grid-template-rows: auto 1fr;
          grid-column-gap: 1rem;
        }
        .icon {
          grid-area: icon;
          font-size: 4rem;
          color: ${theme.colors.primary};
        }
        .title {
          grid-area: title;
        }
        .content {
          grid-area: content;
        }
      `}</style>
    </>
  );
};
export default HighlightItem;

import { FunctionComponent } from 'react';

interface IHighlightItemProps {
  title: string;
}

const HighlightItem: FunctionComponent<IHighlightItemProps> = props => {
  return (
    <>
      <div className='container'>
        <h3 className='title'>{props.title}</h3>
        <div className='content'>{props.children}</div>
      </div>
      <style jsx>{`
        .container {
          font-family: 'Roboto';
          margin: 1rem 1rem;
          max-width: 280px;
        }
      `}</style>
    </>
  );
};
export default HighlightItem;

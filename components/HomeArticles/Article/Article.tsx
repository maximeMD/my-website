import { FunctionComponent } from 'react';
import theme from '../../../styles/theme';

interface IArticleProps {
  title: string;
  content: string;
  pictureUrl: URL;
}

const Article: FunctionComponent<IArticleProps> = props => {
  return (
    <>
      <div className='container'>
        <div className='picture-container'>
          <img className='picture' src={props.pictureUrl.toString()}></img>
        </div>
        <div className='body'>
          <div className='title'>
            <h3>{props.title}</h3>
          </div>
          <div className='content'>{props.content}</div>
        </div>
      </div>
      <style jsx>{`
        .container {
          border: solid 1pt ${theme.colors.primary};
          height: 18rem;
          transition: 200ms;
        }
        .container:hover {
          color: ${theme.colors.primary};
          cursor: pointer;
          box-shadow: 0 0.4rem 0.5rem rgba(0, 0, 0, 0.15);
        }
        .body {
          display: flex;
          flex-direction: column;
          padding: 1rem 2rem;
        }
        .picture {
          width: 100%;
          height: 10rem;
          object-fit: cover;
        }
        .title {
          height: 3rem;
        }
        .title h3 {
          margin: 0;
        }
        .content {
          height: 3rem;
          line-height: 1rem;
          overflow-y: hidden;
          font-size: 0.8rem;
        }
      `}</style>
    </>
  );
};
export default Article;

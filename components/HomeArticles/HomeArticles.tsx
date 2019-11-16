import { Component } from 'react';
import Article from './Article/Article';

interface IProps {}
interface IState {
  articles: string;
}

class HomeArticles extends Component<IProps, IState> {
  render() {
    return (
      <>
        <div className='container'>
          <Article
            title='This is an article name'
            content="ipsum sin a la mette et bla bla on s'amuse"
            pictureUrl={new URL('https://picsum.photos/id/0/3000/300')}
          />
          <Article
            title='This could be another article'
            content="ipsum sinipsum sin a la mette et bla bla on  mette et bla bla on s'am sin a la mette et bla bla on s'am sin a la mette et bla bla on s'am sin a la mette et bla bla on s'am sin a las'am sin a la mette et bl sin a la mette et bl sin a la mette et bl sin a la mette et bl sin a la mette et bl sin a la mette et bl sin a la mette et bluseipsum sin a la mette et bla bla on s'am sin a la mette et bl sin a la mette et bl sin a la mette et bl sin a la mette et bl sin a la mette et bl sin a la mette et bl sin a la mette et bluseipsum sin a la mette et bla bla on s'am sin a la mette et bl sin a la mette et bl sin a la mette et bl sin a la mette et bl sin a la mette et bl sin a la mette et bl sin a la mette et bluse a la mette et bla bla on s'am sin a la mette et bl sin a la mette et bl sin a la mette et bl sin a la mette et bl sin a la mette et bl sin a la mette et bl sin a la mette et bluse"
            pictureUrl={new URL('https://picsum.photos/id/53/3780/300')}
          />
          <Article
            title='Hello world :D'
            content="ipsum sin a l sin a la mette et bl sin a la mette et bl sin a la mette et bla mette et bla bla on s'amuse"
            pictureUrl={new URL('https://picsum.photos/id/12/800/300')}
          />
          <Article
            title='ipsoume'
            content="ipsum sin a  sin a la mette et bl sin a la mette et bl sin a la mette et bl sin a la mette et blla mette et bla bla on s'amuse"
            pictureUrl={new URL('https://picsum.photos/id/45/3000/300')}
          />
          <Article
            title='ipsoume'
            content="ipsum sin a la mette et bla bla on s' sin a la mette et blamuse"
            pictureUrl={new URL('https://picsum.photos/id/67/1600/300')}
          />
          <Article
            title='Hello world :D'
            content="ipsum sin a l sin a la mette et bl sin a la mette et bl sin a la mette et bla mette et bla bla on s'amuse"
            pictureUrl={new URL('https://picsum.photos/id/34/500/3040')}
          />
        </div>
        <style jsx>{`
          .container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-row-gap: 4rem;
            grid-column-gap: 4rem;
            justify-items: stretch;
            padding: 0 4rem;
            font-family: 'Roboto';
          }
        `}</style>
      </>
    );
  }
}
export default HomeArticles;

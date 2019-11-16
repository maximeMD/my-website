import { NextPage } from 'next';
import Navbar from '../components/Navbar/Navbar';
import Button from '../components/Button/Button';
import Head from 'next/head';
import HighlightItem from '../components/HighlightItem/HighlightItem';
import {
  IoMdCodeWorking,
  IoMdCog,
  IoMdPeople,
  IoLogoLinkedin,
  IoLogoGithub,
} from 'react-icons/io';
import theme from '../styles/theme';

const TestPage: NextPage = () => {
  return (
    <>
      <Head>
        <link
          href='https://fonts.googleapis.com/css?family=Roboto&display=swap'
          rel='stylesheet'
        />
      </Head>
      <Navbar />
      <div className='landing-section'>
        <div className='landing-section-content'>
          <h1 className='landing-section-title'>
            Hello I'm <span className='title-emphasis'>Max</span>.
            <br />
            Welcome to my page.
          </h1>
          <span>
            I am a young software engineer, mainly interested in full stack web
            development
          </span>
          <div className='landing-section-buttons'>
            <div className='landing-section-button-1'>
              <Button
                onClick={() =>
                  window.open('https://www.linkedin.com/in/maxmd/', '_blank')
                }>
                <div className='landing-section-button-content'>
                  <IoLogoLinkedin />
                  <span className='landing-section-button-label'>Connect</span>
                </div>
              </Button>
            </div>
            <Button
              type='secondary'
              onClick={() =>
                window.open(
                  'https://github.com/maximeMD?tab=repositories',
                  '_blank',
                )
              }>
              <div className='landing-section-button-content'>
                <IoLogoGithub />
                <span className='landing-section-button-label'>Projects</span>
              </div>
            </Button>
          </div>
        </div>
        <img
          className='landing-section-illustration'
          src='landing-section-illustration.svg'
        />
      </div>
      <div className='highlight-container'>
        <HighlightItem
          title='Full-stack development'
          icon={<IoMdCodeWorking />}>
          I love being involved in every layer of the development process.
          Either low-level server thread pool management of high-level css
          styles refinement, I'm in!
        </HighlightItem>
        <HighlightItem title='DevOps culture' icon={<IoMdCog />}>
          Continuous Integration and Delivery is one of the major evolutions the
          IT world has ever known. To be able to always reach a higher level of
          automation and code quality is for me a true daily challenge.
        </HighlightItem>
        <HighlightItem title='Agile mindset' icon={<IoMdPeople />}>
          Because collaboration is a must-have in IT, I feel that having an
          agile mindset is the key to work in great conditions and release
          high-valuable projects.
        </HighlightItem>
      </div>
      <style jsx>{`
        .landing-section {
          font-family: 'Roboto';
          margin-top: 6rem;
          margin-bottom: 6rem;
          display: grid;
          grid-template-columns:
            minmax(0, 1fr) minmax(200px, 2fr) minmax(200px, 2fr)
            minmax(0, 1fr);
          grid-template-areas: '. content illustration .';
          grid-column-gap: 1rem;
        }
        .landing-section-content {
          grid-area: content;
          display: grid;
          grid-row-gap: 1rem;
        }
        .title-emphasis {
          color: ${theme.colors.primary};
        }
        .landing-section-illustration {
          width: 100%;
          grid-area: illustration;
          align-self: flex-end;
        }
        .landing-section-buttons {
          display: flex;
          flex-direction: row;
        }
        .landing-section-button-1 {
          margin-right: 0.5rem;
        }
        .landing-section-button-content {
          display: flex;
          align-items: center;
        }
        .landing-section-button-label {
          margin-left: 0.2rem;
        }
        .highlight-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          justify-items: center;
        }
        @media screen and (max-width: 980px) {
          .highlight-container {
            grid-template-columns: 1fr;
          }
        }
        .highlight-item {
          background-color: burlywood;
        }
      `}</style>
    </>
  );
};

export default TestPage;

import React from 'react';
import Head from 'next/head';
import { NextPage } from 'next';
import fetch from 'isomorphic-unfetch';

const Home: NextPage<{ personne: Personne }> = ({ personne }) => (
  <div>
    <Head>
      <title>Home</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <h1 className='test'>Test App</h1>
    <span>{personne.id}</span>
    <div>{personne.Titre}</div>
    {/* <Button>Hello</Button> */}
    <style jsx>{`
      .test {
        color: red;
      }
      .card p {
        margin: 0;
        padding: 12px 0 0;
        font-size: 13px;
        color: #333;
      }
    `}</style>
  </div>
);

interface Personne {
  id: number;
  Titre: string;
  Prenom: string;
  Nom: string;
  Email: string;
}

Home.getInitialProps = async ({ req }) => {
  const res = await fetch('http://localhost:1337/personnes/1');
  const personne: Personne = await res.json();
  return { personne };
};

export default Home;

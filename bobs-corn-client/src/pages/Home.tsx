import React from 'react';
import Header from '../components/Header';
import Button from '../components/Button';
import Content from '../components/Content';
import Container from '../components/Container';
import Footer from '../components/Footer';
import { useBuyCorn } from '../hooks/useBuyCorn';

const Home: React.FC = () => {

  const { buyCorn, message } = useBuyCorn();

  return (
    <Container>
      <Header title="🌽 Welcome to Bob's Corn" />
      <Content>
        <Button label="Buy Corn" onClick={buyCorn} />
      </Content>
      {message && (
        <div className="mt-4 text-center text-lg">
          {message}
        </div>
      )}
      <Footer />
    </Container>
  );
};

export default Home;
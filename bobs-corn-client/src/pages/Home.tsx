import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Container from '../components/Container';
import Content from '../components/Content';
import Button from '../components/Button';
import { Message } from '../components/Message';
import { useBuyCorn } from '../hooks/useBuyCorn';

const Home: React.FC = () => {

  const { buyCorn, message } = useBuyCorn();

  return (
    <Container>
      <Header title="🌽 Welcome to Bob's Corn" />
      <Content>
        <Button label="Buy Corn" onClick={buyCorn} />
      </Content>
      {message && <Message text={message} />}
      <Footer />
    </Container>
  );
};

export default Home;
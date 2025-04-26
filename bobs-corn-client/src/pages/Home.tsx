import React, { useState } from 'react';
import Header from '../components/Header';
import Button from '../components/Button';
import Content from '../components/Content';
import Container from '../components/Container';
import Footer from '../components/Footer';
import { purchaseCorn } from '../services/api';

const Home: React.FC = () => {

  const [message, setMessage] = useState<string | null>(null);

  const handleBuyCorn = async () => {
    const clientId = "user123"; // podés usar UUID.randomUUID() o similar
    try {
      const res = await purchaseCorn(clientId);

      if (res.status === 200) {
        setMessage("🌽 Corn purchased successfully!");
      } else if (res.status === 429) {
        setMessage("⚠️ Too Many Requests: please wait a minute");
      } else {
        setMessage("❌ Something went wrong");
      }
    } catch (error) {
      setMessage("❌ Network error");
    }
  };

  return (
    <Container>
      <Header title="🌽 Welcome to Bob's Corn" />
      <Content>
        <Button label="Buy Corn" onClick={handleBuyCorn} />
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
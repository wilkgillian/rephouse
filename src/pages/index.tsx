import { Hero } from '../components/Hero';
import { Container } from '../components/Container';
import Footer from '../components/Footer';

export default function Index() {
  const isMaster = true;
  return (
    <Container height="100vh">
      <Hero />
      {isMaster && <Footer isMaster={isMaster} />}
    </Container>
  );
}

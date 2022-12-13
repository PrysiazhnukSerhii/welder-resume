import photoSerhiiPrysiazhniuk from '../../img/photoSerhiiPrysiazhniuk.jpg';
import { Container, Title, Profession, Image } from './heder.styled';

export function Heder() {
  return (
    <Container>
      <div>
        <Title>Serhii Prysiazhniuk</Title>
        <Profession>Welder</Profession>
        <p>
          Professional welder with 5+ years of experience in MIG,MAG, MMA
          welding. Welded in all welding positions the control being performed
          by means of ultrasound and X-ray. Able to read blueprints and have an
          experience of working with a crane beam.
        </p>
      </div>
      <Image
        src={photoSerhiiPrysiazhniuk}
        alt="photo Serhii Prysiazhniuk"
      ></Image>
    </Container>
  );
}

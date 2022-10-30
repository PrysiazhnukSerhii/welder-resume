import { NavLink } from 'react-router-dom';
import photoSerhiiPrysiazhniuk from '../../img/photoSerhiiPrysiazhniuk.jpg';

import {
  Image,
  Heder,
  Contacts,
  ContactsLink,
  Title,
  Profession,
  Container,
  Box,
  Section,
  TitleSecondary,
  Position,
  BoxExperiance,
  NameCompani,
} from './resume.styled';
import { TfiEmail, TfiMobile } from 'react-icons/tfi';

export function Resume() {
  return (
    <>
      <h2>Resume</h2>
      <div>
        <Heder>
          <div>
            <Title>Serhii Prysiazhniuk</Title>
            <Profession>Welder</Profession>
            <p>
              Professional welder with 5+ years of experience in MIG,MAG, MMA
              welding . Welded in all welding positions was checked ultrasound
              and X-ray. Capable of reading blueprints and have experience
              working with a crane beam.
            </p>
          </div>

          <Image
            src={photoSerhiiPrysiazhniuk}
            alt="photo Serhii Prysiazhniuk"
          ></Image>
        </Heder>

        <Contacts>
          <li>
            <ContactsLink href="mailto:feremiks@gmail.com">
              <TfiEmail /> <span>feremiks@gmail.com</span>
            </ContactsLink>
          </li>

          {/* звонілка по номеру не вибивається */}
          <li>
            <ContactsLink href="tel:+421944038946">
              <TfiMobile />
              <span> +421944038946</span>
            </ContactsLink>
          </li>
        </Contacts>
      </div>

      <Section>
        <Box>
          <div>
            <TitleSecondary>WORK EXPERIANCE</TitleSecondary>

            <BoxExperiance>
              <Position>Welder MIG/MAG MMA</Position>
              <NameCompani>Robi</NameCompani>
              <div>
                <p>02/2020-09/2022</p>
                <p>Antwerpen, Belgium</p>
              </div>
              <p>Achievements/Tasks</p>
              <ul>
                <li>
                  Welded tanks for oil products, chemicals and other liquids
                  with a volume of 6000 tons. black metal, duplex and inox.
                </li>
                <li>
                  Perform welding 136 and 111 methods in all welding positions,
                  control was performed by ultrasonic and X-ray.
                </li>
                <li>Welded flanges and pipes</li>
                <li>Metal thickness from 4mm to 35mm.</li>
              </ul>
            </BoxExperiance>

            <BoxExperiance>
              <Position>Welder MIG/MAG </Position>
              <NameCompani>UkrProfiGroup</NameCompani>
              <div>
                <p>08/2018-12/2019</p>
                <p>Nowy Sacz, Polend</p>
              </div>
              <p>Achievements/Tasks</p>
              <ul>
                <li>Welded elements of train frames and railway bogie.</li>
                <li>
                  Perform welding 135 method, in the positions PA, PB, PC, PF,
                  the control was carried out on vibration and ultra sound.
                </li>
                <li>Made corrections by 141 method.</li>
                <li>Metal thickness from 6mm to 25mm.</li>
              </ul>
            </BoxExperiance>

            <BoxExperiance>
              <Position>Welder MIG/MAG </Position>
              <NameCompani>Bizon</NameCompani>
              <div>
                <p>07/1017-08/2018</p>
                <p>Kiev, Ukraine</p>
              </div>
              <p>Achievements/Tasks</p>
              <ul>
                <li>
                  Perform welding of various structures (armored doors,
                  balconies, fences, gates, etc.) using 135 and 111 methods
                </li>
                <li>Metal thickness from 1mm to 15mm.</li>
              </ul>
            </BoxExperiance>
          </div>

          <div>
            <TitleSecondary>CERTIFICATES</TitleSecondary>
            <p>ISO 9606-1 111 method (08/2022 - 12/2025)</p>
            <p>ISO 9606-1 135-136 method (08/2022 - 12/2025)</p>
          </div>

          <div>
            <TitleSecondary>Education</TitleSecondary>
            <h4>Personnel manager in education</h4>
            <p>
              National University of Life and Environmental Sciences of Ukraine
            </p>
            <p>09/2012-06/2016</p>

            <h4>Welder MIG/MAG MMA</h4>
            <p>
              National University of Life and Environmental Sciences of Ukraine
            </p>
            <p>09/2009-06/2012</p>
          </div>
        </Box>
        {/* це ділить на половину  */}
        <Container>
          <div>
            <TitleSecondary>SKILLS</TitleSecondary>
            <ul>
              <li>MMA welding</li>
              <li> MIG/MAG welding</li>
              <li>Flanges and pipe welding</li>
              <li> Industrial welding</li>
              <li>Noticing molten metal flow changes</li>
              <li>Reading blueprints</li>
              <li>Calculating Dimensions</li>
              <li>Work with a grinding machine</li>
            </ul>
          </div>
          <div>
            <TitleSecondary>LANGUAGES</TitleSecondary>
            <ul>
              <li>
                <p>Ukraine</p>
                <p>Native or Bilingual Proficiency</p>
              </li>
              <li>
                <p>Rassian</p>
                <p>Native or Bilingual Proficiency</p>
              </li>
              <li>
                <p>English</p>
                <p>Intermediate</p>
              </li>
              <li>
                <p>Slovakian</p>
                <p>Limited Working Proficiency</p>
              </li>
              <li>
                <p>Polish</p>
                <p>Elementary Proficiency</p>
              </li>
            </ul>
          </div>

          <div>
            <TitleSecondary>INTERESTS</TitleSecondary>
            <ul>
              <li>Programming javascript</li>
              <li> Astronomy</li>
              <li>History</li>
              <li> Physics</li>
            </ul>
          </div>
        </Container>
      </Section>

      <NavLink to="/portfolio">To welding seams portfolio</NavLink>
      <NavLink to="/certificates">To wCertificates</NavLink>
      {/* <button> </button>
      <button> Certificates</button> */}
    </>
  );
}

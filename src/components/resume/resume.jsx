import photoSerhiiPrysiazhniuk from '../../img/photoSerhiiPrysiazhniuk.jpg';

import {
  Image,
  Heder,
  Contacts,
  ContactsLink,
  Title,
  Profession,
  Container,
  SectionContainer,
  Box,
  Section,
  TitleSecondary,
  Position,
  BoxExperience,
  NameCompani,
  DateContainer,
  Tasks,
  ListTasks,
  ListTasksItem,
  StyledLink,
  EducationTitle,
  SkillsItem,
  ListSkills,
  ListLanguages,
  LanguagesItem,
  LanguagesLevl,
  Interests,
  GlobalContainer,
  SectionContainerCertificates,
  Date,
  EducationContainer,
  Institute,
} from './resume.styled';
import { TfiEmail, TfiMobile } from 'react-icons/tfi';

export function Resume() {
  return (
    <GlobalContainer>
      <div>
        <Heder>
          <div>
            <Title>Serhii Prysiazhniuk</Title>
            <Profession>Welder</Profession>
            <p>
              Professional welder with 5+ years of experience in MIG,MAG, MMA
              welding. Welded in all welding positions the control being
              performed by means of ultrasound and X-ray. Able to read
              blueprints and have an experience of working with a crane beam.
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
          <SectionContainer>
            <TitleSecondary>WORK EXPERIENCE</TitleSecondary>
            <BoxExperience>
              <Position>Welder MIG/MAG MMA</Position>
              <NameCompani>Robi</NameCompani>
              <DateContainer>
                <Date>02/2020-09/2022</Date>
                <p>Antwerpen, Belgium</p>
              </DateContainer>
              <Tasks>Achievements/Tasks</Tasks>
              <ListTasks>
                <ListTasksItem>
                  Welded black metal, duplex and inox tanks for oil products,
                  chemicals and other liquids with a volume of 6000 tons.
                </ListTasksItem>
                <ListTasksItem>
                  Perform 136 and 111 welding methods in all welding positions,
                  the control being carried out by means of ultrasonic and
                  X-ray.
                </ListTasksItem>
                <ListTasksItem>Welded flanges and pipes</ListTasksItem>
                <ListTasksItem>Metal thickness from 4mm to 35mm.</ListTasksItem>
              </ListTasks>
            </BoxExperience>
            <BoxExperience>
              <Position>Welder MIG/MAG </Position>
              <NameCompani>UkrProfiGroup</NameCompani>
              <DateContainer>
                <Date>08/2018-12/2019</Date>
                <p>Nowy Sącz, Poland</p>
              </DateContainer>
              <Tasks>Achievements/Tasks</Tasks>
              <ListTasks>
                <ListTasksItem>
                  Welded elements of train frames and railway bogie.
                </ListTasksItem>
                <ListTasksItem>
                  Perform 135 welding method in the positions PA, PB, PC, PF,
                  the control being carried out with vibration and ultra sound
                </ListTasksItem>
                <ListTasksItem>
                  Made corrections by using 141 method.
                </ListTasksItem>
                <ListTasksItem>Metal thickness from 6mm to 25mm.</ListTasksItem>
              </ListTasks>
            </BoxExperience>
            <BoxExperience>
              <Position>Welder MIG/MAG </Position>
              <NameCompani>Bizon</NameCompani>
              <DateContainer>
                <Date>07/1017-08/2018</Date>
                <p>Kyiv, Ukraine</p>
              </DateContainer>
              <Tasks>Achievements/Tasks</Tasks>
              <ListTasks>
                <ListTasksItem>
                  Perform welding of various structures (armored doors,
                  balconies, fences, gates, etc.) using 135 and 111 methods
                </ListTasksItem>
                <ListTasksItem>Metal thickness from 1mm to 15mm.</ListTasksItem>
              </ListTasks>
            </BoxExperience>
          </SectionContainer>
          <SectionContainerCertificates>
            <TitleSecondary>CERTIFICATES</TitleSecondary>
            <StyledLink to="/certificates">
              ISO 9606-1 111 method (08/2022 - 12/2025)
            </StyledLink>
            <StyledLink to="/certificates">
              ISO 9606-1 135-136 method (08/2022 - 12/2025)
            </StyledLink>
          </SectionContainerCertificates>
          <SectionContainer>
            <TitleSecondary>EDUCATION</TitleSecondary>
            <EducationContainer>
              <EducationTitle>Personnel manager in education</EducationTitle>
              <Institute>
                National University of Life and Environmental Sciences of
                Ukraine
              </Institute>
              <Date>09/2012-06/2016</Date>
            </EducationContainer>

            <EducationTitle>Welder MIG/MAG MMA</EducationTitle>
            <Institute>Baranivsky Professional Liceum</Institute>
            <Date>09/2009-06/2012</Date>
          </SectionContainer>
        </Box>
        {/* це ділить на половину  */}
        <Container>
          <SectionContainer>
            <TitleSecondary>SKILLS</TitleSecondary>
            <ListSkills>
              <SkillsItem>MMA welding</SkillsItem>
              <SkillsItem>MIG/MAG welding</SkillsItem>
              <SkillsItem>Flanges and pipe welding</SkillsItem>
              <SkillsItem>Industrial welding</SkillsItem>
              <SkillsItem>
                Good at noticing molten metal flow changes.
              </SkillsItem>
              <SkillsItem>Reading blueprints</SkillsItem>
              <SkillsItem>Calculating Dimensions</SkillsItem>
              <SkillsItem>Working with a grinding machine</SkillsItem>
            </ListSkills>
          </SectionContainer>
          <SectionContainer>
            <TitleSecondary>LANGUAGES</TitleSecondary>
            <ListLanguages>
              <LanguagesItem>
                <span>Ukraine</span>
                <LanguagesLevl>Native or Bilingual Proficiency</LanguagesLevl>
              </LanguagesItem>
              <LanguagesItem>
                <span>Russian</span>
                <LanguagesLevl>Native or Bilingual Proficiency</LanguagesLevl>
              </LanguagesItem>
              <LanguagesItem>
                <span>English</span>
                <LanguagesLevl>Pre-Intermediate</LanguagesLevl>
              </LanguagesItem>
              <LanguagesItem>
                <span>Slovakian</span>
                <LanguagesLevl>Elementary</LanguagesLevl>
              </LanguagesItem>
              <LanguagesItem>
                <span>Polish</span>
                <LanguagesLevl>Elementary</LanguagesLevl>
              </LanguagesItem>
            </ListLanguages>
          </SectionContainer>
          <SectionContainer>
            <TitleSecondary>INTERESTS</TitleSecondary>
            <ul>
              <Interests>Programming javascript</Interests>
              <Interests> Astronomy</Interests>
              <Interests>History</Interests>
              <Interests> Physics</Interests>
            </ul>
          </SectionContainer>
        </Container>
      </Section>
    </GlobalContainer>
  );
}

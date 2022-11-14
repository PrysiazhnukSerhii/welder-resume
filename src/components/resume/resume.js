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
          <SectionContainer>
            <TitleSecondary>WORK EXPERIANCE</TitleSecondary>
            <BoxExperience>
              <Position>Welder MIG/MAG MMA</Position>
              <NameCompani>Robi</NameCompani>
              <DateContainer>
                <p>02/2020-09/2022</p>
                <p>Antwerpen, Belgium</p>
              </DateContainer>
              <Tasks>Achievements/Tasks</Tasks>
              <ListTasks>
                <ListTasksItem>
                  Welded tanks for oil products, chemicals and other liquids
                  with a volume of 6000 tons. black metal, duplex and inox.
                </ListTasksItem>
                <ListTasksItem>
                  Perform welding 136 and 111 methods in all welding positions,
                  control was performed by ultrasonic and X-ray.
                </ListTasksItem>
                <ListTasksItem>Welded flanges and pipes</ListTasksItem>
                <ListTasksItem>Metal thickness from 4mm to 35mm.</ListTasksItem>
              </ListTasks>
            </BoxExperience>
            <BoxExperience>
              <Position>Welder MIG/MAG </Position>
              <NameCompani>UkrProfiGroup</NameCompani>
              <DateContainer>
                <p>08/2018-12/2019</p>
                <p>Nowy Sacz, Polend</p>
              </DateContainer>
              <Tasks>Achievements/Tasks</Tasks>
              <ListTasks>
                <ListTasksItem>
                  Welded elements of train frames and railway bogie.
                </ListTasksItem>
                <ListTasksItem>
                  Perform welding 135 method, in the positions PA, PB, PC, PF,
                  the control was carried out on vibration and ultra sound.
                </ListTasksItem>
                <ListTasksItem>Made corrections by 141 method.</ListTasksItem>
                <ListTasksItem>Metal thickness from 6mm to 25mm.</ListTasksItem>
              </ListTasks>
            </BoxExperience>
            <BoxExperience>
              <Position>Welder MIG/MAG </Position>
              <NameCompani>Bizon</NameCompani>
              <DateContainer>
                <p>07/1017-08/2018</p>
                <p>Kiev, Ukraine</p>
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
          <SectionContainer>
            <TitleSecondary>CERTIFICATES</TitleSecondary>
            <StyledLink to="/certificates">
              ISO 9606-1 111 method (08/2022 - 12/2025)
            </StyledLink>
            <StyledLink to="/certificates">
              ISO 9606-1 135-136 method (08/2022 - 12/2025)
            </StyledLink>
          </SectionContainer>
          <SectionContainer>
            <TitleSecondary>Education</TitleSecondary>
            <EducationTitle>Personnel manager in education</EducationTitle>
            <p>
              National University of Life and Environmental Sciences of Ukraine
            </p>
            <p>09/2012-06/2016</p>
            <EducationTitle>Welder MIG/MAG MMA</EducationTitle>
            <p>
              National University of Life and Environmental Sciences of Ukraine
            </p>
            <p>09/2009-06/2012</p>
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
              <SkillsItem>Noticing molten metal flow changes</SkillsItem>
              <SkillsItem>Reading blueprints</SkillsItem>
              <SkillsItem>Calculating Dimensions</SkillsItem>
              <SkillsItem>Work with a grinding machine</SkillsItem>
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
                <span>Rassian</span>
                <LanguagesLevl>Native or Bilingual Proficiency</LanguagesLevl>
              </LanguagesItem>
              <LanguagesItem>
                <span>English</span>
                <LanguagesLevl>Intermediate</LanguagesLevl>
              </LanguagesItem>
              <LanguagesItem>
                <span>Slovakian</span>
                <LanguagesLevl>Limited Working Proficiency</LanguagesLevl>
              </LanguagesItem>
              <LanguagesItem>
                <span>Polish</span>
                <LanguagesLevl>Elementary Proficiency</LanguagesLevl>
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

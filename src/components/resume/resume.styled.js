import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const GlobalContainer = styled.div`
  width: 900px;
`;

export const Image = styled.img`
  width: 180px;
  heigth: 200px;

  border: 4px solid #42949a;
  border-radius: 50%;
`;

// це не повиний бути хедер як по менні//

// під падінги можна буде створити общу секцію чи щось таке

// також потрібно зробити общі кольори які можна винести

// хедер яб краще  назвав всю секцію з заголовком і контактами цеж все хедер як по мені а там шо дальше то можна думати

// треба скинути заголовки на один рівень нижче
export const Heder = styled.div`
  display: flex;

  padding: 20px;

  color: white;
  background-color: #2d394d;
`;

export const Title = styled.h2`
  margin-top: 15px;
  margin-bottom: 15px;
`;

export const Profession = styled.p`
  margin-bottom: 15px;
`;

export const Вescription = styled.h2`
  margin-bottom: 15px;
`;

// ций сраний ласт чілд кидає зразу і на попередній відступ, тобто і на телефоні і на емайлі зараз відступ. воно чогось прокидує через лі аж на ссилку відступ
export const Contacts = styled.ul`
  display: flex;
  justify-content: center;

  padding: 10px 0;

  background-color: #1c2530;

  & :last-child {
    margin-left: 15px;
  }
`;

export const ContactsLink = styled.a`
  display: flex;
  align-items: center;

  color: white;

  & :last-child {
    margin-left: 5px;
  }

  &:hover {
    color: #2196f3;
  }
`;

// ----------кінець секції хедер-----------------------

//-------------Work experiance--------------
export const Section = styled.div`
  display: flex;
`;

export const Container = styled.div`
  width: 400px;
  padding: 20px;
`;
export const Box = styled.div`
  width: 500px;

  padding: 20px;
`;

export const SectionContainer = styled.div`
  margin-bottom: 15px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const BoxExperience = styled.div`
  margin-bottom: 15px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const TitleSecondary = styled.h3`
  display: inline-block;

  margin-bottom: 10px;

  color: #42949a;
  border-bottom: 3px solid #42949a;
`;

export const Position = styled.p`
  margin-bottom: 5px;

  font-weight: 700;
  line-height: 1.17;
`;

export const NameCompani = styled.p`
  margin-bottom: 5px;

  font-weight: 500;
  line-height: 1.17;
`;

export const DateContainer = styled.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: 5px;

  color: #42949a;
`;

export const Tasks = styled.p`
  font-weight: 50;
  line-height: 1.3;
  color: #42949a;
`;

export const ListTasks = styled.ul`
  & :before {
    content: '•';
    color: #42949a;

    display: inline-block;
    width: 13px;
  }
`;

export const ListTasksItem = styled.li`
  margin-bottom: 5px;

  &:last-child {
    margin-bottom: 0;
  }
`;

//-------------Certificates--------------

export const StyledLink = styled(NavLink)`
  display: block;

  margin-bottom: 5px;

  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    background-color: #e87b07;

    color: #1f1f1c;
  }
`;

// ------------Education --------

export const EducationTitle = styled.h4`
  margin-bottom: 5px;

  font-weight: 700;
  line-height: 1.17;
`;

//---------------Skills---------------
// оформлення  скілів в мене такеж як і опит, можна буде зробити одні загальні стилі

// взагалі чи потрібно буде стилізувати ций список??
export const ListSkills = styled.ul``;

export const SkillsItem = styled.li`
  display: inline-block;

  margin-right: 5px;
  margin-bottom: 5px;
  padding: 2px 7px;

  color: white;
  background-color: #999ea8;

  border-radius: 4px;

  &:last-child {
    margin-bottom: 0;
  }
`;

// ------------- Languages --------

export const ListLanguages = styled.ul`
  & li:before {
    content: '•';
    color: #42949a;

    display: inline-block;
    width: 13px;
  }
`;

export const LanguagesItem = styled.li`
  margin-bottom: 5px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const LanguagesLevl = styled.p`
  color: #42949a;
`;

// ------------- Interests --------------

export const Interests = styled.li`
  display: inline-block;

  margin-right: 5px;
  margin-bottom: 5px;
  padding: 2px 7px;

  border: 1px solid #999ea8;

  border-radius: 4px;

  &:last-child {
    margin-bottom: 0;
  }
`;

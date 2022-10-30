import styled from '@emotion/styled';

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

export const Section = styled.div`
  display: flex;
`;

export const Box = styled.div`
  width: 530px;

  padding: 20px;
`;

export const Container = styled.div`
  padding: 20px;
`;

export const BoxExperiance = styled.div`
  margin-bottom: 10px;
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

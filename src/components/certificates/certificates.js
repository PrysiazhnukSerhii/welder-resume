import React from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';

import {
  Header,
  ContainerDowload,
  LinkCertificates,
} from './certificates.styled';

import { certificat111, certificat135_136 } from '../../certificatesPdf/index';
import { certificatesJpg } from '../../img/index';

export function Certificates() {
  console.log(certificatesJpg[0].name);
  return (
    <>
      <ContainerDowload>
        <LinkCertificates href={certificat111} download>
          Download certificat 111
        </LinkCertificates>
        <LinkCertificates href={certificat111} download>
          Download certificat 135-136
        </LinkCertificates>
      </ContainerDowload>

      <Header>Certificat 111</Header>
      <img src={certificatesJpg[0].url} alt={certificatesJpg[0].name}></img>

      <Header>Certificat 135-136</Header>

      <img src={certificatesJpg[1].url} alt={certificatesJpg[1].name}></img>
    </>
  );
}

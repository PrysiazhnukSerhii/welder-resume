import React from 'react';

import {
  Header,
  ContainerDowload,
  LinkCertificates,
} from './certificates.styled';

import { certificat111, certificat135_136,certificat141 } from '../../certificatesPdf/index';
import { certificatesJpg } from '../../img/index';

export function Certificates() {
  console.log(certificatesJpg[0].name);
  return (
    <>
      <ContainerDowload>
        <LinkCertificates href={certificat111} download>
          Download certificat 111
        </LinkCertificates>
        <LinkCertificates href={certificat135_136} download>
          Download certificat 135-136
        </LinkCertificates>
        <LinkCertificates href={certificat141} download>
          Download certificat 141
        </LinkCertificates>
      </ContainerDowload>

      <Header>Certificat 111</Header>
      <img src={certificatesJpg[0].url} alt={certificatesJpg[0].name}></img>

      <Header>Certificat 135-136</Header>

      <img src={certificatesJpg[1].url} alt={certificatesJpg[1].name}></img>
      
      <Header>Certificat 141</Header>
      <img src={certificatesJpg[2].url} alt={certificatesJpg[2].name}></img>
    </>
  );
}

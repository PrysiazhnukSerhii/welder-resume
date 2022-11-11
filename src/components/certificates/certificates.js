import React from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';

import {
  Header,
  ContainerDowload,
  LinkCertificates,
} from './certificates.styled';

import certificat111 from '../../certificatesPdf/SerhiiPrysiazhniuk111.pdf';
import certificat135_136 from '../../certificatesPdf/SerhiiPrysiazhniuk135-136.pdf';

export function Certificates() {
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
      <Document file={certificat111}>
        <Page
          pageNumber={1}
          renderAnnotationLayer={false}
          renderTextLayer={false}
        />
      </Document>

      <Header>Certificat 135-136</Header>
      <Document file={certificat135_136}>
        <Page
          pageNumber={1}
          renderAnnotationLayer={false}
          renderTextLayer={false}
        />
      </Document>
    </>
  );
}

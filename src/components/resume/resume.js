import { NavLink } from 'react-router-dom';
import photoSerhiiPrysiazhniuk from '../../img/photoSerhiiPrysiazhniuk.jpg';

import { Image, Heder, Contacts, Email } from './resume.styled';

export function Resume() {
  return (
    <>
      <h2>Resume</h2>
      <div>
        <Heder>
          <div>
            <h2>Serhii Prysiazhniuk</h2>
            <p>Welder</p>
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
          <Email>feremiks@gmail.com</Email>
          <p>+421944038946</p>
        </Contacts>
      </div>
      <div>
        <h3>WORK EXPERIANCE</h3>

        <div>
          <p>Welder MIG/MAG MMA</p>
          <p>Robi</p>
          <div>
            <p>02/2020-09/2022</p>
            <p>Antwerpen, Belgium</p>
          </div>
          <p>Achievements/Tasks</p>
          <ul>
            <li>
              Welded tanks for oil products, chemicals and other liquids with a
              volume of 6000 tons. black metal, duplex and inox.
            </li>
            <li>
              Perform welding 136 and 111 methods in all welding positions,
              control was performed by ultrasonic and X-ray.
            </li>
            <li>Welded flanges and pipes</li>
            <li>Metal thickness from 4mm to 35mm.</li>
          </ul>
        </div>

        <div>
          <p>Welder MIG/MAG </p>
          <p>UkrProfiGroup</p>
          <div>
            <p>08/2018-12/2019</p>
            <p>Nowy Sacz, Polend</p>
          </div>
          <p>Achievements/Tasks</p>
          <ul>
            <li>Welded elements of train frames and railway bogie.</li>
            <li>
              Perform welding 135 method, in the positions PA, PB, PC, PF, the
              control was carried out on vibration and ultra sound.
            </li>
            <li>Made corrections by 141 method.</li>
            <li>Metal thickness from 6mm to 25mm.</li>
          </ul>
        </div>

        <div>
          <p>Welder MIG/MAG </p>
          <p>Bizon</p>
          <div>
            <p>07/1017-08/2018</p>
            <p>Kiev, Ukraine</p>
          </div>
          <p>Achievements/Tasks</p>
          <ul>
            <li>
              Perform welding of various structures (armored doors, balconies,
              fences, gates, etc.) using 135 and 111 methods
            </li>
            <li>Metal thickness from 1mm to 15mm.</li>
          </ul>
        </div>
      </div>

      <div>
        <h3>CERTIFICATES</h3>
        <p>ISO 9606-1 111 method (08/2022 - 12/2025)</p>
        <p>ISO 9606-1 135-136 method (08/2022 - 12/2025)</p>
      </div>

      <div>
        <h3>Education</h3>
        <h4>Personnel manager in education</h4>
        <p>National University of Life and Environmental Sciences of Ukraine</p>
        <p>09/2012-06/2016</p>

        <h4>Welder MIG/MAG MMA</h4>
        <p>National University of Life and Environmental Sciences of Ukraine</p>
        <p>09/2009-06/2012</p>
      </div>

      <div>
        <h3>SKILLS</h3>
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
        <h3>LANGUAGES</h3>
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
        <h3>INTERESTS</h3>
        <ul>
          <li>Programming javascript</li>
          <li> Astronomy</li>
          <li>History</li>
          <li> Physics</li>
        </ul>
      </div>

      <NavLink to="/portfolio">To welding seams portfolio</NavLink>
      <NavLink to="/certificates">To wCertificates</NavLink>
      {/* <button> </button>
      <button> Certificates</button> */}
    </>
  );
}

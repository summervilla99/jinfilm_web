
import Header from './components/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';
import './main.css';

function Contact() {
  return (
    <div
    style={{
        width: "100vw",
        height: "100vh",
      }}
    >
      <Header />
      <div className="p_contact">
        <p className="p_contact_1">
          <br /><br /><br /><FontAwesomeIcon icon={faCopyright} /> 2024 JINFILM. All right reserved<br />
        </p>
        <div className="map">
          <a href="https://maps.google.com" target="_blank">GOOGLE MAP</a> | 
          <a href="https://map.kakao.com" target="_blank"> KAKAO MAP</a>
        </div>
        <p className="p_contact_2">
          <br />서울시 중구 필동로 1길 30 동국대학교 102호<br /> 30, Pildong-ro 1-gil, Jung-gu, Seoul, Republic of Korea<br /><br />
          <i className="fa-solid fa-phone"></i>+82-(0)10-2349-8565<br />
          <i className="fa-regular fa-envelope"></i>  kangjc0530@jinfilm.co.kr<br />
          <i className="fa-brands fa-instagram"></i>  INSTA : @jinfilm
        </p>
      </div>
    </div>
  );
}

export default Contact;

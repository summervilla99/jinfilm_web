// src/Artist2.tsx

import React, { useState } from 'react';
import Header from './components/Header';
import Photo from './components/Photo';
import Video from './components/Video';
import PhotoVideoSwitcher from './components/PhotoVideoSwitcher';

import './main.css';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Artist2() {
  const [contentType, setContentType] = useState<'photo' | 'video' | null>(null);

  const handlePhotoClick = () => {
    setContentType('photo');
  };

  const handleVideoClick = () => {
    setContentType('video');
  };

  return (
    <div className="artist_top">
      <Header />
      <div className="artist_main">
        <div className="artist1">
          <p id="job"><FontAwesomeIcon icon={faCamera} /> PHOTOGRAPHER</p>
          
          <p id="name">김진 / Kim Jin</p>

          <p id="profile">LOOKBOOK</p>
          <p id="profile_list">Nae yeong, Jae Hyun, Min Gi, Gun Woo, Jung Hoo, Jung Hoon, Jung Ahn, IH(인천도시공사), Dong Hyun</p>
          <p id="snap">ADVERTISING</p>
          <p id="snap_list">YangYang, Fukuoka, Musical Snap, Seoul</p>
          <p id="ad">STILL LIFE</p>
          <p id="ad_list">Getmostone Fitness, Kumota</p>
          <p id="ad">PROFILE</p>
          <p id="ad_list">Getmostone Fitness, Kumota</p>
          <p id="ad">BEAUTY</p>
          <p id="ad_list">Getmostone Fitness, Kumota</p>
          <p id="ad">SKETCH</p>
          <p id="ad_list">Getmostone Fitness, Kumota</p>
          <p id="ad">FASHION</p>
          <p id="ad_list">Getmostone Fitness, Kumota</p>

          {/* <p id="cv">CV</p>
          <p id="cv_list">
            現 JIN Film 대표 / 대표작가 (2023 ~ )<br />
            패션모델 축구팀 290fc 메인 촬영 작가<br />
            Team Zero Base x 배구선수 임성빈 홍보영상 촬영, 편집<br />
            인천도시공사 20주년 회고록 프로필 사진 촬영<br />
            일반인 뮤지컬극단 S.A.M 전속 작가<br />
            Gemstone Fitness 부산 서면점 스케치 사진 촬영<br />
            Kumotan 대구 매장스케치 촬영, 홍보 영상 촬영<br />
            동국대 경찰사법대학 ‘캠퍼스폴리스’ 대내외 홍보영상 촬영, 편집<br />
            은평 혁신 문화축제 영상 총 기획 및 편집<br />
            前 광고대행사 PNR커뮤니케이션 영상 총괄 담당 PD (2020 ~ 2023)<br />
            국립호남권생물자원관 SNS 영상 촬영, 편집 담당<br />
            경북관광공사 SNS 영상 촬영, 편집 담당<br />
            서울대공원 SNS 영상 촬영, 편집 담당<br />
            대구관광재단 유튜브채널 컨텐츠 ‘두근두근 대구’ 시리즈 총괄 기획, 촬영, 편집 담당<br />
            대구교통공사 SNS 영상 촬영, 편집 담당<br />
            수성구청 SNS 영상 촬영, 편집 담당<br />
            외식브랜드 SPC ‘스트릿’ SNS 영상 촬영, 편집 담당<br />
            외식브랜드 SPC ‘라그릴리아’ SNS 영상 촬영, 편집 담당<br />
            외식브랜드 SPC ‘리나스’ SNS 영상 촬영, 편집 담당<br />
            외식브랜드 SPC ‘피그인더가든’ SNS 영상 촬영, 편집 담당<br />
            외식브랜드 SPC ‘패션파이브’ SNS 영상 촬영, 편집 담당<br />
            네이버 포스트 ‘현대 트럭앤버스’ 영상 촬영, 편집 담당
          </p> */}
        </div>
        <div className="artist_img">
          <img src="/src/photo/artist1.png" alt="JINCHOEL" />
        </div>
      </div>

      <PhotoVideoSwitcher onPhotoClick={handlePhotoClick} onVideoClick={handleVideoClick} selectedType={contentType || 'photo'} />

      {/* Photo 또는 Video에 따라 다른 컨텐츠를 렌더링함 */}
      {(contentType === 'photo' || contentType === null) && <Photo />}
      {contentType === 'video' && <Video />}

      
    </div>
  );
}

export default Artist2;

# 🍪Devsisters🍪 Renewal Page📄
<br>
<div align="center">
  <img src="https://user-images.githubusercontent.com/108567709/223645296-d9961b7b-56ed-4003-93c2-5dd562fe4f9f.jpg">
</div>

## 프로젝트 소개
<div align="center">
  <img src="https://user-images.githubusercontent.com/108567709/223633899-452fba74-202c-4f78-85a7-08511ac19476.jpg">
  <p>*현재 데브시스터즈 홈페이지*</p>
</div>
<br>
<p>
  첫 퍼블리싱 제작한 홈페이지 사이트이며 평소 좋아하던 모바일게임의 회사 홈페이지를 보고서 아쉬운 느낌이 있어 퍼블리싱하게 되었으며<br>메인 홈페이지와 2개의 서브 홈페이지를 제작하였습니다. 반응형 웹 사이트로 제작 하였으며 이 README는 desktop의 대한 설명만 다루고 있습니다. 아래 홈페이지 제작 하기전 기획했던 기획서도 첨부 했습니다!
</p>

[📜기획서보기📜](https://drive.google.com/file/d/1Qip4qA_4QaBrdTgyxuTrNTZ7RfabIGZo/view?usp=share_link)

## 기술스택
<div align="center">
  <h3>📝SKill📖</h3>
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=HTML5&logoColor=white" width="15%" height="50" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=CSS3&logoColor=white" width="15%" height="50" />
  <img src="https://img.shields.io/badge/Javascript-F7DF1E?style=flat-square&logo=Javascript&logoColor=white" width="15%" height="50" />
  <img src="https://img.shields.io/badge/jQuery-0769AD?style=flat-square&logo=jQuery&logoColor=white" width="15%" height="50" />
</div>
<br>
<div align="center">
  <h3 align="center">🎮Tools🎮</h3>
  <img src="https://img.shields.io/badge/Visual%20Studio%20Code-007ACC?style=flat-square&logo=Visual%20Studio%20Code&logoColor=white" />
</div>

## 구현기능

<ol>
  <li>
    <h3>fullpage , mousewheel</h3>
    <br>
    <div align="center">
      <img src="https://user-images.githubusercontent.com/108567709/223633910-8ceb31e0-ba6b-41c6-bd03-a94bbbdccd2a.jpg">
    </div>
    <br>
    <ul>
      <li>  메인 홈페이지는 각각의 section 마다 width 값을 100% height 값을 jquery로 window.height 함수를 사용하여 높이를 주어 직접 fullpage를 구현 하였습니다.</li>
      <li>  jquery.mousewheel , jquery.easing 플러그인을 사용하여 풀페이지 효과를 사용하였습니다.</li>
    </ul>
  </li>
  <li>
    <h3>동영상 남은시간 및 change</h3>
    <br>
    <div align="center">
      <img src="https://user-images.githubusercontent.com/108567709/223633912-24f10f23-1019-4b9e-8e18-59ad742a208a.jpg">
    </div>
    <br>
    <ul>
      <li>  span태그의 width 값을 0 으로 준 뒤에 stop() , animate() 함수를 활용하여 동영상 시간의 맞게 width 값이 늘어나게 해주어 동영상에 플레이된 시간을 표시되게 해주었습니다.</li>
      <li>  trigger('pause') , children() , get().play() 함수를 활용해서 동영상을 강제로 멈추게 한뒤에 다음 동영상이 자식요소로 들어오게 한뒤 동영상이 플레이되게 해주었으며<br> setInterval() 을 활용해 플레이 동영상의 시간이 지나면 다음 동영상으로 넘어가게 해주었습니다.</li>
    </ul>
  </li>
  <li>
    <h3>Nav</h3>
    <br>
    <div align="center">
      <img src="https://user-images.githubusercontent.com/108567709/223633917-65579e3c-4540-4d02-97ce-50b28640352e.jpg">
    </div>
    <br>
    <ul>
      <li>  Nav에 hover 했을때 글씨의 color , scale 값을 주어 색이 바뀌며 글씨가 커지는 효과를 주었습니다.</li>
    </ul>
  </li>
  <li>
    <h3>회사의 핵심 및 문화</h3>
    <br>
    <div align="center">
      <img src="https://user-images.githubusercontent.com/108567709/223633919-ccf7ee56-09b5-4e70-adf3-95fb739af635.jpg">
    </div>
    <br>
    <ul>
      <li>flex를 활용하여 내용을 배치해 주었습니다.</li>
    </ul>
  </li>
  <li>
    <h3>게임소개</h3>
    <br>
    <div align="center">
      <img src="https://user-images.githubusercontent.com/108567709/223633923-99895627-c517-4ec8-98e1-0ff9dd292a49.jpg">
    </div>
    <br>
    <ul>
      <li>  왼쪽 박스의 다른 게임을 클릭하면 게임의 소개 영상과 게임 이름과 홈페이지 그리고 다운로드 홈페이지 주소가 변경되게 해주었습니다.</li>
      <li>  배열을 만들어 index 값과 배열의 순번에 따라서 보여지는 값이 바뀌게끔 해주었습니다.</li>
    </ul>
  </li>
  <li>
    <h3>MEDIA</h3>
    <br>
    <div align="center">
      <img src="https://user-images.githubusercontent.com/108567709/223633924-0f2c6fb3-c157-4a19-adfc-954d8eeb56e7.jpg">
    </div>
    <br>
    <ul>
      <li>  img hover시 scale 값을 주어 이미지가 커지는 효과를 주었습니다.</li>
      <li>  grid를 활용하여 배치해 주었습니다.</li>
      <li>  story more 클릭시 media 서브 페이지로 이동합니다.</li>
    </ul>
  </li>
  <li>
    <h3>Career</h3>
    <br>
    <div align="center">
      <img src="https://user-images.githubusercontent.com/108567709/223633925-e8734096-7054-4b63-bcec-39e7d69e7aa5.jpg">
    </div>
    <br>
    <ul>
      <li>  더 알아보기 클릭시 채용사이트로 이동합니다.</li>
      <li>  문화/복지 클릭시 Career 서브 페이지로 이동합니다.</li>
    </ul>
  </li>
  <li>
    <h3>Footer</h3>
    <br>
    <div align="center">
      <img src="https://user-images.githubusercontent.com/108567709/223633928-e2cc2758-3aed-4e05-9eee-d39ebfd572b6.jpg">
    </div>
    <br>
    <ul>
      <li>  개인정보처리방침 게임이용약관 클릭시 페이지로 이동됩니다.</li>
    </ul>
  </li>
  <li>
    <h3>MEDIA Sub Page</h3>
    <br>
    <div align="center">
      <img src="https://user-images.githubusercontent.com/108567709/223633929-9abe92e2-31e3-4b22-a325-c1c093e7b255.jpg">
    </div>
    <br>
    <ul>
      <li>  각각의 게임마다 sub 페이지를 만들었습니다.</li>
      <li>  img hover시 scale 값을 주어 이미지가 박스 안에서 커지는 효과를 주었습니다.</li>
      <li>  아래 박스의 버튼 hover시 img가 변경되게 해주었습니다. 2.3 번 페이지는 구현되지 않았습니다.</li>
    </ul>
  </li>
  <li>
    <h3> Sub Page</h3>
    <br>
    <div align="center">
      <img src="https://user-images.githubusercontent.com/108567709/223633931-485148aa-b510-4484-a7a8-4ead869adfc3.jpg">
    </div>
    <br>
    <ul>
      <li>  next , prev 구현하여 클릭시 위에 문구가 바뀌게 설정하였습니다.</li>
    </ul>
  </li>
 </ol>

import Header from "./components/Header";
import "./main.css";

function Home() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
      }}
    >
      <Header />
      <p className="paragraph">
        <br />
        <br />
        <br />
        <span className="text-span">
          <br />
          'JINFILM’은 순간의 감동과 아름다움을 포착해내는 사진 및 영상을 만드는
          곳입니다. 우리는 작품에서 고유한 이야기를 창조하며, 사랑과 열정을
          담아내어 당신의 순간을 영원히 기억하도록 도울 것입니다. 더 나은 내일을
          위해 우리와 함께 기억을 만들어가길 바랍니다.
          <br />
          <br />
          <br />
          &quot;JINFILM&quot; is a place where we capture moments of emotion and
          beauty through photography and videography. We create unique stories
          in our works, infusing love and passion to help you cherish your
          moments forever. We hope to create memories with you for a better
          tomorrow.
        </span>
      </p>
    </div>
  );
}

export default Home;


import "./watch.scss";

export default function Watch() {
  return (
    <div className="watch">
      <div className="back">
     
        Home
      </div>
      <video
        className="video"
        autoPlay
        progress
        controls
        src="./xyz.mp4"
      />
    </div>
  );
}
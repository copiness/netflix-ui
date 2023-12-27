import "./listitem.scss";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import { useState } from "react";
import {useNavigate} from 'react-router-dom'
function Listitem({ index }) {
  const navigate=useNavigate()
  const [isHovered, setIsHovered] = useState(false);
  const trailer = "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";
  const handlePlay=()=>{
    navigate('/watch')
  }
  return (
    <div
      className="listitem"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src="https://images.unsplash.com/photo-1622126812734-35a1d6c46f22?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1vbmV5JTIwaGVpc3R8ZW58MHx8MHx8fDA%3D" alt="" />
      {isHovered && (
        <div className="itemInfo">
          <video src={trailer} autoPlay muted loop controls />
          <div className="icons">
            <div onClick={handlePlay}><PlayArrowIcon className="icon" /></div>
            <AddIcon className="icon"/>
            <ThumbUpIcon className="icon"/>
            <ThumbDownIcon className="icon"/>
          </div>
          <div className="itemInfoTop">
            <span>1 hour 14 mins</span>
            <span className="limit">+16</span>
            <span>1999</span>
          </div>
          <div className="desc">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt  magni.
          </div>
          <div className="genre">Action</div>
        </div>
      )}
    </div>
  );
}

export default Listitem;

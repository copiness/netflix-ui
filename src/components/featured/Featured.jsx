import PlayArrow from "@mui/icons-material/PlayArrow";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import "./featured.scss";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

function Featured({ type }) {
  return (
    <div className="featured">
        {type && (
            <div className="category">
                <span>{type === 'movie'? 'Movies' : 'Series'}</span>
                <select name="genre" id="genre">
                    <option>Genre</option> 
                    <option value="adventure">Adventure</option>
                    <option value="comedy">Comedy</option>
                    <option value="crime">Crime</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="historical">Historical</option>
                    <option value="horror">Horror</option>
                    <option value="romance">Romance</option>
                    <option value="sci-fi">Sci-fi</option>
                    <option value="thriller">Thriller</option>
                    <option value="western">Western</option>
                    <option value="animation">Animation</option>
                    <option value="drama">Drama</option>
                    <option value="documentary">Documentary</option>
                </select>
            </div>
        )}
        <img src="./pexels-jeswin-thomas-1549004.jpg" alt="" />
      <div className="info">
        <img src="https://images.pexels.com/photos/2524145/pexels-photo-2524145.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        <span className="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, unde. Odio saepe enim tenetur illum repudiandae vel facere, perspiciatis minus asperiores voluptatibus eius aspernatur assumenda fuga! Veritatis facilis a ipsa!
        </span>
      
        <div className="buttons">
           <button className="play">
             <PlayArrowIcon />
             <span>play</span>
           </button>
           <button className="more">
             <InfoOutlinedIcon />
             <span>Info</span>
           </button>
        </div>
      </div>
    </div>
  );
}

export default Featured;

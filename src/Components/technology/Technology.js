import * as React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Bottom from "../bottom/Bottom";
import { CategoryContext } from "../context/Context";

const Technology = () => {
  const [category] = useContext(CategoryContext);


  return (
    <div>
      <h1 className="tollyh">Technology</h1>
      {category.filter((render)=>render.id>4 && render.id<9).map((tec) => (
        <div key={category.id} className="tolly">
          <Link to={`/technology/${tec.id}`} className="tolly">
          <div className="tollyi"><img src={tec.img} alt="" /></div>
          <h3 className="tollyt">{tec.det}</h3>
          </Link>
          <h5 className="tollyd">{tec.date}</h5>
          <hr/>
        </div>
      ))}
      <div className="adv"><img src="https://previews.123rf.com/images/ra2studio/ra2studio1503/ra2studio150300261/37023066-ordinateur-portable-moderne-avec-des-symboles-de-m%C3%A9dias-technologiques-avenir.jpg" className="adv" alt="" /></div><br/>
      <button className="loadmore">LoadMore</button>
      <Bottom/>
    </div>
  );
};

export default Technology;
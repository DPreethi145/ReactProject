import * as React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Bottom from "../bottom/Bottom";
import { CategoryContext } from "../context/Context";

const Jobs = () => {
    const [category] = useContext(CategoryContext);
  
    return (
      <div>
        <h1 className="tollyh">Food</h1>
        {category.filter((render)=>render.id>8 && render.id<13).map((wood) => (
          <div key={category.imgt} className="tolly">
            <Link to={`/jobs/${wood.id}`} className="tolly">
              <div className="tollyi"><img src={wood.img} alt="" /></div>
              <h3 className="tollyt">{wood.det}</h3>
            </Link>
            <h5 className="tollyd">{wood.date}</h5>
            <hr/>
          </div>
        ))}
        <div className="adv"><img src="https://static.theprint.in/wp-content/uploads/2021/06/changing-face-of-indian-food-and-beverage-industry.jpg" className="adv" alt="" /></div><br/>
        <button className="loadmore">LoadMore</button>
        <Bottom/>
      </div>
    );
  };
  
  export default Jobs;
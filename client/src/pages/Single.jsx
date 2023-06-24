import React from "react";
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <div className="user">
          <img
            src="https://images.pexels.com/photos/428328/pexels-photo-428328.jpeg?cs=srgb&dl=pexels-spencer-selover-428328.jpg&fm=jpg"
            alt=""
          />
          <div className="info">
            <span>John</span>
            <p>Postado 2 dias atrás</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>
        </div>
        <h1> deserunt facilis ex nisi! Sit, commodi?</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
          fugiat dignissimos cum! Sapiente mollitia eaque repudiandae nisi
          repellendus quis qui debitis tempora. Voluptatem, nihil! Quos eaque
          qui reprehenderit cum soluta? Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Adipisci fugiat dignissimos cum! Sapiente mollitia
          eaque repudiandae nisi repellendus quis qui debitis tempora.
          Voluptatem, nihil! Quos eaque qui reprehenderit cum soluta?
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
          fugiat dignissimos cum! Sapiente mollitia eaque repudiandae nisi
          repellendus quis qui debitis tempora. Voluptatem, nihil! Quos eaque
          qui reprehenderit cum soluta?
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
          fugiat dignissimos cum! Sapiente mollitia eaque repudiandae nisi
          repellendus quis qui debitis tempora. Voluptatem, nihil! Quos eaque
          qui reprehenderit cum soluta? Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Adipisci fugiat dignissimos cum! Sapiente mollitia
          eaque repudiandae nisi repellendus quis qui debitis tempora.
          Voluptatem, nihil! Quos eaque qui reprehenderit cum soluta?
        </p>
      </div>
      <Menu />
    </div>
  );
};

export default Single;

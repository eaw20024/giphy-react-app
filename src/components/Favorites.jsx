import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Favorites = () => {

    let items = [];
    for(let i = 0;i< localStorage.length;i++){
        let item = localStorage.getItem(localStorage.key(i));
        items.push(item);
    }

    //console.log(items);
 
  return (
    <div className="m-4">
        <div className="form-inline justify-content-center m-4 nav-container">
            <Button className="link-button">
                <Link to={"/"}>
                    Home
                </Link>
            </Button>
        </div>
        <div className="container gifs">
            {items.map(item =>{
            return ( <img src={item}/> )
            })}
        </div>
    </div>
  );

};

export default Favorites;
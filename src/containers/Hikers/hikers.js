// importing libraries
import React, {Component} from "react";
import { Link } from "react-router-dom";
import Fade from 'react-reveal/Fade';

// importing stylesheet, data
import HikerList from "./hikerList";
import "./hikers.css";
import appRoutes from "../../shared/appRoutes";


class Hikers extends Component {
  state = {
    hiker: HikerList
  };
  render(){
    let { hiker } = this.state;

    let hikerSet = []


    return (

      <div className="outercontainer">
      <h1 className="BannerText"> THE HIKERS</h1>
        <br />
        <div className="Hikecontainer">
{/* loops through each object through map method and grabs object attributes to populate divs */}
          {hiker.map((hike, idx) => {
            return (

            <div className="hikerInfo">
              <div className={hike.style}>
              <button type="button" class="btn btn-link" data-toggle="modal" data-target={"#"+hike.id}>
                <img  src={hike.photo} alt={hike.name} />
              </button>

              <h5>{hike.name}</h5>
              </div>
              {/* image links to further information via a modal box */}
              <div class="modal fade" id={hike.id} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                <div class="modal-content">
                <div class="modal-header">
                <h4 class="modal-title" id="exampleModalLabel">{hike.name}</h4>< br/>
                <h6>{hike.dob}</h6>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
                </div>
              <div class="modal-body">
                {hike.who}
              </div>
              </div>
          </div>
        </div>


            </div>
            );
          })}
          </div>
    </div>
  );
  }
};

export default Hikers;

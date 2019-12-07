// importing libraries and stylesheets
import React,{Component} from "react";
import "./investigation.css";
import appRoutes from "../../shared/appRoutes";
//import { Link } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';
import Fade from 'react-reveal/Fade';
// importing data to populate page
import InvestigationContent from "./investigationContent";

class Investigation extends Component {
  state = {
    section: InvestigationContent
  };
  render(){
    let { section } = this.state;
    let icon;


    return(
      <div id="outercontainer">
      <h1 className="InvestigationBanner">The Investigation</h1>

      {section.map((sec, idx) => {
        return (

        <div id={sec.id} className={"section "+ sec.style}>
        <div className="textContainer">
            <h3 className="CharName">{sec.header}</h3>
            <Fade left>
            <div className="textcomp">
              <img className="img-responsive" src={sec.photo} />
              <p className="sectionText">{sec.text}</p>
            </div>
            </ Fade>

        </div>
{/* links for each section, this code will jump to the following section, if it's the last one it takes you back to the first section */}
        {section.length - 1 > sec.id &&
          <Link to={"#" + parseInt(sec.id + 1)}><i class="fas fa-chevron-down fa-3x"></i></Link>
        }
        {sec.id == 2 &&
            <Link to={"#0"}><i class="fas fa-chevron-up fa-3x"></i></Link>
        }
        </div>
        );
      })}
      </div>
    );
  }
}
export default Investigation;

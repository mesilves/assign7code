// importing libraries
import React from "react";
import { Link } from "react-router-dom";
import Fade from 'react-reveal/Fade';
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';

// importing data
import appRoutes from "../../shared/appRoutes";
import timelineData from './timelineData';

// stylesheet
import "./timeline.css";

// creation of timeline component
const Timeline = () =>
    timelineData.length > 0 && (
        <div className="timeline-container">
            {timelineData.map((data, idx) => (
                <TimelineItem data={data} key={idx} />
            ))}

        </div>

    );

// creation of content on page
    const TimelineItem = ({ data }) => (

        <div className="timeline-item">
            <div className="timeline-item-content">
              <Fade left>
                <time>{data.date}</time>
                <p>{data.text}</p>
                  </Fade>
                <span className="circle" />
            </div>

        </div>

      );





export default Timeline;

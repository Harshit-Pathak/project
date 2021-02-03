import React from "react";
import { Carousel, Button, Container, Row, Col } from "react-bootstrap";
import "./slider.css";

function Slider()
{
    return (
          <div className="intro">   
          <Carousel>
          
    
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/assets/slide7.jpg"            
                alt="First slide"
                
              />
              
              <Carousel.Caption>
                <h3><b>Learn DS</b></h3>
                <p>From Basics to Advanced</p>
              </Carousel.Caption>
              
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/assets/slide9.jpg"    
                alt="Third slide"
              />
              
                
              <Carousel.Caption>
                <h3><b>Master Algorithms</b></h3>
                <p>Enhance problem solving skills</p>
              </Carousel.Caption>
              
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/assets/slide11.jpg"    
                alt="Third slide"
              />
            
              <Carousel.Caption>
                <h3><b>Discuss with peers</b></h3>
                <p>
                  Share knowledge and grow
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
  
    
      );
}
export default Slider;

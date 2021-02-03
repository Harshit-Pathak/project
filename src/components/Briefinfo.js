import React from "react";
import {Jumbotron,Button}from "react-bootstrap";
import "./briefinfo.css";

function Briefinfo()
{
    return(
    <div className="jumbotron">
            <h4 className="display-4">DS Tutorials</h4>
            <p className="lead">Cover the topics from Arrays,Linked Lists,Stacks,Queues,Trees,Graphs from our detailed tutorials with animations.</p>
        
            <p>Detailed explanations of each concept along with fluid animations for easy retention</p>
            <p className="lead">
                <a className="btn btn-info btn-sm" href="#" role="button">Start Learning</a>
            </p>
        <hr></hr><br></br>
        <h4 className="display-4">Algorithm Tutorials</h4>
        <p className="lead">Master the backbone of computer science from basic to advanced with clear examples and animations.</p>
        
        <p>Detailed explanations of each concept along with fluid animations for easy retention</p>
        <p className="lead">
            <a className="btn btn-info btn-sm" href="#" role="button">Start Learning</a>
        </p>
    </div>
    );
}
export default Briefinfo;
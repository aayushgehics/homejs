
import React, { Component } from 'react'
import './grid.css';
import "./Home.css";
import VideoPlayer from 'react-video-js-player';
import Video from './video/video1.mp4' 
export class Home extends Component {
    render() {
    const videosrc = Video;
        return (
            <div>
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <link rel="stylesheet" type="text/css" href="grid.css" />
        <link rel="stylesheet" type="text/css" href="responsive.css" />
        <link rel="stylesheet" type="text/css" href="flowchart.css" />
        <title>HOME</title>
        <header>
           <div className="Head" >
            <div className="row">
              <div className="col span-1-of-2 text-box">
                  
                <h1>WE ARE DIGITAL EXAMINER</h1> 
                <a className="Button" href="#working" >WANNA SEE THE WORKING</a>
              </div>
              <div className="col span-1-of-2 imgs">
                
              </div>
            </div>
          </div>
        </header>
        <section className="mission" >
          <div className="row">
            <div className="col span-1-of-2 cl">
              <h3>OUR MISSION</h3>
              <p className="para" style={{textTransform: 'uppercase'}}> we are aiming  to get workload of teachers off there back and <br></br>just to let teachers enjoy their time to the fulliest</p>
            </div>
            <div className="col span-1-of-2 cl">
              <h3>MOTIVATION</h3>
              <p className="para" style={{textTransform: 'uppercase'}}>after getting to know the struggle of teachers in making papers was a bit hectic so we thought of changing the scenario of making papers</p>
              `</div>
              <div className="nve">
                    <h3>GOAL</h3>
                    <p className="para" style={{textTransform:'uppercase'}}>our main goal is to let teachers enjoy their life with less work load of maikng papers and<br></br> still enjoy their time while making papers</p>
              </div>
           
          </div>
        </section>
        <section className="flowchart" id="working" style={{backgroundColor: '#004f95'}}>
          <h1 style={{color: 'white', marginTop: '0px'}}>WORKING of the app</h1>
        </section>
        <VideoPlayer
        src={videosrc}
        width="650"
        height="420"
 />
       
      </div>
        )
    }
}

export default Home

import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

export default class LandingPage extends Component {
  render() {
    return (
      <div style={{ width: '100%', margin: 'auto' }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            
            <img className="myPic1"
              src="https://avatars1.githubusercontent.com/u/60132580?s=400&u=d331238f8c3274cfd958f3c3ef4be66fc5a98953&v=4"
              alt="avatar"
             
            />
            <div className="banner-text">
              <h1>Hi! I am Pei-Ling Wu</h1>
              <hr/>

              <p>HTML/CSS | SASS | Bootstrap | JavaScript | React </p>
              <div className="social-links">

                {/* LinkedIn */}
                <a href="http://linkedin.com" target="_blank">
                  <i className="fa fa-linkedin-square" rel="noopener noreferrer" aria-hidden="true"/>
                </a>

                {/* GitHub */}
                <a href="http://github.com" target="_blank">
                  <i className="fa fa-github-square" rel="noopener noreferrer" aria-hidden="true"/>
                </a>
                
                {/* FreecodeCamp */}
                <a href="http://freecodecamp.org/" target="_blank">
                  <i className="fa fa-free-code-camp" rel="noopener noreferrer" aria-hidden="true"/>
                </a>
                
                {/* YouTube */}
                <a href="http://youtube.com" target="_blank">
                  <i className="fa fa-youtube-square" rel="noopener noreferrer" aria-hidden="true"/>
                </a>
                
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

/* 
  <img src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png" alt="avatar" 
*/

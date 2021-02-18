import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';

export default class Resume extends Component {
  render() {
    return (
      <div className="background1">
        <Grid >
          <Cell style={{ paddingLeft:'5%',color:'grey' }} col={4}>
            <div style={{ textAlign: 'center' }}>
              <img className="myPic"
                src="https://avatars1.githubusercontent.com/u/60132580?s=400&u=d331238f8c3274cfd958f3c3ef4be66fc5a98953&v=4"
                alt="me"
                style={{ height: '200px' }}
              />
            </div>
            <h2 style={{ paddingTop: '1em' }}>Pei-Ling Wu</h2>
           
            <hr style={{ borderTop: '3px solid #833fb2', width: '80%' }} />
            <div style={{  width: '80%' }}>
            <p >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              iste deleniti consectetur? Hic nobis laboriosam corrupti,
              recusandae voluptatem maiores vitae, obcaecati veritatis doloribus
              accusantium mollitia cumque, ducimus totam error itaque
              repudiandae iste modi magni at?
            </p></div>
            <hr style={{ borderTop: '3px solid #833fb2', width: '80%' }} />
            <h5>Address</h5>
            <p>1 Hacker Way Menlo Park, 94025</p>
            <h5>Phone</h5>
            <p>+49-152-2345678</p>
            <h5>Email</h5>
            <p>contact@me.com</p>
            <h5>Web</h5>
            <p>mywebsite.com</p>{' '}
            <hr style={{ borderTop: '3px solid #833fb2', width: '0%' }} />
          </Cell>
          <Cell  className="resume-right-col" col={8}>
            <h2>Education</h2>

            <Education
              startYear={2002}
              endYear={2006}
              schoolName="First Institute"
              schoolDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            iste deleniti consectetur? Hic nobis laboriosam corrupti,
            recusandae voluptatem maiores vitae."
            />

            <Education
              startYear={2007}
              endYear={2009}
              schoolName="Second Institute"
              schoolDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            iste deleniti consectetur? Hic nobis laboriosam corrupti,
            recusandae voluptatem maiores vitae."
            />
            <hr style={{ borderTop: '3px solid gray' }} />
            <h2>Experience</h2>
            <Experience
              startYear={2009}
              endYear={2012}
              jobName="First Job"
              jobDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
iste deleniti consectetur? Hic nobis laboriosam corrupti,
recusandae voluptatem maiores vitae."
            />

            <Experience
              startYear={2012}
              endYear={2016}
              jobName="Second Job"
              jobDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
iste deleniti consectetur? Hic nobis laboriosam corrupti,
recusandae voluptatem maiores vitae."
            />
            <hr style={{ borderTop: '3px solid grey' }} />
            <h2>Skills</h2>
            <Skills  skill="HTML" progress={90} />
            <Skills skill="CSS" progress={85} />
            <Skills skill="javascript" progress={60} />
            <Skills skill="React" progress={70} />
          </Cell>
        </Grid>
      </div>
    );
  }
}

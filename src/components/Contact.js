import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

export default class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell className="cell1" col={6}>
            <h2 style={{margin:'0px 0px'}}>Pei-Ling Wu</h2>
            <img
              className="myPic"
              src="https://avatars1.githubusercontent.com/u/60132580?s=400&u=d331238f8c3274cfd958f3c3ef4be66fc5a98953&v=4"
              alt="avatar"
              style={{ height: '250px' }}
            />
            <p style={{ width: '75%', margin: 'auto', paddingTop: '4em' }}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita
              numquam, neque tempore iusto asperiores veritatis nam rem fugit
              fuga aliquid vero quo dolorem corporis porro animi alias iste
              maxime odit?
            </p>
          </Cell>

          <Cell col={10}>
            <h2>Contact Me</h2>
            <hr />
            <div className="contact-list">
              
            <List style={{margin:'0px 360px'}}>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: '30px', fontFamily: 'Anton', color: 'grey'}}
                  >
                    <i className="fa fa-phone-square" aria-hidden="true" style={{ fontSize: '80px'}}/>
                    +49-152-2345678
                  </ListItemContent>
                </ListItem>


                <ListItem >
                  <ListItemContent
                    style={{ fontSize: '30px', fontFamily: 'Anton', color: 'grey' }}
                  >
                    <i className="fa fa-envelope" aria-hidden="true" color="grey" />
                    contact@me.com
                  </ListItemContent>
                </ListItem>

              </List>
            </div>
          </Cell>
        </Grid> 
      </div>
    );
  }
}

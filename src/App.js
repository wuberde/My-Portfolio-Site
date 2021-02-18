import React from 'react';
import Footer from '../src/components/Footer'
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/Main';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="demo-big-content">
      <Layout >
        <Header
          className="header-color"
          title={
            <Link
              className="link1"
              style={{
                textDecoration: 'none',
                color: 'white',
                fontSize: '30px',
              }}
              to="/"
            >
              MyPortfolio
            </Link>
          }
         
        >
          <Navigation>
            <Link to="/aboutme" style={{ fontSize: '30px' }}>
              About Me
            </Link>
            <Link to="/resume" style={{ fontSize: '30px' }}>
              Resume
            </Link>
            <Link to="/projects" style={{ fontSize: '30px' }}>
              Projects
            </Link>
            <Link to="/contact" style={{ fontSize: '30px' }}>
              Contact
            </Link>
          </Navigation>
        </Header>
        <Drawer
          title={
            <Link style={{ textDecoration: 'none', color: 'white' }} to="/">
              MyPortfolio
            </Link>
          }
        >
          <Navigation>
            <Link to="/resume">Resume</Link>
            <Link to="/aboutme">About Me</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
          </Navigation>
        </Drawer>
        <Content>
          <div className="page-content" />
          <Main />
        </Content>
        <Footer/>
      </Layout>
      
    </div>
  );
}

export default App;

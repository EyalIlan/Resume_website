import React from 'react';
import './App.css';
import SkillBox from './components/UI/skillBox/SkillBox';
import Footer from './components/UI/Footer/Footer';
import Navbar from './components/UI/Navbar/Navbar';
import ProjectBox from './components/UI/projectBox/projectBox';
function App() {
  return (
    <>
      <div className='screen app' >
        <Navbar></Navbar>
        <div id='main_content'>
          <h1>Eyal Ilan</h1>
          <h2>Full Stack Developer</h2>
        </div>  
    </div>
    <div className='small_screen screen_text'>
        <div className='container'>
            <h1>About me</h1>
            <p>
              I'm a Fullstack developer with love to face diffrent challenges learn new things in the prefession and develop new projects
              In the past I did a B.S.c in computer science  it took  me 4 years but I did it in the end :) I also did a fun and intensive 
              bootcamp for fullstack developers at appleseed acedemy for 720 hours or 6 month of Sunday to Thursday 8 AM to 6 PM and a spaciel
              task for the weakend for fun also i Volenterr at anyway a project open source in the last 2 years. I have great experience at React 
              NodeJs an mongoose\mongoDb and of course HTML CSS and javaScript\TypeScript from my days of the Degree I learn java,c++ and python.
              looking for a place to make me a better developer and a place i cold family
            </p>
        </div>
    </div>
    <div className='small_screen'>
        <div className='container'>
            <h1>Skills</h1>
            <div className='grid'>
                <SkillBox title='React' imageUrl='react.png' />
                <SkillBox title='NodeJs' imageUrl='nodejs.png' />
                <SkillBox title='Redux' imageUrl='redux.png' />
                <SkillBox title='Express' imageUrl='express.png' />
                <SkillBox title='Mongoose' imageUrl='mongoose.png' />
                <SkillBox title='MongoDB' imageUrl='mongodb.png' />
                <SkillBox title='SQL' imageUrl='mysql.png' />
                <SkillBox title='TypeScript' imageUrl='typescript.png' />
                <SkillBox title='JavaScript' imageUrl='javascript.png' />
                <SkillBox title='CSS' imageUrl='css.png' />
                <SkillBox title='HTML' imageUrl='html.png' />
                <SkillBox title='Java' imageUrl='java.png' />
                <SkillBox title='Python' imageUrl='python.png' />
            </div>
        </div>
    </div>
    <div className='small_screen'>
        <h1>Projects</h1>
        <div className='grid'>
          <ProjectBox></ProjectBox>
        </div>
    </div>
    <div>

    </div>
    <Footer></Footer>
    </>
  );
}

export default App;

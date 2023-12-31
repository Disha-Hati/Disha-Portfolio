import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Project from './components/Project';
import Skill from './components/Skill';



function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element ={<Home/>}/>
        <Route path="about" index element ={<About/>}/>
        <Route path="project" index element ={<Project/>}/>
        <Route path="skill" index element={<Skill/>}/>
       
        

      </Route>
    </Routes>
    </>
  );
}

export default App;

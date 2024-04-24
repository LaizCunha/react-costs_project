import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import Message from "../layout/Message";
import Container from '../layout/Container';
import LinkButton from '../layout/LinkButton';
import ProjectCard from "../project/ProjectCard";

import './Projects.css';


function Projects() {

  const [projects, setProjects] = useState([]);

  const location = useLocation();
  let message = '';
  if(location.state && location.state.message) {
    message = location.state.message;
  }
  
  useEffect(() => {
    fetch("http://localhost:5000/projects", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(resp => resp.json())
      .then((data) => {
        console.log(data)
        setProjects(data)})
      .catch((err) => console.log(err))
  },[]);

  return (
    <div className="project_container">
      <div className="title_container">
        <h1 >Meus Projetos</h1>
        <LinkButton to="/newproject" text="Criar Projeto" />
      </div>
      <div>  
        {message && <Message msg={message} type='success'/>}
        <Container customClass="start">
          {projects.length > 0 &&
            projects.map((project) => (
              <ProjectCard 
                name={project.name}
                id={project.id}
                budget={project.budget}
                category={project.category.name}
                key={project.id}
              />
          ))}
        </Container>
      </div>
    </div>
  )
}

export default Projects;
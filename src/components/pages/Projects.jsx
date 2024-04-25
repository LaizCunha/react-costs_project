import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import Message from "../layout/Message";
import Container from '../layout/Container';
import LinkButton from '../layout/LinkButton';
import ProjectCard from "../project/ProjectCard";
import Loading from "../layout/Loading";

import './Projects.css';


function Projects() {

  const [projects, setProjects] = useState([]);
  const [removeLoading, setRemoveLoading] = useState(false);
  const [projectMessage, setProjectMessage] = useState('');

  const location = useLocation();
  let message = '';
  if(location.state && location.state.message) {
    message = location.state.message;
  }
  
  useEffect(() => {

    setTimeout(() => {

      fetch("http://localhost:5000/projects", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      })
      .then(resp => resp.json())
      .then((data) => {
        console.log(data)
        setProjects(data)
        setRemoveLoading(true)
      })
      .catch((err) => console.log(err))
    }, 500)
  },[]);

  function removeProject(id) {
    fetch(`http://localhost:5000/projects/${id}`,{
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then((resp) => resp.json())
    .then((data) => {
      setProjects(projects.filter((project) => project.id !== id))
      setProjectMessage('Projeto removido com sucesso!')
    })
    .catch((err) => console.log(err))
  }

  return (
    <div className="project_container">
      <div className="title_container">
        <h1 >Meus Projetos</h1>
        <LinkButton to="/newproject" text="Criar Projeto" />
      </div>
      <div>  
        {message && <Message msg={message} type='success'/>}
        {projectMessage && <Message msg={projectMessage} type='success'/>}
        <Container customClass="start">
          {projects.length > 0 &&
            projects.map((project) => (
              <ProjectCard 
                name={project.name}
                id={project.id}
                budget={project.budget}
                category={project.category.name}
                key={project.id}
                handleRemove={removeProject}
              />
          ))}
          {!removeLoading && <Loading/>}
          {removeLoading && projects.length === 0 && (
            <p>Não há projetos cadastrados!</p>
          )}
        </Container>
      </div>
    </div>
  )
}

export default Projects;
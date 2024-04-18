import { useNavigate } from 'react-router-dom';
import ProjectForm from '../project/ProjectForm';
import './NewProject.css';

function NewProject() {

  const navigate = useNavigate();

  function createPost(project) {

    project.cost = 0;
    project.services = [];
  
    fetch("http://localhost:5000/projects")
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data)
      })
      .catch((err) => console.log(err));
    
  }

  return (
    <div className="newproject_container">
      <h1>Criar Projeto</h1>
      <p>Crie seu projeto para depois adicionar os serviços.</p>
      <ProjectForm handleSubmit={createPost} btnText="Criar Projeto" />
    </div>
  )
}

export default NewProject;

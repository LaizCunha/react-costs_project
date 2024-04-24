import { useLocation } from "react-router-dom";
import Message from "../layout/Message";
import Container from '../layout/Container';
import LinkButton from '../layout/LinkButton';
import './Projects.css';

function Projects() {

  const location = useLocation();
  let message = '';
  if(location.state && location.state.message) {
    message = location.state.message;
  }

  return (
    <>
      <div className="project_container">
        <div className="title_container">
          <h1 >Meus Projetos</h1>
          <LinkButton to="/newproject" text="Criar Projeto" />
        </div>
        <div>  
          {message && <Message msg={message} type='success'/>}
          <Container customClass="start">
            <p>Projetos</p>
          </Container>
        </div>
      </div>

    </>
  )
}

export default Projects;
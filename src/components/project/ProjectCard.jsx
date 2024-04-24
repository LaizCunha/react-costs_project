import { Link } from 'react-router-dom';
import { BsPencil, BsFillTrashFill } from 'react-icons/bs';

import './ProjectCard.css';

function ProjectCard({ id, name, budget, category, handleRemove }) {
  return (
    <div className='project_card'>
      <h4>{name}</h4>
      <p>
        <span>Orçamento:</span> R${budget}
      </p>
      <p className='category_text'>
        <span className={`category_text ${category.toLowerCase()}`}></span> {category}
      </p>
      <div className='project_card_actions'>
        <Link to="/">
          <BsPencil /> Editar
        </Link>
        <button>
          <BsFillTrashFill /> Excluir
        </button>
      </div>
    </div>
  )
}

export default ProjectCard;
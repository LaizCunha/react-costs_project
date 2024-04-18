import { useEffect, useState } from "react";

import Input from "../form/Input";
import Select from "../form/Select";
import SubmitButton from "../form/SubmitButton";
import "./ProjectForm.css"

function ProjectForm({ handleSubmit, btnText, projectData}) {

  const [categories, setCategories] = useState([]);
  const [project, setProject] = useState( projectData || {});

    useEffect(() => {

      fetch("http://localhost:5000/categories")
      .then((resp) => resp.json())
      .then((data) => {
        setCategories(data)
      })
      .catch((err) => console.log(err));

    }, []);

    const submit = (e) => {
      e.preventDefault();
      handleSubmit(project)     
    }

    function handleChangeCategory(e) {
      setProject({...project, 
        category: {
          id: e.target.value, 
          name: e.target.options[e.target.selectedIndex].text
        }
      });   
    }

    function handleChange(e) {
      setProject({...project, [e.target.name]: e.target.value});    
    }

  return (
    <form onSubmit={submit} className="form">
      <Input 
        type="text" 
        text="Nome do Projeto" 
        name="name" 
        placeholder="Insira o nome do projeto"
        handleOnChange={handleChange}
      />
      <Input 
        type="number" 
        text="Orçamento do projeto"
        name="budget"
        placeholder="Insira o orçamento total" 
        handleOnChange={handleChange}
      />
      <Select 
        name="category_id" 
        text="Selecione a categoria"
        otpions={categories}
        handleOnChange={handleChangeCategory}
        value={project.category ? project.category.id : ''}
      />
      <SubmitButton 
        text={btnText}
      />
    </form>
  )
}

export default ProjectForm;
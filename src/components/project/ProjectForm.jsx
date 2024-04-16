import { useEffect, useState } from "react";

import Input from "../form/Input";
import Select from "../form/Select";
import SubmitButton from "../form/SubmitButton";
import "./ProjectForm.css"

function ProjectForm({btnText}) {

  const [categories, setCategories] = useState([]);

    useEffect(() => {

      fetch("http://localhost:5000/categories")
      .then((resp) => resp.json())
      .then((data) => {
        setCategories(data)
      })
      .catch((err) => console.log(err));

    }, [])

  return (
    <form className="form">
      <Input 
        type="text" 
        text="Nome do Projeto" 
        name="name" 
        placeholder="Insira o nome do projeto"
      />
      <Input 
        type="number" 
        text="Orçamento do projeto"
        name="budget"
        placeholder="Insira o orçamento total" 
      />
      <Select 
        name="category_id" 
        text="Selecione a categoria"
        otpions={categories}
      />
      <SubmitButton 
        text={btnText}
      />
    </form>
  )
}

export default ProjectForm;
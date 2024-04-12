import "./LinkButton.css"
import { Link } from "react-router-dom";

function LinKButton({to, text}) {
  return (
    <Link className='btn' to={to}>
      {text}
    </Link>
  )
    
}

export default LinKButton;
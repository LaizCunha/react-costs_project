import './Home.css';
import savings from '../../img/savings.svg';
import LinKButton from '../layout/LinkButton';

function Home() {
  return (
    <section className='home'>
      <h1>Bem-vindo ao <span>Costs</span></h1>
      <p>Comece a genrenciar os seus projetos agora mesmo!</p>
      <LinKButton to="/newproject" text="Criar Projeto" />
      <img src={savings} alt='costs'></img>
    </section>
  )
    
}

export default Home;
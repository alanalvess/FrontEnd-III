import Greeting from './components/greeting';
import './App.css';
// import HomemFeliz from './components/img/homem-feliz-dinheiro.jpg'


function App() {
  const user = {
    firstName: 'Turma',
    lastName: 'XX'
  }
  
  return (
    <>
    <div className="App">
      <img src="https://raw.githubusercontent.com/rquadrosDH/imagens/main/homem-feliz-dinheiro.jpg" alt="Homem Feliz"/>
      <Greeting user={user}/>
      {/* <img src={HomemFeliz} alt="Homem Feliz"/> */}
    </div>

    </>
  );
}

export default App;

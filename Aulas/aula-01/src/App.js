import Greeting from './components/greeting';
import './App.css';
import HomemFeliz from './components/img/homem-feliz-dinheiro.jpg'


function App() {
  const user = {
    firstName: 'Turma',
    lastName: '04'
  }
  
  return (
    <>
    <div className="App">
      <Greeting user={user}/>
      <img src={HomemFeliz} alt="Homem Feliz"/>
    </div>

    </>
  );
}

export default App;

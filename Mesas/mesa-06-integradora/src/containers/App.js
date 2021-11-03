import ClassComponent from '../components/ClassComponent';
import FunctionComponent from '../components/FunctionComponent';
import '../styles/App.css';

function App() {
  const listaConvidados = [
    {
      nome:'Nicolas', estaNaLista:true, tarefa:'batata-frita'
    },
    {
      nome:'Pedro', estaNaLista:false, tarefa:'pizza'
    },
    {
      nome:'Carolina', estaNaLista:true, tarefa:'bebidas'
    },
  ]
  return (

    <div className="App">
     <h3>Convidados:</h3>
     {
       listaConvidados.map((convidado, index)=>(
          <ClassComponent key={index} nome={convidado.nome} estaNaLista={convidado.estaNaLista} />
        ))
     }
     
     <h3>Tarefa: </h3>
     {
       listaConvidados.map((convidado, index)=>(
        <FunctionComponent key={index} nome={convidado.nome} tarefa={convidado.tarefa} />
       ))
     }

   </div>
  );
}

export default App;

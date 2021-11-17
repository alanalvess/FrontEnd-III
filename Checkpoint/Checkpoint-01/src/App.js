import { Component } from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Outros from './components/Projetos';
import Footer from './components/Footer';

import './App.scss';

export default class App extends Component {

  nome = 'Alan Alves';
  listaProjetos = [
    {
      id: 1,
      nome: "Retrô Mania" 
    },
    {
      id: 2,
      nome: "To Do List"
    },
    {
      id: 3,
      nome: "Formulário"
    }
  ]

  render() {
    return (
      <>
        <Header curriculo={this.nome} />
        <main>
          <Banner />
          <Outros />
        </main>
        <Footer empresa={this.nome} />
      </>
    );
  }
}

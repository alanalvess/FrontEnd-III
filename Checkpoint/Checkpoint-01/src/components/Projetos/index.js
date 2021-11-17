/* eslint-disable no-unused-vars */
import './style.scss';

const Projetos = () => {

  const listaProjetos = [
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

  return (
    <section id="projetos">
      <h2>Projetos Realizados</h2>
          <div id="lista">
            {
              listaProjetos.map((projeto) => {
                return (
                  <h3>
                    {projeto.nome}
                  </h3>
                )
              })
            }
          </div>
      <div className="grid">
        <div className="grid-item">
          <div className="image-container">
            <img src="https://github.com/alanalvess/FrontEndI-ChekpointFinal/blob/main/assets/img/logo/retromania_logo_banner1.png?raw=true" alt="Caça Niquel" />
          </div>
        </div>
        <div className="grid-item">
          <div className="image-container">
            <img src="https://www.covenantmfo.com/wp-content/uploads/2021/08/checklist-1295319_1280.png" alt="Roleta" />
          </div>
        </div>
        <div className="grid-item">
          <div className="image-container">
            <img src="https://github.com/alanalvess/formulario/blob/master/img/Imagem1.png?raw=true" alt="Poker" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projetos;
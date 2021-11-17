import './style.scss';

const Banner = ({ children }) => {

  return (
    <section id="banner">
      <div className="banner-text">
        {children}
        <p>Recentemente resolvi me dedicar a aprender programação e desenvolvimento web. Estou aprofundando meus conhecimentos em Java, HTML, CSS, JavaScript, Banco de Dados e muito mais.</p>
        <p>Minha experiência profissional mais recente foi na PwC. Atuei em projetos de auditoria contábil em grandes clientes nacionais e internacionais.</p>
        <p>No Insper trabalhei por quase 4 anos e era responsável pelas atividades da Central de Estágio.</p>
        <p>Concluí a graduação em Administração pela FECAP em dezembro de 2018.</p>
      </div>

    </section>
  )
}

export default Banner;
/* eslint-disable jsx-a11y/anchor-is-valid */
import './style.scss'

const Header = ({ curriculo }) => {

  return (
    <header id="header" class="sticky-top">
      <nav class={`navbar navbar-expand-sm`} aria-label="Third navbar example">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">{curriculo}</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse justify-content-end" id="navbarsExample03">
            <ul class="navbar-nav mb-2 mb-sm-0">
              <li class="nav-item">
                <a href="#" class="nav-link" aria-current="page">Home</a>
              </li>
              <li class="nav-item">
                <a href="#projetos" class="nav-link">Retrô Mania</a>
              </li>
              <li class="nav-item">
                <a href="#projetos" class="nav-link">To Do List</a>
              </li>
              <li class="nav-item">
                <a href="#projetos" class="nav-link">Formulário</a>
              </li>
              <li class="nav-item">
                <a href="#footer" class="nav-link">Contato</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header;


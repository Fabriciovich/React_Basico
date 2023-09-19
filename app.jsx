function MyButton(){
    return (
        <button
            className="btn btn-primary"
        >
            Click Me</button>
        );
}

const Navbar = () => {
    return (
        
<nav class="navbar fixed-top bg-white">
  <div class="container-fluid">
    <a class="navbar-brand text-dark" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li>
                <hr class="dropdown-divider" />
              </li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
        <form class="d-flex mt-3" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </div>
</nav>
    );
}


const Main = () => {

    const initialState = 0;
    const [ counter, setCount ] = React.useState(0);
    const incrementar = () => setCount(counter + 1);
    const decrementar = () => setCount(counter - 1);
    return (
        <div className="main-content">
        <h1>Counter App</h1>
        <hr />

        <p>{ counter }</p>
        <button 
        className="btn btn-success"
        onClick={incrementar}
        >+1</button>
        <button 
        className="btn btn-danger mx-2"
        onClick={decrementar}
        >-1</button>
        <button 
        className="btn btn-warning mx-2"
        onClick={ () => setCount(initialState) }
        >Reset</button>
        </div>
    )
}

const Footer = () => {
    return (
        <footer className="footer text-center text-white">
            <p>Costadoni Fabricio &copy; 2023</p>
        </footer>
    )
}

const App = () => {
    return (
        <React.Fragment>
            {/* Navegación */}
            <Navbar />
            {/* Contenido Principal */}
            <Main />
            {/* Footer */}
            <Footer />
        </React.Fragment>
    );
}


// Se renderiza la aplicación
const htmlElement = document.querySelector('#root')
ReactDOM.render(
    <App />,
    htmlElement
)
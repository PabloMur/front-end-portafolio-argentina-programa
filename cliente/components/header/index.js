function header(el) {
  let component = document.createElement("header");
  component.innerHTML = `
  <div class="container">
    <div class="logo">
      <img src="./img/APLogo-20-20.png"/>
    </div>
    <div class="botonera">
      <ul class="redes">
        <li class="red">
          <a href="https://github.com/PabloMur" target="_blank">
            <img class="logo-red" src="./img/github.png"/>
          </a>
        </li>

        <li class="red">
          <a href="https://www.linkedin.com/in/pablo-nicol%C3%A1s-murillo-57034b189/" target="_blank">
            <img class="logo-red" src="./img/linkedin.png"/>
          </a>
        </li>

        <li class="red">
          <a href="https://github.com/PabloMur" target="_blank">
            <img class="logo-red" src="./img/instagram.png"/>
          </a>
        </li>

        <li class="red">
          <button class="login-button">Login</button>
        </li>
      </ul>
    </div>
  </div>`;
  el.appendChild(component);
}

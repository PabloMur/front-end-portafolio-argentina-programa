function header(el) {
  let component = document.createElement("header");
  component.innerHTML = `
  <div class="container">
    <div class="logo">
      <img src="https://argentinaprograma.inti.gob.ar/pluginfile.php/1/theme_moove/logo/1661403264/APLogo-20-20.png"/>
    </div>
    <div class="botonera">
      <ul class="redes">
        <li class="red">
          <a></a>
        </li>
        <li class="red">
          <a></a>
        </li>
        <li class="red">
          <a></a>
        </li>
      </ul>
    </div>
  </div>`;
  el.appendChild(component);
}

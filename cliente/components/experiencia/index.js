function experiencia(el) {
  let component = document.createElement("div");
  component.innerHTML = `
      <div class="profile-image">
        <img/>
      </div>
      <div class="container-experiencia">
        <p>Experiencia</p>
      </div>`;
  el.appendChild(component);
}

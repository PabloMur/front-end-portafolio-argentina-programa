function acerca(el) {
  let component = document.createElement("div");
  component.innerHTML = `
      <div class="profile-image">
        <img/>
      </div>
      <div class="container-acerca">
        <p>Acerca</p>
      </div>`;
  el.appendChild(component);
}

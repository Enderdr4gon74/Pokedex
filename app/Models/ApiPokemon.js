export class ApiPokemon {
  constructor(data) {
    this.name = data.name
    this.nickname = data.nickname
    this.img = data.img
    this.weight = data.weight
    this.height = data.height
    this.types = data.types
    this.user = data.user
  }

  get cardTemplate() {
    let types = ''
    for (let i = 0; i < this.types.length; i++) {
      if (this.types.length > 1) {
        if (i < this.types.length-1) {
          types += (this.types[i].type.name + ", ")
        } else {
          types += (this.types[i].type.name + " ")
        }
      } else {
        types += (this.types[i].type.name + " ")
      }
    }
    // this.types.forEach(t => types += (t.type.name + " "))
    return /*html*/`
    <div class="row">
      <div class="col-12 bg-red d-flex justify-content-center">
        <div class="width-75 bg-light-red p-2">
          <div class="bg-light d-flex justify-content-center align-items-center">
            <h2>${this.name}</h2>
          </div>
        </div>
      </div>
      <div class="col-12 d-flex justify-content-center">
        <div class="width-50">
          <img src="${this.img}" alt="${this.name}" class="img-fluid width-100"> <!-- image's link is sprite: front default -->
        </div>
      </div>
      <div class="col-12 bg-red d-flex justify-content-center">
        <div class="bg-light-red width-75 p-2 d-flex justify-content-center">
          <div class="row bg-light p-3 width-100">
            <div class="col-6 mb-3">
              <h2>Height: ${this.height} Decimeters</h2> 
            </div>
            <div class="col-6 mb-3">
              <h2>Weight: ${this.weight} Hectograms</h2>
            </div>
            <div class="col-6">
              <h2>Types: ${types}</h2>
            </div>
            <div class="col-6 d-flex justify-content-end align-items-end">
              <button class="btn btn-outline-danger" onclick="app.sandboxPokemonController.addPokemon()"><i class="mdi mdi-pokeball"></i> Catch</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    `
  }
}

export class SandboxPokemon {
  /**
   * @param {{name: string, nickName: string, img: string, weight: number, height: number, types: Array, id?: string}} data 
   */
  constructor (data) {
    this.name = data.name
    this.nickName = data.nickName
    this.img = data.img
    this.weight = data.weight
    this.height = data.height
    this.types = data.types
    this.id = data.id
  }

  get PokedexTemplate() {
    let template = /*html*/`
    <div class="row">
      <div class="col-12">
        <div class="row">
          <div class="col-3">
            <img src="${this.img}" alt="${this.name}" class="img-fluid"> <!-- image's link is sprite: front default -->
          </div>
          <div class="col-9 d-flex gap-2 align-items-center justify-content-between">
            <div>
              <h4 class="text-warning">${this.name}</h4>
            </div>
            <div>
    `
    this.types.forEach(t => template += /*html*/`
              <p class="text-info">${t.type.name}</p>
    `)
    template += /*html*/`
            </div>
            <div>
              <p class="text-success">${this.height} Decimeters</p>
              <p class="text-success">${this.weight} Hectograms</p>
            </div>
            <div>
              <button class="btn btn-outline-danger" onclick="app.sandboxPokemonController.deletePokemon('${this.id}')"><i class="mdi mdi-delete-forever"></i></button>
            </div>
          </div>
        </div>
      </div>
    </div>
    `
    return template
  }
}
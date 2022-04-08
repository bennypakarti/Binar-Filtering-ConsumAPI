class Car {
    static list = [];

    static init(cars) {
        this.list = cars.map((i) => new this(i));
    }

    constructor({
        id,
        plate,
        manufacture,
        model,
        image,
        rentPerDay,
        capacity,
        description,
        transmission,
        available,
        type,
        year,
        options,
        specs,
        availableAt,
    }) {
        this.id = id;
        this.plate = plate;
        this.manufacture = manufacture;
        this.model = model;
        this.image = image;
        this.rentPerDay = rentPerDay;
        this.capacity = capacity;
        this.description = description;
        this.transmission = transmission;
        this.available = available;
        this.type = type;
        this.year = year;
        this.options = options;
        this.specs = specs;
        this.availableAt = availableAt;
    }

    render() {
        return `
      <div class="card card-car m-2 m-auto" style="width: 18rem;">
        <img class="card-img-top" src="${this.image}" alt="${this.manufacture}" style="widht: 200px; height:200px;">
        <div class="card-body>
          <p class="">${this.manufacture}/${this.model}</p>
          <h5 class="m-2"><b>Rp.${this.rentPerDay} / hari</b></h5>
          <p class="card-text m-2" style="text-align:justify; width:17rem; height:6rem;">${this.description}</p>
          <p class=" m-2"><i class="bi bi-person"></i> ${this.capacity}</p>
          <p class="  m-2"><i class="bi bi-gear"></i> ${this.transmission}</p>
          <p class=" m-2"><i class="bi bi-calendar4"></i> ${this.year}</p>
          <button class="btn btn-car btn-success m-2" type="button">Pilih Mobil</button>
      </div>
    `;
    }
}
class Animal {
    constructor (name, type, weight, height, location){
    this.name = name;
    this.type = type;
    this.weight = weight;
    this.height = height;
    this.location = location;
}

describe () {
console.log('Animal Description');
console.log('------------------');
console.log('\tName ' + this.name);
console.log('\tType: ' + this.type);
console.log('\tWeight: ' + this.weight);
console.log('\tHeight: '+ this.height);
console.log('\tLocation: ' + this.location);
    }
}
let elephant = new Animal('Dumbo', 'elephant', 1800, 108, 'Disneyland');
elephant.describe;
console.log(elephant);
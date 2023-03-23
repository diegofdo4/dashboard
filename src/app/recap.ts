const username ='diegofdo';
const suma = (a: number, b: number) => {
  return a+b;
}

suma(1,3);

class person {
  constructor (public age: number, public lastName: string){
  }
}

const nico = new person(15,'arboloko');
nico.age;

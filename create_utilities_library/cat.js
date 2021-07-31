class Cat{
    makeSound(){
        return `${this.constructor.name}: Meooow`;
    }
}

module.exports = Cat;
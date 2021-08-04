class CustomArray<T>{
    private arr: T[] =[];

    getItems(){
        return this.arr;
    }

    addItem(item: T){
        this.arr.push(item);
    }

    removeItem(item:T){
        let index = this.arr.indexOf(item);
        if(index > 1){
            this.arr.splice(index,1);
        }
    }

}
let numObj = new CustomArray<number>();
numObj.addItem(10);
numObj.addItem(20);

let strObj = new CustomArray<string>();
strObj.addItem("Hello, World");


console.log(numObj.getItems());
console.log(strObj.getItems());
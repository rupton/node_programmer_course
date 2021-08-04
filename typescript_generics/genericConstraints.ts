interface funcArgs {
    length: number;
}

const getLength = <T extends funcArgs>(args:T):number =>{
    return args.length;
}

let result4 = getLength({length: 5git, name: "hello"});
let result5 = getLength("Hello");
console.log(result4);
console.log(result5);
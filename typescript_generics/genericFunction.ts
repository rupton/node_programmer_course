function fun<T>(args:T):T{
    return args;
}

const moreFun = <T>(args:T):T =>{
    return args;
}

console.log(moreFun<number>(100));
console.log(moreFun<string>("Fun, fun, fun"));

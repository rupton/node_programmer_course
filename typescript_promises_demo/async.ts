//TODO: figure out how to do this with no implicit any

const step11 = () :Promise<number> =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            try{
                const nextStep = 1;
                 console.log(`Completed step ${nextStep}`);
                resolve(nextStep);
            }catch (error){
                reject();
            }
        },1000);

    });
};

const step22 = (step: number): Promise<number> =>{
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            try{
                const nextStep = step + 1;
                console.log(`Completed step ${nextStep}`);
                resolve(nextStep);
            }catch (error){
                reject();
            }
        }, 1000);
    });
};

const step33 = (step: number): Promise<number> =>{
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            try{
                const nextStep = step  + 1;
                console.log(`Completed step ${nextStep}`);
                resolve(nextStep);
            }catch (error){
                reject();
            }
        },100 );
    });
};

const build = async () =>{
    try{
        const step1 = await step11();
        const step2 = await step22(step1);
        await step33(step2);
    }catch (error){
        console.log("There was a problem building the steps");
    }
};
//console.log("building");
build();

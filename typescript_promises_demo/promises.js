"use strict";
//TODO: figure out how to do this with no implicit any
const step1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                const nextStep = 1;
                console.log(`Completed step ${nextStep}`);
                resolve(nextStep);
            }
            catch (error) {
                reject();
            }
        }, 1000);
    });
};
const step2 = (step) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                const nextStep = step + 1;
                console.log(`Completed step ${nextStep}`);
                resolve(nextStep);
            }
            catch (error) {
                reject();
            }
        }, 1000);
    });
};
const step3 = (step) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                const nextStep = step + 1;
                console.log(`Completed step ${nextStep}`);
                resolve(nextStep);
            }
            catch (error) {
                reject();
            }
        }, 100);
    });
};
step1().then((result) => {
    console.log(result);
    return (step2(result));
})
    .then((result) => {
    console.log(result);
    return (step3(result));
})
    .then((result) => {
    console.log(result);
})
    .catch(() => {
    console.log("There was an error building the steps");
});

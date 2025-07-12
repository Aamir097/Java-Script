// Closure Concepts

let num = 10;

const mainFunction = () => {
    let num = 15;

    const innerFunction = () => {
        let num = 20;

        const subFunction = () => {
            let num = 30;
            console.log(`sub ${num}`);
        }
        subFunction();
        console.log(`inner ${num}`);
    }
    innerFunction();
    console.log(`main ${num}`);
}

mainFunction();
console.log(`outer ${num}`);
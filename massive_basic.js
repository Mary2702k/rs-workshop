//Array = [elem_1, elem_2]

function arrayCreation(){
    let arrayWithInitSize = new Array(4);
    let arrayWithOneValue = new Array('5');
    let arrayWithPreset = new Array(5,6);
    let arrayWithInitVale = Array.of(4);
    let arrayWithInitValues = Array.of(4,5,6);
    let simpleWayArray = ['a','b','c'];

    console.log('Array creation:');
    console.log('arrayWithInitSize:', arrayWithInitSize);
    console.log('arrayWithOneValue:', arrayWithOneValue);
    console.log('arrayWithPreset:', arrayWithPreset);
    console.log('arrayWithInitVale:', arrayWithInitVale);
    console.log('arrayWithInitValues:', arrayWithInitValues);
    console.log('simpleWayArray:', simpleWayArray);
}

function arrayBypass(){
    function logEachElement(array) {
        for (let i = 0; i < array.length; i++) {
            console.log(`[element with index ${i}] is ${array[i]}`);
        }
    }

    function findSum(array) {
        logEachElement(array);

        let sum = 0;

        for (let i = 0; i < array.length; i++) {
            sum += array[i];
        }

        console.log(`sum = ${sum}`);
    }

    function findMin(array) {
        let min = array.length ? array[0] : 0;

        for (let i = 0; i < array.length; i++) {
            if (array[i] < min) {
                min = array[i];
            }
        }

        console.log(`min is ${min}`);
    }

    function findAvg(array) {
        logEachElement(array);

        let sum = 0;
        for(let i = 0; i < array.length; i++) {
            sum += array[i];
        }

        let avg = array.length ? sum/array.length : 0;

        console.log(`avg = ${avg}`);
    }

    console.log('Array bypass:')

    let array = [21, 22, 23, 24, 25, 26, 27];
    // logEachElement(array);

    array = [5, 1, 10, 23];
    findSum(array);
    findMin(array);
    findAvg(array);
}

arrayBypass();
        

// arrayCreation();

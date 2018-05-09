const zebra = {
    legs: 4,
    colors: [
        'black',
        'white',
    ],
    healthy: false,
    height: 5,
};
const snake = {
    legs: 0,
    colors: [
        'green',
        'tan',
        'black',
    ],
    healthy: true,
    height: .2,
};
const tiger = {
    legs: 4,
    colors: [
        'orange',
        'black',
        'white',
    ],
    healthy: true,
    height: 5.5,
};
const kangaroo = {
    legs: 2,
    colors: [
        'brown',
    ],
    healthy: true,
    height: 7,
};
const giraffe = {
    legs: 4,
    colors: [
        'brown',
        'yellow',
        'white',
    ],
    healthy: false,
    height: NaN,
};

// factory functions
function createAnimal(legs, colors, healthy, height) {
    return {
        legs: legs,
        colors,
        healthy,
        height,
        say() {
            
        }
    };
}

const zebra2 = createAnimal(4, [ 'black', 'white' ], false, 5);//?
const snake2 = createAnimal(0, [ 'green', 'yellow' ], true, .2);



// constructor functions
const dog = new Animal(4, [ 'black', 'brown', 'white' ], true, 3, 'bark!');

// dog.speak();//?
dog;//?



function Animal(legs, colors, healthy, height, phrase) {
    this.legs = legs;
    this.colors = colors;
    this.healthy = healthy;
    this.height = height;
    
    this.phrase = phrase;
    // this.speak = function() {
    //     return this.phrase;
    // }
}

Animal.prototype = {
    living: true,
    speak() {
        return this.phrase;
    }
};

const tiger2 = new Animal(4, [ 'orange', 'black', 'white' ], true, 5.5, 'roar');
const flamingo = new Animal(2, [ 'pink' ], false, 3, 'squawk');

// global.legs//?

// legs//?

tiger2.living;//?
flamingo.living;//?

tiger2.speak();//?
flamingo.speak();//?

flamingo.living = false;

flamingo.__proto__//?

flamingo.__proto__.living = 'mostly-dead';

flamingo//?

tiger2.living;//?



// scope
function a() {
    var blah;
    var x;
    
    function b() {
        var x;
        
        x//?
        
        blah
    }
    
    // x // Error!
}



// prototype

tiger2.living//?

flamingo.living//?

const speak = tiger2.speak;//?

speak();//?


const norman = {
    name: 'Norman',
    phrase: 'Bingo!',
};

norman.speak = tiger2.speak;
// norman.speak = tiger2.speak.bind(tiger2);
// norman.phrase = flamingo.speak.call(flamingo, /* params... */);
// norman.phrase = flamingo.speak.apply(tiger2, /* [params...] */);

norman.speak();//?



// classes

// const cat = new Animal2()

class Animal2 {
    constructor(legs, colors, healthy, height, phrase) {
        this.legs = legs;
        this.colors = colors;
        this.healthy = healthy;
        this.height = height;
        this.phrase = phrase;
    }
    
    speak() {
        return this.phrase;
    }
}

const kangaroo2 = new Animal2(2, [ 'brown' ], false, 7, 'boing');

kangaroo2.speak();//?


// Object.assign

const bob = {
    name: 'Bob',
    age: 45,
};

const cat2 = {
    phrase: 'meow',
    age: 6,
};

function assign(src, ...args) {
    return args.reduce((result, currentObj) => {
        for (var key in currentObj) {
            result[key] = currentObj[key];
        }
        
        return result;
    }, src);
}

// Object.assign(bob, cat2);//?
const obj = Object.assign({}, bob, cat2);//?
obj//?


bob//?
cat2//?
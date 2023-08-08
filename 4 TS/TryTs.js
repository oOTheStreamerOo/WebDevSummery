



// printf print at end/start of document depend on js-file tag location
function printf(x) {
    console.log(x)
}

function printfDoc(x) {
    document.write(x)
};

function printfDanger(x) {
    document.getElementById(`danger`).innerHTML = x;
};
function printfDangerRepCol(title, arr, arrLeng) {
    let Printed = `<h1 class="display-3"> ${title} </h1>`
    for (let i = 0; i < arrLeng; i++) { Printed += `${arr[i]} <br>` }
    (document.getElementById(`danger`).innerHTML = Printed)
};
function printfDangerRepRow(title, arr, arrLeng) {
    let Printed = `<h1 class="display-3"> ${title} </h1>`
    for (let i = 0; i < arrLeng; i++) { Printed += `${arr[i]} ` }
    (document.getElementById(`danger`).innerHTML = Printed)
};



function printfSecondary(x) {
    (document.getElementById(`secondary`).innerHTML = x)
};
function printfSecondaryRepCol(title, arr, arrLeng) {
    let Printed = `<h1 class="display-3"> ${title} </h1>`
    for (let i = 0; i < arrLeng; i++) { Printed += `${arr[i]} <br>` }
    (document.getElementById(`secondary`).innerHTML = Printed)
};
function printfSecondaryRepRow(title, arr, arrLeng) {
    let Printed = `<h1 class="display-3"> ${title} </h1>`
    for (let i = 0; i < arrLeng; i++) { Printed += `${arr[i]} ` }
    (document.getElementById(`secondary`).innerHTML = Printed)
};


function printfSuccess(x) {
    (document.getElementById(`success`).innerHTML = x)
};
function printfSuccessRepCol(title, arr, arrLeng) {
    let Printed = `<h1 class="display-3"> ${title} </h1>`
    for (let i = 0; i < arrLeng; i++) { Printed += `${arr[i]} <br>` }
    (document.getElementById(`success`).innerHTML = Printed)
};
function printfSuccessRepRow(title, arr, arrLeng) {
    let Printed = `<h1 class="display-3"> ${title} </h1>`
    for (let i = 0; i < arrLeng; i++) { Printed += `${arr[i]} ` }
    (document.getElementById(`success`).innerHTML = Printed)
};




// true/false cheker
function checkTF(x) {
    if (!x == true) {
        printfDanger(`this is "falsy" val `)

    } else { printfDanger(`this is "truthy" val `) }
}




// adding val to arr on nth/i position (the built in splice !!!!!!!!!!!!!!!!)
function insert(arr, nth, Val) {
    let revpoped = [];
    for (let index = nth; index < arr.length + 3; index++) {
        revpoped.push(arr.pop())
    };
    let MyRevo = [];
    for (let index = 1 - revpoped.length; index < revpoped.length; index++) {
        MyRevo.push(revpoped.pop())
    };
    arr.push(Val)
    arr.push(MyRevo)
    return arr
};


// training identifierz
let myStr = `The lord of the rings`;
const myArr = [1, 2, 3, 4];
const myObj = {
    plate: 3025648,
    brand: `honda`,
    model: undefined,
    features: [`nice`, `fast`, `reliable`],
    preOwnersKilo: { mike: 35, joni: 75, emma: 105, },
}



/////////////////////////
/////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////
////////////////



const div1 = document.getElementById(`div1`)
const div2 = document.querySelector(`#div2`);
const div3 = document.querySelector(`#div3`);

const btn1 = document.querySelector(`#btn1`);
const btn2 = document.querySelector(`#btn2`);
const btn3 = document.querySelector(`#btn3`);

const btnClose = document.querySelectorAll(`.btn-close`);

for (const btn of btnClose) {
    btn.addEventListener(`click`, () => { btn.parentElement.remove() })
}









// let myStrrr = `The lord of the rings`;
// let myStrr = `The lord of the`;


// const myArrr = [1, 2, 3, 4];


// const myObjjj = {
//     plate: 3025648,
//     brand: `honda`,
//     model: undefined,
//     features: [`nice`, `fast`, `reliable`],
//     preOwnersKilo: { mike: 35, joni: 75, emma: 105, },
//     objFunk: () => { console.log(`hi hi`) },
// }
// const myObjj = {
//     plate: 3025648,
//     brand: `honda`,
//     model: undefined,
//     features: [`nice`, `fast`, `reliable`],
//     preOwnersKilo: { mike: 35, joni: 75, emma: 105, },

// }


// function CarPaint(r, g, b) {
//     this.r = r;
//     this.g = g;
//     this.b = b;
//     this.myCL = () => { console.log(this) };
// }

// const myInstance = new CarPaint(255, 255, 255)

// function name(params) {

// }



// class color {
//     constructor(r, g, b) {
//         this.r = r;
//         this.g = g;
//         this.b = b;

//     }
//     rgb(r, g, b) {
//         return `rgb(${this.r},${this.g},${this.b}) `;
//     };
// }

// const c1 = new color(255, 67, 89);
// printf(c1)
// let hiz = c1.rgb()
// printf(hiz)








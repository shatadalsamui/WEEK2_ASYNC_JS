function random() {

}

let p = new Promise(random);

function callback() {
    console.log("promise Succeded");
}

p.then(callback);
radius = [1, 2, 3, 4]

// list of diameters
// list of areas
// list of circumference

let Diameters = radii => {
    return 2*radii;
} 
let area = radii => {
    return Math.pi*radii*radii;
}
let circumference = radii => {
    return 2*radii*Math.pi;
} 
let circles = (radius, radiusCallback) => {
    let sol = []
    for(let i =0; i < radius.length; i++) {
        sol.push(radiusCallback(radius[i]));
    }
    return sol;
} 
let diameteres = circles(radius, Diameters);
circles(radius, area);
circles(radius, circumference);

console.log(diameteres)
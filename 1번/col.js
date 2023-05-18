const list = document.getElementById("list");
const hi = document.getElementById("hi");

function colorChange(event) {
    console.log(event);
    const var1 = event.target.value;
    
    if (var1 === 'red') {
        hi.style.color = 'red';
    } else if (var1 === 'orange') {
        hi.style.color = 'orange'
    } else if (var1 === 'yellow') {
        hi.style.color = 'yellow'
    } else if (var1 === 'green') {
        hi.style.color = 'green'
    } 
};

list.addEventListener("change", colorChange)



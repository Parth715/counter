let nbr = 0;

let strings: string[] = [];
const change = (num: number): void => {
    nbr += num;
    display();
}
const display = () => {
    let inp = <HTMLInputElement>document.getElementById("count");
    if(inp!==null){
        inp.value = nbr.toString();
        inp.style.textAlign = "center";
        inp.style.width = "100px";
        inp.style.color=(nbr % 2 == 0)? "red" : "black";
        inp.style.fontWeight=(nbr % 3 == 0)? "bold" : "normal";
        inp.style.fontStyle=(nbr % 2 == 0)? "italic" : "normal";
    }
}
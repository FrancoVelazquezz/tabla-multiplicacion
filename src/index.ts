import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>`;

let x : number = Number(prompt('Ingrese numero: '))
//let multiplicacion: number = 0
for(let i=0 ; i<=10 ; i++){
  const resultado = x * i;
  console.log(resultado)
}

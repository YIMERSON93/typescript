import { Comandante } from "./comandante";
import { Soldado } from "./soldado";


let comandante1= new Comandante("yimerson", "teniente", "masculino")
console.log(comandante1.getnombre());

let soldadobryan= new Soldado("bryan", "01/01/2021", "masculino")
let soldadasandra=new Soldado("sandra","07/12/2022", "femenino")
let soldadopoche=new Soldado("poche","06/03/2023","masculino")


comandante1.ingresarsoldado(soldadasandra)

comandante1.ingresarsoldado(soldadobryan)
comandante1.ingresarsoldado(soldadopoche)

console.log(comandante1.mostrar_numero_soldados());


console.log(comandante1.getListaSoldados()[0].getnombre())
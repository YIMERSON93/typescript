import { cuenta } from "./cuenta";
import { cantidad } from "./cantidad";
let cuenta1= new cuenta('Juan', 50000);
cuenta1.mostra_dato();
let cantidad1= new cantidad(20000);
let cantidad2= new cantidad(80000);

cuenta1.ingresarcantidad(cantidad1);
cuenta1.retirarcantidad(cantidad2);



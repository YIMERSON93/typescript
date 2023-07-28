import { Soldado } from "./soldado";

export class Comandante{


private nombre: string;
private rango: string;
private genero: string;
private listasoldados: Array<Soldado>=[]

constructor (nombre: string, rango: string, genero: string){
    this.nombre=nombre;
    this.rango=nombre;
    this.genero=nombre;
    this.listasoldados=[]
}
ingresarsoldado(soldado:Soldado){
    this.listasoldados.push(soldado)
}

mostrar_numero_soldados(){
   return this.listasoldados.length
}
 lista_Informacion_soldados(){
    
    for (let i = 0; i < this.listasoldados.length; i++) {
        //Todo
        
    }
}
    public getnombre(): string {
        return this.nombre;
    }
    
    public setnombre(value: string) {
           this.nombre=value;
        
    }
    public getrango(): string {
        return this.rango;
    }
    public setrango(value: string) {
        this.rango=value;
     
 }
 public getgenero(): string {
    return this.genero;
}
public setgenero(value: string) {
    this.genero=value;
 
}public getListaSoldados():Array<Soldado>{
    return this.listasoldados
}


}



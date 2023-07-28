import { cantidad } from "./cantidad";
export class cuenta{
    
    private persona: string;
    public get getpersona(): string {
        return this.persona;
    }
    public set setpersona(value: string) {
        this.persona = value;
    }
    private valor_actual: number;
    public get getvalor_actual(): number {
        return this.valor_actual;
    }
    public set setvalor_actual(value: number) {
        this.valor_actual = value;
    }
    private valorIngresa: Array<cantidad> = [];
    public get getvalorIngresa(): Array<cantidad> {
        return this.valorIngresa;
    }
    public set setvalorIngresa(value: Array<cantidad>) {
        this.valorIngresa = value;
    }
    constructor(persona:string,valor_actual:number){
        this.persona=persona;
        this.valor_actual=valor_actual;
        this.valorIngresa=[];
        
    }
    
    mostra_dato():void{
        console.log('los datos de la cuenta son: ','titular:',this.persona,'valor actual',this.valor_actual)
    }

    ingresarcantidad(cantidad:cantidad){
        this.valorIngresa.push(cantidad)
        if (cantidad.getvalor<0){

            console.log('No es válido el valor ingresado')
         }
         else{
            this.valor_actual=this.valor_actual+cantidad.getvalor;
            console.log('usted ha ingresado: ',cantidad.getvalor)
            console.log('el valor actual de la cuenta es: ', this.valor_actual)

         }
        
        
        
    }
    retirarcantidad(cantidad:cantidad){
        if(cantidad.getvalor>=0){
            
            console.log('el valor inicial de la cuenta es: ',this.valor_actual);
            console.log('el valor ingresado es de:', cantidad.getvalor);
            if (cantidad.getvalor>=this.valor_actual){
    
                
                console.log('usted ha retirado', this.valor_actual);
                console.log('el saldo de la cuenta ahora es de: cero')
            }
            else{
                this.valor_actual= this.valor_actual-cantidad.getvalor;
                console.log('usted ha retirado', cantidad.getvalor);
                console.log('el saldo de la cuenta es de:', this.valor_actual)
            }

        }
        else{

            console.log('usted ha ingresado un valor negativo')

        }
     }
     

    
    
}
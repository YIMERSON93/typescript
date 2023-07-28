export class Operaciones{

    numero1: number;
    
    numer02: number;

    resultado: number;

    

   
    constructor(numero1: number,numero2:number){
        this.numero1=numero1;
        this.numer02=numero2;
        this.resultado=numero1+numero2
        
    }

    public get getnumero1(): number {
        return this.numero1;
    }
    public set setnumero1(value: number) {
        this.numero1 = value;
    }
    public get getnumero2(): number {
        return this.numer02;
    }
    public set setnumero2(value: number) {
        this.numer02 = value;
    }
    public get getresultado():number{
        return this.resultado;
    }
    public set setresultado(value: number){
        this.resultado = value;
    }
 
    suma():void{
        this.resultado= this.numero1+this.numer02
        console.log('el valor de la suma es :',this.resultado);
    }
    resta():void{
        this.resultado= this.numero1-this.numer02
        console.log('el valor de la resta es :',this.resultado);
    }
    multiplicacion():void{
        this.resultado= this.numero1*this.numer02
        console.log('el valor de la multiplicacion es :',this.resultado);
    }
    division():void{
        this.resultado= this.numero1/this.numer02
        console.log('el valor de la division  es :',this.resultado);
    }

    

}


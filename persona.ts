export class persona{

    nombre: string;
    
    edad: number;
    
    telefono: number;
    
    direccion: string;
    
    ciudad: string;
    

   
    constructor(nombre: string,edad: number,telefono:number,direccion: string,ciudad: string){
        this.nombre=nombre;
        this.edad=edad;
        this.telefono=telefono;
        this.direccion=direccion;
        this.ciudad=ciudad;
    }

    public get getnombre(): string {
        return this.nombre;
    }
    public set setnombre(value: string) {
        this.nombre = value;
    }
    public get getedad(): number {
        return this.edad;
    }
    public set setedad(value: number) {
        this.edad = value;
    }
    public get gettelefono(): number {
        return this.telefono;
    }
    public set settelefono(value: number) {
        this.telefono = value;
    }
    public get getdireccion(): string {
        return this.direccion;
    }
    public set setdireccion(value: string) {
        this.direccion = value;
    }
    public get getciudad(): string {
        return this.ciudad;
    }
    public set setciudad(value: string) {
        this.ciudad = value;
    }

    datos():void{

        console.log('la información de la persona: ','Nombre: ',this.nombre,', edad: ',this.edad,', telefono: ', this.telefono,', dirección: ',this.direccion,', ciudad: ',this.ciudad)
    }
    mayor_Edad(): void{

        if(this.edad>=18){
            console.log('la persona es mayor de edad')
        }
        else{
            console.log('la persona es menor de edad')
        }
    }



}
export class Soldado{


    private nombre: string;
    private fechainicio: string;
    private genero: string;
    
    constructor (nombre: string, fechainicio: string, genero: string){
        this.nombre=nombre;
        this.fechainicio=fechainicio;
        this.genero=nombre;
    }
    public mostrarSoldado(){
        return "nombre:" + this.nombre + "\nfecha: " + this.fechainicio + "\ngenero: "+ this.genero
    }
        /**
         * name
         */
        public getnombre(): string {
            return this.nombre;
        }
        
        public setnombre(value: string) {
               this.nombre=value;
            
        }
        public getfechainicio(): string {
            return this.fechainicio;
        }
        public setfechainicio(value: string) {
            this.fechainicio=value;
         
     }
     public getgenero(): string {
        return this.genero;
    }
    public setgenero(value: string) {
        this.genero=value;
     
    }
    
    }
    
    
    
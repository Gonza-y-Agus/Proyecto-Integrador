export class Proyecto{
    id?: number;
    nombreP: string;
    descripcionP: string;
    year: number;

    constructor(nombreP: string, descripcionP: string, year: number){
        this.nombreP = nombreP;
        this.descripcionP = descripcionP;
        this.year = year;
    }
}
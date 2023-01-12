import { Gegenstand } from "./gegenstand"; //von Stackblitz automat. generiert

export class Schmuck extends Gegenstand {

  constructor( public readonly id: number, public wert: number, public bezeichnung : number) {
	super(id,wert)
  }
  
  toString(): string {
    let text: string = "\nID: " + this.id;
    text += "\nVersicherungswert: " + this.wert;
    return text;
   }
}
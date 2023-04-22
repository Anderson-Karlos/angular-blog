import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent {
  
@Input()  
photoCover:string ="https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/26079ab060401d8a76039e985d63a3e9.jpe"
@Input() 
cardTitle:string ="Dragon Ball continua lançando episódios!"
@Input() 
cardDescription:string =""
@Input()
id:string="0"

constructor() {}

ngOnInit():void {

}
}

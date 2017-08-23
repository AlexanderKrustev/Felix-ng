import {Component, EventEmitter, Input, Output} from '@angular/core'
import {ColOption} from "../Show/ColOption";

@Component({
  selector:'column-picker',
  templateUrl: './columns.picker.component.html',
  styleUrls:['./showpicker.css']
})
export class ColumnsPickerComponent{
  @Output() emitOption = new EventEmitter<ColOption[]>();
  @Input() colOptions: ColOption[];

  private pickerShow:boolean;
  private showBtnText:string;
  private tempOptions: ColOption[];

   constructor(){
     this.pickerShow=false;
     this.showBtnText='Choose'
   }

   show(){
     this.pickerShow=!this.pickerShow;
     if(this.showBtnText==='Choose'){
       this.tempOptions=this.colOptions;
       this.showBtnText='Apply'
     }
     else{
       this.showBtnText='Show'
     }

   }




}

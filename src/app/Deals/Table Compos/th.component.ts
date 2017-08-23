///<reference path="../../../../node_modules/@angular/core/src/event_emitter.d.ts"/>
import {Component, EventEmitter, Input, Output} from "@angular/core"


@Component({
  selector:'th-felix',
  templateUrl: './th.component.html'
})

export class ThComponent{
  @Input() showCol;
  @Input() colName;

  private isDesc: boolean = false;



}

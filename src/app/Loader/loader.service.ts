import {Injectable} from "@angular/core"


export class LoaderService{
      public show:boolean;

      constructor(){
        this.show=false;
      }

      startLoading(){
        this.show=true;
      }

      ednLoading(){
        this.show=false;
      }

}

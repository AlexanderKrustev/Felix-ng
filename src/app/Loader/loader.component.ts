import {Component} from '@angular/core'
import {LoaderService} from "./loader.service";


@Component({
  selector: 'loader-info',
  templateUrl: './loader.component.html'
})

export class LoaderComponent{

  constructor(private loader: LoaderService){

  }



}

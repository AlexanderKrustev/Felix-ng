
import {Injectable} from "@angular/core";
import {ColOption} from "./ColOption";

@Injectable()
export class ShowDealService{



   public headerOptions: ColOption[];

   constructor(){
    this.initHeaderNames();
   }



   initHeaderNames(){
     this.headerOptions=[
       new ColOption('No:',true),
       new ColOption('OrderNumber',true),
       new ColOption('Reexport',true),
       new ColOption('User Id',true),
       new ColOption('Exp Date',true),
       new ColOption('Invoice Number',true),
       new ColOption('Ink/LC',true),
       new ColOption('Client Order',true),
       new ColOption('Buyer',true),
       new ColOption('Consignee',true),
       new ColOption('Dest Port/City',true),
       new ColOption('Country',true),
       new ColOption('Pack',true),
       new ColOption('Zn-Mn',true),
       new ColOption('Product',true),
       new ColOption('Formulation',true),
       new ColOption('QTY in Kg',true),
       new ColOption('Currency',true),
       new ColOption('Price per Kg',true),
       new ColOption('Sum in USD',true),
       new ColOption('Sum in Euro',true),
       new ColOption('C.R.',true),
       new ColOption('Credit Terms',true),
       new ColOption('Due Date',true),
       new ColOption('P/N',true),
       new ColOption('Frei Currency',true),
       new ColOption('Frei Sum',true),
       new ColOption('Ins Curremcy',true),
       new ColOption('Ins Sum',true),
       new ColOption('Bank G',true),
       new ColOption('Port',true),
       new ColOption('Transport Company',true),
       new ColOption('Type of transport',true),
       new ColOption('Transport Units',true),
       new ColOption('Transport Number',true),
       new ColOption('Transport Doc',true),
       new ColOption('Date BL',true),
       new ColOption('ETD',true),
       new ColOption('ETA',true),
       new ColOption('Transport Days',true),
     ]
   }


}

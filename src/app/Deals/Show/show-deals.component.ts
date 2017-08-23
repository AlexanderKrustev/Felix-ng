import {Component, OnInit} from "@angular/core"
import {DataService} from "../../Services/data.services";
import {Deal} from "../Deal";
import {ShowDealService} from "./show-deal.service";
import {ColOption} from "./ColOption";


const dealsUrl:string = "http://localhost:22064/api/Deals";


@Component({
  selector: 'deals-table',
  templateUrl: './show-deals.component.html',
  styleUrls: ['../../Shared/vars.buttons.css', './show-deal.component.css']
})

export class ShowDealsComponent implements OnInit{


  private alldeals: Deal[]
  private colOptions: ColOption[];
  private sort: string;
  private isAscending:boolean=true;

  constructor(private data: DataService, private showDeal: ShowDealService){
    this.colOptions=this.showDeal.headerOptions
    this.alldeals=new Array()
  }



  loadDeals(){

    //Mock deals arr
    let d1= new Deal()
        d1.OrderNumber='BB'
        d1.PortId='port'
    let d2= new Deal()
    d2.OrderNumber='AA'
    this.alldeals.push(d1);
    this.alldeals.push(d2)


    //this.data.getData(dealsUrl)
    // .subscribe(
    //   (responedDeals)=>{
    //     this.alldeals=responedDeals;

    //   },
    // (error)=>console.log(error)

    // )
  }

  changeSort(colName){
    this.isAscending=!this.isAscending
    if(this.isAscending){
      this.alldeals=this.alldeals.sort((a,b)=>{

          if(a[colName]>b[colName]){
            return 1;
          }
          if(a[colName]<b[colName]){
            return -1;
          }
          return 0
        });

      }
      else{
      this.alldeals=this.alldeals.sort((a , b)=> {
        if(a[colName]>b[colName]){
          return -1;
        }
        if(a[colName]<b[colName]){
          return 1;
        }
        return 0
       });


    }
    }



  ngOnInit(): void {
    this.loadDeals();

  }



   headerOptions(data){
      this.colOptions=data;
  }

}

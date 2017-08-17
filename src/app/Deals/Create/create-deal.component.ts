import {Component, OnInit} from "@angular/core"
import {Buyer} from "../../Buyers/Buyer";
import {DataService} from "../../Services/data.services";
import {LoaderService} from "../../Loader/loader.service";
import {Consignee} from "../../Consignees/Consignee";
import {Deal} from "../Deal";
import {Country} from "../../Countires/Country";
import {Package} from "../../Packages/Package";
import {Port} from "../../Ports/Port";
import {Product} from "../../Products/Product";
import {Formulation} from "../../Formulations/formulation";




const buyerUrl: string = "http://localhost:22064/api/Buyers";
const consigneeUrl: string = "http://localhost:22064/api/Consignees";
const dealsUrl: string = "http://localhost:22064/api/Deals";
const countryUrl: string = "http://localhost:22064/api/Countries";
const packageUrl: string = "http://localhost:22064/api/Packages";
const portUrl: string = "http://localhost:22064/api/Ports";
const formulationUrl: string = "http://localhost:22064/api/Formulations";
const productsUrl: string = "http://localhost:22064/api/Products";


@Component({
  selector: 'create-deal',
  templateUrl: './create-deal.component.html',
  styleUrls: ['./datepicker.css','./create-deal.component.css']
})


export class CreateDealComponent implements OnInit {
  private buyers: Buyer[];
  private buyer: Buyer;

  private consignees: Consignee[];
  private consignee: Consignee;

  private countries: Country[];
  private country: Consignee;


  private packages: Package[];
  private package: Package;


  private ports: Port[];
  private port: Port;

  private products: Product[];
  private product: Product;

  private formulations: Formulation[];
  private formulation: Formulation;


  private showExpDatepick=false;
  private showDatebl=false;
  private showDateETD=false;
  private showDateETA=false;
  private expDateBtnText:string;

  private deal: Deal;

  date: Date;
  minDate: Date;



  constructor(private data: DataService, private loader: LoaderService) {
    this.buyer = new Buyer();
    this.consignee = new Consignee();
    this.formulation=new Formulation();
    this.country= new Country();
    this.package=new Package();
    this.port=new Port();
    this.product=new Product();
    this.deal = new Deal();
    this.date = new Date();
    this.minDate = new Date("12/15/1990");
    this.expDateBtnText='Show'
  }

  ngOnInit() {
     this.loadBuyers();
     this.loadConsignees();
     this.loadCountries();
     this.loadFormulation();
     this.loadPackages();
     this.loadPorts();
     this.loadProducts()

  }

  private loadBuyers() {
    this.loader.startLoading();
    this.data.getData(buyerUrl)
      .subscribe(
        response => this.buyers = response,
        error2 => alert(error2),
        () => this.loader.ednLoading()
      )
  }


  private loadConsignees() {
    this.loader.startLoading();
    this.data.getData(consigneeUrl)
      .subscribe(
        response => this.consignees = response,
        error2 => alert(error2),
        () => this.loader.ednLoading()
      )
  }

  private loadPackages() {
    this.loader.startLoading();
    this.data.getData(packageUrl)
      .subscribe(
        response => this.packages = response,
        error2 => alert(error2),
        () => this.loader.ednLoading()
      )
  }

  private loadCountries() {
    this.loader.startLoading();
    this.data.getData(countryUrl)
      .subscribe(
        response => this.countries = response,
        error2 => alert(error2),
        () => this.loader.ednLoading()
      )
  }

  private loadFormulation() {
    this.loader.startLoading();
    this.data.getData(formulationUrl)
      .subscribe(
        response => this.formulations = response,
        error2 => alert(error2),
        () => this.loader.ednLoading()
      )
  }

  private loadPorts() {
    this.loader.startLoading();
    this.data.getData(portUrl)
      .subscribe(
        response => this.ports = response,
        error2 => alert(error2),
        () => this.loader.ednLoading()
      )
  }

  private loadProducts() {
    this.loader.startLoading();
    this.data.getData(productsUrl)
      .subscribe(
        response => this.products = response,
        error2 => alert(error2),
        () => this.loader.ednLoading()
      )
  }

  submitDeal() {
    this.deal.BuyerId = this.buyer.Key;
    this.deal.ConsigneeId = this.consignee.Key;
    this.deal.CountryId=this.country.Key;
    this.deal.ProductId=this.product.Key;
    this.deal.FormulationId=this.formulation.Key;
    this.deal.PackageId=this.package.Key;
    this.deal.PortId=this.port.Key;
    //this.deal.TransportCompanyId=this.tra
    console.dir(JSON.stringify(this.deal));
    this.data.create(dealsUrl, this.deal)
      .subscribe(
        result => console.dir(result),
        error => {
          console.error(error)
        },
        () => this.loader.ednLoading()
      )

  }

  showDate(showDateName: string) {
    switch(showDateName){
      case 'expDate': this.showExpDatepick=!this.showExpDatepick;break;
      case 'etdDate': this.showDateETD=!this.showDateETD;break;
      case 'etaDate': this.showDateETA=!this.showDateETA;break;
      case 'blDate': this.showDatebl=!this.showDatebl;break;
    }

    if(this.expDateBtnText=='Show'){
      this.expDateBtnText='Save'
    }
    else{
      this.expDateBtnText='Show'
    }
  }
}

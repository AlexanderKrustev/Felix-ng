import {Buyer} from "../Buyers/Buyer";
import {Consignee} from "../Consignees/Consignee";

export class Deal
{
  Key: string;

  OrderNumber: string;
  Reexport: boolean
  BuyerId: string;
  ConsigneeId: string;
  CountryId: string;
  ProductId: string;
  FormulationId: string;
  PackageId: string;
  PortId: string;
  TransportCompanyId: string;
  ExpeditionDate: Date;
  InvoiceNumber: string;
  InkasoAkrNumber: string;
  ClientOrderId: string;
  ZN_MN: string;
  DestinationPort: string;
  Quantity: number;
  PricePerKg: number;
  Currency: string;
  CR: number;
  SumInEuro: number;
  SumInUSD: number;
  ViaPort: string;
  CreditTerms: string;
  Frei: number;
  FreiCurrency: string;
  InsCurrency: string;
  Insuranse: number;
  TypeOfTransport: string;
  TransportUnit: number;
  TransportNumber: string;
  TransportDoc: string;
  DateBL: Date;
  ETD: Date;
  ETA: Date;
  TransportDays: number;



}

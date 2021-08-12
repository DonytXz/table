import { Component, OnInit, ViewChild } from '@angular/core';

import {MatPaginator, MatTableDataSource} from '@angular/material';
export interface Element {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})


export class ListComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

  displayedColumns = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  /**
  * Set the paginator after the view init since this component will
  * be able to query its view for the initialized paginator.
  */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
const ELEMENT_DATA: Element[] = [
  {"id":"1","categoryid":"1","storeid":"1","name":"Sin categoria","image":"img\/category\/1_1605381641.jpg","status":"1","createdBy":"1","createdDT":"2020-04-06 17:35:42","modifiedBy":"1","modifiedDT":"2020-11-14 11:20:41"},
  {"id":"2","categoryid":"1","storeid":"1","name":"Placa Marmol","image":"img\/nofoto.png","status":"1","createdBy":"1","createdDT":"2020-04-06 15:54:01","modifiedBy":"2","modifiedDT":"2020-04-10 18:01:32"},
  {"id":"3","categoryid":"1","storeid":"1","name":"Placa Granito","image":"img\/nofoto.png","status":"1","createdBy":"1","createdDT":"2020-04-06 15:54:01","modifiedBy":"2","modifiedDT":"2020-04-10 18:00:50"},
  {"id":"4","categoryid":"1","storeid":"1","name":"Placa Travertino","image":"img\/nofoto.png","status":"1","createdBy":"1","createdDT":"2020-04-06 15:54:01","modifiedBy":"2","modifiedDT":"2020-04-10 18:00:50"},
  {"id":"5","categoryid":"1","storeid":"1","name":"Placa Cuarzo","image":"img\/nofoto.png","status":"1","createdBy":"1","createdDT":"2020-04-06 15:54:01","modifiedBy":"2","modifiedDT":"2020-04-10 18:00:50"},
  {"id":"6","categoryid":"1","storeid":"1","name":"Placa Cuarzita","image":"img\/nofoto.png","status":"1","createdBy":"1","createdDT":"2020-04-06 15:54:01","modifiedBy":"1","modifiedDT":"2020-04-06 15:54:01"},
  {"id":"7","categoryid":"1","storeid":"1","name":"Slate","image":"img\/nofoto.png","status":"1","createdBy":"1","createdDT":"2020-04-06 15:54:01","modifiedBy":"1","modifiedDT":"2020-04-06 15:54:01"},
  {"id":"8","categoryid":"1","storeid":"1","name":"Placa Porcelana","image":"img\/nofoto.png","status":"1","createdBy":"1","createdDT":"2020-04-06 15:54:01","modifiedBy":"1","modifiedDT":"2020-04-06 15:54:01"},
  {"id":"9","categoryid":"1","storeid":"1","name":"Vidrio","image":"img\/nofoto.png","status":"1","createdBy":"1","createdDT":"2020-04-06 15:54:01","modifiedBy":"1","modifiedDT":"2020-04-06 15:54:01"},
  {"id":"10","categoryid":"1","storeid":"1","name":"Placa Limestone","image":"img\/nofoto.png","status":"1","createdBy":"1","createdDT":"2020-04-06 15:54:01","modifiedBy":"1","modifiedDT":"2020-04-06 15:54:01"},
  {"id":"11","categoryid":"1","storeid":"1","name":"Onix","image":"img\/nofoto.png","status":"1","createdBy":"1","createdDT":"2020-04-06 15:54:01","modifiedBy":"1","modifiedDT":"2020-04-06 15:54:01"},
  {"id":"12","categoryid":"1","storeid":"1","name":"Basaltico","image":"img\/nofoto.png","status":"1","createdBy":"1","createdDT":"2020-04-06 15:54:01","modifiedBy":"3","modifiedDT":"2021-07-29 18:20:50"},
  {"id":"13","categoryid":"1","storeid":"1","name":"Placa Semipreciosa","image":"img\/nofoto.png","status":"1","createdBy":"1","createdDT":"2020-04-06 15:54:01","modifiedBy":"1","modifiedDT":"2020-04-06 15:54:01"},
  {"id":"14","categoryid":"1","storeid":"1","name":"Mosaico","image":"img\/nofoto.png","status":"1","createdBy":"1","createdDT":"2020-04-06 15:54:01","modifiedBy":"1","modifiedDT":"2020-04-06 15:54:01"},
  {"id":"15","categoryid":"1","storeid":"1","name":"Piedra Laja","image":"img\/nofoto.png","status":"1","createdBy":"1","createdDT":"2020-04-06 15:54:01","modifiedBy":"1","modifiedDT":"2020-04-06 15:54:01"},
  {"id":"16","categoryid":"1","storeid":"1","name":"Piso LVT","image":"img\/nofoto.png","status":"1","createdBy":"1","createdDT":"2020-04-06 15:54:01","modifiedBy":"1","modifiedDT":"2020-04-06 15:54:01"},
  {"id":"17","categoryid":"1","storeid":"2","name":"Acero Inoxidable ","image":"img\/nofoto.png","status":"1","createdBy":"1","createdDT":"2020-04-06 15:54:01","modifiedBy":"3","modifiedDT":"2021-07-29 18:20:33"},
  {"id":"18","categoryid":"1","storeid":"1","name":"Placa Corian ","image":"img\/nofoto.png","status":"1","createdBy":"1","createdDT":"2020-04-06 15:54:01","modifiedBy":"1","modifiedDT":"2020-04-06 15:54:01"},
  {"id":"19","categoryid":"1","storeid":"1","name":"Piso Ceramica","image":"img\/nofoto.png","status":"1","createdBy":"1","createdDT":"2020-04-06 15:54:01","modifiedBy":"1","modifiedDT":"2020-04-06 15:54:01"},
  {"id":"20","categoryid":"1","storeid":"1","name":"Placa Soapstone","image":"img\/nofoto.png","status":"1","createdBy":"1","createdDT":"2020-04-06 15:54:01","modifiedBy":"1","modifiedDT":"2020-04-06 15:54:01"},
  {"id":"21","categoryid":"1","storeid":"1","name":"Sink","image":"img\/nofoto.png","status":"1","createdBy":"1","createdDT":"2020-04-06 15:54:01","modifiedBy":"1","modifiedDT":"2020-04-06 15:54:01"},
  {"id":"22","categoryid":"1","storeid":"1","name":"Madera","image":"img\/nofoto.png","status":"1","createdBy":"1","createdDT":"2020-04-06 15:54:01","modifiedBy":"1","modifiedDT":"2020-04-06 15:54:01"},
  {"id":"23","categoryid":"1","storeid":"1","name":"Cantera","image":"img\/nofoto.png","status":"1","createdBy":"1","createdDT":"2020-04-06 15:54:01","modifiedBy":"3","modifiedDT":"2021-07-29 18:20:53"},
  {"id":"24","categoryid":"1","storeid":"1","name":"Piso Vinil","image":"img\/nofoto.png","status":"1","createdBy":"1","createdDT":"2020-04-06 15:54:01","modifiedBy":"1","modifiedDT":"2020-04-06 15:54:01"},
  {"id":"25","categoryid":"1","storeid":"1","name":"Piso Marmol","image":"img\/nofoto.png","status":"1","createdBy":"1","createdDT":"2020-04-06 15:54:01","modifiedBy":"1","modifiedDT":"2020-04-06 15:54:01"},
  {"id":"26","categoryid":"1","storeid":"1","name":"Piso Granito","image":"img\/nofoto.png","status":"1","createdBy":"1","createdDT":"2020-04-06 15:54:01","modifiedBy":"1","modifiedDT":"2020-04-06 15:54:01"},
  {"id":"27","categoryid":"1","storeid":"1","name":"Piso Travertino","image":"img\/nofoto.png","status":"1","createdBy":"1","createdDT":"2020-04-06 15:54:01","modifiedBy":"1","modifiedDT":"2020-04-06 15:54:01"},
  {"id":"28","categoryid":"1","storeid":"1","name":"Piso Porcelana","image":"img\/nofoto.png","status":"1","createdBy":"1","createdDT":"2020-04-06 15:54:01","modifiedBy":"1","modifiedDT":"2020-04-06 15:54:01"},
  {"id":"29","categoryid":"1","storeid":"1","name":"Piso Limestone","image":"img\/nofoto.png","status":"1","createdBy":"1","createdDT":"2020-04-06 15:54:01","modifiedBy":"1","modifiedDT":"2020-04-06 15:54:01"},
  {"id":"30","categoryid":"1","storeid":"1","name":"Vidrio Templado\r\n","image":"img\/nofoto.png","status":"1","createdBy":"1","createdDT":"2020-04-06 15:54:01","modifiedBy":"1","modifiedDT":"2020-04-06 15:54:01"},
  {"id":"31","categoryid":"1","storeid":"1","name":"Instalaciones","image":"img\/nofoto.png","status":"1","createdBy":"1","createdDT":"2020-04-06 15:54:01","modifiedBy":"1","modifiedDT":"2020-04-06 15:54:01"},
  {"id":"32","categoryid":"1","storeid":"1","name":"Servicios","image":"img\/nofoto.png","status":"1","createdBy":"1","createdDT":"2020-04-06 15:54:01","modifiedBy":"1","modifiedDT":"2020-04-06 15:54:01"},
  {"id":"33","categoryid":"1","storeid":"1","name":"Gabinetes","image":"img\/nofoto.png","status":"1","createdBy":"1","createdDT":"2020-04-06 15:54:01","modifiedBy":"1","modifiedDT":"2020-04-06 15:54:01"},
  {"id":"34","categoryid":"1","storeid":"1","name":"Piso Cuarzita","image":"img\/nofoto.png","status":"1","createdBy":"1","createdDT":"2020-04-06 15:54:01","modifiedBy":"1","modifiedDT":"2020-04-06 15:54:01"},
  {"id":"35","categoryid":"1","storeid":"1","name":"Mosaico Hidraulico","image":"img\/nofoto.png","status":"1","createdBy":"1","createdDT":"2020-04-06 15:54:01","modifiedBy":"1","modifiedDT":"2020-04-06 15:54:01"},
  {"id":"36","categoryid":"1","storeid":"1","name":"Sandstone","image":"img\/nofoto.png","status":"1","createdBy":"1","createdDT":"2020-04-06 15:54:01","modifiedBy":"1","modifiedDT":"2020-04-06 15:54:01"},
  {"id":"37","categoryid":"1","storeid":"1","name":"Metal","image":"img\/nofoto.png","status":"1","createdBy":"1","createdDT":"2020-04-06 15:54:01","modifiedBy":"1","modifiedDT":"2020-04-06 15:54:01"},
  {"id":"38","categoryid":"1","storeid":"1","name":"Piedra Flexible","image":"img\/nofoto.png","status":"1","createdBy":"1","createdDT":"2020-04-06 15:54:01","modifiedBy":"1","modifiedDT":"2020-04-06 15:54:01"},
  {"id":"39","categoryid":"1","storeid":"1","name":"Panel de Piedra","image":"img\/nofoto.png","status":"1","createdBy":"1","createdDT":"2020-04-06 15:54:01","modifiedBy":"1","modifiedDT":"2020-04-06 15:54:01"},
  {"id":"40","categoryid":"1","storeid":"1","name":"Molduras","image":"img\/nofoto.png","status":"1","createdBy":"2","createdDT":"2020-04-13 12:54:10","modifiedBy":"2","modifiedDT":"2020-04-13 12:54:24"},
  {"id":"41","categoryid":"1","storeid":"1","name":"Piso Cuarzo Silestone","image":"img\/nofoto.png","status":"1","createdBy":"2","createdDT":"2020-04-13 12:54:10","modifiedBy":"2","modifiedDT":"2020-04-13 12:54:24"},
  {"id":"42","categoryid":"1","storeid":"1","name":"Piso Madera Ingenieria","image":"img\/nofoto.png","status":"1","createdBy":"2","createdDT":"2020-04-13 12:54:10","modifiedBy":"2","modifiedDT":"2020-04-13 12:54:24"},
  {"id":"43","categoryid":"1","storeid":"1","name":"Placa Venetian","image":"img\/nofoto.png","status":"1","createdBy":"2","createdDT":"2020-04-13 12:54:10","modifiedBy":"2","modifiedDT":"2020-04-13 12:54:24"}
];
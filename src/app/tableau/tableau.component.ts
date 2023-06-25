import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.css']
})
export class TableauComponent {

 rowData$: Observable<any[]> | undefined;

  colDefs: ColDef[]=[
    {
    field:"make", sortable: true, filter: true
    },
    {
    field:"model", sortable: true
    },
    {
    field:"price", sortable: true
    }
    ];

    constructor( private http:HttpClient) {
   
    }
 
   ngOnInit(): void {
    this.rowData$=this.http.get<any[]>('https://www.ag-grid.com/example-assets/row-data.json');
   }

}

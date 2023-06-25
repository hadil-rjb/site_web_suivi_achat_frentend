import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-achat',
  templateUrl: './achat.component.html',
  styleUrls: ['./achat.component.css']
})
export class AchatComponent {
  rowData$: Observable<any[]> | undefined;

  colDefs: ColDef[] = [
    {
      field: "id", sortable: true, filter: true
    },
    {
      field: "mois", sortable: true
    },
    {
      field: "annee", sortable: true
    },
    {
      field: "siege", sortable: true
    },
    {
      field: "numPiece", sortable: true
    },
    {
      field: "numPost", sortable: true
    },
    {
      field: "ntc", sortable: true
    },
    {
      field: "ntx", sortable: true
    },
    {
      field: "libelle", sortable: true
    },
    {
      field: "dateRealisation", sortable: true
    },
    {
      field: "montant", sortable: true
    }

  ];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.rowData$ = this.http.get<any[]>('http://localhost:8080/api/achat/tout');
  }

}

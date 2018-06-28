import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

class Country {
  id: number;
  countryname: string;
  countrycode: string;
}

class DataTablesResponse {
  list: any[];
  pageNum: number;
  pageSize: number;
  total: number;
}

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  countries: Country[];
  mover = -1;
  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full',
      scrollY: '400',
      serverSide: true,
      processing: true,
      ajax: (dataTablesParameters: any, callback) => {
        this.http
          .post<DataTablesResponse>(
            'http://127.0.0.1/countries/countries_raw',
            dataTablesParameters, {}
          ).subscribe(resp => {
          this.countries = resp.list;

          callback({
            recordsTotal: resp.total,
            draw: resp.pageNum,
            recordsFiltered: resp.total,
            data: []
          });
        });
      },
      columns: [{ data: 'id' }, { data: 'countrycode' }, { data: 'countryname' }]
    };
  }
}

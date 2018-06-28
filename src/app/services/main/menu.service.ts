import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Menu} from '../../entity/main/menu';
import {Observable } from 'rxjs';

@Injectable()
export class MenuService {
  URL = 'http://127.0.0.1/menu';
  constructor(private http: HttpClient) { }

  getMenus(): Observable<Menu[]> {
    return this.http.get<Menu[]>(this.URL)
      .pipe();
  }
}

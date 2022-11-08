import { Observable } from 'rxjs';
import { Politician } from './politician.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PoliticianService {

  constructor(
    private http: HttpClient
  ) { }

  createPolitician(politician: Politician): Observable<Politician> {
    return this.http.post<Politician>(`${environment.baseUrl}/api/create/politician`, politician)
  }

  getPoliticians(): Observable<Politician> {
    return this.http.get<Politician>(`${environment.baseUrl}/get/politicians`)
  }

  getPolitician(id: any): Observable<Politician> {
    return this.http.get<Politician>(`${environment.baseUrl}/get/politician/${id}`)
  }

  editPolitician(politician: Politician): Observable<Politician> {
    return this.http.post<Politician>(`${environment.baseUrl}/api/edit/politician`, politician)
  }

  statusPolitician(politician: Politician): Observable<Politician> {
    return this.http.post<Politician>(`${environment.baseUrl}/api/status/politician`, politician)
  }

  deletePolitician(politician: Politician): Observable<Politician> {
    return this.http.post<Politician>(`${environment.baseUrl}/api/delete/politician`, politician)
  }
}

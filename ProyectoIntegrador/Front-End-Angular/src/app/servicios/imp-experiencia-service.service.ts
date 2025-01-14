import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../model/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ImpExperienciaServiceService {
expURL = 'https://intense-dusk-90424.herokuapp.com/experiencia/'

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Experiencia[]>{
    return this.httpClient.get<Experiencia[]>(this.expURL + 'listar');
  }

  public detail(id:number): Observable<Experiencia>{
    return this.httpClient.get<Experiencia>(this.expURL + `listar/${id}`)
  }

  public save(experiencia: Experiencia):Observable<any>{
    return this.httpClient.post<any>(this.expURL + `crear`, experiencia);
  }

  public update(id: number, experiencia: Experiencia): Observable<any> {
    return this.httpClient.put<any>(this.expURL + `editar/${id}`, experiencia);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.expURL + `borrar/${id}`);
  }
}

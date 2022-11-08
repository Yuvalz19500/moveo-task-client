import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { getCodeBlocksEndpoint, getStudentsEndpoint } from 'src/app/endpoints/endpoints';

@Injectable({
  providedIn: 'root'
})
export class LobbyService {

  constructor(private http: HttpClient) { }

  getStudents() {
    return this.http.get(getStudentsEndpoint.original);
  }

  getCodeBlocks() {
    return this.http.get(getCodeBlocksEndpoint.original);
  }
}

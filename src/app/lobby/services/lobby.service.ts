import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { generateSessionLinkEndpoint, getCodeBlocksEndpoint, getStudentsEndpoint } from 'src/app/endpoints/endpoints';

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

  generateSessionLink(codeBlockId: number, studentId: number) {
    return this.http.post(generateSessionLinkEndpoint.original, {codeblock_id: codeBlockId, student_id: studentId});
  }
}

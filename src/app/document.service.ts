import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Document } from './document.model'; // Assuming a model for document data
import { Observable,map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  private apiUrl = 'http://localhost:8080/api/getDoc'; // Replace with your actual API endpoint URL for retrieving documents

  constructor(private http: HttpClient) {}

  getDocumentData(): Observable<Document[]> {
    // Use the generic type of Document[] for the response
    return this.http.get<Document[]>(this.apiUrl).pipe(
        map(data => data.map(document => ({ file: document.file, activity: document.activity, generation :document.generation,createdon :document.createdon  }))) // Map to Chat[] with only name and age
      );;
  }
  private apidoc = 'http://localhost:8080/api/Doc';
  addDocument(newDocument: Document): Observable<Document> {
    return this.http.post<Document>(this.apidoc, newDocument);
  }
  
}

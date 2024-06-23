import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Chat } from './chat.model'; // Assuming a model for chat data
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private apiUrl = 'http://localhost:8080/api/getChat'; // Replace with your actual API endpoint URL

  constructor(private http: HttpClient) {}

  getChatData(): Observable<Chat[]> {
    return this.http.get<any[]>(this.apiUrl)
      .pipe(
        map(data => data.map(chat => ({ name: chat.name, age: chat.age }))) // Map to Chat[] with only name and age
      );
  }
  
}

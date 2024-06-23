import { Component, Inject, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { ChatService } from '../chat.service';
import { Chat } from '../chat.model'; 
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink,RouterOutlet,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  chatData: Chat[] | null = null;
  loading = true;
  error: string | null = null; // Specify error type as string for clarity

  constructor(private http: HttpClient,private chatService: ChatService, @Inject(Router) private router: Router) {}

  ngOnInit() {
    this.chatService.getChatData()
      .subscribe({
        next: (data) => {
          this.chatData = data;
          this.loading = false;
        },
        error: (err) => {
          this.error = err.message || 'An error occurred'; // Handle potential error messages
          this.loading = false;
        },
        complete: () => console.log('Data fetching complete') // Optional for logging completion
      });
  }

  navigateToDocGenerator() {
    // Use router to navigate to DocGeneratorComponent
    this.router.navigate(['/docs']);
  }
}
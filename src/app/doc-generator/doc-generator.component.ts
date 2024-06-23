import { Component, Inject, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { DocumentService } from '../document.service';
import { Document } from '../document.model'; 
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-doc-generator',
  standalone: true,
  imports: [RouterLink,RouterOutlet,CommonModule],
  templateUrl: './doc-generator.component.html',
  styleUrl: './doc-generator.component.css'
})
export class DocGeneratorComponent  implements OnInit{
    documentData: Document[] | null = null;
    loading = true;
    error: string | null = null; // Specify error type as string for clarity
  
    constructor(private http: HttpClient,private documentService: DocumentService, @Inject(Router) private router: Router) {}
  
    ngOnInit() {
      this.documentService.getDocumentData()
        .subscribe({
          next: (data) => {
            this.documentData = data;
            this.loading = false;
          },
          error: (err) => {
            this.error = err.message || 'An error occurred'; // Handle potential error messages
            this.loading = false;
          },
          complete: () => console.log('Data fetching complete') // Optional for logging completion
        });
    }
  
}

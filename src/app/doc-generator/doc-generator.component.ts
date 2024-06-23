import { Component, Inject, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { DocumentService } from '../document.service';
import { Document } from '../document.model'; 
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-doc-generator',
  standalone: true,
  imports: [RouterLink,RouterOutlet,CommonModule,FormsModule],
  templateUrl: './doc-generator.component.html',
  styleUrl: './doc-generator.component.css'
})
export class DocGeneratorComponent  implements OnInit{
    documentData: Document[] | null = null;
    newDocument: Document = {
      file: '',
      activity: '',
      generation: '',
      createdon: new Date(),
    };
    loading = true;
    error: string | null = null; // Specify error type as string for clarity
    isModalOpen = false; // Flag to track modal visibility

    openDocumentModal() {
      this.isModalOpen = true;
      
    }
  
    closeDocumentModal() {
      this.isModalOpen = false;
    }
  
    onSubmit() {
      this.addDocument(); // Call addDocument function with newDocument
      this.closeDocumentModal(); // Close modal after submission
    }
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
    addDocument() {
      this.documentService.addDocument(this.newDocument)
        .subscribe({
          next: (addedDocument) => {
            console.log('Document added successfully:', addedDocument);
            this.newDocument = addedDocument; 
          },
          error: (err) => {
            console.error('Error adding document:', err);
            this.error = err.message || 'An error occurred adding document'; // Update error message
          }
        });
    }

    // deleteDocument(id: string) {
    //   this.documentService.deleteDocument(id)
    //     .subscribe(
    //       (response) => {
    //         console.log('Document deleted successfully:', response);
    //         this.loadDocuments();
    //       },
    //       (error) => {
    //         console.error('Error deleting document:', error);
    //       }
    //     );
    // }
}

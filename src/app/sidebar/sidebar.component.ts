import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  isVisible = true; // Initially set sidebar to visible

  constructor() {}

  ngOnInit(): void {}

  closeSidebar() {
    this.isVisible = false;
  }
}

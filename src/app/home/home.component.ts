import { Component, Inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink,RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(@Inject(Router) private router: Router) {}
  navigateToDocGenerator() {
    // Use router to navigate to DocGeneratorComponent
    // (assuming you have a router instance injected)
    this.router.navigate(['/docs']);
  }
}

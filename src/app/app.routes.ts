import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; // Assuming your home component is still there
import { DocGeneratorComponent } from './doc-generator/doc-generator.component';
import { ChattingComponent } from './chatting/chatting.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Map the root path ('/') to HomeComponent
  { path: 'docs', component: DocGeneratorComponent }, // Map '/docs' path to DocGeneratorComponent
  { path: 'chat', component: ChattingComponent } // Map '/chat' path to ChattingComponent
];

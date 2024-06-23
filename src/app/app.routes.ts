import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; 
import { DocGeneratorComponent } from './doc-generator/doc-generator.component';
import { ChattingComponent } from './chatting/chatting.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, 
  { path: 'docs', component: DocGeneratorComponent },
  { path: 'chat', component: ChattingComponent }, 
];

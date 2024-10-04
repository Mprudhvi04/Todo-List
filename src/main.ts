import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
bootstrapApplication(AppComponent) // Incorrect if AppComponent is not standalone
  .catch(err => console.error(err));

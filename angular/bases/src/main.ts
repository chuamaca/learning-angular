import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
//Punto de entrada a la aplicación, no se hace cambios. es raras veces.
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

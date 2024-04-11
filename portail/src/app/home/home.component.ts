import { Component } from '@angular/core';
import { LoaderComponent } from '../loader/loader.component';
import { ButtonsStartComponent } from '../buttons-start/buttons-start.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LoaderComponent,ButtonsStartComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

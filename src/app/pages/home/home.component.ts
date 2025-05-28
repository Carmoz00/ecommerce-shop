import { Component } from '@angular/core';
import { LifecycleDemoComponent } from '../../components/lifecycle-demo/lifecycle-demo.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LifecycleDemoComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  counter = 0;
}

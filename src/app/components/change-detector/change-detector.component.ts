// src/app/components/change-detector/change-detector.component.ts
import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  DoCheck,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-change-detector',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="p-4 bg-gray-100 rounded mb-4">
      <p>Valore corrente: {{ value }}</p>
      <p *ngIf="lastChange">
        ngOnChanges → da {{ lastChange.previousValue }} a
        {{ lastChange.currentValue }}
      </p>
      <p *ngIf="doCheckCount > 0">
        ngDoCheck chiamato: {{ doCheckCount }} volte
      </p>
      <p *ngIf="lastDeepCheck">
        Deep check: valore precedente era {{ lastDeepCheck }}
      </p>
    </div>
  `,
  styles: [
    `
      div {
        border: 1px solid #ccc;
      }
      p {
        margin: 0.25rem 0;
      }
    `,
  ],
})
export class ChangeDetectorComponent implements OnChanges, DoCheck {
  @Input() value!: number;

  lastChange?: SimpleChanges['value'];
  doCheckCount = 0;

  // per esempio: traccia l’ultimo valore “memorizzato”
  private prevValue!: number;
  lastDeepCheck?: number;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['value']) {
      this.lastChange = changes['value'];
      this.prevValue = changes['value'].currentValue;
    }
  }

  ngDoCheck(): void {
    this.doCheckCount++;
    if (this.value !== this.prevValue) {
      this.lastDeepCheck = this.prevValue;
      this.prevValue = this.value;
      console.log(
        'ngDoCheck: valore deep cambiato da',
        this.lastDeepCheck,
        'a',
        this.value
      );
    }
  }
}

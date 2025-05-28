import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterViewInit,
  OnDestroy,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lifecycle-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lifecycle-demo.component.html',
  styleUrls: ['./lifecycle-demo.component.scss'],
})
export class LifecycleDemoComponent
  implements OnChanges, DoCheck, AfterViewInit, OnDestroy
{
  @Input() value!: number;

  lastChange?: SimpleChanges['value'];
  doCheckCount = 0;
  intervalCount = 0;

  @ViewChild('statusParagraph', { static: false })
  statusEl!: ElementRef<HTMLParagraphElement>;

  private intervalId!: number;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['value']) {
      this.lastChange = changes['value'];
    }
  }

  ngDoCheck(): void {
    this.doCheckCount++;
  }

  ngAfterViewInit(): void {
    this.statusEl.nativeElement.textContent =
      'View inizializzata con counter = ' + this.value;

    this.intervalId = window.setInterval(() => {
      this.intervalCount++;
      this.statusEl.nativeElement.textContent = `Timer: ${this.intervalCount} tick`;
    }, 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }
}

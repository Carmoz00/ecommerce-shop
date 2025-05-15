import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  checkoutForm!: FormGroup;
  submitted = false; // ← qui

  ngOnInit(): void {
    this.checkoutForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      address: new FormControl('', [Validators.required]),
      payment: new FormControl('card', [Validators.required]),
    });
  }

  onSubmit(): void {
    this.submitted = true; // ← segna l’invio
    if (this.checkoutForm.valid) {
      console.log('Ordine inviato:', this.checkoutForm.value);
      // Qui potrai svuotare il carrello e navigare a conferma ordine
    } else {
      this.checkoutForm.markAllAsTouched();
    }
  }
}

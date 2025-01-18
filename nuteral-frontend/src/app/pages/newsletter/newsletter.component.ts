import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

interface NewsletterBenefit {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-newsletter',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss']
})
export class NewsletterComponent {
  subscribeForm: FormGroup;
  benefits: NewsletterBenefit[] = [
    {
      icon: 'M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h8a1 1 0 001-1zm-2-6a1 1 0 11-2 0 1 1 0 012 0z',
      title: 'Novidades em Primeira Mão',
      description: 'Receba as últimas atualizações sobre nossos produtos e lançamentos.'
    },
    {
      icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2',
      title: 'Conteúdo Exclusivo',
      description: 'Artigos, estudos e informações sobre nutrição e saúde.'
    },
    {
      icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
      title: 'Ofertas Especiais',
      description: 'Descontos exclusivos e promoções para assinantes.'
    }
  ];

  constructor(private fb: FormBuilder) {
    this.subscribeForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      interests: this.fb.group({
        products: [false],
        research: [false],
        nutrition: [false]
      })
    });
  }

  onSubmit() {
    if (this.subscribeForm.valid) {
      console.log('Newsletter subscription:', this.subscribeForm.value);
      // Here you would typically send the subscription data to your backend
      this.subscribeForm.reset();
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Newsletter {
  id: number;
  title: string;
  content: string;
  sentDate: Date | null;
  status: 'draft' | 'sent';
  recipientCount?: number;
}

@Component({
  selector: 'app-admin-newsletters',
  templateUrl: './admin-newsletters.component.html',
  styleUrls: ['./admin-newsletters.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule]
})
export class AdminNewslettersComponent implements OnInit {
  newsletterForm: FormGroup;
  newsletters: Newsletter[] = [];
  editingNewsletter: Newsletter | null = null;

  constructor(private fb: FormBuilder) {
    this.newsletterForm = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required]
    });
  }

  ngOnInit() {
    // TODO: Load newsletters from backend
    this.loadNewsletters();
  }

  loadNewsletters() {
    // TODO: Implement API call
  }

  onSubmit() {
    if (this.newsletterForm.valid) {
      if (this.editingNewsletter) {
        // Update existing newsletter
        // TODO: Implement API call
      } else {
        // Create new newsletter
        // TODO: Implement API call
      }
    }
  }

  editNewsletter(newsletter: Newsletter) {
    this.editingNewsletter = newsletter;
    this.newsletterForm.patchValue({
      title: newsletter.title,
      content: newsletter.content
    });
  }

  cancelEdit() {
    this.editingNewsletter = null;
    this.newsletterForm.reset();
  }

  deleteNewsletter(id: number) {
    // TODO: Implement API call
    if (confirm('Tem certeza que deseja excluir esta newsletter?')) {
      // Delete newsletter
    }
  }

  sendNewsletter(id: number) {
    // TODO: Implement API call
    if (confirm('Tem certeza que deseja enviar esta newsletter?')) {
      // Send newsletter
    }
  }
}

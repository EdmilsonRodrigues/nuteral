import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

interface JobPosting {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
  benefits: string[];
  isActive: boolean;
  postedDate: Date;
}

@Component({
  selector: 'app-admin-careers',
  templateUrl: './admin-careers.component.html',
  styleUrls: ['./admin-careers.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule]
})
export class AdminCareersComponent implements OnInit {
  jobForm: FormGroup;
  jobs: JobPosting[] = [];
  editingJob: JobPosting | null = null;

  constructor(private fb: FormBuilder) {
    this.jobForm = this.fb.group({
      title: ['', Validators.required],
      department: ['', Validators.required],
      location: ['', Validators.required],
      type: ['', Validators.required],
      description: ['', Validators.required],
      requirements: ['', Validators.required],
      benefits: ['', Validators.required],
      isActive: [true]
    });
  }

  ngOnInit() {
    // TODO: Load jobs from backend
    this.loadJobs();
  }

  loadJobs() {
    // TODO: Implement API call
  }

  onSubmit() {
    if (this.jobForm.valid) {
      const formValue = this.jobForm.value;
      const jobData = {
        ...formValue,
        requirements: formValue.requirements.split('\n').filter(Boolean),
        benefits: formValue.benefits.split('\n').filter(Boolean)
      };

      if (this.editingJob) {
        // Update existing job
        // TODO: Implement API call
      } else {
        // Create new job
        // TODO: Implement API call
      }
    }
  }

  editJob(job: JobPosting) {
    this.editingJob = job;
    this.jobForm.patchValue({
      title: job.title,
      department: job.department,
      location: job.location,
      type: job.type,
      description: job.description,
      requirements: job.requirements.join('\n'),
      benefits: job.benefits.join('\n'),
      isActive: job.isActive
    });
  }

  cancelEdit() {
    this.editingJob = null;
    this.jobForm.reset();
  }

  deleteJob(id: number) {
    // TODO: Implement API call
    if (confirm('Tem certeza que deseja excluir esta vaga?')) {
      // Delete job
    }
  }
}

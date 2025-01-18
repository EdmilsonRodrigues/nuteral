import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Candidate {
  id: number;
  name: string;
  email: string;
  phone: string;
  position: string;
  resumeUrl: string;
  appliedDate: Date;
  status: 'new' | 'reviewing' | 'contacted' | 'rejected';
}

@Component({
  selector: 'app-admin-talent-bank',
  templateUrl: './admin-talent-bank.component.html',
  styleUrls: ['./admin-talent-bank.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class AdminTalentBankComponent implements OnInit {
  candidates: Candidate[] = [];
  selectedCandidate: Candidate | null = null;

  constructor() {}

  ngOnInit() {
    // TODO: Load candidates from backend
    this.loadCandidates();
  }

  loadCandidates() {
    // TODO: Implement API call
  }

  viewCandidate(candidate: Candidate) {
    this.selectedCandidate = candidate;
  }

  handleStatusChange(event: Event, candidate: Candidate) {
    const selectElement = event.target as HTMLSelectElement;
    const newStatus = selectElement.value as 'new' | 'reviewing' | 'contacted' | 'rejected';
    this.updateStatus(candidate, newStatus);
  }

  updateStatus(candidate: Candidate, status: 'new' | 'reviewing' | 'contacted' | 'rejected') {
    // TODO: Implement API call
    console.log(`Updating status for ${candidate.name} to ${status}`);
  }

  downloadResume(resumeUrl: string) {
    // TODO: Implement download functionality
    console.log(`Downloading resume from ${resumeUrl}`);
  }
}

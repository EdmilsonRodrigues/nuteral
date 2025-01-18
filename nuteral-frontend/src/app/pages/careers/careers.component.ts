import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Requirement {
  description: string;
}

interface Benefit {
  description: string;
}

interface Job {
  id: number;
  title: string;
  location: string;
  type: string;
  department: string;
  description: string;
  requirements: Requirement[];
  benefits: Benefit[];
  postedDate: Date;
}

@Component({
  selector: 'app-careers',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.scss']
})
export class CareersComponent {
  jobListings: Job[] = [
    {
      id: 1,
      title: 'Nutricionista Especialista',
      location: 'São Paulo, SP',
      type: 'Tempo Integral',
      department: 'Desenvolvimento de Produtos',
      description: 'Buscamos um nutricionista especialista para integrar nossa equipe de desenvolvimento de produtos. O profissional será responsável por criar e aprimorar fórmulas nutricionais, garantindo a qualidade e eficácia de nossos produtos.',
      requirements: [
        { description: 'Graduação em Nutrição com registro ativo no CRN' },
        { description: 'Especialização em Nutrição Clínica ou área relacionada' },
        { description: 'Experiência mínima de 3 anos em desenvolvimento de produtos nutricionais' },
        { description: 'Conhecimento avançado em nutrição enteral e suplementação' },
        { description: 'Inglês avançado' }
      ],
      benefits: [
        { description: 'Plano de saúde e odontológico' },
        { description: 'Vale refeição e alimentação' },
        { description: 'Seguro de vida' },
        { description: 'Bônus anual por desempenho' },
        { description: 'Programa de desenvolvimento profissional' }
      ],
      postedDate: new Date('2025-01-10')
    },
    {
      id: 2,
      title: 'Analista de Controle de Qualidade',
      location: 'São Paulo, SP',
      type: 'Tempo Integral',
      department: 'Qualidade',
      description: 'Procuramos um analista de controle de qualidade para garantir a excelência de nossos produtos nutricionais. O profissional será responsável por realizar análises, documentar processos e assegurar o cumprimento das normas regulatórias.',
      requirements: [
        { description: 'Formação superior em Farmácia, Química ou áreas afins' },
        { description: 'Experiência em indústria alimentícia ou farmacêutica' },
        { description: 'Conhecimento em BPF e sistemas de gestão da qualidade' },
        { description: 'Experiência com análises físico-químicas e microbiológicas' },
        { description: 'Conhecimento intermediário em inglês' }
      ],
      benefits: [
        { description: 'Plano de saúde e odontológico' },
        { description: 'Vale refeição e alimentação' },
        { description: 'Seguro de vida' },
        { description: 'Participação nos lucros' },
        { description: 'Auxílio educação' }
      ],
      postedDate: new Date('2025-01-15')
    }
  ];

  formatDate(date: Date): string {
    return new Intl.DateTimeFormat('pt-BR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(date);
  }
}

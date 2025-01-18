import { Component } from '@angular/core';

interface Product {
  id: number;
  name: string;
  description: string;
  features: string[];
  imageUrl: string;
}

interface Category {
  id: number;
  title: string;
  products: Product[];
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  categories: Category[] = [
    {
      id: 1,
      title: 'Nutrição Enteral',
      products: [
        {
          id: 1,
          name: 'Fórmula Padrão',
          description: 'Nutrição completa e balanceada para uso enteral ou oral',
          features: [
            '1.0 - 1.5 kcal/mL',
            'Com ou sem fibras',
            'Normoproteica'
          ],
          imageUrl: 'assets/products/enteral-standard.jpg'
        },
        {
          id: 2,
          name: 'Fórmula Especializada',
          description: 'Desenvolvida para condições clínicas específicas',
          features: [
            'Diabetes',
            'Insuficiência Renal',
            'Cicatrização'
          ],
          imageUrl: 'assets/products/enteral-specialized.jpg'
        },
        {
          id: 3,
          name: 'Fórmula Pediátrica',
          description: 'Nutrição específica para necessidades pediátricas',
          features: [
            '0-12 anos',
            'Com DHA e ARA',
            'Adequada ao desenvolvimento'
          ],
          imageUrl: 'assets/products/enteral-pediatric.jpg'
        }
      ]
    },
    {
      id: 2,
      title: 'Suplementos',
      products: [
        {
          id: 4,
          name: 'Suplemento Proteico',
          description: 'Alto teor de proteínas de alta qualidade',
          features: [
            'Whey Protein Isolado',
            'BCAA',
            'Glutamina'
          ],
          imageUrl: 'assets/products/supplement-protein.jpg'
        },
        {
          id: 5,
          name: 'Suplemento Vitamínico',
          description: 'Complexo vitamínico completo',
          features: [
            'Vitaminas A-Z',
            'Minerais essenciais',
            'Antioxidantes'
          ],
          imageUrl: 'assets/products/supplement-vitamin.jpg'
        },
        {
          id: 6,
          name: 'Suplemento Especializado',
          description: 'Para necessidades específicas',
          features: [
            'Imunidade',
            'Saúde Óssea',
            'Energia'
          ],
          imageUrl: 'assets/products/supplement-specialized.jpg'
        }
      ]
    },
    {
      id: 3,
      title: 'Módulos Nutricionais',
      products: [
        {
          id: 7,
          name: 'Módulo Proteico',
          description: 'Proteína isolada para complementação',
          features: [
            '100% proteína',
            'Fácil dissolução',
            'Sem sabor'
          ],
          imageUrl: 'assets/products/module-protein.jpg'
        },
        {
          id: 8,
          name: 'Módulo de Carboidrato',
          description: 'Carboidrato em pó para complementação',
          features: [
            'Maltodextrina',
            'Rápida absorção',
            'Alta energia'
          ],
          imageUrl: 'assets/products/module-carb.jpg'
        },
        {
          id: 9,
          name: 'Módulo de Fibras',
          description: 'Mix de fibras solúveis e insolúveis',
          features: [
            'Prebióticos',
            'Regulação intestinal',
            'Saúde digestiva'
          ],
          imageUrl: 'assets/products/module-fiber.jpg'
        }
      ]
    }
  ];
}

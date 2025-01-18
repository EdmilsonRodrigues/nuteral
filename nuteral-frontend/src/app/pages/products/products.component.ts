import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Product {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
}

interface Category {
  id: string;
  title: string;
  backgroundClass: string;
  cardBackgroundClass: string;
  products: Product[];
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  categories: Category[] = [
    {
      id: 'most-popular',
      title: 'Most Popular Products',
      backgroundClass: 'bg-primary-200',
      cardBackgroundClass: 'bg-primary-50',
      products: Array(5).fill({
        id: 'product-1',
        name: 'Product Name',
        description: 'Brief product description here...',
        imageUrl: 'assets/placeholder.jpg'
      })
    },
    {
      id: 'enteral-diet',
      title: 'Enteral Diet',
      backgroundClass: 'bg-primary-300',
      cardBackgroundClass: 'bg-primary-50',
      products: Array(5).fill({
        id: 'enteral-1',
        name: 'Enteral Formula',
        description: 'Complete nutritional support...',
        imageUrl: 'assets/placeholder.jpg'
      })
    },
    {
      id: 'supplements',
      title: 'Supplements',
      backgroundClass: 'bg-primary-200',
      cardBackgroundClass: 'bg-primary-50',
      products: Array(5).fill({
        id: 'supplement-1',
        name: 'Supplement Name',
        description: 'Targeted nutritional support...',
        imageUrl: 'assets/placeholder.jpg'
      })
    },
    {
      id: 'nutrition-modules',
      title: 'Nutrition Modules',
      backgroundClass: 'bg-primary-300',
      cardBackgroundClass: 'bg-primary-50',
      products: Array(5).fill({
        id: 'module-1',
        name: 'Module Name',
        description: 'Specialized nutritional component...',
        imageUrl: 'assets/placeholder.jpg'
      })
    },
    {
      id: 'special-offers',
      title: 'Special Offers',
      backgroundClass: 'bg-primary-200',
      cardBackgroundClass: 'bg-primary-50',
      products: Array(5).fill({
        id: 'offer-1',
        name: 'Special Package',
        description: 'Limited time offer...',
        imageUrl: 'assets/placeholder.jpg'
      })
    }
  ];
}

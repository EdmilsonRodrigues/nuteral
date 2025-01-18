import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  features: string[];
  isActive: boolean;
}

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule]
})
export class AdminProductsComponent implements OnInit {
  productForm: FormGroup;
  products: Product[] = [];
  editingProduct: Product | null = null;

  constructor(private fb: FormBuilder) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      category: ['', Validators.required],
      description: ['', Validators.required],
      features: ['', Validators.required],
      isActive: [true]
    });
  }

  ngOnInit() {
    // TODO: Load products from backend
    this.loadProducts();
  }

  loadProducts() {
    // TODO: Implement API call
  }

  onSubmit() {
    if (this.productForm.valid) {
      if (this.editingProduct) {
        // Update existing product
        // TODO: Implement API call
      } else {
        // Create new product
        // TODO: Implement API call
      }
    }
  }

  editProduct(product: Product) {
    this.editingProduct = product;
    this.productForm.patchValue({
      name: product.name,
      category: product.category,
      description: product.description,
      features: product.features.join('\n'),
      isActive: product.isActive
    });
  }

  cancelEdit() {
    this.editingProduct = null;
    this.productForm.reset();
  }

  deleteProduct(id: number) {
    // TODO: Implement API call
    if (confirm('Tem certeza que deseja excluir este produto?')) {
      // Delete product
    }
  }
}

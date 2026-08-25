export interface Product {
  id: string;
  sku: string;
  name: string;
  unit: string;
  category: string;
  businessUnit: string;
  status: 'Active' | 'Inactive';
  createdAt: string;
  createdBy: string;
  updatedAt: string;
  updatedBy: string;

  // Form additional fields
  tax?: string;
  vat?: string;
  division?: string;
  segmentation?: string;
  productType?: string;
  indication?: string;
  function?: string;
  brand?: string;
  costElements?: string;
  method?: string;
  pathology?: string;
  skinLayer?: string;
  baseUnit?: string;
  convertedUnits?: any[];
  image?: string;
}

export interface ProductFilters {
  searchText: string;
  status: string;
}

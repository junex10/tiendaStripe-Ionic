import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HTTP_OPTIONS, URL_SERVICIOS } from 'src/app/shared/commons/config';
import { 
  GetStockByCategoryDTO,
  GetCategoryDTO,
  RegisterStockDTO,
  GetProductByProductDTO,
  UpdateStockDTO
} from 'src/app/dtos/dtos.module';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  store: string = `${URL_SERVICIOS}store/`

  constructor(
    private http: HttpClient
  ) { }

  public getProductsByCategory = (category: string) => 
    this.http.get<GetStockByCategoryDTO[]>(`${this.store}getStock/category/${category}`)
  
  public getCategorys = () => 
    this.http.get<GetCategoryDTO[]>(`${this.store}getCategory`)
  
  public registerStock = (form: RegisterStockDTO) => 
    this.http.post<RegisterStockDTO>(`${this.store}registerStock`, form, HTTP_OPTIONS)
  
  public newCategory = (form: GetCategoryDTO) =>
    this.http.post<GetCategoryDTO>(`${this.store}newCategory`, form, HTTP_OPTIONS)

  public getProductByProduct = (product: string) => 
    this.http.get<GetProductByProductDTO>(`${this.store}getStock/${product}`)

  public updateStock = (form: UpdateStockDTO) =>
    this.http.put(`${this.store}updateStock`, form, HTTP_OPTIONS)
}

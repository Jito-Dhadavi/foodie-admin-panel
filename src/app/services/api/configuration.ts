import { environment } from './../../../environments/environment';


export class ApiConfiguration {
  protected baseUrl: string = environment.apiUrl;
  readonly signup = 'signup';
  readonly socialLogin = 'social/login'
  readonly signin = 'signin'
  readonly users = 'users'
  readonly category = 'category'
  readonly products = 'products'
  readonly product = 'product'
  readonly orders = 'orders'
  readonly stats = 'stats'


}

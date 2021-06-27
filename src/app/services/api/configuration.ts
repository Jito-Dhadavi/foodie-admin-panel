
import { apiUrl } from '../../configuration/api';

export class ApiConfiguration {
  protected baseUrl: string = apiUrl;
  readonly signup = 'signup';
  readonly socialLogin = 'social/login'
  readonly signin = 'signin'
  readonly users = 'users'
  readonly category = 'category'
  readonly products = 'products'
  readonly product = 'product'
  readonly orders = 'orders'

}

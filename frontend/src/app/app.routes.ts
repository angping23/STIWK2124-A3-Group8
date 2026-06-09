import { Routes } from '@angular/router';

import { Login } from './components/login/login';
import { BookList } from './components/book-list/book-list';

export const routes: Routes = [

  { path: '', component: Login },

  { path: 'books', component: BookList }

];
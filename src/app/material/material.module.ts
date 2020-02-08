import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';

import { MatFormFieldModule } from '@angular/material/form-field';   
import {MatInputModule} from '@angular/material/input';  
import {MatTableModule} from '@angular/material/table';    
import {MatSortModule} from '@angular/material/sort'; 
import {MatPaginatorModule} from '@angular/material/paginator';  
import {MatIconModule} from '@angular/material/icon'; 

const modules = [
  MatToolbarModule,
  MatFormFieldModule,
  MatInputModule,
  MatTableModule,
  MatSortModule,
  MatPaginatorModule,
  MatIconModule,
];

@NgModule({
  imports: [...modules],
  exports: [...modules],
  declarations: []
})

export class MaterialModule { }

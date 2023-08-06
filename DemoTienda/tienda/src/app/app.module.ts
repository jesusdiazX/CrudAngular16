import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarArticulosComponent } from './articulos/listar-articulos/listar-articulos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { DataTablesModule } from "angular-datatables";
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalArticulosComponent } from './articulos/modal-articulos/modal-articulos.component';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { ModalDeleteComponent } from './Dialogs/modal-delete/modal-delete.component';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import { ListaClienteComponent } from './Clientes/lista-cliente/lista-cliente.component';
import { ModalClienteComponent } from './Clientes/modal-cliente/modal-cliente.component';
import { DeleteModalClienteComponent } from './Clientes/delete-modal-cliente/delete-modal-cliente.component';
import { LoginComponent } from './login/login.component';
import {MatCardModule} from '@angular/material/card';
import { TiendaComponent } from './tienda/tienda/tienda.component';
import { ArticuloClienteComponent } from './Crud/articulo-cliente/articulo-cliente.component';
import { TargetaproductoComponent } from './tienda/targetaproducto/targetaproducto.component';
import { DetalleComponent } from './tienda/detalle/detalle.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import { SucursalComponent } from './Crud/sucursal/sucursal.component';
import { ModalscursalupdatenewComponent } from './Crud/modalscursalupdatenew/modalscursalupdatenew.component';
import { ModalscursalDeleteComponent } from './Crud/modalscursal-delete/modalscursal-delete.component';
import {MatBadgeModule} from '@angular/material/badge';


@NgModule({
  declarations: [
    AppComponent,
ListarArticulosComponent,
    NavMenuComponent,
    ModalArticulosComponent,
    ModalDeleteComponent,
    ListaClienteComponent,
    ModalClienteComponent,
    DeleteModalClienteComponent,
    LoginComponent,
    TiendaComponent,
    ArticuloClienteComponent,
    TargetaproductoComponent,
    DetalleComponent,
    SucursalComponent,
    ModalscursalupdatenewComponent,
    ModalscursalDeleteComponent,
    
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DataTablesModule,
    HttpClientModule,
    MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, 
    MatPaginatorModule,
    MatDialogModule,
    FormsModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatIconModule,
    MatCardModule,
     MatSnackBarModule,
     MatToolbarModule,
     MatMenuModule,
     MatBadgeModule
     
 
    
  ],
  providers: [],
  bootstrap: [AppComponent],

  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class AppModule { }

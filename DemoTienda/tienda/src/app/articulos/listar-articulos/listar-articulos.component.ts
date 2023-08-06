import { Component, ViewChild,OnInit, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceArticuloService } from 'src/app/Servicios/service-articulo.service';
import { MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Articulo } from 'src/app/interface/Iarticulo';
import { ModalArticulosComponent } from '../modal-articulos/modal-articulos.component';
import { MatDialog } from '@angular/material/dialog';
import { ModalDeleteComponent } from 'src/app/Dialogs/modal-delete/modal-delete.component';

@Component({
  selector: 'app-listar-articulos',
  templateUrl: './listar-articulos.component.html',
  styleUrls: ['./listar-articulos.component.css']

})
export class ListarArticulosComponent implements AfterViewInit  {
  books: any;
  allEmployees: Observable<any[]> | undefined; 
  displayedColumns: string[] = ['articloId', 'codigo', 'descripcion', 'precio','Acciones'];
  dataSource = new MatTableDataSource<Articulo>();
  animal!: string;
  name!: string;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort: MatSort = new MatSort;
  
  constructor(private service:ServiceArticuloService,
    public dialog: MatDialog
    ) {}
  ArrayArticulo:any; 
  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.dataSource.data=this.ArrayArticulo;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  ngOnInit() {
     // this.ArrayArticulo=this.service.getAllEmployee().subscribe(res=>this.ArrayArticulo=res);

     this.dataSource.paginator = this.paginator;
     this.getArticulos();
  

  }

getArticulos(){
  this.service.getArticulos().subscribe({
    next:(rest)=>{
      console.log(rest);
      this.dataSource.data=rest;
      

    }
  });  

}
 

  onRowClicked(id:any, tipo:any): void {
    let type;
    let infoDet = [];
debugger

    let datos: any = {};
    switch (tipo) {
      case 0: type = 'Nuevo';
       this.openModal(id,type, []);
        break;
      case 1:
        type = "Detalle";

        this.openModal(id, type, []);
        break;

      case 2:
        type = 'Editar';

       this.openModal(id, type,[]);

        break;
      case 3:

        type = 'Eliminar';
        
        
          const dialogNRef = this.dialog.open(ModalDeleteComponent, {
           
            disableClose: true,
            data: { id: id,type: type}
          });
          dialogNRef.afterClosed().subscribe(result => {
      debugger
      console.log(result);
           // this.getGridData();
           this.getArticulos();
      
          });
        
   
        break;


    }
  }


  private openModal(id: number, tipo: string, info: Array<any>): void {

    const dialogNRef = this.dialog.open(ModalArticulosComponent, {
      width: '1140px',
      disableClose: true,
      data: { id: id,type: tipo, info: info }
    });
    dialogNRef.afterClosed().subscribe(result => {

     this.getArticulos();

    });
  }


  openDialog(): void {
    const dialogRef = this.dialog.open(ModalArticulosComponent, {
      data: {},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }


}




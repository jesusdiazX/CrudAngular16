import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DeleteModalClienteComponent } from 'src/app/Clientes/delete-modal-cliente/delete-modal-cliente.component';
import { ModalClienteComponent } from 'src/app/Clientes/modal-cliente/modal-cliente.component';
import { CrTiendaService } from 'src/app/Servicios/cr-tienda.service';
import { Tienda } from 'src/app/interface/cliente';
import { ModalscursalupdatenewComponent } from '../modalscursalupdatenew/modalscursalupdatenew.component';
import { ModalscursalDeleteComponent } from '../modalscursal-delete/modalscursal-delete.component';

@Component({
  selector: 'app-sucursal',
  templateUrl: './sucursal.component.html',
  styleUrls: ['./sucursal.component.css']
})
export class SucursalComponent implements OnInit {


  
  displayedColumns: string[] = ['tiendaid', 'sucursal', 'direccion','Acciones'];
  dataSource = new MatTableDataSource<Tienda>();
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort: MatSort = new MatSort;
  arrayclientes:Tienda[]=[];
  
  constructor(private service:CrTiendaService,
    public dialog: MatDialog
    ) {}

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;

    this.dataSource.sort = this.sort;
    this.dataSource.data=this.arrayclientes;
  }
  ngOnInit() {
    //this.ArrayArticulo=this.service.getAllEmployee().subscribe(res=>this.ArrayArticulo=res);

    this.dataSource.paginator = this.paginator;
    this.GerClientes();
 

 }
  GerClientes() {
    debugger
    this.service.getTienda().subscribe({
      next:(rest)=>{
        console.log(rest);
        this.dataSource.data=rest
        
  
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
      
      

      const dialogNRef = this.dialog.open(ModalscursalDeleteComponent, {
         
          disableClose: true,
          data: { id: id,type: type}
        });
        dialogNRef.afterClosed().subscribe(result => {
    debugger
    console.log(result);
         this.GerClientes();
    
        });
      
 
      break;


  }
}


private openModal(id: number, tipo: string, info: Array<any>): void {

  const dialogNRef = this.dialog.open(ModalscursalupdatenewComponent, {
    width: '1140px',
    disableClose: true,
    data: { id: id,type: tipo, info: info }
  });
  dialogNRef.afterClosed().subscribe(result => {

   this.GerClientes();

  });
}
}

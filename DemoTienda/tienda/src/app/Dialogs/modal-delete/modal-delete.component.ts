
import { Component, Inject ,OnInit} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DeleteModalClienteComponent } from 'src/app/Clientes/delete-modal-cliente/delete-modal-cliente.component';
import { ServiceArticuloService } from 'src/app/Servicios/service-articulo.service';
import { ServiceClienteService } from 'src/app/Servicios/service-cliente.service';
import { Articulo } from 'src/app/interface/Iarticulo';

@Component({
  selector: 'app-modal-delete',
  templateUrl: './modal-delete.component.html',
  styleUrls: ['./modal-delete.component.css']
})
export class ModalDeleteComponent implements OnInit {

  constructor (
    public _globalService:ServiceArticuloService,
    public dialogRef: MatDialogRef<DeleteModalClienteComponent>,
    @Inject(MAT_DIALOG_DATA) public sharedData: any,
   public snacBar: MatSnackBar
  ){}

  ngOnInit(): void {

    


  }

  eliminar(){
    debugger
    if(this.sharedData.type=="Eliminar"){

      this.dialogRef.close("Eliminar");
      this._globalService.DeleteArticulo( this.sharedData.id ).subscribe({
        next:(rest)=>{
          console.log(rest);
        this.alerta("Elarticulo fue eliminado.!!","OK");
          
  
        }
      });  
   
    }

  }

alerta(mdg:string,Acion:string){
  this.snacBar.open(mdg,Acion,{
    horizontalPosition:"center",
    verticalPosition:"top",
    duration:3000

  });

}
}

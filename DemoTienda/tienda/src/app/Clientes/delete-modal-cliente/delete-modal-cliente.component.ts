
import { Component, Inject ,OnInit} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ModalDeleteComponent } from 'src/app/Dialogs/modal-delete/modal-delete.component';
import { ServiceClienteService } from 'src/app/Servicios/service-cliente.service';
import { Cliente } from 'src/app/interface/cliente';


@Component({
  selector: 'app-delete-modal-cliente',
  templateUrl: './delete-modal-cliente.component.html',
  styleUrls: ['./delete-modal-cliente.component.css']
})
export class DeleteModalClienteComponent {

  constructor (
    public _globalService: ServiceClienteService,
    public dialogRef: MatDialogRef<DeleteModalClienteComponent>,
    @Inject(MAT_DIALOG_DATA) public sharedData:any,
   public snacBar: MatSnackBar
  ){}

  ngOnInit(): void {

    


  }

  eliminar(){
    
    if(this.sharedData.type=="Eliminar"){

      this.dialogRef.close("Eliminar");
      this._globalService.DeleteCliente( this.sharedData.id ).subscribe({
        next:(rest)=>{
          console.log(rest);
           this.alerta("El cliente fue eliminado.!!","OK");
          
  
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

import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CrTiendaService } from 'src/app/Servicios/cr-tienda.service';

@Component({
  selector: 'app-modalscursal-delete',
  templateUrl: './modalscursal-delete.component.html',
  styleUrls: ['./modalscursal-delete.component.css']
})
export class ModalscursalDeleteComponent  implements OnInit{
  constructor (
    public _globalService:CrTiendaService,
    public dialogRef: MatDialogRef<ModalscursalDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public sharedData: any,
   public snacBar: MatSnackBar
  ){}

  ngOnInit(): void {

    


  }

  eliminar(){
    debugger
    if(this.sharedData.type=="Eliminar"){

      this.dialogRef.close("Eliminar");
      this._globalService.DeleteTienda( this.sharedData.id ).subscribe({
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

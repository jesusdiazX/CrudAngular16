import { Component, Inject ,OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CrTiendaService } from 'src/app/Servicios/cr-tienda.service';
import { ServiceClienteService } from 'src/app/Servicios/service-cliente.service';
import { Cliente, Tienda } from 'src/app/interface/cliente';

@Component({
  selector: 'app-modalscursalupdatenew',
  templateUrl: './modalscursalupdatenew.component.html',
  styleUrls: ['./modalscursalupdatenew.component.css']
})
export class ModalscursalupdatenewComponent implements OnInit {

  form!:FormGroup;
  title!: string;
  constructor(
    public _globalService: CrTiendaService,
    private _fb: FormBuilder,
    public dialogRef: MatDialogRef<ModalscursalupdatenewComponent>,
    @Inject(MAT_DIALOG_DATA) public sharedData: any
  ) {


  }


  ngOnInit(): void {
    this.title =this.sharedData["type"];
 

    this.form = this._fb.group({

      
      tiendaId: [0],
      sucursal: ['', [Validators.required]],
      direccion: ['', [Validators.required]]
     


  });


  switch (this.title) {
    case 'Editar':

 this.EditarClientes();



        break;
    case 'Nuevo':


        break;

    case 'Detalle':

        break;

}



  }

  
  EditarClientes(){
    
 debugger
    
    
    this._globalService.getclienteId( this.sharedData.id ).subscribe({
      next:(rest)=>{
        console.log(rest);
        this.setValues(rest);
        

      }
    });  
 
    
    
    
    }


    setValues( cliente:Tienda){

debugger

      this.form.patchValue({
        tiendaId:cliente.tiendaId ,
        sucursal: cliente.sucursal,
        direccion:cliente.direccion
       
       
      
    
      })
      
    }
      save(Form: Cliente) {
    
      
    debugger
    
        let route: string;
        let Method:string;
        if (this.sharedData['type'] === 'Nuevo') {
           
             this._globalService.PostTienda( this.form.value).subscribe({
              next:(rest)=>{
                console.log(rest);
               
                this.dialogRef.close();
    
    
        
              }
            }); 
    
    
    
        } else {
          debugger
          
          this._globalService.PutTienda( this.form.value).subscribe({
            next:(rest)=>{
              console.log(rest);
             
              this.dialogRef.close();
              
    
      
            }
          }); 
    
        }
    
    
    }
}

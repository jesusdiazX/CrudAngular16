import { Component, Inject ,OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ServiceClienteService } from 'src/app/Servicios/service-cliente.service';
import { Cliente } from 'src/app/interface/cliente';

@Component({
  selector: 'app-modal-cliente',
  templateUrl: './modal-cliente.component.html',
  styleUrls: ['./modal-cliente.component.css']
})
export class ModalClienteComponent implements OnInit   {

  form!:FormGroup;
  title!: string;
  constructor(
    public _globalService: ServiceClienteService,
    private _fb: FormBuilder,
    public dialogRef: MatDialogRef<ModalClienteComponent>,
    @Inject(MAT_DIALOG_DATA) public sharedData: any
  ) {


  }


  ngOnInit(): void {
    this.title =this.sharedData["type"];
 

    this.form = this._fb.group({

      
      clienteId: [0],
      nombre: ['', [Validators.required]],
      apellidos: ['', [Validators.required]],
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


    setValues( cliente:Cliente){

debugger

      this.form.patchValue({
        clienteId:cliente.clienteId ,
        nombre: cliente.nombre,
        apellidos:cliente.apellidos,
        direccion: cliente.direccion
       
      
    
      })
      
    }
      save(Form: Cliente) {
    
      
    debugger
    
        let route: string;
        let Method:string;
        if (this.sharedData['type'] === 'Nuevo') {
           
             this._globalService.PostCliente( this.form.value).subscribe({
              next:(rest)=>{
                console.log(rest);
               
                this.dialogRef.close();
    
    
        
              }
            }); 
    
    
    
        } else {
          this._globalService.Putcliente( this.form.value).subscribe({
            next:(rest)=>{
              console.log(rest);
             
              this.dialogRef.close();
              
    
      
            }
          }); 
    
        }
    
    
    }

}

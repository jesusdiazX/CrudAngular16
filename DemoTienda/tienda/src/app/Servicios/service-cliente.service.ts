import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Cliente, Login } from '../interface/cliente';
import { environment } from 'src/environments/environment';
import { Rcliente } from '../interface/RelacionCliente';

@Injectable({
  providedIn: 'root'
})
export class ServiceClienteService {

  
  constructor(private http: HttpClient,
    public dialog: MatDialog 
    ){ }  
  
  
    getClientes(): Observable<Cliente[]> {  
      let headers = new HttpHeaders().set("Content-Type", "application/json");
      return this.http.get<Cliente[]>(environment.UrlApi + 'Clientes/GetCliente',{headers: headers });  
    } 
   
  
    getclienteId( ClienteId:number){
    
    let headers = new HttpHeaders().set("Content-Type", "application/json");
      return this.http.get<Cliente>(environment.UrlApi + 'Clientes/GetClienteid?ClienteId='+ClienteId,{headers: headers });
  
    }
  
    Putcliente( articulo:Cliente){
    
      let headers = new HttpHeaders().set("Content-Type", "application/json");
        return this.http.put<Cliente>(environment.UrlApi + 'Clientes/PutClientes',articulo,{headers: headers });
    
      }
  
      PostCliente( cliente:Cliente){
    
      let headers = new HttpHeaders().set("Content-Type", "application/json");
        return this.http.post<Cliente>(environment.UrlApi + 'clientes/PostCliente',cliente,{headers: headers });
    
      }
  
      DeleteCliente( ClienteId:number){
    
        let headers = new HttpHeaders().set("Content-Type", "application/json");
          return this.http.delete<Cliente>(environment.UrlApi + 'Clientes/DeleteClientes?ClienteId='+ClienteId,{headers: headers });
      
        }


        listaArticuloCliente(){
    
          let headers = new HttpHeaders().set("Content-Type", "application/json");
            return this.http.get<Rcliente[]>(environment.UrlApi + 'Clientes/RelacionCliente',{headers: headers });
        
          }
  
    
        getlogin( loguin:Login){
    
          let headers = new HttpHeaders().set("Content-Type", "application/json");
            return this.http.post<Cliente>(environment.UrlApi + 'Login/loginCliente',loguin,{headers: headers });
        
          }
  
  
}

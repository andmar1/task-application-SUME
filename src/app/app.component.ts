import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title:string = 'Tareas SUME';

  msg:string = '';

  employees = [
      {'name': 'Richard',position:'Diseño Cursos', email: 'richardshare70@gmail.com '},
      {'name': 'Francisco',position:'Redaccion contenido', email: 'green_park10@hotmail.com '},
      {'name': 'Antonio',position:'Actualizacion de UDA´s', email: 'antoniomaresmares@gmail.com'},
    ];   
    
    model:any = {};

    model2:any = {};

    //Dentro del componente html encontramos hidden, el cual nos oculta el formulario
    hideUpdate:boolean = true;  //Para que se oculte por defecto
    
    addEmployee(): void{
      this.employees.push( this.model ); //insertar datos en el arreglo y guardarlos en el 'model'
      this.msg = 'Campo agregado '
    }

    deleteEmployee(i:any ): void{
      var answer = confirm("Estas seguro de eliminar el registro")    ///nos regresa un booleano
      if (answer) {                     //por default nos regresa unn
        this.employees.splice(i, 1)//Splice es usado para elimar elemento del arreglo 
        this.msg = 'Campo Eliminado '

      }      
    }
    myValue:any;
    
    editEmployee(i:any): void{
      this.hideUpdate = false;
      this.model2.name = this.employees[i].name; 
      this.model2.position = this.employees[i].position;
      this.model2.email = this.employees[i].email; 
      this.myValue = i;
    }

    updateEmployee(): void{
      let i = this.myValue;

      for (let j= 0; j < this.employees.length; j++) {
        if (i == j) {
          this.employees[i] = this.model2;
          this.msg = 'Campo Actualizado'
          this.model2 = {};
        }
        
      }

    }
    //Funcion para ocultar el mensaje
    closeAlert():void{
      this.msg =''

    }
}

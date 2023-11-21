import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Employee} from './models/empModel';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})



export class AppComponent {

  deptno:number  = 10;

   a:any = 1;

  switch (a:any) {
  
      case 1:
          a = 'outstanding';
          break;
      case 2:
          a = 'excellent';
          break;
      case 3:
          a = 'good';
          break;
      case 4:
            a = 'average';
            break;
      default:
              ''
  }

  getValue(e:any){
   console.log(e)
  }

  public  empsArray:Employee1[]  =  [
    {  empno : 10256, ename:"Scott", grade:1 },
    {  empno : 10257, ename:"Smith", grade:2 },
    {  empno : 10258, ename:"Sandy", grade:3 },
    {  empno : 10259, ename:"Sam",  grade:4} ,
    {  empno : 10256, ename:"Scott", grade:1  },
    {  empno : 10257, ename:"Smith", grade:3 },
    {  empno : 10258, ename:"Sandy", grade:2  },
   
  ];	
  
  public  empsArray:Employee[]  =  [
    {  empno : 10256, ename:"Scott", job: "Manager", deptno : 10  },
    {  empno : 10257, ename:"Smith", job: "Lead", deptno : 20  },
    {  empno : 10258, ename:"Sandy", job: "Programmer", deptno : 30  },
    {  empno : 10259, ename:"Sam", job: "Tester", deptno : 40  } ,
    {  empno : 10256, ename:"Scott", job: "Manager", deptno : 10  },
    {  empno : 10257, ename:"Smith", job: "Lead", deptno : 20  },
    {  empno : 10258, ename:"Sandy", job: "Programmer", deptno : 30  },
    {  empno : 10259, ename:"Sam", job: "Tester", deptno : 40  } ,
    {  empno : 10256, ename:"Scott", job: "Manager", deptno : 10  },
    {  empno : 10257, ename:"Smith", job: "Lead", deptno : 20  },
    {  empno : 10258, ename:"Sandy", job: "Programmer", deptno : 30  },
    {  empno : 10259, ename:"Sam", job: "Tester", deptno : 40  } 
  ];	
}

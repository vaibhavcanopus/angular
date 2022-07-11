import { Component,OnInit,Input } from '@angular/core';
import { FormGroup,FormControl,FormBuilder,FormArray,Validators } from '@angular/forms';
import {ArrService} from './arr.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
 
  title = 'adddynamicinputfield';
  FormGroup!:FormGroup;
  totalRow: any;
  list:string[] = this.ss.getdata()

  constructor(private fb:FormBuilder,
    private ss:ArrService){}

  ngOnInit():void{
   
 
    this.FormGroup = this.fb.group(
      {
        itemRows:this.fb.array([this.initAddRow()])
      }
     
      
    )


  }

initAddRow():FormGroup{
  return this.fb.group({
    Name:["",[Validators.required,Validators.minLength(5)]]
  })
}
addNewRow(){
  const control = <FormArray>this.FormGroup.get('itemRows')
  let b = control.value 
  let c=b.length-1
  this.ss.setdata(b[c])
  // this.list.push(b[c])
  // console.log(this.list);
  control.push(this.initAddRow())
  // for(let i of this.FormGroup.get("itemRows")){
  //   console.log(i)

  // }



  

}
deleteRow(index:number){
  const control=<FormArray>this.FormGroup.get('itemRows')
    if(control != null){
      this.totalRow = control.value.length;
    }
    if(this.totalRow>1){
      control.removeAt(index)
      this.list.splice(index,1)
    }else{
      alert('one record is mandatory')
     
    }

}
get itemRows() {
  return this.FormGroup.controls["itemRows"] as FormArray;

}
// get item(){
//   return this.ss.getdata()
// }


}

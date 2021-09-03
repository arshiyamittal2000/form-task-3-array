import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { Component, OnInit, Input } from "@angular/core";
import { FormBuilder, NgForm, FormArray, FormGroup } from "@angular/forms";

@Component({
    selector: "array-form",
    template: `
        <ng-container [formGroup]="formGroup">
          <button type="button" (click)="addItem()">add</button>
          <button type="button" (click)="removeItem()">remove</button>
          <div formArrayname="formArray" *ngFor="let item of formArray.controls; let i = index;">
              <ng-container [formGroupname]="i"><br>
                  <input formControlname="name" type="text" placeholder="name"><br>
                  <input formControlname="phone" type="text" placeholder="phone">
              </ng-container>
          </div>
        </ng-container><br><br><br>
      `
  })
  export class ArrayFormComponent implements OnInit {
    @Input()
    name!: string;
    @Input()
    form!: NgForm; 
    formGroup!: FormGroup; 
    formArray!: FormArray;
  
    constructor(private formBuilder: FormBuilder) {}
  
    ngOnInit() {
      let array: any[] = [];
      this.formArray = this.formBuilder.array(array);
      this.formGroup = this.formBuilder.group({
        formArray: this.formArray
      });
      this.form.control.addControl(this.name, this.formArray);
   
    }
    initItem(): FormGroup {
      const fg = this.formBuilder.group({
        name: "",
        phone: ""
      });
      return fg;
    }
  
    addItem() {
      const formArray = <FormArray>this.formGroup.controls["formArray"];
      formArray.push(this.initItem());
    }
  
    removeItem(index: number) {
      const formArray = <FormArray>this.formGroup.controls["formArray"];
      formArray.removeAt(index);
    }
  }



import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AngularEditorConfig } from '@kolkov/angular-editor';
export interface PeriodicElement {
  title: string;
  condition: string;
  type: string;
  moke: string;
  model: string;
  price: string;
  year: string;
  driveType: string;
  transmission: string;
  fuelType: string;
  mileage: string;
  engineSize: string;
  color: string;
  doors: string;
  cylinders: string;
  vin: string;
  description: string;
}



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm!: FormGroup;
  formValues: any = {};
  showCard: boolean = false;
  submittedForms: PeriodicElement[] = [];
  editingIndex: number | null = null;

  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    minHeight: '20rem',
    maxHeight: '20rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    sanitize: false,
    toolbarPosition: 'top',
    defaultFontName: 'Arial',
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ]
  };
constructor(private fb:FormBuilder, private dialog: MatDialog){

  this.registerForm =  this.fb.group({
    title:['',Validators.required],
    condition:['',Validators.required],
    type:['',Validators.required],
    moke:['',Validators.required],
    model:['',Validators.required],
    price:['',Validators.required],
    year:['',Validators.required],
    driveType:['',Validators.required],
    transmission:['',Validators.required],
    fuelType:['',Validators.required],
    mileage:['',Validators.required],
    engineSize:['',Validators.required],
    cylinders:['',Validators.required],
    color:['',Validators.required],
    doors:['',Validators.required],
    vin:['',Validators.required],
    description:['',Validators.required]
  })
}

onSubmit() {
  if (this.registerForm.valid) {
    // Store the form values in the formValues object
    this.formValues = this.registerForm.value;

    // Create a copy of the form values to add to the submittedForms array
    const submittedForm = { ...this.formValues };

    // Add the submitted form to the array using this.submittedForms
    this.submittedForms.push(submittedForm);
    alert('The form has been submitted. Please scroll to the top of the page to edit or delete.');

    // Reset the form or do any other necessary actions
    this.registerForm.reset();
  }
}
editForm(index: number) {
  // Set the editingIndex to the index of the form being edited
  this.editingIndex = index;

  // Populate the form with the values of the form being edited
  this.registerForm.setValue(this.submittedForms[index]);

  alert('Edit data in the form below.');
}

deleteForm(index: number) {
  // Remove the form from the submittedForms array
  this.submittedForms.splice(index, 1);
  alert('Form has been deleted.');

}
resetForm() {
  this.registerForm.reset();
  this.formValues = {};
  this.showCard = false;
}
}







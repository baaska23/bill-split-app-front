import { Component, EventEmitter, Injector, Input, Output } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

export interface FormField {
    name: string;
    label: string;
    type?: 'text' | 'number' | 'password' | 'email' | 'date';
    required: boolean;
    options?: any[];
}

@Component({
    selector: 'app-base-form',
    templateUrl: 'base-form.component.html',
    styleUrls: ['base-form.style.scss']
})
export class BaseFormComponent {
    @Input() fields: FormField[] = [];
    @Input() model: any = {};
    @Input() header: string = '';
    @Input() submitLabel: string = 'Save';
    @Input() isLoading: boolean = false;

    @Output() submitForm = new EventEmitter<any>();

    form: FormGroup = new FormGroup({});

    ngOnInit() {
        this.buildForm();
    }

    buildForm() {
        const group: any = {};
        this.fields.forEach(field => {
            group[field.name] = new FormControl(
                this.model[field.name] ?? '',
                field.required ? Validators.required : []
            );
        });
        this.form = new FormGroup(group);
    }

    onSubmit() {
        if(this.form.valid) {
            this.submitForm.emit(this.form.value);
        } else {
            this.form.markAllAsTouched();
        }
    }
}
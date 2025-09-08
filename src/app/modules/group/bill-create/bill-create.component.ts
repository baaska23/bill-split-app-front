import { Component } from "@angular/core";
import { FormField } from "../../core/base-form/base-form.component";

@Component({
    selector: 'app-bill-create',
    templateUrl: 'bill-create.component.html',
})
export class BillCreateComponent {
    fields: FormField[] = [
        { name: 'name', label: 'Bill name', type: 'text', required: true},
        { name: 'description', label: 'Bill description', type: 'text', required: true},
        { name: 'members', label: 'Bill members', type: 'text', required: true},
        { name: 'amount', label: 'Bill amount', type: 'number', required: true},
    ]

    onSubmit() {
        alert("Bill created successfully")
    }
}
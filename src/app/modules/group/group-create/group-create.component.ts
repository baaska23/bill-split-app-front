import { Component } from "@angular/core";
import { FormField } from "../../core/base-form/base-form.component";

@Component({
    selector: 'app-group-create',
    templateUrl: 'group-create.component.html',
})
export class GroupCreateComponent {
    fields: FormField[] = [
        { name: 'name', label: 'Group name', type: 'text', required: true},
        { name: 'description', label: 'Group description', type: 'text', required: true},
        { name: 'members', label: 'Group members', type: 'text', required: true},
        { name: 'category', label: 'Group category', type: 'text', required: true},
    ]

    onSubmit(){
        alert('Group created successfully')
    }
}
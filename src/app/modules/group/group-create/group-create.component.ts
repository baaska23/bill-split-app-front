import { Component } from "@angular/core";
import { FormField } from "../../core/base-form/base-form.component";
import { GroupListService } from "../group-list/group-list.service";
import { group } from "@angular/animations";

@Component({
    selector: 'app-group-create',
    templateUrl: 'group-create.component.html',
})
export class GroupCreateComponent {
    constructor(
        private service: GroupListService
    ) {}
    fields: FormField[] = [
        { name: 'name', label: 'Group name', type: 'text', required: true},
        { name: 'description', label: 'Group description', type: 'text', required: true},
        // { name: 'members', label: 'Group members', type: 'text', required: true},
        { name: 'category', label: 'Group category', type: 'text', required: true},
    ]

    onSubmit(group: any){
        this.service.createGroup$(group).subscribe({
            next: response => alert('Group created successfully'),
            error: err => alert('Failed to create group')
        });
    }
}
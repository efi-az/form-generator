import { Injectable } from "@angular/core";
import { InputSubComponent } from "../sub-components/input-sub.component";
import { inputType } from "./form.types";

@Injectable({
    providedIn: 'root',
})
export class formSchema {

    private mappings = {
        "Input": InputSubComponent,
        // ...
    };

    getComponentType(typeName: inputType) {
        const type = this.mappings[typeName];
        return type || null;
    }
}
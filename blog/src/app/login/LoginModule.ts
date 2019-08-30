import { NgModule } from '@angular/core';
import { LoginComponent } from './LoginComponent';
import { CommonMaterialModules } from '../common/material/CommonMaterialModule';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginRouting } from './LoginRouting';
import { FormsModule } from '@angular/forms';


@NgModule({
    declarations: [ LoginComponent ],
    imports: [
        CommonModule,
        CommonMaterialModules,
        FormsModule,
        RouterModule.forChild(LoginRouting)
    ],
    exports: [],
    providers: [],
})
export class LoginModule {

}
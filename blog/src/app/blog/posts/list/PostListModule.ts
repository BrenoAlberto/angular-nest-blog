import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostListComponent } from './PostListComponent';
import { CommonMaterialModules } from 'src/app/common/material/CommonMaterialModule';

@NgModule({
    declarations: [
        PostListComponent
    ],
    imports: [
        CommonModule,
        CommonMaterialModules
    ],
    exports: [
        PostListComponent
    ],
    providers: [],
})

export class PostListModule {

}
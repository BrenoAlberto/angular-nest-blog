import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { PostsModule } from './posts/PostsModule';
import { ConfirmationDialogComponent } from './dialogs/ConfirmationDialogComponent';
import { CommonMaterialModules } from '../common/material/CommonMaterialModule';
import { RouterModule } from '@angular/router';
import { BlogRouting } from './BlogRouting';
import { BlogGuard } from './guards/BlogGuard';

@NgModule({
    declarations: [
        ConfirmationDialogComponent
    ],
    imports: [
        PostsModule,
        HttpClientModule,
        RouterModule.forChild(BlogRouting),
        CommonMaterialModules
    ],
    providers: [
        BlogGuard
    ],
    exports: [
        PostsModule,
        CommonMaterialModules
    ],
    entryComponents: [
        ConfirmationDialogComponent
    ]
})
export class BlogModule {}
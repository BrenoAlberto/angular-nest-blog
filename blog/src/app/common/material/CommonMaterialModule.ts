import { NgModule } from '@angular/core';
import {
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatProgressBarModule,
    MatIconModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatDialogModule,
    MatFormFieldModule
} from '@angular/material';

@NgModule({
    declarations: [],
    imports: [
        MatCardModule,
        MatTableModule,
        MatProgressBarModule,
        MatIconModule,
        MatTooltipModule,
        MatSnackBarModule,
        MatButtonModule,
        MatDialogModule,
        MatInputModule,
        MatFormFieldModule
    ],
    exports: [
        MatCardModule,
        MatTableModule,
        MatProgressBarModule,
        MatIconModule,
        MatTooltipModule,
        MatSnackBarModule,
        MatButtonModule,
        MatDialogModule,
        MatInputModule,
        MatFormFieldModule
    ],
    providers: [],
})
export class CommonMaterialModules { }
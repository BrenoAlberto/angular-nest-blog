import { NgModule } from '@angular/core';
import { AuthResource } from './services/AuthResource';
import { AuthService } from './services/AuthService';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [],
    imports: [
        HttpClientModule
    ],
    exports: [],
    providers: [
        AuthResource,
        AuthService
    ],
})
export class AuthModule {}
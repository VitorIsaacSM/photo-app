import { NgModule } from '@angular/core';
import { AppPhotosComponent } from './app-photos.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [AppPhotosComponent],
    imports: [ 
        CommonModule,
    ],
    exports: [ AppPhotosComponent ]
})
export class AppPhotosModule { }
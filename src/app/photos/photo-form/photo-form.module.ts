import { PhotosModule } from './../photos.module';
import { NgModule } from '@angular/core';
import { PhotoFormComponent } from './photo-form.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { VMessageModule } from '../../shared/components/vmessage/vmessage.module';
import { RouterModule } from '@angular/router';
import { ImmediateClickModule } from '../../shared/directives/immediate-click/immediate-click.module';
import { AppPhotosModule } from '../app-photos/app-photos.module';

@NgModule({
    declarations: [PhotoFormComponent],
    imports: [ 
        CommonModule,
        ReactiveFormsModule,
        VMessageModule,
        FormsModule,
        RouterModule,
        ImmediateClickModule,
        AppPhotosModule
    ]
})
export class PhotoFormModule { }
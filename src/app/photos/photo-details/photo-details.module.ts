import { AppPhotosComponent } from './../app-photos/app-photos.component';
import { NgModule } from "@angular/core";
import { PhotoDetailsComponent } from "./photo-details.component";
import { CommonModule } from "@angular/common";
import { PhotoCommentsComponent } from "./photo-comments/photo-comments.component";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { VMessageModule } from "../../shared/components/vmessage/vmessage.module";
import { PhotoOwnerOnlyDirective } from "./photo-owner-only/photo-owner-only.directive";
import { ShowIfLoggedModule } from "../../shared/directives/show-if-logged/show-if-logged.module";
import { AppPhotosModule } from '../app-photos/app-photos.module';
import { DarkenOnHoverModule } from 'src/app/shared/directives/darken-on-hover/darken-on-hover.module';

@NgModule({
    declarations: [
        PhotoDetailsComponent, 
        PhotoCommentsComponent,
        PhotoOwnerOnlyDirective
    ],
    exports: [
        PhotoDetailsComponent, 
        PhotoCommentsComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        VMessageModule,
        ShowIfLoggedModule,
        AppPhotosModule,
        DarkenOnHoverModule
    ]
})
export class PhotoDetailsModule { }
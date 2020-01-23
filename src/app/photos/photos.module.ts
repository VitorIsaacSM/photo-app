import { PhotoDetailsModule } from './photo-details/photo-details.module';
import { RouterModule } from '@angular/router';
import { CardModule } from './../shared/components/card/card.module';
import { SearchComponent } from './photo-list/search/search.component';
import { PhotosComponent } from './photo-list/photos/photos.component';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppPhotosComponent } from './app-photos/app-photos.component';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { CommonModule } from '@angular/common';
import { PhotoFormComponent } from './photo-form/photo-form.component';
import { filterByDescription } from './photo-list/filter.pipe';
import { lengthZero } from './photo-list/lengthZero.pipe';
import { LoadButtonComponent } from './photo-list/load-button/load-button.component';
import { PhotoFormModule } from './photo-form/photo-form.module';
import { AppPhotosModule } from './app-photos/app-photos.module';
import { DarkenOnHoverModule } from '../shared/directives/darken-on-hover/darken-on-hover.module';


@NgModule({
    declarations: [
        PhotoListComponent,
        filterByDescription,
        lengthZero,
        LoadButtonComponent,
        PhotosComponent,
        SearchComponent
    ],
    imports: [
        HttpClientModule,
        CommonModule,
        CardModule,
        RouterModule,
        PhotoDetailsModule,
        PhotoFormModule,
        AppPhotosModule,
        DarkenOnHoverModule
    ],
    exports: [
        PhotoListComponent
    ]
    
})
export class PhotosModule{

}
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { Photo } from '../../photo';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent  {

  @Input() photos: Photo[] = [];
  showImage = {};

  constructor() { }
}

import { environment } from './../../../environments/environment';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-photo',
  templateUrl: './app-photos.component.html',
  styleUrls: ['./app-photos.component.css']
})
export class AppPhotosComponent {

  private _url = '';

    @Input() description = '';
    @Output() eventFinishLoad = new EventEmitter<boolean>(false);
    
    @Input() set url(url: string)  {
        if(!url.startsWith('data')) {
            this._url = `${environment.ApiUrl}/imgs/` + url;
        } else {
            this._url = url;
        }
    }

    get url() {
        return this._url;
    }

}

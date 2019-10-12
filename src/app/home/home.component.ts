import { Component } from '@angular/core';

@Component({
    templateUrl: './home.component.html',
    styles: 
    [
        `@media (min-width:768px) {
           .container {
               max-width: 850px;
               margin-top: 12%;
           } 
        }

        @media (min-width:992px) {
            .container {
                max-width: 1160px;
                margin-top: 7%;
            } 
         }
        `
    ]
})
export class HomeComponent { }
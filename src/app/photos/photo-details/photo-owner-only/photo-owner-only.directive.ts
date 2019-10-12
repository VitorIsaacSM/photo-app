import { Directive, Renderer, OnInit } from "@angular/core";
import { Input } from "@angular/core";
import { ElementRef } from "@angular/core";
import { UserService } from "../../../core/user/user.service";
import { Photo } from '../../photo';

@Directive({
    selector: '[photoOwnerOnly]'
})
export class PhotoOwnerOnlyDirective implements OnInit { 

    @Input() ownedPhoto: Photo;
    
    constructor(
        private element: ElementRef<any>,
        private renderer: Renderer,
        private userService: UserService
    ) {}

    ngOnInit(): void {
        this.userService
            .getUser()
            .subscribe(user => {
                if(!user || user.id != this.ownedPhoto.userId) {
                    this.renderer.setElementStyle(
                        this.element.nativeElement, 'display', 'none'
                    );
                }
            });
    }
}
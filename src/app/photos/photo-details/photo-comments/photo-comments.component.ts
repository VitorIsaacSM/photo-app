import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Input } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { FormGroup } from "@angular/forms";
import { switchMap, tap } from 'rxjs/operators';
import { PhotoComment } from '../../photo-comment';
import { PhotoService } from '../../photo.service';
import { Photo } from '../../photo';
import { UserService } from 'src/app/core/user/user.service';

@Component({
    selector: 'ap-photo-comments',
    templateUrl: './photo-comments.component.html',
    styleUrls: ['photo-comments.css']
})
export class PhotoCommentsComponent implements OnInit { 

    @Input() photo: Photo;
    commentForm: FormGroup;
    
    comments$: Observable<PhotoComment[]>;

    constructor(
        private photoService: PhotoService,
        private formBuilder: FormBuilder,
        private userService: UserService
    ) {}

    ngOnInit(): void {
        this.comments$ = this.photoService.getComments(this.photo.id);
        this.commentForm = this.formBuilder.group({
            comment: ['', Validators.maxLength(300)]
        });
    }

    save() {
        const comment = this.commentForm.get('comment').value as string;
        this.comments$ = this.photoService
            .addComment(this.photo.id, comment)
            .pipe(switchMap(() => this.photoService.getComments(this.photo.id)))
            .pipe(tap(() => {
                this.commentForm.reset();
                this.photo.comments++;
            }));
    }

    get isLogged(): boolean {
        return this.userService.isLogged();
    }
}
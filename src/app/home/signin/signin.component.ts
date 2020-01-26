import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../core/auth/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { PlatformDetectorService } from '../../core/plataform-detector/platform-detector.service';
import { UserService } from 'src/app/core/user/user.service';
import { User } from 'src/app/core/user/user';

@Component({
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.css']
})
export class SignInComponent implements OnInit {
    
    fromUrl: string;
    loginForm: FormGroup;
    userList: User[] = [];
    @ViewChild('userNameInput') userNameInput: ElementRef<HTMLInputElement>;
    
    constructor(
        private formBuilder: FormBuilder,
        private authService: AuthService,
        private router: Router,
        private platformDetectorService: PlatformDetectorService,
        private activatedRoute: ActivatedRoute,
        private userService: UserService) { }

    ngOnInit(): void {
        this.activatedRoute
            .queryParams
            .subscribe(params => this.fromUrl = params['fromUrl']);

        this.loginForm = this.formBuilder.group({
            userName: ['', Validators.required],
            password: ['', Validators.required]
        });
        this.platformDetectorService.isPlatformBrowser()      
        
        this.userService.getAllUsers().subscribe((res: User[]) => this.userList = res);
    } 

    login() {
        const userName = this.loginForm.get('userName').value;
        const password = this.loginForm.get('password').value;

        this.authService
            .authenticate(userName, password)
            .subscribe(
                () => this.fromUrl 
                    ? this.router.navigateByUrl(this.fromUrl)
                    : this.router.navigate(['user', userName])
                ,
                err => {
                    console.log(err);
                    this.loginForm.reset();
                    this.platformDetectorService.isPlatformBrowser() && 
                        this.userNameInput.nativeElement.focus();
                    alert('Invalid user name or password');
                }
            );
    }

    openUser(name: string) {
        this.router.navigate(['user', name]);
    }
}
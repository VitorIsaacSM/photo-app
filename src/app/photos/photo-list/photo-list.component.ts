import { Component, OnInit, Input, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';

import { Photo } from '../photo';
import { PhotoService } from '../photo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { UserService } from 'src/app/core/user/user.service';
import { User } from 'src/app/core/user/user';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit, OnDestroy {
  

  photos: Photo[] = [];
  userName: string = '';
  filter: string = '';
  debounce: Subject<string> = new Subject<string>();
  hasMore: boolean = true;
  currentPage: number = 1;
  users: User[];
  showPesquisaUsers = false;

  constructor(
    private photoService: PhotoService,
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private router: Router) {}

  ngOnInit(): void{
    
    this.activatedRoute.params.subscribe(params => {
      this.userName = params.userName;
      this.photos = this.activatedRoute.snapshot.data['photos'];
    });

    document.addEventListener('click', () => {
      if (this.showPesquisaUsers) {
        this.showPesquisaUsers = false;
      }
    });

    this.debounce
    .pipe(debounceTime(300))
    .subscribe(filter => this.filter = filter);
  }


  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }

  load() {
    this.photoService
        .listFromUserPaginated(this.userName, ++this.currentPage)
        .subscribe(photos => {
            this.photos = this.photos.concat(photos);
            if(!photos.length) this.hasMore = false;
        });
  }

  onPesquisaUsuario(filtro: string) {
    this.userService.getAllUsers().subscribe((users: User[]) => {
      this.users = users.filter(u => u.name.includes(filtro) && u.name !== this.userService.getUserName());
      this.showPesquisaUsers = true;
    });
  }

  get isLogged(): boolean {
    return this.userService.isLogged();
  }

  redirectToUser(username: string) {
    this.router.navigate(['user', username]);
  }
}

import { Component } from '@angular/core';
import { FacebookLoginProvider, SocialAuthService } from '@abacritt/angularx-social-login';
import { ModalComponent } from './pages/modal/modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'via-lacteaq';

  user: any;
  loggedIn: any;

  constructor(private authService: SocialAuthService, public dialog: MatDialog) { }


  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });

  }

  openModal(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
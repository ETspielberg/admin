import {Component} from '@angular/core';
import {AuthentificationService} from './service/authentification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {

  constructor(private authentificationService: AuthentificationService) {
  }

  logout() {
    this.authentificationService.logout().subscribe(
      () => {
        window.location.href = '/lgoin';
      }
    );
  }

}

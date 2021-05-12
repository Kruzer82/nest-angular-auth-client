import { Injectable } from '@angular/core';
import { Socket as Base } from 'ngx-socket-io';
import { AuthService } from 'src/app/auth/service/auth.service';
import { environment } from '../../../environments/environment';

@Injectable()
export class MainSocket extends Base {
  constructor(authService: AuthService) {
    super({ url: environment.socket, options: {} });

    this.ioSocket.query = {
      ...this.ioSocket.query,
      accessToken: authService.getAccessToken(),
    };
  }
}

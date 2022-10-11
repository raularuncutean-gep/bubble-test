import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { IClient } from './client';
import { ClientService } from './client.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'bubble-test';
  clients!: IClient[];
  clientsFilter!: IClient[];
  errorMessage: string = '';
  str = 'abcdefghijklmnopqrstuvwxyz'.split('');
  sub!: Subscription;
  widthSideBar: number = 0;
  widthSideBar2: number = 0;

  widthMain: number = 100;

  widthBubble: number = 900;
  heightBubble: number = 600;

  constructor(private clientService: ClientService) {}

  ngOnInit() {
    this.sub = this.clientService.getClients().subscribe({
      next: (clients) => {
        clients.map((item) => {
          if (this.clients?.push()) {
            this.clients.push({
              clientId: item.clientId,
              clientName: item.clientName,
              bpcCode: item.bpcCode,
              bpcName: item.bpcName,
              img: `https://static-nexxeuat.gep.com/nexxe/assets/images/clients/logos/${item.bpcCode}.png`,
            });
          } else {
            this.clients = [
              {
                clientId: item.clientId,
                clientName: item.clientName,
                bpcCode: item.bpcCode,
                bpcName: item.bpcName,
                img: `https://static-nexxeuat.gep.com/nexxe/assets/images/clients/logos/${item.bpcCode}.png`,
              },
            ];
          }
          this.clientsFilter = this.clients.slice(0, 15);
        });
      },
      error: (err) => (this.errorMessage = err),
    });
  }

  filter(char: any) {
    this.clientsFilter = this.clients.filter(
      (client: IClient) =>
        client.clientName.toLocaleLowerCase().charAt(0) == char
    );
    console.log(this.clientsFilter);
  }

  test(client: IClient) {
    console.log(client);
    this.widthSideBar = 66;
    this.widthMain = 33;
    this.widthBubble = 400;
    this.heightBubble = 400;
  }

  openSideNav() {
    console.log('OpenSideNav');
    this.widthSideBar2=32;
  }
}

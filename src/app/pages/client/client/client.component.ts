import { Component, OnInit } from '@angular/core';
import { 
  GetUserListDTO
} from 'src/app/dtos/dtos.module';
import { ClientService } from 'src/app/services/index.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss'],
})
export class ClientComponent implements OnInit {

  clients: GetUserListDTO[] = [];

  constructor(
    private client: ClientService
  ) { }

  ngOnInit() {
    this.getClients();
  }

  getClients = () => {
    this.client.getClients()
      .subscribe(
        clients => {
          clients.map(val => {
            if (val.profile.role !== 'Administrador') {
              this.clients.push({
                id: val.id,
                email: val.email,
                role: val.profile.role
              })
            }
          })
        }
      )
  }
}

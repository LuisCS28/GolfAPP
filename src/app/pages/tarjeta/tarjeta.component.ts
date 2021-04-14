import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController, MenuController, ToastController } from '@ionic/angular';
import { FireauthService } from '../../services/fireauth.service';
import { FirestorageService } from '../../services/firestorage.service';
import { FirestoreService } from '../../services/firestore.service';
import { Tarjeta } from '../../models';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.scss'],
})
export class TarjetaComponent implements OnInit {

  newTarjeta : Tarjeta;
  loading: any;

  private path = 'Tarjeta/'

  

  constructor(public menuController: MenuController,
              public auth: FireauthService,
              public firestorageService:FirestorageService,
              public firestoreService: FirestoreService,
              public loadingController: LoadingController,
              public toastController: ToastController,
              public alertController: AlertController,
              ) {
 }
  ngOnInit() {}

  
  openMenu() { 
    console.log('se abrio esta joda');
    this.menuController.toggle('principal');
  }
 

 


  

 
  

  

}

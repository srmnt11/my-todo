import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddNewTaskPage } from '../add-new-task/add-new-task.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  todoList: {
    itemName: string;
    itemPriority: 'High' | 'Middle' | 'Low';
    itemCategory: string;
    itemDueDate: string;}[] = [];

  today : number = Date.now()

  constructor(public modalCtrl:ModalController) {}

  async addTask(){
      const modal = await this.modalCtrl.create({
        component: AddNewTaskPage,
      });

      modal.onDidDismiss().then((newTaskObj) => {
        if (newTaskObj.data) {
          this.todoList.push(newTaskObj.data);
        }
      });
  
      return await modal.present();
    }

    delete(index: any){
      this.todoList.splice(index,1)
    }
  }

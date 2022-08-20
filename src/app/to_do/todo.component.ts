import {Comment} from "@angular/compiler";
import {Component} from "@angular/core";
import {Task_content} from "../interfaces/box-one.interfaces";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.coponent.css']
})
export class todoComponent {
  dataTodo : Task_content[] = [
    {task: 'Task1', content: 'For those of you taking the BST practice exam'},
    {task: 'Task2', content: 'please wait for the exam room to update the exam questions and will notify you in the following emai'},
    {task: 'Task3', content: 'For those of you taking the BST practice exam'},
    {task: 'Task4', content: 'please wait for the exam room to update the exam questions and will notify you in the following emai'},
    {task: 'Task5', content: 'For those of you taking the BST practice exam'},
    {task: 'Task6', content: 'please wait for the exam room to update the exam questions and will notify you in the following emai'},
    {task: 'Task7', content: 'For those of you taking the BST practice exam'},
    {task: 'Task8', content: 'please wait for the exam room to update the exam questions and will notify you in the following emai'},
    {task: 'Task9', content: 'For those of you taking the BST practice exam'},
    {task: 'Task10', content: 'please wait for the exam room to update the exam questions and will notify you in the following emai'},
    {task: 'Task11', content: 'For those of you taking the BST practice exam'},
    {task: 'Task12', content: 'please wait for the exam room to update the exam questions and will notify you in the following emai'},
  ];
}

import {Component} from "@angular/core";
import {Task_content} from "../interfaces/box-one.interfaces";

@Component({
  selector: 'app-done',
  templateUrl: './done.componet.html',
  styleUrls: ['./done.componet.css']
})
export class doneComponent {
  datadone = [
    {task: 'Task1', content: 'please wait for the exam room to update the exam questions and will notify you in the following emai'},
    {task: 'Task2', content: 'For those of you taking the BST practice exam'},
    {task: 'Task3', content: 'please wait for the exam room to update the exam questions and will notify you in the following emai'},
    {task: 'Task4', content: 'For those of you taking the BST practice exam'},
    {task: 'Task5', content: 'please wait for the exam room to update the exam questions and will notify you in the following emai'},
    {task: 'Task6', content: 'For those of you taking the BST practice exam'},
    {task: 'Task7', content: 'please wait for the exam room to update the exam questions and will notify you in the following emai'},
    {task: 'Task8', content: 'For those of you taking the BST practice exam'},
    {task: 'Task9', content: 'please wait for the exam room to update the exam questions and will notify you in the following emai'},
    {task: 'Task10', content: 'For those of you taking the BST practice exam'},
    {task: 'Task11', content: 'please wait for the exam room to update the exam questions and will notify you in the following emai'},
    {task: 'Task12', content: 'For those of you taking the BST practice exam'}
  ];
}

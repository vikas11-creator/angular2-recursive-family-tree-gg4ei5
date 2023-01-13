import {Component} from '@angular/core';

/**
 * @title Basic Inputs
 */
@Component({
  selector: 'input-overview-example',
  styleUrls: ['input-overview-example.css'],
  templateUrl: 'input-overview-example.html',
})
export class InputOverviewExample {
  public list: Array<TreeNodeModel> = [
    {
      title: 'Root',
      name: 'Corey Clayton',
      children: [
        {title: 'Root',
        name: 'Corey Clayton',children: []},
        {title: 'Root',
        name: 'Corey Clayton',children: [{title: 'Root',
        name: 'Corey Clayton',children: []}]},
      ]
    }
  ]

  ngOnInit() { } 
  
}
export class TreeNodeModel {
  name;
  title;
  children: Array<TreeNodeModel>
}
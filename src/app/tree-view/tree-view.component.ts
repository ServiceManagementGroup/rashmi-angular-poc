import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';

@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.css']
})
export class TreeViewComponent implements OnInit {  
  
  constructor() { }  
  data2: TreeNode[] = [];
  selectedNode!: TreeNode;  

  ngOnInit(): void {  
    this.data2 = [{  
      label: 'Corporate',  
      expanded: true,  
      children: [{  
        label: 'Country', 
        expanded: true,
        children:[{
          label: 'Region',
          expanded: true,
          children:[{
            label: 'Owner', 
            expanded: true, 
            children:[{
              label: 'Unit',
              expanded: true 
            }] 
          }]  
        }] 
      }]  
    }];
  }  
}  
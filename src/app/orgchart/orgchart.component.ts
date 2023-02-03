import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api'; 

@Component({
  selector: 'app-orgchart',
  templateUrl: './orgchart.component.html',
  styleUrls: ['./orgchart.component.css']
})
export class OrgchartComponent implements OnInit {  
  
  constructor() { }  
  data1: TreeNode[] = [];
  selectedNode!: TreeNode;  

  ngOnInit(): void {  
    this.data1 = [{  
      label: 'Tropical Smoothie CSI',  
      expanded: true,  
      children: [  
          {  
              label: 'USA',   
              expanded: true,    
              children:[{  
                  label: 'East Coast',   
              },  
              {  
                  label: 'MidWest',   
              }],  
          },  
          {  
              label: 'Canada',    
              expanded: true,  
              children:[{  
                  label: 'Central',  
              }]  
          },  
          {  
              label: 'India',  
              expanded: true,   
              children:[{  
                  label: 'South',  
                  expanded: true,  
                  children:[{  
                      label: 'Allepey',   
                  },  
                  {  
                      label: 'Coorg',   
                  },  
                  {  
                      label: 'Vizag',  
                  }]  
              },  
              {  
                  label: 'North',  
              },  
              {  
                  label: 'North-East',  
              }]  
          }  
      ]  
    }];
  }  
}  
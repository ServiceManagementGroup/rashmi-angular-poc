import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {OrganizationChartModule} from 'primeng/organizationchart';  
import { HttpClientModule } from "@angular/common/http";  
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import {PanelMenuModule} from 'primeng/panelmenu';
import {PanelModule} from 'primeng/panel';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {TabViewModule} from 'primeng/tabview';
import { ButtonModule } from "primeng/button";
import {CardModule} from 'primeng/card';
import {FileUploadModule} from 'primeng/fileupload';
import {ToolbarModule} from 'primeng/toolbar';
import { SplitButtonModule } from 'primeng/splitbutton';
import {TabMenuModule} from 'primeng/tabmenu';
import {DialogModule} from 'primeng/dialog';
import {CheckboxModule} from 'primeng/checkbox';
import {TableModule} from 'primeng/table';
import {RatingModule} from 'primeng/rating';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrgchartComponent } from './orgchart/orgchart.component';
import { TreeViewComponent } from './tree-view/tree-view.component';
import { AttributeViewComponent } from './attribute-view/attribute-view.component';
import { ProductService } from './attribute-view/productservice';

@NgModule({
  declarations: [
    AppComponent,
    OrgchartComponent,
    TreeViewComponent,
    AttributeViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    OrganizationChartModule,
    PanelMenuModule,
    PanelModule,
    OverlayPanelModule,
    TabViewModule,
    ButtonModule,
    CardModule,
    FileUploadModule,
    ToolbarModule,
    SplitButtonModule,
    TabMenuModule,
    DialogModule,
    CheckboxModule,
    TableModule,
    RatingModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }

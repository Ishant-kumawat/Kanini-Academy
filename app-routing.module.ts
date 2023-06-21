import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AllComponent } from './components/all/all.component';
import { BooksandPdfsComponent } from './components/booksand-pdfs/booksand-pdfs.component';
import { TemplatesComponent } from './components/templates/templates.component';
import { PluginsComponent } from './components/plugins/plugins.component';
import { DownloadpageComponent } from './components/downloadpage/downloadpage.component';

const routes: Routes = [
   { path: 'downloadpage', component:DownloadpageComponent },{
  path:'',
    component:NavbarComponent,
   
    children:[
      {
        path:'all',
        component:AllComponent
      },
      {
        path:'booksand-pdfs',
        component:BooksandPdfsComponent
      },
     
       {
           path:'templates',
           component:TemplatesComponent
      },
      {
        path:'plugins',
        component:PluginsComponent

      }
      
    ]

}]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

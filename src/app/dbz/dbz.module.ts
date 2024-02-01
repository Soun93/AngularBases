import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page.component';
import { CharactersDbzComponent } from './components/dbz-characters/dbz-characters.module';
import { DbzFormModule } from './components/dbz-form/dbz-form.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MainPageComponent,
    CharactersDbzComponent,
    DbzFormModule
  ],
  exports: [
    MainPageComponent
  ],
  imports: [
    FormsModule,
    CommonModule
  ]
})
export class DbzModule { }

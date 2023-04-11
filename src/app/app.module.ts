import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ParentComponent } from './componets/parent/parent.component';
import { ChildComponent } from './componets/child/child.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

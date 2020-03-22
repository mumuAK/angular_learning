import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ScrollableTabComponent } from './component/scrollable-tab/scrollable-tab.component';

@NgModule({
  //声明模块组件
  declarations: [
    AppComponent,
    ScrollableTabComponent
  ],
  //声明模块依赖
  imports: [
    BrowserModule
  ],
  providers: [],
  //引导组件
  bootstrap: [AppComponent]
})
export class AppModule { }

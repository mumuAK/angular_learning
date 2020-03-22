import { Component } from '@angular/core';
import { TransitiveCompileNgModuleMetadata } from '@angular/compiler';


//装饰器（类似于函数） 修饰下面的类
@Component({
  selector: 'app-root',   //组件内容在index.html中插入的地方
  templateUrl: './app.component.html',   //组件模板路径
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
}

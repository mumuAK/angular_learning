import { Component } from '@angular/core';
import { TransitiveCompileNgModuleMetadata } from '@angular/compiler';

interface TopMenu {
  title: string;
  link?: string; //代表可选
}

//装饰器（类似于函数） 修饰下面的类
@Component({
  selector: 'app-root',   //组件内容在index.html中插入的地方
  templateUrl: './app.component.html',   //组件模板路径
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pinduoduo'; //用于修改模板中数据，数据绑定
  menus: TopMenu[] = [{
    title: '热门',
    link: ''
  },
  {
    title: '男装',
    link: ''
  },
  {
    title: '百货',
    link: ''
  },
  {
    title: '运动',
    link: ''
  },
  {
    title: '手机',
    link: ''
  },
  {
    title: '家庭',
    link: ''
  },
  {
    title: '食品',
    link: ''
  },
  {
    title: '电器',
    link: ''
  },
  {
    title: '汽车',
    link: ''
  },
  {
    title: '水果',
    link: ''
  },
  {
    title: '电脑',
    link: ''
  },
  {
    title: '食品',
    link: ''
  },
  {
    title: '电器',
    link: ''
  },
  {
    title: '汽车',
    link: ''
  },
  {
    title: '水果',
    link: ''
  },
  {
    title: '电脑',
    link: ''
  },];
}

import { Component, OnInit } from '@angular/core';

interface TopMenu {
  title: string;
  link?: string; //代表可选
}

@Component({
  selector: 'app-scrollable-tab',
  templateUrl: './scrollable-tab.component.html',
  styleUrls: ['./scrollable-tab.component.css']
})
export class ScrollableTabComponent implements OnInit {

  selectedindex = -1; //用于修改模板中数据，数据绑定
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

  constructor() { }

  ngOnInit() {
  }

}

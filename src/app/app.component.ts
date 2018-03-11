 /** angular核心? */
import { Component } from '@angular/core';
/**
@Component 是个装饰器函数，用于为该组件指定 Angular 所需的元数据。
CLI 自动生成了三个元数据属性：
selector— 组件的选择器（CSS 元素选择器）
templateUrl— 组件模板文件的位置。
styleUrls— 组件私有 CSS 样式表文件的位置。
有點類似c#的conifg..
*/
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   /** 標題用 */
  title = 'Tour of Heroes';
   /** 測試用 */
  test = '綁定測試用';
  /**num1 */
  num1=1;
  /**num2 */
  num2=2;
}

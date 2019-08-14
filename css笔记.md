## CSS的四种引入方式
1. 内联style属性
2. style标签
3. 外部文件 css link
4. @import url(./b.css);
#### 消除float的bug：
1. 子元素加float：left；
2. 父亲加clearfix
3. clearfix{content: "";
    display: block;
    clear: both;}
### div高度（块级元素）由内部文档流高度总和决定
文档流：文档内元素的流动方向
内联元素从左往右流，遇到阻碍换行
块级元素从上往下，每个块占一行
span 内有单词的话不会被打断 word-break:break-all;break-word;
display:inline-block;//尽量不要用
### 内联元素高度由
不接受宽高
### sapn建议行高，不同字体建议高度不一样
苹方建议高度为1.4倍
字体大小为字体中字体最高的地方到字体最低的高度距离
span行高很难确定
多个span在一起，行高由最高的决定
文字会跟基线对齐
可以用line-height控制高度
### position:fixed 脱离文档流

fixed定位的
### 父盒子加height，宽度100%加padding两大bug
解决方法：多嵌套一个div，给子div加padding
### position: absolute 脱离文档流，寻找父元素第一个relative相对浮动
 ### vertical-align:top;
 ### 伪元素 ::before,::after,
 div 的两个不显示的元素 ，有内容也不可被选中
 ### 内联元素居中，在父元素加center
 ```html
 <p style="text0-align:center;">
    <a>
</p>
 ```

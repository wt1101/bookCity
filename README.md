项目介绍

读书在小米 创作无极限 —— 这个口号一直是起点众多玄幻、魔幻、武侠、军文小说作者的创作目标，严谨的写作态度，锲而不舍的求新求变，与书友的直接沟通交流修改，从而起点中文网拥有国内很多具有一流水平的原创作品，使书友得以在第一时间阅读到作者连载的好书佳作。

技术栈

gulp + require + handlebars + ajax + sass + flex + canvas + Swiper

项目运行

    git clone git@github.com:wt1101/bookCity.git
    npm install --save-dev
    gulp devserver
目录结构

bookCity
    |——mock
    |    |——login
    |    |    |---login.json    //用户数据
    |    |---home.json    //首页数据
    |    |---recommend1.json    //加载更多
    |    |---recommend2.json    //加载更多
    |    |---recommend3.json    //加载更多
    |    |---search.json    //搜索结果
    |    |---searchKey.json    //搜索关键字
    |    |——city
    |    |    |---352876.json    //老九门数据
    |    |    |---chapter-list.json    //目录
    |    |    |---data1.json    //第一章的jsonp地址
    |    |    |---data2.json    //第二章的jsonp地址
    |    |    |---data3.json    //第三章的jsonp地址
    |    |    |---data4.json    //第四章的jsonp地址
    |    |-index.js            //数据接口
    |——pic
         |--1.png
         |--2.png
         |--3.png
         |--4.png
         |--5.png
         |--6.png
    |——bulid
    |    |——login
    |    |    |——login.html //登录页
    |    |——text
    |    |    |——text.html //文章阅读页
    |    |——seach-book
    |    |    |——search.html //搜索页
    |    |——detail
    |    |    |——detail.html //详情页
    |    |    |——menu.html //目录页
    |    |——js
    |    |    |——page
    |    |    |    |-index.js   //搜索页
    |    |    |    |-temp.js   //handlebars模板编译公共方法
    |    |    |——love
    |    |    |    |-detail.js   //详情页
    |    |    |    |-getUrl.js  //获取地址栏参数
    |    |    |    |-index.js   //首页
    |    |    |    |-menu.js   //目录页
    |    |    |    |-login.js   //登录页
    |    |    |    |-text.js   //文章阅读页
    |    |    |——lib
    |    |    |    |-require.js
    |    |    |    |-handlebars.js
    |    |    |    |-zepto.js
    |    |    |    |-jquery.js
    |    |    |    |-jquery.lazyload.js  //图片懒加载
    |    |    |    |-jquery.base64.js //解码阅读文章 
    |    |    |    |-require.text.js
    |    |    |——main.js      //require配置文件
    |    |——css
    |    |    |-index.css
    |    |    |-common.css
    |    |    |-detail.css
    |    |    |-text.css
    |    |    |-menu.css
    |    |    |-search.css
    |    |——template
    |    |    |-index.html      //首页模板
    |    |    |-bolck-list.html //本周最火和限时免费
    |    |    |-dl-list.html //女生最爱男生最爱加载更多
    |    |    |-recommend-list.html //重磅推荐模板
    |    |    |-detail.html //详情页模板
    |    |-index.html           //首页
    |-gulpfile.js
部分截图

![image]('./pic/1.png')
![image]('./pic/2.png')
![image]('./pic/3.png')
![image]('./pic/4.png')
![image]('./pic/5.png')
![image]('./pic/6.png')

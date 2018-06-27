var homeData = require('./home');
var page1 = require('./recommend1');
var page2 = require('./recommend2');
var page3 = require('./recommend3');
var searchkey = require('./searchKey');
var searchResult = require('./search');
var detail = require('./city/352876');
var chapter = require('./city/chapter-list');
var reader1 = require('./city/data1');
var reader2 = require('./city/data2');
var reader3 = require('./city/data3');
var reader4 = require('./city/data4');
var data = {
    '/api/index': homeData,
    '/api/loadmore?pagenum=1&limit=20': page1,
    '/api/loadmore?pagenum=2&limit=20': page2,
    '/api/loadmore?pagenum=3&limit=20': page3,
    '/api/bookself': page1,
    '/api/searchKey': searchkey,
    '/api/detail?id=352876': detail,
    '/api/chapter?id=352876': chapter,
    '/api/reader?chapterNum=1': reader1,
    '/api/reader?chapterNum=2': reader2,
    '/api/reader?chapterNum=3': reader3,
    '/api/reader?chapterNum=4': reader4
};

module.exports = function(url) {
    if (/\/api\/result/.test(url)) {
        var n = url.split('?')[1];
        var val = decodeURIComponent(n.split('=')[1]);
        var reg = new RegExp(val, 'g');
        var obj = {
            mes: "暂无数据",
            cont: []
        };
        var newarr = searchResult.items.filter(function(v, i) {
            v.authors = v.role[0][1];
            v.summary = v.intro;
            return reg.test(v.title) || reg.test(v.intro) || reg.test(v.role[0][1]);
        });
        if (newarr.length) {
            obj.mes = "success";
            obj.cont = newarr;
        }
        return obj;
    };
    return data[url];
};
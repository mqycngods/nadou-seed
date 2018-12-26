var request = require('../../support').request;



exports.getList = function(data) {
    var data = {
        "data": [{
            "category_name_keyword": "新闻,影视综艺,欧美,",
            "tvId": null,
            "publishTime": 1516977788314,
            "tag_keyword": "",
            "coverImage_urlHq_keyword": "http://mp1.qiyipic.com/image/20180126/93/fa/h_1156246411_h_601_480_270.jpg",
            "type": "图文",
            "deleted": "在线",
            "ip_pool": "热点",
            "channel_id": "八卦,",
            "ip_filmType": "剪辑列表",
            "base_displayName_keyword": "这部新片看过的人不多，但每个看过的观众都赞不绝口",
            "newsId": 630577670570,
            "operate": [{ "showName": "热点", "url": "./operate.ftl?path=iphots&pageId=52&newsId=630577670570" }, { "showName": "操作", "url": "./operate.ftl?path=iphots&pageId=52&newsId=630577670570" }],
            "original_siteName_keyword": "eastday"
        }, {
            "category_name_keyword": "",
            "tvId": null,
            "publishTime": 1516976900176,
            "tag_keyword": "集邮,",
            "coverImage_urlHq_keyword": "http://mp2.qiyipic.com/image/20180126/95/3a/h_1156241176_h_601_480_270.jpg",
            "type": "图文",
            "deleted": "在线",
            "ip_pool": "热点",
            "channel_id": null,
            "ip_filmType": "花絮",
            "base_displayName_keyword": "二月《集邮》抢鲜看",
            "newsId": 630566460570,
            "operate": [{ "showName": "热点", "url": "./operate.ftl?path=iphots&pageId=52&newsId=630566460570" }],
            "original_siteName_keyword": "jinritoutiaoapp"
        }, {
            "category_name_keyword": "",
            "tvId": null,
            "publishTime": 1516845956206,
            "tag_keyword": "千山暮雪,颖儿,",
            "coverImage_urlHq_keyword": "http://mp0.qiyipic.com/image/20180125/ed/95/h_1155478852_h_601_480_270.jpg",
            "type": "图集",
            "deleted": "在线",
            "ip_pool": "热点",
            "channel_id": null,
            "ip_filmType": "影视原声",
            "base_displayName_keyword": "还记得颖儿《千山暮雪》的造型吗？",
            "newsId": 626891890570,
            "operate": [{ "showName": "热点", "url": "./operate.ftl?path=iphots&pageId=52&newsId=626891890570" }],
            "original_siteName_keyword": "百家号"
        }, {
            "category_name_keyword": "",
            "tvId": null,
            "publishTime": 1516977760304,
            "tag_keyword": "帕萨特,朗逸,",
            "coverImage_urlHq_keyword": "http://mp3.qiyipic.com/image/20180126/b3/6c/h_1156246378_h_601_480_270.jpg",
            "type": "图文",
            "deleted": "在线",
            "ip_pool": "热点",
            "channel_id": null,
            "ip_filmType": "剪辑列表",
            "base_displayName_keyword": "“最美大众车”继任者进入国内，朗逸变大，帕萨特换用MQB平台",
            "newsId": 630577370570,
            "operate": [{ "showName": "热点", "url": "./operate.ftl?path=iphots&pageId=52&newsId=630577370570" }],
            "original_siteName_keyword": "jinritoutiaoapp"
        }, {
            "category_name_keyword": "汽车,车模,",
            "tvId": 1367993609,
            "publishTime": 1489215444346,
            "tag_keyword": "美女,兽兽,",
            "coverImage_urlHq_keyword": "http://u1.qiyipic.com/image/20140422/89/c2/10/uv_567344316_m_601_m1_480_270.jpg",
            "type": "视频",
            "deleted": "在线",
            "ip_pool": "热点",
            "channel_id": "美女,方向盘,",
            "ip_filmType": "预告片",
            "base_displayName_keyword": "车模兽兽“重出江湖”",
            "newsId": 150426420570,
            "operate": [{ "showName": "热点", "url": "./operate.ftl?path=iphots&pageId=52&newsId=150426420570" }],
            "original_siteName_keyword": "qiyi"
        }]
    }
    return data;
};


exports.savePage = function(data) {
    var data = {
        "code": 200,
        "more": false,
        "totalNum": 1,
        "total": 1150
    }
    return data;
};




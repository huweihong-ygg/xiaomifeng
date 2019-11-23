#vue_server_000/ecake.sql
#1:我创建指令
#2:你执行
#进入xz库
SET NAMES UTF8;
DROP DATABASE IF EXISTS ecake;
CREATE DATABASE ecake CHARSET=UTF8;
USE ecake;

-- #用户信息
CREATE TABLE ecake_user(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(32),
  upwd VARCHAR(32),
  email VARCHAR(64),
  phone VARCHAR(16)               
);
-- 首页轮播表
DROP TABLE IF EXISTS ecake_index_carousel;
CREATE TABLE ecake_index_carousel(
  cid int(11)  PRIMARY KEY,
  img varchar(128) DEFAULT NULL,
  title varchar(64) DEFAULT NULL,
  href varchar(128) DEFAULT NULL
);

DROP TABLE IF EXISTS ecake_index;
CREATE TABLE ecake_index(
pid int(11) PRIMARY KEY AUTO_INCREMENT,
pname VARCHAR(24) DEFAULT NULL,
pic VARCHAR(64) DEFAULT NUll,
is_recommand int DEFAULT NUll,
is_birthday int DEFAULT NUll,
is_hot int DEFAULT NUll,
midu int DEFAULT NULL,
zhi int DEFAULT NUll, 
lowest_price DECIMAL(5,2),
categrate VARCHAR(24) DEFAULT NULL   
);

#精选食材
CREATE TABLE ecake_ingredients(
jid int(10) PRIMARY KEY,
jtitle VARCHAR(24),
jsubtitle VARCHAR(24),
img VARCHAR(128)
);

#生日卡轮播表
DROP TABLE IF EXISTS brithday_carousel;
CREATE TABLE brithday_carousel(
  cid int(11)  PRIMARY KEY,
  img varchar(128) DEFAULT NULL,
  title varchar(64) DEFAULT NULL
);

#生日卡轮播表
DROP TABLE IF EXISTS brithday_cart;
CREATE TABLE brithday_cart(
  cid int(11)  PRIMARY KEY,
  img varchar(128) DEFAULT NULL,
  title varchar(64) DEFAULT NULL
);

--
-- 转存表中的数据 `xz_index_carousel`
--
#首页轮播图
INSERT INTO ecake_index_carousel (cid, img, title,href) VALUES
(1, 'img/index/mb (1).jpg', '轮播广告商品1', 'product_details.html?lid=28'),
(2, 'img/index/mb (2).jpg', '轮播广告商品2', 'product_details.html?lid=19'),
(3, 'img/index/mb (3).jpg', '轮播广告商品3', 'lookforward.html'),
(4, 'img/index/mb (4).jpg', '轮播广告商品4', 'lookforward.html'),
(5, 'img/index/mb.jpg', '轮播广告商品4', 'lookforward.html');


#生日卡轮播图
INSERT INTO brithday_carousel (cid, img, title) VALUES
(1, 'img/brithday_carousel/4408.jpg', '生日卡轮播1'),
(2, 'img/brithday_carousel/4409.jpg', '生日卡轮播2'),
(3, 'img/brithday_carousel/4411.jpg', '生日卡轮播3'),
(4, 'img/brithday_carousel/4408.jpg', '生日卡轮播4'),
(5, 'img/brithday_carousel/4409.jpg', '生日卡轮播5');

#生日卡图
INSERT INTO brithday_cart (cid, img, title) VALUES
(1, 'img/brithday_cart/4417.jpg', '生日卡1'),
(2, 'img/brithday_cart/4418.jpg', '生日卡2'),
(3, 'img/brithday_cart/4419.jpg', '生日卡3'),
(4, 'img/brithday_cart/4420.jpg', '生日卡4'),
(5, 'img/brithday_cart/4421.jpg', '生日卡5'),
(6, 'img/brithday_cart/4422.jpg', '生日卡6'),
(7, 'img/brithday_cart/4423.jpg', '生日卡7'),
(8, 'img/brithday_cart/4424.jpg', '生日卡8');

/**用户信息**/
INSERT INTO ecake_user VALUES
(NULL, '小明', md5('123456'), 'ming@qq.com', '13501234567'),
(NULL, '小红', md5('123456'), 'hong@qq.com', '13501234568'),
(NULL, '小绿', md5('123456'), 'lv@qq.com', '13501234569'),
(NULL, '小强', md5('123456'), '强@qq.com', '13501234560'),
(NULL, 'tom', md5('123456'), '强@qq.com', '13501234560');


-- 精选食材
INSERT INTO ecake_ingredients (jid,jtitle,jsubtitle,img) VALUES
(1,"巧克力","法国法芙娜巧克力","img/Ingredients/2815.jpg"),
(2,"松露油","意大利Alba松露油","img/Ingredients/2816.jpg"),
(3,"枫糖","加拿大枫糖","img/Ingredients/2817.jpg"),
(4,"蜂蜜","健康密码-蜂蜜","img/Ingredients/2818.jpg");


#首页蛋糕前8+分页蛋糕
INSERT INTO ecake_index (pid,pname,pic,is_recommand,is_birthday,is_hot,midu,zhi,lowest_price,categrate) VALUES 
(NULL,"桃芝|樱桃芝士蛋糕","img/Popularity/41.jpg",1,0,0,1,4,265,"芝士蛋糕"),
(NULL,"回归|90蛋糕","img/Popularity/43.jpg",1,0,0,3,4,255,"芝士蛋糕"),
(NULL,"初心|牛油果低脂蛋糕","img/Recommend/53.jpg",1,0,0,4,4,365,"奶油蛋糕"),
(NULL,"向往|酸樱桃椰蓉蛋糕","img/Praise/49.jpg",1,0,0,4,4,225,"奶油蛋糕"),#蛋糕推荐*4
(NULL,"星空|黑森林蛋糕","img/Chocolates/23.jpg",0,1,0,1,4,225,"巧克力蛋糕"),
(NULL,"思念|缤纷乐园蛋糕","img/Chocolates/24.jpg",0,1,0,5,4,295,"巧克力蛋糕"),
(NULL,"皓月|浓情凝聚蛋糕","img/CreamCake/05.jpg",0,1,0,2,4,315,"奶油蛋糕"),
(NULL,"简单|蜂蜜蛋糕","img/Recommend/54.jpg",0,1,0,5,4,355,"馈赠推荐"),#庆生蛋糕*4
(NULL,"相伴|奶油杏仁","img/CreamCake/04.jpg",0,0,0,3,1,225,"奶油蛋糕"),
(NULL,"珍味|沙棘任小米蛋糕","img/CreamCake/06.jpg",0,0,0,3,2,335,"奶油蛋糕"),
(NULL,"珍贵|芒果慕斯","img/CreamCake/07.jpg",0,0,0,1,1,335,"奶油蛋糕"),
(NULL,"流连|榴莲慕斯","img/CreamCake/08.jpg",0,0,0,2,1,315,"奶油蛋糕"),
(NULL,"我愿意|玫瑰荔枝慕斯","img/CreamCake/09.jpg",0,0,0,3,2,335,"奶油蛋糕"),
(NULL,"热恋|玫瑰慕斯","img/CreamCake/10.jpg",0,0,0,1,1,315,"奶油蛋糕"),
(NULL,"迷恋|提拉米苏","img/CreamCake/11.jpg",0,0,0,2,1,265,"奶油蛋糕"),
(NULL,"简单|蜂蜜","img/CreamCake/03.jpg",0,0,0,2,1,355,"奶油蛋糕"),
(NULL,"感恩|朗姆冰激凌蛋糕","img/IceCream/18.jpg",0,0,0,1,1,225,"冰激凌蛋糕"),
(NULL,"深爱|巧克力冰激凌蛋糕","img/IceCream/19.jpg",0,0,0,1,1,265,"冰激凌蛋糕"),
(NULL,"恋香|香草冰激凌蛋糕","img/IceCream/20.jpg",0,0,0,1,1,265,"冰激凌蛋糕"),
(NULL,"遇见|榴莲冰激凌蛋糕","img/IceCream/21.jpg",0,0,0,1,1,295,"冰激凌蛋糕"),
(NULL,"嫣然|抹茶冰激凌蛋糕","img/IceCream/22.jpg",0,0,0,1,1,265,"冰激凌蛋糕"),
(NULL,"回归|80","img/cheese/32.jpg",0,0,0,0,0,225,"芝士蛋糕"),
(NULL,"回归|70","img/cheese/33.jpg",0,0,0,0,0,225,"芝士蛋糕"),
(NULL,"初心|牛油果低脂蛋糕","img/cheese/34.jpg",0,0,0,0,0,335,"芝士蛋糕"),
(NULL,"原味双层芝士","img/cheese/35.jpg",0,0,0,0,0,168,"芝士蛋糕"),
(NULL,"抹茶双层芝士","img/cheese/36.jpg",0,0,0,0,0,188,"芝士蛋糕"),
(NULL,"巧克力双层芝士","img/cheese/37.jpg",0,0,0,0,0,188,"芝士蛋糕"),
(NULL,"分享|蔓越莓芝士","img/cheese/39.jpg",0,0,0,0,0,335,"芝士蛋糕"),
(NULL,"淡然|原味芝士","img/cheese/40.jpg",0,0,0,0,0,225,"芝士蛋糕"),
(NULL,"梦幻|松露巧克力","img/Chocolates/25.jpg",0,0,0,1,4,315,"巧克力蛋糕"),
(NULL,"深爱|巧克力冰激凌蛋糕","img/Chocolates/26.jpg",0,0,0,1,4,265,"巧克力蛋糕"),
(NULL,"菩提|香浓巧克力","img/Chocolates/27.jpg",0,0,0,1,4,185,"巧克力蛋糕"),
(NULL,"经典|坚果巧克力","img/Chocolates/28.jpg",0,0,0,1,4,335,"巧克力蛋糕"),
(NULL,"回味|枫糖威士忌坚果巧克力","img/Chocolates/29.jpg",0,0,0,1,4,495,"巧克力蛋糕"),
(NULL,"榛爱|黑巧克力榛子","img/Chocolates/30.jpg",0,0,0,1,4,265,"巧克力蛋糕"),
(NULL,"桃芝|樱桃芝士","img/Popularity/41.jpg",1,0,0,1,4,265,"人气热销"),
(NULL,"原味双层芝士","img/cheese/35.jpg",0,0,0,0,0,168,"人气热销"),
(NULL,"回归|90","img/cheese/31.jpg",0,0,0,0,0,225,"人气热销"),
(NULL,"星空|黑森林","img/Chocolates/23.jpg",0,1,0,1,4,225,"人气热销"),
(NULL,"初心|牛油果低脂蛋糕","img/Recommend/53.jpg",1,0,0,4,4,365,"生日蛋糕"),
(NULL,"热恋|玫瑰慕斯","img/CreamCake/10.jpg",0,0,0,1,1,315,"生日蛋糕"),
(NULL,"深爱|巧克力冰激凌蛋糕","img/IceCream/19.jpg",0,0,0,1,1,265,"生日蛋糕"),
(NULL,"思念|缤纷乐园蛋糕","img/Chocolates/24.jpg",0,1,0,5,4,295,"生日蛋糕"),
(NULL,"向往|酸樱桃椰蓉","img/Praise/49.jpg",1,0,0,4,4,225,"好评优选"),
(NULL,"菩提|香浓巧克力","img/Chocolates/27.jpg",0,0,0,1,4,185,"好评优选"),
(NULL,"桃芝|樱桃芝士","img/Popularity/41.jpg",1,0,0,1,4,265,"好评优选"),
(NULL,"梦幻|松露巧克力","img/Chocolates/25.jpg",0,0,0,1,4,315,"好评优选"),
(NULL,"初心|牛油果低脂蛋糕","img/Recommend/53.jpg",1,0,0,4,4,365,"馈赠推荐"),
(NULL,"经典|坚果巧克力","img/Chocolates/28.jpg",0,0,0,1,4,335,"馈赠推荐"),
(NULL,"珍贵|芒果慕斯","img/CreamCake/07.jpg",0,0,0,1,1,335,"馈赠推荐"),
(NULL,"初心|牛油果低脂蛋糕","img/Recommend/53.jpg",1,0,0,4,4,365,"热销爆款"),
(NULL,"桃芝|樱桃芝士","img/Popularity/41.jpg",1,0,0,1,4,265,"热销爆款"),
(NULL,"热恋|玫瑰慕斯","img/CreamCake/10.jpg",0,0,0,1,1,315,"热销爆款"),
(NULL,"思念|缤纷乐园蛋糕","img/Chocolates/24.jpg",0,1,0,5,4,295,"热销爆款");




DROP TABLE IF EXISTS bigImags;
CREATE TABLE bigImags ( 
id INT PRIMARY KEY AUTO_INCREMENT, #记录的id
cid INT, #蛋糕的id
pic VARCHAR(32) #蛋糕的详情大图地址
); 

INSERT INTO bigImags VALUES
(NULL,9,'img/cakes/2690.jpg'),
(NULL,9,'img/cakes/2691.jpg'),
(NULL,9,'img/cakes/2692.jpg'),
(NULL,9,'img/cakes/2693.jpg'),
(NULL,9,'img/cakes/2694.jpg'),
(NULL,9,'img/cakes/2695.jpg'),
(NULL,9,'img/cakes/2696.jpg'),
(NULL,9,'img/cakes/2697.jpg'),
(NULL,9,'img/cakes/2698.jpg'),
(NULL,9,'img/cakes/2699.jpg'),
(NULL,9,'img/cakes/2700.jpg'),
(NULL,9,'img/cakes/2701.jpg'),
(NULL,9,'img/cakes/2702.jpg'),
(NULL,9,'img/cakes/2703.jpg');




-- size
DROP TABLE IF EXISTS cake_guige;
CREATE TABLE cake_guige( 
id INT PRIMARY KEY AUTO_INCREMENT, #记录的id
cid INT, #蛋糕的id
changdu INT, #蛋糕的长度 多少厘米
weights DECIMAL(5,2), #重量
tools VARCHAR(32), #工具数量
peolples VARCHAR(32), #适合几个人吃 70-90
send_time VARCHAR(32), #配送事件
price DECIMAL(6,2), #价格
pic VARCHAR(32) #每个规格对应的图片 
);


INSERT INTO cake_guige VALUES
(NULL,1,16,1.5,'+6','3-6','08:30',335,'img/size/f16.png'),
(NULL,9,16,1.4,'+6','3-6','08:30',225,'img/size/f16.png'),
(NULL,9,21,2.4,'+12','7-12','08:30',395,'img/size/f21.png'),
(NULL,9,26,3.7,'+18','13-18','08:30',585,'img/size/f26.png'),
(NULL,9,29,4.6,'+30','20-30','08:30',900,'img/size/f29.png'),
(NULL,9,33,5.9,'+50','40-50','08:30',1125,'img/size/f33.png'),
(NULL,9,47,7.2,'+70','50-70','08:30',1350,'img/size/f47.png'),
(NULL,9,51,8.8,'+90','70-90','08:30',1575,'img/size/f51.png'),
(NULL,9,62,12.7,'+150','130-150','08:30',2250,'img/size/f62.png'),
(NULL,3,16,1.6,'+6','3-6','08:30',335,'img/size/f16.png'),
(NULL,3,21,2.6,'+12','7-12','08:30',635,'img/size/f21.png'),
(NULL,3,26,4.1,'+18','13-18','08:30',915,'img/size/f26.png'),
(NULL,3,29,5.2,'+30','20-30','08:30',1420,'img/size/f29.png'),
(NULL,3,33,6.8,'+50','40-50','08:30',1755,'img/size/f33.png'),
(NULL,3,47,8.3,'+70','50-70','08:30',2130,'img/size/f47.png'),
(NULL,3,51,10.1,'+90','70-90','08:30',2485,'img/size/f51.png'),
(NULL,3,62,14.7,'+150','130-150','08:30',3550,'img/size/f62.png');





INSERT INTO cake_guige VALUES
(NULL,1,16,1.5,'+6','3-6','08:30',335,'img/size/f16.png'),
(NULL,9,16,1.4,'+6','3-6','08:30',225,'img/size/f16.png'),
(NULL,9,21,2.4,'+12','7-12','08:30',395,'img/size/f21.png'),
(NULL,9,26,3.7,'+18','13-18','08:30',585,'img/size/f26.png'),
(NULL,9,29,4.6,'+30','20-30','08:30',900,'img/size/f29.png'),
(NULL,9,33,5.9,'+50','40-50','08:30',1125,'img/size/f33.png'),
(NULL,9,47,7.2,'+70','50-70','08:30',1350,'img/size/f47.png'),
(NULL,9,51,8.8,'+90','70-90','08:30',1575,'img/size/f51.png'),
(NULL,9,62,12.7,'+150','130-150','08:30',2250,'img/size/f62.png'),
(NULL,3,16,1.6,'+6','3-6','08:30',335,'img/size/f16.png'),
(NULL,3,21,2.6,'+12','7-12','08:30',635,'img/size/f21.png'),
(NULL,3,26,4.1,'+18','13-18','08:30',915,'img/size/f26.png'),
(NULL,3,29,5.2,'+30','20-30','08:30',1420,'img/size/f29.png'),
(NULL,3,33,6.8,'+50','40-50','08:30',1755,'img/size/f33.png'),
(NULL,3,47,8.3,'+70','50-70','08:30',2130,'img/size/f47.png'),
(NULL,3,51,10.1,'+90','70-90','08:30',2485,'img/size/f51.png'),
(NULL,3,62,14.7,'+150','130-150','08:30',3550,'img/size/f62.png');



DROP TABLE IF EXISTS bigImags;
CREATE TABLE bigImags ( 
id INT PRIMARY KEY AUTO_INCREMENT, #记录的id
cid INT, #蛋糕的id
pic VARCHAR(32) #蛋糕的详情大图地址
); 

INSERT INTO bigImags VALUES
(NULL,9,'img/cakes/2690.jpg'),
(NULL,9,'img/cakes/2691.jpg'),
(NULL,9,'img/cakes/2692.jpg'),
(NULL,9,'img/cakes/2693.jpg'),
(NULL,9,'img/cakes/2694.jpg'),
(NULL,9,'img/cakes/2695.jpg'),
(NULL,9,'img/cakes/2696.jpg'),
(NULL,9,'img/cakes/2697.jpg'),
(NULL,9,'img/cakes/2698.jpg'),
(NULL,9,'img/cakes/2699.jpg'),
(NULL,9,'img/cakes/2700.jpg'),
(NULL,9,'img/cakes/2701.jpg'),
(NULL,9,'img/cakes/2702.jpg'),
(NULL,9,'img/cakes/2703.jpg'),
(NULL,7,'img/cakes/3834.jpg'),
(NULL,7,'img/cakes/3835.jpg'),
(NULL,7,'img/cakes/3836.jpg'),
(NULL,7,'img/cakes/3837.jpg'),
(NULL,7,'img/cakes/3838.jpg'),
(NULL,7,'img/cakes/3839.jpg'),
(NULL,7,'img/cakes/3840.jpg'),
(NULL,7,'img/cakes/3841.jpg'),
(NULL,7,'img/cakes/3842.jpg'),
(NULL,7,'img/cakes/3843.jpg'),
(NULL,7,'img/cakes/3844.jpg'),
(NULL,7,'img/cakes/3845.jpg'),
(NULL,7,'img/cakes/3846.jpg'),
(NULL,7,'img/cakes/3847.jpg');




-- size
DROP TABLE IF EXISTS cake_guige;
CREATE TABLE cake_guige( 
id INT PRIMARY KEY AUTO_INCREMENT, #记录的id
cid INT, #蛋糕的id
changdu INT, #蛋糕的长度 多少厘米
weights DECIMAL(5,2), #重量
tools VARCHAR(32), #工具数量
peolples VARCHAR(32), #适合几个人吃 70-90
send_time VARCHAR(32), #配送事件
price DECIMAL(6,2), #价格
pic VARCHAR(32) #每个规格对应的图片 
);


INSERT INTO cake_guige VALUES
(NULL,1,16,1.5,'+6','3-6','08:30',335,'img/size/f16.png'),
(NULL,9,16,1.4,'+6','3-6','08:30',225,'img/size/f16.png'),
(NULL,9,21,2.4,'+12','7-12','08:30',395,'img/size/f21.png'),
(NULL,9,26,3.7,'+18','13-18','08:30',585,'img/size/f26.png'),
(NULL,9,29,4.6,'+30','20-30','08:30',900,'img/size/f29.png'),
(NULL,9,33,5.9,'+50','40-50','08:30',1125,'img/size/f33.png'),
(NULL,9,47,7.2,'+70','50-70','08:30',1350,'img/size/f47.png'),
(NULL,9,51,8.8,'+90','70-90','08:30',1575,'img/size/f51.png'),
(NULL,9,62,12.7,'+150','130-150','08:30',2250,'img/size/f62.png'),
(NULL,3,16,1.6,'+6','3-6','08:30',335,'img/size/f16.png'),
(NULL,3,21,2.6,'+12','7-12','08:30',635,'img/size/f21.png'),
(NULL,3,26,4.1,'+18','13-18','08:30',915,'img/size/f26.png'),
(NULL,3,29,5.2,'+30','20-30','08:30',1420,'img/size/f29.png'),
(NULL,3,33,6.8,'+50','40-50','08:30',1755,'img/size/f33.png'),
(NULL,3,47,8.3,'+70','50-70','08:30',2130,'img/size/f47.png'),
(NULL,3,51,10.1,'+90','70-90','08:30',2485,'img/size/f51.png'),
(NULL,3,62,14.7,'+150','130-150','08:30',3550,'img/size/f62.png'),
(NULL,7,18,1.5,'+6','3-6','08:30',315,'img/size/y18.png');




DROP TABLE IF EXISTS cake_pingjia;
CREATE TABLE cake_pingjia( 
id INT PRIMARY KEY AUTO_INCREMENT, #记录的id
sp_id INT, #蛋糕的id
cid INT, #用户的id
uname VARCHAR(16), #用户的昵称
pingluntime BIGINT, #评论的时间
taste INT, #口感
peisong INT, #配送
pack INT, #打包
content VARCHAR(512), #评价的内容
huifu VARCHAR(256) #回复
);

INSERT INTO cake_pingjia VALUES
(NULL,9,1,'1097dhello',1573872067901,5,5,4,'新鲜美味的小蜜蜂 全家人都很爱',''),
(NULL,9,1,'ec674ello',1573872067901,4,3,4,'早来了两个小时。还好我在。不可食用或不愿意食用的太多',''),
(NULL,9,2,'e84e01245',1573872067901,5,5,3,'很漂亮，很好吃，很甜蜜，很不腻，很惊喜',''),
(NULL,9,3,'e84e01245',1573872067901,5,4,2,'经典，好吃',''),
(NULL,9,4,'caoldfassdf',1573872067901,4,5,6,'一如既往的好！小蜜蜂的蛋糕几乎都品尝到了，这款是新品，个人觉得口感不上不下，无功无过。介绍中的“咖啡”和“蜂蜜”两种口感不太明显，造型上不加分的话，口感中等就有些减分了','掌柜回复：好的亲，已通知蛋糕师悠着点，蜂蜜别放多了~'),
(NULL,9,5,'1097dhello',1573872067901,5,5,4,'配送很及时，蛋糕口感很好，刚刚送来的时候里面还有一些冰碴，个人更喜欢冰化了以后软软的口感，对我来讲这款蛋糕一点也不甜腻，外面的那层酱本以为是蜂蜜，结果是一种酸酸甜甜的果酱，里面的奶酪慕斯甜度也不高，总体来讲是一款超级好吃的蛋糕~',''),
(NULL,9,2,'Yilksajdk',1573872067901,5,1,3,'新鲜美味的小蜜蜂 全家人都很爱','掌柜回复：夏蝉冬雪，不过为你一瞥。悟道修炼，不问一生锤炼。评论区内，寥寥几笔你谈及满意，难掩你绚烂迷人的笑颜。'),
(NULL,9,5,'adfhjhjbv',1573872067901,5,5,4,'蛋糕的酸甜口味很适合配咖啡下午茶，附赠的月饼礼盒也不错。虽然配送中出了点情况，但依然支持小蜜蜂。',''),
(NULL,9,6,'javasckjf',1573872067901,5,3,4,'新鲜美味的小蜜蜂',''),
(NULL,9,7,'helloaksf',1573872067901,3,3,4,'全家人都很爱',''),
(NULL,9,8,'wdksnfjnjsf',1573872067901,5,2,1,'新鲜美味的小蜜蜂 全家人都很爱',''),
(NULL,9,9,'dksjfknvjn ',1573872067901,5,5,3,'全家人都很爱',''),
(NULL,9,10,'nvjndajkdf',1573872067901,4,4,4,'非常美味',''),
(NULL,9,11,'124fsagv',1573872067901,4,4,4,'新鲜美味的小蜜蜂 全家人都很爱',''),
(NULL,9,12,'15456sgdf',1573872067901,5,3,4,'新鲜美味的小蜜蜂 全家人都很爱',''),
(NULL,9,13,'sgddsae',1573872067901,3,4,4,'新鲜美味的小蜜蜂 全家人都很爱',''),
(NULL,9,14,'erwagfvv',1573872067901,5,2,4,'新鲜美味的小蜜蜂 全家人都很爱',''),
(NULL,9,15,'dvgsaf',1573872067901,5,2,4,'新鲜美味的小蜜蜂 全家人都很爱',''),
(NULL,9,16,'ewaev',1573872067901,5,3,4,'新鲜美味的小蜜蜂 全家人都很爱',''),
(NULL,7,1,'ec674ello',1573872067901,4,3,4,'早来了两个小时。还好我在。不可食用或不愿意食用的太多',''),
(NULL,7,2,'e84e01245',1573872067901,5,5,3,'很漂亮，很好吃，很甜蜜，很不腻，很惊喜',''),
(NULL,7,3,'e84e01245',1573872067901,5,4,2,'经典，好吃','');




DROP TABLE IF EXISTS details_imgs_lunbo;
CREATE TABLE details_imgs_lunbo ( 
id INT PRIMARY KEY AUTO_INCREMENT, #记录的id
cid INT, #蛋糕的id
lunbo1 VARCHAR(32), #轮播图片
lunbo2 VARCHAR(32), #轮播图片
lunbo3 VARCHAR(32), #轮播图片
big1 VARCHAR(32), #详情大图1-14
big2 VARCHAR(32), 
big3 VARCHAR(32), 
big4 VARCHAR(32),
big5 VARCHAR(32), 
big6 VARCHAR(32), 
big7 VARCHAR(32), 
big8 VARCHAR(32), 
big9 VARCHAR(32), 
big10 VARCHAR(32), 
big11 VARCHAR(32), 
big12 VARCHAR(32), 
big13 VARCHAR(32), 
big14 VARCHAR(32)
); 





INSERT INTO details_imgs_lunbo VALUES
(NULL,9,'img/cakes/2203.jpg','img/cakes/2204.jpg','img/cakes/2205.jpg','img/cakes/2690.jpg','img/cakes/2691.jpg','img/cakes/2691.jpg','img/cakes/2693.jpg','img/cakes/2694.jpg','img/cakes/2695.jpg','img/cakes/2696.jpg','img/cakes/2697.jpg','img/cakes/2698.jpg','img/cakes/2699.jpg','img/cakes/2700.jpg','img/cakes/2701.jpg','img/cakes/2702.jpg','img/cakes/2703.jpg'),
(NULL,7,'img/cakes/3829.jpg','img/cakes/3830.jpg','img/cakes/3831.jpg','','','','','','','','','','','','','','');


DROP TABLE IF EXISTS liaotian;
CREATE TABLE liaotian( 
id  INT PRIMARY KEY ,  #记录的id
question VARCHAR(128),
msg VARCHAR(128)
);
INSERT INTO liaotian VALUES
(1,"你好","欢迎光临小蜜蜂蛋糕店，先生你有什么需要"),
(2,"蛋糕怎么买","你可以试试我们店新推出的  淡然|原味芝士|￥299"),
(3,"好吃吗","非常好吃，先生你可以试试，现在下单还有优惠哦(>_<)"),
(4,"蛋糕好吃吗","非常好吃，先生你可以试试，现在下单还有优惠哦(>_<)"),
(5,"什么蛋糕好吃","分享|蔓越莓芝士|￥299"),
(6,"怎么买","网站下单就可以的哦！亲(>_<)http://www.ebeecake.com/"),
(7,"怎么下单","网站下单就可以的哦！亲(>_<)http://www.ebeecake.com/"),
(8,"好的谢谢","不客气哦亲(>_<),非常乐意为您服务"),
(9,"好的再见","欢迎下次光临小蜜蜂蛋糕店"),
(10,"","你好，有什么为你服务");


DROP TABLE IF EXISTS cake_carts;
CREATE TABLE cake_carts( 
id INT PRIMARY KEY AUTO_INCREMENT, #记录的id
uids INT, #用户的id
pid INT, #商品的id
price DECIMAL(5,2), #商品的价格
changdu VARCHAR(32), #商品的长度
tools VARCHAR(16), #有多少工具
lowerPeople INT, #最少有多少人
upperPeople INT, #最多有多少人
counts INT, #数量
title VARCHAR(32), #标题
pic VARCHAR(64) #图片地址
);



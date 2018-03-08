/*
SQLyog Ultimate v12.09 (64 bit)
MySQL - 5.5.20-log : Database - feihu
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`feihu` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `feihu`;

/*Table structure for table `cartinfo` */

DROP TABLE IF EXISTS `cartinfo`;

CREATE TABLE `cartinfo` (
  `cart_id` int(11) NOT NULL AUTO_INCREMENT,
  `u_username` varchar(20) NOT NULL,
  `goods_id` int(11) DEFAULT NULL,
  `cart_num` int(11) DEFAULT NULL,
  PRIMARY KEY (`cart_id`),
  KEY `goods_id` (`goods_id`),
  CONSTRAINT `cartinfo_ibfk_1` FOREIGN KEY (`goods_id`) REFERENCES `goodsinfo` (`goods_id`)
) ENGINE=InnoDB AUTO_INCREMENT=67 DEFAULT CHARSET=utf8;

/*Data for the table `cartinfo` */

insert  into `cartinfo`(`cart_id`,`u_username`,`goods_id`,`cart_num`) values (61,'zhangsan',6,1),(62,'zhangsan',11,3),(63,'zhangsan',11,1),(64,'zhangsan',12,1);

/*Table structure for table `goodsinfo` */

DROP TABLE IF EXISTS `goodsinfo`;

CREATE TABLE `goodsinfo` (
  `goods_id` int(11) NOT NULL AUTO_INCREMENT,
  `goods_name` varchar(50) NOT NULL,
  `goods_price` float DEFAULT NULL,
  `goods_oldprice` float DEFAULT NULL,
  `goods_info` varchar(250) DEFAULT NULL,
  `pic_id` int(11) DEFAULT NULL,
  `goods_type` varchar(200) NOT NULL,
  `goods_pic` varchar(200) DEFAULT NULL,
  `goods_typeinfo` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`goods_id`),
  KEY `pic_id` (`pic_id`),
  CONSTRAINT `goodsinfo_ibfk_1` FOREIGN KEY (`pic_id`) REFERENCES `picinfo` (`pic_id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8;

/*Data for the table `goodsinfo` */

insert  into `goodsinfo`(`goods_id`,`goods_name`,`goods_price`,`goods_oldprice`,`goods_info`,`pic_id`,`goods_type`,`goods_pic`,`goods_typeinfo`) values (6,'Apple iPhone X (A1865) 256GB 银色 移动联通电信4G手机',9488,11999,'iPhone X 全面屏手机',NULL,'限时秒杀','images/img_12.jpg','[[\"黑色\",\"银色\"],[\"128GB\",\"64GB\"]]'),(7,'英国比得兔(Peter Rabbit)保温杯男士女高档不锈钢水杯便携真空商务茶杯礼品包装',59,109,'480ml 男女士运动便',NULL,'限时秒杀','images/img_03.jpg',NULL),(8,'Viken 维肯 魅动运动蓝牙',69,119,'魅动运动蓝牙',NULL,'限时秒杀','images/img_05.jpg',NULL),(9,'Grace 洁丽雅 多臂彩条缎',98,199,'多臂彩条缎',NULL,'限时秒杀','images/img_07.jpg',NULL),(10,'浪莎 女士纯色棉质内裤 A',39,100,'浪莎',NULL,'限时秒杀','images/img_09.jpg',NULL),(11,'华为 HUAWEI P10 全网通手机 4GB+64GB',3488,NULL,'P10 全网通手机 4GB+64GB',NULL,'手机数码','images/img_28.jpg','[[\"曜石黑\",\"钻雕金\",\"玫瑰金\",\"钻雕蓝\"],[\"4GB+128GB\",\"4GB+64GB\"]]'),(12,'华为（Huawei）畅享7 Plus 64GB 移动联通电信4G手机 全网通 双卡双待（流光金）',1699,NULL,'华为 畅享7 Plus 64GB 全网通（流光金）',NULL,'手机数码','images/img_30.jpg','[[\"黑色\",\"流光金\"],[\"3G+16GB\",\"4G+32GB\"]]'),(13,'佳能（Canon）IXUS 285 HS 银色 数码相机',1199,NULL,'佳能IXUS285',NULL,'手机数码','images/img_33.jpg','[[\"紫色\"],[\"官方标配\"]]'),(14,'山业SANWA MA-ERGC1 人体工学竖握式光学垂直有线鼠标',149,NULL,'山业SANWA',NULL,'手机数码','images/img_45.jpg','[[\"黑色\",\"白色\"],[\"官方标配\"]]'),(15,'维肯 VK5 移动电源 10000mAh',78,NULL,'移动电源',NULL,'手机数码','images/img_48.jpg','[[\"土豪金\",\"白色\"],[\"官方标配\"]]'),(16,'BIRD/波导 A510 移动联通2G 直板老人手机 咖啡色',99,NULL,'BIRD/波导 老人机',NULL,'手机数码','images/img_42.jpg','[[\"黑色\"],[\"官方标配\"]]'),(18,'百依恋歌 拉链中长款加厚棉衣女长袖外套 BL2612 ',189,NULL,NULL,NULL,'家用电器','http://image.efeihu.com/images/wap/android/6756db96-5901-40a8-b57a-5bb397f61f12.jpg',NULL),(19,'百依恋歌 中长款高腰百褶裙 ZC1702  ',78,NULL,NULL,NULL,'家用电器','http://image.efeihu.com/images/wap/android/321b692d-4d63-4224-a27e-be279598c264.jpg',NULL),(20,'浪莎 男士内衣纯色莫代尔薄款圆领秋衣秋裤套装 L88501 黑色 L码  ',149,NULL,NULL,NULL,'家用电器','http://image.efeihu.com/images/wap/android/44915d89-eb12-44d7-8a02-d052e4542660.jpg',NULL),(21,'陀翡利迩(TOPHILL)皮带手表女镶水钻双日历女表商务精钢女士防水时尚石英表TE008L',749,NULL,NULL,NULL,'家用电器','http://image.efeihu.com/images/wap/android/89e126bf-1798-4636-a401-f56adcfd6fb9.jpg',NULL),(22,'陀翡利迩TOPHILL手表女士时尚潮流超薄小表盘时装石英表瑞士品牌拓非女表TS002L ',549,NULL,NULL,NULL,'家用电器','http://image.efeihu.com/images/wap/android/fc7276c9-13ef-4b42-8ab7-24f36c76a284.jpg',NULL),(23,' 阿迪达斯男秋新款运动透气长裤休闲跑步训练针织健身裤 黑色金条南韩丝 2XL ',449,NULL,NULL,NULL,'家用电器','http://image.efeihu.com/images/wap/android/fda90f78-74cc-4e8c-8699-42e295512c20.jpg',NULL);

/*Table structure for table `picinfo` */

DROP TABLE IF EXISTS `picinfo`;

CREATE TABLE `picinfo` (
  `pic_id` int(11) NOT NULL AUTO_INCREMENT,
  `pic_src` varchar(100) NOT NULL,
  `pic_name` varchar(50) DEFAULT NULL,
  `pic_type` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`pic_id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8;

/*Data for the table `picinfo` */

insert  into `picinfo`(`pic_id`,`pic_src`,`pic_name`,`pic_type`) values (1,'images/banner1_0228.jpg','轮播图','轮播图'),(2,'images/banner2_0228.jpg','轮播图','轮播图'),(3,'images/banner3_0228.jpg','轮播图','轮播图'),(4,'images/banner_0227.jpg','轮播图','轮播图'),(5,'images/banner_0228.jpg','轮播图','轮播图'),(6,'images/img_56.jpg','手机数码品牌','手机数码品牌'),(7,'images/img_59.jpg','手机数码品牌','手机数码品牌'),(8,'images/img_62.jpg','手机数码品牌','手机数码品牌'),(9,'images/img_65.jpg','手机数码品牌','手机数码品牌'),(10,'images/img_68.jpg','手机数码品牌','手机数码品牌'),(11,'images/img_70.jpg','手机数码品牌','手机数码品牌'),(12,'images/img_73.jpg','手机数码品牌','手机数码品牌'),(13,'images/img_76.jpg','手机数码品牌','手机数码品牌'),(14,'images/index/2F_logos_01.jpg','家用电器品牌','家用电器品牌'),(15,'images/index/2F_logos_02.jpg','家用电器品牌','家用电器品牌'),(16,'images/index/2F_logos_03.jpg','家用电器品牌','家用电器品牌'),(17,'images/index/2F_logos_04.jpg','家用电器品牌','家用电器品牌'),(18,'images/index/2F_logos_05.jpg','家用电器品牌','家用电器品牌'),(19,'images/index/2F_logos_06.jpg','家用电器品牌','家用电器品牌'),(20,'images/index/2F_logos_07.jpg','家用电器品牌','家用电器品牌'),(21,'images/index/2F_logos_08.jpg','家用电器品牌','家用电器品牌'),(22,'images/feihu1_03.jpg','手机数码大图','手机数码大图'),(23,'images/feihu1_04.jpg','手机数码大图','手机数码大图'),(24,'images/feihu1_06.jpg','手机数码大图','手机数码大图'),(25,'images/index/2F_m200_cover.jpg','家用电器大图','家用电器大图'),(26,'images/index/2F_m400-cover-1.jpg','家用电器大图','家用电器大图'),(27,'images/index/2F_m400-cover-2.jpg','家用电器大图','家用电器大图');

/*Table structure for table `userinfo` */

DROP TABLE IF EXISTS `userinfo`;

CREATE TABLE `userinfo` (
  `u_id` int(11) NOT NULL AUTO_INCREMENT,
  `u_username` varchar(16) NOT NULL,
  `u_userpwd` varchar(18) NOT NULL,
  `u_email` varchar(100) NOT NULL,
  PRIMARY KEY (`u_id`),
  UNIQUE KEY `u_username` (`u_username`)
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8;

/*Data for the table `userinfo` */

insert  into `userinfo`(`u_id`,`u_username`,`u_userpwd`,`u_email`) values (1,'zhangsan','123456','lwm@lwm.com'),(5,'assaasas','assasasasa','as@asd.com'),(11,'liuweimin1','liuweimin','aww@asd.com'),(12,'asdadas','asdasd','as@as.com'),(13,'saasadasd','sadads','assaas@as.as'),(14,'saasadasdaa','asasasas','assa@sa.as'),(15,'assaasasa','assasassa','v@as.com'),(17,'username','password','wqeqw@lq.com'),(18,'sadadd','asdasd','asdasd@as.com'),(21,'sadadasd','asdasdsad','asdsadas@sa.as'),(24,'sadadasd1','asdasdsad','asdsadas@sa.as'),(35,'sada','sadsad','asdsadas@sa.as'),(36,'sadaawaw','sadsad','asdsadas@sa.as'),(38,'asdsad','asdsad','as@as.com'),(39,'assaasasaa','assaasasaa','as@as.com'),(40,'admin','admin','liuweimin@qq.com'),(41,'liuweimin','123456','liuweimin@qq.com'),(42,'zhangsan1','123456','liuweimin@qq.com'),(43,'zhangsan2','123456','alklsa@sal.cpom'),(44,'zhangsan3','123456','waw@as.ca'),(45,'zhnasas','123456','ass@sa.com'),(46,'asdsadd','123456','asda@sa.sa'),(47,'zhangsan12','asdasd',''),(48,'admin1','admin1','asd@sad.com'),(49,'111111','111111','11@qq.com'),(50,'zhangsan4','123456','la@ajs.as');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

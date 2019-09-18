ALTER TABLE `article_category` DROP FOREIGN KEY `fk_article_category_admin_1`;
ALTER TABLE `article` DROP FOREIGN KEY `fk_article_admin_1`;
ALTER TABLE `article` DROP FOREIGN KEY `fk_article_article_category_1`;
ALTER TABLE `goods_category` DROP FOREIGN KEY `fk_goods_category_admin_1`;
ALTER TABLE `goods` DROP FOREIGN KEY `fk_goods_goods_category_1`;
ALTER TABLE `goods` DROP FOREIGN KEY `fk_goods_admin_1`;
ALTER TABLE `admin` DROP FOREIGN KEY `fk_admin_role_1`;
ALTER TABLE `pages` DROP FOREIGN KEY `fk_pages_admin_1`;
ALTER TABLE `orders_goods` DROP FOREIGN KEY `fk_orders_goods_orders_1`;
ALTER TABLE `orders_goods` DROP FOREIGN KEY `fk_orders_goods_goods_1`;
ALTER TABLE `orders` DROP FOREIGN KEY `fk_orders_users_1`;
ALTER TABLE `goods_size` DROP FOREIGN KEY `fk_goods_size_goods_1`;
ALTER TABLE `goods_size` DROP FOREIGN KEY `fk_goods_size_size_1`;
ALTER TABLE `store` DROP FOREIGN KEY `fk_store_admin_1`;
ALTER TABLE `article_collect` DROP FOREIGN KEY `fk_article_collect_article_1`;
ALTER TABLE `article_collect` DROP FOREIGN KEY `fk_article_collect_user_1`;
ALTER TABLE `article_comment` DROP FOREIGN KEY `fk_article_comment_article_1`;
ALTER TABLE `article_comment` DROP FOREIGN KEY `fk_article_comment_user_1`;
ALTER TABLE `user_coupon` DROP FOREIGN KEY `fk_user_coupon_coupon_1`;
ALTER TABLE `user_coupon` DROP FOREIGN KEY `fk_user_coupon_user_1`;
ALTER TABLE `logistics` DROP FOREIGN KEY `fk_logistics_orders_1`;
ALTER TABLE `coupon` DROP FOREIGN KEY `fk_coupon_admin_1`;
ALTER TABLE `topic` DROP FOREIGN KEY `fk_goods_topic_admin_1`;
ALTER TABLE `topic_goods` DROP FOREIGN KEY `fk_topic_goods_topic_1`;
ALTER TABLE `topic_goods` DROP FOREIGN KEY `fk_topic_goods_goods_1`;
ALTER TABLE `ad` DROP FOREIGN KEY `fk_ad_admin_1`;
ALTER TABLE `address` DROP FOREIGN KEY `fk_address_user_1`;
ALTER TABLE `goods_comment` DROP FOREIGN KEY `fk_goods_comment_user_1`;
ALTER TABLE `goods_comment` DROP FOREIGN KEY `fk_goods_comment_goods_1`;
ALTER TABLE `goods_collect` DROP FOREIGN KEY `fk_goods_collect_user_1`;
ALTER TABLE `goods_collect` DROP FOREIGN KEY `fk_goods_collect_goods_1`;

DROP TABLE `user`;
DROP TABLE `admin`;
DROP TABLE `goods_category`;
DROP TABLE `article_category`;
DROP TABLE `article`;
DROP TABLE `goods`;
DROP TABLE `role`;
DROP TABLE `pages`;
DROP TABLE `menu`;
DROP TABLE `orders`;
DROP TABLE `orders_goods`;
DROP TABLE `size`;
DROP TABLE `goods_size`;
DROP TABLE `address`;
DROP TABLE `store`;
DROP TABLE `article_collect`;
DROP TABLE `article_comment`;
DROP TABLE `dictionary`;
DROP TABLE `coupon`;
DROP TABLE `user_coupon`;
DROP TABLE `logistics`;
DROP TABLE `topic`;
DROP TABLE `topic_goods`;
DROP TABLE `ad`;
DROP TABLE `goods_comment`;
DROP TABLE `goods_collect`;

CREATE TABLE `user` (
`id` int(11) NOT NULL AUTO_INCREMENT,
PRIMARY KEY (`id`) 
)
COMMENT = '用户信息';

CREATE TABLE `admin` (
`id` int(11) NOT NULL AUTO_INCREMENT,
`role_id` int(11) NULL,
PRIMARY KEY (`id`) 
)
AUTO_INCREMENT = 10000
COMMENT = '管理用户';

CREATE TABLE `goods_category` (
`id` int(11) NOT NULL AUTO_INCREMENT,
`admin_id` int(11) NOT NULL,
PRIMARY KEY (`id`) 
)
COMMENT = '商品分类';

CREATE TABLE `article_category` (
`id` int(11) NOT NULL AUTO_INCREMENT,
`admin_id` int(11) NOT NULL,
PRIMARY KEY (`id`) 
)
COMMENT = '资讯分类';

CREATE TABLE `article` (
`id` int(11) NOT NULL AUTO_INCREMENT,
`admin_id` int(11) NULL,
`category_id` int(11) NULL,
PRIMARY KEY (`id`) 
)
COMMENT = '资讯信息';

CREATE TABLE `goods` (
`id` int(11) NOT NULL AUTO_INCREMENT,
`category_id` int(11) NULL,
`admin_id` int(11) NULL,
PRIMARY KEY (`id`) 
)
COMMENT = '商品信息';

CREATE TABLE `role` (
`id` int(11) NOT NULL AUTO_INCREMENT,
PRIMARY KEY (`id`) 
)
COMMENT = '角色信息';

CREATE TABLE `pages` (
`id` int(11) NOT NULL AUTO_INCREMENT,
`admin_id` int(11) NULL,
PRIMARY KEY (`id`) 
)
COMMENT = '单页';

CREATE TABLE `menu` (
`id` int(11) NOT NULL AUTO_INCREMENT,
PRIMARY KEY (`id`) 
)
COMMENT = '菜单';

CREATE TABLE `orders` (
`id` int(11) NOT NULL AUTO_INCREMENT,
`users_id` int(11) NOT NULL,
PRIMARY KEY (`id`) 
)
COMMENT = '订单信息';

CREATE TABLE `orders_goods` (
`id` int(11) NOT NULL AUTO_INCREMENT,
`orders_id` int(11) NULL,
`goods_id` int(11) NULL,
PRIMARY KEY (`id`) 
)
COMMENT = '订单商品';

CREATE TABLE `size` (
`id` int(11) NOT NULL AUTO_INCREMENT,
PRIMARY KEY (`id`) 
)
COMMENT = '商品型号';

CREATE TABLE `goods_size` (
`id` int(11) NOT NULL AUTO_INCREMENT,
`goods_id` int(11) NULL,
`size_id` int(11) NULL,
PRIMARY KEY (`id`) 
)
COMMENT = '型号数据';

CREATE TABLE `address` (
`id` int(11) NOT NULL AUTO_INCREMENT,
`user_id` int(11) NULL,
PRIMARY KEY (`id`) 
)
COMMENT = '用户地址';

CREATE TABLE `store` (
`id` int(11) NOT NULL AUTO_INCREMENT,
`admin_id` int(11) NULL,
PRIMARY KEY (`id`) 
)
COMMENT = '店铺信息';

CREATE TABLE `article_collect` (
`id` int(11) NOT NULL AUTO_INCREMENT,
`article_id` int(11) NULL,
`user_id` int(11) NULL,
PRIMARY KEY (`id`) 
)
COMMENT = '资讯收藏';

CREATE TABLE `article_comment` (
`id` int(11) NOT NULL AUTO_INCREMENT,
`article_id` int(11) NULL,
`user_id` int(11) NULL,
PRIMARY KEY (`id`) 
)
COMMENT = '资讯评论';

CREATE TABLE `dictionary` (
`id` int(11) NOT NULL AUTO_INCREMENT,
PRIMARY KEY (`id`) 
)
COMMENT = '数据字典';

CREATE TABLE `coupon` (
`id` int(11) NOT NULL AUTO_INCREMENT,
`admin_id` int(11) NULL,
PRIMARY KEY (`id`) 
)
COMMENT = '优惠券';

CREATE TABLE `user_coupon` (
`id` int(11) NOT NULL AUTO_INCREMENT,
`coupon_id` int(11) NULL,
`user_id` int(11) NULL,
PRIMARY KEY (`id`) 
)
COMMENT = '用户优惠券';

CREATE TABLE `logistics` (
`id` int(11) NOT NULL AUTO_INCREMENT,
`orders_id` int(11) NULL,
PRIMARY KEY (`id`) 
)
COMMENT = '物流信息';

CREATE TABLE `topic` (
`id` int(11) NOT NULL AUTO_INCREMENT,
`admin_id` int(11) NULL,
PRIMARY KEY (`id`) 
)
COMMENT = '专题活动';

CREATE TABLE `topic_goods` (
`id` int(11) NOT NULL AUTO_INCREMENT,
`topic_id` int(11) NULL,
`goods_id` int(11) NULL,
PRIMARY KEY (`id`) 
)
COMMENT = '专题商品';

CREATE TABLE `ad` (
`id` int(11) NOT NULL AUTO_INCREMENT,
`admin_id` int(11) NULL,
PRIMARY KEY (`id`) 
)
COMMENT = '广告';

CREATE TABLE `goods_comment` (
`id` int(11) NOT NULL AUTO_INCREMENT,
`user_id` int(11) NULL,
`goods_id` int(11) NULL,
PRIMARY KEY (`id`) 
)
COMMENT = '商品评论';

CREATE TABLE `goods_collect` (
`id` int(11) NOT NULL,
`user_id` int(11) NULL,
`goods_id` int(11) NULL,
PRIMARY KEY (`id`) 
);


ALTER TABLE `article_category` ADD CONSTRAINT `fk_article_category_admin_1` FOREIGN KEY (`admin_id`) REFERENCES `admin` (`id`);
ALTER TABLE `article` ADD CONSTRAINT `fk_article_admin_1` FOREIGN KEY (`admin_id`) REFERENCES `admin` (`id`);
ALTER TABLE `article` ADD CONSTRAINT `fk_article_article_category_1` FOREIGN KEY (`category_id`) REFERENCES `article_category` (`id`);
ALTER TABLE `goods_category` ADD CONSTRAINT `fk_goods_category_admin_1` FOREIGN KEY (`admin_id`) REFERENCES `admin` (`id`);
ALTER TABLE `goods` ADD CONSTRAINT `fk_goods_goods_category_1` FOREIGN KEY (`category_id`) REFERENCES `goods_category` (`id`);
ALTER TABLE `goods` ADD CONSTRAINT `fk_goods_admin_1` FOREIGN KEY (`admin_id`) REFERENCES `admin` (`id`);
ALTER TABLE `admin` ADD CONSTRAINT `fk_admin_role_1` FOREIGN KEY (`role_id`) REFERENCES `role` (`id`);
ALTER TABLE `pages` ADD CONSTRAINT `fk_pages_admin_1` FOREIGN KEY (`admin_id`) REFERENCES `admin` (`id`);
ALTER TABLE `orders_goods` ADD CONSTRAINT `fk_orders_goods_orders_1` FOREIGN KEY (`orders_id`) REFERENCES `orders` (`id`);
ALTER TABLE `orders_goods` ADD CONSTRAINT `fk_orders_goods_goods_1` FOREIGN KEY (`goods_id`) REFERENCES `goods` (`id`);
ALTER TABLE `orders` ADD CONSTRAINT `fk_orders_users_1` FOREIGN KEY (`users_id`) REFERENCES `user` (`id`);
ALTER TABLE `goods_size` ADD CONSTRAINT `fk_goods_size_goods_1` FOREIGN KEY (`goods_id`) REFERENCES `goods` (`id`);
ALTER TABLE `goods_size` ADD CONSTRAINT `fk_goods_size_size_1` FOREIGN KEY (`size_id`) REFERENCES `size` (`id`);
ALTER TABLE `store` ADD CONSTRAINT `fk_store_admin_1` FOREIGN KEY (`admin_id`) REFERENCES `admin` (`id`);
ALTER TABLE `article_collect` ADD CONSTRAINT `fk_article_collect_article_1` FOREIGN KEY (`article_id`) REFERENCES `article` (`id`);
ALTER TABLE `article_collect` ADD CONSTRAINT `fk_article_collect_user_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);
ALTER TABLE `article_comment` ADD CONSTRAINT `fk_article_comment_article_1` FOREIGN KEY (`article_id`) REFERENCES `article` (`id`);
ALTER TABLE `article_comment` ADD CONSTRAINT `fk_article_comment_user_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);
ALTER TABLE `user_coupon` ADD CONSTRAINT `fk_user_coupon_coupon_1` FOREIGN KEY (`coupon_id`) REFERENCES `coupon` (`id`);
ALTER TABLE `user_coupon` ADD CONSTRAINT `fk_user_coupon_user_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);
ALTER TABLE `logistics` ADD CONSTRAINT `fk_logistics_orders_1` FOREIGN KEY (`orders_id`) REFERENCES `orders` (`id`);
ALTER TABLE `coupon` ADD CONSTRAINT `fk_coupon_admin_1` FOREIGN KEY (`admin_id`) REFERENCES `admin` (`id`);
ALTER TABLE `topic` ADD CONSTRAINT `fk_goods_topic_admin_1` FOREIGN KEY (`admin_id`) REFERENCES `admin` (`id`);
ALTER TABLE `topic_goods` ADD CONSTRAINT `fk_topic_goods_topic_1` FOREIGN KEY (`topic_id`) REFERENCES `topic` (`id`);
ALTER TABLE `topic_goods` ADD CONSTRAINT `fk_topic_goods_goods_1` FOREIGN KEY (`goods_id`) REFERENCES `goods` (`id`);
ALTER TABLE `ad` ADD CONSTRAINT `fk_ad_admin_1` FOREIGN KEY (`admin_id`) REFERENCES `admin` (`id`);
ALTER TABLE `address` ADD CONSTRAINT `fk_address_user_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);
ALTER TABLE `goods_comment` ADD CONSTRAINT `fk_goods_comment_user_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);
ALTER TABLE `goods_comment` ADD CONSTRAINT `fk_goods_comment_goods_1` FOREIGN KEY (`goods_id`) REFERENCES `goods` (`id`);
ALTER TABLE `goods_collect` ADD CONSTRAINT `fk_goods_collect_user_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);
ALTER TABLE `goods_collect` ADD CONSTRAINT `fk_goods_collect_goods_1` FOREIGN KEY (`goods_id`) REFERENCES `goods` (`id`);


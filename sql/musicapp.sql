/*
Navicat MySQL Data Transfer

Source Server         : localhost_3308
Source Server Version : 80013
Source Host           : localhost:3308
Source Database       : musicapp

Target Server Type    : MYSQL
Target Server Version : 80013
File Encoding         : 65001

Date: 2019-12-19 14:09:52
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for music
-- ----------------------------
DROP TABLE IF EXISTS `music`;
CREATE TABLE `music` (
  `songId` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `songName` varchar(50) NOT NULL,
  `songAuthor` varchar(200) NOT NULL,
  `songPath` varchar(255) NOT NULL,
  `lyricsPath` varchar(255) DEFAULT NULL,
  `createTime` datetime(6) NOT NULL,
  `updateTime` datetime(6) NOT NULL,
  PRIMARY KEY (`songId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of music
-- ----------------------------
INSERT INTO `music` VALUES ('1', '玫瑰少年', '蔡依林', '玫瑰少年.mp3', '11', '2019-12-11 09:39:32.000000', '2019-12-11 09:39:36.000000');
INSERT INTO `music` VALUES ('2', '你也有今天', '蔡依林', '你也有今天-蔡依林.mp3', '11', '2019-12-11 09:40:02.000000', '2019-12-11 09:40:04.000000');
INSERT INTO `music` VALUES ('3', '白昼之夜', '林隆璇', '林隆璇 - 白昼之夜.mp3', '11', '2019-12-11 09:40:36.000000', '2019-12-11 09:40:38.000000');
INSERT INTO `music` VALUES ('4', '想い出は遠くの日々', '天門', '天門 - 想い出は遠くの日々.mp3', '11', '2019-12-11 14:18:02.000000', '2019-12-11 14:18:04.000000');
INSERT INTO `music` VALUES ('5', '消极掰', '蔡依林', '消极掰-蔡依林.mp3', 'dfs', '2019-12-11 14:18:17.000000', '2019-12-11 14:18:20.000000');
INSERT INTO `music` VALUES ('6', 'River Flows in You', 'Yiruma', 'Yiruma - River Flows in You.mp3', '131', '2019-12-11 00:00:13.000000', '2019-12-11 00:00:33.000000');
INSERT INTO `music` VALUES ('7', '同じヒカリ (同一片光芒)', '立花慎之介', '立花慎之介-同じヒカリ (同一片光芒).mp3', 'ss', '2019-12-11 15:42:21.000000', '2019-12-11 15:42:24.000000');

-- ----------------------------
-- Table structure for musiclist
-- ----------------------------
DROP TABLE IF EXISTS `musiclist`;
CREATE TABLE `musiclist` (
  `songListId` varchar(255) NOT NULL,
  `songListName` varchar(255) NOT NULL,
  `songSum` int(10) NOT NULL,
  `createTime` datetime(6) NOT NULL,
  `updateTime` datetime(6) NOT NULL,
  PRIMARY KEY (`songListId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of musiclist
-- ----------------------------
INSERT INTO `musiclist` VALUES ('33dec450-3133-4612-8863-275c9c7ab540', '3', '1', '2019-12-16 14:01:39.406000', '2019-12-16 14:01:39.406000');
INSERT INTO `musiclist` VALUES ('47ace6a6-3b31-4169-b7bd-85374affc363', '1', '1', '2019-12-16 14:01:26.674000', '2019-12-16 14:01:26.674000');
INSERT INTO `musiclist` VALUES ('d3265c68-6897-4e8d-8442-058ea3d77333', '2', '1', '2019-12-16 14:01:32.528000', '2019-12-16 14:01:32.528000');

-- ----------------------------
-- Table structure for songforlist
-- ----------------------------
DROP TABLE IF EXISTS `songforlist`;
CREATE TABLE `songforlist` (
  `id` varchar(255) NOT NULL,
  `songId` varchar(255) NOT NULL,
  `songListId` varchar(255) NOT NULL,
  `createTime` datetime(6) NOT NULL,
  `updateTime` datetime(6) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `songListId_index` (`songListId`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of songforlist
-- ----------------------------
INSERT INTO `songforlist` VALUES ('246f8f56-9d62-40ee-b5f7-1567d64ea83b', '4', 'd3265c68-6897-4e8d-8442-058ea3d77333', '2019-12-16 14:41:31.428000', '2019-12-16 14:41:31.428000');
INSERT INTO `songforlist` VALUES ('932efa81-636e-4973-90d8-fd0003493de9', '1', '47ace6a6-3b31-4169-b7bd-85374affc363', '2019-12-16 14:46:40.247000', '2019-12-16 14:46:40.247000');
INSERT INTO `songforlist` VALUES ('fcab7e07-0209-492c-ac4d-e4b60b6835db', '3', '33dec450-3133-4612-8863-275c9c7ab540', '2019-12-16 14:01:54.574000', '2019-12-16 14:01:54.574000');

/*
SQLyog Community v13.1.6 (64 bit)
MySQL - 10.4.19-MariaDB : Database - epm
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`epm` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `epm`;

/*Table structure for table `users` */

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `userID` int(10) NOT NULL AUTO_INCREMENT,
  `userName` varchar(50) DEFAULT NULL,
  `password` varchar(50) DEFAULT NULL,
  `firstName` varchar(50) DEFAULT NULL,
  `middleName` varchar(50) DEFAULT NULL,
  `lastName` varchar(50) DEFAULT NULL,
  `birthday` date DEFAULT NULL,
  `gender` int(1) DEFAULT NULL,
  `street` varchar(30) DEFAULT NULL,
  `barangay` varchar(30) DEFAULT NULL,
  `city` varchar(30) DEFAULT NULL,
  `province` varchar(30) DEFAULT NULL,
  `contactNumber` varchar(20) DEFAULT NULL,
  `email` varchar(20) DEFAULT NULL,
  `department` int(1) DEFAULT NULL,
  `sss` varchar(20) DEFAULT NULL,
  `tin` varchar(20) DEFAULT NULL,
  `philhealth` varchar(20) DEFAULT NULL,
  `role` int(1) DEFAULT NULL,
  `status` int(1) DEFAULT 1,
  PRIMARY KEY (`userID`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

/*Data for the table `users` */

insert  into `users`(`userID`,`userName`,`password`,`firstName`,`middleName`,`lastName`,`birthday`,`gender`,`street`,`barangay`,`city`,`province`,`contactNumber`,`email`,`department`,`sss`,`tin`,`philhealth`,`role`,`status`) values 
(1,'admin','admin','Juan','Asuncion','Dela Cruz','1994-07-21',1,'Ortega Street','Catbangen','San Fernando','La Union','09132019121','email@gmail.com',4,'123123123','321321312','123123123',1,1);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

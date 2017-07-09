CREATE DATABASE personalmaglook;
USE personalmaglook;


CREATE TABLE `articles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `url` text NOT NULL,
  `image_url` text,
  `description` text NOT NULL,
  `category` text NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `LikeId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `LikeId` (`LikeId`),
  CONSTRAINT `articles_ibfk_1` FOREIGN KEY (`LikeId`) REFERENCES `likes` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=66 DEFAULT CHARSET=utf8;

CREATE TABLE `likes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` text NOT NULL,
  `email_address` text NOT NULL,
  `password` text NOT NULL,
  `picture` text,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `LikeId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `LikeId` (`LikeId`),
  CONSTRAINT `users_ibfk_1` FOREIGN KEY (`LikeId`) REFERENCES `likes` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

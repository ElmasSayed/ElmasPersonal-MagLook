create database SequelizedMagLookExample;
use SequelizedMagLookExample;


create table Users 
(
	id int auto_increment not null,
	name varchar(100) not null
	user_name varchar(100) not null,
	password varchar(100) not null,
	picture varchar(500),
	primary key (id)
);

create table Articles 
(
	id int auto_increment not null,
	url varchar(500) not null,
	image_url varchar(500) not null,
	description varchar(5000) not null,
	category varchar(500) not null,
	primary key (id)
);

create table Likes
(
	id int auto_increment not null,
    user_id int not null,
    article_id int not null,
    primary key (id)
)

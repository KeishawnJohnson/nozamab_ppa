drop database bamazon;
create database bamazon;
use bamazon;

create table products (
item_id int auto_increment,
product_name varchar(1000) not null,
department_name varchar(1000) not null, 
price integer(3) not null, 
stock_quantity integer(4) not null,
primary key (item_id)
);


select * from products;
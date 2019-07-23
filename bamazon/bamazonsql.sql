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

insert into products (product_name, department_name, price, stock_quantity)
values ("White Tee Shirt", "Apparel", 10, 100), ("Swim Trunks", "Apparel", 35, 150), ("No Show Socks", "Apparel", 15, 50), ("Cook-Out Dad Sandels", "Apparel", 60, 40);

insert into products (product_name, department_name, price, stock_quantity)
values ("Dell Laptop", "Electronics", 650, 20), ("Airpods", "Electronics", 169, 40), ("Texas Instrument TI-84", "Electronics", 140, 10);

insert into products (product_name, department_name, price, stock_quantity)
values ("Ice Cream", "Food", 5, 20), ("Sweet Potatoes", "Food", 10, 30), ("Cereal", "Food", 7, 50);

select * from products;
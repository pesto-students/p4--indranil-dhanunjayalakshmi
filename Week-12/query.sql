select * from ITEMS where WEIGHT = (select min(weight) from ITEMS);

select * from WAREHOUSES where CITY = "PUNE";

select * from ORDERS where CNO = (select CNO from CUSTOMER where CNAME = "MR.Patil");

SELECT * FROM WAREHOUSES where wid = 
(select wid from STORES group by wid order by count(wid) desc limit 1);

select * from ITEMS where itemno = (select itemno from ORDER_DETAILS group by itemno order by sum(ordered_quantity) limit 1);

select * from ORDERS inner join CUSTOMER where CUSTOMER.CNO = ORDERS.CNO;
# 数据库建表

`db.createCollection('frfw-seals')`

# 数据表说明

## frfw-seals 表

`frfw-seals`表用于存储用户申请的印章数据，表结构如下。

|   字段    |  类型  |    说明     |
| :-------: | :----: | :---------: |
| licencesn | String | 电照序列号  |
| seal_name | String |  印章名称   |
| seal_type | String |  印章类型   |
| pic_data  | String | 图片 Base64 |
| pic_type  | String |  图片类型   |
|  seal_sn  | String | 印章序列号  |
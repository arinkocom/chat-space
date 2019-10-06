## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|t.reference :user|null: false, foreign_key: true|
|t.reference :group_id|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user


## usersテーブル

|Colum|Type|Options|
|-----|----|-------|
|name|string|null: false,index: true|
|email|string|null: false,foreigh_key: true|
|password|string|null: false,foreign_key: true|


### Association
- has many :groups_users
- has many :groups, through: :groups_users
- has_many :comments


## commentsテーブル

|Colom|Type|Options|
|-----|----|-------|
|t.reference :user|null: false, foreigh_key:true|
|t.reference :group_id|null: false,foreigh_key: true|
|image|text|
|text|text|

### Association

- belongs_to :user
- belongs_to :group

## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false, foreign_key: true|


### Association
- has many :groups_users
- has many :users, through: :groups_users
- has many :comments


## 





# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

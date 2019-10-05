## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user


## usersテーブル

|Colum|Type|Options|
|-----|----|-------|
|user_id|integer|null: false,foreigh_key: true|
|name|string|null: false,foreigh_key: true|
|email|string|null: false,foreigh_key: true|
|password|string|null: false,foreign_key: true|


### Association
- has many :groups_users
- has many :groups, through: :groups_users
- has_many :comments


## commentsテーブル

|Colom|Type|Options|
|-----|----|-------|
|user_id|integer|null: false, foreigh_key:true|
|comment_id|integer|null: false,foreigh_key: true|
|text||
|image|text|

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
- has many comments


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

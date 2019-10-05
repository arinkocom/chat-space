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
|t.references :user_name, foreign_key: true|
|t.references :user_email, foreign_key: true|
|user_password|integer|null: false,foreign_key: true|


### Association

- has_many :comments


## commentsテーブル

|Colom|Type|Options|
|-----|----|-------|
|user_id|integer|null: false, foreigh_key:true|
|comment_id|integer|null: false,foreigh_key: true|

### Asociation

- belongs_to :user





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

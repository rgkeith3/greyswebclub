## Schema Info

### users

col.name   |dataType |details
-----------|---------|---------------------
id         |integer  |not null, primary key
username   |string   |not null, indexed, unique
email      |string   |not null, indexed, unique
password_digest|string | not null
session_token| string| not null, indexed, unique

### follows
col.name | dataType | details
---------|----------|-------------
id  | integer | not null, primary key
follower | integer | not null, foreign key (ref. the user doing the following), indexed
followee | integer | not null, foreign key (ref. the user being followed), indexed

### posts
col.name | dataType | details
---------|----------|-----------
id | integer | not null, primary key
post_type | string| not null
img_url | string |
text | text |
audio_url | string|
link | string|
video_url | string

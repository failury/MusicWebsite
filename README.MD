
# 模块


权限管理: 
- User
- Role
- Permission

音乐数据库: 
- name
- author
- album
- playlist
- type
- tag
- addDate
- publishDate
- genre
- url

# API

- `/user`
    - addUser
        - POST
        - Body: User entity
    - updateUser
        - PUT
        - PathVariable ("/user/{id}")
        - Body: User entity
    - deleteUser
        - DELETE
        - PathVariable ("/user/{id}")
    - getAllUser
        - GET
    - getUserById
        - GET
        - PathVariable ("/user/{id}")
    - getUserByUsername
        - GET
        - PathVariable ("/user/{username}")

- `/role`
    - addUser
        - POST
        - Body: User entity
    - updateUser
        - PUT
        - PathVariable ("/user/{id}")
        - Body: User entity
    - deleteUser
        - DELETE
        - PathVariable ("/user/{id}")
    - getAllUser
        - GET
    - getUserById
        - GET
        - PathVariable ("/user/{id}")
    - getUserByUsername
        - GET
        - PathVariable ("/user/{username}")

- `/permission`
    - addUser
        - POST
        - Body: User entity
    - updateUser
        - PUT
        - PathVariable ("/user/{id}")
        - Body: User entity
    - deleteUser
        - DELETE
        - PathVariable ("/user/{id}")
    - getAllUser
        - GET
    - getUserById
        - GET
        - PathVariable ("/user/{id}")
    - getUserByUsername
        - GET
        - PathVariable ("/user/{username}")


- `/music`
    - addMusic
        - POST
        - Body: Music entity
    - updateMusic
        - PUT
        - PathVariable ("/music/{id}")
        - Body: Music entity
    - deleteMusic
        - DELETE
        - PathVariable ("/music/{id}")
    - getAllMusic
        - GET
    - getMusicById
        - GET
        - PathVariable ("/music/{id}")
    - getMusicByName
        - GET
        - PathVariable ("/music/{musicname}")
    - getMusicByAuthor
        - GET
        - PathVariable ("/music/{authorname}")
    - getMusicByUser
        - GET
        - PathVariable ("/music/{username}")

- `musiclist`

- `author`

# Entity/Model/POJO

```
User: {
    id: "1",
    username: "klen",
    password: "123456",
    role: "admin"
}

Role: {
    id:"1",
    code: "ROLE_ADMIN",
    name: "admin",
    permission: "..."

}

Permission: {
    id: 1,
    code: "用户权限",
    name: "user"
}


Music: {
    name : "",
    author : "",
    user: "",
    album : "",
    playlist : "",
    type : ,
    tag : ,
    addDate : ,
    publishDate: ,
    genre : ,
    url : 
}

Author: {
    id: "1",
    name: "peter"
}

```
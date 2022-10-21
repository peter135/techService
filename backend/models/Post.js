const db = require("../config/db");

class Post {

    constructor(title,body) {
        this.title = title
        this.body = body
    }

    async save() {
        let d = new Date()
        let yyy = d.getFullYear()
        let mm = d.getMonth() +1;
        let dd = d.getDay()

        let createdAtDate = `${yyy}-${mm}-${dd}`
        console.log("post",this.title,this.body,createdAtDate)

        let sql = `
            INSERT INTO posts(
                title,
                body,
                created_at
            )
            VALUES(
                '${this.title}',
                '${this.body}',
                '${createdAtDate}'
            )
        `
        
        return db.execute(sql)
       
    }

    static findAll() {
        let sql = "SELECT * FROM posts;";
        return db.execute(sql)
    }

    static findById(id) {
        let sql = `SELECT * FROM posts WHERE id = ${id};`;
        return db.execute(sql)
    }

}

module.exports = Post;
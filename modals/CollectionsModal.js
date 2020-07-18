export class Suggestion {
    constructor(key,name,email,suggestion,createdAt){
        this.key=key,
        this.name=name,
        this.email=email,
        this.suggestion=suggestion,
        this.createdAt=createdAt
    }
}

export class Feed {
    constructor(key,title,link,content,createdAt){
        this.key=key,
        this.title=title,
        this.link=link,
        this.content=content,
        this.createdAt=createdAt
    }
}

export class Info {
    constructor(key,title,link,content,createdAt){
        this.key=key
        this.title=title,
        this.link=link,
        this.content=content,
        this.createdAt=createdAt
    }
}
class Story {
    constructor(title, creator) {
        this.id = 0
        this.title = title
        this.creator = creator
        this.comments = []
        this._likes = []
    };
   
    get likes() {
        if (this._likes.length < 1) {
            return `${this.title} has 0 likes`
        } else if (this._likes.length === 1 ) {
           return `${this._likes[0]} likes this story!`
        } else {
            return `${this._likes[0]} and ${this._likes.length - 1 } others like this story!`
        }
    }
   
    set likes(username) {
      this._likes.push(username)
    }
   
    like(username) {
        if (this._likes.includes(username)) {
            throw new Error("You can't like the same story twice!")
        } else if (username == this.creator) {
            throw new Error("You can't like your own story!")
        } else {
            this.likes = username
            // this._likes.push(username)
            return `${username} liked ${this.title}!`
        }
   
    }
   
    dislike(username) {
      if(!this._likes.includes(username)){
          throw new Error ("You can't dislike this story!")
      }else {
          let index = this._likes.indexOf(username);
          this._likes.splice(index , 1)
          return `${username} disliked ${this.title}`
      }
    }
   
    comment(username, content, id) {
      if(id === undefined || !this.comments.find(c => c.id == id)) {
        this.comments.push({
          id: this.comments.length + 1,
          username,
          content,
          replies: []
        })
        return `${username} commented on ${this.title}`
      } else if (id && !!this.comments.find(c => c.id == id)) {
        const comment = this.comments.find(c => c.id == id)
        comment.replies.push({
          id: `${id}.${comment.replies.length + 1}`,
          content,
          username
        })
        return `You replied successfuly`
      }
    }

    toString(sortingType) {
      const comments = `${this.comments.map(c => {
        return `--${c.id}. ${c.username}: ${c.content}
        ${c.replies.length > 0 ? c.replies.map(r => {
          return `---${r.id}. ${r.username}: ${r.content}
          `
        }): ''}
      `
      })}`.split('  ,').join('')
      return `
        Title: ${this.title}
        Creator: ${this.creator}
        Likes: ${this._likes.length}
        Comments: 
        ${comments}
   
      `
    }
  }
   
  let art = new Story("My Story", "Anny");
  art.like("John");
  console.log(art.likes);
  art.dislike("John");
  console.log(art.likes);
  art.comment("Sammy", "Some Content");
  console.log(art.comment("Ammy", "New Content"));
  art.comment("Zane", "Reply", 1);
  art.comment("Jessy", "Nice :)");
  console.log(art.comment("SAmmy", "Reply@", 1));
  console.log()
  console.log(art.toString('username'));
  console.log()
  art.like("Zane");
  console.log(art.toString('desc'));
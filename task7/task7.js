"use strict"

let posts = [
      {
       id: '1',
       description: 'Более 76 тыс. человек во всем мире уже излечились от заболевания, спровоцированного новым коронавирусом, тогда как количество смертей превысило 6,4 тыс.',
       createdAt: new Date('2020-03-17T23:00:00'),
       author: 'Иванов Иван',
       photoLink: 'https://www.pressball.by/images/stories/2020/03/20200310231542.jpg',
       hashTags: ['#hashtag1', '#hashtag2', '#EA', '#PS4'],
       likes: ['Виктор Комаров', 'Antony Pavlov', 'Gorrive Curipita']
      },

      {
       id: '2',
       description: 'Более 76 тыс. человек во всем мире уже излечились от заболевания, спровоцированного новым коронавирусом, тогда как количество смертей превысило 6,4 тыс.',
       createdAt: new Date('2020-03-18T15:42:05'),
       author: 'Максимов Максим',
       hashTags: ['#hashtag1', '#sport', '#EA', '#PS4'],
       likes: ['Виктор Комаров', 'Antony Pavlov', 'Gorrive Curipita']
      },

      {
       id: '3',
       description: 'Привет. ',
       createdAt: new Date('2020-03-18T23:40:07'),
       author: 'Иванов Иван',
       photoLink: 'https://www.pressball.by/images/stories/2020/03/20200310231542.jpg',
       hashTags: ['#hashtag1', '#hashtag2', '#sport', '#PS4'],
       likes: ['Виктор Комаров', 'Antony Pavlov', 'Gorrive Curipita']
      },

      {
       id: '4',
       description: 'Более 76 тыс. человек во всем мире уже излечились от заболевания, спровоцированного новым коронавирусом, тогда как количество смертей превысило 6,4 тыс.',
       createdAt: new Date('2020-03-20T20:15:43'),
       author: 'Иванов Иван',
       photoLink: 'https://www.pressball.by/images/stories/2020/03/20200310231542.jpg',
       hashTags: ['#hashtag1', '#hashtag2', '#EA', '#PS4'],
       likes: ['Виктор Комаров', 'Antony Pavlov', 'Gorrive Curipita']
      },

      {
       id: '5',
       description: 'Более 76 тыс. человек во всем мире уже излечились от заболевания, спровоцированного новым коронавирусом, тогда как количество смертей превысило 6,4 тыс.',
       createdAt: new Date('2020-03-15T03:00:00'),
       author: 'Ольг Викторов',
       photoLink: 'https://www.pressball.by/images/stories/2020/03/20200310231542.jpg',
       hashTags: ['#hashtag1', '#hashtag2', '#EA', '#PS4'],
       likes: ['Виктор Комаров', 'Antony Pavlov', 'Gorrive Curipita']
      },

      {
       id: '6',
       description: 'Более 76 тыс. человек во всем мире уже излечились от заболевания, спровоцированного новым коронавирусом, тогда как количество смертей превысило 6,4 тыс.',
       createdAt: new Date('2000-03-17T23:00:00'),
       author: 'Иванов Иван',
       photoLink: 'https://www.pressball.by/images/stories/2020/03/20200310231542.jpg',
       hashTags: ['#hashtag1', '#hashtag2', '#sport', '#EA'],
       likes: ['Виктор Комаров', 'Antony Pavlov', 'Gorrive Curipita']
      },

      {
       id: '7',
       description: 'Более 76 тыс. человек во всем мире уже излечились от заболевания, спровоцированного новым коронавирусом, тогда как количество смертей превысило 6,4 тыс.',
       createdAt: new Date('2021-05-17T23:04:50'),
       author: 'Иван Дулин',
       photoLink: 'https://www.pressball.by/images/stories/2020/03/20200310231542.jpg',
       hashTags: ['#hashtag1', '#hashtag2', '#sport', '#EA', '#PS4'],
       likes: ['Виктор Комаров', 'Antony Pavlov', 'Gorrive Curipita']
      },

      {
       id: '8',
       description: 'Более 76 тыс. человек во всем мире уже излечились от заболевания, спровоцированного новым коронавирусом, тогда как количество смертей превысило 6,4 тыс.',
       createdAt: new Date('2021-03-17T23:47:49'),
       author: 'ManInBlack',
       photoLink: 'https://www.pressball.by/images/stories/2020/03/20200310231542.jpg',
       hashTags: ['#hashtag2', '#sport', '#EA', '#PS4'],
       likes: ['Виктор Комаров', 'Antony Pavlov', 'Gorrive Curipita']
      },

      {
       id: '9',
       description: 'Более 76 тыс. человек во всем мире уже излечились от заболевания, спровоцированного новым коронавирусом, тогда как количество смертей превысило 6,4 тыс.',
       createdAt: new Date('2008-03-17T10:00:00'),
       author: 'Иванов Иван',
       photoLink: 'https://www.pressball.by/images/stories/2020/03/20200310231542.jpg',
       hashTags: ['#hashtag1', '#hashtag2', '#sport', '#EA', '#PS4'],
       likes: ['Виктор Комаров', 'Antony Pavlov', 'Gorrive Curipita']
      },

      {
       id: '10',
       description: 'Более 76 тыс. человек во всем мире уже излечились от заболевания, спровоцированного новым коронавирусом, тогда как количество смертей превысило 6,4 тыс.',
       createdAt: new Date('2020-03-17T23:00:00'),
       author: 'Иванов Иван',
       photoLink: 'https://www.pressball.by/images/stories/2020/03/20200310231542.jpg',
       hashTags: ['#hashtag1', '#hashtag2', '#EA', '#PS4'],
       likes: ['Виктор Комаров', 'Antony Pavlov', 'Gorrive Curipita']
      },

      {
       id: '11',
       description: 'Более 76 тыс. человек во всем мире уже излечились от заболевания, спровоцированного новым коронавирусом, тогда как количество смертей превысило 6,4 тыс.',
       createdAt: new Date('2020-03-17T23:00:00'),
       author: 'Иванов Иван',
       hashTags: ['#hashtag1', '#hashtag2', '#sport', '#EA', '#PS4'],
       likes: ['Виктор Комаров', 'Antony Pavlov', 'Gorrive Curipita']
      },

      {
       id: '12',
       description: 'Более 76 тыс. человек во всем мире уже излечились от заболевания, спровоцированного новым коронавирусом, тогда как количество смертей превысило 6,4 тыс.',
       createdAt: new Date('2020-02-17T20:10:04'),
       author: 'Press F',
       hashTags: ['#hashtag1', '#hashtag2', '#sport', '#EA', '#PS4'],
       likes: ['Виктор Комаров', 'Antony Pavlov', 'Gorrive Curipita']
      },

      {
       id: '13',
       description: 'Более 76 тыс. человек во всем мире уже излечились от заболевания, спровоцированного новым коронавирусом, тогда как количество смертей превысило 6,4 тыс.',
       createdAt: new Date('2020-03-17T22:40:01'),
       author: 'oh my',
       hashTags: ['#hashtag1', '#hashtag2', '#sport', '#PS4'],
       likes: ['Виктор Комаров', 'Antony Pavlov', 'Gorrive Curipita']
      },

      {
       id: '14',
       description: 'Более 76 тыс. человек во всем мире уже излечились от заболевания, спровоцированного новым коронавирусом, тогда как количество смертей превысило 6,4 тыс.',
       createdAt: new Date('2020-03-17T23:00:00'),
       author: 'Иванов Иван',
       hashTags: ['#hashtag1', '#hashtag2', '#sport', '#EA', '#PS4'],
       likes: ['Виктор Комаров', 'Antony Pavlov', 'Gorrive Curipita']
      },

      {
       id: '15',
       description: 'Более 76 тыс. человек во всем мире уже излечились от заболевания, спровоцированного новым коронавирусом, тогда как количество смертей превысило 6,4 тыс.',
       createdAt: new Date('2000-01-17T23:00:00'),
       author: 'Igor Ivanovich',
       hashTags: ['#hashtag1', '#hashtag2', '#EA', '#PS4'],
       likes: ['Виктор Комаров', 'Antony Pavlov', 'Gorrive Curipita']
      },

      {
       id: '16',
       description: 'Более 76 тыс. человек во всем мире уже излечились от заболевания, спровоцированного новым коронавирусом, тогда как количество смертей превысило 6,4 тыс.',
       createdAt: new Date('2025-03-17T23:20:20'),
       author: 'Иванов Кирилл',
       hashTags: ['#hashtag1', '#hashtag2', '#sport', '#EA', '#PS4'],
       likes: ['Виктор Комаров', 'Antony Pavlov', 'Gorrive Curipita']
      },

      {
       id: '17',
       description: 'Более 76 тыс. человек во всем мире уже излечились от заболевания, спровоцированного новым коронавирусом, тогда как количество смертей превысило 6,4 тыс.',
       createdAt: new Date('2020-03-17T23:20:00'),
       author: 'пщфышра',
       hashTags: ['#hashtag1', '#hashtag2', '#sport', '#PS4'],
       likes: ['Виктор Комаров', 'Antony Pavlov', 'Gorrive Curipita']
      },

      {
       id: '18',
       description: 'Более 76 тыс. человек во всем мире уже излечились от заболевания, спровоцированного новым коронавирусом, тогда как количество смертей превысило 6,4 тыс.',
       createdAt: new Date('2020-03-17T13:00:20'),
       author: 'фтоф фдла',
       hashTags: ['#hashtag1', '#hashtag2', '#sport', '#EA', '#PS4'],
       likes: ['Виктор Комаров', 'Antony Pavlov', 'Gorrive Curipita']
      },

      {
       id: '19',
       description: 'Более 76 тыс. человек во всем мире уже излечились от заболевания, спровоцированного новым коронавирусом, тогда как количество смертей превысило 6,4 тыс.',
       createdAt: new Date('2000-03-17T23:06:00'),
       author: 'фафф ф ф ф',
       hashTags: ['#hashtag1', '#hashtag2', '#sport', '#EA', '#PS4'],
       likes: ['Виктор Комаров', 'Antony Pavlov', 'Gorrive Curipita']
      },

      {
       id: '20',
       description: 'Более 76 тыс. человек во всем мире уже излечились от заболевания, спровоцированного новым коронавирусом, тогда как количество смертей превысило 6,4 тыс.',
       createdAt: new Date('2020-05-17T23:00:00'),
       author: 'Goro',
       hashTags: ['#hashtag1', '#hashtag2', '#sport', '#EA', '#PS4'],
       likes: ['Виктор Комаров', 'Antony Pavlov', 'Gorrive Curipita']
      }
      ];

let testPost = {
   description: 'HI ',
   createdAt: new Date('1990-03-18T23:40:07'),
   author: 'name surname',
   photoLink: 'https://www.pressball.by/images/stories/2020/03/20200310231542.jpg',
   hashTags: ['#hashtag2', '#sport'],
   likes: ['Виктор Комаров', 'Antony Pavlov', 'Gorrive Curipita']
};

class PostList {
  _postCollection = [];



  constructor(postCollection) {
    this._postcollection = postCollection;
  }

  static _validatePost(post) {
    return  ((Array.isArray(post.likes))
          &&(typeof post.id === 'string')
          &&(typeof post.description === 'string')
          &&(post.createdAt instanceof Date)
          &&(typeof post.author === 'string'));
  }

  getPost(id) {     
    return this._postcollection.find((post) => post.id === id);
  }

  addPost(post) {
    if (typeof post != 'object') {
      return false;
    }
    let temp = '1';
    while (this._postcollection.findIndex((post) => post.id === temp) !== -1) {
      temp = Math.random().toString(32);
    }
    post.id = temp;

    if (!PostList._validatePost(post)) {
      return false;
    }
    this._postcollection.push(post);
    //console.log("Post added with ID: " + post.id);
    return true;
  }

  editPost(id, post) {
    var postIndex = this._postcollection.findIndex((post) => post.id === id);
    if (postIndex === -1) {
      return false;
    } 
    var clone = Object.assign({}, this._postcollection[postIndex]);

    if (typeof post.description !== 'undefined') {
      clone.description = post.description;
    }
    if (typeof post.photoLink !== 'undefined') {
      clone.photoLink = post.photoLink;
    }    
    if (typeof post.hashTags !== 'undefined') {
      clone.hashTags = post.hashTags;
    }
    if (typeof post.likes !== 'undefined') {
      clone.likes = post.likes;
    }

    if (!PostList._validatePost(clone)) {
      return false;
    }
    this._postcollection[postIndex] = clone;
    return true;
  }

  removePost(id) {
    var postToRemove = this.getPost(id);
    if (postToRemove === undefined) return false;
    this._postcollection.splice(postToRemove, 1);
    return true;
  }

  getPosts(skip, top, filterConfig) {
    let somePosts = this._postcollection.slice();
    if (typeof filterConfig.author === 'string') {
      somePosts = somePosts.filter(item => item.author === filterConfig.author);
    }
    if (filterConfig.createdAt instanceof Date) {
      somePosts = somePosts.filter(item => item.createdAt === filterConfig.createdAt);
    }
    if (Array.isArray(filterConfig.hashTags)) {
      let valid = true;
      for (let i of filterConfig.hashTags) {
        if (typeof i !== 'string') {
          valid = false;
          break;
        }
      }
      if (valid) {
        //somePosts = somePosts.filter(item => item.hashTags.some(element => filterConfig.hashTags.includes(element)));
        somePosts = somePosts.filter(item => filterConfig.hashTags.every(element => item.hashTags.includes(element)));
      }
    }
    somePosts.sort(function(a, b){
      return b.createdAt - a.createdAt; 
    })
    somePosts = somePosts.slice(skip, skip + top);
    return somePosts;
  }

  addAll(posts) {
    return posts.filter(item => !this.addPost(item));
  }

  getPostTesting() {
    console.log(".....getPost testing.....");
    console.log("\n");
    console.log("with valid id:");
    console.log(this.getPost('3'));
    console.log("\n");
    console.log("with invalid id:");
    console.log(this.getPost(0));
    console.log("\n");
    console.log("\n");
  }

  validatePostTesting() {
    console.log(".....validatePost testing.....");
    console.log("\n");
    console.log("with valid post:");
    console.log(PostList._validatePost(this._postcollection[0]));
    console.log("\n");
    console.log("with invalid post:");
    console.log(PostList._validatePost(1));
    console.log("\n");
    console.log("\n");
  }

  addPostTesting() {
    console.log(".....addPost testing.....");
    console.log("\n");
    console.log("with valid post:");
    console.log(this.addPost(testPost));
    console.log("\n");
    console.log("with invalid post:");
    console.log(this.addPost(0));
    console.log("\n");
    console.log("\n");
  }

  editPostTesting() {
    console.log(".....editPost testing.....");
    console.log("\n");
    console.log("with valid post and ID:");
    console.log(this.editPost("1", testPost));
    console.log("\n");
    console.log("with invalid post:");
    console.log(this.editPost("1", {description: 1441}));
    console.log("\n");
    console.log("with invalid ID:");
    console.log(this.editPost(0, testPost));
    console.log("\n");
    console.log("\n");
  }

  removePostTesting() {
    console.log(".....removePost testing.....");
    console.log("\n");
    console.log("with valid ID:");
    console.log(this.removePost("20"));
    console.log("\n");
    console.log("with invalid ID:");
    console.log(this.removePost(30));
    console.log("\n");
    console.log("\n");
  }

  getPostsTesting() {
    console.log("..... getPosts testing.....");
    console.log("\n");
    console.log("1st valid:");
    console.log(this.getPosts(0, 10, {author: 'Иванов Иван'}));
    console.log("\n");
    console.log("2nd valid:");
    console.log(this.getPosts(0, 10, {author: 'Иванов Иван',
                     hashTags: ['#sport', '#EA']}));
    console.log("\n");
    console.log("\n");
  }

  addAllTesting() {
    console.log(".....addAll testing.....");
    console.log("\n");
    var testPostArray = [
      {
        description: 'HI ',
         createdAt: new Date('1990-03-18T23:40:07'),
         author: 'name surname',
         photoLink: 'https://www.pressball.by/images/stories/2020/03/20200310231542.jpg',
         hashTags: ['#hashtag2', '#sport'],
         likes: ['Виктор Комаров', 'Antony Pavlov', 'Gorrive Curipita']
      },
      {
        description: 'HIggfdgggddfagagadgfagagaggaga ',
         createdAt: new Date('1990-03-18T23:40:07'),
         author: '8',
         photoLink: 'https://www.pressball.by/images/stories/2020/03/20200310231542.jpg',
         hashTags: ['#hashtag2', '#sport'],
         likes: ['Виктор Комаров']
      },
      {
        description: 1,
         createdAt: new Date('1990-03-18T23:40:07'),
         author: 'name surname',
         photoLink: 'https://www.pressball.by/images/stories/2020/03/20200310231542.jpg',
         hashTags: ['#hashtag2', '#sport'],
         likes: ['Виктор Комаров', 'Antony Pavlov', 'Gorrive Curipita']
      }
    ];
    console.log(this.addAll(testPostArray));
  }
}

var PostListTest = new PostList(posts);
PostListTest.validatePostTesting();
PostListTest.getPostTesting();
PostListTest.addPostTesting();
PostListTest.editPostTesting();
PostListTest.removePostTesting();
PostListTest.getPostsTesting();
PostListTest.addAllTesting();
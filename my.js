/*
  Создайте менеджер управления данными аккаунтов пользователей соцсети SocialBook.
  
  ОБЯЗАТЕЛЬНО ПРИ ВЫПОЛНЕНИИ: 
    - написать функцию-конструктор создающую объект со свойствами и методами
    - при работе с коллекциями данных использовать функциональные методы массивов, никаких for и т. п.
  
  Для создания объекта используйте функцию-конструктор, принимающую следующие параметры:
    - users - массив пользователей. Каждый пользователь это объект с полями:
        id - уникальный идентификатор
        login - почта
        password - пароль
        isActive - статус активности
    - posts - объект с ключами равными id пользователя соцсети SocialBook. Значениями свойств 
      являются массивы постов пользователя. Каждый пост состоит из:
        id - уникальный идентификатор
        text - текст поста
        likes - количество лайков поста
        */
// JavaScript-Modul-5



function SocialBook(users = [], posts = {}) {
  this.users = users;
  this.posts = posts;
  this.getAllUsers = () => users.map(user => user.id);

  //  this.getUserByLogin = (idLogin) => users.find(userIdFromUsers => {
  //    if (userIdFromUsers.id === idLogin){
  //     return this.users;
  //   }
  //   console.log(`Такого юзера" ${idLogin}" нет `);
  // });

  this.getUserByLogin = function (login) {
    return this.users.find(user => user.login === login);
  };


  // this.getUserByLogin = function (login) {
  //  return this.users.find(user => user.login === login);
  // };


  this.getUserStatus = (idLogin) => users.map(userIdFromUsers => {

    if (userIdFromUsers.id === idLogin) {

      return 'active';
    }

  });
  // this.getUserStatus = (idLogin) => users.map(user => ({
  //            ...user,
  //            isActive: !user.isActive,
  //          })
  //          );





  this.addUser = (user) => {
    user.id = getId();
    user.isActive = false;
    this.users.push(user);
    console.log('addUser - добавляет пользователя в свойство users самого экземпляра', this.users);
  };

  this.removeUserById = (userId) => this.users.filter(userFromUsers => userFromUsers.id !== userId);



  this.getUsersCount = () => this.users.length;


  //   this.addPost = (userId, post) => {
  //     this.posts[userId].push(post);
  //   };

  //   this.removePosts = (userId, postId) => {
  //    this.posts[userId]= this.posts[userId].filter(post => post.id !== postId);
  //  };

  //  this.addPostLike = (userId, postId) => {
  //   this.posts[userId] = this.posts[userId].map(post => {
  //     if (post.id === postId) {
  //       return {
  //         ...post,
  //         likes: post.likes + 10,
  //       };
  //     }
  //     return post;
  //   })
  // };


};

/*
  Используйте следующий массив пользователей при создании экземпляра SocialBook
  */
const initialUsers = [{
    id: "-s19a6hqce",
    login: "mangozedog@mail.com",
    password: "qwe123zv",
    isActive: true
  },
  {
    id: "-qkpzenjxe",
    login: "polysweet@skynet.ze",
    password: "123zxc78",
    isActive: true
  },
  {
    id: "-e51cpd4di",
    login: "ajax2k@change.ua",
    password: "ert234qw",
    isActive: false
  }
];

/*
  Используйте следующий объект постов пользователей при создании экземпляра SocialBook
  */
const initialPosts = {
  "-s19a6hqce": [{
      id: "-5sgljaskg",
      text: "post #1",
      likes: 3
    },
    {
      id: "-199hb6igr",
      text: "post #2",
      likes: 5
    },
    {
      id: "-hy0eyw5qo",
      text: "post #3",
      likes: 13
    }
  ],
  "-qkpzenjxe": [{
      id: "-5tu69g5rf",
      text: "post #1",
      likes: 8
    },
    {
      id: "-bje766393",
      text: "post #2",
      likes: 15
    }
  ],
  "-e51cpd4di": [{
      id: "-9y6nkmlj4",
      text: "post #1",
      likes: 18
    },
    {
      id: "-i03pbhy3s",
      text: "post #2",
      likes: 45
    }
  ],
};



/*
  Для создания уникального идентификатора для поля id, используйте 
  вспомогательную функцию getId(), возвращающую уникальную строку.
  
  К примеру: const user = { id: getId(), name: 'Mango' };
  */
const getId = () => "-" + Math.random().toString(36).substr(2, 9);
const getPassord = () => "!!!" + Math.random().toString(36).substr(2, 9);
const myBook = new SocialBook(initialUsers, initialPosts);


// console.log(myBook.getUserById("-qkpzenjxe"));



console.log('getAllUsers - возвращает массив всех пользователей', myBook.getAllUsers());
console.log('getUserByLogin - объект пользователя с совпадающим логином', myBook.getUserByLogin('-s19a6hqce'));
console.log('getUserStatus -ищет пользователя по id и возвращает active если isActive true', myBook.getUserStatus('-s19a6hqce'));
console.log('removeUserById - Удаление пользователе "-qkpzenjxe"', myBook.removeUserById('-s19a6hqce'));


console.log(myBook.getUsersCount());


console.log(myBook);
// console.log(myBook.addPost('-qkpzenjxe', { id: getId(), text: 'написать функцию-конструктор', likes: 200 }));



// Add new User 
myBook.addUser({
  email: 'test-1@email.com',
  password: getPassord()
});

// // Add new User-2
// myBook.addUser({ 
//   email: '22@email.com',  
//   password: getPassord()
// });

// myBook.removePosts('-s19a6hqce', '-5sgljaskg');
// myBook.addPostLike('-s19a6hqce', '-199hb6igr');
// myBook.addPostLike('-s19a6hqce',);





// Добавьте в SocialBook следующие методы для работы с пользователями:
//   - getAllUsers() - возвращает массив всех пользователей +++++

// - getUserByLogin(login) - ищет и возвращает объект пользователя с совпадающим логином++++

// - `getUserStatus`(userId) - ищет пользователя по id и возвращает 'active' 
//   если isActive true, в противном случае возвращает 'inactive'.+++

// - addUser(user) - принимает объект user с полями email и password и добавляет 
//   ему поля id(используя функцию getId) и isActive (false). Затем добавляет пользователя в 
//   свойство users самого экземпляра. ++++

// - removeUserById(userId) - удаляет пользователя из массива пользователей по полю id

// - getUsersCount() - возвращает общее количество пользователей




//Test for delete user
// const filtered = initialUsers.filter(initialUsers => initialUsers.id !== '-s19a6hqce');

// console.log(filtered);


// const getActiveUsersPostsCountWithReduce = initialUsers =>
//   initialUsers.reduce((acc, user) => (user.isActive ? acc + user.id : acc), 0);

// const postsCount = getActiveUsersPostsCountWithReduce(initialUsers);
// console.log('postsCount: ', postsCount);





// console.log (count(initialUsers));


const users2 = [{
    name: "Mango",
    isActive: true
  },
  {
    name: "Poly",
    isActive: false
  },
  {
    name: "Ajax",
    isActive: true
  },
  {
    name: "Chelsey",
    isActive: false
  }
];

// Для каждого элемента коллекции (user) проверим
// поле isActive. Если оно true, то
// текущий элемент (user) будет записан
// в результирующий массив.
const activeUsers = users2.filter(user => user.isActive);
console.log(activeUsers);

// Для каждого элемента коллекции (user) проверим
// поле isActive. Если оно false, то
// текущий элемент (user) будет записан
// в результирующий массив.
const inactiveUsers = users2.filter(user => !user.isActive);
console.log(inactiveUsers);

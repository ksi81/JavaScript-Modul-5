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



        function SocialBook (users = [], posts = {}) { 
          this.users = users;
          this.posts = posts;
          this.getAllUsers = users.map(user => user);
          this.getUserByLogin =(userId) => users.find(user => {
            if (user.id === userId) {
              return users;
            }
          });

          this.addUser = (user) => {
            user.id = getId();
            user.isActive = false;
            users.push(user);
          };

          this.getUserStatus = users.map(user => ({
            ...user,
            isActive: !user.isActive,
          })
          );

          this.removeUserById = (userId)=> users.filter(users => users.id !== userId);

          // this.getUsersCount = users.map(user =>)


          this.getUsersCount = function(users) {
            let count = 0; 
            for(var prs in users){ 
              if(users.hasOwnProperty(prs)) count++;
            } 
            return count; 
          };

          this.addPost = (userId, post) => {
            this.posts[userId].push(post);
          };

          this.removePosts = (userId, postId) => {
           this.posts[userId]= this.posts[userId].filter(post => post.id !== postId);
         };

         this.addPostLike = (userId, postId) => {
          this.posts[userId] = this.posts[userId].map(post => {
            if (post.id === postId) {
              return {
                ...post,
                likes: post.likes + 10,
              };
            }
            return post;
          })
        };


      };

/*
  Используйте следующий массив пользователей при создании экземпляра SocialBook
  */
  const initialUsers = [
  { id: "-s19a6hqce", login: "mangozedog@mail.com", password: "qwe123zv", isActive: true },
  { id: "-qkpzenjxe", login: "polysweet@skynet.ze", password: "123zxc78", isActive: true },
  { id: "-e51cpd4di", login: "ajax2k@change.ua", password: "ert234qw", isActive: false }
  ];

/*
  Используйте следующий объект постов пользователей при создании экземпляра SocialBook
  */
  const initialPosts = {
    "-s19a6hqce": [
    { id: "-5sgljaskg", text: "post #1", likes: 3 },
    { id: "-199hb6igr", text: "post #2", likes: 5 },
    { id: "-hy0eyw5qo", text: "post #3", likes: 13 }
    ],
    "-qkpzenjxe": [
    { id: "-5tu69g5rf", text: "post #1", likes: 8 },
    { id: "-bje766393", text: "post #2", likes: 15 }
    ],
    "-e51cpd4di": [
    { id: "-9y6nkmlj4", text: "post #1", likes: 18 },
    { id: "-i03pbhy3s", text: "post #2", likes: 45 }
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

  myBook.addPost('-qkpzenjxe', {id: getId(), text: 'написать функцию-конструктор', likes: 200});

// Add new User 
myBook.addUser({ 
  email: 'test-1@email.com',  
  password: getPassord()
});

// Add new User-2
myBook.addUser({ 
  email: '22@email.com',  
  password: getPassord()
});

myBook.removePosts('-s19a6hqce', '-5sgljaskg');
myBook.getUserByLogin('-s19a6hqce');
myBook.addPostLike('-s19a6hqce', '-199hb6igr');
console.log(myBook);
myBook.addPostLike('-s19a6hqce',);

myBook.getUsersCount('', );


console.log('Удаление пользователе "-qkpzenjxe"',myBook.removeUserById('-qkpzenjxe'));



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

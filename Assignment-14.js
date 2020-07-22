class User{
    constructor(name,age,email)
    {
      this.name=name;
      this.age=age;
      this.email=email;
      this.coins=0;
    }
       login()
       {
           console.log(`${this.name} you are logged in`);
       }
       logout()
       {
           console.log(`${this.name} you are logged out`);
       }

       addlucoins()
       {
         this.coins++;
          console.log(`${this.name} has added ${this.coins} `);
       }


}
var user1 = new User('yash',21,'bala@gmail.com');
var user2 = new User('vaih',22,'balass@gmail.com');
user1.login();
user1.logout();
user1.addlucoins();
user1.addlucoins(); 
user2.addlucoins();
user1.addlucoins();


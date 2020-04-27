
//object leterals

//const blogs =[
 //   {title: 'dinosaur information', likes: 10 }
//];
//console.log(blogs);

let user = {
    name: 'josmar',
    age:'7',
    email:'josmar@gmail.com',
    location: 'allende',
    blogs: [
        {title: 'dinosaur information', likes: 10 }
    ],
    login(){
        console.log('the user logged in');
    },
    logout(){
        console.log('the user logged out');
    },
    logBlogs() {
      // console.log(this.blogs);
       console.log('this user has written the following blogs:');
       this.blogs.forEach(blog => {
           console.log(blog.title, blog.likes);
       });
    
    }
};


user.logBlogs();
console.log(this);

//By: PLCG
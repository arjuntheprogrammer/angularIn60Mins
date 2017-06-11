import { Component } from '@angular/core';
import {PostsService} from '../services/post.service';

@Component({
  moduleId: module.id,
  selector: 'user',
  templateUrl: './user.component.html',
  providers: [PostsService],

})
export class UserComponent  {
  name:string;
  email:string;
  address: address;
  hobbies: string[];
  showHobbies: boolean;
  posts: Post[];





  constructor(private postsService : PostsService){
    this.name = 'Arjun';
    this.email = 'arjun@gmail.com';
    this.address = {
      street: "this street",
      city : 'noida',
      state: 'UP',
    }
    this.hobbies = ['Music', 'Movies', 'Swimming'];
    this.showHobbies = false;
    this.postsService.getPosts()
                     .subscribe(posts=>{
                       console.log(posts);
                       this.posts = posts;
                     })

  }
  toggleHobbies(){
    if(this.showHobbies==true){
      this.showHobbies = false;
    }
    else{
      this.showHobbies=true;
    }

  }
  addHobby(hobby: string){
    this.hobbies.push(hobby);
  }
  deleteHobby(i:number){
    this.hobbies.splice(i,1);
  }


}
interface address {
  street: string,
  city: string,
  state: string,
}
interface Post{
  id: number;
  title: string;
  body: string;

}

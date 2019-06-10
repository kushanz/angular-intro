import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import  { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MyDirectiveDirective } from './Directives/my-directive.directive';
import { HeaderComponent } from './template/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { UserComponent } from './pages/user/user.component';
import { UsersService } from './Services/users.service';
import { PostComponent } from './pages/post/post.component';
import { PostService } from './Services/post.service';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'user', component: UserComponent },
  { path: 'post', component: PostComponent },
];

@NgModule({
  imports: [ BrowserModule, FormsModule,RouterModule.forRoot(routes),BrowserModule,HttpClientModule],
  declarations: [ AppComponent, HelloComponent, MyDirectiveDirective, HeaderComponent, HomeComponent, UserComponent, PostComponent ],
  bootstrap:    [ AppComponent ],
  providers: [UsersService, PostService]
})
export class AppModule { }

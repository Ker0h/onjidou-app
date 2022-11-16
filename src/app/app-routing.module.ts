import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { AboutComponent } from './features/about/about.component';
import { ArtistsListComponent } from './features/artists/artists-list/artists-list.component';
import { SongsDetailComponent } from './features/songs/songs-detail/songs-detail.component';
import { SongsEditComponent } from './features/songs/songs-edit/songs-edit.component';
import { SongsListComponent } from './features/songs/songs-list/songs-list.component';
import { UsersDetailComponent } from './features/users/users-detail/users-detail.component';
import { UsersEditComponent } from './features/users/users-edit/users-edit.component';
import { UsersListComponent } from './features/users/users-list/users-list.component';

const routes: Routes = [
  {path: "", redirectTo: "about", pathMatch: "full"},
  {path: "users", data: {breadcrumb: "Users"}, children: [
    {path: "", component: UsersListComponent},
    {path: "new", data: {breadcrumb: "Register"}, pathMatch: "full", component: UsersEditComponent},
    {path: ":id", data: {breadcrumb: "Profile"}, pathMatch: "full", component: UsersDetailComponent},
    {path: ":id/edit", data: {breadcrumb: "Edit Profile"}, pathMatch: "full", component: UsersEditComponent}
  ]},
  {path: "songs", data: {breadcrumb: "Songs"}, children: [
    {path: "", component: UsersListComponent},
    {path: "new", data: {breadcrumb: "Add Song"}, pathMatch: "full", component: SongsEditComponent},
    {path: ":id", data: {breadcrumb: ""}, pathMatch: "full", component: SongsDetailComponent},
    {path: ":id/edit", data: {breadcrumb: ""}, pathMatch: "full", component: SongsEditComponent}
  ]},
  {path: "artists", data: {breadcrumb: "Artists"}, component: ArtistsListComponent},
  {path: "about", data: {breadcrumb: "About"}, component: AboutComponent},
  {path: "**", data: {breadcrumb: ""}, component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

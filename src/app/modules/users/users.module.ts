import { NgModule } from '@angular/core';

import { UsersComponent } from './users.component';
import { UsersRoutingModule } from './users-routing.module';

@NgModule({
  imports: [UsersRoutingModule],
  exports: [UsersComponent],
  declarations: [UsersComponent],
  providers: [],
})
export class UsersModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArrayFormComponent } from './array-form/array-form.component';
import { BasicFormComponent } from './basic-form/basic-form.component';
import { LoginformComponent } from './loginform/loginform.component';
import { NestedFormComponent } from './nested-form/nested-form.component';
import { RegisterComponent } from './register/register.component';
import { TabbednavComponent } from './tabbednav/tabbednav.component';
import { ValidFormComponent } from './valid-form/valid-form.component';
import { UserGuard } from './guards/user.guard';
import { FindsAllComponent } from './finds-all/finds-all.component';

const routes: Routes = [
  { path: 'basic', component: BasicFormComponent },
  { path: 'nested', component: NestedFormComponent },
  { path: 'array', component: ArrayFormComponent },
  { path: 'valid', component: ValidFormComponent },
  { path: 'tabbednav', component: TabbednavComponent },
  { path: 'findsall', component: FindsAllComponent, canActivate: [UserGuard]  },
  { path: 'login', component: LoginformComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

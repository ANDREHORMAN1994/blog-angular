import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuBarComponent } from '../components/menu-bar/menu-bar.component';
import { TitleComponent } from '../components/title/title.component';
import { BigCardComponent } from '../components/big-card/big-card.component';
import { SmallCardComponent } from '../components/small-card/small-card.component';

@NgModule({
  declarations: [
    MenuBarComponent,
    TitleComponent,
    BigCardComponent,
    SmallCardComponent,
	],
	exports: [
		MenuBarComponent,
    TitleComponent,
    BigCardComponent,
    SmallCardComponent,
	],
  imports: [
    CommonModule
  ]
})

export class PagesModule { }

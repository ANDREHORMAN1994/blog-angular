import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIconsModule, provideNgIconsConfig } from '@ng-icons/core';
import { bootstrapLinkedin, bootstrapGithub, bootstrapStars } from '@ng-icons/bootstrap-icons';
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
    CommonModule,
		NgIconsModule.withIcons({
			bootstrapLinkedin,
			bootstrapGithub,
			bootstrapStars,
		})
  ],
	providers: [
    provideNgIconsConfig({
      size: '1.5em',
    }),
  ],
})

export class PagesModule { }

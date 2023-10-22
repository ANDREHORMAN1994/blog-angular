import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIconsModule, provideNgIconsConfig } from '@ng-icons/core';
import { bootstrapLinkedin, bootstrapGithub, bootstrapStars } from '@ng-icons/bootstrap-icons';
import { SpinnerModule } from '@coreui/angular';
import { MenuBarComponent } from '../components/menu-bar/menu-bar.component';
import { TitleComponent } from '../components/title/title.component';
import { BigCardComponent } from '../components/big-card/big-card.component';
import { SmallCardComponent } from '../components/small-card/small-card.component';
import { CarouselNewsComponent } from '../components/carousel-news/carousel-news.component';

@NgModule({
  declarations: [
    MenuBarComponent,
    TitleComponent,
    BigCardComponent,
    SmallCardComponent,
		CarouselNewsComponent,
	],
	exports: [
		MenuBarComponent,
    TitleComponent,
    BigCardComponent,
    SmallCardComponent,
		CarouselNewsComponent,
	],
  imports: [
    CommonModule,
		NgIconsModule.withIcons({
			bootstrapLinkedin,
			bootstrapGithub,
			bootstrapStars,
		}),
		SpinnerModule,
  ],
	providers: [
    provideNgIconsConfig({
      size: '1.5em',
    }),
  ],
})

export class PagesModule { }

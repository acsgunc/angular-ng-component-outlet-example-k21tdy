import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { DynamicAttributesModule, DynamicModule } from 'ng-dynamic-component';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ByeComponent } from './bye.component';
import { AnotherComponent } from './another.component';

import { TitleComponent } from './shared/title/title.component';
import { PbdsDatavizModule } from 'pb-design-system/dataviz';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';

import { CardTitleComponent } from './card-title.component';
import { CardTemplateComponent } from './card-template.component';
import { CardRecommendationComponent } from './card-recommendation.component';
import { RecommendationOneComponent } from './recommendations/recommendation-one.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    NgbCarouselModule,
    NgbRatingModule,
    DynamicModule,
    DynamicAttributesModule,
    PbdsDatavizModule,
    DragDropModule
  ],
  declarations: [
    AppComponent,
    CardTitleComponent,
    CardTemplateComponent,
    CardRecommendationComponent,
    TitleComponent,
    HelloComponent,
    ByeComponent,
    AnotherComponent,
    RecommendationOneComponent
  ],
  entryComponents: [
    CardTitleComponent,
    CardTemplateComponent,
    CardRecommendationComponent,
    HelloComponent,
    ByeComponent,
    AnotherComponent,
    RecommendationOneComponent

  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

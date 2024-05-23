import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';

import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';

import { HelloComponent } from './hello.component';
import { ByeComponent } from './bye.component';
import { AnotherComponent } from './another.component';
import { CardTitleComponent } from './card-title.component';
import { CardTemplateComponent } from './card-template.component';
import { CardRecommendationComponent } from './card-recommendation.component';
import { RecommendationOneComponent } from './recommendations/recommendation-one.component';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';
import domtoimage from 'dom-to-image-more';

@Component({
  selector: 'my-app',
  templateUrl: 'app.component.html',
})
export class AppComponent implements OnInit {
  @ViewChildren('carousel') carousel: QueryList<NgbCarousel>;

  isRecommendation = false;
  isEditable = false;

  public cards = [
    {
      id: 10,
      label: 'Q3 2021',
      component: CardTitleComponent,
      attrs: {
        contenteditable: 'false',
      },
      content: {
        title: {
          heading: 'Q3 2021',
          subheading: 'Company Name Here',
        },
      },
    },
    {
      id: 20,
      label: 'Bye Component',
      component: CardTemplateComponent,
      content: {
        title: {
          heading: 'Card Template',
          subheading: 'Placeholder',
        },
        body: {
          component: ByeComponent,
          content: {
            gauge: {
              minvalue: 0,
              maxvalue: 100,
              value: 45,
            },
          },
        },
      },
    },
    {
      id: 1,
      label: 'Hello Component',
      component: CardTemplateComponent,
      attrs: {
        contenteditable: 'false',
      },
      content: {
        title: {
          heading: 'Hello',
          subheading: 'There',
          recommendation: this.isRecommendation,
        },
        body: {
          component: HelloComponent,
          content: {
            text: 'this is some sample body text',
            rating: 3.5,
          },
        },
        recommendations: {
          component: CardRecommendationComponent,
          trend: !this.isRecommendation,
          content: [
            {
              component: RecommendationOneComponent,
              content: {},
            },
            //   {
            //     component: RecommendationOneComponent,
            //     content: {}
            //   }
          ],
        },
      },
    },
    {
      id: 2,
      label: 'Another Component',
      component: CardTemplateComponent,
      content: {
        title: {
          heading: 'Another',
          subheading: 'One, yes...',
          recommendation: false,
        },
        body: {
          component: AnotherComponent,
          content: {
            text: '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A iste, numquam <strong>tenetur, voluptates vero magni,</strong> ad nesciunt quibusdam sed ipsum sequi quos deleniti ex ducimus id rerum ratione totam delectus!</p>',
            images: [
              '//images.unsplash.com/photo-1596450886763-6f9b7f3cbd0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
            ],
          },
        },
      },
    },
  ];

  public thumbs = [];

  ngOnInit() {
    setTimeout(() => {
      // var node = document.getElementById('slide-10');

      // var cloneNode = document.getElementById('clone-node');
      // var node = document.getElementById('slide-20');

      var nodes = [
        document.getElementById('slide-10'),
        document.getElementById('slide-20'),
        document.getElementById('slide-1'),
        document.getElementById('slide-2'),
      ];

      nodes.forEach((node) => {
        node.style.display = 'block';
        // node.style.height = '400px'
        // node.style.overflow = 'hidden'
        node.style.zIndex = '-100';

        var isActive = node.classList.contains('active');
        console.log(isActive);

        domtoimage
          .toSvg(node)
          .then(function (dataUrl) {
            var img = new Image();
            img.src = dataUrl;
            img.width = 150;
            img.style.border = '1px solid red';
            img.style.marginLeft = '10px';
            // document.body.appendChild(img);

            this.thumbs.push(dataUrl);

            if (!isActive) {
              node.style.display = 'none';
            }
          })
          .catch(function (error) {
            console.error('oops, something went wrong!', error);
          });
      });

      // var clone = node.cloneNode(true);

      // cloneNode.append(clone);

      // node.style.zIndex = '-100';
      // node.style.display = 'block'
      // node.style.position = 'absolute'
      // node.style.left = '-1000px'
      // node.style.visibility = 'hidden'
      // node.classList.add('active');

      // var node: Element = document.getElementsByClassName('carousel-inner')[0]

      // toPng(node, {
      //   // width: 1000,
      //   // canvasWidth: 500,
      //   style: {
      //     // position: 'absolute',
      //     // top: '0',
      //     // left: '0',
      //     display: 'block',
      //     zIndex: '100'
      //     // border: '1px solid red'
      //   },
      // })
      //   .then(function (dataUrl) {
      //     console.log(dataUrl);

      //     var img = new Image();
      //     img.src = dataUrl;
      //     img.width = 150;
      //     img.style.border = '1px solid red';
      //     document.body.appendChild(img);
      //   })
      //   .catch(function (error) {
      //     console.error('oops, something went wrong!', error);
      //   });

      //     domtoimage
      // .toSvg(node)
      // .then(function (dataUrl) {
      //   var img = new Image();
      //   img.src = dataUrl;
      //   img.width = 150;
      //   document.body.appendChild(img);

      //   node.style.display = 'none'
      // })
      // .catch(function (error) {
      //   console.error("oops, something went wrong!", error);
      // });
    }, 0);
  }

  public onSlideChange($event, id) {
    // console.log($event, id, this.carousel);

    this.carousel.first.select(`${id}`);
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.cards, event.previousIndex, event.currentIndex);
  }

  onIsRecommendation($event) {
    // console.log('Is Recommendation: ', $event);

    const card = this.cards.find((card) => card.id === 1);

    card.content.title.recommendation = this.isRecommendation;
    card.content.recommendations.trend = !this.isRecommendation;
  }

  onIsEditable($event) {
    // console.log('Is Editable: ', $event);

    this.cards.map((card) => {
      if (card.attrs) {
        card.attrs.contenteditable = `${this.isEditable}`;
      }
    });
  }
}

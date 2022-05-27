import { Component, OnInit } from '@angular/core';

/* https://github.com/dockleryxk/ng-simple-slideshow */

@Component({
  selector: 'app-widget-home-slider',
  templateUrl: './widget-home-slider.component.html',
  styleUrls: ['./widget-home-slider.component.css']
})
export class WidgetHomeSliderComponent implements OnInit {

  imageUrls = [

      // BMRP
      { url: './assets/images/cloading/bmrp/20180501202638_1.jpg', caption: 'Half-Life 1' },
      { url: './assets/images/cloading/bmrp/20180501120142_1.jpg', caption: 'Half-Life 1' },
      { url: './assets/images/cloading/bmrp/20180503152901_1.jpg', caption: 'Half-Life 1' },
      { url: './assets/images/cloading/bmrp/20180502180038_1.jpg', caption: 'Half-Life 1' },
      { url: './assets/images/cloading/bmrp/20180502184226_1.jpg', caption: 'Half-Life 1' },
      { url: './assets/images/cloading/bmrp/20180504142835_1.jpg', caption: 'Half-Life 1' },
      { url: './assets/images/cloading/bmrp/20180504144741_1.jpg', caption: 'Half-Life 1' },
      { url: './assets/images/combinecontrol/wallpapers/4000_screenshots_20180822173045_1.jpg', caption: 'Half-Life 1' },
      { url: './assets/images/combinecontrol/wallpapers/4000_screenshots_20180916094134_1.jpg', caption: 'Half-Life 1' },


      // CC


      { url: './assets/images/combinecontrol/4uD9pLs.jpg', caption: 'Half-Life 2' },
      { url: './assets/images/combinecontrol/aFZklSH.jpg', caption: 'Half-Life 2' },

      { url: './assets/images/combinecontrol/bg1.jpg', caption: 'Half-Life 2' },
      { url: './assets/images/combinecontrol/bg2.jpg', caption: 'Half-Life 2' },
      { url: './assets/images/combinecontrol/bg3.jpg', caption: 'Half-Life 2' },
      { url: './assets/images/combinecontrol/bg5.jpg', caption: 'Half-Life 2' },
      { url: './assets/images/combinecontrol/bg7.jpg', caption: 'Half-Life 2' },
      { url: './assets/images/combinecontrol/bg8.jpg', caption: 'Half-Life 2' },
      { url: './assets/images/combinecontrol/bg10.jpg', caption: 'Half-Life 2' },
      { url: './assets/images/combinecontrol/bg13.jpg', caption: 'Half-Life 2' },
      { url: './assets/images/combinecontrol/bg14.jpg', caption: 'Half-Life 2' },
      { url: './assets/images/combinecontrol/bg15.jpg', caption: 'Half-Life 2' },
      { url: './assets/images/combinecontrol/bg17.jpg', caption: 'Half-Life 2' },
      { url: './assets/images/combinecontrol/bg18.jpg', caption: 'Half-Life 2' },
      { url: './assets/images/combinecontrol/bg19.jpg', caption: 'Half-Life 2' },
      { url: './assets/images/combinecontrol/bg20.jpg', caption: 'Half-Life 2' },
      { url: './assets/images/combinecontrol/bg21.jpg', caption: 'Half-Life 2' },


      { url: './assets/images/cloading/cc/1.jpg', caption: 'Half-Life 2' },
      { url: './assets/images/cloading/cc/3.jpg', caption: 'Half-Life 2' },
      { url: './assets/images/cloading/cc/2.jpg', caption: 'Half-Life 2' },
      { url: './assets/images/cloading/cc/4.jpg', caption: 'Half-Life 2' },
      { url: './assets/images/combinecontrol/wallpapers/4000_screenshots_20180122020136_1.jpg', caption: 'Half-Life 2' },
      { url: './assets/images/combinecontrol/wallpapers/TRLkSAS.jpg', caption: 'Half-Life 2' },
      { url: './assets/images/combinecontrol/wallpapers/RCC62qK.jpg', caption: 'Half-Life 2' },

    ];
    width: string = '100%';
    height: string = '530px';
    minHeight: string = '100%';
    arrowSize: string = '30px';
    showArrows: boolean = true;
    disableSwiping: boolean = true;
    autoPlay: boolean = true;
    autoPlayInterval: number = 3333;
    stopAutoPlayOnSlide: boolean = true;
    debug: boolean = false;
    backgroundSize: string = '100% 100%';
    backgroundPosition: string = 'center center';
    backgroundRepeat: string = 'no-repeat';
    showDots: boolean = false;
    dotColor: string = '#FFF';
    showCaptions: boolean = true;
    captionColor: string = '#FFF';
    captionBackground: string = 'rgba(0, 0, 0, .35)';
    lazyLoad: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}

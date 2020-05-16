// Setup photoswipe

const photoswipe_data = [{
    "gallery_id": "ID_2",
    "items": 2,
    "slide_objects": [{
            "originalImage": {
                "src": "https://res.cloudinary.com/shopping-assets/image/upload/v1588647105/portfolio/8_vquw9g.png",
                "w": 1360,
                "h": 630,
                "gallery": "ID_2",
            },
            "mediumImage": {
                "src": "https://res.cloudinary.com/shopping-assets/image/upload/v1588647105/portfolio/8_vquw9g.png",
                "w": 1360,
                "h": 630,
                "gallery": "ID_2"
            }
        },
        {
            "originalImage": {
                "src": "https://res.cloudinary.com/shopping-assets/image/upload/v1588647105/portfolio/9_gfuczu.png",
                "w": 1360,
                "h": 630,
                "gallery": "ID_2",
            },
            "mediumImage": {
                "src": "https://res.cloudinary.com/shopping-assets/image/upload/v1588647105/portfolio/9_gfuczu.png",
                "w": 1360,
                "h": 630,
                "gallery": "ID_2"
            }
        },
        {
            "originalImage": {
                "src": "https://res.cloudinary.com/shopping-assets/image/upload/v1588647105/portfolio/10_rvw2f4.png",
                "w": 1360,
                "h": 630,
                "gallery": "ID_2",
            },
            "mediumImage": {
                "src": "https://res.cloudinary.com/shopping-assets/image/upload/v1588647105/portfolio/10_rvw2f4.png",
                "w": 1360,
                "h": 630,
                "gallery": "ID_2"
            }
        },
        {
            "originalImage": {
                "src": "https://res.cloudinary.com/shopping-assets/image/upload/v1588648028/portfolio/12_uxj7f3.png",
                "w": 1360,
                "h": 630,
                "gallery": "ID_2",
            },
            "mediumImage": {
                "src": "https://res.cloudinary.com/shopping-assets/image/upload/v1588648028/portfolio/12_uxj7f3.png",
                "w": 1360,
                "h": 630,
                "gallery": "ID_2"
            }
        },
        {
            "originalImage": {
                "src": "https://res.cloudinary.com/shopping-assets/image/upload/v1588648028/portfolio/11_hrohpi.png",
                "w": 1360,
                "h": 630,
                "gallery": "ID_2",
            },
            "mediumImage": {
                "src": "https://res.cloudinary.com/shopping-assets/image/upload/v1588648028/portfolio/11_hrohpi.png",
                "w": 1360,
                "h": 630,
                "gallery": "ID_2"
            }
        },
        {
            "originalImage": {
                "src": "https://res.cloudinary.com/shopping-assets/image/upload/v1588648028/portfolio/13_dwad7i.png",
                "w": 1360,
                "h": 630,
                "gallery": "ID_2",
            },
            "mediumImage": {
                "src": "https://res.cloudinary.com/shopping-assets/image/upload/v1588648028/portfolio/13_dwad7i.png",
                "w": 1360,
                "h": 630,
                "gallery": "ID_2"
            }
        },
        {
            "originalImage": {
                "src": "https://res.cloudinary.com/shopping-assets/image/upload/v1588648029/portfolio/14_icrqnp.png",
                "w": 1360,
                "h": 630,
                "gallery": "ID_2",
            },
            "mediumImage": {
                "src": "https://res.cloudinary.com/shopping-assets/image/upload/v1588648029/portfolio/14_icrqnp.png",
                "w": 1360,
                "h": 630,
                "gallery": "ID_2"
            }
        },
        {
            "originalImage": {
                "src": "https://res.cloudinary.com/shopping-assets/image/upload/v1588648028/portfolio/15_rpftj2.png",
                "w": 1360,
                "h": 630,
                "gallery": "ID_2",
            },
            "mediumImage": {
                "src": "https://res.cloudinary.com/shopping-assets/image/upload/v1588648028/portfolio/15_rpftj2.png",
                "w": 1360,
                "h": 630,
                "gallery": "ID_2"
            }
        },
        {
            "originalImage": {
                "src": "https://res.cloudinary.com/shopping-assets/image/upload/v1588648028/portfolio/16_bcrarv.png",
                "w": 1360,
                "h": 630,
                "gallery": "ID_2",
            },
            "mediumImage": {
                "src": "https://res.cloudinary.com/shopping-assets/image/upload/v1588648028/portfolio/16_bcrarv.png",
                "w": 1360,
                "h": 630,
                "gallery": "ID_2"
            }
        },
    ]
}];
const addPhotoSwipeHTML = function() {
    // add slide HTML
    const photoswipeHTML = `
            <div class="pswp" tabindex="-1" role="dialog" aria-hidden="true">
        <!-- Background of PhotoSwipe.
               It's a separate element, as animating opacity is faster than rgba(). -->
        <div class="pswp__bg"></div>
        <!-- Slides wrapper with overflow:hidden. -->
        <div class="pswp__scroll-wrap">
            <!-- Container that holds slides. PhotoSwipe keeps only 3 slides in DOM to save memory. -->
            <div class="pswp__container">
                <!-- don't modify these 3 pswp__item elements, data is added later on -->
                <div class="pswp__item"></div>
                <div class="pswp__item"></div>
                <div class="pswp__item"></div>
            </div>
            <!-- Default (PhotoSwipeUI_Default) interface on top of sliding area. Can be changed. -->
            <div class="pswp__ui pswp__ui--hidden">
                <div class="pswp__top-bar">
                    <!--  Controls are self-explanatory. Order can be changed. -->
                    <div class="pswp__counter"></div>
                    <button class="pswp__button pswp__button--close" title="Close (Esc)"></button>
                    <button class="pswp__button pswp__button--share" title="Share"></button>
                    <button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>
                    <button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button>
                    <!-- Preloader demo https://codepen.io/dimsemenov/pen/yyBWoR -->
                    <!-- element will get class pswp__preloader--active when preloader is running -->
                    <div class="pswp__preloader">
                        <div class="pswp__preloader__icn">
                            <div class="pswp__preloader__cut">
                                <div class="pswp__preloader__donut"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
                    <div class="pswp__share-tooltip"></div>
                </div>
                <button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)"></button>
                <button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)"></button>
                <div class="pswp__caption">
                    <div class="pswp__caption__center"></div>
                </div>
            </div>
        </div>
    </div>
    `;
    document.body.innerHTML += photoswipeHTML;
};
addPhotoSwipeHTML();
const gallery_buttons = document.querySelectorAll(
    '.photoswipe_open_gallery_button'
);

class PhotoSwipeGallery {
    constructor(parameters) {
        this.button = parameters
        this.openGallery = this.openGallery.bind(this)
        this.button.addEventListener('click', event => {
            this.openGallery(event)
        });
    };
    openGallery(event) {
        // this.gallery_id = event.target.dataset.gallery_id
        this.gallery_id = event.target.dataset.gallery_id
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
        this.slide = photoswipe_data.find(
            element => element.gallery_id === this.gallery_id
        );
        var pswpElement = document.querySelectorAll('.pswp')[0]

        // define options (if needed)
        var options = {
            // optionName: 'option value'
            // for example:
            index: 0 // start at first slide
        };
        // initialise as usual
        var gallery = new PhotoSwipe(
            pswpElement,
            PhotoSwipeUI_Default,
            this.slide.slide_objects,
            options
        );
        // create variable that will store real size of viewport
        var realViewportWidth,
            useLargeImages = false,
            firstResize = true,
            imageSrcWillChange

        // beforeResize event fires each time size of gallery viewport updates
        gallery.listen('beforeResize', function() {
            // gallery.viewportSize.x - width of PhotoSwipe viewport
            // gallery.viewportSize.y - height of PhotoSwipe viewport
            // window.devicePixelRatio - ratio between physical pixels and device independent pixels (Number)
            //                          1 (regular display), 2 (@2x, retina) ...
            // calculate real pixels when size changes
            realViewportWidth = gallery.viewportSize.x * window.devicePixelRatio

            // Code below is needed if you want image to switch dynamically on window.resize
            // Find out if current images need to be changed
            if (useLargeImages && realViewportWidth < 1000) {
                useLargeImages = false
                imageSrcWillChange = true
            } else if (!useLargeImages && realViewportWidth >= 1000) {
                useLargeImages = true
                imageSrcWillChange = true
            }
            // Invalidate items only when source is changed and when it's not the first update
            if (imageSrcWillChange && !firstResize) {
                // invalidateCurrItems sets a flag on slides that are in DOM,
                // which will force update of content (image) on window.resize.
                gallery.invalidateCurrItems()
            }
            if (firstResize) {
                firstResize = false
            }
            imageSrcWillChange = false
        })
        // gettingData event fires each time PhotoSwipe retrieves image source & size
        gallery.listen('gettingData', function(index, item) {
            // Set image source & size based on real viewport width
            if (useLargeImages) {
                item.src = item.originalImage.src
                item.w = item.originalImage.w
                item.h = item.originalImage.h
            } else {
                item.src = item.mediumImage.src
                item.w = item.mediumImage.w
                item.h = item.mediumImage.h
            }
            // It doesn't really matter what will you do here,
            // as long as item.src, item.w and item.h have valid values.
            //
            // Just avoid http requests in this listener, as it fires quite often
        })
        // Note that init() method is called after gettingData event is bound
        gallery.init()
    };
};
gallery_buttons.forEach(element => new PhotoSwipeGallery(element))
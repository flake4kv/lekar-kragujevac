/**
 * Application's main entry point.
 *
 * LICENSE: This code is licenced to Andrić Stevan
 *
 * @package    Projekti
 * @copyright  2018 Andrić Stevan
 * @author     Stevan Andrić <stevan@telekod.com>
 * @version    $Id: app.js 2667 2018-04-26 15:44:49Z stevan $
 * @since      File available since Release 0
 */
App = {
  
  /**
   * Is debug, used when logging with the console.
   */
  // debug: false,

  /**
   * Is mobile device.
   */
  // isMobile: false,

  /**
   * Is tablet device.
   */
  // isTablet: false,

  /**
   * IE version.
   */
  // ieVersion: '',

  /**
   * Site URL.
   */
  // siteUrl: '',

  /**
   * Static content unix timestamp.
   */
  // staticContentTs: '1501069777',

    // Homepage slider settings.
    mainSliderSettings: {
        autoPlay: 7000,
        slideSpeed: 500,
        mouseDrag: true,
        touchDrag: true,
        navigationText: false,
        navigation: true,
        singleItem: true,
        stopOnHover: true,
        lazyLoad: true,
        loop: true,
        rewindNav : true,
        rewindSpeed: 0
    },

  /**
   * Initializing App.
   */
  _init: function () {

    $(document).ready(function() {
      if (App.debug) {
        console.log("[App] Application's main entry point.");
      }
      App.Slider._init();
    });
    
  },

  /**
   * It contains methods related with Slider method.
   * 
   * @author Stevan Andrić
   */  
  Slider: {
    _init: function () { 
        console.log('Slider');
        App.Slider.homepageSlider();
    },

    /**
     * It handles homepage slider.
     * 
     * @author Stevan Andrić
     */
    homepageSlider() {
        $('.owl-wrapper').owlCarousel({
          autoPlay: 7000,
          slideSpeed: 500,
          mouseDrag: true,
          touchDrag: true,
          navigationText: false,
          navigation: true,
          singleItem: true,
          stopOnHover: true,
          lazyLoad: true,
          loop: true,
          rewindNav : true,
          rewindSpeed: 0
        });   
    }
  }
};

App._init();
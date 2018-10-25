<?php
////////////////////////////////////////////////////////////////////////////////
// CSS
////////////////////////////////////////////////////////////////////////////////
// Default
$cssFiles = [
    'assets/vendor/owl-carousel/css/owl.css',
    'assets/vendor/foundation/foundation.min.css',
    '@framework.extras',
    'assets/less/theme.less'
];
// Mobile CSS
// if ($this['isMobile']) {
//    $cssFiles[] = 'assets/css/mobile.css';
// }
$this['cssFiles'] = $cssFiles;
////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// Default JavaScript
////////////////////////////////////////////////////////////////////////////////
// Body
$jsBodyFiles = [
    'assets/vendor/owl-carousel/javascript/owl.carousel.min.js',
    '@framework',
    '@framework.extras',
    'assets/javascript/app.js',
];

// Add JavaScript body files defined in plugin(s)
if (isset($this['jsBodyFilesPlugins']) && !empty($this['jsBodyFilesPlugins'])) {
    foreach($this['jsBodyFilesPlugins'] as $jsBodyFilesPlugins) {
        $jsBodyFiles[] = $jsBodyFilesPlugins;
    }
}

$this['jsBodyFiles'] = $jsBodyFiles;
////////////////////////////////////////////////////////////////////////////////

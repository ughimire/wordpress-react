<?php
/*
Plugin Name: WordPress React
Description: WordPress Starter Plugin with React Ant Design Setting Page
Version: 1.0.0
Author: ughimire
Author URI: https://mantrabrain.com/
License: MIT License
License URI: http://opensource.org/licenses/MIT
Text Domain: wordpress-react
Domain Path: /languages
*/

// exit if accessed directly
if (!defined('ABSPATH'))
    exit;

define('WORDPRESS_REACT_FILE', __FILE__);
define('WORDPRESS_REACT_VERSION', '1.0.0');
define('WORDPRESS_REACT_URI', plugins_url('', WORDPRESS_REACT_FILE));
define('WORDPRESS_REACT_DIR', plugin_dir_path(WORDPRESS_REACT_FILE));

include_once plugin_dir_path(WORDPRESS_REACT_FILE) . 'includes/class-wordpress-react.php';

function wordpress_react()
{
    static $instance;

    // first call to instance() initializes the plugin
    if ($instance === null || !($instance instanceof WordPress_React))
        $instance = WordPress_React::instance();

    return $instance;
}

wordpress_react();
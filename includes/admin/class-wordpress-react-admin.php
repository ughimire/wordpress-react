<?php

class WordPress_React_Admin
{
    public function __construct()
    {
        add_action('admin_menu', array($this, 'admin_menu'), 55);

        add_action('admin_enqueue_scripts', array($this, 'scripts'));

    }

    public function admin_menu()
    {
        $settings_page = add_menu_page(
            __('WordPress React', 'wordpress-react'),
            __('WordPress React', 'wordpress-react'),
            'administrator',
            'wordpress-react',
            array($this, 'watermark_page'),
            '',
            10

        );

        //  add_action('load-' . $settings_page, array($this, 'settings_page_init'));


    }

    public function watermark_page()
    {

        echo '<h1>Output Page</h1>';


        echo '<div id="wordpress-react-ant-design"></div>';

    }

    public function settings_page_init()
    {
        global $current_tab, $current_section;

        echo '<h1>Setting Page Init</h1>';
        do_action('ultimate_watermark_settings_page_init');


    }

    public function scripts($hook)
    {
        if ('toplevel_page_wordpress-react' != $hook) {
            return;
        }

        $entryPoints = array('settings');

        foreach ($entryPoints as $point) {

            $point = sanitize_text_field($point);

            $dependency = file_exists(WORDPRESS_REACT_ABSPATH . "assets/build/js/{$point}.asset.php") ? include_once(WORDPRESS_REACT_ABSPATH . "assets/build/js/{$point}.asset.php") : array();

            $dependency['dependencies'] = isset($dependency['dependencies']) ? $dependency['dependencies'] : array();

            $dependency['version'] = isset($dependency['version']) ? sanitize_text_field($dependency['version']) : WORDPRESS_REACT_VERSION;

            wp_enqueue_script("wordpress-react-{$point}", WORDPRESS_REACT_PLUGIN_URI . "/assets/build/js/{$point}.js", $dependency['dependencies'], $dependency['version']);

        }
    }
}

new WordPress_React_Admin();
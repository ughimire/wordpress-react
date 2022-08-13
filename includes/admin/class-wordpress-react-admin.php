<?php

class WordPress_React_Admin
{
    public function __construct()
    {
        add_action('admin_menu', array($this, 'admin_menu'), 55);

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

        add_action('load-' . $settings_page, array($this, 'settings_page_init'));


    }

    public function watermark_page()
    {

        echo '<h1>Output Page</h1>';
    }

    public function settings_page_init()
    {
        global $current_tab, $current_section;

        echo '<h1>Setting Page Init</h1>';
        do_action('ultimate_watermark_settings_page_init');


    }
}

new WordPress_React_Admin();
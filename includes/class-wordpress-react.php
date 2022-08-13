<?php

defined('ABSPATH') || exit;

final class WordPress_React
{

    /**
     * WordPress_React version.
     *
     * @var string
     */
    public $version = WORDPRESS_REACT_VERSION;


    protected static $_instance = null;


    /**
     * Main WordPress_React Instance.
     *
     * Ensures only one instance of WordPress_React is loaded or can be loaded.
     *
     * @return WordPress_React - Main instance.
     * @static
     */
    public static function instance()
    {
        if (is_null(self::$_instance)) {
            self::$_instance = new self();
        }
        return self::$_instance;
    }

    /**
     * Cloning is forbidden.
     *
     * @since 1.0.0
     */
    public function __clone()
    {
        _doing_it_wrong(__FUNCTION__, __('Cloning is forbidden.', 'wordpress-react'), '1.0.0');
    }

    /**
     * Unserializing instances of this class is forbidden.
     *
     * @since 1.0.0
     */
    public function __wakeup()
    {
        _doing_it_wrong(__FUNCTION__, __('Unserializing instances of this class is forbidden.', 'wordpress-react'), '1.0.0');
    }

    /**
     * Auto-load in-accessible properties on demand.
     *
     * @param mixed $key Key name.
     * @return mixed
     */
    public function __get($key)
    {
        if (in_array($key, array(''), true)) {
            return $this->$key();
        }
    }

    /**
     * WordPress_React Constructor.
     */
    public function __construct()
    {

        $this->define_constants();
        $this->includes();
        $this->init_hooks();


        do_action('wordpress_react_loaded');
    }

    /**
     * Hook into actions and filters.
     *
     * @since 1.0.0
     */
    private function init_hooks()
    {
        add_action('init', array($this, 'init'), 0);


    }

    /**
     * Define WordPress_React Constants.
     */
    private function define_constants()
    {

        $this->define('WORDPRESS_REACT_ABSPATH', dirname(WORDPRESS_REACT_FILE) . '/');
        $this->define('WORDPRESS_REACT_BASENAME', plugin_basename(WORDPRESS_REACT_FILE));
        $this->define('WORDPRESS_REACT_ROUNDING_PRECISION', 6);
        $this->define('WORDPRESS_REACT_REST_WEBHOOKS_NAMESPACE', 'wordpress-react/v1/webhooks');
    }

    /**
     * Define constant if not already set.
     *
     * @param string $name Constant name.
     * @param string|bool $value Constant value.
     */
    private function define($name, $value)
    {
        if (!defined($name)) {
            define($name, $value);
        }
    }

    /**
     * What type of request is this?
     *
     * @param string $type admin, ajax, cron or frontend.
     * @return bool
     */
    private function is_request($type)
    {
        switch ($type) {
            case 'admin':
                return is_admin();
            case 'ajax':
                return defined('DOING_AJAX');
            case 'cron':
                return defined('DOING_CRON');
            case 'frontend':
                return (!is_admin() || defined('DOING_AJAX')) && !defined('DOING_CRON') && !defined('REST_REQUEST');
        }
    }

    /**
     * Include required core files used in admin and on the frontend.
     */
    public function includes()
    {

        if (is_admin()) {
            include_once plugin_dir_path(WORDPRESS_REACT_FILE) . 'includes/admin/class-wordpress-react-admin.php';
        }
    }

    public function load_plugin_textdomain()
    {
        $locale = is_admin() && function_exists('get_user_locale') ? get_user_locale() : get_locale();
        $locale = apply_filters('plugin_locale', $locale, 'wordpress-react');
        unload_textdomain('wordpress-react');

        load_textdomain('wordpress-react', WP_LANG_DIR . '/wordpress-react/wordpress-react-' . $locale . '.mo');
        load_plugin_textdomain('wordpress-react', false, plugin_basename(dirname(WORDPRESS_REACT_FILE)) . '/languages');
    }

    /**
     * Ensure theme and server variable compatibility and setup image sizes.
     */
    public function setup_environment()
    {

        $this->define('WORDPRESS_REACT_TEMPLATE_PATH', $this->template_path());

    }

    /**
     * Get the plugin url.
     *
     * @return string
     */
    public function plugin_url()
    {
        return untrailingslashit(plugins_url('/', WORDPRESS_REACT_FILE));
    }

    /**
     * Get the plugin path.
     *
     * @return string
     */
    public function plugin_path()
    {
        return untrailingslashit(plugin_dir_path(WORDPRESS_REACT_FILE));
    }

    /**
     * Get the template path.
     *
     * @return string
     */
    public function template_path()
    {
        return apply_filters('wordpress_react_template_path', 'wordpress-react/');
    }

    /**
     * Get the template path.
     *
     * @return string
     */
    public function plugin_template_path()
    {
        return apply_filters('wordpress_react_plugin_template_path', $this->plugin_path() . '/templates/');
    }

    /**
     * Get Ajax URL.
     *
     * @return string
     */
    public function ajax_url()
    {
        return admin_url('admin-ajax.php', 'relative');
    }


}

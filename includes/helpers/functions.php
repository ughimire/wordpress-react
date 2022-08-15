<?php
function wordpress_react_localize_settings()
{
    return array(
        array(
            'title' => __('General Settings', 'yatra'),
            'type' => 'title',
            'desc' => '',
            'id' => 'wordpress_react_general_settings',
            'sections' => array(
                array(
                    'title' => __('General Settings', 'yatra'),
                    'type' => 'section',
                    'settings' => array(
                        array(
                            'title' => __('Enable Guest Checkout', 'yatra'),
                            'desc' => __('This option allows you to checkout without login. User will not created if you tick this option..', 'yatra'),
                            'id' => 'wordpress_react_input_field_1',
                            'type' => 'text',
                            'default' => 'yes',
                        ),
                        array(
                            'title' => __('Show Terms on checkout', 'yatra'),
                            'desc' => __('This option allows you to checkout without login. User will not created if you tick this option..', 'yatra'),
                            'id' => 'wordpress_react_input_field_2',
                            'type' => 'text',
                            'default' => 'no',
                        ),
                    )
                )
            ),
            'children' => array(
                array(

                    'title' => __('Child 1', 'yatra'),
                    'desc' => '',
                    'id' => 'wordpress_react_general_sub_title_1_1',
                    'sections' => array(
                        array(
                            'title' => __('General Settings', 'yatra'),
                            'type' => 'section',
                            'settings' => array(
                                array(
                                    'title' => __('Enable Guest Checkout', 'yatra'),
                                    'desc' => __('This option allows you to checkout without login. User will not created if you tick this option..', 'yatra'),
                                    'id' => 'wordpress_react_input_field_1_1_1',
                                    'type' => 'text',
                                    'default' => 'yes',
                                ),
                                array(
                                    'title' => __('Show Terms on checkout', 'yatra'),
                                    'desc' => __('This option allows you to checkout without login. User will not created if you tick this option..', 'yatra'),
                                    'id' => 'wordpress_react_input_field_2_1_1',
                                    'type' => 'text',
                                    'default' => 'no',
                                ),
                            )
                        )
                    )
                ),
                array(

                    'title' => __('Child 2', 'yatra'),
                    'desc' => '',
                    'id' => 'wordpress_react_general_sub_title_2_1',
                    'sections' => array(
                        array(
                            'title' => __('General Settings', 'yatra'),
                            'type' => 'section',
                            'settings' => array(
                                array(
                                    'title' => __('Enable Guest Checkout', 'yatra'),
                                    'desc' => __('This option allows you to checkout without login. User will not created if you tick this option..', 'yatra'),
                                    'id' => 'wordpress_react_input_field_1_2_1',
                                    'type' => 'text',
                                    'default' => 'yes',
                                ),
                                array(
                                    'title' => __('Show Terms on checkout', 'yatra'),
                                    'desc' => __('This option allows you to checkout without login. User will not created if you tick this option..', 'yatra'),
                                    'id' => 'wordpress_react_input_field_2_2_1',
                                    'type' => 'text',
                                    'default' => 'no',
                                ),
                            )
                        )
                    )
                )
            )


        ),
        array(
            'title' => __('Minor Settings', 'yatra'),
            'type' => 'title',
            'desc' => '',
            'id' => 'wordpress_react_minor_settings',
            'icon' => 'dashicons dashicons-admin-plugins',
            'sections' => array(
                array(
                    'title' => __('General Settings', 'yatra'),
                    'type' => 'section',
                    'settings' => array(
                        array(
                            'title' => __('Enable Guest Checkout', 'yatra'),
                            'desc' => __('This option allows you to checkout without login. User will not created if you tick this option..', 'yatra'),
                            'id' => 'wordpress_react_input_field_1',
                            'type' => 'text',
                            'default' => 'yes',
                        ),
                        array(
                            'title' => __('Show Terms on checkout', 'yatra'),
                            'desc' => __('This option allows you to checkout without login. User will not created if you tick this option..', 'yatra'),
                            'id' => 'wordpress_react_input_field_2',
                            'type' => 'text',
                            'default' => 'no',
                        ),
                    )
                )
            ),
            'children' => array(
                array(

                    'title' => __('Sub Title 1', 'yatra'),
                    'desc' => '',
                    'id' => 'wordpress_react_general_sub_title_1',
                    'sections' => array(
                        array(
                            'title' => __('General Settings', 'yatra'),
                            'type' => 'section',
                            'settings' => array(
                                array(
                                    'title' => __('Enable Guest Checkout', 'yatra'),
                                    'desc' => __('This option allows you to checkout without login. User will not created if you tick this option..', 'yatra'),
                                    'id' => 'wordpress_react_input_field_1_1',
                                    'type' => 'text',
                                    'default' => 'yes',
                                ),
                                array(
                                    'title' => __('Show Terms on checkout', 'yatra'),
                                    'desc' => __('This option allows you to checkout without login. User will not created if you tick this option..', 'yatra'),
                                    'id' => 'wordpress_react_input_field_2_1',
                                    'type' => 'text',
                                    'default' => 'no',
                                ),
                            )
                        )
                    )
                ),
                array(

                    'title' => __('Sub Title 2', 'yatra'),
                    'desc' => '',
                    'id' => 'wordpress_react_general_sub_title_2',
                    'sections' => array(
                        array(
                            'title' => __('General Settings', 'yatra'),
                            'type' => 'section',
                            'settings' => array(
                                array(
                                    'title' => __('Enable Guest Checkout', 'yatra'),
                                    'desc' => __('This option allows you to checkout without login. User will not created if you tick this option..', 'yatra'),
                                    'id' => 'wordpress_react_input_field_1_2',
                                    'type' => 'text',
                                    'default' => 'yes',
                                ),
                                array(
                                    'title' => __('Show Terms on checkout', 'yatra'),
                                    'desc' => __('This option allows you to checkout without login. User will not created if you tick this option..', 'yatra'),
                                    'id' => 'wordpress_react_input_field_2_2',
                                    'type' => 'text',
                                    'default' => 'no',
                                ),
                            )
                        )
                    )
                )
            )


        )

    );

}
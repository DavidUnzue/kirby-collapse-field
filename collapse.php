<?php

class CollapseField extends BaseField {

  static public $assets = array(
    'css' => array(
      'collapse.css'
    ),
    'js' => array(
      'collapse.js'
    ),
  );

  public function result() {
    return null;
  }

  public function label() {
    return null;
  }

  public function content() {
    return '<h2 class="hgroup hgroup-single-line hgroup-compressed cf"><span class="hgroup-title">' . html($this->i18n($this->label)) . '</span></h2>';
  }

  public function element() {
    $element = parent::element();
    $element->addClass('collapse');
    return $element;
  }

}

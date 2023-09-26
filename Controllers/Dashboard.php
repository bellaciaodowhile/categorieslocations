<?php 
    class Dashboard extends Controllers {
        public function __construct() {
            parent::__construct();
        }
        public function dashboard() {
            $data['title'] = 'Dashboard Controller';
            $this->views->getView($this, 'Dashboard', $data);
        }
    }
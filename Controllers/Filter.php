<?php 
    class Filter extends Controllers {
        public $nombre;
        public $tipo;
        public $estado;
        public $idParent;
        public function __construct() {
            parent::__construct();
        }
        public function setFilter() {
            
            $this->nombre =  $_POST['nombre'];
            $this->tipo =  $_POST['tipo'];
            $this->estado =  $_POST['estado'];
            $this->idParent =  $_POST['idParent'];

            if ($this->tipo == 'subcategoria' && $this->idParent == 'base') {
                $arrResponse = array('status' => false, 'msg' => 'Debe registrar o seleccionar una categoría para continuar.');
                echo json_encode($arrResponse, JSON_UNESCAPED_UNICODE);
                die();
            } else {
                if (is_array(json_decode($this->nombre))) {
                    $arrNombres = json_decode($this->nombre);
                    
                    $req = $this->model->insertMultipleFilter($arrNombres, $this->tipo, $this->estado, $this->idParent);
                    if ($req[0] == 'insert') {
                        $arrResponse = array('status' => true, 'msg' => 'Datos guardados correctamente.');
                    }
                    if ($req[0] == "exist") {
                        $arrResponse = array('status' => false, 'msg' => '¡Atención! Verifique las categorías existentes.', 'data' =>$req[1]);
                    }
                    echo json_encode($arrResponse, JSON_UNESCAPED_UNICODE);
                    die();
    
    
                } else {
                    $req = $this->model->insertFilter($this->nombre, $this->tipo, $this->estado, $this->idParent);
                    if ($req > 0) {
                        $arrResponse = array('status' => true, 'msg' => 'Datos guardados correctamente.');
                    }
                    if ($req == "exist") {
                        $arrResponse = array('status' => false, 'msg' => '¡Atención! La categoría ya existe.');
                    }
                    if ($req == 0) {
                        $arrResponse = array('status' => false, 'msg' => 'No es posible almacenar los datos. Contacte a soporte.');
                    }
                    echo json_encode($arrResponse, JSON_UNESCAPED_UNICODE);
                    die();
    
                }
            }


            
        }
        public function getFilter($idParent) {
            $arrData = $this->model->selectFilter($idParent);
            echo json_encode($arrData, JSON_UNESCAPED_UNICODE);
        }
        public function getFilterParent() {
            $arrData = $this->model->selectFilterParent();
            echo json_encode($arrData, JSON_UNESCAPED_UNICODE);
        }
        public function delFilter($id) {
            $arrData = $this->model->delFilter($id);
            echo json_encode($arrData, JSON_UNESCAPED_UNICODE);
        }
        public function selectOnly($id) {
            $arrData = $this->model->selectOnly($id);
            echo json_encode($arrData, JSON_UNESCAPED_UNICODE);
        }
        public function updateFilter($id) {
            $arrData = $this->model->updateFilter($id, $_POST['nombre'], $_POST['tipo'], $_POST['estado'], $_POST['idParent']);
            if ($arrData) {
                $arrResponse = array('status' => true, 'msg' => '¡Actualización exitosa!');
            } else {
                $arrResponse = array('status' => false, 'msg' => 'Ha ocurrido un error...');
            }
            echo json_encode($arrResponse, JSON_UNESCAPED_UNICODE);
        }
        public function tree($id) {
            $arrData = $this->model->obtenerAncestros($id);
            echo json_encode($arrData, JSON_UNESCAPED_UNICODE);
            // echo var_dump($arrData);
            // echo var_dump('fjdkslajfdkslañfjdska');
        }

    }
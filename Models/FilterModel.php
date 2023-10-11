<?php 
    class FilterModel extends MySql{
        public $nombre;
        public $tipo;
        public $estado;
        public $idParent;

        public function __construct() {
            parent::__construct();
        }
        public function insertFilter(string $nombre, string $tipo, string $estado, string $idParent) {
            $return = "";
            $this->nombre = $nombre;
            $this->tipo = $tipo;
            $this->estado = $estado;
            $this->idParent = $idParent;

            $sql = "SELECT * FROM categorias WHERE nombre = '{$this->nombre}'";
            $req = $this->selectAll($sql);
            if (empty($req)) {
                $q = "INSERT INTO categorias (nombre, tipo, estado, idParent) VALUES (?,?,?,?)";
                $arrData = array($this->nombre, $this->tipo, $this->estado, $this->idParent);
                $reqInsert = $this->insert($q, $arrData);
                $return = $reqInsert;
            } else {
                $return = "exist";
            }
            return $return;
            
        }
        public function insertMultipleFilter(array $nombre, string $tipo, string $estado, string $idParent) {
            $return = '';
            $rows = array();
            $reqSelect = [];
            $arrValidation = [];
            for ($i = 0; $i < count($nombre); $i++) {
                $sql = "SELECT * FROM categorias WHERE nombre = '{$nombre[$i]}'";
                $reqSelect[] = $this->selectAll($sql);
            } 
            for ($i = 0; $i < count($nombre); $i++) {
                $rows[] = array($nombre[$i], $tipo, $estado, $idParent); 
            }
            foreach ($reqSelect as $x) {
                if (empty($x)) {
                    $arrValidation[] = 'go';
                } else {
                    $arrValidation[] = 'notGo';
                }
            }
            $l = array_search('notGo', $arrValidation);
            if(in_array("notGo", $arrValidation)){
                $return = ['exist', $reqSelect];
            } else {
                $sql = "INSERT INTO categorias (nombre, tipo, estado, idParent) VALUES (?,?,?,?)";
                $req = array();
                for ($i = 0; $i < count($rows); $i++) {
                    $req[] = $this->insert($sql, $rows[$i]);
                }
                $return = ['insert', $req];
            }

            return $return;

        }
        public function selectFilter($idParent) {
            $sql = "SELECT * FROM categorias WHERE idParent = '$idParent'";
            $req = $this->selectAll($sql);
            $categories = array();
	
            foreach($req as $row) {
                $categories[] = array(
                    'id' => $row['id'],
                    'idParent' => $row['idParent'],
                    'nombre' => $row['nombre'],
                    'tipo' => $row['tipo'],
                    'estado' => $row['estado'],
                    'subcategory' => $this->subCategories($row['id'])
                );
            }
            return $categories;
        }
        public function selectFilterParent() {
            $sql = "SELECT * FROM categorias WHERE idParent = 'base'";
            $req = $this->selectAll($sql);
            $categories = array();
	
            foreach($req as $row) {
                $categories[] = array(
                    'id' => $row['id'],
                    'idParent' => $row['idParent'],
                    'nombre' => $row['nombre'],
                    'tipo' => $row['tipo'],
                    'estado' => $row['estado'],
                    'subcategory' => $this->subCategories($row['id'])
                );
            }
            return $categories;

            
        }
        public function subCategories($id) {
            $sql = "SELECT * FROM categorias WHERE idParent = $id";
            $req = $this->selectAll($sql);
            $categories = array();
	
            foreach($req as $row) {
                $categories[] = array(
                    'id' => $row['id'],
                    'idParent' => $row['idParent'],
                    'nombre' => $row['nombre'],
                    'subcategory' => $this->subCategories($row['id'])
                );
            }
            return $categories;
        }
        public function delFilter($id) {
            $sql = "DELETE FROM categorias WHERE id = $id";
            $req = $this->delete($sql);
            return $req;
        }
        public function selectOnly($id) {
            $sql = "SELECT * FROM categorias WHERE id = $id";
            $req = $this->select($sql);
            
            return $req;
        }
        public function updateFilter($id, $nombre, $tipo, $estado, $idParent) {
            $sql = "UPDATE categorias SET nombre = ?, tipo = ?, estado = ?, idParent = ? WHERE id = $id";
            $arrValues = array($nombre, $tipo, $estado, $idParent);
            $res = $this->update($sql, $arrValues);
            return $res;
        }
        public function tree($id) {
            $arrData = array();
            $sql = "SELECT * FROM categorias WHERE id = $id";
            $req = $this->select($sql);
            
            
            
        }
        public function obtenerAncestros($idParent) {
            $ancestros = array();
        
            // Obtener el registro actual
            $sql = "SELECT * FROM categorias WHERE id = '$idParent'";
            $req = $this->select($sql);
        
            // Obtener los ancestros recursivamente
            if ($req) {
                if ($req['idParent'] != null) {
                    $ancestros = $this->obtenerAncestros($req['idParent']);
                }
            }
        
            // Agregar el registro actual a la lista de ancestros
            $ancestros[] = $req;
        
            return $ancestros;
        }
        public function setAdministrativeDivition($divition) {
            $sql = "SELECT * FROM divisiones WHERE division = '$divition'";
            $arrValidation = $this->selectAll($sql);
            $return;
            if (empty($arrValidation)) {
                $insert = "INSERT INTO divisiones (division) VALUES (?)";
                $arrValues = array($divition);
                $reqInsert = $this->insert($insert, $arrValues);
                $return = $reqInsert;
            } else {
                $return = 'exist';
            }
            return $return;
        }
        public function getDivitions() {
            $sql = "SELECT * FROM divisiones";
            $res = $this->selectAll($sql);
            return $res;
        }

    }
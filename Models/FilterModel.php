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
        public function delRegister($table, $id) {
            $sql = "DELETE FROM $table WHERE id = '$id'";
            $res = $this->delete($sql);
            return $res;
        }
        public function updateDivition($id, $nombre) {
            if ($id != '' || $nombre != '') {
                $sql = "UPDATE divisiones SET division = ? WHERE id = $id";
                $arrValues = array($nombre);
                $res = $this->update($sql, $arrValues);
            } else {
                $res = false;
            }
            return $res;
        }
        public function insertLocation(string $name, string $type, string $status, string $country, string $divition, string $idParent) {
            $return = "";

            $sql = "SELECT * FROM localizaciones WHERE nombre = '$name'";
            $req = $this->selectAll($sql);
            if (empty($req)) {
                $q = "INSERT INTO localizaciones (nombre, tipo, estado, pais, division, idParent ) VALUES (?,?,?,?,?,?)";
                $arrData = array($name, $type, $status, $country, $divition, $idParent);
                $reqInsert = $this->insert($q, $arrData);
                $return = $reqInsert;
            } else {
                $return = "exist";
            }
            return $return;
            
        }
        
        public function insertMultipleLocation(array $nombre, string $type, string $status, string $country, string $divition, string $idParent) {
            $return = '';
            $rows = array();
            $reqSelect = [];
            $arrValidation = [];
            for ($i = 0; $i < count($nombre); $i++) {
                $sql = "SELECT * FROM localizaciones WHERE nombre = '{$nombre[$i]}'";
                $reqSelect[] = $this->selectAll($sql);
            } 
            for ($i = 0; $i < count($nombre); $i++) {
                $rows[] = array($nombre[$i], $type, $status, $country, $divition, $idParent); 
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
                $sql = "INSERT INTO localizaciones (nombre, tipo, estado, pais, division, idParent) VALUES (?,?,?,?,?,?)";
                $req = array();
                for ($i = 0; $i < count($rows); $i++) {
                    $req[] = $this->insert($sql, $rows[$i]);
                }
                $return = ['insert', $req];
            }

            return $return;

        }
        public function getCountrys() {
            $sql = "SELECT * FROM countrys";
            $res = $this->selectAll($sql);
            return $res;
        }
        public function selectLocationParent() {
            $sql = "SELECT * FROM localizaciones WHERE idParent = 'base'";
            $req = $this->selectAll($sql);
            $locations = array();
	
            foreach($req as $row) {
                $locations[] = array(
                    'id' => $row['id'],
                    'idParent' => $row['idParent'],
                    'nombre' => $row['nombre'],
                    'tipo' => $row['tipo'],
                    'estado' => $row['estado'],
                    'subLocation' => $this->subLocations($row['id'])
                );
            }
            return $locations;
        }
        public function subLocations($id) {
            $sql = "SELECT * FROM localizaciones WHERE idParent = $id";
            $req = $this->selectAll($sql);
            $locations = array();
	
            foreach($req as $row) {
                $locations[] = array(
                    'id' => $row['id'],
                    'idParent' => $row['idParent'],
                    'nombre' => $row['nombre'],
                    'estado' => $row['estado'],
                    'pais' => $row['pais'],
                    'division' => $row['division'],
                    'subLocation' => $this->subLocations($row['id'])
                );
            }
            return $locations;
        }
        public function selectLocations($idParent) {
            $sql = "SELECT * FROM localizaciones WHERE idParent = '$idParent'";
            $req = $this->selectAll($sql);
            $locations = array();
	
            foreach($req as $row) {
                $locations[] = array(
                    'id' => $row['id'],
                    'idParent' => $row['idParent'],
                    'nombre' => $row['nombre'],
                    'tipo' => $row['tipo'],
                    'estado' => $row['estado'],
                    'pais' => $row['pais'],
                    'division' => $row['division'],
                    'subcategory' => $this->subLocations($row['id'])
                );
            }
            return $locations;
        }
        public function delLocation($id) {
            $sql = "DELETE FROM localizaciones WHERE id = $id";
            $req = $this->delete($sql);
            return $req;
        }
        public function selectOnlyLocation($id) {
            $sql = "SELECT * FROM localizaciones WHERE id = $id";
            $req = $this->select($sql);
            return $req;
        }
        public function insertCountry(string $country, string $status) {
            $return = "";

            $sql = "SELECT * FROM countrys WHERE country = '$country'";
            $req = $this->selectAll($sql);
            if (empty($req)) {
                $q = "INSERT INTO countrys (country, statusCountry) VALUES (?,?)";
                $arrData = array($country, $status);
                $reqInsert = $this->insert($q, $arrData);
                $return = $reqInsert;
            } else {
                $return = "exist";
            }
            return $return;
        }
        public function insertMultipleCountry(array $nombre, string $status) {
            $return = '';
            $rows = array();
            $reqSelect = [];
            $arrValidation = [];
            for ($i = 0; $i < count($nombre); $i++) {
                $sql = "SELECT * FROM countrys WHERE country = '{$nombre[$i]}'";
                $reqSelect[] = $this->selectAll($sql);
            } 
            for ($i = 0; $i < count($nombre); $i++) {
                $rows[] = array($nombre[$i], $status); 
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
                $sql = "INSERT INTO countrys (country, statusCountry) VALUES (?,?)";
                $req = array();
                for ($i = 0; $i < count($rows); $i++) {
                    $req[] = $this->insert($sql, $rows[$i]);
                }
                $return = ['insert', $req];
            }
            return $return;
        }
    }
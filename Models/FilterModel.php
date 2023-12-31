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
        public function selectOnlyData($table, $id) {
            $sql = "SELECT * FROM $table WHERE id = $id";
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
        public function setAdministrativeDivition($divition, $idCountry) {
            $sql = "SELECT * FROM divisiones WHERE division = '$divition'";
            $arrValidation = $this->selectAll($sql);
            $return;
            if (empty($arrValidation)) {
                $sql = "SELECT * FROM divisiones WHERE idCountry = '$idCountry'";
                $reqSelect = $this->selectAll($sql);
                $order;
                if (count($reqSelect) > 0) {
                    $order = count($reqSelect) + 1;
                } else {
                    $order = 1;
                }
                $insert = "INSERT INTO divisiones (division, idCountry, `order`) VALUES (?,?,?)";
                $arrValues = array($divition, $idCountry, $order);
                $reqInsert = $this->insert($insert, $arrValues);
                $return = $reqInsert;
            } else {
                $return = 'exist';
            }
            return $return;
        }
        public function getDivitions($idCountry) {
            $sql = "SELECT * FROM divisiones WHERE idCountry = '$idCountry'";
            $res = $this->selectAll($sql);
            function order($a, $b) {
                return $a['order'] - $b['order'];
            }
            usort($res, 'order');
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
            // return 'Hola vendo de insertLocation Para ingresar individualmente';
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
            $arrCountries = [];
            foreach ($res as $row) {
                $s = "SELECT * FROM localizaciones WHERE nombre = '{$row["country"]}'";
                $sq = $this->selectAll($s);
                $arrCountries[] = array(
                    "idCountry" => $row["id"],
                    "country" => $row["country"],
                    "idLocation" => $sq[0]["id"]);
            }
            return $arrCountries;
        }
        public function getOnlyCountry($nombre) {
            $sql = "SELECT * FROM countrys WHERE country = '{$nombre}'";
            $res = $this->selectAll($sql);
            $arrCountries = [];
            foreach ($res as $row) {
                $s = "SELECT * FROM localizaciones WHERE nombre = '{$row["country"]}'";
                $sq = $this->selectAll($s);
                $arrCountries[] = array(
                    "idCountry" => $row["id"],
                    "country" => $row["country"],
                    "idLocation" => $sq[0]["id"],
                    "locationStatus" => $sq[0]["estado"]);
            }
            return $arrCountries;
        }



        public function selectLocationParent($id) {
            $sql = "SELECT * FROM localizaciones WHERE idParent = '$id'";
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
                    'subLocation' => $this->subLocations($row['id'])
                );
            }
            return $locations;
        }
        public function delLocation($id, $country) {
            $sql = "DELETE FROM localizaciones WHERE id = $id";
            $req = $this->delete($sql);
            if ($country != null) {
                $s = "DELETE FROM countrys WHERE country = '$country'";
                $q = $this->delete($s);
            }
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

                // * Insertar país como base en las localizaciones para tener la base lista para las demás localizaciones
                $qCountry = "INSERT INTO localizaciones (nombre, tipo, estado, pais, division, idParent) VALUES (?,?,?,?,?,?)";
                $arrDataCountry = array($country, 'pais', $status, 'NULL', 'pais', 'base');
                $reqInsertCountry = $this->insert($qCountry, $arrDataCountry);

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
        public function updateOrderDivitions($newOrder) {
            
            $arr = array();
            for ($i = 0; $i < count($newOrder); $i++) {
                $arr[] = array("id" => $newOrder[$i]->id, "order" => $newOrder[$i]->order);
            }

            foreach ($arr as $key) {
                if ($key != null) {
                    // * * El error se solucionó usando las backticks en el nombre de la columna `order` ya que order es una propiedad de MySql, había un choque
                    $sql = "UPDATE divisiones SET `order` = ? WHERE id = '{$key["id"]}'";
                    $data = array($key["order"]);
                    $res = $this->update($sql, $data);
                    // return $res; // ! Al colocar este return se estaba cancelando la iteración y por ende solamente tenía alcance a un solo elemento del arreglo
                    
                }
            }

        }
        public function updateCountryLocation($idCountry, $idLocation, $status, $country, $countryCurrent) {
            $sql = "UPDATE countrys SET country = ? WHERE id = {$idCountry}";
            $arrData = array($country);
            $req = $this->update($sql, $arrData);
            if ($req != null) {
                $s = "UPDATE localizaciones SET nombre = ?, estado = ? WHERE id = {$idLocation}";
                $arr = array($country, $status);
                $reqLocation = $this->update($s, $arr);
                $sCountrys = "UPDATE localizaciones SET pais = ? WHERE pais = '{$countryCurrent}' and idParent != 'base'";
                $arrCountrys = array($country);
                $reqCountrys = $this->update($sCountrys, $arrCountrys);
                return $reqCountrys;
            }
        }
        public function getLocationUpdate($id) {
            $sql = "SELECT * FROM localizaciones WHERE id = {$id}";
            $req = $this->selectAll($sql);
            if ($req != '') {
                $s = "SELECT * FROM countrys WHERE country = '{$req[0]['pais']}'";
                $q = $this->selectAll($s);
                $req[0]["idCountry"] = $q[0]["id"];
                $x = "SELECT * FROM localizaciones WHERE nombre = '{$req[0]['pais']}'";
                $y = $this->selectAll($x);
                $req[0]["idLocation"] = $y[0]["id"];
            }
            return $req;
        }
        public function updateLocations($data) {
            $data = json_decode($data);
            $sql = "UPDATE localizaciones SET nombre = ?, estado = ?,  division = ?, idParent = ?, tipo = ? WHERE id = '{$data[0][0]}'";
            $arrData = array($data[0][1], $data[0][2], $data[0][3], $data[0][4], $data[0][3]);
            $req = $this->update($sql, $arrData);
            
            return $req;
        }
        public function treeLocations($idParent) {
            $ancestros = array();
        
            // Obtener el registro actual
            $sql = "SELECT * FROM localizaciones WHERE id = '$idParent'";
            $req = $this->select($sql);
        
            // Obtener los ancestros recursivamente
            if ($req) {
                if ($req['idParent'] != null) {
                    $ancestros = $this->treeLocations($req['idParent']);
                }
            }
        
            // Agregar el registro actual a la lista de ancestros
            $ancestros[] = $req;
        
            return $ancestros;
        }
        public function getCategoriesTabs($idParent) {
            $sql = "SELECT * FROM categorias WHERE idParent = '{$idParent}'";
            $req = $this->selectAll($sql);
            return $req;
        }
    }
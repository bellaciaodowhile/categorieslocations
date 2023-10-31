-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 31-10-2023 a las 23:21:27
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `widget`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorias`
--

CREATE TABLE `categorias` (
  `id` int(11) NOT NULL,
  `nombre` varchar(80) NOT NULL,
  `tipo` varchar(80) NOT NULL,
  `estado` varchar(80) NOT NULL,
  `idParent` varchar(80) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `categorias`
--

INSERT INTO `categorias` (`id`, `nombre`, `tipo`, `estado`, `idParent`) VALUES
(100, 'Logitech Pro Max X', 'categoria', 'active', 'base'),
(101, 'Hija de logi', 'subcategoria', 'inactive', '136'),
(102, 'Inactivoa', 'subcategoria', 'inactive', '103'),
(103, 'Logita', 'subcategoria', 'inactive', '136'),
(104, 'Bien y tu?', 'subcategoria', 'active', '106'),
(106, 'Yopal', 'categoria', 'active', 'base'),
(107, 'HIja de Inactivoa', 'subcategoria', 'inactive', '106'),
(112, 'Prado del Este', 'categoria', 'active', 'base'),
(114, 'Central bolívar', 'categoria', 'active', 'base'),
(115, 'Nueva  república', 'categoria', 'active', 'base'),
(116, 'Cambao', 'categoria', 'active', 'base'),
(117, 'Moreas', 'categoria', 'active', 'base'),
(118, 'Betel', 'categoria', 'active', 'base'),
(119, 'Shell', 'categoria', 'active', 'base'),
(120, 'Maipure', 'categoria', 'active', 'base'),
(121, 'Manahaim', 'categoria', 'active', 'base'),
(122, 'Villa lola', 'categoria', 'active', 'base'),
(123, 'Soledad', 'categoria', 'active', 'base'),
(124, 'Principal', 'categoria', 'active', 'base'),
(125, 'Subcategorias', 'subcategoria', 'active', '108'),
(126, 'Madre de Logi ahora', 'subcategoria', 'active', '100'),
(127, 'vass', 'subcategoria', 'active', '105'),
(128, 'Pedrito', 'subcategoria', 'active', '102'),
(129, 'queso', 'subcategoria', 'active', '105'),
(130, 'v.0.1.2', 'subcategoria', 'active', '100'),
(131, 'Teclado', 'subcategoria', 'active', '100'),
(132, 'Que pasa pues', 'categoria', 'active', 'base'),
(134, 'Este si es inactivo', 'subcategoria', 'inactive', '100'),
(135, 'Nueva hija de Yopal', 'subcategoria', 'active', '100'),
(136, 'Hija de Logita', 'subcategoria', 'inactive', '104'),
(137, 'Pradito', 'subcategoria', 'inactive', '112');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `countrys`
--

CREATE TABLE `countrys` (
  `id` int(11) NOT NULL,
  `country` varchar(55) NOT NULL,
  `statusCountry` varchar(22) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `countrys`
--

INSERT INTO `countrys` (`id`, `country`, `statusCountry`) VALUES
(24, 'Venezuela', 'active'),
(26, 'España', 'active'),
(31, 'Colombia', 'active');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `divisiones`
--

CREATE TABLE `divisiones` (
  `id` int(11) NOT NULL,
  `division` varchar(50) NOT NULL,
  `idCountry` varchar(22) NOT NULL,
  `order` varchar(22) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `divisiones`
--

INSERT INTO `divisiones` (`id`, `division`, `idCountry`, `order`) VALUES
(21, 'Region', '24', '1'),
(22, 'Estado', '24', '2'),
(23, 'municipio', '24', '3'),
(24, 'Barrio', '24', '4'),
(25, 'Comunidad Autónoma', '26', '1'),
(26, 'debajo', '26', '2');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `levels`
--

CREATE TABLE `levels` (
  `id` int(11) NOT NULL,
  `level` varchar(22) NOT NULL,
  `idCountry` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `localizaciones`
--

CREATE TABLE `localizaciones` (
  `id` int(11) NOT NULL,
  `nombre` varchar(55) NOT NULL,
  `tipo` varchar(55) NOT NULL,
  `estado` varchar(55) NOT NULL,
  `pais` varchar(55) NOT NULL,
  `division` varchar(55) NOT NULL,
  `idParent` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `localizaciones`
--

INSERT INTO `localizaciones` (`id`, `nombre`, `tipo`, `estado`, `pais`, `division`, `idParent`) VALUES
(31, 'Venezuela', 'pais', 'active', 'NULL', 'pais', 'base'),
(33, 'España', 'pais', 'active', 'NULL', 'pais', 'base'),
(34, 'Bolívar', 'estado', 'active', 'Venezuela', 'estado', '31'),
(35, 'Angostura del orinoco', 'municipio', 'active', 'Venezuela', 'municipio', '34'),
(36, 'Heres', 'municipio', 'active', 'Venezuela', 'municipio', '34'),
(37, 'Laritica', 'Barrio', 'inactive', 'Venezuela', 'Barrio', '43'),
(38, 'Cedeño', 'municipio', 'active', 'Venezuela', 'municipio', '34'),
(39, 'Aragua', 'estado', 'active', 'Venezuela', 'Estado', '31'),
(40, 'Lara', 'Estado', 'inactive', 'Venezuela', 'Estado', '31'),
(42, 'Barcelona', 'estado', 'active', 'Venezuela', 'Estado', '31'),
(43, 'Larita', 'Barrio', 'inactive', 'Venezuela', 'Barrio', '46'),
(45, 'Valencia', 'estado', 'active', 'Venezuela', 'Estado', '31'),
(46, 'Valenciano', 'municipio', 'active', 'Venezuela', 'municipio', '45'),
(47, 'Carabobo', 'estado', 'active', 'Venezuela', 'Estado', '31'),
(51, 'Sucre', 'estado', 'active', 'Venezuela', 'Estado', '31'),
(53, 'Petarea', 'barrio', 'active', 'Venezuela', 'Barrio', '52'),
(58, 'Colombia', 'pais', 'active', 'NULL', 'pais', 'base'),
(59, 'Cataluña', 'comunidad autónoma', 'active', 'España', 'Comunidad Autónoma', '33'),
(60, 'Uno', 'comunidad autónoma', 'active', 'España', 'Comunidad Autónoma', '33'),
(61, 'dos', 'comunidad autónoma', 'active', 'España', 'Comunidad Autónoma', '33'),
(62, 'tres', 'comunidad autónoma', 'active', 'España', 'Comunidad Autónoma', '33'),
(63, 'Dejabo de', 'debajo', 'inactive', 'España', 'debajo', '60'),
(64, 'Yo no se mañana', 'debajo', 'inactive', 'España', 'debajo', '65'),
(65, 'Uhhh', 'debajo', 'inactive', 'España', 'debajo', '60');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categorias`
--
ALTER TABLE `categorias`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `countrys`
--
ALTER TABLE `countrys`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `divisiones`
--
ALTER TABLE `divisiones`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `levels`
--
ALTER TABLE `levels`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `localizaciones`
--
ALTER TABLE `localizaciones`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categorias`
--
ALTER TABLE `categorias`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=138;

--
-- AUTO_INCREMENT de la tabla `countrys`
--
ALTER TABLE `countrys`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT de la tabla `divisiones`
--
ALTER TABLE `divisiones`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT de la tabla `levels`
--
ALTER TABLE `levels`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `localizaciones`
--
ALTER TABLE `localizaciones`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=66;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

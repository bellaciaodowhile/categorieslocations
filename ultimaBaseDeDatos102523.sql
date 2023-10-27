-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 25-10-2023 a las 22:54:15
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
(107, 'HIja de Inactivoa', 'subcategoria', 'active', '102'),
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
(128, 'Pedrito', 'subcategoria', 'active', '100'),
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
(1, 'Venezuela', ''),
(2, 'Francia', 'inactive'),
(3, 'Eslovenia', 'inactive'),
(4, 'Eslovaquia', 'inactive'),
(5, 'Rusia', 'inactive'),
(6, 'España', 'inactive'),
(7, 'Ucrania', ''),
(8, 'Paissolo', ''),
(9, 'PaisUnico', ''),
(10, 'Necesito', ''),
(11, 'fdsa', ''),
(12, 'Activosolo', ''),
(13, 'paisolosa', 'active'),
(14, 'lista', 'active'),
(15, 'de', 'active'),
(16, 'paises', 'active'),
(17, 'mia', 'active'),
(18, 'Vuelo', 'active'),
(19, 'Adele', 'inactive'),
(20, 'Activo', 'active'),
(21, 'Skyfall', 'active');

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
(8, 'Estado', '1', '2'),
(9, 'Municipio', '1', '3'),
(10, 'Region', '1', '1'),
(12, 'Barrio', '1', '4'),
(15, 'queso', '1', '5'),
(17, 'jola', '1', '6'),
(18, 'Comunidad Autónoma', '6', '1'),
(19, 'Provincia', '6', '3');

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
(1, 'Bratislava', 'pais', 'active', 'Eslovaquia', 'NULL', 'base'),
(2, 'Liubliana', 'pais', 'active', 'Eslovenia', 'NULL', 'base'),
(5, 'una', 'pais', 'active', 'France', 'NULL', 'base'),
(6, 'prueba', 'pais', 'active', 'France', 'NULL', 'base'),
(7, 'de', 'pais', 'active', 'France', 'NULL', 'base'),
(9, 'lista', 'pais', 'active', 'France', 'NULL', 'base'),
(12, 'Berlín', 'pais', 'active', 'Rusia', 'NULL', 'base'),
(13, 'Notebook', 'division', 'active', 'españa', 'españa', '6'),
(14, 'Mac', 'division', 'active', 'españa', 'Eslovaquia', '13'),
(15, 'Mac Pro', 'division', 'active', 'españa', 'Eslovaquia', '13'),
(16, 'Local', 'division', 'inactive', 'españa', 'Eslovaquia', '2'),
(17, 'Local Andorra', 'division', 'inactive', 'Eslovenia', 'Andorra', '9'),
(18, 'Local Venezuela', 'pais', 'inactive', 'Venezuela', 'NULL', 'base'),
(19, 'Creeré', 'pais', 'active', 'españa', '', 'base'),
(20, 'le', 'pais', 'active', 'españa', '', 'base'),
(21, 'estoy', 'pais', 'active', 'españa', '', 'base'),
(22, 'enseñando', 'pais', 'active', 'españa', '', 'base'),
(23, 'a', 'pais', 'active', 'españa', '', 'base'),
(24, 'sobrevivir', 'pais', 'active', 'españa', '', 'base');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT de la tabla `divisiones`
--
ALTER TABLE `divisiones`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT de la tabla `levels`
--
ALTER TABLE `levels`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `localizaciones`
--
ALTER TABLE `localizaciones`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 30-08-2023 a las 01:31:27
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
(63, 'Jardinería mediterránea', 'subcategoria', 'active', '0'),
(67, 'vale', 'subcategoria', 'active', '0'),
(69, 'esto', 'categoria', 'active', '0'),
(70, 'es', 'categoria', 'active', '0'),
(72, 'a ver', 'categoria', 'active', '0'),
(73, 'porque', 'categoria', 'active', '0'),
(74, 'este', 'categoria', 'active', '0'),
(75, 'servicio', 'categoria', 'active', '0'),
(77, 'esto es', 'subcategoria', 'active', '0'),
(78, 'holasdf', 'subcategoria', 'active', '0'),
(80, 'estoas', 'subcategoria', 'active', '0'),
(81, 'queso', 'subcategoria', 'active', '0'),
(83, 'pasrme', 'subcategoria', 'active', '0'),
(84, 'lista', 'subcategoria', 'active', '67'),
(85, 'de topiaires', 'subcategoria', 'active', '67'),
(86, 'quesoas', 'subcategoria', 'active', '0'),
(87, 'valsadf', 'subcategoria', 'active', '0'),
(88, 'Puede colocar esto asi', 'subcategoria', 'active', '0'),
(89, 'de manera que', 'subcategoria', 'active', '0'),
(90, 'tengan espacios', 'subcategoria', 'active', '0'),
(91, 'pero no se insertarán', 'subcategoria', 'active', '0'),
(92, 'vale?', 'subcategoria', 'active', '0');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categorias`
--
ALTER TABLE `categorias`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categorias`
--
ALTER TABLE `categorias`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=93;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

-- phpMyAdmin SQL Dump
-- version 4.6.6deb4
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 20-05-2017 a las 09:18:07
-- Versión del servidor: 5.7.18-0ubuntu0.17.04.1
-- Versión de PHP: 7.0.18-0ubuntu0.17.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `test-nodejs`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `post`
--

CREATE TABLE `post` (
  `cve_post` int(11) NOT NULL,
  `title_post` varchar(140) NOT NULL,
  `description_post` varchar(500) NOT NULL,
  `cve_profile` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `post`
--

INSERT INTO `post` (`cve_post`, `title_post`, `description_post`, `cve_profile`) VALUES
(1, 'Primer Post', 'Hola mundo', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `profile`
--

CREATE TABLE `profile` (
  `cve_profile` int(11) NOT NULL,
  `name_profile` varchar(70) NOT NULL,
  `lastname_profile` varchar(70) NOT NULL,
  `email_profile` varchar(240) NOT NULL,
  `datebirth_profile` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='TEST WITH NODEJS';

--
-- Volcado de datos para la tabla `profile`
--

INSERT INTO `profile` (`cve_profile`, `name_profile`, `lastname_profile`, `email_profile`, `datebirth_profile`) VALUES
(1, 'Homero', 'Jimenez', 'homero@hotmail.com', '1991-12-10'),
(2, 'Arturo', 'De la Cruz', 'arturo@gmail.com', '1991-03-07'),
(3, 'Jonas', 'Aguilar', 'jonasaguilar@gmail.com', '2001-02-10'),
(4, 'Ana', 'Flores', 'anaflores@hotmail.com', '1990-10-01'),
(5, 'Cecilia', 'Olan', 'cecyolan@gmail.com', '1991-10-15');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `post`
--
ALTER TABLE `post`
  ADD PRIMARY KEY (`cve_post`),
  ADD KEY `cve_profile` (`cve_profile`);

--
-- Indices de la tabla `profile`
--
ALTER TABLE `profile`
  ADD PRIMARY KEY (`cve_profile`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `post`
--
ALTER TABLE `post`
  MODIFY `cve_post` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT de la tabla `profile`
--
ALTER TABLE `profile`
  MODIFY `cve_profile` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `post`
--
ALTER TABLE `post`
  ADD CONSTRAINT `rel_post_profile_fk` FOREIGN KEY (`cve_profile`) REFERENCES `profile` (`cve_profile`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

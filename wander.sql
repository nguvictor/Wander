-- phpMyAdmin SQL Dump
-- version 3.5.2.2
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Apr 01, 2014 at 09:28 PM
-- Server version: 5.5.27
-- PHP Version: 5.4.7

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `wander`
--

-- --------------------------------------------------------

--
-- Table structure for table `location`
--

CREATE TABLE IF NOT EXISTS `location` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tourid` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` varchar(512) NOT NULL,
  `position` int(11) NOT NULL,
  `long` double NOT NULL,
  `lat` double NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=10 ;

--
-- Dumping data for table `location`
--

INSERT INTO `location` (`id`, `tourid`, `name`, `description`, `position`, `long`, `lat`) VALUES
(1, 1, 'Allen Gardens', 'Allen Gardens', 0, -79.374279, 43.661888),
(2, 1, '209 Carlton', 'a. You\\''re passing the former house of Dr. Oronhyatekha – one of the first aboriginal M.D.s in Canada. He lived here in the 1860s.', 1, 0, 0),
(3, 1, '274 Carlton', 'Betty Oliphant used to live here. A legendary ballet dancer, she co-founded the National Ballet School of Canada.', 2, 0, 0),
(4, 1, 'Parliament and Carlton Mural', 'Slow down! Take a moment to check out this mural, painted in 1996 by the Cabbagetown Business Improvement Area. This neighborhood takes beautification seriously.', 3, 0, 0),
(5, 1, 'Winchester Cafe', 'We know you\\''ve worked up an appetite, walking for so long. Take a snack break if you’d like!', 4, 0, 0),
(6, 1, 'Riverdale Farm', 'You’re in Riverdale Farm, which has been in the city since 1888. It originally operated as a zoo until 1974, when a newer, larger site was built in Scarborough (the Toronto Zoo). b. According to blogTO, it was home to a strange population of exotic animals – hippopotamuses, elephants, lynxes, and more. Questions of animal cruelty dogged the zoo until its closure.', 5, 0, 0),
(7, 1, 'Lower Ponds', 'See that stone bridge and the house it leads to? That’s the old Stone Bridge and Island House, both remnants of the old Riverdale Zoo. The Island House was used to hold birds and animals alike.', 6, 0, 0),
(8, 1, 'Footbridge', 'It\\’s a bit of a long walk, but trust us – it\\’s worth it!', 7, 0, 0),
(9, 1, 'Broadview Viewpoint', 'Pretty, huh? You’re at the end of the tour! Through the walk, you’ve heard music from Amy Millan – a resident of Cabbagetown herself – and a Toronto mainstay band, Broken Social Scene. Hope you enjoyed yourself.', 8, 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `music`
--

CREATE TABLE IF NOT EXISTS `music` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tourid` int(11) NOT NULL,
  `location` varchar(512) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `tour`
--

CREATE TABLE IF NOT EXISTS `tour` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `description` varchar(512) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Dumping data for table `tour`
--

INSERT INTO `tour` (`id`, `name`, `description`) VALUES
(1, 'Cabbagetown Urban Foliage', 'A quick stroll around Cabbage Town!'),
(2, 'Chinatown Tour', 'A look at chinatown.'),
(3, 'Wander Downtown', 'A Wander around downtown');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

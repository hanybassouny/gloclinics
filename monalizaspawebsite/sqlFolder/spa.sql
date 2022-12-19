-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 18, 2022 at 03:04 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `spa`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `ID` int(11) NOT NULL,
  `UserName` text NOT NULL,
  `Password` text NOT NULL,
  `Postion` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`ID`, `UserName`, `Password`, `Postion`) VALUES
(2, 'admin', 'admin', 0);

-- --------------------------------------------------------

--
-- Table structure for table `event`
--

CREATE TABLE `event` (
  `ID` int(255) NOT NULL,
  `Name` varchar(99) COLLATE utf8_unicode_ci NOT NULL,
  `Number` text COLLATE utf8_unicode_ci NOT NULL,
  `Email` varchar(99) COLLATE utf8_unicode_ci NOT NULL,
  `EventName` varchar(99) COLLATE utf8_unicode_ci NOT NULL,
  `PackageName` varchar(99) COLLATE utf8_unicode_ci NOT NULL,
  `booking_date` date NOT NULL,
  `PaidAmount` int(99) NOT NULL,
  `NotPaidAmount` int(99) NOT NULL,
  `event_date` date NOT NULL,
  `client_status_event` int(99) NOT NULL,
  `TotalAmount` int(11) DEFAULT NULL,
  `AdminComment` mediumtext COLLATE utf8_unicode_ci DEFAULT NULL,
  `Extra` text COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `event`
--

INSERT INTO `event` (`ID`, `Name`, `Number`, `Email`, `EventName`, `PackageName`, `booking_date`, `PaidAmount`, `NotPaidAmount`, `event_date`, `client_status_event`, `TotalAmount`, `AdminComment`, `Extra`) VALUES
(1, 'undefined', '2147483647', 'ahmedamein100@gmail.com', 'زفاف', 'Luxury', '2022-08-28', 500, 9500, '2022-08-31', 3, 10000, NULL, NULL),
(2, 'Ahmed Amin Naem', '2147483647', 'ahmedamein100@gmail.com', 'زفاف', 'Luxury', '2022-08-28', 500, 9500, '2022-08-31', 0, 10000, NULL, NULL),
(3, 'Ahmed Amin Naem', '2147483647', 'ahmedamein100@gmail.com', 'زفاف', 'Luxury', '2022-08-28', 500, 9500, '2022-08-31', 0, 10000, NULL, NULL),
(4, 'Ahmed Amin Naem', '12222222', 'ahmedamein100@gmail.com', 'زفاف', 'Luxury', '2022-08-28', 500, 9500, '2022-08-31', 0, 10000, NULL, NULL),
(5, 'Ahmed Amin Naem', '12222222', 'ahmedamein100@gmail.com', 'زفاف', 'Luxury', '2022-08-28', 500, 9500, '2022-08-31', 0, 10000, NULL, NULL),
(6, 'Ahmed Amin Naem', '012222222', 'ahmedamein100@gmail.com', 'زفاف', 'Luxury', '2022-08-28', 500, 9500, '2022-08-31', 0, 10000, NULL, NULL),
(7, 'Ahmed Amin Naem', '012222222', 'ahmedamein100@gmail.com', 'زفاف', 'Elegant With Hijab', '2022-08-28', 4500, 500, '2022-08-31', 2, 5000, 'mashy', NULL),
(15, 'Ahmed Amin Naem', '015738603347', 'ahmedamein100@gmail.com', 'زفاف', 'Luxury', '2022-08-29', 10000, 750, '2022-11-01', 0, 10750, 'aywaaaaaaaaaa', 'حمام سلطان / '),
(16, 'Ahmed Amin Naem', '015738603347', 'ahmedamein100@gmail.com', 'زفاف', 'Luxury', '2022-08-30', 1000, 9999200, '2022-08-31', 0, 10000200, '', 'حمام مغربي / '),
(17, 'Ahmed Amin Naem', '015738603347', 'ahmedamein100@gmail.com', 'زفاف', 'Luxury', '2022-08-30', 1000, 9200, '2022-08-31', 0, 10200, '', 'حمام مغربي / '),
(18, 'Ahmed Amin Naem', '015738603347', 'ahmedamein100@gmail.com', 'زفاف', 'Luxury', '2022-08-30', 1000, 9600, '2022-08-31', 0, 10600, '', 'حمام مغربي / مساج كامل / '),
(19, 'Ahmed Amin', '0122518516', 'ahmedamein100@gmail.com', 'خطوبة', 'Elegant باكيدج الخطوبه غير محجبة', '2022-08-30', 1000, 3100, '2022-08-31', 0, 4100, '', 'حمام مغربي / مساج كامل / '),
(20, 'Ahmed Amin', '0122518516', 'ahmedamein100@gmail.com', 'خطوبة', 'Elegant باكيدج الخطوبه غير محجبة', '2022-08-30', 1000, 2700, '2022-08-31', 0, 3700, '', 'حمام مغربي / '),
(21, 'Ahmed Amin', '0122518516', 'ahmedamein100@gmail.com', 'حنة', 'Vip باكيدج حنه غير محجبة', '2022-08-30', 1000, 1900, '2022-08-31', 0, 2900, '', 'مساج كامل / '),
(22, 'Ahmed Amin', '0122518516', 'ahmedamein100@gmail.com', 'حنة', 'Vip باكيدج حنه غير محجبة', '2022-08-30', 1000, 2100, '2022-08-31', 0, 3100, '', 'حمام مغربي / مساج كامل / ');

-- --------------------------------------------------------

--
-- Table structure for table `onlineid`
--

CREATE TABLE `onlineid` (
  `ID` bigint(20) NOT NULL,
  `Query` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `onlineid`
--

INSERT INTO `onlineid` (`ID`, `Query`) VALUES
(13345536894, 'INSERT INTO event VALUES ( NULL, \'Ahmed Amin Naem\', \'015738603347\', \'ahmedamein100@gmail.com\', \'زفاف\', \'Elegant With Hijab\', \'2022-08-28\', \'1000\', \'4000\', \'2022-10-31\', \'0\', \'5000\')'),
(75129256532, 'INSERT INTO event VALUES ( NULL, \'Ahmed Amin Naem\', \'015738603347\', \'ahmedamein100@gmail.com\', \'خطوبة\', \'elegant باكيدج الخطوبه محجبة\', \'2022-08-28\', \'500\', \'2000\', \'2022-08-20\', \'0\', \'2500\')'),
(92970255040, 'INSERT INTO productorder VALUES ( NULL, \'Ahmed Amin Naem\', \'ahmedamein100@gmail.com\', \'015738603347\', \'BurgsdorfstraBe 16\', \'3\', \'1\')'),
(127641865453, 'INSERT INTO productorder VALUES ( NULL, \'Ahmed Amin Naem\', \'ahmedamein100@gmail.com\', \'015738603347\', \'BurgsdorfstraBe 16\', \'3\', \'1\')'),
(146346138187, 'INSERT INTO event VALUES ( NULL, \'Ahmed Amin\', \'0122518516\', \'ahmedamein100@gmail.com\', \'خطوبة\', \'Elegant باكيدج الخطوبه غير محجبة\', \'2022-08-30\', \'1000\', \'3100\', \'2022-08-31\', \'0\', \'4100\', \'\', \'حمام مغربي / مساج كامل / \')'),
(204526960690, 'INSERT INTO Orders VALUES ( NULL, \'Ahmed Amin Naem\', \'015738603347\', \'ahmedamein100@gmail.com\', \'1\', \'Masks\', \'Mini Facial ماسك بخار/ Herbal Mask ماسك تنظيف بالأعشاب \', \'350\', \'1\', \'0\', \'2022-08-31T20:33\')'),
(249619537924, 'INSERT INTO productorder VALUES ( NULL, \'Ahmed Amin Naem\', \'ahmedamein100@gmail.com\', \'015738603347\', \'BurgsdorfstraBe 16\', \'4\', \'1\')'),
(257589936684, 'INSERT INTO Orders VALUES ( NULL, \'Ahmed Amin Naem\', \'015738603347\', \'ahmedamein100@gmail.com\', \'1\', \'Hair Removal\', \'سويت يد كامله / سويت نص رجل / سويت ظهر / \', \'220\', \'1\', \'0\', \'2022-08-13T17:27\')'),
(339714415069, 'INSERT INTO Orders VALUES ( NULL, \'Ahmed Amin Naem\', \'015738603347\', \'ahmedamein100@gmail.com\', \'1\', \'Hair Removal\', \'سويت يد كامله / سويت نص يد / سويت نص رجل / \', \'155\', \'1\', \'0\', \'2022-08-19T21:30\')'),
(434562834196, 'INSERT INTO productorder VALUES ( NULL, \'Ahmed Amin Naem\', \'ahmedamein100@gmail.com\', \'015738603347\', \'BurgsdorfstraBe 16\', \'3\', \'1\')'),
(449449030485, 'INSERT INTO event VALUES ( NULL, \'Ahmed Amin Naem\', \'015738603347\', \'ahmedamein100@gmail.com\', \'زفاف\', \'Luxury\', \'2022-08-30\', \'1000\', \'9600\', \'2022-08-31\', \'0\', \'10600\', \'\', \'حمام مغربي / مساج كامل / \')'),
(494537650073, 'INSERT INTO Orders VALUES ( NULL, \'Ahmed Amin Naem\', \'015738603347\', \'ahmedamein100@gmail.com\', \'1\', \'Masks\', \' اظافر چل\', \'450\', \'1\', \'0\', \'2022-08-20T21:04\')'),
(524745303348, 'INSERT INTO Orders VALUES ( NULL, \'هاني مجدي\', \'0123456897\', \'hanyelbassuony92@gmail.com\', \'1\', \'Spa\', \'حمام مغربي \', \'200\', \'1\', \'0\', \'2022-08-18T10:40\')'),
(534194495693, 'INSERT INTO productorder VALUES ( NULL, \'Ahmed Amin\', \'ahmedamein100@gmail.com\', \'0122518516\', \'assddf\', \'3\', \'4\', \'2022-09-17\', 0)'),
(550668925434, 'INSERT INTO productorder VALUES ( NULL, \'Ahmed Amin Naem\', \'ahmedamein100@gmail.com\', \'015738603347\', \'BurgsdorfstraBe 16\', \'3\', \'1\')'),
(554097051122, 'INSERT INTO Orders VALUES ( NULL, \'Ahmed Amin Naem\', \'015738603347\', \'ahmedamein100@gmail.com\', \'1\', \'Masks\', \'Mini Facial ماسك بخار\', \'100\', \'1\', \'0\', \'2022-08-20T19:58\')'),
(562374215212, 'INSERT INTO Orders VALUES ( NULL, \'Ahmed Amin Naem\', \'015738603347\', \'ahmedamein100@gmail.com\', \'1\', \'Hair Removal\', \'سويت رجل كاملة / سويت اندر ارمز / سويت بكيني / \', \'195\', \'1\', \'0\', \'2022-08-31T21:23\')'),
(569227661635, 'INSERT INTO productorder VALUES ( NULL, \'Ahmed Amin Naem\', \'ahmedamein100@gmail.com\', \'015738603347\', \'BurgsdorfstraBe 16\', \'3\', \'1\')'),
(572832550765, 'INSERT INTO event VALUES ( NULL, \'Ahmed Amin Naem\', \'015738603347\', \'ahmedamein100@gmail.com\', \'زفاف\', \'Luxury\', \'2022-08-30\', \'1000\', \'9200\', \'2022-08-31\', \'0\', \'10200\', \'\', \'حمام مغربي / \')'),
(575235438332, 'INSERT INTO productorder VALUES ( NULL, \'Ahmed Amin Naem\', \'ahmedamein100@gmail.com\', \'015738603347\', \'BurgsdorfstraBe 16\', \'3\', \'1\')'),
(576083059154, 'INSERT INTO Orders VALUES ( NULL, \'Ahmed Amin Naem\', \'015738603347\', \'ahmedamein100@gmail.com\', \'1\',\'Masks\', \'Mini Facial ماسك بخار\', \'100\', \'1\', \'0\', \'2022-08-20T19:58\')'),
(583772104516, 'INSERT INTO Orders VALUES ( NULL, \'Hany Magdy Elsaid \', \'010249439\', \'\', \'1\', \'Salon\', \'   وش \', \'25\', \'1\', \'0\', \'2022-08-20T14:58\')'),
(585641364370, 'INSERT INTO Orders VALUES ( NULL, \'Hany Magdy Elsaid \', \'010249439\', \'\', \'1\', \'Salon\', \'  فك اكستنشن \', \'250\', \'1\', \'0\', \'2022-08-20T14:58\')'),
(621842593726, 'INSERT INTO productorder VALUES ( NULL, \'Ahmed Amin Naem\', \'ahmedamein100@gmail.com\', \'015738603347\', \'BurgsdorfstraBe 16\', \'3\', \'20\', \'2022-08-24\', 0)'),
(626666193769, 'INSERT INTO event VALUES ( NULL, \'Ahmed Amin Naem\', \'015738603347\', \'ahmedamein100@gmail.com\', \'زفاف\', \'Luxury\', \'2022-08-28\', \'2000\', \'8000\', \'2022-09-28\', \'0\', \'10000\',\'\')'),
(643350259617, 'INSERT INTO productorder VALUES ( NULL, \'Ahmed Amin Naem\', \'ahmedamein100@gmail.com\', \'015738603347\', \'BurgsdorfstraBe 16\', \'3\', \'1\')'),
(654558378374, 'INSERT INTO Orders VALUES ( NULL, \'Ahmed Amin Naem\', \'015738603347\', \'ahmedamein100@gmail.com\', \'1\', \'Hair Removal\', \'سويت يد كامله \', \'60\', \'1\', \'0\', \'2022-08-11T09:29\')'),
(659641169416, 'INSERT INTO productorder VALUES ( NULL, \'Ahmed Amin Naem\', \'ahmedamein100@gmail.com\', \'015738603347\', \'BurgsdorfstraBe 16\', \'3\', \'1\')'),
(666055501626, 'INSERT INTO Orders VALUES ( NULL, \'Ahmed Amin Naem\', \'015738603347\', \'ahmedamein100@gmail.com\', \'1\', \'Masks\', \'Mini Facial ماسك بخار\', \'100\', \'1\', \'0\', \'2022-08-20T19:58\')'),
(678778375596, 'INSERT INTO Orders VALUES ( NULL, \'Hany Magdy \', \'01020249439\', \'hanyelbassuony92@gmail.co\', \'1\', \'Hair Removal\', \'سويت ظهر \', \'100\', \'1\', \'0\', \'2022-08-20T21:10\')'),
(680440844977, 'INSERT INTO productorder VALUES ( NULL, \'Ahmed Amin Naem\', \'ahmedamein100@gmail.com\', \'015738603347\', \'BurgsdorfstraBe 16\', \'4\', \'3\')'),
(681041051797, 'INSERT INTO productorder VALUES ( NULL, \'Ahmed Amin Naem\', \'ahmedamein100@gmail.com\', \'015738603347\', \'BurgsdorfstraBe 16\', \'4\', \'3\', GETDATE())'),
(708952592144, 'INSERT INTO productorder VALUES ( NULL, \'Ahmed Amin Naem\', \'ahmedamein100@gmail.com\', \'015738603347\', \'BurgsdorfstraBe 16\', \'3\', \'1\')'),
(752203448150, 'INSERT INTO productorder VALUES ( NULL, \'Ahmed Amin\', \'ahmedamein100@gmail.com\', \'0122518516\', \'assddf\', \'3\', \'4\', \'2022-09-17\', 0)'),
(774734364176, 'INSERT INTO Orders VALUES ( NULL, \'Ahmed Amin Naem\', \'015738603347\', \'ahmedamein100@gmail.com\', \'1\', \'Hair Removal\', \'سويت يد كامله \', \'60\', \'1\', \'0\', \'2022-09-16T23:06\')'),
(775451802560, 'INSERT INTO productorder VALUES ( NULL, \'Ahmed Amin\', \'ahmedamein100@gmail.com\', \'0122518516\', \'assddf\', \'3\', \'1\', \'2022-09-18\', 0)'),
(803124419877, 'INSERT INTO productorder VALUES ( NULL, \'Ahmed Amin Naem\', \'ahmedamein100@gmail.com\', \'015738603347\', \'BurgsdorfstraBe 16\', \'4\', \'3\', GETDATE())'),
(803549303827, 'INSERT INTO productorder VALUES ( NULL, \'Ahmed Amin Naem\', \'ahmedamein100@gmail.com\', \'015738603347\', \'BurgsdorfstraBe 16\', \'4\', \'1\')'),
(820673324298, 'INSERT INTO Orders VALUES ( NULL, \'Ahmed Amin Naem\', \'015738603347\', \'ahmedamein100@gmail.com\', \'1\', \'Hair Removal\', \'سويت يد كامله \', \'60\', \'1\', \'0\', \'2022-08-13T01:29\')'),
(829010948149, 'INSERT INTO Orders VALUES ( NULL, \'Ahmed Amin Naem\', \'015738603347\', \'ahmedamein100@gmail.com\', \'1\', \'Masks\', \'Mini Facial ماسك بخار\', \'100\', \'1\', \'0\', \'2022-08-20T19:58\')'),
(852395715614, 'INSERT INTO productorder VALUES ( NULL, \'Ahmed Amin Naem\', \'ahmedamein100@gmail.com\', \'015738603347\', \'BurgsdorfstraBe 16\', \'3\', \'1\')'),
(904449181951, 'INSERT INTO productorder VALUES ( NULL, \'Ahmed Amin Naem\', \'ahmedamein100@gmail.com\', \'015738603347\', \'BurgsdorfstraBe 16\', \'3\', \'1\')'),
(952684703852, 'INSERT INTO Orders VALUES ( NULL, \'Ahmed Amin Naem\', \'015738603347\', \'ahmedamein100@gmail.com\', \'1\', \'Hair Removal\', \'تشفير نص يد \', \'35\', \'1\', \'0\', \'2022-08-10T23:59\')'),
(954092788210, 'INSERT INTO Orders VALUES ( NULL, \'Ahmed Amin Naem\', \'015738603347\', \'ahmedamein100@gmail.com\', \'1\', \'Masks\', \'Mini Facial ماسك بخار\', \'100\', \'1\', \'0\', \'2022-08-20T19:58\')'),
(972490224039, 'INSERT INTO productorder VALUES ( NULL, \'Ahmed Amin Naem\', \'ahmedamein100@gmail.com\', \'015738603347\', \'BurgsdorfstraBe 16\', \'4\', \'1\')'),
(980827560061, 'INSERT INTO productorder VALUES ( NULL, \'Ahmed Amin Naem\', \'ahmedamein100@gmail.com\', \'015738603347\', \'BurgsdorfstraBe 16\', \'4\', \'1\')'),
(996352682978, 'INSERT INTO Orders VALUES ( NULL, \'هاني مجدي\', \'01234564897\', \'hanyelbassuony92@gmail.com\', \'1\', \'Nail Spa\', \'فرنش\', \'300\', \'1\', \'0\', \'2022-08-14T01:00\')'),
(1067416062664, 'INSERT INTO Orders VALUES ( NULL, \'Sameh Amin\', \'01225118516\', \'sameh@gmail.com\', \'1\', \'Masks\', \'    ديرما بن انبات شعر \', \'500\', \'1\', \'0\', \'2022-09-03T20:00\')'),
(1087642256110, 'INSERT INTO event VALUES ( NULL, \'Ahmed Amin Naem\', \'015738603347\', \'ahmedamein100@gmail.com\', \'زفاف\', \'Elegant With Hijab\', \'2022-08-28\', \'1000\', \'4000\', \'2022-10-31\', \'0\', \'5000\')'),
(1127040533288, 'INSERT INTO Orders VALUES ( NULL, \'Ahmed Amin Naem\', \'015738603347\', \'ahmedamein100@gmail.com\', \'1\', \'Masks\', \' Oxi Mask \', \'350\', \'1\', \'0\', \'2022-08-26T21:06\')'),
(1134659720001, 'INSERT INTO Orders VALUES ( NULL, \'Ahmed Amin Naem\', \'015738603347\', \'ahmedamein100@gmail.com\', \'1\', \'Masks\', \'Mini Facial ماسك بخار\', \'100\', \'1\', \'0\', \'2022-08-20T19:58\')'),
(1137418661809, 'INSERT INTO productorder VALUES ( NULL, \'Ahmed Amin Naem\', \'ahmedamein100@gmail.com\', \'015738603347\', \'BurgsdorfstraBe 16\', \'4\', \'10\', \'2022-08-24\', 1)'),
(1151191711872, 'INSERT INTO productorder VALUES ( NULL, \'Ahmed Amin Naem\', \'ahmedamein100@gmail.com\', \'015738603347\', \'BurgsdorfstraBe 16\', \'4\', \'1\')'),
(1183929224291, 'INSERT INTO event VALUES ( NULL, \'Ahmed Amin\', \'0122518516\', \'ahmedamein100@gmail.com\', \'حنة\', \'Vip باكيدج حنه غير محجبة\', \'2022-08-30\', \'1000\', \'1900\', \'2022-08-31\', \'0\', \'2900\', \'\', \'مساج كامل / \')'),
(1212388840747, 'INSERT INTO productorder VALUES ( NULL, \'Ahmed Amin Naem\', \'ahmedamein100@gmail.com\', \'015738603347\', \'BurgsdorfstraBe 16\', \'4\', \'5\', \'2022-08-24\', 0)'),
(1234810810201, 'INSERT INTO Orders VALUES ( NULL, \'Ahmed Amin Naem\', \'015738603347\', \'ahmedamein100@gmail.com\', \'1\', \'Hair Removal\', \'سويت يد كامله \', \'60\', \'1\', \'0\', \'2022-08-20T23:42\')'),
(1256804944149, 'INSERT INTO event VALUES ( NULL, \'Ahmed Amin Naem\', \'015738603347\', \'ahmedamein100@gmail.com\', \'زفاف\', \'Luxury\', \'2022-08-30\', \'1000\', \'9999200\', \'2022-08-31\', \'0\', \'10000200\', \'\', \'حمام مغربي / \')'),
(1269940123093, 'INSERT INTO productorder VALUES ( NULL, \'Ahmed Amin Naem\', \'ahmedamein100@gmail.com\', \'015738603347\', \'BurgsdorfstraBe 16\', \'4\', \'3\', \'2022-08-24\')'),
(1287919388664, 'INSERT INTO Orders VALUES ( NULL, \'Ahmed Amin Naem\', \'015738603347\', \'ahmedamein100@gmail.com\', \'1\', \'Masks\', \'Mini Facial ماسك بخار/ Herbal Mask ماسك تنظيف بالأعشاب \', \'250\', \'1\', \'0\', \'2022-08-31T20:33\')'),
(1311911383427, 'INSERT INTO event VALUES ( NULL, \'Ahmed Amin\', \'0122518516\', \'ahmedamein100@gmail.com\', \'خطوبة\', \'Elegant باكيدج الخطوبه غير محجبة\', \'2022-08-30\', \'1000\', \'2700\', \'2022-08-31\', \'0\', \'3700\', \'\', \'حمام مغربي / \')'),
(1337545120012, 'INSERT INTO event VALUES ( NULL, \'Ahmed Amin Naem\', \'015738603347\', \'ahmedamein100@gmail.com\', \'خطوبة\', \'باكيدج الخطوبه غير محجبه\', \'2022-08-28\', \'2000\', \'500\', \'2022-08-31\', \'0\', \'2500\')'),
(1352207495502, 'INSERT INTO productorder VALUES ( NULL, \'Ahmed Amin Naem\', \'ahmedamein100@gmail.com\', \'015738603347\', \'BurgsdorfstraBe 16\', \'4\', \'1\')'),
(1357491089749, 'INSERT INTO Orders VALUES ( NULL, \'Ahmed Amin Naem\', \'015738603347\', \'ahmedamein100@gmail.com\', \'1\', \'Masks\', \'Mini Facial ماسك بخار\', \'100\', \'1\', \'0\', \'2022-08-20T19:58\')'),
(1376987867055, 'INSERT INTO productorder VALUES ( NULL, \'Ahmed Amin Naem\', \'ahmedamein100@gmail.com\', \'015738603347\', \'BurgsdorfstraBe 16\', \'3\', \'1\')'),
(1434914384781, 'INSERT INTO event VALUES ( NULL, \'Ahmed Amin Naem\', \'015738603347\', \'ahmedamein100@gmail.com\', \'حنة\', \'Vip باكيدج حنه غير محجبة\', \'2022-08-28\', \'500\', \'2000\', \'2022-08-11\', \'0\', \'2500\')'),
(1445741274490, 'INSERT INTO Orders VALUES ( NULL, \'Ahmed Amin Naem\', \'015738603347\', \'ahmedamein100@gmail.com\', \'1\', \'Masks\', \'Mini Facial ماسك بخار\', \'100\', \'1\', \'0\', \'2022-08-20T19:58\')'),
(1446330550098, 'INSERT INTO Orders VALUES ( NULL, \'Ahmed Amin Naem\', \'015738603347\', \'ahmedamein100@gmail.com\', \'1\', \'Masks\', \'Mini Facial ماسك بخار\', \'100\', \'1\', \'0\', \'2022-08-20T19:58\')'),
(1510407477303, 'INSERT INTO Orders VALUES ( NULL, \'Ahmed Amin Naem\', \'015738603347\', \'ahmedamein100@gmail.com\', \'1\', \'Hair Removal\', \'سويت يد كامله \', \'60\', \'1\', \'0\', \'2022-08-26T00:31\')'),
(1522973878858, 'INSERT INTO Orders VALUES ( NULL, \'Ahmed Amin Naem\', \'015738603347\', \'ahmedamein100@gmail.com\', \'1\', \'Masks\', \'Mini Facial ماسك بخار\', \'100\', \'1\', \'0\', \'2022-08-20T19:58\')'),
(1550897312507, 'INSERT INTO productorder VALUES ( NULL, \'Ahmed Amin Naem\', \'ahmedamein100@gmail.com\', \'015738603347\', \'BurgsdorfstraBe 16\', \'3\', \'1\')'),
(1557882105043, 'INSERT INTO Orders VALUES ( NULL, \'Ahmed Amin Naem\', \'015738603347\', \'ahmedamein100@gmail.com\', \'1\', \'Masks\', \'Mini Facial ماسك بخار\', \'100\', \'1\', \'0\', \'2022-08-20T19:58\')'),
(1580706857801, 'INSERT INTO Orders VALUES ( NULL, \'Ahmed Amin Naem\', \'015738603347\', \'ahmedamein100@gmail.com\', \'1\', \'Hair Cut\', \'Basic تسريحة \', \'150\', \'1\', \'0\', \'2022-08-09T12:10\')'),
(1581902657818, 'INSERT INTO event VALUES ( NULL, \'Ahmed Amin Naem\', \'015738603347\', \'ahmedamein100@gmail.com\', \'زفاف\', \'Luxury\', \'2022-08-30\', \'1000\', \'9600\', \'2022-08-31\', \'0\', \'10600\', \'\', \'حمام مغربي / مساج كامل / \')'),
(1588006126938, 'INSERT INTO event VALUES ( NULL, \'Ahmed Amin\', \'0122518516\', \'ahmedamein100@gmail.com\', \'حنة\', \'Vip باكيدج حنه غير محجبة\', \'2022-08-30\', \'1000\', \'2100\', \'2022-08-31\', \'0\', \'3100\', \'\', \'حمام مغربي / مساج كامل / \')');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `ID` int(11) NOT NULL,
  `Name` tinytext NOT NULL,
  `Number` tinytext NOT NULL,
  `Email` tinytext NOT NULL,
  `PaymentMethod` int(11) NOT NULL,
  `ServiceCategory` tinytext NOT NULL,
  `ServiceName` text NOT NULL,
  `Price` int(11) NOT NULL,
  `isPaid` int(11) NOT NULL,
  `OrderStatus` int(11) NOT NULL,
  `OrderDate` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`ID`, `Name`, `Number`, `Email`, `PaymentMethod`, `ServiceCategory`, `ServiceName`, `Price`, `isPaid`, `OrderStatus`, `OrderDate`) VALUES
(1, 'Ahmed Amin Naem', '015738603347', 'ahmedamein100@gmail.com', 0, 'Session', '20EGP -   برد اظافر', 20, 0, 0, '2022-08-03 22:35:00'),
(2, 'Ahmed Amin Naem', '015738603347', 'ahmedamein100@gmail.com', 0, 'Session', '20EGP -   برد اظافر', 20, 0, 0, '2022-08-03 22:35:00'),
(3, 'Ahmed Amin Naem', '015738603347', 'ahmedamein100@gmail.com', 0, 'Session', ' 300EGP - ميكب سواريه بدون رموش', 300, 0, 1, '2022-08-31 19:05:00'),
(4, 'Ahmed Amin Naem', '015738603347', 'ahmedamein100@gmail.com', 0, 'MakeUp', ' 300EGP - ميكب سواريه بدون رموش', 300, 0, 0, '2022-08-31 19:05:00'),
(5, 'Ahmed Amin Naem', '015738603347', 'ahmedamein100@gmail.com', 0, 'Session', '350EGP -  جلسة علاج موناليزا ', 350, 0, 0, '2022-08-03 19:37:00'),
(6, 'Ahmed Amin Naem', '015738603347', 'ahmedamein100@gmail.com', 0, 'Session', '350EGP -  جلسة علاج موناليزا ', 350, 0, 0, '2022-08-03 19:37:00'),
(7, 'Ahmed Amin Naem', '015738603347', 'ahmedamein100@gmail.com', 0, 'Hair Removal', 'تشفير صدر وبطن - 75EGP', 75, 0, 0, '2022-08-13 00:00:00'),
(8, 'Ahmed Amin Naem', '015738603347', 'ahmedamein100@gmail.com', 0, 'Spa', '200EGP - حمام مغربي ', 200, 0, 0, '2022-08-03 22:55:00'),
(9, 'Ahmed Amin Naem', '015738603347', 'ahmedamein100@gmail.com', 0, 'Salon', '150EGP - MH قص  ', 150, 0, 0, '2022-08-03 20:05:00'),
(10, 'Ahmed Amin Naem', '015738603347', 'ahmedamein100@gmail.com', 0, 'Hair Cut', ' 150EGP - Basic تسريحة ', 150, 0, 0, '2022-08-03 13:03:00'),
(11, 'Ahmed Amin Naem', '015738603347', 'ahmedamein100@gmail.com', 0, 'Hair Cut', ' Bride MH تسريحة', 2500, 0, 0, '2022-08-03 13:07:00'),
(12, 'Ahmed Amin Naem', '015738603347', 'ahmedamein100@gmail.com', 0, 'Hair Removal', 'سويت يد كامله - 60EGP', 60, 0, 0, '2022-08-15 00:00:00'),
(13, 'Ahmed Amin Naem', '015738603347', 'ahmedamein100@gmail.com', 0, 'Hair Removal', 'سويت يد كامله ', 60, 0, 0, '2022-08-13 00:00:00'),
(14, 'Ahmed Amin Naem', '015738603347', 'ahmedamein100@gmail.com', 0, 'Hair Cut', 'Basic تسريحة ', 150, 0, 0, '2022-08-03 13:12:00'),
(15, 'Ahmed Amin Naem', '015738603347', 'ahmedamein100@gmail.com', 0, 'Nail Spa', 'فرنش', 300, 0, 0, '2022-08-03 14:14:00'),
(16, 'Ahmed Amin Naem', '015738603347', 'ahmedamein100@gmail.com', 0, 'Masks', 'Herbal Mask ماسك تنظيف بالأعشاب ', 250, 0, 0, '2022-08-03 21:22:00'),
(17, 'Ahmed Amin Naem', '015738603347', 'ahmedamein100@gmail.com', 0, 'Spa', 'قناع ذهب بالحجم ', 150, 0, 0, '2022-08-03 21:45:00'),
(18, 'Ahmed Amin Naem', '015738603347', 'ahmedamein100@gmail.com', 0, 'Masks', 'Mini Facial ماسك بخار', 100, 0, 0, '2022-08-27 01:14:00'),
(19, 'Ahmed Amin Naem', '015738603347', 'ahmedamein100@gmail.com', 0, 'Masks', 'Mini Facial ماسك بخار', 100, 0, 0, '2022-08-26 01:10:00'),
(20, 'Ahmed Amin Naem', '015738603347', 'ahmedamein100@gmail.com', 0, 'Masks', 'Mini Facial ماسك بخار', 100, 0, 0, '2022-08-26 01:10:00'),
(21, 'Ahmed Amin Naem', '015738603347', 'ahmedamein100@gmail.com', 0, 'Masks', 'Mini Facial ماسك بخار', 100, 0, 0, '2022-08-26 01:10:00'),
(22, 'Ahmed Amin Naem', '015738603347', 'ahmedamein100@gmail.com', 0, 'Masks', 'Mini Facial ماسك بخار', 100, 0, 0, '2022-08-26 01:10:00'),
(23, 'Ahmed Amin Naem', '015738603347', 'ahmedamein100@gmail.com', 0, 'Masks', 'Mini Facial ماسك بخار', 100, 0, 0, '2022-08-26 01:10:00'),
(24, 'Ahmed Amin Naem', '015738603347', 'ahmedamein100@gmail.com', 0, 'Masks', 'Mini Facial ماسك بخار', 100, 0, 0, '2022-08-26 01:10:00'),
(25, 'Ahmed Amin Naem', '015738603347', 'ahmedamein100@gmail.com', 0, 'Masks', 'Mini Facial ماسك بخار', 100, 0, 0, '2022-08-26 01:10:00'),
(26, 'Ahmed Amin Naem', '015738603347', 'ahmedamein100@gmail.com', 0, 'Masks', 'Mini Facial ماسك بخار', 100, 0, 0, '2022-08-04 08:05:00'),
(27, 'Ahmed Amin Naem', '01225118516', 'ahmedamein100@gmail.com', 0, 'Hair Removal', 'جسم كامل ', 300, 0, 0, '2022-08-19 00:00:00'),
(28, 'Ahmed Amin Naem', '015738603347', 'ahmedamein99@gmail.com', 0, 'Hair Removal', 'سويت يد كامله ', 60, 0, 0, '2022-08-09 17:19:00'),
(29, 'Ahmed Amin Naem', '015738603347', 'ahmedamein@gmail.com', 0, 'Session', ' جلسة علاج موناليزا ', 350, 0, 0, '2022-08-09 19:27:00'),
(30, 'Ahmed Amin Naem', '015738603347', 'ahmedamein1000@gmail.com', 0, 'MakeUp', 'ميكب سواريه بدون رموش', 300, 0, 0, '2022-08-27 17:31:00'),
(31, 'Ahmed Amin Naem', '015738603347', 'ahmed@gmail.com', 0, 'Spa', 'حمام مغربي ', 200, 0, 0, '2022-08-09 21:35:00'),
(32, 'Ahmed Amin Naem', '015738603347', 'ahmedame@gmail.com', 0, 'Salon', 'MH قص  ', 150, 0, 0, '2022-08-27 17:37:00'),
(33, 'Ahmed Amin Naem', '015738603347', 'amein100@gmail.com', 0, 'Hair Cut', 'Basic تسريحة ', 150, 0, 0, '2022-08-09 21:41:00'),
(34, 'Ahmed Amin Naem', '015738603347', 'ahmeda0@gmail.com', 0, 'Nail Spa', 'فرنش', 300, 0, 0, '2022-08-09 17:50:00'),
(35, 'Ahmed Amin Naem', '015738603347', 'ahmed0@gmail.com', 0, 'Masks', 'Mini Facial ماسك بخار', 100, 0, 0, '2022-08-26 22:12:00'),
(36, 'Ahmed Amin Naem', '015738603347', 'ahmedassssein100@gmail.com', 0, 'Masks', 'Mini Facial ماسك بخار', 100, 0, 0, '2022-08-30 19:26:00'),
(37, 'Ahmed Amin Naem', '015738603347', 'ahmedameiaaaaaaaaaaaaan100@gmail.com', 1, 'Masks', 'Mini Facial ماسك بخار', 100, 1, 0, '2022-08-09 19:47:00'),
(38, 'Sameh Amin', '01225118516', 'sameh@gmail.com', 1, 'Masks', '    ديرما بن انبات شعر ', 500, 1, 0, '2022-09-03 20:00:00'),
(39, 'Sameh Amin', '01225118516', 'sameh@gmail.com', 1, 'Masks', '    ديرما بن انبات شعر ', 500, 1, 0, '2022-09-03 20:00:00'),
(40, 'Ahmed Amin Naem', '015738603347', 'ahmedamein100@gmail.com', 1, 'Masks', ' اظافر چل', 450, 1, 3, '2022-08-20 21:04:00'),
(41, 'Ahmed Amin Naem', '015738603347', 'ahmedamein100@gmail.com', 1, 'Masks', ' Oxi Mask ', 350, 1, 2, '2022-08-26 21:06:00'),
(42, 'Ahmed Amin Naem', '015738603347', 'ahmedamein100@gmail.com', 1, 'Hair Cut', 'Basic تسريحة ', 150, 1, 3, '2022-08-09 12:10:00'),
(43, 'Hany Magdy ', '01020249439', 'hanyelbassuony92@gmail.co', 1, 'Hair Removal', 'سويت ظهر ', 100, 1, 0, '2022-08-20 21:10:00'),
(44, 'Hany Magdy ', '01020249439', 'hanyelbassuony92@gmail.co', 0, 'Hair Removal', 'سويت ظهر ', 100, 0, 3, '2022-08-20 21:10:00'),
(45, 'Ahmed Amin Naem', '015738603347', 'ahmedamein100@gmail.com', 1, 'Hair Removal', 'سويت يد كامله ', 60, 1, 0, '2022-08-26 00:31:00'),
(46, 'Ahmed Amin Naem', '015738603347', 'ahmedamein100@gmail.com', 0, 'Hair Removal', 'تشفير نص يد ', 35, 0, 0, '2022-08-10 23:59:00'),
(47, 'Ahmed Amin Naem', '015738603347', 'ahmedamein100@gmail.com', 1, 'Hair Removal', 'سويت يد كامله ', 60, 1, 3, '2022-08-13 01:29:00'),
(48, 'Hany Magdy Elsaid ', '010249439', '', 1, 'Salon', '  فك اكستنشن ', 250, 1, 0, '2022-08-20 14:58:00'),
(49, 'Ahmed Amin Naem', '015738603347', 'ahmedamein100@gmail.com', 0, 'Hair Removal', 'سويت يد كامله ', 60, 0, 0, '2022-08-06 12:11:00'),
(50, 'Ahmed Amin Naem', '015738603347', 'ahmedamein100@gmail.com', 0, 'Hair Removal', 'سويت يد كامله ', 60, 0, 0, '2022-08-06 12:11:00'),
(51, 'Ahmed Amin Naem', '015738603347', 'ahmedamein100@gmail.com', 0, 'Hair Removal', 'سويت يد كامله ', 60, 0, 0, '2022-08-06 12:11:00'),
(52, 'Ahmed Amin Naem', '015738603347', 'ahmedamein100@gmail.com', 0, 'Hair Removal', 'سويت يد كامله ', 60, 0, 0, '2022-08-06 12:11:00'),
(53, 'Ahmed Amin Naem', '015738603347', 'ahmedamein100@gmail.com', 0, 'Hair Removal', 'سويت يد كامله ', 60, 0, 0, '2022-08-06 12:11:00'),
(54, 'Ahmed Amin Naem', '015738603347', 'ahmedamein100@gmail.com', 0, 'Hair Removal', 'سويت يد كامله ', 60, 0, 0, '2022-08-06 12:11:00'),
(55, 'Ahmed Amin Naem', '015738603347', 'ahmedamein100@gmail.com', 0, 'Hair Removal', 'سويت يد كامله ', 60, 0, 0, '2022-08-06 12:11:00'),
(56, 'Ahmed Amin Naem', '015738603347', 'ahmedamein100@gmail.com', 0, 'Hair Removal', 'سويت يد كامله ', 60, 0, 0, '2022-08-06 12:11:00'),
(57, 'Ahmed Amin Naem', '01225118516', 'ahmedamein100@gmail.com', 0, 'Hair Removal', 'سويت يد كامله ', 60, 0, 0, '2022-08-11 23:40:00'),
(58, 'Ahmed Amin Naem', '015738603347', 'ahmedamein100@gmail.com', 0, 'Hair Removal', 'سويت يد كامله ', 60, 0, 1, '2022-08-20 20:41:00'),
(59, 'Ahmed Amin Naem', '015738603347', 'ahmedamein100@gmail.com', 0, 'Hair Removal', 'سويت يد كامله ', 60, 0, 0, '2022-08-20 23:42:00'),
(60, 'Ahmed Amin Naem', '015738603347', 'ahmedamein100@gmail.com', 0, 'Hair Removal', 'سويت يد كامله ', 60, 0, 0, '2022-08-11 12:45:00'),
(61, 'Ahmed Amin Naem', '015738603347', 'ahmedamein100@gmail.com', 0, 'Hair Removal', 'سويت يد كامله ', 60, 1, 2, '2022-08-11 23:24:00'),
(62, 'Ahmed Amin Naem', '015738603347', 'ahmedamein100@gmail.com', 1, 'Hair Removal', 'سويت يد كامله ', 60, 1, 0, '2022-08-11 09:29:00'),
(63, 'Ahmed Amin Naem', '015738603347', 'ahmedamein100@gmail.com', 0, 'Masks', 'Herbal Mask ماسك تنظيف بالأعشاب ', 250, 0, 0, '2022-08-28 23:12:00'),
(64, 'Ahmed Amin Naem', '015738603347', 'ahmedamein100@gmail.com', 0, 'Masks', 'Mini Facial ماسك بخار', 100, 0, 0, '2022-08-28 23:12:00'),
(65, 'Ahmed Amin Naem', '015738603347', 'ahmedamein100@gmail.com', 1, 'Hair Removal', 'سويت يد كامله / سويت نص رجل / سويت ظهر / ', 220, 1, 0, '2022-08-13 17:27:00'),
(66, 'Ahmed Amin Naem', '015738603347', 'ahmedamein100@gmail.com', 0, 'Hair Removal', 'سويت يد كامله / سويت نص رجل / سويت ظهر / ', 220, 0, 0, '2022-08-13 17:27:00'),
(67, 'Ahmed Amin Naem', '015738603347', 'ahmedamein100@gmail.com', 1, 'Hair Removal', 'سويت يد كامله / سويت نص يد / سويت نص رجل / ', 155, 1, 0, '2022-08-19 21:30:00'),
(68, 'Ahmed Amin Naem', '015738603347', 'ahmedamein100@gmail.com', 0, 'Hair Removal', 'سويت صدر وبطن / سويت ظهر / ', 175, 0, 0, '2022-08-19 21:33:00'),
(69, 'Ahmed Amin Naem', '015738603347', 'ahmedamein100@gmail.com', 0, 'Hair Removal', 'سويت نص يد / سويت نص رجل / سويت صدر وبطن / سويت ظهر / ', 270, 0, 0, '2022-08-19 21:33:00'),
(70, 'Ahmed Amin Naem', '015738603347', 'ahmedamein100@gmail.com', 0, 'Hair Removal', 'سويت يد كامله / ', 60, 0, 0, '2022-08-27 22:42:00'),
(71, 'Ahmed Amin Naem', '015738603347', 'ahmedamein100@gmail.com', 0, 'Session', ' جلسة علاج موناليزا /   جلسة بلورمكس/  جلسة بروفايبر ', 1050, 0, 0, '2022-08-18 19:54:00'),
(72, 'Ahmed Amin Naem', '015738603347', 'ahmedamein100@gmail.com', 0, 'Session', ' جلسة علاج موناليزا /   جلسة بلورمكس/  جلسة بروفايبر ', 1050, 0, 0, '2022-08-18 19:54:00'),
(73, 'Ahmed Amin Naem', '015738603347', 'ahmedamein100@gmail.com', 0, 'Session', ' جلسة علاج موناليزا /   جلسة بلورمكس/  جلسة بروفايبر ', 1050, 0, 0, '2022-08-18 19:54:00'),
(74, 'Ahmed Amin Naem', '015738603347', 'ahmedamein100@gmail.com', 0, 'Hair Removal', 'سويت يد كامله / سويت نص يد / سويت نص رجل / ', 155, 0, 0, '2022-08-27 19:59:00'),
(75, 'Ahmed Amin Naem', '015738603347', 'ahmedamein100@gmail.com', 0, 'MakeUp', 'ميكب سواريه بدون رموش/ ميكب SENIOR بدون رموش', 800, 0, 0, '2022-08-31 20:01:00'),
(76, 'Ahmed Amin Naem', '015738603347', 'ahmedamein100@gmail.com', 0, 'Spa', 'حمام مغربي / حمام تركي ', 550, 0, 0, '2022-08-26 20:04:00'),
(77, 'Ahmed Amin Naem', '015738603347', 'ahmedamein100@gmail.com', 0, 'Salon', 'MH قص  /  MH برشن ', 350, 0, 0, '2022-08-31 20:06:00'),
(78, 'Ahmed Amin Naem', '015738603347', 'ahmedamein100@gmail.com', 0, 'Hair Cut', 'Basic تسريحة / Junior تسريحة', 400, 0, 0, '2022-08-31 20:08:00'),
(79, 'Ahmed Amin Naem', '015738603347', 'ahmedamein100@gmail.com', 0, 'Nail Spa', 'فرنش/ اكريلك', 1050, 0, 0, '2022-08-31 20:30:00'),
(80, 'Ahmed Amin Naem', '015738603347', 'ahmedamein100@gmail.com', 1, 'Masks', 'Mini Facial ماسك بخار/ Herbal Mask ماسك تنظيف بالأعشاب ', 250, 1, 0, '2022-08-31 20:33:00');

-- --------------------------------------------------------

--
-- Table structure for table `productorder`
--

CREATE TABLE `productorder` (
  `productOrderID` int(11) NOT NULL,
  `Name` tinytext NOT NULL,
  `Email` tinytext NOT NULL,
  `Number` tinytext NOT NULL,
  `Address` tinytext NOT NULL,
  `Product` int(11) NOT NULL,
  `Quantity` int(11) DEFAULT NULL,
  `OrderDate` datetime DEFAULT NULL,
  `OrderStatus` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `productorder`
--

INSERT INTO `productorder` (`productOrderID`, `Name`, `Email`, `Number`, `Address`, `Product`, `Quantity`, `OrderDate`, `OrderStatus`) VALUES
(6, 'Ahmed Amin Naem', 'ahmedamein100@gmail.com', '015738603347', 'BurgsdorfstraBe 16', 4, 5, '2022-08-24 00:00:00', 3),
(7, 'Ahmed Amin Naem', 'ahmedamein100@gmail.com', '015738603347', 'BurgsdorfstraBe 16', 3, 20, '2022-08-24 00:00:00', 2);

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `ID` int(11) NOT NULL,
  `product_name` varchar(99) COLLATE utf8_unicode_ci NOT NULL,
  `brand` varchar(99) COLLATE utf8_unicode_ci NOT NULL,
  `description` varchar(99) COLLATE utf8_unicode_ci NOT NULL,
  `product_img` varchar(999) COLLATE utf8_unicode_ci NOT NULL,
  `price` int(20) NOT NULL,
  `category` int(99) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`ID`, `product_name`, `brand`, `description`, `product_img`, `price`, `category`) VALUES
(1, 'Serie Expert Blondifier Gloss ', 'L\'Oréal Professionnel Paris', 'Spray 500ML', 'assets/img/products/Serie_Expert_Blodifier_Gloss.jpg', 100, 1),
(3, 'Neque porro ', 'Neque ', 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit', 'assets/img/products/silver.jpg', 100, 2),
(4, 'Neque porro ', 'Neque ', 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit', 'assets/img/products/vitaminocolormasque.jpg', 150, 1),
(9, 'Neque ', 'Neque ', 'Neque ', 'assets/img/products/rbhautecoiffure.jpg', 200, 1),
(10, 'Neque ', 'Neque ', 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit', 'assets/img/products/Re-create-shampoo.jpg', 100, 3);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`ID`),
  ADD UNIQUE KEY `UserName` (`UserName`) USING HASH;

--
-- Indexes for table `event`
--
ALTER TABLE `event`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `onlineid`
--
ALTER TABLE `onlineid`
  ADD UNIQUE KEY `ID` (`ID`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `productorder`
--
ALTER TABLE `productorder`
  ADD PRIMARY KEY (`productOrderID`),
  ADD UNIQUE KEY `ID` (`productOrderID`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `event`
--
ALTER TABLE `event`
  MODIFY `ID` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=81;

--
-- AUTO_INCREMENT for table `productorder`
--
ALTER TABLE `productorder`
  MODIFY `productOrderID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

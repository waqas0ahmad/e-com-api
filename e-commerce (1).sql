-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 14, 2021 at 09:19 PM
-- Server version: 10.3.16-MariaDB
-- PHP Version: 7.3.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `e-commerce`
--

-- --------------------------------------------------------

--
-- Table structure for table `account`
--

CREATE TABLE `account` (
  `id` int(11) NOT NULL,
  `username` varchar(45) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `displayname` varchar(100) DEFAULT NULL,
  `first_name` varchar(45) DEFAULT NULL,
  `last_name` varchar(45) DEFAULT NULL,
  `type` int(11) DEFAULT NULL,
  `profile` varchar(500) DEFAULT NULL,
  `is_deleted` bit(1) DEFAULT NULL,
  `is_blocked` bit(1) DEFAULT NULL,
  `phone_number` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `account`
--

INSERT INTO `account` (`id`, `username`, `password`, `displayname`, `first_name`, `last_name`, `type`, `profile`, `is_deleted`, `is_blocked`, `phone_number`, `email`) VALUES
(1, 'waqas', '$2b$10$pEDNJb5ytZcotfaJ9xTEGOSpt6HtCv.H9zWVqLUoBbxZD.tVRcMZq', NULL, NULL, NULL, 3, NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `image`
--

CREATE TABLE `image` (
  `id` int(11) NOT NULL,
  `alt` varchar(45) DEFAULT NULL,
  `src` varchar(500) DEFAULT NULL,
  `is_deleted` bit(1) DEFAULT NULL,
  `p_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `image`
--

INSERT INTO `image` (`id`, `alt`, `src`, `is_deleted`, `p_id`) VALUES
(1, 'yellow', '/assets/images/pro3/39.jpg', NULL, 1),
(2, 'white', '/assets/images/pro3/6.jpg', NULL, 1),
(3, 'pink', '/assets/images/pro3/25.jpg', NULL, 1),
(4, 'olive', '/assets/images/pro3/3.jpg', NULL, 2),
(5, 'navy', '/assets/images/pro3/4.jpg', NULL, 2),
(6, 'pink', '/assets/images/pro3/5.jpg', NULL, 2),
(7, 'pink', '/assets/images/pro3/15.jpg', NULL, 2),
(8, 'white', '/assets/images/pro3/1.jpg', NULL, 3),
(9, 'white', '/assets/images/pro3/2.jpg', NULL, 3),
(10, 'white', '/assets/images/pro3/8.jpg', NULL, 4),
(11, 'skyblue', '/assets/images/pro3/7.jpg', NULL, 4),
(12, 'green', '/assets/images/pro3/9.jpg', NULL, 5),
(13, 'black', '/assets/images/pro3/10.jpg', NULL, 5),
(14, 'olive', '/assets/images/pro3/11.jpg', NULL, 6),
(15, 'gray', '/assets/images/pro3/12.jpg', NULL, 6),
(16, 'red', '/assets/images/pro3/22.jpg', NULL, 6),
(17, 'pink', '/assets/images/pro3/13.jpg', NULL, 7),
(18, 'white', '/assets/images/pro3/8.jpg', NULL, 7),
(19, 'black', '/assets/images/pro3/15.jpg', NULL, 7),
(20, 'yellow', '/assets/images/pro3/14.jpg', NULL, 8),
(21, 'black', '/assets/images/pro3/16.jpg', NULL, 8);

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `title` varchar(45) DEFAULT NULL,
  `description` varchar(45) DEFAULT NULL,
  `is_new` bit(1) DEFAULT NULL,
  `price` float DEFAULT NULL,
  `is_sale` bit(1) DEFAULT NULL,
  `type` varchar(45) DEFAULT NULL,
  `category` varchar(45) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `updated_date` datetime DEFAULT NULL,
  `is_discountinued` bit(1) DEFAULT NULL,
  `is_deleted` bit(1) DEFAULT NULL,
  `vendor_id` int(11) DEFAULT NULL,
  `discount` float DEFAULT NULL,
  `offer_date` datetime DEFAULT NULL,
  `offer_end_date` datetime DEFAULT NULL,
  `stock` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `title`, `description`, `is_new`, `price`, `is_sale`, `type`, `category`, `created_date`, `updated_date`, `is_discountinued`, `is_deleted`, `vendor_id`, `discount`, `offer_date`, `offer_end_date`, `stock`) VALUES
(1, 'trim dress changed', 'It is a long established fact that a reader w', b'1', 145, b'1', 'fashion', 'Women', '2021-08-14 11:31:49', '2021-08-14 11:31:49', b'1', b'1', 1, 40, NULL, NULL, 5),
(2, 'belted dress', 'It is a long established fact that a reader w', b'1', 185, b'1', 'fashion', 'Women', '2021-08-14 11:31:52', '2021-08-14 11:31:52', b'1', b'1', 1, 40, NULL, NULL, 2),
(3, 'fitted dress', 'It is a long established fact that a reader w', b'1', 174, b'1', 'fashion', 'Women', '2021-08-14 11:32:04', '2021-08-14 11:32:04', b'1', b'1', 1, 40, NULL, NULL, 0),
(4, 'belted top', 'It is a long established fact that a reader w', b'1', 98, b'1', 'fashion', 'Women', '2021-08-14 11:32:04', '2021-08-14 11:32:04', b'1', b'1', 1, 50, NULL, NULL, 10),
(5, 'waist dress', 'It is a long established fact that a reader w', b'1', 230, b'1', 'fashion', 'Women', '2021-08-14 11:32:04', '2021-08-14 11:32:04', b'1', b'1', 1, 20, NULL, NULL, 4),
(6, 'crop top', 'It is a long established fact that a reader w', b'1', 121, b'1', 'fashion', 'Women', '2021-08-14 11:32:04', '2021-08-14 11:32:04', b'1', b'1', 1, 40, NULL, NULL, 30),
(7, 'sleeveless dress', 'It is a long established fact that a reader w', b'1', 290, b'1', 'fashion', 'Women', '2021-08-14 11:32:04', '2021-08-14 11:32:04', b'1', b'1', 1, 10, NULL, NULL, 15),
(8, 'v-neck dress', 'It is a long established fact that a reader w', b'1', 315, b'1', 'fashion', 'Women', '2021-08-14 11:32:04', '2021-08-14 11:32:04', b'1', b'1', 1, 70, NULL, NULL, 15);

-- --------------------------------------------------------

--
-- Table structure for table `sale`
--

CREATE TABLE `sale` (
  `id` int(11) NOT NULL,
  `product_id` int(11) DEFAULT NULL,
  `customer_id` int(11) DEFAULT NULL,
  `is_delivered` bit(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `varient`
--

CREATE TABLE `varient` (
  `id` int(11) NOT NULL,
  `color` varchar(45) DEFAULT NULL,
  `size` varchar(45) DEFAULT NULL,
  `sku` varchar(45) DEFAULT NULL,
  `is_deleted` bit(1) DEFAULT NULL,
  `p_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `varient`
--

INSERT INTO `varient` (`id`, `color`, `size`, `sku`, `is_deleted`, `p_id`) VALUES
(1, 'yellow', 's', 'sku1', NULL, 1),
(2, 'white', 's', 'sku2', NULL, 1),
(3, 'pink', 's', 'sku3', NULL, 1),
(4, 'yellow', 'm', 'sku4', NULL, 1),
(5, 'white', 'm', 'sku5', NULL, 1),
(6, 'pink', 'm', 'sku5', NULL, 1),
(7, 'yellow', 'l', 'sku1', NULL, 1),
(8, 'olive', 's', 'sku1', NULL, 2),
(9, 'navy', 's', 'sku2', NULL, 2),
(10, 'red', 's', 'sku3', NULL, 2),
(11, 'olive', 'm', 'sku4', NULL, 2),
(12, 'navy', 'm', 'sku4', NULL, 2),
(13, 'red', 'm', 'sku4', NULL, 2),
(14, 'olive', 'l', 'sku4', NULL, 2),
(15, 'navy', 'l', 'sku4', NULL, 2),
(16, 'red', 'l', 'sku4', NULL, 2),
(17, 'white', 'l', 'sku3', NULL, 3),
(18, 'white', 'm', 'skul3', NULL, 3),
(19, 'black', 'l', 'sku3l', NULL, 3),
(20, 'black', 'm', 'sku4m', NULL, 3),
(21, 'white', 's', 'sku4', NULL, 4),
(22, 'white', 'l', 'skul4', NULL, 4),
(23, 'skyblue', 's', 'sku4s', NULL, 4),
(24, 'skyblue', 'l', 'sku4l', NULL, 4),
(25, 'green', 'm', 'sku5', NULL, 5),
(26, 'green', 'l', 'skul5', NULL, 5),
(27, 'black', 'm', 'sku5s', NULL, 5),
(28, 'black', 'l', 'sku5l', NULL, 5),
(29, 'olive', 's', 'sku6', NULL, 6),
(30, 'gray', 's', 'skul6', NULL, 6),
(31, 'red', 's', 'sku6s', NULL, 6),
(32, 'olive', 'm', 'sku6l', NULL, 6),
(33, 'gray', 'm', 'sku6l', NULL, 6),
(34, 'red', 'm', 'sku6l', NULL, 6),
(35, 'pink', 's', 'sku7', NULL, 7),
(36, 'white', 's', 'skul7', NULL, 7),
(37, 'black', 's', 'sku7s', NULL, 7),
(38, 'pink', 'm', 'sku7l', NULL, 7),
(39, 'white', 'm', 'sku7l', NULL, 7),
(40, 'black', 'm', 'sku7l', NULL, 7),
(41, 'yellow', 's', 'sku8', NULL, 8),
(42, 'black', 's', 'skul8', NULL, 8),
(43, 'yellow', 'm', 'sku8s', NULL, 8),
(44, 'black', 'm', 'sku8l', NULL, 8);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `account`
--
ALTER TABLE `account`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `image`
--
ALTER TABLE `image`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sale`
--
ALTER TABLE `sale`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `varient`
--
ALTER TABLE `varient`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `account`
--
ALTER TABLE `account`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `image`
--
ALTER TABLE `image`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `sale`
--
ALTER TABLE `sale`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `varient`
--
ALTER TABLE `varient`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

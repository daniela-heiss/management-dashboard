-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: fwaProject
-- Generation Time: Jan 20, 2024 at 03:20 PM
-- Server version: 11.2.2-MariaDB-1:11.2.2+maria~ubu2204
-- PHP Version: 8.2.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `fwaProject`
--

-- --------------------------------------------------------

--
-- Table structure for table `CUSTOMER`
--

CREATE TABLE `CUSTOMER` (
  `C_CUSTKEY` varchar(255) NOT NULL,
  `C_NAME` varchar(25) NOT NULL,
  `C_ADDRESS` varchar(40) NOT NULL,
  `C_NATIONKEY` char(5) NOT NULL,
  `C_PHONE` text NOT NULL,
  `C_ACCTBAL` decimal(10,0) NOT NULL,
  `C_MKTSEGMENT` text NOT NULL,
  `C_COMMENT` varchar(117) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `CUSTOMER`
--

INSERT INTO `CUSTOMER` (`C_CUSTKEY`, `C_NAME`, `C_ADDRESS`, `C_NATIONKEY`, `C_PHONE`, `C_ACCTBAL`, `C_MKTSEGMENT`, `C_COMMENT`) VALUES
('J.K Rowling', 'Rowling', 'Hogwarts', 'NY', '05612- 23187329', 20, 'Important People', ''),
('Media Markt - Worms', 'Media Markt', 'W.E.P', 'DE', ' 0221 22243333', 500000000, 'Big Stores', ''),
('Quavo', 'Quavo - Migos', 'REDACTED', 'NY', '', 1000000, 'Musician', ''),
('S. King', 'Stephen King', '47 W Broadway, 04401 Bangor', 'ME', '+1-207-555-8787', 1000000, 'Author', 'Good Customer'),
('T. Harris', 'Thomas Harris', '47 W Oldway, NY', 'NY', '+1-907-555-2684', 500000, 'Author', ''),
('Thomas Mueller', 'Thomas Mueller', 'in-Der-Strasse. 187', 'DE', '0987-3612578', 500, 'Customer', ''),
('TJ', 'TJ_Beastboy', 'Unlimited Powerstreet', 'DE', '1337-53537', 100000, 'Musician', ''),
('Toom', 'Toom Baumarkt', '10249, Hermann-Blankenstein-Str. 40-44', 'DE', '030 46776210', 0, 'Big Stores', '');

-- --------------------------------------------------------

--
-- Table structure for table `LINEITEM`
--

CREATE TABLE `LINEITEM` (
  `L_ORDERKEY` int(11) NOT NULL COMMENT 'Foreign Key to O_ORDERKEY ',
  `L_PARTKEY` varchar(255) NOT NULL COMMENT 'Foreign key to P_PARTKEY, first part of the compound Foreign Key to (PS_PARTKEY, PS_SUPPKEY) with L_SUPPKEY ',
  `L_SUPPKEY` varchar(255) NOT NULL COMMENT 'Foreign key to S_SUPPKEY, second part of the compound Foreign Key to (PS_PARTKEY,PS_SUPPKEY) with L_PARTKEY ',
  `L_LINENUMBER` int(11) NOT NULL,
  `L_QUANTITY` decimal(10,0) NOT NULL,
  `L_EXTENDEDPRICE` decimal(10,0) NOT NULL,
  `L_DISCOUNT` decimal(10,0) NOT NULL,
  `L_TAX` decimal(10,0) NOT NULL,
  `L_RETURNFLAG` text NOT NULL,
  `L_LINESTATUS` text NOT NULL,
  `L_SHIPDATE` date NOT NULL,
  `L_COMMITDATE` date NOT NULL,
  `L_RECEIPTDATE` date NOT NULL,
  `L_SHIPINSTRUCT` text NOT NULL,
  `L_SHIPMODE` text NOT NULL,
  `L_COMMENT` varchar(44) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `LINEITEM`
--

INSERT INTO `LINEITEM` (`L_ORDERKEY`, `L_PARTKEY`, `L_SUPPKEY`, `L_LINENUMBER`, `L_QUANTITY`, `L_EXTENDEDPRICE`, `L_DISCOUNT`, `L_TAX`, `L_RETURNFLAG`, `L_LINESTATUS`, `L_SHIPDATE`, `L_COMMITDATE`, `L_RECEIPTDATE`, `L_SHIPINSTRUCT`, `L_SHIPMODE`, `L_COMMENT`) VALUES
(1, 'Wheel01', 'BT', 1, 1, 25, 0, 4, 'NO', 'AVAILABLE', '2023-12-14', '2023-12-08', '2023-12-08', 'SHIP NORMAL', 'SPED', ''),
(4, 'Wheel01', 'BT', 2, 5, 25, 0, 0, 'NO', 'AVAILABLE', '2023-12-28', '2023-12-25', '2023-12-22', 'CARE', 'FAST', '');

-- --------------------------------------------------------

--
-- Table structure for table `NATION`
--

CREATE TABLE `NATION` (
  `N_NATIONKEY` char(5) NOT NULL COMMENT '25 nations are populated ',
  `N_NAME` text NOT NULL,
  `N_REGIONKEY` char(2) NOT NULL,
  `N_COMMENT` varchar(152) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `NATION`
--

INSERT INTO `NATION` (`N_NATIONKEY`, `N_NAME`, `N_REGIONKEY`, `N_COMMENT`) VALUES
('DE', 'Deutschland', 'EU', ''),
('FR', 'Frankreich', 'EU', ''),
('ME', 'Maine', 'US', ''),
('NY', 'New York', 'US', ''),
('SP', 'Spanien', 'EU', '');

-- --------------------------------------------------------

--
-- Table structure for table `ORDERS`
--

CREATE TABLE `ORDERS` (
  `O_ORDERKEY` int(11) NOT NULL COMMENT 'SF*1,500,000 are sparsely populated ',
  `O_CUSTKEY` varchar(255) NOT NULL COMMENT 'Foreign Key to C_CUSTKEY',
  `O_ORDERSTATUS` text NOT NULL,
  `O_TOTALPRICE` decimal(10,0) NOT NULL,
  `O_ORDERDATE` date NOT NULL,
  `O_ORDERPRIORITY` text NOT NULL,
  `O_CLERK` text NOT NULL,
  `O_SHIPPRIORITY` int(11) NOT NULL,
  `O_COMMENT` varchar(79) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `ORDERS`
--

INSERT INTO `ORDERS` (`O_ORDERKEY`, `O_CUSTKEY`, `O_ORDERSTATUS`, `O_TOTALPRICE`, `O_ORDERDATE`, `O_ORDERPRIORITY`, `O_CLERK`, `O_SHIPPRIORITY`, `O_COMMENT`) VALUES
(1, 'TJ', 'PROCCESSING', 50, '2023-12-11', 'HIGH', 'Daniel', 1, ''),
(2, 'J.K Rowling', 'PENDING', 500, '2023-12-14', 'LOW', 'Jason', 0, 'Owes us money'),
(3, 'Media Markt - Worms', 'DELIVERED', 502, '2023-12-11', 'HIGH', 'Daniela', 1, ''),
(4, 'TJ', 'DELIVERED', 7000, '2023-12-12', 'HIGH', 'Jason', 1, ''),
(5, 'Quavo', 'PROCESSING', 90, '2023-12-11', 'LOW', 'Daniel', 0, ''),
(6, 'Quavo', 'DELIVERED', 400, '2023-11-10', 'High', 'Daniel', 1, ''),
(7, 'Thomas Mueller', 'Pending', 250, '2023-11-13', 'HIGH', 'Daniela', 1, ''),
(8, 'TJ', 'DELIVERED', 900, '2022-12-09', 'Low', 'Jason', 1, ''),
(9, 'Toom', 'DELIVERED', 5000, '2023-11-14', 'HIGH', 'Daniel', 1, ''),
(10, 'Thomas Mueller', 'DELIVERED', 80, '2023-11-13', 'Low', 'Jason', 1, ''),
(11, 'Media Markt - Worms', 'DELIVERED', 5000, '2022-08-24', 'HIGH', 'Jason', 1, ''),
(12, 'J.K Rowling', 'PENDING', 800, '2022-06-15', 'Low', 'Daniel', 0, 'Doesn\'t need to be fast'),
(13, 'TJ', 'DELIVERED', 100, '2015-12-02', 'HIGH', 'Daniel', 1, ''),
(14, 'J.K Rowling', 'PENDING', 200, '2016-01-14', 'LOW', 'Jason', 0, 'Owes us money'),
(15, 'Media Markt - Worms', 'DELIVERED', 300, '2017-02-11', 'HIGH', 'Daniela', 1, ''),
(16, 'TJ', 'DELIVERED', 400, '2018-04-15', 'HIGH', 'Jason', 1, ''),
(17, 'Quavo', 'PROCESSING', 500, '2019-06-17', 'LOW', 'Daniel', 0, ''),
(18, 'Quavo', 'DELIVERED', 600, '2020-11-10', 'High', 'Daniel', 1, ''),
(19, 'Thomas Mueller', 'Pending', 700, '2021-11-13', 'HIGH', 'Daniela', 1, ''),
(20, 'TJ', 'DELIVERED', 800, '2022-02-09', 'Low', 'Jason', 1, ''),
(21, 'Toom', 'DELIVERED', 900, '2022-11-14', 'HIGH', 'Daniel', 1, ''),
(22, 'Thomas Mueller', 'DELIVERED', 1000, '2023-07-13', 'Low', 'Jason', 1, ''),
(23, 'Media Markt - Worms', 'DELIVERED', 1100, '2023-08-24', 'HIGH', 'Jason', 1, ''),
(24, 'J.K Rowling', 'PENDING', 1200, '2023-06-15', 'Low', 'Daniel', 0, 'Doesn\'t need to be fast'),
(25, 'TJ', 'DELIVERED', 1300, '2015-12-02', 'HIGH', 'Daniel', 1, ''),
(26, 'J.K Rowling', 'PENDING', 1400, '2016-01-14', 'LOW', 'Jason', 0, 'Owes us money'),
(27, 'Media Markt - Worms', 'DELIVERED', 1500, '2017-02-11', 'HIGH', 'Daniela', 1, ''),
(28, 'TJ', 'DELIVERED', 1600, '2018-04-15', 'HIGH', 'Jason', 1, ''),
(29, 'Quavo', 'PROCESSING', 1700, '2019-06-17', 'LOW', 'Daniel', 0, ''),
(30, 'Quavo', 'DELIVERED', 1800, '2020-11-10', 'High', 'Daniel', 1, ''),
(31, 'Thomas Mueller', 'Pending', 1900, '2021-11-13', 'HIGH', 'Daniela', 1, ''),
(32, 'TJ', 'DELIVERED', 2000, '2022-02-09', 'Low', 'Jason', 1, ''),
(33, 'Toom', 'DELIVERED', 2100, '2022-11-14', 'HIGH', 'Daniel', 1, ''),
(34, 'Thomas Mueller', 'DELIVERED', 2200, '2023-07-13', 'Low', 'Jason', 1, ''),
(35, 'Media Markt - Worms', 'DELIVERED', 2300, '2023-08-24', 'HIGH', 'Jason', 1, ''),
(36, 'J.K Rowling', 'PENDING', 2400, '2023-06-15', 'Low', 'Daniel', 0, 'Doesn\'t need to be fast'),
(37, 'TJ', 'DELIVERED', 2500, '2015-12-02', 'HIGH', 'Daniel', 1, ''),
(38, 'J.K Rowling', 'PENDING', 2600, '2016-01-14', 'LOW', 'Jason', 0, 'Owes us money'),
(39, 'Media Markt - Worms', 'DELIVERED', 2700, '2017-02-11', 'HIGH', 'Daniela', 1, ''),
(40, 'TJ', 'DELIVERED', 2800, '2018-04-15', 'HIGH', 'Jason', 1, ''),
(41, 'S. King', 'DELIVERED', 6500, '2020-07-12', 'HIGH', 'Daniela', 1, ''),
(42, 'T. Harris', 'Pending', 19000, '2021-11-13', 'Low', 'Jason', 2, '');

-- --------------------------------------------------------

--
-- Table structure for table `PART`
--

CREATE TABLE `PART` (
  `P_PARTKEY` varchar(255) NOT NULL COMMENT 'SF*200,000 are populated ',
  `P_NAME` varchar(55) NOT NULL,
  `P_MFGR` text NOT NULL,
  `P_BRAND` text NOT NULL,
  `P_TYPE` varchar(25) NOT NULL,
  `P_SIZE` int(11) NOT NULL,
  `P_CONTAINER` text NOT NULL,
  `P_RETAILPRICE` decimal(10,0) NOT NULL,
  `P_COMMENT` varchar(23) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `PART`
--

INSERT INTO `PART` (`P_PARTKEY`, `P_NAME`, `P_MFGR`, `P_BRAND`, `P_TYPE`, `P_SIZE`, `P_CONTAINER`, `P_RETAILPRICE`, `P_COMMENT`) VALUES
('Wheel01', 'Michelin Reifen', 'Michelin', 'Michelin', 'Wheel', 10, 'Package', 250, '');

-- --------------------------------------------------------

--
-- Table structure for table `PARTSUPP`
--

CREATE TABLE `PARTSUPP` (
  `PS_PARTKEY` varchar(255) NOT NULL COMMENT 'Foreign Key to P_PARTKEY',
  `PS_SUPPKEY` varchar(255) NOT NULL COMMENT 'Foreign Key to S_SUPPKEY ',
  `PS_AVAILQTY` int(11) NOT NULL,
  `PS_SUPPLYCOST` decimal(10,0) NOT NULL,
  `PS_COMMENT` varchar(199) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `PARTSUPP`
--

INSERT INTO `PARTSUPP` (`PS_PARTKEY`, `PS_SUPPKEY`, `PS_AVAILQTY`, `PS_SUPPLYCOST`, `PS_COMMENT`) VALUES
('Wheel01', 'BT', 5, 200, 'Noice Price');

-- --------------------------------------------------------

--
-- Table structure for table `REGION`
--

CREATE TABLE `REGION` (
  `R_REGIONKEY` char(2) NOT NULL COMMENT '5 regions are populated',
  `R_NAME` text NOT NULL,
  `R_COMMENT` varchar(152) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `REGION`
--

INSERT INTO `REGION` (`R_REGIONKEY`, `R_NAME`, `R_COMMENT`) VALUES
('EU', 'Europa', ''),
('US', 'United States of America', '');

-- --------------------------------------------------------

--
-- Table structure for table `SUPPLIER`
--

CREATE TABLE `SUPPLIER` (
  `S_SUPPKEY` varchar(255) NOT NULL COMMENT 'SF*10,000 are Populated',
  `S_NAME` text NOT NULL,
  `S_ADDRESS` varchar(40) NOT NULL,
  `S_NATIONKEY` varchar(2) NOT NULL COMMENT 'Foreign Key to N_NATIONKEY',
  `S_PHONE` text NOT NULL,
  `S_ACCTBAL` decimal(10,0) NOT NULL,
  `S_COMMENT` varchar(101) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `SUPPLIER`
--

INSERT INTO `SUPPLIER` (`S_SUPPKEY`, `S_NAME`, `S_ADDRESS`, `S_NATIONKEY`, `S_PHONE`, `S_ACCTBAL`, `S_COMMENT`) VALUES
('BT', 'Best Trans', 'Neubertstr. 55', 'DE', '01234-567890', 0, '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `CUSTOMER`
--
ALTER TABLE `CUSTOMER`
  ADD PRIMARY KEY (`C_CUSTKEY`),
  ADD KEY `C_NATIONKEY` (`C_NATIONKEY`);

--
-- Indexes for table `LINEITEM`
--
ALTER TABLE `LINEITEM`
  ADD PRIMARY KEY (`L_ORDERKEY`,`L_LINENUMBER`),
  ADD KEY `L_PARTKEY` (`L_PARTKEY`,`L_SUPPKEY`),
  ADD KEY `L_SUPPKEY` (`L_SUPPKEY`);

--
-- Indexes for table `NATION`
--
ALTER TABLE `NATION`
  ADD PRIMARY KEY (`N_NATIONKEY`),
  ADD KEY `N_NATIONKEY` (`N_NATIONKEY`),
  ADD KEY `N_REGIONKEY` (`N_REGIONKEY`);

--
-- Indexes for table `ORDERS`
--
ALTER TABLE `ORDERS`
  ADD PRIMARY KEY (`O_ORDERKEY`),
  ADD KEY `O_CURSTKEY` (`O_CUSTKEY`),
  ADD KEY `O_ORDERKEY` (`O_ORDERKEY`);

--
-- Indexes for table `PART`
--
ALTER TABLE `PART`
  ADD PRIMARY KEY (`P_PARTKEY`),
  ADD KEY `P_PARTKEY` (`P_PARTKEY`);

--
-- Indexes for table `PARTSUPP`
--
ALTER TABLE `PARTSUPP`
  ADD PRIMARY KEY (`PS_PARTKEY`),
  ADD KEY `PS_SUPPKEY` (`PS_SUPPKEY`);

--
-- Indexes for table `REGION`
--
ALTER TABLE `REGION`
  ADD PRIMARY KEY (`R_REGIONKEY`);

--
-- Indexes for table `SUPPLIER`
--
ALTER TABLE `SUPPLIER`
  ADD PRIMARY KEY (`S_SUPPKEY`),
  ADD KEY `S_NATIONKEY` (`S_NATIONKEY`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `CUSTOMER`
--
ALTER TABLE `CUSTOMER`
  ADD CONSTRAINT `CUSTOMER_ibfk_1` FOREIGN KEY (`C_NATIONKEY`) REFERENCES `NATION` (`N_NATIONKEY`);

--
-- Constraints for table `LINEITEM`
--
ALTER TABLE `LINEITEM`
  ADD CONSTRAINT `LINEITEM_ibfk_1` FOREIGN KEY (`L_ORDERKEY`) REFERENCES `ORDERS` (`O_ORDERKEY`),
  ADD CONSTRAINT `LINEITEM_ibfk_2` FOREIGN KEY (`L_PARTKEY`) REFERENCES `PARTSUPP` (`PS_PARTKEY`),
  ADD CONSTRAINT `LINEITEM_ibfk_3` FOREIGN KEY (`L_SUPPKEY`) REFERENCES `PARTSUPP` (`PS_SUPPKEY`);

--
-- Constraints for table `NATION`
--
ALTER TABLE `NATION`
  ADD CONSTRAINT `NATION_ibfk_1` FOREIGN KEY (`N_REGIONKEY`) REFERENCES `REGION` (`R_REGIONKEY`);

--
-- Constraints for table `ORDERS`
--
ALTER TABLE `ORDERS`
  ADD CONSTRAINT `CustKey` FOREIGN KEY (`O_CUSTKEY`) REFERENCES `CUSTOMER` (`C_CUSTKEY`);

--
-- Constraints for table `PARTSUPP`
--
ALTER TABLE `PARTSUPP`
  ADD CONSTRAINT `PARTSUPP_ibfk_1` FOREIGN KEY (`PS_PARTKEY`) REFERENCES `PART` (`P_PARTKEY`),
  ADD CONSTRAINT `SuppKeys` FOREIGN KEY (`PS_SUPPKEY`) REFERENCES `SUPPLIER` (`S_SUPPKEY`);

--
-- Constraints for table `SUPPLIER`
--
ALTER TABLE `SUPPLIER`
  ADD CONSTRAINT `NatKey` FOREIGN KEY (`S_NATIONKEY`) REFERENCES `NATION` (`N_NATIONKEY`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

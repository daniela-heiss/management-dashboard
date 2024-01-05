-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: fwaProject
-- Generation Time: Nov 21, 2023 at 11:21 AM
-- Server version: 11.1.2-MariaDB-1:11.1.2+maria~ubu2204
-- PHP Version: 8.2.11

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
  `C_CUSTKEY` uuid NOT NULL COMMENT 'SF*150,000 are populated',
  `C_NAME` varchar(25) NOT NULL,
  `C_ADDRESS` varchar(40) NOT NULL,
  `C_NATIONKEY` uuid NOT NULL COMMENT 'F_KEY to N_NATIONKEY',
  `C_PHONE` text NOT NULL,
  `C_ACCTBAL` decimal(10,0) NOT NULL,
  `C_MKTSEGMENT` text NOT NULL,
  `C_COMMENT` varchar(117) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `LINEITEM`
--

CREATE TABLE `LINEITEM` (
  `L_ORDERKEY` uuid NOT NULL,
  `L_PARTKEY` uuid NOT NULL,
  `L_SUPPKEY` uuid NOT NULL,
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

-- --------------------------------------------------------

--
-- Table structure for table `NATION`
--

CREATE TABLE `NATION` (
  `N_NATIONKEY` uuid NOT NULL,
  `N_NAME` text NOT NULL,
  `N_REGIONKEY` uuid NOT NULL,
  `N_COMMENT` varchar(152) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `ORDERS`
--

CREATE TABLE `ORDERS` (
  `O_ORDERKEY` uuid NOT NULL COMMENT 'SF*1,500,000 are sparsely populated',
  `O_CUSTKEY` uuid NOT NULL COMMENT 'Foreign Key to C_CUSTKEY',
  `O_ORDERSTATUS` text NOT NULL,
  `O_TOTALPRICE` decimal(10,0) NOT NULL,
  `O_ORDERDATE` date NOT NULL,
  `O_ORDERPRIORITY` text NOT NULL,
  `O_CLERK` text NOT NULL,
  `O_SHIPPRIORITY` int(11) NOT NULL,
  `O_COMMENT` varchar(79) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `PART`
--

CREATE TABLE `PART` (
  `P_PARTKEY` uuid NOT NULL DEFAULT uuid() COMMENT 'Primary Key',
  `P_NAME` varchar(55) NOT NULL,
  `P_MFGR` text NOT NULL,
  `P_BRAND` text NOT NULL,
  `P_TYPE` varchar(25) NOT NULL,
  `P_SIZE` int(11) NOT NULL,
  `P_CONTAINER` text NOT NULL,
  `P_RETAILPRICE` decimal(10,0) NOT NULL,
  `P_COMMENT` varchar(23) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `PARTSUPP`
--

CREATE TABLE `PARTSUPP` (
  `PS_PARTKEY` uuid NOT NULL COMMENT 'F_KEY TO P_PARTKEY',
  `PS_SUPPKEY` uuid NOT NULL COMMENT 'F_KEY TO S_SUPPKEY',
  `PS_AVAILQTY` int(11) NOT NULL,
  `PS_SUPPLYCOST` decimal(10,0) NOT NULL,
  `PS_COMMENT` varchar(199) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `REGION`
--

CREATE TABLE `REGION` (
  `R_REGIONKEY` uuid NOT NULL,
  `R_NAME` text NOT NULL,
  `R_COMMENT` varchar(152) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `SUPPLIER`
--

CREATE TABLE `SUPPLIER` (
  `S_SUPPKEY` uuid NOT NULL COMMENT 'SF*10,000 are Populated',
  `S_NAME` text NOT NULL,
  `S_ADDRESS` varchar(40) NOT NULL,
  `S_NATIONKEY` uuid NOT NULL COMMENT 'F_KEY to N_NATIONKEY',
  `S_PHONE` text NOT NULL,
  `S_ACCTBAL` decimal(10,0) NOT NULL,
  `S_COMMENT` varchar(101) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `CUSTOMER`
--
ALTER TABLE `CUSTOMER`
  ADD PRIMARY KEY (`C_CUSTKEY`);

--
-- Indexes for table `LINEITEM`
--
ALTER TABLE `LINEITEM`
  ADD PRIMARY KEY (`L_ORDERKEY`,`L_LINENUMBER`);

--
-- Indexes for table `NATION`
--
ALTER TABLE `NATION`
  ADD PRIMARY KEY (`N_NATIONKEY`);

--
-- Indexes for table `ORDERS`
--
ALTER TABLE `ORDERS`
  ADD PRIMARY KEY (`O_ORDERKEY`);

--
-- Indexes for table `PART`
--
ALTER TABLE `PART`
  ADD PRIMARY KEY (`P_PARTKEY`);

--
-- Indexes for table `PARTSUPP`
--
ALTER TABLE `PARTSUPP`
  ADD PRIMARY KEY (`PS_PARTKEY`,`PS_SUPPKEY`);

--
-- Indexes for table `REGION`
--
ALTER TABLE `REGION`
  ADD PRIMARY KEY (`R_REGIONKEY`);

--
-- Indexes for table `SUPPLIER`
--
ALTER TABLE `SUPPLIER`
  ADD PRIMARY KEY (`S_SUPPKEY`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 30, 2025 at 03:46 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `minor_project`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin_login`
--

CREATE TABLE `admin_login` (
  `Id` int(11) NOT NULL,
  `UserName` varchar(30) NOT NULL,
  `Password` varchar(8) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admin_login`
--

INSERT INTO `admin_login` (`Id`, `UserName`, `Password`) VALUES
(1, 'Mitanshi_21', 'm@123');

-- --------------------------------------------------------

--
-- Table structure for table `blog`
--

CREATE TABLE `blog` (
  `B_Id` int(11) NOT NULL,
  `B_Title` varchar(100) NOT NULL,
  `B_Img` varchar(50) NOT NULL,
  `B_Name` varchar(20) NOT NULL,
  `B_Descr` varchar(300) NOT NULL,
  `B_Conclusion` varchar(300) NOT NULL,
  `B_Date` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `blog`
--

INSERT INTO `blog` (`B_Id`, `B_Title`, `B_Img`, `B_Name`, `B_Descr`, `B_Conclusion`, `B_Date`) VALUES
(1, 'The Benefits of Interval Training for Runners.', 'Blog1.jpg', 'Grace Runner', 'One of the biggest advantages of interval training is that it can help prevent boredom during your workouts. Running at a steady pace for long periods of time can become monotonous and tedious. By incorporating intervals into your workout, you can add variety and challenge to your routine.\r\nTips for', 'In conclusion, interval training can be an effective way for runners to improve their speed, endurance, and overall fitness level. By incorporating intervals into your running routine and following these tips, you can take your running to the next level and achieve your fitness goals.', '2023-09-08'),
(2, 'Why Trail Running is the Ultimate Mind-Body Workout.', 'Blog2.jpg', 'Grace Runner', 'Trail running is not just a physical workout, it’s also a mental one. Running on uneven terrain requires more focus and concentration than running on a flat surface. This can help you improve your balance, coordination, and agility. Trail running also allows you to connect with nature and escape the', 'Trail running is a unique and exhilarating way to get your daily dose of exercise. It engages your entire body, improves your mental well-being, and allows you to connect with nature. Whether you’re a seasoned runner or just starting out, trail running is a great way to challenge yourself and experi', '2023-09-08'),
(4, 'The Latest Running Gear You Need to Know About.', 'Blog3.jpg', 'Maya Williums', 'Running is a great way to stay in shape and improve your overall health, but it’s also important to consider the impact your gear has on the environment.From headbands to socks, there are many eco-friendly running accessories available. Brands like Blyss Running and Janji offer accessories made from', 'Disposable plastic water bottles are a major source of waste in the running industry. Using a reusable water bottle not only reduces waste, but it also saves money in the long run. Brands like Hydro Flask and S’well offer stylish and durable reusable water bottles that are perfect for runners.', '2023-09-08');

-- --------------------------------------------------------

--
-- Table structure for table `booking`
--

CREATE TABLE `booking` (
  `Id` int(11) NOT NULL,
  `Name` varchar(30) NOT NULL,
  `State` varchar(30) NOT NULL,
  `Email` varchar(100) NOT NULL,
  `Tour_Descr` varchar(600) NOT NULL,
  `Travel_Date` varchar(12) NOT NULL,
  `Duration` int(11) NOT NULL,
  `No_Person` int(11) NOT NULL,
  `Contact_No` bigint(11) NOT NULL,
  `Status` varchar(8) NOT NULL,
  `U_Id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `booking`
--

INSERT INTO `booking` (`Id`, `Name`, `State`, `Email`, `Tour_Descr`, `Travel_Date`, `Duration`, `No_Person`, `Contact_No`, `Status`, `U_Id`) VALUES
(2, 'Mitanshi', 'Gujarat', 'mitanshi.lakdawala.21@gmail.com', 'I want to go Manali with My Friends. So Share some detailed packages for it.', '2023-09-22', 5, 5, 2147483647, 'Done', 6),
(3, 'Vishwa', 'Maharastra', 'vishwa@gmail.com', 'Send some Details for Kerela..', '2023-12-14', 5, 5, 2147483647, 'Done', 6),
(4, 'Isha Kadiwala', 'Gujarat', 'isha@gmail.com', 'I want 5 Days Tour To Manali-Kasol.', '2023-11-17', 4, 5, 9876543215, 'Done', 6),
(15, 'Mitanshi', 'Gujarat', 'mitanshi.lakdawala.21@gmail.com', 'MMM', '2023-10-25', 5, 5, 7896541236, 'Pending', 6);

-- --------------------------------------------------------

--
-- Table structure for table `contact`
--

CREATE TABLE `contact` (
  `C_Id` int(11) NOT NULL,
  `C_Name` varchar(30) NOT NULL,
  `C_Email` varchar(100) NOT NULL,
  `C_Mobile` bigint(11) NOT NULL,
  `C_Subject` varchar(50) NOT NULL,
  `C_Message` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `contact`
--

INSERT INTO `contact` (`C_Id`, `C_Name`, `C_Email`, `C_Mobile`, `C_Subject`, `C_Message`) VALUES
(1, 'Mitanshi Lakdawala', 'mittu123@gmail.com', 9876541234, 'For 7 Days Trip Planning!!', 'Hello...!!'),
(2, 'Isha1', 'isha@gmail.com', 2147483647, 'For 7 Days Trip Planning', 'Hello..123!!!'),
(4, 'Vishwa', 'vishwa@gmail.com', 2147483647, 'For 7 Days Trip Planning', 'Hello..!!'),
(5, 'Nishtha', 'nishtha@gmail.com', 9875463215, 'Tour Planning!!', 'Helloo...!!');

-- --------------------------------------------------------

--
-- Table structure for table `package`
--

CREATE TABLE `package` (
  `P_Id` int(11) NOT NULL,
  `D_Name` varchar(20) NOT NULL,
  `D_Type` varchar(20) NOT NULL,
  `State_Name` varchar(20) NOT NULL,
  `Descr` varchar(600) NOT NULL,
  `Img_1` varchar(100) NOT NULL,
  `Img_2` varchar(100) NOT NULL,
  `Img_3` varchar(100) NOT NULL,
  `Duration` int(3) NOT NULL,
  `Price` int(6) NOT NULL,
  `Day_1` varchar(500) NOT NULL,
  `Day_2` varchar(500) NOT NULL,
  `Day_3` varchar(500) NOT NULL,
  `Day_4` varchar(500) NOT NULL,
  `Day_5` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `package`
--

INSERT INTO `package` (`P_Id`, `D_Name`, `D_Type`, `State_Name`, `Descr`, `Img_1`, `Img_2`, `Img_3`, `Duration`, `Price`, `Day_1`, `Day_2`, `Day_3`, `Day_4`, `Day_5`) VALUES
(26, 'Manali-Kasol', 'Trekking', 'Manali', 'Manali when someone says this word to us the pictures that comes to our mind is  the beautiful snow-capped view of mountains, breezy and sparkling river , magical snowfall and more thing which we have either seen in some movies or in pictures but it is always said that something are meant to be experienced same is the case with Manali you may get to know about Manali, its places , its food, culture, atmosphere but when you actually visit it gives entirely unforgettable memories for the life time ,we  mean how can be seeing the snow fall on the screen and touching the white pure snow with your ', 'Manali1.jpg', 'Manali2.jpg', 'Manali3.jpg', 5, 8000, 'DEPARTURE FOR JALANDHAR (VIA TRAIN) (24 – 26 HOURS JOURNEY)', 'JALANDHAR TO KASOL (VIA BUS / PERSONAL VEHICLE)', 'MAGIC VALLEY TREK/MALANA TREK', 'BHRIGU LAKE TREK / ANJANI MAHADEV WATERFALL TREK', 'REACH YOUR HOMETOWN BY EVENING WITH BUNCH OF THRILLING MEMORIES'),
(28, 'Goa', 'Beach', 'Goa', 'The state of Goa, in India, is famous for its beaches and places of worship. Tourism is its primary industry, and is generally focused on the coastal areas of Goa, with decreased tourist activity inland.\r\nForeign tourists, mostly from Europe, arrive in Goa in winter, whilst the summer and monsoon seasons see many Indian tourists. Goa handled 2.29% of all foreign tourist arrivals in the country in 2011. This relatively small state is situated on the west coast of India, between the borders of Maharashtra and Karnataka, and is better known to the world as a former Portuguese enclave on Indian so', 'Goa1.jpg', 'Goa2.jpg', 'Goa3.jpg', 5, 8000, 'DEPARTURE FOR GOA (VIA TRAIN)', 'SIGHTSEEING OF GOA', 'CLUBING, VIST SOME VERY FAMOUS BEACHES OF GOA', 'VISIT CHURCH OF GOA', 'BACK TO YOUR PLACE WITH SOME GREAT MEMORIES'),
(29, 'Kashmir', 'Mountain', 'Jammu', 'Paradise on the Earth, the state is world famous for its scenic splendour, snow-capped mountains, plentiful wildlife, hospitable people and local handicraft.\r\nThe valley of Kashmir is as rich with history and political controversy as it is with culture and natural phenomena. Sample exquisitely spiced native cuisines and festive teas, then walk off your meal along the rugged trekking routes to the north. Marvel at the famous houseboats of Srinagar and take a spiritual moment to reflect at one of the many pilgrimage sites and religious shrines that dot the region. Of course, native craftsmanship', 'Kashmir1.jpg', 'Kashmir2.jpg', 'Kashmir3.jpg', 5, 10000, 'Way to Kashmir, Gulmurg - Best Place of Kashmir', 'Srinagar: The summer capital of Jammu and Kashmir, Srinagar is renowned for its iconic Dal Lake. Take a shikara (traditional wooden boat) ride on the serene waters, explore the Mughal Gardens with their meticulously designed terraced landscapes, and visit the historic Jama Masjid.', 'Gulmarg: A haven for adventure enthusiasts, Gulmarg is a paradise for skiing, snowboarding, and trekking. The Gulmarg Gondola, one of the world highest cable cars, offers spectacular views of the surrounding mountains.', 'Leh and Ladakh: While not part of the Kashmir Valley, Leh and Ladakh are often included in Kashmir itineraries. Explore the mesmerizing monasteries of Hemis and Thiksey, visit the stunning Pangong Lake, and embark on an unforgettable journey through the Khardung La Pass, one of the world highest motorable roads.', 'Back to Your Place with Great Kashimiri Memories'),
(31, 'Kerela', 'Beach', 'Kerela', 'Kerala, a state on Indias tropical Malabar Coast, has nearly 600km of Arabian Sea shoreline. It is known for its palm-lined beaches and backwaters, a network of canals. Inland are the Western Ghats, mountains whose slopes support tea, coffee and spice plantations as well as wildlife. National parks like Eravikulam and Periyar, plus Wayanad and other sanctuaries, are home to elephants, langur monkeys and tigers.', 'Kerela1.jpg', 'Kerela2.jpg', 'Kerela3.jpg', 5, 9000, 'Way to Alleppy(Allapuzza) - City of Backwater', 'Stay in Boat-House Alleepy', 'Way to Munnar - Valley of Tea Plants', 'Stay in Munnar, Local Sightseen of Munnar', 'Back to Normal Life With Great Funning Memories.'),
(33, 'Spiti Valley', 'Trekking', 'Himachal Pradesh', 'Spiti (pronounced as Piti in Bhoti language) is a high-altitude region of the Himalayas, located in the north-eastern part of the northern Indian state of Himachal Pradesh. The name \"Spiti\" means \"The middle land\", i.e. the land between Tibet and India. Spiti incorporates mainly the valley of the Spiti River, and the valleys of several rivers that feed into the Spiti River. Some of the prominent side-valleys in Spiti are the Pin valley and the Lingti valley. Spiti is bordered on the east by Tibet, on the north by Ladakh, on the west and southwest by Lahaul, on the south by Kullu, and on the so', 'Spiti1.jpg', 'Spiti2.jpg', 'Spiti3.jpg', 5, 13000, 'Way to Spiti Valley, Himachal', 'Some activities and in the mid-night see star gazing milky way at the top of the spiti.', 'Local Sightscenes', 'Some Temple Visiting', 'Back to Your Place'),
(34, 'Leh', 'Mountain', 'Leh, Ladakh', 'Leh is a city in Indian-administered Ladakh in the disputed Kashmir region.It is the largest city and the joint capital of Ladakh. Leh, located in the Leh district, was also the historical capital of the Kingdom of Ladakh. The seat of the kingdom, Leh Palace, the former residence of the royal family of Ladakh, was built in the same style and about the same time as the Potala Palace in Tibet. Since they were both constructed in a similar style and at roughly the same time, the Potala Palace in Tibet and Leh Palace, the royal residence, are frequently contrasted. It is crucial to keep in mind, t', 'Leh1.jpg', 'Leh2.jpg', 'Leh3.jpg', 5, 11000, 'Way To Ladakh', 'Bike-Road Trip', 'Popular Lake of Leh', 'Some Thrilling Activities.', 'Back to Home!'),
(44, 'Madurai', 'Beach', 'Tamil Nadu', 'Madurai is a major city in the Indian state of Tamil Nadu. It is the cultural capital of Tamil Nadu and the administrative headquarters of Madurai District. As of the 2011 census, it was the third largest urban agglomeration in Tamil Nadu after Chennai and Coimbatore and the 33rd most populated city in India. Located on the banks of River Vaigai, Madurai has been a major settlement for two millennia and has a documented history of more than 2500 years. It is often referred to as Thoonga Nagaram, meaning the city that never sleeps', 'Madurai1.jpg', 'Madurai2.jpg', 'Madurai3.jpg', 5, 8000, 'Way To Madurai!!', 'Local Sight Seen Of Madurai!!', 'Other Temples of Madurai!!', 'Best Beaches Visits!!', 'Back To Home!!');

-- --------------------------------------------------------

--
-- Table structure for table `photo`
--

CREATE TABLE `photo` (
  `img_id` int(11) NOT NULL,
  `image` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `photo`
--

INSERT INTO `photo` (`img_id`, `image`) VALUES
(1, 'Goa1.jpg'),
(2, 'Goa2.jpg'),
(3, 'Goa3.jpg'),
(4, 'Goa3.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `signup`
--

CREATE TABLE `signup` (
  `U_Id` int(11) NOT NULL,
  `Name` varchar(30) NOT NULL,
  `UserName` varchar(30) NOT NULL,
  `Password` varchar(8) NOT NULL,
  `Address` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `signup`
--

INSERT INTO `signup` (`U_Id`, `Name`, `UserName`, `Password`, `Address`) VALUES
(6, 'Mitanshi', 'Mitanshi_21', 'mm', 'Ahemdabad'),
(10, 'Mansi Lakdawala', 'Mansi', 'mm', 'surat');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin_login`
--
ALTER TABLE `admin_login`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `blog`
--
ALTER TABLE `blog`
  ADD PRIMARY KEY (`B_Id`);

--
-- Indexes for table `booking`
--
ALTER TABLE `booking`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `U_Id` (`U_Id`);

--
-- Indexes for table `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`C_Id`);

--
-- Indexes for table `package`
--
ALTER TABLE `package`
  ADD PRIMARY KEY (`P_Id`);

--
-- Indexes for table `photo`
--
ALTER TABLE `photo`
  ADD PRIMARY KEY (`img_id`);

--
-- Indexes for table `signup`
--
ALTER TABLE `signup`
  ADD PRIMARY KEY (`U_Id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin_login`
--
ALTER TABLE `admin_login`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `blog`
--
ALTER TABLE `blog`
  MODIFY `B_Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `booking`
--
ALTER TABLE `booking`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `contact`
--
ALTER TABLE `contact`
  MODIFY `C_Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `package`
--
ALTER TABLE `package`
  MODIFY `P_Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;

--
-- AUTO_INCREMENT for table `photo`
--
ALTER TABLE `photo`
  MODIFY `img_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `signup`
--
ALTER TABLE `signup`
  MODIFY `U_Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `booking`
--
ALTER TABLE `booking`
  ADD CONSTRAINT `booking_ibfk_1` FOREIGN KEY (`U_Id`) REFERENCES `signup` (`U_Id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

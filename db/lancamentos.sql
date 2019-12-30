CREATE TABLE `lancamentos` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `MARCAID` int(11) NOT NULL,
  `DESCRICAO` varchar(100) DEFAULT NULL,
  `TOTAL` decimal(10,2) NOT NULL,
  `QUANTIDADE` int(11) NOT NULL,
  `DATA` datetime NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

INSERT INTO `lancamentos` (`ID`, `MARCAID`, `DESCRICAO`, `TOTAL`, `QUANTIDADE`, `DATA`) VALUES 
  (1, 1, 'Sabonete', 30, 1, '2019-12-25 22:56:00'),
  (2, 2, 'Desodorante', 40, 2, '2019-12-25 22:56:27'),
  (3, 3, 'Desodorante', 20, 2, '2019-12-26 10:56:27'),
  (4, 3, 'dasdas', 112, 1, '2019-12-26 15:12:00'),
  (5, 2, 'novo', 200, 1, '2019-12-26 18:12:32');



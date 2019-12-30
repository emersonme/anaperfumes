CREATE TABLE `marcas` (
  `ID` int(11) NOT NULL,
  `DESCRICAO` varchar(40) NOT NULL,
  `COMISSAO` double(15,2) NOT NULL,
  `IMAGE_LINK` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `marcas` (`ID`, `DESCRICAO`, `COMISSAO`, `IMAGE_LINK`) VALUES 
  (1, 'Avon', 0.2, 'https://imgur.com/U8F7qVU.png'),
  (2, 'Botic�rio', 0.15, 'https://imgur.com/2gIad5Y.png'),
  (3, 'Natura', 0.3, 'https://imgur.com/yFnnt6h.png');



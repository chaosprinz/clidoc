CREATE TABLE `Klienten` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`vorname` varchar(255) NOT NULL,
	`familienname` varchar(255) NOT NULL,
	CONSTRAINT `Klienten_id` PRIMARY KEY(`id`)
);

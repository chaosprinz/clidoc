ALTER TABLE `user` ADD `roles` json;--> statement-breakpoint
ALTER TABLE `user` ADD `approved` boolean DEFAULT false NOT NULL;--> statement-breakpoint
ALTER TABLE `user` DROP COLUMN `role`;
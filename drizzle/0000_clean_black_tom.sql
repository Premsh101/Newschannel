CREATE TABLE `stories` (
	`id` text PRIMARY KEY NOT NULL,
	`owner` text NOT NULL,
	`title` text NOT NULL,
	`content` text NOT NULL,
	`kind` text NOT NULL,
	`category` text NOT NULL,
	`sources` text NOT NULL,
	`status` text DEFAULT 'draft' NOT NULL,
	`created` text NOT NULL
);

CREATE DATABASE IF NOT EXISTS messageboard;

USE messageboard;

DROP TABLE IF EXISTS Messages;

CREATE TABLE Messages (
    ip VARCHAR(255) DEFAULT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

/*
DELIMITER //

CREATE TRIGGER DeleteOldestMessage
AFTER INSERT ON Messages
FOR EACH ROW
BEGIN
    DECLARE rowCount INT;

    -- Get the current row count in the table
    SELECT COUNT(*) INTO rowCount FROM Messages;

    -- If there are more than 10 rows, delete the oldest row(s)
    WHILE rowCount > 10 DO
        -- Find the oldest row using MIN(created_at)
        SET @rowToDelete = (SELECT MIN(created_at) FROM Messages);

        -- Delete the row with the oldest timestamp
        DELETE FROM Messages WHERE created_at = @rowToDelete;

        -- Update the row count
        SET rowCount = rowCount - 1;
    END WHILE;
END;
//
DELIMITER ;

*/
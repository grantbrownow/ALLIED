-- Add a boolean column to track interest in a cash offer for the property.
-- It defaults to FALSE and cannot be null.
ALTER TABLE submissions
ADD COLUMN IF NOT EXISTS wants_cash_offer BOOLEAN NOT NULL DEFAULT FALSE;

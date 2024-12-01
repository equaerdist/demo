package repository

import "errors"

var (
	ErrUserNotFound       = errors.New("user was not found")
	ErrWrongDateFormat    = errors.New("wrong date format. required format: YYYY-MM-DD")
	ErrNameLengthExceeded = errors.New("name is too long")
)

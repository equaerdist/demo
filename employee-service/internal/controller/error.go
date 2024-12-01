package controller

import (
	"github.com/cutlery47/employee-service/internal/repository"
	"github.com/labstack/echo/v4"
	"github.com/sirupsen/logrus"
)

var errMap = map[error]*echo.HTTPError{
	repository.ErrUserNotFound:       echo.ErrNotFound,
	repository.ErrWrongDateFormat:    echo.ErrBadRequest,
	repository.ErrNameLengthExceeded: echo.ErrBadRequest,
}

type errHandler struct {
	errLog *logrus.Logger
}

func (h *errHandler) handleError(err error) *echo.HTTPError {
	if httpErr, ok := errMap[err]; ok {
		httpErr.Message = err.Error()
		return httpErr
	}

	h.errLog.Error(err.Error())
	return echo.ErrInternalServerError
}

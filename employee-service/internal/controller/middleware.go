package controller

import (
	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
	"github.com/sirupsen/logrus"
)

func requestLoggerMiddleware(infoLog *logrus.Logger) echo.MiddlewareFunc {
	return middleware.RequestLoggerWithConfig(
		middleware.RequestLoggerConfig{
			LogMethod:   true,
			LogStatus:   true,
			LogRemoteIP: true,
			LogURI:      true,
			LogError:    true,
			LogValuesFunc: func(c echo.Context, v middleware.RequestLoggerValues) error {
				infoLog.WithFields(logrus.Fields{
					"method": v.Method,
					"URI":    v.URI,
					"status": v.Status,
					"ip":     v.RemoteIP,
					"error":  v.Error,
				}).Info("request")
				return nil
			},
		},
	)
}

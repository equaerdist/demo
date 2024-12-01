package app

import (
	"context"
	"fmt"

	"github.com/cutlery47/employee-service/internal/config"
	"github.com/cutlery47/employee-service/internal/controller"
	"github.com/cutlery47/employee-service/internal/repository"
	"github.com/cutlery47/employee-service/internal/utils"
	"github.com/cutlery47/employee-service/pkg/httpserver"
	"github.com/cutlery47/employee-service/pkg/logger"
	"github.com/labstack/echo/v4"
	"github.com/sirupsen/logrus"
)

//	@title		Employee Service
//	@version	0.0.1

// @contact.name	DEVils
// @BasePath		/
func Run() error {
	ctx := context.Background()

	conf, err := config.New()
	if err != nil {
		return fmt.Errorf("error when parsing config: %v", err)
	}

	infoFd, err := utils.CreateAndOpen(conf.Logger.InfoPath)
	if err != nil {
		return fmt.Errorf("error when setting up info logger: %v", err)
	}

	errFd, err := utils.CreateAndOpen(conf.Logger.ErrorPath)
	if err != nil {
		return fmt.Errorf("error when setting up error logger: %v", err)
	}

	infoLog := logger.WithFile(logger.WithFormat(logger.New(logrus.InfoLevel), &logrus.JSONFormatter{}), infoFd)
	errLog := logger.WithFile(logger.WithFormat(logger.New(logrus.ErrorLevel), &logrus.JSONFormatter{}), errFd)

	logrus.Debug("intializing repository...")
	repo, err := repository.NewRepository(conf.Postgres)
	if err != nil {
		return fmt.Errorf("error when setting up repository: %v", err)
	}

	logrus.Debug("intializing controller...")
	e := echo.New()
	controller.NewController(repo, e, errLog, infoLog)

	httpserver := httpserver.New(e, conf.HTTPServer)

	return httpserver.Run(ctx)
}

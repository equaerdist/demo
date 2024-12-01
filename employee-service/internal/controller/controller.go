package controller

import (
	"encoding/json"

	"github.com/cutlery47/employee-service/internal/model"
	repo "github.com/cutlery47/employee-service/internal/repository"
	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
	"github.com/sirupsen/logrus"
	echoSwagger "github.com/swaggo/echo-swagger"

	_ "github.com/cutlery47/employee-service/docs"
)

type Controller struct {
	repo *repo.Repository
	h    *errHandler
}

func NewController(repo *repo.Repository, e *echo.Echo, errLog, infoLog *logrus.Logger) {
	ctl := &Controller{
		repo: repo,
		h: &errHandler{
			errLog: errLog,
		},
	}

	e.Use(middleware.CORS())
	e.Use(middleware.Recover())

	e.GET("/ping", func(c echo.Context) error { return c.NoContent(200) })
	e.GET("/swagger/*", echoSwagger.WrapHandler)

	v1 := e.Group("/api/v1", requestLoggerMiddleware(infoLog))
	{
		v1.POST("/employees", ctl.GetBaseEmpoyees)
		v1.POST("/employee", ctl.GetEmployee)
		v1.POST("/hint", ctl.GetHint)
		v1.POST("/unit", ctl.GetUnit)
	}
}

// @Summary			Полуение конкретного сотрудника
// @Tags			Employee
// @Param			json	body		model.GetEmployeeRequest	true	"json body"
// @Success	200		{object}	model.GetEmployeeResponse
// @Failure	400		{object}	echo.HTTPError
// @Failure	404		{object}	echo.HTTPError
// @Failure	500		{object}	echo.HTTPError
// @Router			/api/v1/employee [post]
func (ctl *Controller) GetEmployee(c echo.Context) error {
	ctx := c.Request().Context()

	body := c.Request().Body

	request := model.GetEmployeeRequest{}

	decoder := json.NewDecoder(body)
	err := decoder.Decode(&request)
	if err != nil {
		ctl.h.handleError(err)
	}

	if request.Id == 0 {
		return echo.NewHTTPError(400, "wrong request id was provided")
	}

	res, err := ctl.repo.GetEmployee(ctx, request.Id)
	if err != nil {
		return ctl.h.handleError(err)
	}

	return c.JSON(200, res)
}

// @Summary			Полуение сотрудников по фильтрам
// @Tags			Employee
// @Param			json	body		model.GetBaseEmployeesRequest	true	"json body"
// @Success	200		{object}	model.GetBaseEmployeesResponse
// @Failure	400		{object}	echo.HTTPError
// @Failure	404		{object}	echo.HTTPError
// @Failure	500		{object}	echo.HTTPError
// @Router			/api/v1/employees [post]
func (ctl *Controller) GetBaseEmpoyees(c echo.Context) error {
	ctx := c.Request().Context()

	body := c.Request().Body

	request := model.GetBaseEmployeesRequest{}

	decoder := json.NewDecoder(body)
	err := decoder.Decode(&request)
	if err != nil {
		ctl.h.handleError(err)
	}

	if request.Limit == 0 {
		return echo.NewHTTPError(400, "pagination limit must be provided")
	}

	employees, err := ctl.repo.GetBaseEmployees(ctx, request)
	if err != nil {
		return ctl.h.handleError(err)
	}

	return c.JSON(200, employees)
}

// @Summary			Получение подсказок по полям
// @Tags			Hint
// @Param			json		body		model.GetHintRequest	true	"json body"
// @Success	200		{object}	model.GetBaseEmployeesResponse
// @Failure	400		{object}	echo.HTTPError
// @Failure	404		{object}	echo.HTTPError
// @Failure	500		{object}	echo.HTTPError
// @Router			/api/v1/hint [post]
func (ctl *Controller) GetHint(c echo.Context) error {
	ctx := c.Request().Context()
	body := c.Request().Body

	request := model.GetHintRequest{}

	decoder := json.NewDecoder(body)
	err := decoder.Decode(&request)
	if err != nil {
		ctl.h.handleError(err)
	}

	var res interface{}
	if request.City != "" {
		res, err = ctl.repo.GetHints(ctx, "city", request.City)
	} else if request.Position != "" {
		res, err = ctl.repo.GetHints(ctx, "position", request.Position)
	} else if request.Project != "" {
		res, err = ctl.repo.GetHints(ctx, "project", request.Project)
	} else if request.Role != "" {
		res, err = ctl.repo.GetHints(ctx, "role_name", request.Role)
	} else if request.Unit != "" {
		res, err = ctl.repo.GetHints(ctx, "unit", request.Unit)
	} else if request.Name != "" {
		res, err = ctl.repo.GetHints(ctx, "name", request.Name)
	} else {
		return echo.NewHTTPError(400, "no args")
	}
	if err != nil {
		return ctl.h.handleError(err)
	}

	return c.JSON(200, res)
}

// @Summary			Получение данных о юните
// @Tags			Unit
// @Param			json		body		model.GetUnitRequest	true	"json body"
// @Success	200		{object}	model.Unit
// @Failure	400		{object}	echo.HTTPError
// @Failure	404		{object}	echo.HTTPError
// @Failure	500		{object}	echo.HTTPError
// @Router			/api/v1/unit [post]
func (ctl *Controller) GetUnit(c echo.Context) error {
	ctx := c.Request().Context()

	body := c.Request().Body

	request := model.GetUnitRequest{}

	decoder := json.NewDecoder(body)
	err := decoder.Decode(&request)
	if err != nil {
		ctl.h.handleError(err)
	}

	res, err := ctl.repo.GetUnit(ctx, request.Id)
	if err != nil {
		return ctl.h.handleError(err)
	}

	return c.JSON(200, res)
}

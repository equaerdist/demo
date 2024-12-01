package httpserver

import (
	"context"
	"errors"
	"fmt"
	"net/http"
	"os"
	"os/signal"
	"syscall"
	"time"

	"github.com/cutlery47/employee-service/internal/config"
	"github.com/sirupsen/logrus"
)

type Server struct {
	server *http.Server

	shutdownTimeout time.Duration
}

func New(handler http.Handler, conf config.HTTPServer) *Server {
	httpserv := &http.Server{
		Handler:      handler,
		ReadTimeout:  conf.ReadTimeout,
		WriteTimeout: conf.WriteTimeout,
		Addr:         fmt.Sprintf("%v:%v", conf.Interface, conf.Port),
	}

	serv := &Server{
		server:          httpserv,
		shutdownTimeout: conf.ShutdownTimeout,
	}

	return serv
}

func (s *Server) Run(ctx context.Context) error {
	logrus.Debug(fmt.Sprintf("running http server on %v...", s.server.Addr))

	go func() {
		if err := s.server.ListenAndServe(); !errors.Is(err, http.ErrServerClosed) {
			logrus.Debug("http server error:", err)
		}
	}()

	sigChan := make(chan os.Signal, 1)
	signal.Notify(sigChan, syscall.SIGINT, syscall.SIGTERM)

	<-sigChan

	logrus.Debug("shutting down http server")

	ctx, cancel := context.WithTimeout(ctx, s.shutdownTimeout)
	defer cancel()

	return s.server.Shutdown(ctx)
}

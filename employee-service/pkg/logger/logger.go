package logger

import (
	"os"

	"github.com/sirupsen/logrus"
)

func init() {
	logrus.SetLevel(logrus.DebugLevel)
	logrus.SetOutput(os.Stdout)
}

func New(level logrus.Level) *logrus.Logger {
	logger := logrus.New()
	logger.SetLevel(level)
	logger.SetOutput(os.Stdout)

	return logger
}

func WithFile(logger *logrus.Logger, fd *os.File) *logrus.Logger {
	logger.SetOutput(fd)

	return logger
}

func WithFormat(logger *logrus.Logger, format *logrus.JSONFormatter) *logrus.Logger {
	logger.SetFormatter(format)

	return logger
}

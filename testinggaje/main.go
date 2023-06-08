package main

import (
	"net/http"

	"github.com/labstack/echo/v4"
)

func main() {
	e := echo.New()

	e.GET("/", func(f echo.Context) error {
		return f.String(http.StatusOK, "Hello World!")
	})

	e.Logger.Fatal(e.Start("localhost:5000"))
}
package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

type Flight struct {
	Id          string
	Num         string
	Airline     string
	Source      string
	Destination string
	Capacity    int
	Price       float32
}

func readallflights(c *gin.Context) {
	flights := []Flight{{Id: "201", Num: "AI 845", Airline: "Air India", Source: "Mumbai", Destination: "Destination", Capacity: 180, Price: 15000.0},
		{Id: "201", Num: "AI 845", Airline: "Air India", Source: "Mumbai", Destination: "Destination", Capacity: 180, Price: 15000.0},
	}

	c.JSON(http.StatusOK, flights)
}
func main() {
	// flight1:=Flight{Id: "201",Num: "AI 845",Airline: "Air India",Source: "Mumbai",Destination: "Destination",Capacity: 180,Price: 15000.0}
	// fmt.Println(flight1)
	r := gin.Default()
	r.GET("/flights", readallflights)
	r.Run()
}

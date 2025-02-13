package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

type Pizza struct {
	Id       string
	Name     string
	Size     string
	Price    float32
	Category string
}

func readAllPizza(c *gin.Context) {
	pizzas := []Pizza{{Id: "PI1", Name: "Margreta", Size: "Regular", Price: 200.0,Category:"Veg"},
		{Id: "PI2", Name: "Veg Loaded", Size: "Medium", Price: 150.0,Category:"Veg"},
	}

	c.JSON(http.StatusOK, pizzas)
}
func readPizzabyid(c *gin.Context) {
	id := c.Param("id")
	pizza := Pizza{Id: id, Name: "Margreta", Size: "Regular", Price: 200.0,Category:"Veg"}

	c.JSON(http.StatusOK, pizza)
}
func createPizza(c *gin.Context) {
	var jbodyflight Pizza
	err := c.BindJSON(&jbodyflight)
	if err != nil {
		c.JSON(http.StatusInternalServerError,
			gin.H{"error": "Server Error." + err.Error()})
		return
	}
	createPizza := Pizza{Id: "PI1", Name: "Margreta", Size: "Regular", Price: 200.0,Category:"Veg"}
	c.JSON(http.StatusCreated,
		gin.H{"messege": "Pizza Created Sucessfully.", "flight": createPizza})
}
func updatePizza(c *gin.Context) {
	id := c.Param("id")
	var jbodyflight Pizza
	err := c.BindJSON(&jbodyflight)
	if err != nil {
		c.JSON(http.StatusInternalServerError,
			gin.H{"error": "Server Error." + err.Error()})
		return
	}
	updatedPizza := Pizza{Id: id, Name: "Margreta", Size: "Regular", Price: 200.0,Category:"Veg"}
	c.JSON(http.StatusOK,
		gin.H{"messege": "Pizza updated Sucessfully.", "flight": updatedPizza})
}
func deletePizza(c *gin.Context) {

	c.JSON(http.StatusOK,
		gin.H{"messege": "Pizza deleted Sucessfully."})
}
func main() {
	// flight1:=Flight{Id: "201",Number: "AI 845",Airline: "Air India",Source: "Mumbai",Destination: "Destination",Capacity: 180,Price: 15000.0}
	// fmt.Println(flight1)
	r := gin.Default()
	r.GET("/pizzas", readAllPizza)
	r.GET("/pizzas/:id", readPizzabyid)
	r.POST("/pizzas", createPizza)
	r.PUT("/pizzas/:id", updatePizza)
	r.DELETE("/pizzas/:id", deletePizza)

	r.Run(":8080")
}

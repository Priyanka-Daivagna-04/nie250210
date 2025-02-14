package main

import (
	"net/http"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/gin-contrib/cors"
)

type Pizza struct {
	
	Id       string `json:"id"`
	Number   string `json:"number"`
	Name     string  `json:"name"`
	Size     string `json:"size"`
	Price    float32 `json:"price"`
	Category string `json:"category"`
}

func readAllPizza(c *gin.Context) {
	pizzas := []Pizza{{Id: "1001",Number: "PI1", Name: "Margreta", Size: "Regular", Price: 200.0,Category:"Veg"},
		{Id:"1002",Number: "PI2", Name: "Veg Loaded", Size: "Medium", Price: 150.0,Category:"Veg"},
	}

	c.JSON(http.StatusOK, pizzas)
}
func readPizzabyid(c *gin.Context) {
	id := c.Param("id")
	pizza := Pizza{Id:id,Number: "PI1", Name: "Margreta", 
	Size: "Regular", Price: 200.0,Category:"Veg"}

	c.JSON(http.StatusOK, pizza)
}
func createPizza(c *gin.Context) {
	var jbodyPizza Pizza
	err := c.BindJSON(&jbodyPizza)
	if err != nil {
		c.JSON(http.StatusInternalServerError,
			gin.H{"error": "Server Error." + err.Error()})
		return
	}
	createdPizza := Pizza{Id: "1001",Number: "PI1", Name: "Margreta",
	 Size: "Regular", Price: 200.0,Category:"Veg"}
	c.JSON(http.StatusCreated,
		gin.H{"message": "Pizza Created Sucessfully.",
		 "pizza": createdPizza})
}
func updatePizza(c *gin.Context) {
	id := c.Param("id")
	var jbodyPizza Pizza
	err := c.BindJSON(&jbodyPizza)
	if err != nil {
		c.JSON(http.StatusInternalServerError,
			gin.H{"error": "Server Error." + err.Error()})
		return
	}
	updatedPizza := Pizza{Number: id, Name: "Margreta",
	 Size: "Regular", Price: 200.0,Category:"Veg"}
	c.JSON(http.StatusOK,
		gin.H{"message": "Pizza updated Sucessfully.", 
		"flight": updatedPizza})
}
func deletePizza(c *gin.Context) {

	c.JSON(http.StatusOK,
		gin.H{"message": "Pizza deleted Sucessfully."})
}
func main() {
	
	
	r := gin.Default()
	r.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"http://localhost:5174"}, // React frontend URL
		AllowMethods:     []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowHeaders:     []string{"Origin", "Content-Type", "Authorization"},
		ExposeHeaders:    []string{"Content-Length"},
		AllowCredentials: true,
		MaxAge:           12 * time.Hour,
	}))
	r.GET("/pizzas", readAllPizza)
	r.GET("/pizzas/:id", readPizzabyid)
	r.POST("/pizzas", createPizza)
	r.PUT("/pizzas/:id", updatePizza)
	r.DELETE("/pizzas/:id", deletePizza)

	r.Run(":8080")
}

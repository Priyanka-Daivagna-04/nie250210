package main

import (
	
	"net/http"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/gin-contrib/cors"
)

 type Flight struct {
	Id string `json:"id"`
	Number string `json:"number"`
	Airline string `json:"airline_name"`
	Source string   `json:"source"`
	Destination string `json:"destination"`
	Capacity int `json:"capacity"`
	Price float32 `json:"price"`
 }
 func readallflights(c *gin.Context){
	flights:=[]Flight{{Id: "201",Number: "AI 845",Airline: "Air India",Source: "Mumbai",Destination: "Destination",Capacity: 180,Price: 15000.0},
	{Id: "201",Number: "AI 845",Airline: "Air India",Source: "Mumbai",Destination: "Destination",Capacity: 180,Price: 15000.0},
}

	c.JSON(http.StatusOK,flights)
 }
 func readflightbyid(c *gin.Context){
	id:=c.Param("id")
	flight:=Flight{Id: id,Number: "AI 845",Airline: "Air India",Source: "Mumbai",Destination: "Destination",Capacity: 180,Price: 15000.0}

	c.JSON(http.StatusOK,flight)
 }
 func createflight(c *gin.Context){
	var jbodyflight Flight
	err:=c.BindJSON(&jbodyflight)
	if err!=nil{
	c.JSON(http.StatusInternalServerError,
	gin.H{"error":"Server Error."+err.Error()})
	return
	}
	createflight:=Flight{Id:"1001",Number: "AI 845",Airline: "Air India",Source: "Mumbai",Destination: "Abu Dhabi",Capacity: 180,Price:15000.0}
	c.JSON(http.StatusCreated,
	gin.H{"messege":"Flight Created Sucessfully.","flight":createflight})
 }
 func updateFlight(c *gin.Context){
	id := c.Param("id")
	var jbodyflight Flight
	err:=c.BindJSON(&jbodyflight)
	if err!=nil{
	c.JSON(http.StatusInternalServerError,
	gin.H{"error":"Server Error."+err.Error()})
	return
	}
	updatedFlight := Flight{Id:id,Number: "AI 845",Airline: "Air India",
	Source: "Mumbai",Destination: "Abu Dhabi",Capacity: 180,Price:15000.0}
	c.JSON(http.StatusOK,
	gin.H{"messege":"Flight updated Sucessfully.","flight":updatedFlight})
 }
 func deleteFlight(c *gin.Context){
	
	c.JSON(http.StatusOK,
	gin.H{"messege":"Flight deleted Sucessfully."})
 }
 func main(){
	r := gin.Default()
	//cors
	r.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"http://localhost:5173"}, // React frontend URL
		AllowMethods:     []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowHeaders:     []string{"Origin", "Content-Type", "Authorization"},
		ExposeHeaders:    []string{"Content-Length"},
		AllowCredentials: true,
		MaxAge:           12 * time.Hour,
	}))
	// flight1:=Flight{Id: "201",Number: "AI 845",Airline: "Air India",Source: "Mumbai",Destination: "Destination",Capacity: 180,Price: 15000.0}
	// fmt.Println(flight1)
	
	r.GET("/flights",readallflights)
	r.GET("/flights/:id",readflightbyid)
	r.POST("/flights",createflight)
	r.PUT("/flights/:id",updateFlight)
	r.DELETE("/flights/:id",deleteFlight)


	
	r.Run(":8080")
 }
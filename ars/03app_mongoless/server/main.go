package main
import (
   // "fmt"
   "net/http"
	"github.com/gin-gonic/gin"
)
type Flight struct {
	Id string
	Number string
	AirlineName string
	Source string
	Destination string
	Capacity int 
	Price float32
}
func readAllFlights(c *gin.Context){
            c.JSON(http.StatusOK, "Hello World")
}
func main(){
	//router
	r := gin.Default()
	//route API endpoints
	r.GET("/flights",readAllFlights)
	//server DEFAULT PORT 8080 r.Run("8080")
	r.Run()
   /*flight1 := Flight {Id: "1001",Number:"AI 845",
   AirlineName: "Air India",Source:"Mumbai",Destination: "Abu Dabi",Capacity: 180,Price: 15000.0   }
   fmt.Println(flight1)*/

}
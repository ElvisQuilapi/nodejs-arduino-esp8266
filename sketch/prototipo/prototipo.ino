#include <ESP8266HTTPClient.h>
#include <ESP8266WiFi.h>

int count = 0;
 
void setup() {
 
  Serial.begin(115200);                                
  WiFi.begin("Wow!", "12345678");  
 
  while (WiFi.status() != WL_CONNECTED) {  
 
    delay(500);
    Serial.println("Waiting for connection");
 
  }
 
}
 
void loop() {
 
 if(WiFi.status()== WL_CONNECTED){   
 
   HTTPClient http;    

   String nombre =  "Elvis";
   String lastname = "Cordero";
   String email = "carmen@gmail.com";
   
   String message =  "{\"name\":\""+nombre+"\",\"lastname\":\""+lastname+"\",\"email\":\""+email+"\"}";
   
   http.begin("http://json-placeholder-api.herokuapp.com/api/v1/employed/add");      
   http.addHeader("Content-Type", "application/json");  
   
   int httpCode = http.POST(message);   
   String payload = http.getString();                 
 
   Serial.println(httpCode);  
   Serial.println(payload);    
   Serial.println(++count);
 
   http.end();  
 
 }else{
 
    Serial.println("Error in WiFi connection");   
 
 }
 
  delay(30000);  
 
}

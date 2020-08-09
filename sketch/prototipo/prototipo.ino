#include "DHT.h"
#include <ESP8266HTTPClient.h>
#include <ESP8266WiFi.h>

const long oneSecond = 1000;  
const long oneMinute = oneSecond * 60;
const long oneHour   = oneMinute * 60;
const long oneDay    = oneHour * 24;

const char* ssid = "REPLACE_WITH_YOUR_SSID";
const char* password = "REPLACE_WITH_YOUR_PASSWORD";

String ENDPOINT = "http//example.com/add";

int led_green = 4;
int led_red = 14;

int countRequest = 0;
int identifier = 54545447; // Device 1 - 54545447 / Device 2 - 25454217
int temp = 0;
int hum = 0;

#define DHTTYPE DHT11 
#define DHTPIN 5

DHT dht(DHTPIN, DHTTYPE);
 
void setup() {
  Serial.begin(115200);
  pinMode(led_green, OUTPUT);
  pinMode(led_red, OUTPUT);
  dht.begin();                                
  WiFi.begin(ssid, password);  
 
  while (WiFi.status() != WL_CONNECTED) {  
    digitalWrite(led_red, HIGH);
    delay(500);
    digitalWrite(led_red, LOW);
    delay(500);
    Serial.println("Waiting for connection...");
  }
 
}
 
void loop() {

  hum = dht.readHumidity();
  temp = dht.readTemperature();
 
 if(WiFi.status()== WL_CONNECTED){   
 
   HTTPClient http;
   
   String message =  "{\"identifier\":\""+ String(identifier) + "\",\"temperature\":\""+ String(temp) +"\",\"humidity\":\""+ String(hum) +"\"}";
   
   Serial.println(message);  
   
   http.begin(ENDPOINT);      
   http.addHeader("Content-Type", "application/json");  
   
   int httpCode = http.POST(message);   
   String payload = http.getString();                 
 
   Serial.println(httpCode);  
   Serial.println(payload);    
   Serial.println(++countRequest);
   digitalWrite(led_green, HIGH);
   delay(500);
   digitalWrite(led_green, LOW);
   delay(500); 
 
   http.end();  
 
 }else{
    Serial.println("Error in WiFi connection!");  
    digitalWrite(led_red, HIGH);
    delay(500);
    digitalWrite(led_red, LOW);
    delay(500);
 }
  delay(oneHour);  
}

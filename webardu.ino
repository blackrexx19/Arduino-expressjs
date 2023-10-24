void setup() {
    Serial.begin(9600);
    pinMode(2, OUTPUT);
}
void loop() {
    if (Serial.available()>0) {
        // char data = Serial.read();
        // if(!data) Serial.end();
        // if(data == '1') {
        //     digitalWrite(2, HIGH);
        //     // Serial.println("1");
        //     }
        // if(data == '2') {
        //     digitalWrite(2, LOW);
        //     // Serial.println("2");
        //     }
        Serial.println(analogRead(A0));
        delay(1000);
    }
}
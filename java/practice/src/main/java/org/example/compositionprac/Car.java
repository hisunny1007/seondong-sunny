package org.example.compositionprac;

public class Car {
    public String model;
    public Engine engine; // 컴포지션
    public int speed;


    // 기본값 자동으로 들어가있음. 생성자 여러 개 있어도 돼!
    public Car() {};

    public Car(String model, Engine engine) {
        this.model = model;
        this.engine = engine;
        this.speed = 0;
    }

    public void speedUp() {
        int amount = engine.horsePower;
        speed += amount;
    }

}
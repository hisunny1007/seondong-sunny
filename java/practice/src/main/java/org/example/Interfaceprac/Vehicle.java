package org.example.Interfaceprac;

public abstract class Vehicle {

    protected String modelName;
    protected int speed;
    protected int fuel;
    protected static final int MAX_FUEL = 100;

    public Vehicle(String modelName) {
        this.modelName = modelName;
        this.speed = 0;
        this.fuel = 0;
    }

    // 일반 메서드
    public int increaseSpeed(int amount) {
        speed += amount;
        return speed;
    }


    // 추상 메서드
//    public abstract void increaseSpeed();

}

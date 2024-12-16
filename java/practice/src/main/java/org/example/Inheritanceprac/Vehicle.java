package org.example.Inheritanceprac;

public class Vehicle {
    protected String modelName;
    protected int speed;
    protected int fuel;
    // 고정된 값은 상수로 / static이랑 final
    // final 대신 protected쓰고 setter 없애도 돼
    protected static final int MAX_FUEL = 100;


    public Vehicle(String modelName) {
        this.modelName = modelName;
        this.speed = 0;
        this.fuel = 0;
    }

    // 속도 관련 기능 구현 메서드
    public int increaseSpeed(int amount) {
        if (amount <= fuel) {
            speed += amount;
            fuel -= amount;
        }
        return speed;
    }


    // 연료량
    public int addFuel(int amount) {
        fuel += amount;
        // 최대 연료량은 100. 넣어봤자 MAX FUEL만 넣을 거야.
        if (fuel > getMaxFuel()) {
            fuel = getMaxFuel();
        }
        return fuel;
    }

    //maxfuel에 대한 getter
    public int getMaxFuel() {
        return MAX_FUEL;
    }

    //    public int fuel(int fuelCharge) {
//        fuel += fuelCharge;
//        return fuel;
//    }

//    public boolean validateFuel(int fuelCharge) {
//        fuel += fuelCharge;
//        return fuel <= 100;
//
//        if (fuel <= 100) {
//            return true;
//        } else {
//            return false;
//        }
//    }

}

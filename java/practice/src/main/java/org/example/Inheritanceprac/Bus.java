package org.example.Inheritanceprac;

public class Bus extends Vehicle{

    protected static final int MAX_FUEL = 300;
    protected int passengerCount;

    public Bus(String modelName) {
        super(modelName);
        this.passengerCount = 0;
    }

    // bus가 생성이 될 때 passengercount 초기값 명시해
    public int addPassenger(int amount) {
        passengerCount += amount;
        return passengerCount;
    }

    // 클래스마다 다르니까
    @Override
    public int addFuel(int amount) {
        fuel += amount;
        // 어떻게 BUS거만 넣어?
        if (fuel > MAX_FUEL) {
            fuel = MAX_FUEL;
        }
        return fuel;
    }



    // 최대 연료량은 300
//    @Override
//    public boolean validateFuel(int fuelCharge) {
//        return fuel <= 300;
//    }

    // 승객 관련 기능 추가

}

package org.example.Inheritanceprac;

public class Truck extends Vehicle{
    protected static final int MAX_FUEL = 250;

    public Truck(String modelName) {
        super(modelName);
    }




    // 최대 연료량은 250
//    @Override
//    public boolean validateFuel(int fuelCharge) {
//        return fuel <= 250;
//    }

    // 짐 관련 기능 추가
}

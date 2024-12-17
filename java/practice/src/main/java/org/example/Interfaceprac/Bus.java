package org.example.Interfaceprac;

public class Bus extends Vehicle implements Increaseable {
    protected int passengerCount;
    protected static final int MAX_FUEL = 300;

    public Bus(String modelName) {
        super(modelName);
        this.passengerCount = 0;
    }

    public int addPassenger(int amount) {
        passengerCount += amount;
        return passengerCount;
    }




    // 추상 메서드 오버라이딩
    @Override
    public void increaseSpeed() {

    }
}

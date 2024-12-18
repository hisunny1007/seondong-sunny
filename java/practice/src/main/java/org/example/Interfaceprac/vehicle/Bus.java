package org.example.Interfaceprac.vehicle;

public class Bus extends Vehicle implements PassengerBoardable{


    // passengerboarderable 인터페이스
    @Override
    public void boardMethod() {
        System.out.println("board method");
    }


    // 추상메서드
    @Override
    void fuelMethod() {
        System.out.println("fuel method");
    }
}

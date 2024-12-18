package org.example.Interfaceprac.vehicle;

public class Brucks extends Vehicle implements PassengerBoardable, CargoLendable{
    // 추상 클래스는 1개만, 인터페이스는 여러개 가능


    @Override
    public void lendMethod() {
        System.out.println("bruck");
    }

    @Override
    public void boardMethod() {

    }

    @Override
    void fuelMethod() {

    }
}

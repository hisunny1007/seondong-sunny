package org.example.Inheritanceprac.vehicle;

// 추상 클래스 => 구현부가 없는 추상 메서드
public abstract class Vehicle {

    protected int maxFuel = 100;

    // 연료 관련 추상 메서드
    abstract void fuelMethod();

    // 속도 관련 추상 메서드
//    abstract void speedMethod();

    // 기본형 메서드
    void speedMethod() {
        System.out.println("vehicle : speed method");
    }


}

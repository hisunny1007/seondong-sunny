package org.example.Inheritanceprac.vehicle;

public class Main {
    public static void main(String[] args) {
        Bus bus = new Bus();


        // 만약 이렇게 적으면 bus2라는 인스턴스는 Vehicle에 정의된 메서드의 종류만 사용 가능
        // 대신, 실행을 할 때는 Bus에 정의된 메서드를 사용합니다.
        // => 동적 바인딩
        Vehicle bus2= new Bus();


        // passenger boardable : interface
        bus.boardMethod();

        // vehicle : abstract class
        bus.fuelMethod();
        bus.speedMethod();

        Truck truck = new Truck();
        truck.speedMethod();
        truck.fuelMethod();
        truck.lendMethod();


        



    }
}

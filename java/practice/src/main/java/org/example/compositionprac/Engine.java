package org.example.compositionprac;

public class Engine {
    public int horsePower;

    public Engine(int horsePower) {
        this.horsePower = horsePower;
    }


    public void startEngine() {
        System.out.println("engin start! hosrpoer is " + this.horsePower);
    }
}

//- 마력을 갖는 Engine 클래스를 구현하시오
//- 모델명, Engine, 가속 기능을 갖는 Car 클래스를 구현하시오
//- Engine의 마력에 따라 속도가 크게 빨라지는 기능 구현


// 차가 엔진을 가지고 있어 (도구 사용 느낌 / 포함 관계)
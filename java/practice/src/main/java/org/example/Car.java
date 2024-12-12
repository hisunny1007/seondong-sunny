package org.example;

public class Car {
    String model;
    int speed;


    // speed는 받을 필요 없음. 0으로 잡아
    // 생성자는 새로운 인스턴스를 생성했을 때 걔의 값을 넣어주는 역할을 함
    // 무조건적으로 변수 넣어주는 건 아님
    Car(String model) {
        this.model = model;
        this.speed = 0;
    }

    // 입력 x / 속도를 높여줘 / return 속도 또는 X
    int increaseSpeed() {
        this.speed += 10;
        return this.speed;
    }

    // break는 예약어기 때문에 안 쓰는게 좋아
    int decreaseSpeed() {
        if (this.speed != 0) {
            this.speed -= 10;
        }
        return this.speed;
    }

    // 입력 X / 정보 보여주기 / return X
    void showInfo() {
        System.out.println("model : " + this.model + "speed : " + this.speed);
        System.out.printf("model : %s speed : %d \n", model, speed);
        // ln은 한 줄로 전부 나와서.. \n으로 개행해줘
    }

    // 입력 : int / 속도 올리고 / return 속도
    int increaseSpeedByAmount(int amount) {
        this.speed += amount;
        return this.speed;
    }


//    int decreaseSpeed() {
//        if (this.speed == 0) {
//            return this.speed;
//        }
//        this.speed -= 10;
//        return this.speed;
//    }



//    int speedIncrease1() {
//        speed += 10;
//        return speed;
//    }
//
//    void speedIncrease() {
//        speed += 10;
//    }
//
//    void speedDecrease() {
//        speed -= 10;
//    }

    // 함수 호출했을 때 어떤 동작을 하는 거임
    // 꼭 출력이나 return 안 해도 돼

//    String carInfo() {
//        return model + speed;
//    }

}

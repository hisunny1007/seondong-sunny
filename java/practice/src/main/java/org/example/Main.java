package org.example;

import java.sql.SQLOutput;

//TIP 코드를 <b>실행</b>하려면 <shortcut actionId="Run"/>을(를) 누르거나
// 에디터 여백에 있는 <icon src="AllIcons.Actions.Execute"/> 아이콘을 클릭하세요.
public class Main {
    public static void main(String[] args) {


//        int value = 3;
//        int[] array = new int[6];

//        int[] 이게 Rectangle / array가 rect1 동일함
//
//        this는 만들어진 인스턴스 그 자체. this가 rect1임
//        Rectangle rect1 = new Rectangle(100, 200);


//        System.out.println(rect1.width);
//        System.out.println(rect1.calculateArea());
//
//        Rectangle rect2 = new Rectangle(10, 1000);
//        System.out.println(rect2.calculateArea());
//
//        String word = new String("hahahoho");
//
//        // 같은 패키지(폴더)면 그냥 사용할 수 있음
//        Circle c1 = new Circle(3);
//        System.out.println(c1.radius);
//        System.out.println(c1.calculateArea());

        // 이름, 나이를 가지고 있는 PERSON 객체 만듬
        Person sunny = new Person("Sunny", 20);
        Person sunny2 = new Person("Sunny", 18);
        System.out.println(sunny.name);
        System.out.println(sunny.age);
        System.out.println(sunny.calculateArea());

        // 다른 객체임
        System.out.println(sunny == sunny2); // false!!!!!!!!

        Dog d1 = new Dog("yo", "happy");
        System.out.println(d1.breed);
        d1.giveHand();
        d1.sitDown();

        Triangle smallTriangle = new Triangle(4);
        System.out.println(smallTriangle.circumference);
        System.out.println(smallTriangle.calculateArea());

        Car myCar = new Car("Avante");
        myCar.increaseSpeed();
        myCar.increaseSpeed();
        myCar.increaseSpeed();
        myCar.decreaseSpeed();
        myCar.showInfo();
        myCar.increaseSpeedByAmount(110);
        myCar.showInfo();

        MP3Player ipod = new MP3Player("iPod");
        ipod.pushPowerButton();
//        ipod.turnOn();
        ipod.increaseVolume();
        ipod.increaseVolume();
        ipod.increaseVolume();

        ipod.decreaseVolume();

        ipod.showInfo();
        ipod.pushPowerButton();
        ipod.showInfo();


    }
}


//변수와 메서드를 하나의 공간에 묶은 녀석 /// class

// 변수와 메서드 가지고 있는데 하나의 기능을 하는 독자적인 설계도

//속성 = 변수
//장치 = 생성자
// 기능 = 메서드

// 메서드는 동사 (기능이니까)
// 클래스명은 명사로 해야함.

// 변수랑 메서드는 카멜케이스(소문자시작)
// 클래스는 파스칼케이스(대문자시작)

//

package org.example;

public class Calculator2 {

// calculator2라는 설계도가 있어. 새롭게 생긴 newcal이라는 인스턴스 생성했어.
//    설계도가 가지고 있는 변수랑 메서드를 따른 곳에서 사용하고 싶어.
    // this 필요없어 instance 필요없어 => class 메서드 (static)
    // 인스턴스 생성할 필요 없이 바로 사용할 수 있음

    // 덧셈
    // return에서 this 사라지고 그냥 덧셈 기능만 만듬!!
    // 인스턴스에서 실행 가능
    int add(int num1, int num2) {
        return num1 + num2;
    }

    // 같은 이름을 가지고 있는 다른 함수들을 생성할 수 있음!! => 다른 함수로 취급함

    // 매개변수 갯수가 다름.. 똑같이 add여도 가능함! (자바에서는)
    int add(int num1, int num2, int num3) {
        return num1 + num2 + num3;
    }
    // 이건 자료형 타입이 다름..
    int add(double num1, double num2) {
        return (int) (num1 + num2);
    }

    // 클래스의 입장에서 실행 가능한 것 (
    static int staticAdd(int num1, int num2) {
        return num1 + num2;
    }

    // 뺄셈
    int minus(int num1, int num2) {
        return num1 - num2;
    }

    // 곱셈
    int multiply(int num1, int num2) {
        return num1 * num2;
    }

    // 나눗셈
    int divide(int num1, int num2) {
        return  num1 / num2;
    }




}



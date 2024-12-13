package org.example;

public class Calculator {
    int num1;
    int num2;

    // 두 정수는 계산기가 생성될 때 입력된다


    public Calculator(int num1, int num2) {
        this.num1 = num1;
        this.num2 = num2;
    }

    // 덧셈
    int add() {
        return this.num1 + this.num2;
    }

    // 뺄셈
    int minus() {
        return this.num1 - this.num2;
    }

    // 곱셈
    int multiply() {
        return this.num1 * this.num2;
    }

    // 나눗셈
    // 나눗셈할 때 int가 맞을 까? 여기서는 int가 맞지만 double로 해도 돼
    int divide() {
        return  this.num1 / num2;
//        return (double) this.num1 / this.num2;
    }




}



package org.example;

public class Circle {

    // radius라는 변수를 가지고 있어
    int radius;

    // instance를 만들기 위한 생성자 (특별한 메서드임)
    // 클래스 이름 그대로 가져와
    // new라는 키워드 붙여서 실행
    // this.radius 인스턴스가 가지고 있는 변수
    Circle(int radius) {
        this.radius = radius;
    }


    double calculateArea() {
        return 3.14 * radius * radius;
    }
}

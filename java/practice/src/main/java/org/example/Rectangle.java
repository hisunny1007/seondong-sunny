package org.example;

// 클래스 : 공통점으로 모아놓음
public class Rectangle {

    // 공통적으로 가지고 있는 것들을 나중에 쓸 일이 있으면 static 변수
    // static 변수 = 클래스 변수 = 정적 변수
    // 어느 인스턴스에서나 고정된 값 유지
    static int angleCount = 4;

    // 인스턴스 변수
    int width;
    int height;


    // 기본 생성자 만듬 (기본으로 10*10 사각형 만들고 싶어)
    // new Rect() 했을 때 => new Rectangle(10,10) 이거랑 똑같은거임

    Rectangle() {
//        this.width = 10;
//        this.height = 10;
        this(10,10);
    }


    // this는 만들어진 인스턴스 그 자체. new redtangle해서 rect1생김. this가 바로 rect1
    // 생성자
    Rectangle(int width, int height) {
        this.width = width;
        this.height = height;

        // 왼쪽 width는 rect1이라는 무언가가 있을 때 걔가 가지고 있는 width라는 필드/변수
        // 오른쪽 width는 value로써의 width (즉 ,입력받은 width) (ex, 100, 200)
    }


    int calculateArea() {
        return width * height;
    }


}

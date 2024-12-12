package org.example;

public class Rectangle {
    int width;
    int height;

    // this는 만들어진 인스턴스 그 자체. new redtangle해서 rect1생김. this가 바로 rect1
    Rectangle(int width, int height) {
        this.width = width;
        this.height = height;

        // 오른쪽 width는 value로써의 width (즉 ,입력받은 width)
        // rect1이라는 무언가가 있을 때 걔가 가지고 있는 width라는 필드/변수
    }

    int calculateArea() {
        return width * height;
    }
}

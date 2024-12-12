package org.example;

public class Triangle {
    // triangle 클래스 구현 => 삼각형의 둘레 길이, 넓이를 계산할 수 있다

    int side;
    int circumference;

    // 변수를 무조건 입력받을 필요 없어!! circumference 입력 안 받음
    // 생성자에서 가공해서 해도 돼
    // 가끔 사용하면 메서드에서 해도 돼
    public Triangle (int side) {
        this.side = side;
        this.circumference = side * 3;
    }

    // 입력 : 안받음 // 넓이 계산 // 어떤걸 return? 넓이
    double calculateArea() {
        double area = (Math.sqrt(3) / 4) * side * side;
        area = Math.floor(area*100)/100;
//      area = Math.floor(area);
        return area;
    }

//    // 넓이 (하나를 double로 해줘)
//    double triangleArea() {
//        return ((double) width * height) / 2;
//    }

}
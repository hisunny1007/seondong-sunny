package org.example.compositionprac;

public class Pencil implements Tool {

    public String color;

    public Pencil(String color) {
        this.color = color;
    }

    public void write() {
        System.out.println("writing! with  " + color);
    }

    @Override
    public void use() {
        write();
    }
}

//- 다음을 구현하시오
//    - 색상, 쓰기 기능을 갖는 Pencil 클래스를 구현하시오
//    - 이름, Pencil을 갖는 Person 클래스를 구현하시오
//        - write() 메소드를 통해 연필로 쓰기 기능 구현
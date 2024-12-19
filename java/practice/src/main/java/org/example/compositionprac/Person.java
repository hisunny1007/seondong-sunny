package org.example.compositionprac;

public class Person {
    public String name;
    // pencil 클래스를 변수로 갖는다 => 클래스가 다른 클래스를 변수로 가질 수 있음!
    public Pencil pencil;
    // 배열도 변수로 가능함!
    public Pencil[] pencils;
    public Car car;
    public Tool tool;



    public Person(String name, Tool tool) {
        this.name = name;
        this.tool = tool;
    }

//    public Person(String name, Pencil pencil) {
//        this.name = name;
//        this.pencil = pencil;
//    }

    public Person(String name, Pencil[] pencils) {
        this.name = name;
        this.pencils = pencils;
    }

    public void write() {
//        System.out.println("글씨를 쓴다");
        pencil.write();
    }

    public void writeMany() {
        for (Pencil p : pencils) {
            p.write();
        }
    }

    public void use() {
        tool.use();
    }

    // setter를 통해서도 주입할 수 있음
    // public일 때는 굳이 필요없긴 하지만 직관적으로
    public void setPencil(Pencil pencil) {
        this.pencil = pencil;
    }

}

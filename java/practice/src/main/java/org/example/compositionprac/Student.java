package org.example.compositionprac;

public class Student {
    private String name;
    // 주소 클래스를 변수로
    public Address address;

    public Student(String name, Address address) {
        this.name = name;
        this.address = address;
    }

    public void setName(String name) {
        this.name = name;
    }

    public  void displayInfo() {
        System.out.println("name : " + name);
        System.out.println("address : " + address.getFullAddress());
    }
}


// 학생은 주소를 가지고 있다 (학생 has a 주소)

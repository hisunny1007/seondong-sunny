package org.example.modifierprac.tmp;

import org.example.modifierprac.Person;

public class Main {
    public static void main(String[] args) {
        Person p = new Person("sunny", 16,183.7);

        System.out.println(p.getName());
        System.out.println(p.age);
//        System.out.println(p.heigth); // default여서 안돼
    }
}

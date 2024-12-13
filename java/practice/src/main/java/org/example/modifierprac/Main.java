package org.example.modifierprac;

public class Main {
    public static void main(String[] args) {
        Person me = new Person("sunny", 16,183.7);

//        System.out.println(me.name);
//        me.name = "nayeon"
        System.out.println(me.getName());
        me.setName("nayeon");
        me.age = 20;
        me.height = 175.3;

        System.out.println(me.getName());
        System.out.println(me.age);
        System.out.println(me.height);

        // 직접적으로 달리지는 못하지만 달려! 라고 하면 달릴 수 있음 (외부에다 공개x)
//        me.run();
        me.exercise();
        me.walk();
        me.study();






        BankAccount ba = new BankAccount(1102003000,30000, 123);







    }
}

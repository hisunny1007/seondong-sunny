package org.example.javaintro;

import org.example.javaintro.tmp.DefaultModifier;

public class Main {
    public static void main(String[] args) {
        PrivateModifier pm = new PrivateModifier();

        pm.publicNum = 100000;
        System.out.println(pm.publicNum);

//        System.out.println(pm.privateNum); // private이라 오류
        System.out.println(pm.getPrivateNum()); // getter로 privateNum에 접근 가능
        pm.setPrivateNum(100); // setter로 privateNum 값 바꿔
        System.out.println(pm.getPrivateNum());






        pm.publicHi(); // hi, public
//        pm.privateHi(); // private이라 오류
        pm.sayHi(); // hi, private

        DefaultModifier dm = new DefaultModifier();
        System.out.println(dm.publicString);
//        System.out.println(dm.defaultString); // 불가능




    }
}

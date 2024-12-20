package org.example.etc;

public class Main {
    public static void main(String[] args) {

        GenericPrac<Integer> integerGenericPrac = new GenericPrac<>();

        integerGenericPrac.setValue(123);
        System.out.println(integerGenericPrac.getValue());
//        integerGenericPrac.setValue("hello"); Integer 타입만 가능

        GenericPrac<String> stringGenericPrac = new GenericPrac<>();

        stringGenericPrac.setValue("hello");
        System.out.println(stringGenericPrac.getValue());
//        stringGenericPrac.setValue(1234); String 타입만 가능

        String word = new String();
        EnumPrac monday = EnumPrac.MONDAY;

    }
}

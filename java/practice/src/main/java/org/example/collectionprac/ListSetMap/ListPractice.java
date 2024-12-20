package org.example.collectionprac.ListSetMap;


import java.util.ArrayList;
import java.util.List;

public class ListPractice {
    public static void main(String[] args) {
        //Integer 를 가지는 새로운 어레이 (integer 도 클래스임)
        ArrayList<Integer> list = new ArrayList<>();
//        Student student = new Student();


        // data 삽입
        list.add(1);
        list.add(3);

        System.out.println(list);

        list.add(1, 100);
        System.out.println(list);

        // 접근
        System.out.println(list.get(0));
        System.out.println(list.get(1));

        // 수정
        list.set(1,1000);
        System.out.println(list);

        // list를 반복을 돈다, "길이"
        System.out.println(list.size());

        list.isEmpty();
        if (!list.isEmpty()) {
            list.get(0);
        }

        for (Integer i : list) {
            System.out.println(i);
        }

        for (int index = 0; index < list.size(); index++) {
            int value = list.get(index);
        }

        List<String> strings = new ArrayList<>();

        strings.add("1");



    }

}

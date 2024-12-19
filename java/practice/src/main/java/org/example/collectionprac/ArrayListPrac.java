package org.example.collectionprac;

import java.util.ArrayList;
import java.util.List;

public class ArrayListPrac {
    public static void main(String[] args) {
//        30, 20, 10이 들어있는 ArrayList를 만들고, 합계와 평균을 계산하시오

        List<Integer> numArray = new ArrayList<>();

        numArray.add(30);
        numArray.add(20);
        numArray.add(10);
        System.out.println(numArray);

        int sum = 0;
        for (Integer i : numArray) {
            sum += i;
        }
        System.out.println(sum);

        int average = (sum / numArray.size());
        System.out.println(average);




    }
}

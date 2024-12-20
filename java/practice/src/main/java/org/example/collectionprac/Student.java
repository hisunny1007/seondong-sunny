package org.example.collectionprac;

import java.util.HashMap;
import java.util.Map;

public class Student {
    private String name;
    private int age;
    // 학생은 과목별 성적을 가지고 있음
    // 국어 : 100
    // 사회 : 20
    // 수학 : 30.. => map
    private Map<String, Integer> grade;
    // 다형성으로 코드 유연함 만들기 위해 map 사용함 (hashmap 대신)
    // 컬렉션도 변수로 받을 수 있다
    public Map<String, String> address;
    

    public Map<String, String> addAddress(String city, String road) {
        address.put(city,road);
        return address;
    }

    public void showAdd() {
        System.out.println("address = " + address);
    }
    
    //  생성자 / 인스턴스 생성하면 인자값을 매개변수에 넣음
    public Student(String name, int age) {
        this.name = name;
        this.age = age;
        this.grade = new HashMap<>(); // 성적에는 아무것도 들어있지 않음
        // 변수에다 값을 할당하는 걸 세터라고 함
        this.address = new HashMap<>();

    }


    // 과목 / 성적을 받는다 => grade에 추가한다 => 1. grade return (값 추가하고 바로 확인 가능 getter 필요 x) / 2. void return (기능에 집중)
    public Map<String, Integer> addGrade(String subject, Integer score) {
        grade.put(subject, score);
        return grade; // map을 리턴하기로 했으니까 / void면 필요 x
        // return의 타입을 public 뒤에 적어줌
    }

    public void showInfo() {
        System.out.println("name = " + name);
        System.out.println("age = " + age);
        System.out.println("grade = " + grade);
    }


    public double averageScore() {
//        합계 / 개수
        Integer sum = 0;

        // keySet은 key를 가져옴. 그래서 get()으로 value 가져와
        for (String key : grade.keySet()) {

            Integer value = grade.get(key);
            sum += value;
        }

        return (double) sum / grade.size();
    }


    public String getName() {
        return name;
    }
}


// 쓰레드 : 동시에 여러개의 작업을 할 수 있음

//    public static void main(String[] args) {
//        HashMap<String, Integer> grade1 = new HashMap<>();
//        int age = 10;
//        String name = "haha";
//        type 변수 =  data;
//    }

//    public void setGrade(Map<String, Integer> grade) {
//        this.grade = grade;
//    }
//    // 내가 이미 map을 갖고 있는 상태에서 성적만 갈아끼고 싶을 때 세터 씀
//    // 우리는 지금 갈아끼는 게 아니라 아예 값을 넣고 싶기 때문에
//    // 상황에 따라 변경해야 함

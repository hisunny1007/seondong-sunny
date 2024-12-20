package org.example.collectionprac;

import java.util.ArrayList;
import java.util.List;


public class StudentManager {
    // 여러개의 데이터 - list set map
    // 개별 data에 접근이 가능한지 불가능한지 list o(순서) , set x(존재성만.가지고있니?) , map o(key)
    // 학생들의 목록을 관리(가지고 있음) 학생들 목록은 list로
    private List<Student> students;

    // 생성자 (현재 리스트만 만들어놓고 아무것도 들어있지 않음)
    public StudentManager() {
        this.students = new ArrayList<>();
    }

    // 학생 추가
    public List<Student> addStudent(Student student) {
        students.add(student);
        return students;
    }


    // 학생들 정보 조회
    public void showStudentInfo() {
        for (Student student : students) {
            student.showInfo();
            System.out.println();
        }
    }


    // 학생 검색
    public Student findStudentByName(String name) {
        // 이름이 같은 학생을 return하자.
        // name이 private이어서 getter 만들어!! 하나씩 체크하고 필요할 때 만들어
        for (Student student : students) {
            if (student.getName().equals(name)) {
                return student;
            }
        }
        return null; //  이름이 없는 경우
    }

}

//        ArrayList<Integer> integerArrayList = new ArrayList<Integer>();
//        ArrayList<String> integerArrayList = new ArrayList<Integer>();
//        ArrayList<Student> integerArrayList = new ArrayList<Integer>();


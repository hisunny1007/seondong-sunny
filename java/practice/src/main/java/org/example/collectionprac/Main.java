package org.example.collectionprac;

public class Main {
    public static void main(String[] args) {

        Student sunny = new Student("sunny", 13);
        sunny.addGrade("korean", 20);
        sunny.addGrade("cs", 40);
        sunny.addGrade("math",30);

        sunny.showInfo();
        System.out.println(sunny.averageScore());

        Student lynda = new Student("lynda", 20);
        lynda.addGrade("korean", 100);
        lynda.addGrade("cs", 60);
        lynda.addGrade("math",50);

        lynda.showInfo();
        System.out.println(lynda.averageScore());

        sunny.addAddress("seoul", "dobong-ro");
        sunny.addAddress("jejudo", "jeju-ro");
        sunny.addAddress("daegu", "sung-ro");
        sunny.showAdd();

        System.out.println();

        StudentManager studentManager = new StudentManager();
        studentManager.addStudent(sunny);
        studentManager.addStudent(lynda);

        studentManager.showStudentInfo();




//        StudentManager studentManager = new StudentManager();
//        studentManager.addStudent(sunny);
//        studentManager.addStudent(lynda);
//
//        studentManager.showStudentInfo();



    }
}

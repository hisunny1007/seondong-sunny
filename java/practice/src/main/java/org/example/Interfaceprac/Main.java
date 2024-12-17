package org.example.Interfaceprac;

public class Main {
    public static void main(String[] args) {


        Shape rectangle = new Rectangle();
        Rectangle rectangle2 = new Rectangle();
        System.out.println(rectangle.calculateArea());
        rectangle.test();
        rectangle2.test();

        Shape triangle = new Triangle();
        System.out.println(triangle.calculateArea());

//        Rectangle rectangle = new Rectangle();
//        System.out.println(rectangle.calculateArea());
//
//        Triangle triangle = new Triangle();
//        System.out.println(triangle.calculateArea());

        // shape이기만 하면 calculateArea 할 수 있어! 뭐가 오던..
        // rectangle의 calculate랑 triangle의 calculate이 실행됨


        //Shape shape = new Shape(); // 불가능

//        카카오결제 카결 = new 카카오결제()
//        네이버결제 카결 = new 네이버결제()
//        페이팔결제 카결 = new 페이팔결제()
//        비트코인결제 카결 = new 비트코인결제()
//
//        결제 아무결제 = new 아무결제()


        // 클래스는 자료형이어서 이거를 (Shape shape)으로 바꿔도 가능
//        private static void printTriangleArea(Triangle triangle) {
//            int triangleArea = triangle.calculateArea();
//            System.out.println("삼각형의 면적 : " + triangleArea);
//        }
//
//        // 사각형의 면적을 출력하는 메서드
//        private static void printRectangleArea(Rectangle rectangle) {
//            int rectangleArea = rectangle.calculateArea();
//            System.out.println("사각형의 면적 : " + rectangleArea);
//        }

        // 추상 클래스는 하나만 갖고 인터페이스는 여러개 갖을 수 있따....넵..감사합니다..


//        new Animal(); // 추상 클래스는 불가능
        Dog dog = new Dog("happy", 18, "puddle");
        dog.makeSound();
        Cat cat = new Cat("cat", 3);
        cat.makeSound();

        makeThemSound(dog);
        makeThemSound(cat);


    }


    //(다형성) dog나 cat 객체를 전달받아 처리
    public static void makeThemSound(Animal animal) {

        System.out.println("cry!");
        animal.makeSound();
    }

//    makeThemSound 메서드는 Animal 타입을 매개변수로 받아, 객체의 실제 클래스의 동작 makeSound()을 호출
//        새로운 동물 클래스 추가해도 알아서 작동

//    매개변수 animal이 참조하는 실제 객체의 makeSound() 메서드가 호출됩니다.
//    다형성 덕분에 animal이 실제로 Dog 객체를 참조하면 Dog 클래스의 makeSound()가, Cat 객체를 참조하면 Cat 클래스의 makeSound()가 실행됩니다.




//        public void makeThemSound(Dog dog){
//            System.out.println("슬퍼 나울어");
//            dog.makeSound();
//        }

    //    public static void makeThemSound(Dog dog){
//        System.out.println("cry!");
//        dog.makeSound();
//    }
//    public static void makeThemSound(Cat cat){
//        System.out.println("cry!");
//        cat.makeSound();
//    }

//    void 결제(int 네이버결제){
//        네이벼결제.결제()
//    }
//    void 결제(double 카카오결제){
//        카카오결제.결제()
//    }
//
//    void 결제(결제 아무결제){
//        아무결제.결제()
//    }

//    new Animal(); // 불가능




}


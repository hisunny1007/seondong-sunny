package org.example.compositionprac;

public class Main {
    public static void main(String[] args) {

        Pencil red = new Pencil("red");
        Person sunny = new Person("sunny", red);

//        sunny.write();
        // sunny가 갖고 있는 tool은 use만 갖고 있어서 타입이 Pencil인 것만 바로 write에 접근할 수 있음
        // sunny.tool 타입은  그냥 Tool이야.
        ((Pencil)(sunny.tool)).write();

        Pencil blue = new Pencil("blue");

        sunny.setPencil(blue);
//        sunny.pencil = blue;

//        sunny.write();
        System.out.println();

        Pencil yellow = new Pencil("yellow");

        Pencil[] manyPencil = {red, blue, yellow};
        Person lynda = new Person("lynda", manyPencil);
        lynda.writeMany();


        System.out.println();
        // Address, Building 객체 생성
        Address address = new Address("seoul", "dobong-ro");
        Building building = new Building("sun-building", address);

//        System.out.println(seoul.city); // private이라 불가능
        System.out.println(address.getCity());
        System.out.println(address.getStreet());
        building.showAddress();

        // 만약에 빌딩이 이사갔다면? setter 사용해서 주소 다시 세팅!
        // Building도 같은 address 객체 참조하고 있어서 수정된 내용이 반영됨
        // building → 여전히 같은 address 객체를 참조 → 변경된 값 반영
        address.setCity("daegu");
        address.setStreet("dongsung-ro");
        System.out.println(address.getFullAddress());
        building.showAddress();


        System.out.println("\nCar");
        Engine e10 = new Engine(10); // 마력이 10인 엔진
        Engine e20 = new Engine(20);

        Car carE10 = new Car("c-class", e10);
        Car carE20 = new Car("avante", e20);


        // 매개변수 없는 기본 생성자는 기본값으로 자동 ㄱㄱ
//        Car car22 = new Car();
//        System.out.println(car22.speed);
//        System.out.println(car22.model);
//        System.out.println(car22.engine);

        carE10.speedUp();
        System.out.println(carE10.speed);
        carE20.speedUp();
        System.out.println(carE20.speed);

        // 도구 사용하기
        Pencil redPen = new Pencil("red");
        Person chris = new Person("chris", redPen);
//        System.out.println(chris.tool.color);
        System.out.println(((Pencil) chris.tool).color);
        // tool 자리에 레드펜을 넣고.
        chris.use();



//        chris.tool = carE10;
//       chris.setTool(carE10);
//        이거랑 같은 것임

        // 기능을 추가하자~입히는 너낌쓰

        // 인터페이스나 추상 클래스가 필요함!
//        new Perosn(name, 도구)
//                person.use() =>
//                        도구 ; pencil =>  연필 사용
//                        도구 ; car => 속력 높임


    }
}

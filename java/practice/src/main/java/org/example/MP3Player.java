package org.example;

public class MP3Player {
    String model;
    int volume;
    boolean isOn;

    // 생성자는 mp3player 객체를 만들 때 호출됨
    // volume 안들어가고 기본값 0/ isOn 안 들어가고 false
    public MP3Player(String model) {
        this.model = model;
        this.volume = 0;
        this.isOn = false;
    }


    // 버튼 누르는 동일한 동작 => tv상태에 따라서 달라짐 (켜짐. 꺼짐 ..)
    // 킨다라는 기능, 끈다라는 기능 / 내부적으로 다른 메서드를 콜할 수 있음
    // 사용자와 개발자의 간극 줄여?
    boolean pushPowerButton() {
        if (this.isOn) {
//            this.isOn = false;
//            this.volume = 0;
            return this.turnOff();
        } else {
            return this.turnOn();
        }
    }

    //- 전원 켜기 - 전원을 키고, 볼륨을 40으로 설정
    boolean turnOn() {
        this.isOn = true;
        this.volume = 40;

        // 전원이 켜진지 꺼진지 확인하고 싶으면
//        if (성공) {
//            return true
//        } else {
//            return false
//        }
        return this.isOn;
    }

      // 전원 끄기 - 전원을 끄고, 볼륨을 0으로 설정
    boolean turnOff() {
        this.isOn = false;
        this.volume = 0;
        return this.isOn;
    }

    //- 볼륨 증가 - 볼륨 20 증가 (최대 100)
    // 그냥 증가하면 안 돼. 전원이 켜져있을 때 가능
    // int return하는 메서드라 0 해줘야함. 아니면 아예 void로

    int increaseVolume() {
        if (isOn == false) {
            return 0;
        }
        this.volume += 20;

        if (this.volume > 100) {
            this.volume = 100;
        }
        return this.volume;
    }

    //- 볼륨 감소 - 볼륨 20 감소 (최소 0)
    // !isOn 이랑 isOn == false 똑같음
    int decreaseVolume() {
        if (!isOn) {
            return 0;
        }
        this.volume -= 20;
        if (this.volume < 0) {
            this.volume = 0;
        }
        return this.volume;
        // return (this.volume <0 ? 0 : this.volume);
    }

    //- 정보 조회
    void showInfo() {
        System.out.printf("model : %s, isOn : %b, volume : %d", model, isOn, volume);
    }



}

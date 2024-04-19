import { Component, EventEmitter, Output } from '@angular/core';


@Component({
    selector: 'appointment-avalible-time',
    templateUrl: './avalible-time.component.html',
    styleUrl: './avalible-time.component.scss'
})
export class AvalibleTimeComponent {


    @Output()
    public timeToEmit = new EventEmitter<string>();

    public selectedTime?: string;

    public avalibleTimes: string[] = [
        '9:30',
        '10:15',
        '11:00',
        '11:45',
        '12:30',
        '13:15',
        '15:00',
        '15:45',
        '16:30',
        '17:15',
    ];


    onEmmitSelectedTime(time: string) {
        const valueToEmmit = time;
        this.timeToEmit.emit(time);
    }



    onSetBackgroundToTime(time: string) {
        this.selectedTime = time;
    }


}

import { Observable } from "rxjs";
import { map } from "rxjs";

const clocks$ = Observable.create((subject) => {
    console.log('In Observable');
    const interval = setInterval(()=>{
        subject.next('tick');
    },1000)

    setTimeout(()=> clearInterval(interval),7 * 1000);
})

//const subscription = clocks$.subscribe(console.log)

const subscription = clocks$.pipe(
    map((val,index)=> index % 2 === 0 ? val : 'tock')
    ).subscribe(val => console.log(val));

setTimeout(()=> subscription.unsubscribe(),10 * 1000)

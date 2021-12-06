import { Observable } from "rxjs";

const clocks$ = Observable.create((subject) => {
    console.log('In Observable');
    const interval = setInterval(()=>{
        subject.next('tick');
    },1000)

    setTimeout(()=> clearInterval(interval),7 * 1000);
})

const subscription = clocks$.subscribe(console.log)


setTimeout(()=> subscription.unsubscribe(),10 * 1000)

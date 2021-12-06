import { Observable,of } from "rxjs";
import { map,catchError } from "rxjs/operators";

const clocks$ = Observable.create((subject) => {
    console.log('In Observable');
    const interval = setInterval(()=>{
        subject.next('tick');
    },1000)

    setTimeout(() => subject.error(new Error('BOOOM!')), 5 * 1000);
    setTimeout(()=> clearInterval(interval),7 * 1000);
})

//const subscription = clocks$.subscribe(console.log)

const subscription = clocks$.pipe(
    map((val,index)=> index % 2 === 0 ? val : 'tock'),
    catchError(error => of('Explosion!'))
    ).subscribe(val => console.log(val));

setTimeout(()=> subscription.unsubscribe(),10 * 1000)
setTimeout(() => console.log('Still alive?'), 12 * 1000);

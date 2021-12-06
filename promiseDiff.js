import { Observable } from "rxjs";

const myPromise = new Promise(resolve => {
    console.log('Inside Promise');
    setTimeout(()=> resolve('Promise resolves'), 1000);
});

const myObservable = Observable.create(subject => {
    console.log('Inside observable');
    setTimeout(()=> { 
        subject.next('Observable emits'); 
        subject.complete();
    },1000)
})

//need to find out about this 
myPromise.then(console.log);
myObservable.subscribe(console.log);

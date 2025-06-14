import {useEffect, useState} from "react";

export default {
    title: "use effect demo",
}

export const SimpleExample = () => {
    const [fake, setFake] = useState(1);
    const [counter, setCounter] = useState(1);
    console.log('simple example')

    // 1  если мы не передали зависимость - перезапускает useEffect каждый раз при перерисовке компоненты
    // 2 - [counter] передали зависимость от counter а не fake, а значит отрисует только один раз
    // т.к. больше counter у нас не перерисовывается, а useEffect как раз зависит от него
    // если передали пустой массив, то useEffect сработает ровно один раз при вмонтировании компоненты.
    // при изменении компоненты он работать не будет


    // "Эй, React!  Запомни: каждый раз, при вот такой зависимости (напр когда переменная counter меняется),
    // сделай две вещи:
    //
    //   1 Напиши в консоли сообщение "useEffect first render and every counter change"
    //
    // 2 Установи заголовок вкладки браузера равным текущему значению счётчика (counter)
    // И не забудь сделать это сразу при первом показе компонента!»


// 1
    useEffect(()=>{
        console.log('useEffect every render')
        // debugger
        document.title = counter.toString()
    }) // сработает после того как разметка уже отобразилась на странице,
    // плюс перерисовка при каждом изменении компоненты

//2
    useEffect(()=>{
        console.log('useEffect first render and every counter change')
        // debugger
        document.title = counter.toString()
    }, [counter]) // сработает при каждом изменении counter

    useEffect(()=>{
        console.log('useEffect first render and every fake change')
        // debugger
        document.title = fake.toString()
    }, [fake]) // сработает при каждом изменении fake

//3
    useEffect(()=>{
        console.log('useEffect only first render')
        // debugger
        document.title = counter.toString()
    }, []) // сработает только в первый рендер компоненты

    return <>
    hello, {counter}
        <button onClick={() => setFake(fake + 1)}>fake</button>
        <button onClick={() => setCounter(counter + 1)}>counter</button>
    </>
}

export const SetTimeoutExample = () => {
    const [fake, setFake] = useState(1);
    const [counter, setCounter] = useState(1);
    console.log('SetTimeoutExample')

    //setTimeout - асинхронная функция
    // все асинхронный операции делаем внутри useEffect
    useEffect(()=>{
        setTimeout(()=> {
            document.title = counter.toString()
            console.log('я сработал')
        }, 1000)
    }, [counter]) //сработает столько раз, сколько отрисовали counter

    useEffect(()=>{
        setTimeout(()=> {
            document.title = counter.toString()
            console.log('я сработал')
        }, 1000)
    }, []) //сработает 1 раз, сколько отрисовали counter

    useEffect(()=>{
        setTimeout(()=> {
            document.title = counter.toString()
            console.log('я сработал')
        }, 1000)
    }, [counter]) //сработает столько раз, сколько изменится компонента




    return <>
    hello, {counter}
        <button onClick={() => setFake(fake + 1)}>fake</button>
        <button onClick={() => setCounter(counter + 1)}>counter</button>
    </>
}

export const SetIntervalExample = () => {
    const [fake, setFake] = useState(1);
    const [counter, setCounter] = useState(1);
    console.log('SetIntervalExample')

    // setTimeout и setInterval - асинхронная функция
    // все асинхронный операции делаем внутри useEffect
    // useEffect(()=>{
    //     setInterval(()=> {
    //         console.log('tik: ' + counter)
    //         setCounter((prev)=>prev + 1)
    //     }, 1000)
    // }) //сработает столько раз, сколько отрисовали counter

// дз: сделать часики


    return <>
    hello, counter: {counter}, fake: {fake}
        {/*<button onClick={() => setFake(fake + 1)}>fake</button>*/}
        {/*<button onClick={() => setCounter(counter + 1)}>counter</button>*/}
    </>
}

export const ResetEffectExample = () => {
    const [counter, setCounter] = useState(1);
    useEffect(()=>{
        console.log('Effect occurred ' + counter);

        //return сбрасывает useEffect
        return () => {
            console.log('Reset effect ' + counter);
        }

        //сначала запускает зачистку старого эффекта  console.log('Reset effect');
        // затем новый эффукт console.log('Effect occurred');
    }, [counter])
    return <>
        <div>
            hello, counter: {counter}
        </div>

        <button onClick={() => setCounter(counter + 1)}>count</button>
    </>
}

export const OnKeysTrackerExample = () => {
    const [text, setText] = useState('');
    useEffect(() => {

        const handleKeyPress = (e: KeyboardEvent) => {
            setText(prevText => prevText + e.key);
        };

        window.addEventListener('keypress', handleKeyPress);

        //  очистка эффекта при размонтировании
        return () => {
            window.removeEventListener('keypress', handleKeyPress);
        };
    }, [text]); // перезапускай зависимость когда текст меняется
    return <>
        <div>
            typed text: {text}
        </div>

    </>
}
export const SetTimeoutExample2 = () => {
    const [text, setText] = useState('');

    console.log('Component rendered with: ' + text);

    useEffect(() => {
        const timeoutID = setTimeout(() => {
            setText('3 seconds passed');
        }, 3000)

        return () => clearTimeout(timeoutID)
    }, [text]);

    return (
        <>
            Text: {text}
        </>
    )
}
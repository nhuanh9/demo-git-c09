console.imeout(() => {
    console.log('Trang ăn cơm')log('Trang đi học về!');
let p1 = new Promise((resolve, reject) => {
    setT
        resolve();
    }, 100)

})
let p2 = new Promise((relve, reject) => {
    setTimeout(() => {
        console.log('Trang học bài')
        resolve();
    }, 100)
});
p1.then(()=> {
    p2.then(()=> {
        console.log('Trang đi ngủ!!!');
    })
})
async function xxx() {
    await p1;
    await p2;
    console.log('Trang đi ngủ!!!');
}

xxx().then();

//Master ửa file


export default function request(obj) {
    switch(obj.method) {
        case 'get':
            return  fetch(obj.url)
            .then(res => {
                return res.json();
            })
            .then((res) => {
                if(res.cod === '200') {
                    return Promise.resolve(res);
                }
                return Promise.reject(res);
            });
            // return new Promise((res) => {
            //     setTimeout(() => {
            //         res({
            //             title: 'data from mocked api'
            //         });
            //     }, 1000);
            // });
        default:
            return  fetch(obj.url).then(res => res.json());
    }
}

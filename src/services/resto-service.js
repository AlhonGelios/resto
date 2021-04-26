export default class RestoService {
    url = 'http://localhost:3000/menu';
    
    async getMenuItems () {
        let res = await fetch(this.url);

        if (res.ok) {
            let json = await res.json();

            return json;
        } else {
            throw new Error('Server Error');
        }
    }
}
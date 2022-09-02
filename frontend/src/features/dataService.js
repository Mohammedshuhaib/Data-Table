import axios from 'axios'


// get data

const data = async() => {
    const response = await axios.get('http://fetest.pangeatech.net/data')

    if(response.data) {
        localStorage.setItem('data',JSON.stringify(response.data))
    }

    return response.data
}


const dataService = {
    data,
}

export default dataService;
import axios from 'axios'

export const fetchUsers = async() => {
    const response = await axios.get('https://panorbit.in/api/users.json')
    return response
}
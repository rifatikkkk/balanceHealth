import axios from 'axios'
import Hospital from '../models/hospitalModel.js';

export const updateHospital = async () => {
    try {
        await Hospital.deleteMany()

        setTimeout(async () => {
            for (let index = 1; index <= 3; index++) {
                const { data } = await axios.get(`https://spb-classif.gate.petersburg.ru/api/v2/datasets/149/versions/latest/data/327/?per_page=100&page=${index}`)

                data.results.forEach(async (element) => {
                    await Hospital.create(element)
                });
            }
        }, 10000)

    } catch (error) {
        console.log(error)
    }
}

import {$host} from "../axiosAPI";

export const addFish = (name, lengthMax, lengthMin, weightMax, weightMin, habitat) => {
    const {data} = $host.post("/fish/add", {
        name: name,
        lengthMax: parseInt(lengthMax),
        lengthMin: parseInt(lengthMin),
        weightMax: parseInt(weightMax),
        weightMin: parseInt(weightMin),
        habitat: habitat
    })
    return data
}
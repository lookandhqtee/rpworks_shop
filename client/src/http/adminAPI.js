import {$authHost, $host} from "./index";
//import jwt_decode from "jwt-decode";

export const createDevice = async (device) => {
    const {data} = await $authHost.post('api/devices', device)
    return data
}

export const createRequest = async (request) => {
    const {data} = await $authHost.post('api/requests', request)
    return data
}

export const createMaster = async (master) => {
    const {data} = await $authHost.post('api/masters', master)
    return data
}

export const fetchMasters = async (typeId, brandId, page, limit= 5) => {
    const {data} = await $host.get('api/masters', {params: {
            typeId, brandId, page, limit
        }})
    return data
}

export const fetchOneDevice = async (id) => {
    const {data} = await $host.get('api/device/' + id)
    return data
}
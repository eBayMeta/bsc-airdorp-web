// // uniapp发送get请求

export const getList = (address) => {
    return uni.request({
        url: 'https://api.aixa.live/home/index?userAddress='+address,
        method: 'GET'
    })
}
export const getCenter = (address) => {
    return uni.request({
        url: 'https://api.aixa.live/center/index?userAddress='+address,
        method: 'GET'
    })
}
export const getcontribution = (address) => {
    return uni.request({
        url: 'https://api.aixa.live/contribution/index?userAddress='+address,
        method: 'GET'
    })
}

export const getPushList = (address) => {
    return uni.request({
        url: 'https://api.aixa.live/contribution/getPushList?userAddress='+address+'&pageNumber=1&pageSize=10',
        method: 'GET'
    })
}
export const getTraining = (address) => {
    return uni.request({
        url: 'https://api.aixa.live/training/index?userAddress='+address,
        method: 'GET'
    })
}
// 训练详情
export const getTrainingDetail = (address) => {
    return uni.request({
        url: 'https://api.aixa.live/training/detail?userAddress='+address,
        method: 'GET'
    })
}


export const bindTraining= function bindTraining(userAddress,transaction,parentAddress,receiveAddress,amount){
    return uni.request({
        url: 'https://api.aixa.live/training/bind?userAddress='+userAddress+'&transaction='+transaction+'&parentAddress='+parentAddress+'&receiveAddress='+receiveAddress+'&amount='+amount,
        method: 'GET'
    })
}

export function training(userAddress,transaction,receiveAddress,amount){
    return uni.request({
        url: 'https://api.aixa.live/training/training?userAddress='+userAddress+'&transaction='+transaction+'&receiveAddress='+receiveAddress+'&amount='+amount,
        method: 'GET'
    })
}


export const withdraw = (address,currency) => {
    return uni.request({
        url: 'https://api.aixa.live/center/withdraw?userAddress='+address+'&currency='+currency,
        method: 'GET'
    })
}

export const getPayType = (payTyep) => {
    return uni.request({
        url:'https://api.aixa.live/training/payTyep?payTyep='+payTyep,
        method: 'GET'
    })
}

import Web3 from "web3";
// 检测当前连接的网络Chain ID
export async function isConnectedToBNB() {
    if (typeof window.ethereum !== 'undefined') {
        const web3 = new Web3(window.ethereum);
        
        try {
            const chainId = await web3.eth.getChainId();
            
            // BNB Smart Chain 主网: 56
            // BNB Smart Chain 测试网: 97
            if (chainId === 56) {
                console.log('当前连接到BNB Smart Chain主网');
                return true;
            } else if (chainId === 97) {
                console.log('当前连接到BNB Smart Chain测试网');
                return true;
            } else {
                console.log(`当前连接到其他网络，Chain ID: ${chainId}`);
                return false;
            }
        } catch (error) {
            console.error('检测网络时出错:', error);
            return false;
        }
    } else {
        console.log('未检测到Web3提供者（如MetaMask）');
        return false;
    }
}
export async function detectAndSwitchToBNB() {
    if (typeof window.ethereum !== 'undefined') {
        try {
            // 获取当前网络信息
            const chainId = await window.ethereum.request({ method: 'eth_chainId' });
            
            // BNB主网的Chain ID是0x38（十六进制的56）
            if (chainId === '0x38') {
                console.log('已连接到BNB Smart Chain主网');
                return true;
            }
            
            // 如果不是BNB网络，尝试切换
            try {
                await window.ethereum.request({
                    method: 'wallet_switchEthereumChain',
                    params: [{ chainId: '0x38' }], // BNB主网
                });
                console.log('已切换到BNB Smart Chain主网');
                return true;
            } catch (switchError) {
                // 如果网络未添加，则添加网络
                if (switchError.code === 4902) {
                    await addBNBNetwork();
                    return true;
                }
                throw switchError;
            }
        } catch (error) {
            console.error('切换网络时出错:', error);
            return false;
        }
    }
    return false;
}

// 添加BNB网络到MetaMask
async function addBNBNetwork() {
    try {
        await window.ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [{
                chainId: '0x38',
                chainName: 'BNB Smart Chain',
                rpcUrls: ['https://bsc-dataseed1.binance.org:443'],
                nativeCurrency: {
                    name: 'BNB',
                    symbol: 'BNB',
                    decimals: 18
                },
                blockExplorerUrls: ['https://bscscan.com']
            }]
        });
        console.log('BNB网络已添加到MetaMask');
    } catch (error) {
        console.error('添加BNB网络时出错:', error);
    }
}
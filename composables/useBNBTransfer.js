
import { ref } from 'vue'
import Web3 from 'web3'

export default function useBNBTransfer() {
  const txHash = ref('')
  const error = ref(null)
  const isLoading = ref(false)

  const sendBNB = async (from, to, amount) => {
    const web3 = new Web3(window.ethereum)

    const gasPrice = await web3.eth.getGasPrice()

    const transactionParameters = {
      from,
      to,
      value: web3.utils.toWei(Number(amount).toFixed(18), 'ether'), // 强制18位精度
      gas: '0x5208',
      gasPrice: web3.utils.toHex(gasPrice), // 10%缓冲
      chainId: '0x38'
    };

    // 调起交易确认
    const txHash = await window.ethereum.request({
      method: 'eth_sendTransaction',
      params: [transactionParameters]
    });
    console.log('交易哈希:', txHash);
    // try {
    //   isLoading.value = true
    //   const web3 = new Web3(window.ethereum)
    //   if ((await web3.eth.getChainId()) !== 56) {
    //     throw new Error('请切换到BSC主网');
    //   }
    //   const tx = await web3.eth.sendTransaction({
    //     from,
    //     to,
    //     value: web3.utils.toWei(amount, 'ether'),
    //     gas: 21000
    //   })
    //   txHash.value = tx.transactionHash
    //   return tx
    // } catch (err) {
    //   error.value = err.message
    //   throw err
    // } finally {
    //   isLoading.value = false
    // }
  }

  // 使用BigNumber确保精度准确的版本
  const sendBNBWithPrecision = async (from, to, amount) => {
    try {
      const web3 = new Web3(window.ethereum);

      // 验证金额格式
      if (!amount) {
        throw new Error('Amount is required');
      }

      const gasPrice = await web3.eth.getGasPrice();

      // 使用 web3.utils.BN (BigNumber) 来处理精度
      // 手动计算 wei: amount * 10^18
      let valueInWei;

      const amountStr = amount.toString();

      if (amountStr.includes('.')) {
        // 处理小数
        const parts = amountStr.split('.');
        const integerPart = parts[0];
        const decimalPart = parts[1].padEnd(18, '0').substring(0, 18); // 补齐到18位或截取到18位

        // 手动构建wei值字符串
        valueInWei = integerPart + decimalPart;

        // 移除前导零
        valueInWei = valueInWei.replace(/^0+/, '') || '0';
      } else {
        // 整数情况
        valueInWei = amountStr + '0'.repeat(18);
      }

      const transactionParameters = {
        from,
        to,
        value: '0x' + BigInt(valueInWei).toString(16), // 转为16进制
        gas: '0x5208',
        gasPrice: web3.utils.toHex(gasPrice),
        chainId: '0x38'
      };

      const txHash = await window.ethereum.request({
        method: 'eth_sendTransaction',
        params: [transactionParameters]
      });

      return {
        success: true,
        txHash,
        error: null,
        isLoading: false
      };

    } catch (error) {
      console.error('Transfer failed:', error);
      return {
        success: false,
        txHash: null,
        error: error.message,
        isLoading: false
      };
    }
  };

  // 调试用：检查转换结果
  const debugAmountConversion = (amount) => {
    const amountStr = amount.toString();
    console.log('Original amount:', amountStr);

    // web3.utils.toWei 结果
    const web3 = new Web3();
    const weiFromWeb3 = web3.utils.toWei(amountStr, 'ether');
    console.log('web3.utils.toWei result:', weiFromWeb3);

    // 手动计算结果
    let manualWei;
    if (amountStr.includes('.')) {
      const parts = amountStr.split('.');
      const integerPart = parts[0];
      const decimalPart = parts[1].padEnd(18, '0').substring(0, 18);
      manualWei = integerPart + decimalPart;
      manualWei = manualWei.replace(/^0+/, '') || '0';
    } else {
      manualWei = amountStr + '0'.repeat(18);
    }
    console.log('Manual calculation result:', manualWei);
    console.log('Results match:', weiFromWeb3 === manualWei);

    return { web3Result: weiFromWeb3, manualResult: manualWei };
  };
  return { sendBNB: sendBNBWithPrecision, debugAmountConversion, error, isLoading }
}

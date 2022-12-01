/*     // JS Language

    // 小组项目：简易ATM

    // 里面现存有 100块钱
    // 如果存钱，就用输入钱数加上先存的钱数，之后弹出显示余额提示框
    // 如果取钱，就减去取的钱数，之后弹出显示余额提示框
    // 如果显示余额，就输出余额
    // 如果退出，弹出退出信息提示框
    // 1. 存钱
    // 2. 取钱
    // 3. 显示余额
    // 4. 退出

    // 弹出输入框提示用户根据显示的序号及对应的功能输入对应的值
    var options = prompt('欢迎光临\n请正确输入您需要的操作:\n1.存钱\n2.取钱\n3.显示余额\n4.退出');
    // 初始化存款有100元
    var deposit = 100,
        // 存钱
        saveMoney,
        // 取钱
        withdrawMoney,
        // 显示余额
        showBalance;
    // 判断是否非数字或者为空且提供3次输入机会，3次过后自动退出ATM功能
    if ((isNaN(options) || options == '' || options == ' ' || options == ' ')) {
        alert('您输入的不是一个数字，请重新输入\n温馨提示：您还有2次输入机会');
        options = prompt('欢迎光临\n请正确输入您需要的操作:\n1.存钱\n2.取钱\n3.显示余额\n4.退出');
        if (isNaN(options) || options == '' || options == ' ') {
            alert('您输入的不是一个数字，请重新输入\n温馨提示：您还有1次输入机会');
            options = prompt('欢迎光临\n请正确输入您需要的操作:\n1.存钱\n2.取钱\n3.显示余额\n4.退出');
            if (isNaN(options) || options == '' || options == ' ') {
                alert('您的输入有误，系统即将退出...');
            }
        }
        // 当选择退出值时， 系统退出初始化金额为： 100 元
    } else if (options == 4) {
        alert('系统已退出，请刷新页面重新载入，初始化余额为：100元');
    }

    // 存钱
    while (options == 1) {
        // 获取存钱的金额
        saveMoney = prompt('请输入您要存储的金额（单位为元）\n当前余额：' + deposit + '元');
        deposit += parseInt(saveMoney);
        alert('本次存入：' + saveMoney + '元\n当前余额：' + deposit + '元');
        options = prompt('欢迎光临\n请正确输入您需要的操作:\n1.存钱\n2.取钱\n3.显示余额\n4.退出');
        // 判断是否非数字或者为空且提供3次输入机会，3次过后自动退出ATM功能
        if ((isNaN(options) || options == '' || options == ' ')) {
            alert('您输入的不是一个数字，请重新输入\n温馨提示：您还有2次输入机会');
            options = prompt('欢迎光临\n请正确输入您需要的操作:\n1.存钱\n2.取钱\n3.显示余额\n4.退出');
            if (isNaN(options) || options == '' || options == ' ') {
                alert('您输入的不是一个数字，请重新输入\n温馨提示：您还有1次输入机会');
                options = prompt('欢迎光临\n请正确输入您需要的操作:\n1.存钱\n2.取钱\n3.显示余额\n4.退出');
                if (isNaN(options) || options == '' || options == ' ') {
                    alert('您的输入有误，系统即将退出...');
                }
            }
            // 当选择退出值时， 系统退出初始化金额为： 100 元
        } else if (options == 4) {
            alert('系统已退出，请刷新页面重新载入，初始化余额为：100元');
        }
    }
    // 取钱
    while (options == 2) {
        // 获取取钱的金额
        withdrawMoney = prompt('请输入您要取出的金额（单位为元）\n当前余额：' + deposit + '元');
        if (withdrawMoney > deposit) {
            alert('您的余额不足，本次您输入取出的金额为：' + withdrawMoney + '元，当前余额为：' + deposit + '元');
            options = prompt('欢迎光临\n请正确输入您需要的操作:\n1.存钱\n2.取钱\n3.显示余额\n4.退出');
            // 判断是否非数字或者为空且提供3次输入机会，3次过后自动退出ATM功能
            if ((isNaN(options) || options == '' || options == ' ')) {
                alert('您输入的不是一个数字，请重新输入\n温馨提示：您还有2次输入机会');
                options = prompt('欢迎光临\n请正确输入您需要的操作:\n1.存钱\n2.取钱\n3.显示余额\n4.退出');
                if (isNaN(options) || options == '' || options == ' ') {
                    alert('您输入的不是一个数字，请重新输入\n温馨提示：您还有1次输入机会');
                    options = prompt('欢迎光临\n请正确输入您需要的操作:\n1.存钱\n2.取钱\n3.显示余额\n4.退出');
                    if (isNaN(options) || options == '' || options == ' ') {
                        alert('您的输入有误，系统即将退出...');
                    }
                }
                // 当选择退出值时， 系统退出初始化金额为： 100 元
            } else if (options == 4) {
                alert('系统已退出，请刷新页面重新载入，初始化余额为：100元');
            }

        } else {
            deposit -= parseInt(withdrawMoney);
            alert('本次取出：' + withdrawMoney + '元\n当前余额：' + deposit + '元');
            options = prompt('欢迎光临\n请正确输入您需要的操作:\n1.存钱\n2.取钱\n3.显示余额\n4.退出');
            // 判断是否非数字或者为空且提供3次输入机会，3次过后自动退出ATM功能
            if ((isNaN(options) || options == '' || options == ' ')) {
                alert('您输入的不是一个数字，请重新输入\n温馨提示：您还有2次输入机会');
                options = prompt('欢迎光临\n请正确输入您需要的操作:\n1.存钱\n2.取钱\n3.显示余额\n4.退出');
                if (isNaN(options) || options == '' || options == ' ') {
                    alert('您输入的不是一个数字，请重新输入\n温馨提示：您还有1次输入机会');
                    options = prompt('欢迎光临\n请正确输入您需要的操作:\n1.存钱\n2.取钱\n3.显示余额\n4.退出');
                    if (isNaN(options) || options == '' || options == ' ') {
                        alert('您的输入有误，系统即将退出...');
                    }
                }
                // 当选择退出值时， 系统退出初始化金额为： 100 元
            } else if (options == 4) {
                alert('系统已退出，请刷新页面重新载入，初始化余额为：100元');
            }
            // 存钱
            while (options == 1) {
                // 获取存钱的金额
                saveMoney = prompt('请输入您要存储的金额（单位为元）\n当前余额：' + deposit + '元');
                deposit += parseInt(saveMoney);
                alert('本次存入：' + saveMoney + '元\n当前余额：' + deposit + '元');
                options = prompt('欢迎光临\n请正确输入您需要的操作:\n1.存钱\n2.取钱\n3.显示余额\n4.退出');
                // 判断是否非数字或者为空且提供3次输入机会，3次过后自动退出ATM功能
                if ((isNaN(options) || options == '' || options == ' ')) {
                    alert('您输入的不是一个数字，请重新输入\n温馨提示：您还有2次输入机会');
                    options = prompt('欢迎光临\n请正确输入您需要的操作:\n1.存钱\n2.取钱\n3.显示余额\n4.退出');
                    if (isNaN(options) || options == '' || options == ' ') {
                        alert('您输入的不是一个数字，请重新输入\n温馨提示：您还有1次输入机会');
                        options = prompt('欢迎光临\n请正确输入您需要的操作:\n1.存钱\n2.取钱\n3.显示余额\n4.退出');
                        if (isNaN(options) || options == '' || options == ' ') {
                            alert('您的输入有误，系统即将退出...');
                        }
                    }
                    // 当选择退出值时， 系统退出初始化金额为： 100 元
                } else if (options == 4) {
                    alert('系统已退出，请刷新页面重新载入，初始化余额为：100元');
                }
            }
        }
        // 存钱
        while (options == 1) {
            // 获取存钱的金额
            saveMoney = prompt('请输入您要存储的金额（单位为元）\n当前余额：' + deposit + '元');
            deposit += parseInt(saveMoney);
            alert('本次存入：' + saveMoney + '元\n当前余额：' + deposit + '元');
            options = prompt('欢迎光临\n请正确输入您需要的操作:\n1.存钱\n2.取钱\n3.显示余额\n4.退出');
            // 判断是否非数字或者为空且提供3次输入机会，3次过后自动退出ATM功能
            if ((isNaN(options) || options == '' || options == ' ')) {
                alert('您输入的不是一个数字，请重新输入\n温馨提示：您还有2次输入机会');
                options = prompt('欢迎光临\n请正确输入您需要的操作:\n1.存钱\n2.取钱\n3.显示余额\n4.退出');
                if (isNaN(options) || options == '' || options == ' ') {
                    alert('您输入的不是一个数字，请重新输入\n温馨提示：您还有1次输入机会');
                    options = prompt('欢迎光临\n请正确输入您需要的操作:\n1.存钱\n2.取钱\n3.显示余额\n4.退出');
                    if (isNaN(options) || options == '' || options == ' ') {
                        alert('您的输入有误，系统即将退出...');
                    }
                }
                // 当选择退出值时， 系统退出初始化金额为： 100 元
            } else if (options == 4) {
                alert('系统已退出，请刷新页面重新载入，初始化余额为：100元');
            }
        }
    }
    // 显示余额
    while (options == 3) {
        // 显示余额
        showBalance = deposit,
            alert('您的当前余额为：' + showBalance + '元');
        options = prompt('欢迎光临\n请正确输入您需要的操作:\n1.存钱\n2.取钱\n3.显示余额\n4.退出');
        // 判断是否非数字或者为空且提供3次输入机会，3次过后自动退出ATM功能
        if ((isNaN(options) || options == '' || options == ' ')) {
            alert('您输入的不是一个数字，请重新输入\n温馨提示：您还有2次输入机会');
            options = prompt('欢迎光临\n请正确输入您需要的操作:\n1.存钱\n2.取钱\n3.显示余额\n4.退出');
            if (isNaN(options) || options == '' || options == ' ') {
                alert('您输入的不是一个数字，请重新输入\n温馨提示：您还有1次输入机会');
                options = prompt('欢迎光临\n请正确输入您需要的操作:\n1.存钱\n2.取钱\n3.显示余额\n4.退出');
                if (isNaN(options) || options == '' || options == ' ') {
                    alert('您的输入有误，系统即将退出...');
                }
            }
            // 当选择退出值时， 系统退出初始化金额为： 100 元
        } else if (options == 4) {
            alert('系统已退出，请刷新页面重新载入，初始化余额为：100元');
        }
        // 存钱
        while (options == 1) {
            // 获取存钱的金额
            saveMoney = prompt('请输入您要存储的金额（单位为元）\n当前余额：' + deposit + '元');
            deposit += parseInt(saveMoney);
            alert('本次存入：' + saveMoney + '元\n当前余额：' + deposit + '元');
            options = prompt('欢迎光临\n请正确输入您需要的操作:\n1.存钱\n2.取钱\n3.显示余额\n4.退出');
            // 判断是否非数字或者为空且提供3次输入机会，3次过后自动退出ATM功能
            if ((isNaN(options) || options == '' || options == ' ')) {
                alert('您输入的不是一个数字，请重新输入\n温馨提示：您还有2次输入机会');
                options = prompt('欢迎光临\n请正确输入您需要的操作:\n1.存钱\n2.取钱\n3.显示余额\n4.退出');
                if (isNaN(options) || options == '' || options == ' ') {
                    alert('您输入的不是一个数字，请重新输入\n温馨提示：您还有1次输入机会');
                    options = prompt('欢迎光临\n请正确输入您需要的操作:\n1.存钱\n2.取钱\n3.显示余额\n4.退出');
                    if (isNaN(options) || options == '' || options == ' ') {
                        alert('您的输入有误，系统即将退出...');
                    }
                }
                // 当选择退出值时， 系统退出初始化金额为： 100 元
            } else if (options == 4) {
                alert('系统已退出，请刷新页面重新载入，初始化余额为：100元');
            }
            // 取钱
            while (options == 2) {
                // 获取取钱的金额
                withdrawMoney = prompt('请输入您要取出的金额（单位为元）\n当前余额：' + deposit + '元');
                if (withdrawMoney > deposit) {
                    alert('您的余额不足，本次您输入取出的金额为：' + withdrawMoney + '元，当前余额为：' + deposit + '元');
                    options = prompt('欢迎光临\n请正确输入您需要的操作:\n1.存钱\n2.取钱\n3.显示余额\n4.退出');
                    // 判断是否非数字或者为空且提供3次输入机会，3次过后自动退出ATM功能
                    if ((isNaN(options) || options == '' || options == ' ')) {
                        alert('您输入的不是一个数字，请重新输入\n温馨提示：您还有2次输入机会');
                        options = prompt('欢迎光临\n请正确输入您需要的操作:\n1.存钱\n2.取钱\n3.显示余额\n4.退出');
                        if (isNaN(options) || options == '' || options == ' ') {
                            alert('您输入的不是一个数字，请重新输入\n温馨提示：您还有1次输入机会');
                            options = prompt('欢迎光临\n请正确输入您需要的操作:\n1.存钱\n2.取钱\n3.显示余额\n4.退出');
                            if (isNaN(options) || options == '' || options == ' ') {
                                alert('您的输入有误，系统即将退出...');
                            }
                        }
                        // 当选择退出值时， 系统退出初始化金额为： 100 元
                    } else if (options == 4) {
                        alert('系统已退出，请刷新页面重新载入，初始化余额为：100元');
                    }

                } else {
                    deposit -= parseInt(withdrawMoney);
                    alert('本次取出：' + withdrawMoney + '元\n当前余额：' + deposit + '元');
                    options = prompt('欢迎光临\n请正确输入您需要的操作:\n1.存钱\n2.取钱\n3.显示余额\n4.退出');
                    // 判断是否非数字或者为空且提供3次输入机会，3次过后自动退出ATM功能
                    if ((isNaN(options) || options == '' || options == ' ')) {
                        alert('您输入的不是一个数字，请重新输入\n温馨提示：您还有2次输入机会');
                        options = prompt('欢迎光临\n请正确输入您需要的操作:\n1.存钱\n2.取钱\n3.显示余额\n4.退出');
                        if (isNaN(options) || options == '' || options == ' ') {
                            alert('您输入的不是一个数字，请重新输入\n温馨提示：您还有1次输入机会');
                            options = prompt('欢迎光临\n请正确输入您需要的操作:\n1.存钱\n2.取钱\n3.显示余额\n4.退出');
                            if (isNaN(options) || options == '' || options == ' ') {
                                alert('您的输入有误，系统即将退出...');
                            }
                        }
                        // 当选择退出值时， 系统退出初始化金额为： 100 元
                    } else if (options == 4) {
                        alert('系统已退出，请刷新页面重新载入，初始化余额为：100元');
                    }
                    // 存钱
                    while (options == 1) {
                        // 获取存钱的金额
                        saveMoney = prompt('请输入您要存储的金额（单位为元）\n当前余额：' + deposit + '元');
                        deposit += parseInt(saveMoney);
                        alert('本次存入：' + saveMoney + '元\n当前余额：' + deposit + '元');
                        options = prompt('欢迎光临\n请正确输入您需要的操作:\n1.存钱\n2.取钱\n3.显示余额\n4.退出');
                        // 判断是否非数字或者为空且提供3次输入机会，3次过后自动退出ATM功能
                        if ((isNaN(options) || options == '' || options == ' ')) {
                            alert('您输入的不是一个数字，请重新输入\n温馨提示：您还有2次输入机会');
                            options = prompt('欢迎光临\n请正确输入您需要的操作:\n1.存钱\n2.取钱\n3.显示余额\n4.退出');
                            if (isNaN(options) || options == '' || options == ' ') {
                                alert('您输入的不是一个数字，请重新输入\n温馨提示：您还有1次输入机会');
                                options = prompt('欢迎光临\n请正确输入您需要的操作:\n1.存钱\n2.取钱\n3.显示余额\n4.退出');
                                if (isNaN(options) || options == '' || options == ' ') {
                                    alert('您的输入有误，系统即将退出...');
                                }
                            }
                            // 当选择退出值时， 系统退出初始化金额为： 100 元
                        } else if (options == 4) {
                            alert('系统已退出，请刷新页面重新载入，初始化余额为：100元');
                        }
                    }
                }
                // 存钱
                while (options == 1) {
                    // 获取存钱的金额
                    saveMoney = prompt('请输入您要存储的金额（单位为元）\n当前余额：' + deposit + '元');
                    deposit += parseInt(saveMoney);
                    alert('本次存入：' + saveMoney + '元\n当前余额：' + deposit + '元');
                    options = prompt('欢迎光临\n请正确输入您需要的操作:\n1.存钱\n2.取钱\n3.显示余额\n4.退出');
                    // 判断是否非数字或者为空且提供3次输入机会，3次过后自动退出ATM功能
                    if ((isNaN(options) || options == '' || options == ' ')) {
                        alert('您输入的不是一个数字，请重新输入\n温馨提示：您还有2次输入机会');
                        options = prompt('欢迎光临\n请正确输入您需要的操作:\n1.存钱\n2.取钱\n3.显示余额\n4.退出');
                        if (isNaN(options) || options == '' || options == ' ') {
                            alert('您输入的不是一个数字，请重新输入\n温馨提示：您还有1次输入机会');
                            options = prompt('欢迎光临\n请正确输入您需要的操作:\n1.存钱\n2.取钱\n3.显示余额\n4.退出');
                            if (isNaN(options) || options == '' || options == ' ') {
                                alert('您的输入有误，系统即将退出...');
                            }
                        }
                        // 当选择退出值时， 系统退出初始化金额为： 100 元
                    } else if (options == 4) {
                        alert('系统已退出，请刷新页面重新载入，初始化余额为：100元');
                    }
                }
            }
        }
    } */
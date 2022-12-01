    // JS Language

    // 案例：打印九九乘法口诀
    /* 
        案例分析：
            1. 一共有9行，但是每行的个数不一样，因此需要用到双重for循环
            2. 外层的 for循环 控制行数 i，循环9此，可以打印 9行
            3. 内层的 for循环 控制每行公式 j
            4. 核心算法：每一行 “公式的个数”正好和“行数”一致， j <= i
            // 每行打印完毕，都需要重新换一行
    */
    // var str = '';
    // // 外循环控制行数
    // for (var i = 1; i <= 9; i++) {
    //     // 内循环控制每一行的个数 j <= i
    //     for (var j = 1; j <= i; j++) {
    //         // 1 × 2 = 2
    //         // str += '★';
    //         str += j + 'x' + i + '=' + i * j + '\t';
    //     }
    //     str += '\n';
    // }
    // console.log(str);


    // ----------------------------------------------------------------------------------------------------------------------------------
    // 固定一个数值输出相应的+ - * /算法口诀表
    var num = 9;
    // 加法口诀表
    // 在页面输出表格标签的主标签 table
    document.write('<table cellpadding="0" cellspacing="15">');
    // 在页面表格标签的 th标签里输出太阳图片且在CSS里添加样式
    document.write('<th><div class="sun"><img src="./images/sun.png" alt="sun.png"></div></th>');
    // 在页面表格标签中输出“标题名称”
    document.write('<th colspan="9">九九加法口诀表</th>');
    for (var a = 1; a <= num; a++) {
        // 外循环在每一行口诀表使出结束后在页面表格标签内部输出一个 tr标签 行标签
        document.write('<tr>');
        for (var b = 1; b <= a; b++) {
            // 内循环的每一次算法口诀都用 td单元格标签来包裹实现正布局的规整统一性
            document.write('<td>' + b + '+' + a + '=' + (b + a) + '</td>');
        }
        // 输出结束标签，也叫闭合标签
        document.write('</tr>');
    }
    // 输出结束标签，也叫闭合标签
    document.write('</table>');

    // ----------------------------------------------------------------------------------------------------------------------------------
    // 以下内容相同，只是算法不同
    // 减法口诀表
    document.write('<table cellpadding="0" cellspacing="15">');
    document.write('<th><div class="sun"><img src="./images/sun.png" alt="sun.png"></div></th>');
    document.write('<th colspan="9">九九减法口诀表</th>');
    for (var a = 1; a <= num; a++) {
        document.write('<tr>');
        for (var b = 1; b <= a; b++) {
            document.write('<td>' + a + '-' + b + '=' + (a - b) + '</td>');
        }
        document.write('</tr>');
    }
    document.write('</table>');

    // ----------------------------------------------------------------------------------------------------------------------------------
    // 乘法口诀表
    document.write('<table cellpadding="0" cellspacing="15">');
    document.write('<th><div class="sun"><img src="./images/sun.png" alt="sun.png"></div></th>');
    document.write('<th colspan="9">九九乘法口诀表</th>');
    for (var a = 1; a <= num; a++) {
        document.write('<tr>');
        for (var b = 1; b <= a; b++) {
            document.write('<td>' + b + '*' + a + '=' + (b * a) + '</td>');
        }
        document.write('</tr>');
    }
    document.write('</table>');

    // ----------------------------------------------------------------------------------------------------------------------------------
    // 除法口诀表
    document.write('<table cellpadding="0" cellspacing="15">');
    document.write('<th><div class="sun"><img src="./images/sun.png" alt="sun.png"></div></th>');
    document.write('<th colspan="9">九九除法口诀表（已取小数点后两位，四舍五入）</th>');
    for (var a = 1; a <= num; a++) {
        document.write('<tr>');
        for (var b = 1; b <= a; b++) {
            document.write('<td>' + a + '÷' + b + '=' + (a / b).toFixed(2) + '</td>');
        }
        document.write('</tr>');
    }
    document.write('</table>');
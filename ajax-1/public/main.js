console.log("我是main.js")
    /*JSON加载分页 */
let n = 1
getPage.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', `/page${n+1}`) //``，不是单引号
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const array = JSON.parse(request.response) //把page2渲染到页面上。page1已经在server.js写好了
            array.forEach(item => {
                const li = document.createElement('li')
                li.textContent = item.id
                xxx.appendChild(li)

            });
            n += 1 //请求下一页
        }
    }
    request.send()
}

getJSON.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/5.json')
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const object = JSON.parse(request.response) //解析方法：JSON.parse(request.response)将符合JSON语法的字符串转化成js对应类型的数据
            myName.textContent = object.name
            console.log(object)
        }
    }
    request.send()
}
getXML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/4.xml')
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const dom = request.responseXML //解析方法：request.responseXML，然后dom API
            const text = dom.getElementsByTagName('warning')[0].textContent
            console.log(text.trim())
        }
    }
    request.send()
}

getHTML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/3.html') //readyState=1
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            console.log("下载完成")
            if (request.status >= 200 && request.status < 300) {
                const div = document.createElement('div') //解析方法：innerHTML然后dom API
                div.innerHTML = request.response
                document.body.appendChild(div)
            } else {
                alert('加载html失败')
            }
        }
    }
    request.send() //readyState=2
}
getJS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/2.js')
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            console.log("下载完成")
            if (request.status >= 200 && request.status < 300) {
                const script = document.createElement('script')
                script.innerHTML = request.response
                document.body.appendChild(script)
            } else {
                alert('加载js失败')
            }
        }
    }
    request.send()

}
getCSS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/style.css')
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            console.log("下载完成")
            if (request.status >= 200 && request.status < 300) {
                const style = document.createElement('style')
                style.innerHTML = request.response
                document.head.appendChild(style)
            } else {
                alert('加载css失败')
            }
        }
    }
    request.send()
}
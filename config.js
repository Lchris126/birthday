// 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "送给我",      //这里,每句话结尾的最后一个逗号必须是英文的哦!! 很重要哦!!
        "最爱的小仙女",  // 同上...
        "不知不觉",
        "这是我们在一起的",
        "第八年了",
        "也是我们在一起的",
        "第2600天",
        "虽然我们接下来",
        "可能要过一段",
        "比较艰难的日子",
        "但是我一定会努力",
        "让你过上更好的生活",      
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        "最爱的小仙女": "./imgs/xiaokeai.png",
        // "今天是你的生日": "./imgs/birthday.jpg",
    },
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "Turn On Lights",
        play: "Play Music",
        balloons_flying: "Fly With Balloons",
        bannar_coming: "Let's Go",
        cake_fadein: "There Something Missing",
        light_candle: "Bling Bling",
        story: "A mesage for you",
        wish_message: "Marry You",
    }
};

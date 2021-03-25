declare namespace WechatJSSDK {
    type OpenTagList = 'wx-open-launch-weapp'
        | 'wx-open-launch-app';

    type JSApiList = 'updateAppMessageShareData'
        | 'updateTimelineShareData'
        | 'onMenuShareTimeline'
        | 'onMenuShareAppMessage'
        | 'onMenuShareQQ'
        | 'onMenuShareWeibo'
        | 'onMenuShareQZone'
        | 'startRecord'
        | 'stopRecord'
        | 'onVoiceRecordEnd'
        | 'playVoice'
        | 'pauseVoice'
        | 'stopVoice'
        | 'onVoicePlayEnd'
        | 'uploadVoice'
        | 'downloadVoice'
        | 'chooseImage'
        | 'previewImage'
        | 'uploadImage'
        | 'downloadImage'
        | 'translateVoice'
        | 'getNetworkType'
        | 'openLocation'
        | 'getLocation'
        | 'hideOptionMenu'
        | 'showOptionMenu'
        | 'hideMenuItems'
        | 'showMenuItems'
        | 'hideAllNonBaseMenuItem'
        | 'showAllNonBaseMenuItem'
        | 'closeWindow'
        | 'scanQRCode'
        | 'chooseWXPay'
        | 'openProductSpecificView'
        | 'addCard'
        | 'chooseCard'
        | 'openCard';

    type MenuList = 'menuItem:exposeArticle'
        | 'menuItem:setFont'
        | 'menuItem:dayMode'
        | 'menuItem:nightMode'
        | 'menuItem:refresh'
        | 'menuItem:profile'
        | 'menuItem:addContact'
        | 'menuItem:share:appMessage'
        | 'menuItem:share:timeline'
        | 'menuItem:share:qq'
        | 'menuItem:share:weiboApp'
        | 'menuItem:favorite'
        | 'menuItem:share:facebook'
        | 'menuItem:share:QZone'
        | 'menuItem:editTag'
        | 'menuItem:delete'
        | 'menuItem:copyUrl'
        | 'menuItem:originPage'
        | 'menuItem:readMode'
        | 'menuItem:openWithQQBrowser'
        | 'menuItem:openWithSafari'
        | 'menuItem:share:email'
        | 'menuItem:share:brand';

    /**
     * config接口注入的配置信息
     */
    interface ConfigOptions {
        // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
        debug?: boolean;
        // 公众号AppID
        appId: string;
        // 生成签名时间戳
        timestamp: string;
        // 生成签名随即传
        nonceStr: string;
        // 签名
        signature: string;
        // 需要使用的JS接口列表
        jsApiList: JSApiList[];
        // 可选，需要使用的开放标签列表，例如['wx-open-launch-app']
        openTagList?: OpenTagList[];
    }

    /**
     *
     */
    interface callback {
        success?: (res: object) => void;
        fail?: (res: object) => void;
        complete?: (res: object) => void;
        cancel?: (res: object) => void;
        trigger?: (res: object) => void;
    }

    /**
     * 判断当前客户端是否允许JS接口配置
     */
    interface checkJsAPIOptions extends callback {
        // 需要检测的JS接口列表，所有JS接口列表见文档,
        jsApiList: JSApiList[];
    }

    // 分享内容
    interface shareDataOptions extends callback {
        // 分享标题
        title: string;
        // 分享描述
        desc?: string;
        // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        link: string;
        // 分享图标
        imgUrl: string;
    }

    // 旧版分享给朋友自定义内容
    interface shareAppDataOptions extends shareDataOptions {
        // 分享类型,music、video或link，不填默认为link
        type?: 'music' | 'video' | 'link';
        // 如果type是music或video，则要提供数据链接，默认为空
        data?: string;
    }

    // 尺寸类型
    type sizeType = 'original' | 'compressed';
    // 图片来源
    type sourceType = 'album' | 'camera';

    // 选择图片
    interface chooseImageOptions extends callback {
        // 允许最多多少张
        count: number;
        // 尺寸类型 原图/压缩图 默认都有
        sizeType: sizeType[];
        // 指定来源 相册/相机 默认都要
        sourceType: sourceType[];
    }

    // 图片预览
    interface previewImageOptions extends callback {
        // 当前显示图片的地址
        current: string;
        // 需要预览图片的HTTP列表
        urls: string[];
    }

    // 上传图片
    interface uploadImageOptions extends callback {
        // 本地图片ID，通过chooseImage接口获得
        localId: string;
        // 是否显示进度条 默认1
        isShowProgressTips: 0 | 1;
    }

    // 下载图片
    interface downloadImageOptions extends callback {
        // 需要下载图片的服务端ID
        serverId: string;
        //是否显示进度条 默认1
        isShowProgressTips: 0 | 1;
    }

    // 获得本地图片
    interface getLocalImgDataOptions extends callback {
        // 本地图片ID
        localId: string;
    }

    // 播放音频接口
    interface playVoiceOptions extends callback {
        // 本地音频ID
        localId: string;
    }

    // 暂停播放音频
    interface pauseVoiceOptions extends callback {
        // 本地音频ID
        localId: string;
    }

    // 暂停播放音频
    interface stopVoiceOptions extends callback {
        // 本地音频ID
        localId: string;
    }

    // 上传音频
    interface uploadVoiceOptions extends callback {
        // 本地音频ID，通过stopRecord接口获得
        localId: string;
        // 是否显示进度条 默认1
        isShowProgressTips: 0 | 1;
    }

    // 下载音频
    interface downloadVoiceOptions extends callback {
        // 需要下载音频的服务端ID
        serverId: string;
        //是否显示进度条 默认1
        isShowProgressTips: 0 | 1;
    }

    // 识别音频
    interface translateVoiceOptions extends callback {
        // 本地音频ID，通过stopRecord接口获得
        localId: string;
        // 是否显示进度条 默认1
        isShowProgressTips: 0 | 1;
    }

    // 使用微信内置地图查看位置
    interface openLocationOptions extends callback {
        // 纬度，浮点数，范围为90 ~ -90
        latitude: number;
        // 经度，浮点数，范围为180 ~ -180。
        longitude: number;
        // 位置名
        name: string;
        // 地址详情说明
        address: string;
        // 地图缩放级别,整形值,范围从1~28。默认为最大
        scale: number;
        // 在查看位置界面底部显示的超链接,可点击跳转
        infoUrl: string
    }

    // 获取地理位置
    interface getLocationOptions extends callback {
        // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
        type: 'wgs84' | 'gcj02';
    }

    // 开启查找周边ibeacon设备
    interface startSearchBeaconsOptions extends callback {
        // 摇周边的业务ticket, 系统自动添加在摇出来的页面链接后面
        ticket: string;
    }

    // 批量隐藏功能按钮
    interface hideMenuItemsOptions extends callback {
        // 要隐藏的菜单项
        menuList: MenuList[];
    }

    // 批量显示功能按钮
    interface showMenuItemsOptions extends callback {
        // 要显示的菜单项
        menuList: MenuList[];
    }

    // 可以指定扫二维码还是一维码，默认二者都有
    type ScanType = 'qrCode' | 'barCode';

    // 调起微信扫一扫
    interface scanQRCodeOptions extends callback {
        // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
        needResult: 0 | 1;
        // 可以指定扫二维码还是一维码，默认二者都有
        scanType: ScanType[];
    }

    // 跳转微信商品页
    interface openProductSpecificViewOptions extends callback {
        // 商品id
        productId: string
        // 0.默认值，普通商品详情页1.扫一扫商品详情页2.小店商品详情页
        viewType: 0 | 1 | 2;
    }

    // 拉取适用卡券列表并获取用户选择
    interface chooseCardOptions extends callback {
        // 门店id
        shopId: string;
        // 卡券类型
        cardType: string;
        // 卡券ID
        cardId: string;
        // 时间戳
        timestamp: number;
        // 签名随机串
        nonceStr: string;
        // 签名方式 默认SHA1
        signType?: string;
        // 卡券签名
        cardSign: string;
    }

    // 卡券信息
    type AddCardList = {
        // 卡券ID
        cardId: string;
        // 卡券附属信息
        cardExt: string;
    }

    // 批量添加卡券
    interface addCardOptions extends callback {
        // 卡券列表
        cardList: AddCardList[];
    }

    // 打开卡券List
    type OpenCardList = {
        // 卡券ID
        cardId: string;
        // 卡券Code
        code: string;
    }

    // 查看微信卡包中的卡券
    interface openCardOptions extends callback {
        cardList: openCardOptions[];
    }

    // 微信支付
    interface chooseWxPayOptions extends callback {
        // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
        timestamp: number;
        // 支付签名随机串，不长于 32 位
        nonceStr: string;
        // 统一支付接口返回的prepay_id参数值 提交格式如：prepay_id=\*\*\*）
        package: string;
        // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
        signType: 'SHA1' | 'MD5';
        // 支付签名
        paySign: string;
    }

    /**
     * 注入权限验证配置
     * 如果要使用js-sdk必须调用该接口注入配置信息，否则无法使用
     * 当您的应用是SPA模式时，建议您在改变URL的时候调用
     * @param config
     */
    function config(config: ConfigOptions): void;

    /**
     * 当config通过之后，会调用该方法
     * @param success
     */
    function ready(success: () => void): void;

    /**
     * 当config鉴权失败，会调用该方法
     * @param error
     */
    function error(error: (res: object) => void): void;

    /**
     * 自定义“分享给朋友”及“分享到QQ”按钮的分享内容
     * 客户端6.7.2+ && JSSDK 1.4.0+ 可用
     * @param options
     */
    function updateAppMessageShareData(options: shareDataOptions): void;

    /**
     * 自定义“分享到朋友圈”及“分享到QQ空间”按钮的分享内容
     * 客户端6.7.2+ && JSSDK 1.4.0+ 可用
     * @param options
     */
    function updateTimelineShareData(options: shareDataOptions): void;

    /**
     * 获取“分享到朋友圈”按钮点击状态及自定义分享内容
     * 即将废弃，建议使用updateTimelineShareData
     * @param options
     */
    function onMenuShareTimeline(options: shareDataOptions): void;

    /**
     * 获取“分享给朋友”按钮点击状态及自定义分享内容
     * 即将废弃，建议使用updateAppMessageShareData
     * @param options
     */
    function onMenuShareAppMessage(options: shareAppDataOptions): void;


    /**
     * 获取“分享到QQ”按钮点击状态及自定义分享内容接口
     * 即将废弃，建议使用updateAppMessageShareData
     * @param options
     */
    function onMenuShareQQ(options: shareDataOptions): void;

    /**
     * 获取“分享到腾讯微博”按钮点击状态及自定义分享内容接口
     * @param options
     */
    function onMenuShareWeibo(options: shareDataOptions): void;

    /**
     * 获取“分享到QQ空间”按钮点击状态及自定义分享内容
     * 即将废弃，建议使用updateTimelineShareData
     * @param options
     */
    function onMenuShareQZone(options: shareDataOptions): void;


    /**
     * 判断当前客户端版本是否支持指定JS接口
     * 客户端6.0.2新引入的一个预留接口，第一期开放的接口均可不使用checkJsApi来检测。
     * @param options
     */
    function checkJsApi(options: checkJsAPIOptions): void;

    /**
     * 拍照/相册中选择图片
     * @param options
     */
    function chooseImage(options: chooseImageOptions): void;

    /**
     * 图片预览
     * @param options
     */
    function previewImage(options: previewImageOptions): void;

    /**
     * 图片上传
     * @param options
     */
    function uploadImage(options: uploadImageOptions): void;

    /**
     * 图片下载
     * @param options
     */
    function downloadImage(options: downloadImageOptions): void;

    /**
     * 获得本地图片
     * 只在 iOS WKWebview 下提供，用于兼容 iOS WKWebview 不支持 localId 直接显示图片的问题
     * @param options
     */
    function getLocalImgData(options: getLocalImgDataOptions): void;

    /**
     * 开始录音
     */
    function startRecord(options: callback): void;

    /**
     * 停止录音
     * @param options
     */
    function stopRecord(options: callback): void;

    /**
     * 监听录音自动停止
     * @param options
     */
    function onVoiceRecordEnd(options: callback): void;

    /**
     * 播放语音
     * @param options
     */
    function playVoice(options: playVoiceOptions): void;

    /**
     * 暂停播放音频
     * @param options
     */
    function pauseVoice(options: pauseVoiceOptions): void;

    /**
     * 停止播放音频
     * @param options
     */
    function stopVoice(options: stopVoiceOptions): void;

    /**
     * 监听语音播放完毕
     * @param options
     */
    function onVoicePlayEnd(options: callback): void;

    /**
     * 上传语音
     * @param options
     */
    function uploadVoice(options: uploadVoiceOptions): void;

    /**
     * 下载语音
     * @param options
     */
    function downloadVoice(options: downloadVoiceOptions): void;

    /**
     * 识别音频并返回识别结果
     * @param options
     */
    function translateVoice(options: translateVoiceOptions): void;

    /**
     * 获得网络状态
     * @param options
     */
    function getNetworkType(options: callback): void;

    /**
     * 使用微信内置地图查看位置
     * @param options
     */
    function openLocation(options: openLocationOptions): void;

    /**
     * 获取地理位置
     * @param options
     */
    function getLocation(options: getLocationOptions): void;

    /**
     * 开启查找周边ibeacon设备
     * @param options
     */
    function startSearchBeacons(options: startSearchBeaconsOptions): void;

    /**
     * 关闭查找周边ibeacon设备
     * @param options
     */
    function stopSearchBeacons(options: callback): void;

    /**
     * 监听周边ibeacon设备
     * @param options
     */
    function onSearchBeacons(options: callback): void;

    /**
     * 关闭当前网页
     */
    function closeWindow(): void;

    /**
     * 批量隐藏功能按钮
     * @param options
     */
    function hideMenuItems(options: hideMenuItemsOptions): void;

    /**
     * 批量显示功能按钮
     * @param options
     */
    function showMenuItems(options: showMenuItemsOptions): void;

    /**
     * 隐藏所有非基础按钮
     * @param options
     */
    function hideAllNonBaseMenuItem(options: callback): void;

    /**
     * 显示所有功能按钮
     * @param options
     */
    function showAllNonBaseMenuItem(options: callback): void;

    /**
     * 调起微信扫一扫
     * @param options
     */
    function scanQRCode(options: scanQRCodeOptions): void;

    /**
     * 跳转微信商品页
     * @param options
     */
    function openProductSpecificView(options: openProductSpecificViewOptions): void;

    /**
     * 拉取适用卡券列表
     * @param options
     */
    function chooseCard(options: chooseCardOptions): void;

    /**
     * 批量添加卡券
     * @param options
     */
    function addCard(options: addCardOptions): void;

    /**
     * 查看微信卡包中的卡券
     * @param options
     */
    function openCard(options: openCardOptions): void;

    /**
     * 发起一个微信支付请求
     * @param options
     */
    function chooseWXPay(options: chooseWxPayOptions): void;

    /**
     * 共享收货地址
     * @param options
     */
    function openAddress(options: callback): void;
}

declare module 'wechat-jssdk-ts' {
    export = WechatJSSDK;
}

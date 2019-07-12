<template lang="html">
    <div >
        <h1 class="h1">et_wl </h1>
        <p>1231321321</p>
        <van-button type="default">默认按钮</van-button>
        <van-button type="primary">主要按钮</van-button>
        <van-button type="info">信息按钮</van-button>
        <van-button type="warning">警告按钮</van-button>
        <van-button type="danger">危险按钮</van-button>
        <van-button loading type="primary" />
        <van-button loading type="primary" loading-type="spinner" />
        <van-button loading type="danger" loading-text="加载中..." />
    </div>
</template>

<script src="./home.js"></script>
<style lang="stylus" scope>
.h1
    font-size 30px
    padding 0
    margin 0
p
    font-size 40px
</style>

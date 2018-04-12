<template>
    <div class="upload-img">
        <div class="cell__bd">
            <div class="uploader">
                <div class="uploader__bd">
                    <ul class="uploader__files clearfix" id="uploaderFiles">
                        <li v-for='(item,index) in items' :key='index' class='img-list'>
                            <img :src="item" alt="图片" ref='img'>
                            <span @click="deleteImg(index)">
                                <img src="../assets/imgs/pic_del.png" alt="删除图标">
                            </span>
                        </li>
                        <div class="uploader__input-box">
                            <input id="uploaderInput" class="uploader__input" type="file" accept="image/png,image/jpeg,image/jpg" multiple @change.capture='uploadImg($event)'>
                        </div>
                    </ul>
                    <div class="uploader__tips" v-show='!items.length'>
                        <h3>添加照片</h3>
                        <p>可上传症状部位、检查报告或其他病情资料</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                items:[]
            }
        },
        methods:{
            uploadImg(e){
                const _this = this;
                    // img = new Image();    
                for(let i= 0; i < e.target.files.length; i++ ) {
                    if(!e.target.accept.match(/.jpg|.jpeg|.png/i)){
                        alert('格式不正确');
                        return;
                    }
                    const reader = new FileReader();
                    reader.readAsDataURL(e.target.files[i]);
                    reader.onload = function(e) {
                        _this.items.push(e.target.result);
                        const src = e.target.result;
                        const img = new Image();
                        img.src = src;

                        img.onload = (e) => {
                            const w = img.width,
                                h = img.height,
                                quality = 0.8,
                                canvas = document.createElement('canvas'),
                                ctx = canvas.getContext('2d');
                            canvas.width = w;
                            canvas.height = h;
                            ctx.drawImage(img,0,0,w,h);
                            const base64 = canvas.toDataURL('image/png', 0.8);
                            console.log(`原图${(src.length/1024).toFixed(2)}kb`, `新图${(base64.length/1024).toFixed(2)}kb`);
                        }
                    }
                }    
            },
            deleteImg(i){
                this.items.splice(i,1);
            }
        }
    }
</script>
<style lang="less" scoped>
    @import '../assets/style/public.less';
    @bgColor:#d9d9d9;

    .upload-img{
        background-color: #fff;
        margin-top:1.2rem;
        .cell__bd{
            padding:1rem;
        }
    }
    .uploader__bd{
        position: relative;
        .uploader__tips{
            .position(absolute,6rem,0,100%,100%);
            h3 {
                .fontStyle(1.6rem,#000,.85);
            }
            p {
                .fontStyle(1.4rem,#000,.45);
            }
        }
    }

    .img-list {
        float: left;
        margin:0 1rem .5rem 0;
        position: relative;
        list-style:none;
        img  {
            width: 5rem;
            height: 5rem;
        }
        span {
            .position(absolute, 80%, -10%, 1rem, 1rem);
            img {
                width: 1.5rem;
                height: 1.5rem;
            }
        }
    }

    .uploader__input-box{
        float: left;
        .position(relative, 0, 0,4.8rem,4.8rem);
        margin-right:.9rem;
        margin-bottom:.9rem;
        border: 1px dotted @bgColor;
        &:before {
            content: " ";
            .position(absolute,50%,50%,0.2rem,2.95rem);
            transform: translate(-50%,-50%);
            background-color: @bgColor;
        }
        &:after {
            content: " ";
            .position(absolute,50%,50%,2.95rem,0.2rem);
            transform: translate(-50%,-50%);
            background-color: @bgColor;
        }
        .uploader__input{
            .position(absolute,0,0,100%,100%);
            z-index: 1;
            opacity: 0;
            -webkit-tap-highlight-color: rgba(0,0,0,0);
        }
    }
    
</style>

<template>
  <div class="wrapper">
	  <BUTTON @click="showout">GOGOGO</BUTTON>
		<van-overlay :show="show">
			<div class="wrap" @click="oop">
                    <div class="content block">
						<div class="before box"><img src="../../../public/img/2188.jpg" alt=""></div>
						<div class="after box"><img src="../../../public/img/2203.jpg" alt=""></div>
						<div class="up box"><img src="../../../public/img/2204.jpg" alt=""></div>
						<div class="down box"><img src="../../../public/img/2205.jpg" alt=""></div>
						<div class="left box"><img src="../../../public/img/2659.jpg" alt=""></div>
						<div class="right box"><img src="../../../public/img/3920.jpg" alt=""></div>
					</div>

			</div>
			</van-overlay>

	</div>
</template>

 <script>
 export default {
 data(){
	 return{
		 show:false
	 }
 },
 methods:{
	 showout(){
		 this.show=true
	 },
	 oop(){
	 this.show=false
 }
 },
 
 }
 </script>
 
 
<style scoped>
    


.wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  /* background: #000; */
}

.block {
  width: 25rem;
  height:  25rem;
  margin: auto;
  /* background-color: #fff; */
}
		*{
			margin: 0;
			padding: 0;
		}
		.wrapper{
			position: relative;
		}
		@keyframes wang{
			100% {
				transform:rotateY(360deg) rotateX(360deg);
			}
		}
		.content div img{
			width: 100%;
			height: 100%;	
		}
		.content{
			animation: wang 6s ease-in-out infinite;
			color: #fff;
			text-align: center;
			height: 15.625rem;
			width: 15.625rem;
			position: relative;
			transform-style: preserve-3d;		/*使子元素成3D显示*/
			/*background: #000;*/
		}
		.content:hover{
			animation-play-state: paused;		/*鼠标移入暂停动画*/
		}	
		.box{
			/* opacity: 0.7; */
			position: absolute;
			width: 15.625rem;
			height:15.625rem;
		}
		.before{
			transform: translateZ(7.8125rem);
			/* background:url(../../../public/img/2188.jpg); */
		}
		.after{
			transform: translateZ(-7.8125rem);
		}
		.left{
			transform: rotateY(-90deg) translateZ(7.8125rem);
		}
		.right{
			transform: rotateY(90deg) translateZ(7.8125rem);
		}
		.up{
			transform: rotateX(90deg) translateZ(7.8125rem);
				

		}
		.down{
			transform: rotateX(-90deg) translateZ(7.8125rem);
		

		}
	</style>


	


<script type="text/javascript">
    function imgDisplay(){
        var Div = document.getElementById('picList').getElementsByTagName('div');
        var divHeight = 160; //定义要改变值的大小
    
    //for循环
        for (var i = 0; i< Div.length; i++){
           Div[i].onmouseover = showImg;
           Div[i].onmouseout = hideImg;
        }
    
        
        function showImg(){
          //显示
          this.getElementsByTagName("a")[0].style.top = 0;         
        }
        
        function hideImg(){
          this.getElementsByTagName("a")[0].style.top = divHeight +"px";
          //隐藏
        }
    }
    imgDisplay();
</script>
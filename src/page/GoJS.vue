<template>
  <div id="main">
    <div id="gojsOne" class="gojs"></div>
    <div id="gojsTwo" class="gojs"></div>
    <div id="gojsThree" class="gojs"></div>
    <div id="gojsFour" class="gojs"></div>
  </div>
</template>

<script setup>
import { onMounted,ref } from 'vue'

onMounted(()=>{
  setDiagram()

  var $ = go.GraphObject.make
  const DiagramTwo = new go.Diagram("gojsTwo",{
    //设置布局
    // layout: $(go.TreeLayout,{
    //   //角度
    //   //angle: 90,
    //   //节点长度
    //   nodeSpacing: 200,
    //   //线长度
    //   layerSpacing: 100
    // })
  });

  //设置布局 GridLayout TreeLayout ForceDirectedLayout LayeredDigraphLayout CircularLayout
  DiagramTwo.layout = new go.ForceDirectedLayout();

  //节点
  //Horizontal:水平 Auto:默认 Table:配合row进行布局
  DiagramTwo.nodeTemplate = new go.Node("Table",{column: 1})
    //添加图片元素
    .add( new go
      .Picture({row: 0,column: 1,width: 50, height: 50 })
      .bind("source")
    )
    //添加文本元素
    .add( new go
      .TextBlock({row: 1,column: 1, stroke: "#333",})
      .bind("text")
    );

  //线(用的比较老式语法)
  DiagramTwo.linkTemplate =
    $(go.Link,
      $(go.Shape),
      $(go.Shape, { toArrow: "Standard" }),
      $(go.TextBlock, 
        new go.Binding("text", "text"))
    );

  //节点数据
  var nodeDataArray = [
    { key: "01" , text:"防火墙", source: "/gojs/01.png" ,color:"red"},
    { key: "02" , text: "交换机", source: "/gojs/02.png"},
    { key: "03" , text: "中继器", source: "/gojs/03.png"},
    { key: "04", text: "数据库", source: "/gojs/04.png"}
  ]
  //线数据
  var linkDataArray = [
    { from: "01", to: "02" ,text: "数据包" },
    { from: "02", to: "03" },
    { from: "03", to: "03" },
    { from: "01", to: "03" },
    { from: "01", to: "04" }
  ]
  //设置数据
  DiagramTwo.model = new go.GraphLinksModel(nodeDataArray,linkDataArray);
  //关闭动画
  DiagramTwo.animationManager.initialAnimationStyle = go.AnimationManager.None;
})

const setDiagram=()=>{
  const myDiagram = new go.Diagram('gojsOne',{
    "undoManager.isEnabled": true 
  });
  myDiagram.nodeTemplate = new go.Node("Auto")
    .add( new go
      .Shape("RoundedRectangle",{strokeWidth: 0,fill: "white" })
      .bind("fill", "color")
    )
    .add( new go
      .TextBlock({margin: 8, stroke: "#333" })
      .bind("text", "key")
    );
  //
  myDiagram.model = new go.GraphLinksModel(
    //节点数据
    [
      { key: "Alpha", color: "lightblue" },
      { key: "Beta", color: "orange" },
      { key: "Gamma", color: "lightgreen" },
      { key: "Delta", color: "pink" }
    ],
    //线性关系
    [
      { from: "Alpha", to: "Beta" },
      { from: "Alpha", to: "Gamma" },
      { from: "Beta", to: "Beta" },
      { from: "Gamma", to: "Delta" },
      { from: "Delta", to: "Alpha" }
    ]
  );
}


</script>

<style scoped>
#main{
  width: 100%;
  height: 100%;
}
.gojs{
  width: 50%;
  height: 50%;
  float: left;
  border:1px solid #ccc
}
</style>
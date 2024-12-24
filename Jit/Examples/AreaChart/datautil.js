var labelType, useGradients, nativeTextSupport, animate;

(function() {
  var ua = navigator.userAgent,
      iStuff = ua.match(/iPhone/i) || ua.match(/iPad/i),
      typeOfCanvas = typeof HTMLCanvasElement,
      nativeCanvasSupport = (typeOfCanvas == 'object' || typeOfCanvas == 'function'),
      textSupport = nativeCanvasSupport 
        && (typeof document.createElement('canvas').getContext('2d').fillText == 'function');
  //I'm setting this based on the fact that ExCanvas provides text support for IE
  //and that as of today iPhone/iPad current text support is lame
  labelType = (!nativeCanvasSupport || (textSupport && !iStuff))? 'Native' : 'HTML';
  nativeTextSupport = labelType == 'Native';
  useGradients = nativeCanvasSupport;
  animate = !(iStuff || !nativeCanvasSupport);
})();

var Log = {
  elem: false,
  write: function(text){
    if (!this.elem) 
      this.elem = document.getElementById('log');
    this.elem.innerHTML = text;
    this.elem.style.left = (500 - this.elem.offsetWidth / 2) + 'px';
  }
};


function init(){
  //init data
  var json = {
    "children": [
       {
         "children": [
           {
             "children": [], 
             "data": {
               "description": "임상의와 응용 프로그램 개발자는 신뢰와 좋은 의사 소통이 쉽게 손상되어 응용 프로그램과의 연결이 끊길 수 있으므로 기술과의 치료 관계에주의를 기울여야 한다. 혼합 요법을 사용하면 대면 세션에서 순응도가 높아질 수 있다.", 
               "$angularWidth": 7490, 
               "days": 111, 
               "$color": "#FCD9A1", 
               "size": 7490
             }, 
             "id": "Source/Coordinates/Comd.js", 
             "name": "디지털 치료세션 평가"
           }, 
           
         ], 
         "data": {
           "description": "Fixed polar interpolation problem when theta = pi", 
           "$color": "#B0AAF6", 
           "days": 2, 
           "$angularWidth": 1000, 
           "size": 13880
         }, 
         "id": "Source/Coordinates", 
         "name": "공익적 기록보전"
       }, 
       {
         "children": [
           {
             "children": [], 
             "data": {
               "description": "Scaling done right :)", 
               "$angularWidth": 14952, 
               "days": 3, 
               "$color": "#B2ABF4", 
               "size": 14952
             }, 
             "id": "Source/Core/Canvas.js", 
             "name": "정밀의료"
           }, 
          
           {
             "children": [], 
             "data": {
               "description": "$jit namespace and $jit() for append vis to Global\n    \n    Example:\n    \n    new $jit.Hypertree({\n      'injectInto': 'myvisContainer'\n    });", 
               "$angularWidth": 5838, 
               "days": 111, 
               "$color": "#FCD9A1", 
               "size": 5838
             }, 
             "id": "Source/Core/Fx.js", 
             "name": "의료인공지능"
           }
         ], 
         "data": {
           "description": "개인 맞춤형 신약 개발", 
           "$color": "#B2ABF4", 
           "days": 3, 
           "$angularWidth": 1000, 
           "size": 35549
         }, 
         "id": "Source/Core", 
         "name": "임상 과학 연구"
       }, 
      
       {
         "children": [
           {
             "children": [], 
             "data": {
               "description": "Animated TreeMaps", 
               "$angularWidth": 1652, 
               "days": 3, 
               "$color": "#B2ABF4", 
               "size": 1652
             }, 
             "id": "Source/Graph/Graph.Geom.js", 
             "name": "Graph.Geom.js"
           }, 
          
           {
             "children": [], 
             "data": {
               "description": "Added new Canvas class with zoom/pan options", 
               "$angularWidth": 9512, 
               "days": 5, 
               "$color": "#B6AEEF", 
               "size": 9512
             }, 
             "id": "Source/Graph/Graph.Label.js", 
             "name": "Graph.Label.js"
           }, 
        
           {
             "children": [], 
             "data": {
               "description": "Bug Fix Extras + Tweaking examples", 
               "$angularWidth": 18950, 
               "days": 19, 
               "$color": "#D2BFD0", 
               "size": 18950
             }, 
             "id": "Source/Graph/Graph.Plot.js", 
             "name": "모바일융합컴퓨팅"
           }, 
           {
             "children": [], 
             "data": {
               "description": "(Re)-Implemented nodeTypes using node/edgeHelpers\n    \n    Code is cleaner and NodeTypes are now easier to implement.", 
               "$angularWidth": 6947, 
               "days": 32, 
               "$color": "#ECCFB3", 
               "size": 6947
             }, 
             "id": "Source/Graph/Helpers.js", 
             "name": "(IoMT) 임베디드시스템"
           }
         ], 
         "data": {
           "description": "기존 의료기기사업과 연계를 통해 심리 검사 서비스나 수면기록 어플리케이션 등 데이터를 조합하면 생활습관이나 건강상태를 토대로 최적의 정신건강 치료법을 개척", 
           "$color": "#B2ABF4", 
           "days": 3, 
           "$angularWidth": 1000, 
           "size": 87820
         }, 
         "id": "Source/Graph", 
         "name": "웨어러블 기기"
       }, 
       
       /**
        * 

        Physicians do not receive from the medical model the same explicit guidance in relating to their patients as in making diagnoses and pre scribing pharmacologic and other treatments.
        To meet this need, we offer a framework for expanding the model. Therapeutic contact takes place within a connexional, or transpersonal, dimension of human experience, within
        which basic human needs for connection and meaning ar met. although seldom explicitly recognized,
        connexional experience is basic to medical care.


        */
       {
         "children": [
           
           {
             "children": [], 
             "data": {
               "description": "Added gradients to AreaChart", 
               "$angularWidth": 386, 
               "days": 37, 
               "$color": "#F6D5A7", 
               "size": 386
             }, 
             "id": "Source/Options/Options.BarChart.js", 
             "name": "생체인식 및 감성케어"
           }, 
           {
             "children": [], 
             "data": {
               "description": "Add label types in Label configuration object.\n    \n    Add calls to getLabelData in plotLabel.", 
               "$angularWidth": 392, 
               "days": 26, 
               "$color": "#E0C7C0", 
               "size": 392
             }, 
             "id": "Source/Options/Options.Canvas.js", 
             "name": "휴대용 의료기기"
           }, 
           {
             "children": [], 
             "data": {
               "description": "", 
               "$angularWidth": 3856, 
               "days": 112, 
               "$color": "#FCD9A1", 
               "size": 3856
             }, 
             "id": "Source/Options/Options.Controller.js", 
             "name": "공익적 기록보전"
           }, 
          
         ], 
         "data": {
           "description": "Add an option to resize labels according to its pie slice", 
           "$color": "#AEA9F8", 
           "days": 1, 
           "$angularWidth": 1000, 
           "size": 13575
         }, 
         "id": "Source/Options", 
         "name": "교육기관"
       }, 
       {
         "children": [
           {
             "children": [], 
             "data": {
               "description": "환자의 검사 결과에 따라 환자의 진료상 필요한 경우에 맞춤형 처방전을 제공함으로써 자신의 건강을 쉽게 향상시킬수 있도록 한다.  예를들어 원격 관리 시스템을 제공해 환자가 적시에 적절한 용량으로 올바른 약물을 복용할 수 있도록 유도한다.", 
               "$angularWidth": 13636, 
               "days": 19, 
               "$color": "#D2BFD0", 
               "size": 13636
             }, 
             "id": "Source/Visualizations/AreaChart.js", 
             "name": "처방전 서비스"
           }, 
           {
             "children": [], 
             "data": {
               "description": "의료서비스 데이터 시스템으로 환자의 의료기록이 저장. 의료서비스 공급자 간에 정보를 전달하는 중심적인 역할을 하며 환자들의 진료기록, 처방전 뿐만 아니라 영상검사 결과를 비롯한 모든 의료관련 정보가 시스템이 저장된다. 환자는 본인의 의료기록을 검색하여 이전에 진행되었던 처방전 기록을 확인해 볼수 있다. 데이터는  개인의 건강에 막대한 영향을 미치는 사회적 결정 요인(식단 청결도, 교육, 이웃, 의료보험 여부, 경제적 안정성 등)을 이해하고, 복용해야하는 약물, 방문 빈도 등의 계획을 세우는 데 도움이 될 수 있을 뿐만 아니라 걷기, 체중 감량, 금연 등과 같이 변경하거나 적응하려고 하는 행동에 대한 계획도 제공할 수 있다. Note: “디지털은 끝이 아니라 수단이다.” 이는 디지털은 비즈니스 목표에 기여할 때만 가치가 있고 디지털은 일부 변환에 중요한 기여자가 아닐 수 있다는 뜻이다.  PSEMO는 플랫폼을 이해하고 이를 달성하기위한 기술의 역할에 대해 신중하게 파악해야 한다", 
               "$angularWidth": 12608, 
               "days": 15, 
               "$color": "#CABAD9", 
               "size": 12608
             }, 
             "id": "Source/Visualizations/BarChart.js", 
             "name": "환자 데이터 저장소"
           }, 
           {
             "children": [], 
             "data": {
               "description": "Added new Canvas class with zoom/pan options", 
               "$angularWidth": 16954, 
               "days": 5, 
               "$color": "#B6AEEF", 
               "size": 16954
             }, 
             "id": "Source/Visualizations/ForceDirected.js", 
             "name": "약물 섭취 디지털 정량화"
           }, 
            
           {
             "children": [], 
             "data": {
               "description": "Add an option to resize labels according to its pie slice", 
               "$angularWidth": 10762, 
               "days": 1, 
               "$color": "#AEA9F8", 
               "size": 10762
             }, 
             "id": "Source/Visualizations/PieChart.js", 
             "name": "의료정보 _의료 영상처리 이해 및 응용"
           }, 
           {
             "children": [], 
             "data": {
               "description": "원격 진료는 접근 과정의 편의성을 향상시킬 수 있다 (의료 제공자에게 필적)", 
               "$angularWidth": 18010, 
               "days": 5, 
               "$color": "#B6AEEF", 
               "size": 18010
             }, 
             "id": "Source/Visualizations/RGraph.js", 
             "name": "원격 진료"
           }, 
           
         
           {
             "children": [], 
             "data": {
               "description": "Animated TreeMaps", 
               "$angularWidth": 16472, 
               "days": 3, 
               "$color": "#B2ABF4", 
               "size": 16472
             }, 
             "id": "Source/Visualizations/Treemap.js", 
             "name": "대화형 심리치료 챗봇"
           }
         ], 
         "data": {
           "description": "디지털 플랫폼을 다양한 상황에서 의료 서비스를 개선하기 위해 사용", 
           "$color": "#AEA9F8", 
           "days": 1, 
           "$angularWidth": 1000, 
           "size": 186221
         }, 
         "id": "Source/Visualizations", 
         "name": "디지털 헬스케어"
       }
     ], 
     "data": {
       "$type": "none"
     }, 
     "id": "Source", 
     "name": "Source"
   };
    //end
    //init Sunburst
    var sb = new $jit.Sunburst({
        //id container for the visualization
        injectInto: 'infovis',
        //Distance between levels
        levelDistance: 90,
        //Change node and edge styles such as
        //color, width and dimensions.
        Node: {
          overridable: true,
          type: useGradients? 'gradient-multipie' : 'multipie'
        },
        //Select canvas labels
        //'HTML', 'SVG' and 'Native' are possible options
        Label: {
          type: labelType
        },
        //Change styles when hovering and clicking nodes
        NodeStyles: {
          enable: true,
          type: 'Native',
          stylesClick: {
            'color': '#33dddd'
          },
          stylesHover: {
            'color': '#dd3333'
          }
        },
        //Add tooltips
        Tips: {
          enable: true,
          onShow: function(tip, node) {
            var html = "<div class=\"tip-title\">" + node.name + "</div>"; 
            var data = node.data;
            if("days" in data) {
              html += "<b>Last modified:</b> " + data.days + " days ago";
            }
            if("size" in data) {
              html += "<br /><b>File size:</b> " + Math.round(data.size / 1024) + "KB";
            }
            tip.innerHTML = html;
          }
        },
        //implement event handlers
        Events: {
          enable: true,
          onClick: function(node) {
            if(!node) return;
            //Build detailed information about the file/folder
            //and place it in the right column.
            var html = "<h4>" + node.name + "</h4>", data = node.data;
            if("days" in data) {
              html += "<b>Last modified:</b> " + data.days + " days ago";
            }
            if("size" in data) {
              html += "<br /><br /><b>File size:</b> " + Math.round(data.size / 1024) + "KB";
            }
            if("description" in data) {
              html += "<br /><br /><b>Last commit was:</b><br /><pre>" + data.description + "</pre>";
            }
            $jit.id('inner-details').innerHTML = html;
            //hide tip
            sb.tips.hide();
            //rotate
            sb.rotate(node, animate? 'animate' : 'replot', {
              duration: 1000,
              transition: $jit.Trans.Quart.easeInOut
            });
          }
        },
        // Only used when Label type is 'HTML' or 'SVG'
        // Add text to the labels. 
        // This method is only triggered on label creation
        onCreateLabel: function(domElement, node){
          var labels = sb.config.Label.type,
              aw = node.getData('angularWidth');
          if (labels === 'HTML' && (node._depth < 2 || aw > 2000)) {
            domElement.innerHTML = node.name;
          } else if (labels === 'SVG' && (node._depth < 2 || aw > 2000)) {
            domElement.firstChild.appendChild(document.createTextNode(node.name));
          }
        },
        // Only used when Label type is 'HTML' or 'SVG'
        // Change node styles when labels are placed
        // or moved.
        onPlaceLabel: function(domElement, node){
          var labels = sb.config.Label.type;
          if (labels === 'SVG') {
            var fch = domElement.firstChild;
            var style = fch.style;
            style.display = '';
            style.cursor = 'pointer';
            style.fontSize = "0.8em";
            fch.setAttribute('fill', "#fff");
          } else if (labels === 'HTML') {
            var style = domElement.style;
            style.display = '';
            style.cursor = 'pointer';
            style.fontSize = "0.8em";
            style.color = "#ddd";
            var left = parseInt(style.left);
            var w = domElement.offsetWidth;
            style.left = (left - w / 2) + 'px';
          }
        }
   });
    //load JSON data.
    sb.loadJSON(json);
    //compute positions and plot.
    sb.refresh();
    //end
}

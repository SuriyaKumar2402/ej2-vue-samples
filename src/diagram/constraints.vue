<template>
<div>
<div class="control-section">
   <ejs-diagram style='display:block' ref="diagramObj" id="diagram" :width='width' :height='height' :rulerSettings='rulerSettings' :selectionChange='selectionChange' :selectedItems='selectedItems' :nodes='nodes' :connectors='connectors' :contextMenuSettings="contextMenuSettings" :onUserHandleMouseDown="onUserHandleMouseDown"></ejs-diagram>
</div>
  <div class="col-lg-2 property-section" style="float:right;margin-top:-720px; margin-right:-10px">
            <div class="property-panel-header">
               <p>Diagram Constraints</p>
            </div>
            <div class="row property-panel-content" style="padding-top: 5px;margin-left:-40px">
                <div class="row" style="padding-top: 8px">
                   <ejs-checkbox label="Zooming" :checked="true" :change="zoomingChange"></ejs-checkbox>
                </div>
                <div class="row" style="padding-top: 8px">
                   <ejs-checkbox label="Undo/Redo" :checked="true" :change="undoRedoChange"></ejs-checkbox>
                </div>
                <div class="row" style="padding-top: 8px">
                    <ejs-checkbox label="Editing" :checked="true" :change="editingChange"></ejs-checkbox>
                </div>
                <div class="row" style="padding-top: 8px">
                   <ejs-checkbox label="Context Menu" :checked="true" :change="contextChange"></ejs-checkbox>
                </div>
                <div class="row" style="padding-top: 8px">
                   <ejs-checkbox label="Selectable" :checked="true" :change="selectableChange"></ejs-checkbox>
                </div>
                <div class="row" style="padding-top: 8px">
                   <ejs-checkbox label="Draggable" :checked="true" :change="draggableChange"></ejs-checkbox>
                </div>
            </div>
            </div>
<div id="action-description">
  <p>
        This sample illustrates how node constraints are used to restrict end-users from performing certain operations on nodes and connector constraints are used to restrict end-users from performing certain operation on connectors.
    </p>
</div>
<div id="description">
    <p>This sample illustrates how node constraints are used to restrict end-users from performing certain operations on nodes and connector constraints are used to restrict end-users from performing certain operation on connectors.</p>
        <p>The <code>NodeConstraints</code> property allows you to enable or disable node behaviors like select, drag, resize, rotate, and delete.</p>
        <p>The <code>ConnectorConstraints</code> property allows you to enable or disable connector behaviors like select, drag, delete, drag source end, and drag target end.</p>
        <p>The <code>AnnotationConstraints</code> property allows you to enable or disable the annotation behavior, text editing.</p>
        <p> Using the <code>DiagramConstraints</code> property, enable or disable certain features of the diagram like zoom, undo/redo, context menu, drag, and select.</p>
</div>
</div>
</template>
<style scoped>
.property-panel-header{
    margin-left : -40px
}
</style>
<script>
import {
  Diagram,
  ShapeAnnotationModel,
  NodeModel,
  ConnectorModel,
  ConnectorConstraints,
  DiagramConstraints,
  AnnotationConstraints,
  SelectorConstraints,
  NodeConstraints,
   Node,
    ConnectorEditing,
    DiagramComponent,
    DiagramContextMenu,
    Inject,
    UndoRedo,
    UserHandleModel,
    ISelectionChangeEventArgs,
    ToolBase,
} from "@syncfusion/ej2-vue-diagrams";
import { CheckBoxComponent } from "@syncfusion/ej2-vue-buttons";

let diagramInstance;

var nodes = [
    {
        id:"textNode1",
        // Position of the node
        offsetX:340,
        offsetY: 50,
        // Size of the node
        width: 500,
        height: 50,
        //Sets type of the node
        shape: { type: 'Text', content: 'Use Node Constraints to restrict end-users from performing certain operations on Node.' },
        //Customizes the appearances such as text, font, fill, and stroke.
        style: { strokeColor: 'none', fill: 'none', color: 'black', textAlign: 'Center', },
        constraints:  NodeConstraints.None
       
    },
    {
        id:"rectangle",
        offsetX:80,
        offsetY:160,
        width: 80,
        height: 65,
        // style: { fill: '#6BA5D7', strokeColor: 'white' },
        shape: { type: 'Basic', shape: 'Rectangle' },
        annotations: [{ content: 'Selection = False', }],
        constraints: NodeConstraints.Default & ~ NodeConstraints.Select
    },
    {
        id:"ellipse",
        offsetX:190,
        offsetY:160,
        width: 80,
        height: 80,
        // style: { fill: '#6BA5D7', strokeColor: 'white' },
        shape: { type: 'Basic', shape: 'Ellipse',cornerRadius: 10 },
        annotations: [{ content: 'Dragging = False' }],
        constraints:  NodeConstraints.Default & ~ NodeConstraints.Drag
       
    },
    {
        id:"heptagon",
        offsetX:295,
        offsetY:160,
        width: 80,
        height: 80,
        // style: { fill: '#6BA5D7', strokeColor: 'white' },
        shape: { type: 'Basic', shape: 'Heptagon' },
        annotations: [{ content: 'Delete = False' }],
        constraints: NodeConstraints.Default & ~ NodeConstraints.Delete
    },
    {
        id:"directData",
        offsetX:410,
        offsetY:160,
        width: 80,
        height: 80,
        rotateAngle:-45,
        // style: { fill: '#6BA5D7', strokeColor: 'white' },
        shape: { type: 'Flow', shape: 'DirectData' },
        annotations: [{ content: 'Rotate = False' }],
        constraints: NodeConstraints.Default &~ NodeConstraints.Rotate
    },
    {
        id:"Plus",
        offsetX:530,
        offsetY:160,
        width: 80,
        height: 80,
        // style: { fill: '#6BA5D7', strokeColor: 'white' },
        shape: { type: 'Basic', shape: 'Plus' },
        annotations: [{ content: 'TextEdit = False',constraints: AnnotationConstraints.ReadOnly }],
    },
    {
        id:"decision",
        offsetX:630,
        offsetY:160,
        width: 80,
        height: 80,
        // style: { fill: '#6BA5D7', strokeColor: 'white' },
        shape: { type: 'Flow', shape: 'Decision' },
        annotations: [{ content: 'Resizing = False' }],
       constraints:NodeConstraints.Default & ~ NodeConstraints.Resize
    },
    {
        id:"textNode2",
        // Position of the node
        offsetX:350,
        offsetY: 280,
        // Size of the node
        width: 550,
        height: 50,
        //Sets type of the node
        shape: { type: 'Text', content: 'Use Connector Constraints to restrict end-users from performing certain operations on Connector.' },
        //Customizes the appearances such as text, font, fill, and stroke.
        style: { strokeColor: 'none', fill: 'none', color: 'black', textAlign: 'Center', },
        constraints:  NodeConstraints.None
    },
];

var connectors = [
 {
    id: "select",
    type: 'Orthogonal',
    annotations: [{ content: 'Selection = False' , horizontalAlignment: 'Right' , verticalAlignment: 'Bottom' }],
     constraints: ConnectorConstraints.Default & ~ ConnectorConstraints.Select,
     style: {
        strokeColor: '#6BA5D7',
        fill: '#6BA5D7',
        strokeWidth: 2
    },
    targetDecorator: {
        style: {
            fill: '#6BA5D7',
            strokeColor: '#6BA5D7'
        }
    },
    sourcePoint: {
        x: 40,
        y: 350
    },
    targetPoint: {
        x: 120,
        y: 430
    }
},
{
    id: "connector2",
    type: 'Orthogonal',
    annotations: [{ content: 'Dragging = True',horizontalAlignment: 'Right' , verticalAlignment: 'Bottom'  }],
    constraints: ConnectorConstraints.Default | ~ConnectorConstraints.Drag,
     style: {
        strokeColor: '#6BA5D7',
        fill: '#6BA5D7',
        strokeWidth: 2
    },
    targetDecorator: {
        style: {
            fill: '#6BA5D7',
            strokeColor: '#6BA5D7'
        }
    },
    sourcePoint: {
        x: 140,
        y: 350
    },
    targetPoint: {
        x: 220,
        y: 430
    }
},
{
    id: "delete",
    type: 'Orthogonal',
    annotations: [{ content: 'Delete = False',horizontalAlignment: 'Right' , verticalAlignment: 'Bottom'  }],
    constraints: (ConnectorConstraints.Default | ConnectorConstraints.DragSegmentThumb) &~(ConnectorConstraints.Delete | ConnectorConstraints.Drag),
     style: {
        strokeColor: '#6BA5D7',
        fill: '#6BA5D7',
        strokeWidth: 2
    },
    targetDecorator: {
        style: {
            fill: '#6BA5D7',
            strokeColor: '#6BA5D7'
        }
    },
    sourcePoint: {
        x: 250,
        y: 350
    },
    targetPoint: {
        x: 320,
        y: 430
    }
},
{
    id: "endThumb",
    type: 'Orthogonal',
    annotations: [{ content: 'EndThumb = False' ,horizontalAlignment: 'Right' , verticalAlignment: 'Bottom' }],
    constraints:(SelectorConstraints.All ) &~ ( SelectorConstraints.ConnectorSourceThumb | SelectorConstraints.ConnectorTargetThumb),
     style: {
        strokeColor: '#6BA5D7',
        fill: '#6BA5D7',
        strokeWidth: 2
    },
    targetDecorator: {
        style: {
            fill: '#6BA5D7',
            strokeColor: '#6BA5D7'
        }
    },
    sourcePoint: {
        x: 360,
        y: 350
    },
    targetPoint: {
        x: 440,
        y: 430
    }
},
{
    id: "draggable",
    type: 'Orthogonal',
    annotations: [{ content: 'EndDraggable = False',horizontalAlignment: 'Right' , verticalAlignment: 'Bottom'  }],
    constraints: (ConnectorConstraints.Default | ConnectorConstraints.DragSegmentThumb) &~(ConnectorConstraints.DragSourceEnd | ConnectorConstraints.DragTargetEnd),
     style: {
        strokeColor: '#6BA5D7',
        fill: '#6BA5D7',
        strokeWidth: 2
    },
    targetDecorator: {
        style: {
            fill: '#6BA5D7',
            strokeColor: '#6BA5D7'
        }
    },
    sourcePoint: {
        x: 460,
        y: 350
    },
    targetPoint: {
        x: 540,
        y: 430
    }
},
{
    id: "segmentThumb",
    type: 'Orthogonal',
    annotations: [{ content: 'SegmentThumb = False',horizontalAlignment: 'Right' , verticalAlignment: 'Bottom'  }],
    constraints: ConnectorConstraints.Default &~ ConnectorConstraints.Drag,
     style: {
        strokeColor: '#6BA5D7',
        fill: '#6BA5D7',
        strokeWidth: 2
    },
    targetDecorator: {
        style: {
            fill: '#6BA5D7',
            strokeColor: '#6BA5D7'
        }
    },
    sourcePoint: {
        x: 580,
        y: 350
    },
    targetPoint: {
        x: 660,
        y: 430
    }
},
];

let handles = [
{
            name: 'delete', pathData: "M 7.04 22.13 L 92.95 22.13 L 92.95 88.8 C 92.95 91.92 91.55 94.58 88.76 96.74 C 85.97 98.91 82.55 100 78.52 100 L 21.48 100 C 17.45 100 14.03 98.91 11.24 96.74 C 8.45 94.58 7.04 91.92 7.04 88.8 z M 32.22 0 L 67.78 0 L 75.17 5.47 L 100 5.47 L 100 16.67 L 0 16.67 L 0 5.47 L 24.83 5.47 z",
            visible: true, offset: 0.5, side: 'Bottom', margin: { top: 0, bottom: 0, left: 0, right: 0 }
        }
];

export default {
  components: {
    'ejs-diagram': DiagramComponent,
    'ejs-checkbox': CheckBoxComponent
  },  
  data: function() {
    return {
      width: "80%",
      height: "700px",
      nodes : nodes,
      connectors : connectors,
      rulerSettings : {
        showRulers : true
      },
      contextMenuSettings: { show: true },
      selectedItems : {
        constraints: SelectorConstraints.UserHandle,
        userHandles : handles
      },
       selectionChange :(args)=>{
         var diagram = document.getElementById("diagram").ej2_instances[0];
            if (args.state === 'Changing') {
                if (args.type === 'Addition') {
                    if (args.newValue.length > 0 && args.newValue[0].id === 'endThumb') {
                        diagram.selectedItems.constraints =
                            SelectorConstraints.All &
                                ~(SelectorConstraints.ConnectorSourceThumb |
                                    SelectorConstraints.ConnectorTargetThumb);
                    }
                    else {
                        diagram.selectedItems.constraints = SelectorConstraints.All;
                    }
                }
                else {
                    diagram.selectedItems.constraints = SelectorConstraints.All;
                }
            }
            if (args.state === 'Changed') {
                if (args.newValue.length > 0 && args.newValue[0] instanceof Node) {
                    diagram.selectedItems = {
                        constraints: SelectorConstraints.All | SelectorConstraints.UserHandle,
                        userHandles: handles,
                    };
                }
                else {
                    if (args.newValue && args.newValue.length > 0 && args.newValue[0].id !== 'endThumb') {
                        diagram.selectedItems = {
                            constraints: SelectorConstraints.All & ~SelectorConstraints.UserHandle,
                        };
                    }
                    else {
                        diagram.selectedItems = {
                            constraints: SelectorConstraints.All &
                                ~(SelectorConstraints.UserHandle |
                                    SelectorConstraints.ConnectorSourceThumb |
                                    SelectorConstraints.ConnectorTargetThumb),
                        };
                    }
                }
            }
    },
      zoomingChange :(args)=>{
        let diagram = document.getElementById("diagram").ej2_instances[0];
         diagram.constraints = diagram.constraints ^ DiagramConstraints.Zoom;
      },
      undoRedoChange :(args)=>{
        let diagram = document.getElementById("diagram").ej2_instances[0];
        diagram.constraints = diagram.constraints ^ DiagramConstraints.UndoRedo ;
        diagram.dataBind();
      },
      editingChange : (args)=>{
        let diagram = document.getElementById("diagram").ej2_instances[0];
        for (var i= 0; i < diagram.nodes.length; i++) {
            var node = diagram.nodes[i];
            for (var j= 0; j < node.annotations.length; j++) {
            if (node.annotations[j].content) {
                if (args.checked) {
                if (node.id !== 'Plus') {
                    node.annotations[j].constraints =
                    node.annotations[j].constraints ^
                    AnnotationConstraints.ReadOnly;
                }
                } else {
                node.annotations[j].constraints =
                    node.annotations[j].constraints | AnnotationConstraints.ReadOnly;
                }
            }
            }
        }
        for (var x = 0; x < diagram.connectors.length; x++) {
            var connector = diagram.connectors[x];
            for (var y= 0; y < connector.annotations.length; y++) {
            if (connector.annotations[y].content) {
                if (args.checked) {
                if (connector.id === 'select') {
                    connector.constraints =
                    connector.constraints & ~(ConnectorConstraints.Select);
                } else {
                    connector.annotations[y].constraints =
                    connector.annotations[y].constraints ^
                    AnnotationConstraints.ReadOnly;
                }
                } else {
                connector.annotations[y].constraints =
                    connector.annotations[y].constraints ^
                    AnnotationConstraints.ReadOnly;
                }
            }
            }
        }
        diagram.dataBind();
      },
      contextChange : (args)=>{
        let diagram = document.getElementById("diagram").ej2_instances[0];
          if (args.checked) {
            diagram.contextMenuSettings.show = true;
            diagram.refresh();
            } 
        else {
            diagram.contextMenuSettings.show = false;
        }
            diagram.dataBind();
      },
      onUserHandleMouseDown : (args)=>{
        let diagram = document.getElementById("diagram").ej2_instances[0];
        if (args.element.name === 'delete') {
            diagram.remove();
        }
     },
      selectableChange :(args)=>{
      let diagram = document.getElementById("diagram").ej2_instances[0];
        for (let i = 0; i < diagram.nodes.length; i++) {
            let node = diagram.nodes[i];
                if (args.checked) {
                    node.constraints  = node.constraints | NodeConstraints.Select;
                } 
                else 
                {
                    node.constraints = node.constraints &~  NodeConstraints.Select;
                }
            diagram.dataBind();
        }
        for (let j = 0; j < diagram.connectors.length; j++) {
            let connector = diagram.connectors[j];
                if (args.checked) {
                    if(connector.id ==="select"){
                        connector.constraints= connector.constraints^ ConnectorConstraints.Select;
                    }
                    else{
                        connector.constraints  = connector.constraints | ConnectorConstraints.Select;
                    }
                } 
                else
                {
                    if(connector.id ==="endThumb"){
                        connector.constraints= connector.constraints^ ConnectorConstraints.Select;
                    }
                    else
                    {
                    connector.constraints = connector.constraints &~ ConnectorConstraints.Select;
                    }
                    diagram.dataBind();
               }
        }
    },
    draggableChange : (args)=>{
    let diagram = document.getElementById("diagram").ej2_instances[0];
        for (let i = 0; i < diagram.nodes.length; i++) {
    let nodes = diagram.nodes[i];
    if (args.checked) {
         if(nodes.id ==="ellipse"){
            nodes.constraints = NodeConstraints.Default & ~ NodeConstraints.Drag;
        }
        else{
            nodes.constraints = nodes.constraints | NodeConstraints.Drag;
        }
    } 
    else {
          nodes.constraints = nodes.constraints &~ NodeConstraints.Drag;
    }
    diagram.dataBind();
}
for (let j  = 0; j < diagram.connectors.length; j++) {
  let connectors = diagram.connectors[j];
    if (args.checked) {
        connectors.constraints =  connectors.constraints | ConnectorConstraints.Drag;   
    } else 
    {
        connectors.constraints = connectors.constraints  &~ ConnectorConstraints.Drag;   
    }
    diagram.dataBind();
}
    }
  }
  },
  mounted: function() {
       let diagram = this.$refs.diagramObj.ej2Instances;
       diagram.fitToPage();
    },
}

</script>
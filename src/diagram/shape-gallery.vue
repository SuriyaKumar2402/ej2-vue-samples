<template>
<div class="control-section">
<div style="width:100%">
    <ejs-diagram  ref="diagramObject"  style='display:block' id="diagram" :width='width' :height='height' :nodes='nodes' :getNodeDefaults='getNodeDefaults'
                 :snapSettings='snapSettings'></ejs-diagram>
    </div>
<div id="action-description">
    <p>
        This sample illustrates basic built-in shapes, such as basic shapes, flow shapes, and BPMN shapes.
    </p>
</div>
<div id="description">
    <p>
        This example shows how to define built-in shapes that are used to visualize geometric information, work flow, or a business
        flow diagrams. The <code>shape</code> property can be used to define the category of built-in shapes. Additionally, the
        <code>type</code> property of the <code>shape</code> allows you to choose the type of the shape.
    </p>
    <p style="font-weight: 500">Injecting Module</p>

    <p>
        The diagram component’s features are segregated into individual feature-wise modules. To use the BPMN shapes, inject
        <code>BpmnDiagrams</code> module using
        <code>provide: { diagram: [BpmnDiagrams] }</code> method.
    </p>
    <br>
</div>
</div>
</template>

<style scoped>
.image-pattern-style {
  background-color: white;
  background-size: contain;
  background-repeat: no-repeat;
  height: 75px;
  width: calc((100% - 12px) / 3);
  cursor: pointer;
  border: 1px solid #d5d5d5;
  background-position: center;
  float: left;
}

.row {
  margin-left: 0px;
  margin-right: 0px;
}

.row-header {
  font-size: 13px;
  font-weight: 500;
}

.col-xs-6 {
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 5px;
}

.property-panel-header {
  color: rgba(0, 0, 0, 0.7);
}
</style>

<script>
import {
  DiagramComponent,
  Diagram,
  NodeModel,
  BasicShapeModel,
  Shape,
  Shapes,
  Annotation,
  BpmnDiagrams,
  FlowShapes,
  FlowShapeModel,
  TextModel
} from "@syncfusion/ej2-vue-diagrams";
import { Node, SnapConstraints } from "@syncfusion/ej2-vue-diagrams";
import {
  DropDownListComponent,
  DropDownList,
  ChangeEventArgs as DropDownChangeEventArgs
} from "@syncfusion/ej2-vue-dropdowns";

let basicShapeModel = [
  {
    shape: { type: "Text", content: "Basic Shapes" },
    style: {
      fontSize: 16,
      fill: "None",
      fontFamily: "sans-serif",
      bold: true,
      strokeWidth: 0
    }
  },
  {
    shape: { type: "Basic", shape: "Rectangle" },
    annotations: [{ content: "Rectangle" }]
  },
  {
    shape: { type: "Basic", shape: "Ellipse" },
    annotations: [{ content: "Ellipse" }]
  },
  {
    shape: { type: "Basic", shape: "Triangle" },
    annotations: [{ content: "Triangle" }]
  },
  {
    shape: { type: "Basic", shape: "Plus" },
    annotations: [{ content: "Plus" }]
  },
  {
    shape: { type: "Basic", shape: "Star" },
    annotations: [{ content: "Star" }]
  },
  {
    shape: { type: "Basic", shape: "Pentagon" },
    annotations: [{ content: "Pentagon" }]
  },
  {
    shape: { type: "Basic", shape: "Heptagon" },
    annotations: [{ content: "Heptagon" }]
  },
  {
    shape: { type: "Basic", shape: "Octagon" },
    annotations: [{ content: "Octagon" }]
  },
  {
    shape: { type: "Basic", shape: "Trapezoid" },
    annotations: [{ content: "Trapezoid" }]
  },
  {
    shape: { type: "Basic", shape: "Decagon" },
    annotations: [{ content: "Decagon" }]
  },
  {
    shape: { type: "Basic", shape: "RightTriangle" },
    annotations: [{ content: "Right Triangle" }]
  },
  {
    shape: { type: "Basic", shape: "Parallelogram" },
    annotations: [{ content: "Parallelogram" }]
  }
];

let flowShapeModel= [
  {
    shape: { type: "Text", content: "Flow Shapes" },
    style: {
      fontSize: 16,
      fill: "None",
      fontFamily: "sans-serif",
      bold: true,
      strokeWidth: 0
    }
  },
  {
    shape: { type: "Flow", shape: "Terminator" },
    annotations: [{ content: "Terminator" }]
  },
  {
    shape: { type: "Flow", shape: "Process" },
    annotations: [{ content: "Process" }]
  },
  {
    shape: { type: "Flow", shape: "Decision" },
    annotations: [{ content: "Decision" }]
  },
  {
    shape: { type: "Flow", shape: "Document" },
    annotations: [{ content: "Document" }]
  },
  {
    shape: { type: "Flow", shape: "PreDefinedProcess" },
    annotations: [{ content: "Predefined Process" }]
  },
  {
    shape: { type: "Flow", shape: "PaperTap" },
    annotations: [{ content: "Paper Tape" }]
  },
  {
    shape: { type: "Flow", shape: "DirectData" },
    annotations: [{ content: "Direct Data" }]
  },
  {
    shape: { type: "Flow", shape: "SequentialData" },
    annotations: [{ content: "Direct Data" }]
  },
  {
    shape: { type: "Flow", shape: "Sort" },
    annotations: [{ content: "Sort" }]
  },
  {
    shape: { type: "Flow", shape: "MultiDocument" },
    annotations: [{ content: "Multi-Document" }]
  },
  {
    shape: { type: "Flow", shape: "Collate" },
    annotations: [{ content: "Collate" }]
  },
  {
    shape: { type: "Flow", shape: "SummingJunction" },
    annotations: [{ content: "Summing Junction" }]
  },
  {
    shape: { type: "Flow", shape: "Or" },
    annotations: [{ content: "Or" }]
  },
  {
    shape: { type: "Flow", shape: "InternalStorage" },
    annotations: [{ content: "Internal Storage" }]
  },
  {
    shape: { type: "Flow", shape: "Extract" },
    annotations: [{ content: "Extract" }]
  },
  {
    shape: { type: "Flow", shape: "ManualOperation" },
    annotations: [{ content: "Manual Operation" }]
  },
  {
    shape: { type: "Flow", shape: "Merge" },
    annotations: [{ content: "Merge" }]
  },
  {
    shape: { type: "Flow", shape: "OffPageReference" },
    annotations: [{ content: "Off-Page Reference" }]
  },
  {
    shape: { type: "Flow", shape: "SequentialAccessStorage" },
    annotations: [{ content: "Sequential Access Storage" }]
  },
  {
    shape: { type: "Flow", shape: "Data" },
    annotations: [{ content: "Data" }]
  },
  {
    shape: { type: "Flow", shape: "Card" },
    annotations: [{ content: "Card" }]
  }
];

let bpmnShapeModel= [
  {
    shape: { type: "Text", content: "BPMN Shapes" },
    style: {
      fontSize: 16,
      fill: "none",
      fontFamily: "sans-serif",
      bold: true,
      strokeWidth: 0
    }
  },
  {
    shape: {
      type: "Bpmn",
      shape: "Event",
      event: { event: "Start", trigger: "None" }
    },
    annotations: [{ content: "Start Event" }]
  },
  {
    shape: {
      type: "Bpmn",
      shape: "Event",
      event: { event: "Intermediate", trigger: "None" }
    },
    annotations: [{ content: "Intermediate Event" }]
  },
  {
    shape: {
      type: "Bpmn",
      shape: "Event",
      event: { event: "End", trigger: "None" }
    },
    annotations: [{ content: "End Event" }]
  },
  {
    shape: { type: "Bpmn", shape: "Gateway" },
    annotations: [{ content: "Gateway" }]
  },
  {
    shape: { type: "Bpmn", shape: "Activity", activity: { activity: "Task" } },
    annotations: [{ content: "Task" }]
  },
  {
    shape: {
      type: "Bpmn",
      shape: "Activity",
      activity: {
        activity: "SubProcess",
        subProcess: {
          type: "Transaction",
          transaction: {
            success: { visible: false },
            failure: { visible: false },
            cancel: { visible: false }
          }
        }
      }
    },
    annotations: [{ content: "Transaction" }]
  },
  {
    shape: { type: "Bpmn", shape: "Message" },
    annotations: [{ content: "Message" }]
  },
  {
    shape: { type: "Bpmn", shape: "DataObject" },
    annotations: [{ content: "Data Object" }]
  },
  {
    shape: { type: "Bpmn", shape: "DataSource" },
    annotations: [{ content: "Data Source" }]
  },
  {
    shape: { type: "Bpmn", shape: "Group" },
    annotations: [{ content: "Group" }]
  },
  {
    shape: { type: "Bpmn", shape: "TextAnnotation" },
    annotations: [{ content: "Text Annotation" }]
  }
];

let diagramInstance;

export default {
  components: {
    'ejs-diagram': DiagramComponent,
    'ejs-dropdownlist': DropDownListComponent
  },
  data: function() {
    return {
      width: "100%",
      height: "800px",
      snapSettings: { constraints: SnapConstraints.None },
      nodes: getNodes(),
      //Defines the default node and connector properties
      getNodeDefaults: (obj, diagram) => {
        return obj;
      }
    };
  },
  provide: {
    diagram: [BpmnDiagrams]
  },
  mounted: function() {
    let diagram = this.$refs.diagramObject.ej2Instances;
    diagram.fitToPage();
  }
}

function getNodes() {
  var nodes1 = basicShapeModel;
  nodes1 = nodes1.concat(flowShapeModel).concat(bpmnShapeModel);
  var offsetx = 60;
  var offsety = 60;
  var count = 1;
  for (var i = 0; i < nodes1.length; i++) {
    var node = nodes1[i];
    node.width = 40;
    node.height = 40;
    if (node.shape && node.shape.type === "Flow") {
      let shapeType = (node.shape).shape;
      if (shapeType === "Process" || shapeType === "Terminator") {
        node.height = 20;
      } else if (shapeType === "Decision") {
        node.height = 35;
      } else if (
        shapeType === "Document" ||
        shapeType === "DirectData" ||
        shapeType === "MultiDocument" ||
        shapeType === "PreDefinedProcess"
      ) {
        node.height = 30;
      }
    }
    node.offsetX = offsetx;
    node.offsetY = offsety;
    if (node.shape && !(node.shape.type === "Text") && node.annotations) {
      node.annotations[0].verticalAlignment = "Top";
      node.annotations[0].offset = { y: 1 };
      node.annotations[0].margin = { top: 10 };

      offsetx = offsetx + 90;
      if (count % 10 === 0) {
        offsety = offsety + 100;
        offsetx = 60;
      }
      count++;
    }
    if (node.shape && node.shape.type === "Text") {
      offsetx = 60;
      offsety = offsety + 50;
      count = 1;
      node.width = 150;
      node.height = 100;
      node.offsetX = 90;
      if (!((node.shape).content === "Basic Shapes")) {
        node.offsetX = 90;
        node.offsetY = offsety + 50;
        offsety = offsety + 100;
      }
    }
  }
  return nodes1;
}

</script>
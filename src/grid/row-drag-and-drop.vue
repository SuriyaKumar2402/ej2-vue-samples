<template>
<div class="col-lg-12 control-section">
    <div id="action-description">
        <p>This sample demonstrates the Grid component with the row drag and drop feature. Drag and drop rows between Grids
            to move rows.
        </p>
    </div>
    <div class='e-mastertext'>Drag and Drop Rows between two Grids</div>
    <div style="display: inline-block">
        <ejs-grid id='Grid' :dataSource='srcData' :allowPaging="true" :pageSettings="pageOptions" :allowSelection="true" :allowRowDragAndDrop="true"
            :selectionSettings="selectionOptions" :rowDropSettings="srcDropOptions" width="49%">
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' width='120' textAlign='Right'></e-column>
                <e-column field='CustomerName' headerText='Customer Name' width='130'></e-column>
                <e-column field='Freight' headerText='Freight' width='120' format='C2' textAlign='Right'></e-column>
            </e-columns>
        </ejs-grid>

        <ejs-grid id='DestGrid' :dataSource='destData' :allowPaging="true" :pageSettings="pageOptions" :allowSelection="true"
            :allowRowDragAndDrop="true" :selectionSettings="selectionOptions" :rowDropSettings="destDropOptions" width="49%">
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' width='120' textAlign='Right'></e-column>
                <e-column field='CustomerName' headerText='Customer Name' width='130'></e-column>
                <e-column field='Freight' headerText='Freight' width='120' format='C2' textAlign='Right'></e-column>
            </e-columns>
        </ejs-grid>
    </div>


     <div id="description">
         <p>Grid rows can be dragged and dropped to another Grid or custom controlled by 
            enabling <code><a target="_blank" class="code"
        href="https://ej2.syncfusion.com/vue/documentation/api/grid/#allowrowdraganddrop">
        allowRowDragAndDrop
        </a></code> property. The target control on which the 
            Grid rows has to be dropped can be set by using <code><a target="_blank" class="code"
        href="https://ej2.syncfusion.com/vue/documentation/api/grid/#rowdropsettings">
        rowDropSettings->targetID</a></code> property.</p>
        <p>The Selection feature should be enabled to select the rows. Multiple rows can be selected by 
            simply clicking and dragging inside the Grid.</p>     
        <p>In this demo, we have demonstrated how to drag and drop the rows between Grids. Row drag and drop feature 
            is enabled in both the Grids. To drag and drop rows between Grids select rows, drag and drop them 
            in the adjacent Grid.
        </p>
        <p style="font-weight: 500">Injecting Module:</p>
        <p>
            Grid component features are segregated into individual feature-wise modules. To use row, drag and drop feature we need to inject
            <code>RowDD</code> into the <code>provide</code> section. Since the selection feature is required to select rows, we also need to inject the <code>Selection</code>.
        </p>
          <p>
            More information on the row drag and drop can be found in this 
            <a target="_blank" 
            href="https://ej2.syncfusion.com/vue/documentation/grid/row/row-drag-and-drop">
            documentation section</a>.
        </p>
    </div>

</div>
</template>
<!-- custom code start -->
<style scoped>
#Grid {
  float: left;
}

#DestGrid {
  float: right;
}

.e-mastertext {
  font-size: 15px;
  font-family: Roboto;
  opacity: 0.87;
  padding: 1em;
}
</style>
<!-- custom code end -->
<script lang="ts">
import { GridComponent, ColumnDirective, ColumnsDirective, RowDD, Selection, Page } from "@syncfusion/ej2-vue-grids";
import { orderDetails } from "./data-source";

export default {
  components: {
    'ejs-grid': GridComponent,
    'e-column': ColumnDirective,
    'e-columns': ColumnsDirective
  },
  data: () => {
    return {
      srcData: orderDetails,
      destData: [],
      pageOptions: { pageCount: 2 },
      selectionOptions: { type: "Multiple" },
      srcDropOptions: { targetID: "DestGrid" },
      destDropOptions: { targetID: "Grid" }
    };
  },
  provide: {
      grid: [RowDD, Page, Selection]
  }
}
</script>
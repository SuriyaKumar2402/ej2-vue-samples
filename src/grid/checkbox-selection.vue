<template>
<div class="col-lg-12 control-section">
    <div id="action-description">
        <p>This sample demonstrates the selection functionality of the Grid using checkbox selection, To select and unselect all rows use header checkbox.
         To select/unselect particular row, click the desired row.</p>
    </div>
    <div>
        <ejs-grid :dataSource="data" :allowPaging='true' :enableHover="false" :allowSelection="true" :selectionSettings="selectOptions" :editSettings='editSettings' :toolbar='toolbar'>
            <e-columns>
                <e-column type='checkbox' width='50'></e-column>
                <e-column field='OrderID' isPrimaryKey='true' headerText='Order ID' width='120' textAlign='Right'></e-column>
                <e-column field='CustomerName' headerText='Customer Name' width='150'></e-column>
                <e-column field='OrderDate' headerText='Order Date' width='130' format="yMd" textAlign='Right'></e-column>
                <e-column field='Freight' headerText='Freight' width='120' format='C2' textAlign='Right'></e-column>
                <e-column field='ShippedDate' headerText='Shipped Date' width='130' format="yMd" textAlign='Right'></e-column>
            </e-columns>
        </ejs-grid>
    </div>

     <div id="description">
        <p>
            Grid multiple selection can be achieved with help of checkbox in each row. To render checkbox in each grid row, you need
            to define column type as <code>checkbox</code> using
            <code><a target="_blank" class="code"
        href="https://ej2.syncfusion.com/vue/documentation/api/grid/columnModel/#type">
        columns->type
        </a></code> property.</p>
        <p>Selection can be persisted on all the operations using
            <code><a target="_blank" class="code"
        href="https://ej2.syncfusion.com/vue/documentation/api/grid/selectionSettingsModel/#persistselection">
        selectionSettings-> persistSelection
        </a></code> property. For persisting selection on the Grid, any one of the column should be defined as
            a primary key using
            <code><a target="_blank" class="code"
        href="https://ej2.syncfusion.com/vue/documentation/api/grid/columnModel/#isprimarykey">
        columns->isPrimaryKey
        </a></code> property.
        </p>

        <p>
            In this demo, Grid multiple selection has been enabled with selection persistance. You can also delete multiple records,
            by clicking the toolbar’s <code>Delete</code> button after selecting the checkboxes.
        </p>
        <p>
            More information on the checkbox selection configuration can be found in this
            <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/grid/selection/check-box-selection">
        documentation section</a>.
        </p>
    </div>

</div>
</template>
<script lang="ts">
import { GridComponent, ColumnDirective, ColumnsDirective, Page, Edit, Toolbar } from "@syncfusion/ej2-vue-grids";
import { orderDetails } from "./data-source";

export default {
  components: {
    'ejs-grid': GridComponent,
    'e-column': ColumnDirective,
    'e-columns': ColumnsDirective
  }, 
  data: () => {
    return {
      data: orderDetails.slice(0),
      selectOptions: { persistSelection: true },
      editSettings: { allowDeleting: true },
      toolbar: ['Delete']
    };
  },
  provide: {
      grid: [Page, Edit, Toolbar]
  }
}
</script>
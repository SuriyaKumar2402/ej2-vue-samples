<template>
<div class="col-lg-12 control-section">
    <div id="action-description">
        <p>This sample demonstrates CRUD operations in Grid. You can perform CRUD operations as follows,</p>
        <ul>
            <li><code>Add</code> -  To add new record, click Add toolbar button </li>
            <li><code>Edit</code> - To edit record, double click a cell </li>
            <li><code>Delete</code> - To delete record, click toolbar Delete button after selected a row </li>
            <li><code>Update</code>,<code>Cancel</code> - You can save or discard changes by click toolbar Update and Cancel button respectively</li>
        </ul>
    </div>
    <ejs-grid ref='grid' id='grid' :dataSource="data" :allowPaging='true' :pageSettings='pageSettings' :editSettings='editSettings' :toolbar='toolbar'>
        <e-columns>
            <e-column field='OrderID' headerText='Order ID' width='120' textAlign='Right' :isPrimaryKey='true' :validationRules='orderidrules'></e-column>
            <e-column field='CustomerID' headerText='Customer ID' width='120' :validationRules='customeridrules'></e-column>
            <e-column field='Freight' headerText='Freight' width='120' format='C2' textAlign='Right' editType='numericedit' :validationRules='freightrules'></e-column>
            <e-column field='OrderDate' headerText='Order Date' width='130' editType='datepickeredit' textAlign='Right' type='date' format='yMd'></e-column>
            <e-column field='ShipCountry' headerText='Ship Country' width='150' editType='dropdownedit' :edit='editparams'></e-column>
        </e-columns>
    </ejs-grid>

     <div id="description">
        <p> The Grid supports CRUD operations. This CRUD operations can be configured in Grid using
            <code><a target="_blank" class="code" href="https://ej2.syncfusion.com/vue/documentation/api/grid/#editsettings">
            editSettings</a></code>. Also, it has different modes to manipulate the datasource.
        </p>
        <p>The available modes are,</p>
        <ul>
            <li><code>Normal</code></li>
            <li><code>Dialog</code></li>
            <li><code>Batch</code></li>
        </ul>
        <p>
            In this demo, Batch mode is enabled for editing by defining <code><a target="_blank" class="code"
            href="https://ej2.syncfusion.com/vue/documentation/api/grid/editSettingsModel/#mode">
            editSettings.mode
            </a></code> as <code>batch</code>. You can start editing by double clicking a cell and can change the cell value.
            The edited cell will be highlighted while navigating to a new cell, so that you know which cells had been edited.
            You can bulk save the edited data to the datasource by clicking on the toolbar's <code>update</code> button or by externally
            invoking the <code><a target="_blank" class="code"
            href="https://ej2.syncfusion.com/vue/documentation/api/grid/edit/#batchsave">
            batchSave
            </a></code> method.
        </p>
        <p style="font-weight: 500">Injecting Module:</p>
        <p>
            Grid component features are segregated into individual feature-wise modules. To use editing feature, we need to inject
            <code><a target="_blank" class="code"
                href="https://ej2.syncfusion.com/vue/documentation/api/grid/edit/">
                Edit </a></code> into the <code>provide</code> section.
        </p>
    </div>
</div>
</template>
<script lang="ts">
import { GridComponent, ColumnDirective, ColumnsDirective, Toolbar, Edit, Page } from "@syncfusion/ej2-vue-grids";
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
      editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Batch' },
      toolbar: ['Add', 'Delete', 'Update', 'Cancel'],
      orderidrules: { required: true, number: true },
      customeridrules: { required: true },
      freightrules: { required: true },
      editparams: { params: { popupHeight: '300px' }},
      pageSettings: {pageCount: 5}
    };
  },
  provide: {
      grid: [Toolbar, Edit, Page]
  }
}
</script>
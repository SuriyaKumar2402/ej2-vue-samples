<template>
<div class="col-lg-12 control-section">
    <div id="action-description">
    <p>This sample demonstrates the default functionalities of the Column Menu. Click on multiple icon of each column to open the column menu.</p>
</div>

<div id="description">
    <p>
        Tree Grid has an option to show column menu while click on multiple icon of each column. The column menu has an integrated option to interact the features like sorting, filtering, column chooser and and autoFit.  
        This features can be enabled by defining the <code>showColumnMenu
        </code> as true. The default items are
        <br>
    </p>
    <ul>
            <li><code>SortAscending</code> - Sort the current column in ascending order.</li>
            <li><code>SortDescending</code> - Sort the current column in descending order.</li>
            <li><code>AutoFit</code> - Auto fit current column.</li>
            <li><code>AutoFitAll</code> - Auto fit all columns.</li>
            <li><code>ColumnChooser</code> - Choose the column visibility.</li>
            <li><code>Filter</code> - Filter option is shown to filter the current column.</li>
    </ul>
    
    <br/>

    <p>
        In this demo, Column Menu feature has enabled by defining <code>showColumnMenu
        </code> as true with sorting, filtering, column chooser and autoFit options.
    </p>
    <p>
        More information about Column Menu can be found in this <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/treegrid/columns/column-menu">documentation section</a>.
    </p>

</div>
    <div>
        <ejs-treegrid :dataSource="data" :treeColumnIndex='1' :allowPaging='true' :height='350' :showColumnMenu='true' childMapping='subtasks'
         :allowFiltering='true' :filterSettings='filterSettings' :pageSettings='pageSettings'>
            <e-columns>
                <e-column field='taskID' headerText='Task ID' textAlign='Right' width='120'></e-column>
                <e-column field='taskName' headerText='Task Name' width='190'></e-column>
                <e-column field='startDate' headerText=' Start Date' textAlign='Right' format='yMd' type='date' width='130'></e-column>
                <e-column field='duration' headerText='Duration' textAlign='Right'  width='100'></e-column>
                <e-column field='progress' headerText='Progress' textAlign='Right' width='100'></e-column>
            </e-columns>
        </ejs-treegrid>
    </div>

    
</div>
</template>
<script lang="ts">
import { TreeGridComponent, ColumnDirective, ColumnsDirective, Sort, Resize, ColumnMenu, Page, Filter } from "@syncfusion/ej2-vue-treegrid";
import { sampleData } from "./data-source";

export default {
  components: {
    'ejs-treegrid': TreeGridComponent,
    'e-column': ColumnDirective,
    'e-columns': ColumnsDirective
  },  
  data: () => {
    return {
      data: sampleData,
      filterSettings: { type: "Menu" },
      pageSettings: { pageCount: 4, pageSize: 10 }
    };
  },
  provide: {
      treegrid: [Sort, Resize, ColumnMenu, Page, Filter]
  }
}
</script>

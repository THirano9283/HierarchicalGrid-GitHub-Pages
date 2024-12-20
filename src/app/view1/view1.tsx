import { IgrColumn, IgrHierarchicalGrid, IgrHierarchicalGridModule, IgrRowIsland } from 'igniteui-react-grids';
import { useGetOrders } from '../hooks/northwind-hooks';
import 'igniteui-react-grids/grids';
import styles from './view1.module.css';
import createClassTransformer from '../style-utils';

IgrHierarchicalGridModule.register();

export default function View1() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();
  const { northwindOrders } = useGetOrders();

  return (
    <>
      <div className={classes("row-layout view-1-container")}>
        <IgrHierarchicalGrid data={northwindOrders} primaryKey="orderID" allowFiltering="true" filterMode="excelStyleFilter" className={classes("ig-typography ig-scrollbar hierarchical-grid")}>
          <IgrRowIsland childDataKey="details" primaryKey="productID" allowFiltering="true" filterMode="excelStyleFilter" className={classes("ig-scrollbar")} key={uuid()}>
            <IgrColumn field="productID" dataType="number" header="productID" sortable="true" selectable="false"></IgrColumn>
            <IgrColumn field="unitPrice" dataType="number" header="unitPrice" sortable="true" selectable="false"></IgrColumn>
            <IgrColumn field="quantity" dataType="number" header="quantity" sortable="true" selectable="false"></IgrColumn>
            <IgrColumn field="discount" dataType="number" header="discount" sortable="true" selectable="false"></IgrColumn>
          </IgrRowIsland>
          <IgrColumn field="orderID" dataType="number" header="orderID" sortable="true" selectable="false"></IgrColumn>
          <IgrColumn field="customerID" dataType="string" header="customerID" sortable="true" selectable="false"></IgrColumn>
          <IgrColumn field="employeeID" dataType="number" header="employeeID" sortable="true" selectable="false"></IgrColumn>
          <IgrColumn field="orderDate" dataType="date" header="orderDate" sortable="true" selectable="false"></IgrColumn>
          <IgrColumn field="requiredDate" dataType="date" header="requiredDate" sortable="true" selectable="false"></IgrColumn>
          <IgrColumn field="shippedDate" dataType="date" header="shippedDate" sortable="true" selectable="false"></IgrColumn>
          <IgrColumn field="shipVia" dataType="number" header="shipVia" sortable="true" selectable="false"></IgrColumn>
          <IgrColumn field="freight" dataType="number" header="freight" sortable="true" selectable="false"></IgrColumn>
          <IgrColumn field="shipName" dataType="string" header="shipName" sortable="true" selectable="false"></IgrColumn>
          <IgrColumn field="shipAddress.street" dataType="string" header="shipAddress street" sortable="true" selectable="false"></IgrColumn>
          <IgrColumn field="shipAddress.city" dataType="string" header="shipAddress city" sortable="true" selectable="false"></IgrColumn>
          <IgrColumn field="shipAddress.region" dataType="string" header="shipAddress region" sortable="true" selectable="false"></IgrColumn>
          <IgrColumn field="shipAddress.postalCode" dataType="string" header="shipAddress postalCode" sortable="true" selectable="false"></IgrColumn>
          <IgrColumn field="shipAddress.country" dataType="string" header="shipAddress country" sortable="true" selectable="false"></IgrColumn>
        </IgrHierarchicalGrid>
      </div>
    </>
  );
}
